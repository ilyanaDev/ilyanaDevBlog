---
templateKey: blog-post
title: Creating a New GitHub Repository to Work with on Your Desktop
date: 2020-06-24T15:04:10.000Z
featuredpost: false
featuredimage: /img/connecting-github.png
tags:
  - coding
  - GitHub
  - command line
  - software development
---

This seemingly simple task can get somewhat complicated if you don't know what you're doing. I've certainly had trouble with this. Here is the easiest way to do this:

1\. Log on to GitHub and/or create GitHub account. If you're creating a new account [here](https://ilyana.dev/blog/2020-06-06-setting-up-a-github-account/) are some tips.

2\. Go to the page for your account and click **Repositories** at the top, then click the green **New** button.

![New GitHub Repo](/img/github-repositories-new.png "New GitHub Repo")

3\. Go into your new repository, click the green **Clone** button, and copy the URL to your clipboard.

![Clone GitHub Repo](/img/github-clone-repository.png "Clone GitHub Repo")

4\. On your computer, create a new folder with the same name as your repository.

5\. Open your command line, navigate to the folder you just created, and enter the command `git clone` + the URL you copied to your clipboard.

6\. Congratulations! Now, your folder on your desktop should be linked to that GitHub repository, and whenever you commit and push changes in an application like Visual Studio or VS Code, they should go right to that repository.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
