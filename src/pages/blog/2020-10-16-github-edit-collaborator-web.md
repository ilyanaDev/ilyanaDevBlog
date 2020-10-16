---
templateKey: blog-post
title: Editing Files as a Collaborator in GitHub
date: 2020-10-16T15:04:10.000Z
featuredpost: true
featuredimage: /img/github-web-collaborator.png
description: I recently ran into a problem where GitHub wouldn't let me edit and pull request markdown files in the web in a repository I am a collaborator on. Instead, it just gave me the message "You must be on a branch to make or propose changes to this file."
tags:
  - coding
  - GitHub
  - software development
---

I love that GitHub has the capability for me to edit and pull request code (particularly text-based files, like [Markdown](https://ilyana.dev/blog/2020-06-14-using-markdown-blogs/)) in the web. It's really convenient, especially when you're just looking to fix a typo or add a quick sentence. That way you don't have to clone the whole repository to your computer, which can be a real pain, especially if you're literally just fixing a typo.

So I was a little frustrated the other day when I got this message when I tried to edit a file:

![GitHub You Must be on a Branch](/img/github-youmustbeonabranch.png "You must be on a branch to make or propose changes to this file")

Weird, right? I'd never seen this before, so I was pretty confused. Luckily, though, there's a very easy fix, as I learned from [this Stack Overflow thread](https://stackoverflow.com/questions/55299930/editing-files-as-a-collaborator-on-github).

Turns out, because I'd searched for the file in the repository instead of navigating directly to it (it's a *big* repository, so I was trying to save myself some scrolling time), GitHub gave me that file in a specific commit rather than in the main branch:

![GitHub Commit](/img/github-inacommit.png "GitHub Commit")

Simply switch that to the master branch...

![GitHub Switch to Master](/img/github-switchtomaster.png "GitHub Switch to Master")

And you're all set!

![GitHub Lets you edit](/img/github-youcanedit.png "GitHub lets you edit")

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
