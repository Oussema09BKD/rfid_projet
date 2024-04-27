import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    axios.get("/data").then((response) => {
      setHistoryData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>History</h1>
      <ul>
        {historyData.map((data) => (
          <li key={data._id}>
            <p>Reader: {data.reader}</p>
            <p>Nom: {data.nom}</p>
            <p>Description: {data.description}</p>
            <p>Etat: {data.etat}</p>
            <p>Timestamp: {data.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
