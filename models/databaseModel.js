const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the schema for your data
const jsonDataSchema = new mongoose.Schema({
  table: [
    {
  reader: {
    type: Number,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  etat: {
    type: String,
    required: true,
  },},],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a model based on the schema
const JsonDataModel = mongoose.model("JsonData", jsonDataSchema);

module.exports = JsonDataModel;
