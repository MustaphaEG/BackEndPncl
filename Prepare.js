const fs = require('fs');
const csv = require('csv-parser');
const MTopics = require("./Model/Topics");
const MQuestions = require("./Model/Questions");



module.exports = {

    Que: function(){
        fs.createReadStream('./Data/Questions.csv')
        .pipe(csv())
        .on('data', async (row) => {

           for(let queAnn in row){
               const Que = row[queAnn] ;
                if(Que== "" || queAnn == "Question number")
                continue;

                //const FilterdStr    = Que.replace(...uselessWords, '')
                const MatchedTopics = await MTopics.aggregate([
                    {
                      $set: {
                        matchedCount: {
                          $size: {
                            $setIntersection: ["$keyWords", Que.split(" ")]
                          }
                        }
                      }
                    },
                    {
                      $sort: {
                        matchedCount: -1
                      }
                    },
                    {$limit: 1}
                  ]);

                  let IQue = new MQuestions({
                      _id: Que,
                      idTopic: MatchedTopics[0]._id,
                      annotation: Que
                  });
                  try{
                    await IQue.save();
                  } catch{

                  }
                  

            }
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
    },
    Topics: function(){
        fs.createReadStream('./Data/Topics.csv')
        .pipe(csv())
        .on('data', async (row) => {
         
          let Path2Root = [];
          for(let topicLvl in row){
              if(row[topicLvl] == "")
              continue;
      
              Path2Root.push(row[topicLvl]);
              let keyWords = [];
              Path2Root.forEach(function(El){
                  keyWords.push(...El.split(" "));
              })
      
              try{
                  const TopicsModel = new MTopics({
                      _id: row[topicLvl],
                      Path2Root,
                      keyWords
                  });
                  await TopicsModel.save();
                  
              }catch{
                 
              }
      
              
      
          }
        })
        .on('end', () => {
          console.log('CSV file successfully processed');
         
        });

    }

}

