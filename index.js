/* global hexo */
'use strict';

const path = require('path')

let config = hexo.config.podcast = Object.assign({
  type: 'rss2',
  limit: 20,
  hub: '',
  content: true,
}, hexo.config.podcast)

// Actually Apple requires the feed to be always rss2 (see https://github.com/simplepie/simplepie-ng/wiki/Spec:-iTunes-Podcast-RSS)
config.type = 'rss2'

// Set default feed path
// Notice: the default value is 'podcast.xml' to avoid accidentally overwrite 'rss2.xml' or 'atom.xml'
if (!config.path) {
  config.path = 'podcast.xml'
}

// Add extension name if don't have
if (!path.extname(config.path)) {
  config.path += '.xml'
}

hexo.extend.generator.register('podcast', require('./lib/generator'))
