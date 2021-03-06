// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var cons = require('consolidate');
var nunjucks = require('nunjucks');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'High-Vis Portal',
	'brand': 'High-Vis Portal',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.html',
	'custom engine': cons.nunjucks,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cloudinary config': 'cloudinary://346188379452821:sZ6tgmf-QCamMTVRq43f8UkJ-uQ@pjj007',
	'mongo' : process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/HV-Portal',
	'cloudinary config' : 'cloudinary://346188379452821:sZ6tgmf-QCamMTVRq43f8UkJ-uQ@pjj007'


});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Add a Cave Scene Nav bar
var cavescenes = new keystone.List('cavescenes');
cavescenes.register();

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
	cavescenes: 'cavescenes'
});


// Configure the cloudinary account
keystone.set('cloudinary config', 'cloudinary://346188379452821:sZ6tgmf-QCamMTVRq43f8UkJ-uQ@pjj007' );
keystone.set('cloudinary prefix', 'keystone');
keystone.set('cloudinary secure', true);
keystone.set('cloudinary folders', true);

keystone.set('cloudinary config', 'cloudinary://346188379452821:sZ6tgmf-QCamMTVRq43f8UkJ-uQ@pjj007' );


// Start Keystone to connect to your database and initialise the web server



keystone.start();
