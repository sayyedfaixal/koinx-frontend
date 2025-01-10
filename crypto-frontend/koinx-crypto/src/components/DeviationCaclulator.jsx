import React, { useState } from "react";
import { fetchDeviation } from "../api";

const DeviationCalculator = () => {
  const [coin, setCoin] = useState("bitcoin");
  const [deviation, setDeviation] = useState(null);
  const [error, setError] = useState("");

  const handleFetchDeviation = async () => {
    try {
      const data = await fetchDeviation(coin);
      setDeviation(data.deviation);
      setError("");
    } catch (err) {
      setError("Error fetching data. Please try again.");
    }
  };

  return (
    <div>
      <h2>Price Deviation</h2>
      <select value={coin} onChange={(e) => setCoin(e.target.value)}>
        <option value="bitcoin">Bitcoin</option>
        <option value="matic-network">Matic</option>
        <option value="ethereum">Ethereum</option>
      </select>
      <button onClick={handleFetchDeviation}>Calculate Deviation</button>
      {deviation && <p>Deviation: {deviation}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeviationCalculator;
