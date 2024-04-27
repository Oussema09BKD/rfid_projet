const express = require("express");
const mongoose = require("mongoose");
const mqtt = require("mqtt");
require("dotenv").config();

const TableDataModel = require("./models/databaseModel");

const app = express();
app.use(express.json());

// Allow requests from any origin (you might want to restrict this in a production environment)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const client = mqtt.connect(process.env.MQTT_BROKER);

client.on("connect", function () {
  console.log("Connected to MQTT broker");
  client.subscribe("pn532/rfid_tags");
});

client.on("message", function (topic, message) {
  console.log("Received message:", message.toString());

  try {
    const data = JSON.parse(message.toString());
    console.log("Parsed data:", data);

    if (Array.isArray(data)) {
      const newData = new TableDataModel({ table: data });
      newData.save()
        .then(() => console.log("Data saved to MongoDB:", data))
        .catch((err) => console.log("Error saving data to MongoDB:", err));
    } else {
      throw new Error("Invalid message format. Expected an array of objects.");
    }
  } catch (error) {
    console.log("Error processing message:", error.message);
  }
});

// Route to get all data
app.get("/data", async (req, res) => {
  try {
    const data = await TableDataModel.findOne().sort({ timestamp: -1 });
    res.json(data.table); // Send only the 'table' array to the front end
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));
