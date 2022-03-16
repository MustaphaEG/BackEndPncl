const express = require("express");
const db = require("./DB/DB");
const CTopics = require("./Controller/Topic")
const MQuestions = require("./Model/Questions");
const Prepare = require("./Prepare")

const uselessWords = [
    ",", "*", "Define", "in", "on", "at", "of", "from", "as","the", 
    "state", "explain", "describe","contents", "roles", "and",  "or"
];




(async()=>{
    console.log("******************************")
    //console.log((await MTopics.remove()));
    console.log("ssssssssssssssssssssssss")
})();


let app = express();




app.get("/PrepareQue", (req, res)=>{
    Prepare.Que();
    res.end("Prepared Questions")
})


app.get("/PrepareTopics", (req, res)=>{
    Prepare.Topics();
    res.end("Prepared Topics")
})


app.get("/search", async (req, res) => {
    res.json(await (new CTopics()).getRelatedQuestions(req.query.q || "Default Search word"));

});

app.get("/", (req, res) =>  {
    res.sendFile(__dirname + '/Static/index.html');

});


app.listen(8080);


/*
(async ()=>{
    console.log((await (new CTopics()).getRelatedQuestions()));
})();*/
//Prepare.Que();