---
templateKey: blog-post
title: Adding an RSS Feed to your Gatsby Site - Update- allowing autodiscovery
date: 2020-07-29T14:05:10.000Z
featuredpost: true
featuredimage: /img/rss-feed-gatsby-update2.png
description: An RSS (really simple syndication) feed allows users using an RSS reader to subscribe to content and be notified when new content is added to a site. I've now added autodiscovery capability to my RSS feed.
tags:
  - blogging
  - coding
  - rss feed
  - web development
---

To see my original post on adding an RSS feed to your Gatsby Site, click [here](https://ilyana.dev/blog/2020-07-13-adding-rss-feed/).

To see my post on limiting the number of items in your RSS feed, click [here](https://ilyana.dev/blog/2020-07-15-adding-rss-feed-update/).

If you use an RSS Reader...
--

You can add my blog by pasting the following URL into your reader: <https://ilyana.dev/rss.xml>

Adding Autodiscovery
--

Adding RSS autodiscovery to a Gatsby blog that already has an RSS feed requires minimal effort - the addition of a single HTML element.

[Here](https://github.com/ilyanaDev/ilyanaDevBlog/commit/8c2045c91351104b7aa52a07f8e44632d141de35) is my GitHub commit showing the change I had to make to enable RSS autodiscovery. You'll also notice a slight change to a blog post; this is merely a typo correction and is irrelevant to the RSS.

Resources
--

It took me awhile to figure out how to do this, and I had to examine a number of sources, but here are the ones I found most useful:

* Pete Freitag succinctly provides the requisite code [here](https://www.petefreitag.com/item/384.cfm).
* I also found [a pretty useful Stack Overflow thread](https://stackoverflow.com/questions/10809673/rss-auto-discovery).
* To test whether your autodiscovery works now, it's useful to have an RSS Reader. I used the Chrome extension [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp?hl=en), which was very easy to install and has a pretty nice UI for the purpose of testing my own RSS feed.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
