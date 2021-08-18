const express = require('express');
const bodyParser = require('body-parser');
const PeopleRoute = require('./routes/people');


const app = express();

app.use(bodyParser.json());
app.use('/people', PeopleRoute);

app.get('/', function (req, res) {
   res.send('SERVER STARTED!!!')
 });

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });