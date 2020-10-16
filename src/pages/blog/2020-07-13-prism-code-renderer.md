---
templateKey: blog-post
title: Prism Code Renderer
date: 2020-07-13T14:07:10.000Z
featuredpost: true
featuredimage: /img/prism-code-renderer.png
description: The code displayed on my blog now looks very aesthetic. Wondering why? I installed the Prism code renderer.
tags:
  - blogging
  - coding
  - web development
---

What Prism Does
--

According to [their website](https://prismjs.com/), Prism is a lightweight, extensible syntax highlighter. Essentially, it makes code look nice. There are also several themes you can choose from, depending on personal preference.

Before I added Prism to my site, any code I displayed looked like this:

![Bad Code](/img/pre-prism-code.png "Bad Code")

Ugly, right? Once I added prism to my blog, things looked a whole lot better:

![Good Code](/img/post-prism-code.png "Good Code")

After a bit more adjustment, the code looked like this:

![Great Code](/img/good-post-prism-code.png "Great Code")

How to Make it Work
--

To install Prism, assuming you're using Gatsby, you'll want to navigate to your website's root file in the command line and enter:

``` powershell

npm install --save gatsby-transformer-remark gatsby-remark-prismjs prismjs

```

You'll also want to make the changes detailed [here](https://github.com/ilyanaDev/ilyanaDevBlog/commit/5d9bf7b96bf7de5d952ba3f2094e86270ea8789d) to your website's code.

If you want to change your theme, simply replace "okaidia" with the name of your preferred theme.

All of this is covered in additional detail in the [instructions](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) Gatsby provides.

Rendering Different Languages
--

To render different languages, you simply need to specify the language being used at the beginning of each block of code. For example to render C#, you would write:

![Rendering C#](/img/rendering-csharp.png "Rendering C#")

You can visit the [Prism website](https://prismjs.com/#supported-languages) to see a list of all supported languages and how to render them.

Fixing "Number Circles"
--

When I first added Prism to my website, I noticed a very annoying thing happening when numbers were rendered:

![Number Circles!](/img/prism-number-circles.png "Number Circles!")

Turns out, the Gatsby template I used, [gatsby starter netlify cms](https://www.gatsbyjs.org/starters/netlify-templates/gatsby-starter-netlify-cms/), had a file called Pricing.js, and it was this file that was resulting in the strange formatting. Since I'm not selling anything on my blog, pricing is entirely unnecessary. I deleted the file, and now my code looks like this:

![Number Circles Gone!](/img/prism-number-circles-gone.png "Number Circles Gone!")

Summary
--

* Prism is a great tool if you want to display code on your website without having to resort to screenshots
  * It results in aesthetically pleasing code in the theme of your choice
* [This Tutorial](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) explains how to set Prism up on a Gatsby site.
* Prism renders many different languages
* I had trouble with "number circles" in my displayed code, but I fixed that by deleting the Pricing.js file in my Gatsby site.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
