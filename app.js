const express = require('express');

const app = express();

app.route('/').get((req, res) => {
  res.send('its\' work');
})

app.listen(process.env.PORT || 3000);