const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', async (req, res) => {
  fs.readFile('./home.html', 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Sorry, out of order');
    } else {
      res.send(html);
    }
  });
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))