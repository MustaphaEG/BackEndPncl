const MTopics = require("../Model/Topics");

module.exports =  class {

    constructor(){

    }

   async getRelatedQuestions(Topic){
        console.log(Topic);
        return await MTopics.aggregate([
            {$match: {$text: {$search: Topic}}},
            {$unwind : "$Path2Root"},
                {
                $lookup:{
                    from: "questions",
                    localField: "Path2Root",
                    foreignField: "idTopic",
                    as: "MatchedQue"
                }
            },
            {$unwind : "$MatchedQue"},
            {$group: {_id: "$MatchedQue._id",  Que : { $first: '$MatchedQue' }, QueCount:{$sum:1}}},
            //{$project : {"MatchedQue": 1 }},
            {$sort: {QueCount: -1}},
            {$limit: 10}
        ]);
    }

};

/*
{
    $project : { answers_count: {$size: { "$ifNull": [ "$answers", [] ] } } }
}, 
{   
    $sort: {"answers_count":1} 
}*/
