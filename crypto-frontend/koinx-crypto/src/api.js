const BASE_URL = "http://localhost:3000/api";

export const fetchCryptoStats = async (coin) => {
  const response = await fetch(`${BASE_URL}/stats?coin=${coin}`);
  return response.json();
};

export const fetchDeviation = async (coin) => {
  const response = await fetch(`${BASE_URL}/deviation?coin=${coin}`);
  return response.json();
};
