'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Post = mongoose.model('Post');

/**
 * Globals
 */
var post;

/**
 * Unit tests
 */
describe('Post Model Unit Tests:', function() {
	beforeEach(function(done) {

	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return post.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			post.name = '';

			return post.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Post.remove().exec();

		done();
	});
});