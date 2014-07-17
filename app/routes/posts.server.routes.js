'use strict';

module.exports = function(app) {
	var posts = require('../../app/controllers/posts');

	// Posts Routes
	app.route('/posts')
		.get(posts.list)
		.post(posts.create);

	app.route('/posts/:postId')
		.get(posts.read)
		.put(posts.update)
		.delete(posts.delete);

	// Finish by binding the Post middleware
	app.param('postId', posts.postByID);
};