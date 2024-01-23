const express = require('express');
const routes = require('./routes/client/index.route');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('views', './views');
app.set('view engine', 'pug');

routes(app);

app.listen(port, () => {
  console.log('Listened, ', port);
});
