const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  _id:{
    type: String
  },
  idTopic: {
    type: String,
    default: "Science",
  },
  annotation: {
    type: String
  }
});


module.exports =  mongoose.model("questions", QuestionSchema);