const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Endpoint to get the current favorite counts for all products
app.get('/api/favorites', (req, res) => {
  fs.readFile('favorites.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data' });
    }
    const favorites = JSON.parse(data);
    res.json(favorites);
  });
});

// Endpoint to update the favorite count for a specific product
app.post('/api/favorites/:productId', (req, res) => {
  const { productId } = req.params;
  const { count } = req.body;

  fs.readFile('favorites.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data' });
    }

    let favorites = JSON.parse(data);
    favorites[productId] = count;

    fs.writeFile('favorites.json', JSON.stringify(favorites), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing data' });
      }
      res.json({ message: 'Favorite count updated', productId, count });
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});