var keystone = require('keystone');
var Types = keystone.Field.Types;





var CaveScene = new keystone.List('CaveScene', {
  map: {name: 'title'},
  singular: 'Cave Scene',
  plural: 'Cave Scenes',
  autokey: {path: 'slug', from: 'title', unique: true}
});

CaveScene.add({
  title: {type: String, required: true},
  image: {type: Types.CloudinaryImage},
  description: {type: Types.Html, wysiwyg: true, height: 200}

//Create a 'cavegrid' model here and add it

});

CaveScene.register();
