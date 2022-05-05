// ./server.js

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");

require('dotenv').config();
require('./config/database');

const app = express();
app.use(cors());

app.use(logger('dev'));
// there's no need to mount express.urlencoded middleware
// why is that?
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post("/send_mail", cors(), async (req, res) => {
	let { name, user, description, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15 } = req.body
	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: 587,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	})

	await transport.sendMail({
		from: process.env.MAIL_USER,
		to: `${user}`,
		subject: `How To Make: ${name}`,
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Instructions</h2>
        <p>${description}</p>
		</hr>
		<ul>
			<li>${item1}</li>
			<li>${item2}</li>
			<li>${item3}</li>
			<li>${item4}</li>
			<li>${item5}</li>
			<li>${item6}</li>
			<li>${item7}</li>
			<li>${item8}</li>
			<li>${item9}</li>
			<li>${item10}</li>
			<li>${item11}</li>
			<li>${item12}</li>
			<li>${item13}</li>
			<li>${item14}</li>
			<li>${item15}</li>
		</ul>
    
        <p>Enjoy, Random Drink App</p>
         </div>
    `
	})
})


// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/notes', ensureLoggedIn, require('./routes/api/notes'));

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