import React, { useState } from "react";
import { fetchCryptoStats } from "../api";

const CryptoStats = () => {
  const [coin, setCoin] = useState("bitcoin");
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  const handleFetchStats = async () => {
    try {
      const data = await fetchCryptoStats(coin);
      setStats(data);
      setError("");
    } catch (err) {
      setError("Error fetching data. Please try again.");
    }
  };

  return (
    <div>
      <h2>Crypto Stats</h2>
      <select value={coin} onChange={(e) => setCoin(e.target.value)}>
        <option value="bitcoin">Bitcoin</option>
        <option value="matic-network">Matic</option>
        <option value="ethereum">Ethereum</option>
      </select>
      <button onClick={handleFetchStats}>Fetch Stats</button>
      {stats && (
        <div>
          <p>Price: ${stats.price}</p>
          <p>Market Cap: ${stats.marketCap}</p>
          <p>24h Change: {stats["change24h"]}%</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CryptoStats;
