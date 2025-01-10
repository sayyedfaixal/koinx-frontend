import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"; // Make sure Tailwind is imported

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coins = ["bitcoin", "matic-network", "ethereum"];
        const dataPromises = coins.map((coin) =>
          axios.get(`http://localhost:3000/api/stats?coin=${coin}`)
        );
        const responses = await Promise.all(dataPromises);
        setCoinsData(responses.map((response) => response.data));
      } catch (err) {
        setError("Error fetching data. Please try again.");
      }
    };
    fetchCoinData();
    const interval = setInterval(fetchCoinData, 2 * 60 * 60 * 1000); // Fetch every 2 hours
    return () => clearInterval(interval); // Clear interval on cleanup
  }, []);
  console.log("Coin Data --->", coinsData);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-lg">
        {coinsData.length > 0 ? (
          coinsData.map((coin, index) => (
            <div
              key={index}
              className="p-6 bg-blue-100 rounded-lg shadow-md text-center"
            >
              <h2 className="text-xl font-semibold text-pink-600">
                {coin.coin.toUpperCase()}
              </h2>
              <p className="mt-4 text-lg">
                <span className="font-bold">Price:</span> ${coin.price}
              </p>
              <p className="mt-2 text-lg">
                <span className="font-bold">Market Cap:</span> $
                {coin.marketCap.toLocaleString()}
              </p>
              <p className="mt-2 text-lg">
                <span className="font-bold">24h Change:</span>{" "}
                {coin.change24h.toFixed(2)}%
              </p>
            </div>
          ))
        ) : error ? (
          <p className="text-red-500 font-semibold">{error}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
