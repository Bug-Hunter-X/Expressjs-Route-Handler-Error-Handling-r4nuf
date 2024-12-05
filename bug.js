const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Sends the error to the client. This may leak sensitive info
      return res.status(500).json({ error: err.message });
    }
    res.json(user);
  });
});