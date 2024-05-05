const express = require("express");
const mongoose = require("mongoose");
const mqtt = require("mqtt");
require("dotenv").config();

const TableDataModel = require("./models/databaseModel");
const HistoryDataModel = require("./models/historyModel");

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
  client.subscribe("rfid/tag");
});

// client.on("message", function (topic, message) {
//   console.log("Received message:", message.toString());
//   let jsonString = message.toString();
//   try {
//     let data = JSON.parse(jsonString);
//   console.log("Received data:", data);

//   if (data && data.reader && data.tag_address) {
//     const newData = new TableDataModel(data);
//     newData.save()
//       .then(() => console.log("Data saved to MongoDB:", data))
//       .catch((err) => console.error("Error saving data to MongoDB:", err));
// } else {
//   console.error("Invalid message format. Expected an object with 'reader' and 'tag_address' properties.");
// }

//   } catch (error) {
//     console.log("Error processing message:", error.message);
//   }
// });

//Route to get all data
client.on("message", async function (topic, message) {
  console.log("Received message:", message.toString());
  let jsonString = message.toString();
  try {
    let newData = JSON.parse(jsonString);
    console.log("Received data:", newData);

    if (newData) {
      // Find the existing data in the collection based on reader
      const existingData = await TableDataModel.findOne({ reader: newData.reader });
      if (existingData) {
        // Compare tag_address
        if (existingData.tag_address !== newData.tag_address && newData.tag_address != "") {
          existingData.etat = "F";
          await existingData.save();
          console.log("Data updated in MongoDB:", existingData.toObject());
          // Save the updated data to history
          const historyData = new HistoryDataModel(newData);
          historyData.etat = existingData.etat;
          await historyData.save();
          console.log("Data saved to history:", historyData.toObject());
        }
        
       else if (existingData.tag_address == newData.tag_address && (existingData.etat == "F" || existingData.etat == "A") && newData.tag_address != "") {
          existingData.etat = "p";
          await existingData.save();
          console.log("Data updated in MongoDB:", existingData.toObject());
          // Save the updated data to history
          const historyData = new HistoryDataModel(newData);
          historyData.etat = existingData.etat;
          await historyData.save();
          console.log("Data saved to history:", historyData.toObject());
        } 
     else  {
  existingData.etat = "A";
  console.log(existingData.etat);
  await existingData.save();
  console.log("Data updated in MongoDB:", existingData.toObject());
  // Save the updated data to history
  const historyData = new HistoryDataModel(newData);
  historyData.etat = existingData.etat;
  await historyData.save();
  console.log("Data saved to history:", historyData.toObject());
}

       
      } else {
        // Save newData to the collection
        const jsonData = new TableDataModel(newData);
        await jsonData.save();
        console.log("Data saved to MongoDB:", jsonData.toObject());
      }
    } else {
      console.error("Invalid message format. Expected an object with 'reader' and 'tag_address' properties.");
    }

  } catch (error) {
    console.log("Error processing message:", error.message);
  }
});

app.get("/data", async (req, res) => {
  try {
    const data = await TableDataModel.find();
    res.json(data); // Send only the 'table' array to the front end
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
