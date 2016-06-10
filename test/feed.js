var assert = require("assert"),
  Feed = require('../lib/feed.js')

describe('RSS 2.0', function () {

  it('should return a standard feed', function () {

    var feed = new Feed({
      title: 'Feed Title',
      description: 'This is my personnal feed!',
      link: 'http://example.com/',
      image: 'http://example.com/image.png',
      copyright: 'All rights reserved 2013, John Doe',
      updated: new Date(2013, 06, 14), // optional, default = today

      webfeeds: {
        accentColor: '#969b34',
        analytics: '123abc',
        cover: 'http://example.com/images/cover.jpg',
        icon: 'http://example.com/images/icon.jpg',
        logo: 'http://example.com/images/logo.svg'
      },

      author: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        link: 'https://example.com/johndoe'
      }
    });

    var output = '';

    output += '<?xml version="1.0" encoding="utf-8"?>\n';
    output += '<rss version="2.0" xmlns:webfeeds="http://webfeeds.org/rss/1.0">\n';
    output += '    <channel>\n';
    output += '        <title>Feed Title</title>\n';
    output += '        <description>This is my personnal feed!</description>\n';
    output += '        <link>http://example.com/</link>\n';
    output += '        <lastBuildDate>'+ feed.updated.toUTCString() +'</lastBuildDate>\n';
    output += '        <image>\n';
    output += '            <title>Feed Title</title>\n';
    output += '            <url>http://example.com/image.png</url>\n';
    output += '            <link>http://example.com/</link>\n';
    output += '        </image>\n';
    output += '        <webfeeds:cover image="http://example.com/images/cover.jpg"/>\n';
    output += '        <webfeeds:icon>http://example.com/images/icon.jpg</webfeeds:icon>\n';
    output += '        <webfeeds:logo>http://example.com/images/logo.svg</webfeeds:logo>\n';
    output += '        <webfeeds:accentColor>#969b34</webfeeds:accentColor>\n';
    output += '        <webfeeds:analytics id="123abc" engine="GoogleAnalytics"/>\n';
    output += '        <copyright>All rights reserved 2013, John Doe</copyright>\n';
    output += '        <generator>Feed for Node.js</generator>\n';
    output += '    </channel>\n';
    output += '</rss>';

    var data = feed.render('rss-2.0');

    assert.equal(data, output);
  });

});
