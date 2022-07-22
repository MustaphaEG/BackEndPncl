const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  Path2Root: {
    type: Array,
    default: [],
  },
  keyWords: {
    type: Array,
    default: [],
  }

});

TopicSchema.index({ Path2Root: "text" }); 
module.exports =  mongoose.model("topics", TopicSchema);;