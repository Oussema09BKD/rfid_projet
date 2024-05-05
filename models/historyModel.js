const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the schema for your data
const historyDataSchema = new mongoose.Schema({
  
  reader: {
    type: Number,
    required: true,
  },
  tag_address: {
    type: String,
    
  },
  etat:{
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  
});

// Create a model based on the schema
const HistoryDataModel = mongoose.model("HistoryData", historyDataSchema);

module.exports = HistoryDataModel;
