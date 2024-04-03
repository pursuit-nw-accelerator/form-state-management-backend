const app = require('./app');

// read envvars from .env file
require('dotenv').config();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
