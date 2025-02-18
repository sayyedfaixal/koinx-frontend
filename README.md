# Crypto Stats Application 🌟

This is a full-stack application that provides real-time cryptocurrency statistics. It consists of a **frontend** built with Vite.js and Tailwind CSS, and a **backend** built with Node.js and MongoDB.

## Features 🚀

- **Backend**:

  - Fetches cryptocurrency data (price, market cap, 24-hour change) using the CoinGecko API every 2 hours.
  - Provides APIs for fetching the latest data and calculating price deviation.
  - Data is stored in MongoDB.

- **Frontend**:
  - Displays cryptocurrency stats for Bitcoin, Ethereum, and Matic automatically.
  - Fully responsive design using Tailwind CSS.

## Project Structure 🏗️

```
crypto-stats/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   ├── cron.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── public/
│   ├── tailwind.config.js
│   ├── package.json
│   ├── index.html
└── README.md
```

## Setup Instructions 🛠️

### Backend

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

## Deployment 🌐

### Backend Deployment

- Use platforms like **Render**, **Heroku**, or **AWS**.
- Add environment variables for `MONGO_URI` and `PORT` in the platform's settings.

### Frontend Deployment

- Use platforms like **Vercel** or **Netlify**.
- Update the backend URL in the frontend code (e.g., `http://your-backend-url/api`).

## APIs 🖥️

### `/stats`

- Method: GET
- Query Parameters: `coin` (e.g., `bitcoin`, `ethereum`, `matic-network`)
- Example Response:
  ```json
  {
    "price": 40000,
    "marketCap": 800000000,
    "24hChange": 3.4
  }
  ```

### `/deviation`

- Method: GET
- Query Parameters: `coin` (e.g., `bitcoin`, `ethereum`, `matic-network`)
- Example Response:
  ```json
  {
    "deviation": 4082.48
  }
  ```

## Technologies Used 💻

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Cron
- **Frontend**: Vite.js, React, Tailwind CSS

## License 📄

This project is licensed under the MIT License.

---

Feel free to contribute and make this project better! 😄
#
