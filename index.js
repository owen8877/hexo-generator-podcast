/* global hexo */
'use strict';

var assign = require('object-assign');
var pathFn = require('path');

var config = hexo.config.podcast = assign({
  type: 'rss2',
  limit: 20,
  hub: '',
  content: true
}, hexo.config.podcast);

var type = config.type.toLowerCase();

// Set default feed path
if (!config.path) {
  config.path = config.type + '.xml';
}

// Add extension name if don't have
if (!pathFn.extname(config.path)) {
  config.path += '.xml';
}

hexo.extend.generator.register('podcast', require('./lib/generator'));
