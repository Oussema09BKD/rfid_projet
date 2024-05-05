const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the schema for your data
const jsonDataSchema = new mongoose.Schema({
  
  reader: {
    type: Number,
    required: true,
  },
  tag_address: {
    type: String,
  },
  etat:{
    type: String,
    default: "p",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  
});

// Create a model based on the schema
const JsonDataModel = mongoose.model("JsonData", jsonDataSchema);

module.exports = JsonDataModel;
