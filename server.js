// ./server.js

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');

const app = express();
app.use(cors())

app.use(logger('dev'));
// there's no need to mount express.urlencoded middleware
// why is that?
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
app.use('/api/notes', require('./routes/api/notes'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const PORT = process.env.PORT || 3001;

// // Mongoose Connection has access to config -> database.js via dotenv
// require('./config/database.js');

// const app = express();


// app.use(logger('dev'));
// app.use(express.json());
// app.use(favicon(path.join(__dirname,'build','favicon.ico')));
// app.use(express.static(path.join(__dirname,'build')));

// // path.join allows routes to work on any computer type windows, mac, linux, ...etc

// // API

// app.use('/api/users', require('./routes/api/users'))

// // Catch All API

// app.get('/*', (req,res) => {
//     res.sendFile(path.join(__dirname,'build','index.html'))
// })

// app.listen(PORT, () => {
//     console.log(`Backend is listening on ${PORT}`)
// })