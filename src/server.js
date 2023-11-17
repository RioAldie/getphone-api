const express = require('express');
const router = require('./routes/phoneRouter');
const app = express();

const port = process.env.PORT || 7000;

app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log('server running at http://localhost:' + port);
});

module.exports = app;
