---
templateKey: blog-post
title: Adding an RSS Feed to your Gatsby Site - Update- limiting items in feed
date: 2020-07-15T14:05:10.000Z
featuredpost: false
featuredimage: /img/rss-feed-gatsby-update.png
description: An RSS (really simple syndication) feed allows users using an RSS reader to subscribe to content and be notified when new content is added to a site. I've now limited my RSS feed to 10 items.
tags:
  - blogging
  - coding
  - rss feed
---

To see my original post on adding an RSS feed to your Gatsby Site, click [here](https://ilyana.dev/blog/2020-07-13-adding-rss-feed/)

If you use an RSS Reader...
--

You can add my blog by pasting the following URL into your reader: <https://ilyana.dev/rss.xml>

Limiting your Feed to n Items
--

Essentially, if you want to make any edits to your feed, instead of simply coding

```js
`gatsby-plugin-feed`,
```

into your gatsby-config.js file, you need to instead add a whole section with curly braces starting with

```js
resolve: `gatsby-plugin-feed`,
```

Now, you can change the number of items in your feed by setting a limit. You can also change things like the feed's title and where the items come from (your blog page, the "About" page, etc.).

This process is explained if you scroll down [this tutorial](https://www.gatsbyjs.org/docs/adding-an-rss-feed/) from Gatsby. You can also check out the [changes](https://github.com/ilyanaDev/ilyanaDevBlog/commit/9e3847153d142beb433175c5b1818e45cbb0cb7b) I made to implement this with my own blog.

With the above changes, I ran into the problem that the feed was only showing 8 or so blog posts instead of 10 (even though I'd set a limit of 10). This is because the number of items included things like my [About](https://ilyana.dev/about) page. I could have solved this by simply increasing the limit of items until the desired 10 blog posts displayed alongside the additional content. However, I wanted a more streamlined feed, so instead I specified that my RSS feed items should come only from my blog. You can see the small change I had to make to implement this [here](https://github.com/ilyanaDev/ilyanaDevBlog/commit/188d79f23968ae217edfc8c93222b08b8882534d).

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
