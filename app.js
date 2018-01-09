const express = require('express');
const morgan  = require('morgan');
const app = express();


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/kittens', (req, res) => res.send('Hello Kittens!'))

// Middleware serving static assets
app.use(express.static('public'))

// Middleware morgan enabled here
app.use(morgan('tiny'))

// Handle Cross-origin request (CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

app.get('*', function(req, res, next) {
	res.status(404).sendFile('error.html', {root: 'public'});
});

// Listening on port 3000. Node will display the following message if the server is running.
app.listen(3000, ()=>{
    console.log("I am listening");
});