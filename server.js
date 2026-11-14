//server.js
const express = require('express');
const foodRepository = require('./foodRepository');

const app = express();
const PORT = process.env.PORT || 3000;

//Configue express to use JSON
app.use(express.json());

app.use((req, res, next) => {
    console.log("[server debug] Incoming request:", req.method, req.url);
    next();
});

 // Define teh GET / route to return using singleton
 app.get("/foods", (req, res) => {
    console.log('[Route Debug] Processing GET /foods request');
    const foods = foodRepository.getAllFoods();
    res.status(200).json(foods);
  });

  //404 error handling middleware
  app.use((req, res, next) => {
    console.log('[Route Debug] 404 Not Found for request:', req.method, req.url);
    res.status(404).json({ error: 'Not Found' });
  });

  // start the server
  app.listen(PORT, () => {
    console.log(`[Server] Server is running on port ${PORT}`);
  });

  module.exports = app;