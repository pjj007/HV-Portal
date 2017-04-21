var keystone = require('keystone');


exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'scene';

  // Load Scenes
  view.query('cavescenes', keystone.list('CaveScene').model.find());

  // Render view
  view.render('cavescenes');
}
