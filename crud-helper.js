// Connect to the Database

require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Note = require('./models/note');

// Local variables will come in handy for holding retrieved documents

let user, users, note;