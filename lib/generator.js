'use strict';

var nunjucks = require('nunjucks');
var env = new nunjucks.Environment();
var pathFn = require('path');
var fs = require('fs');
var xmlescape = require('xml-escape');
var S = require('string');

env.addFilter('uriencode', function(str) {
  return encodeURI(str);
});

env.addFilter('strip_html', function(str) {
  if (!str || str == "") return ""
  return S(str).stripTags().s;
});

env.addFilter('xml_escape', function(str) {
  if (!str || str == "") return ""
  return xmlescape(str);
});

env.addFilter('date_to_rfc822', function(str) {
  return (new Date(str)).toUTCString();
});

var rss2TmplSrc = pathFn.join(__dirname, '../rss2.xml');
var rss2Tmpl = nunjucks.compile(fs.readFileSync(rss2TmplSrc, 'utf8'), env);

module.exports = function(locals) {
  var config = this.config;
  var tags = locals.tags;
  var categories = locals.categories;
  var feedConfig = config.podcast;
  var template = rss2Tmpl;

  var posts = locals.posts.sort('-date');
  if (feedConfig.limit) posts = posts.limit(feedConfig.limit);

  var url = config.url;
  if (url[url.length - 1] !== '/') url += '/';

  var podcast_posts = categories.findOne({name: 'podcast'}).posts.sort('date', -1).data

  var xml = template.render({
    config: config,
    url: url,
    posts: posts,
    tags: tags,
    categories: categories,
    podcast_posts: podcast_posts,
    feed_url: config.root + feedConfig.path
  });

  return {
    path: feedConfig.path,
    data: xml
  };
};
