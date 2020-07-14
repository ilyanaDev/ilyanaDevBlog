---
templateKey: blog-post
title: Submitting Pull Requests to Another Person's Repository on GitHub
date: 2020-07-14T15:04:10.000Z
featuredpost: true
featuredimage: /img/github-pull-requests.png
description: Pull requests are an important feature of GitHub repositories.
tags:
  - coding
  - GitHub
  - software development
---

GitHub is great for collaboration, but no one wants their code changed without permission. GitHub addresses the concept of controlling changes to your code via pull requests, wherein anyone looking to alter your code must get your approval for the changes they'd like to make.

How to Pull Request Someone Else's Repository
--

What if you want to make edits to another person's repository?

**Step 1** - Go to the repository you'd like to edit and click **Fork**

![GitHub Repository Fork](/img/github-repo-fork.png "GitHub Repository Fork")

**Step 2** - Clone your Fork to your computer using the following steps: 

* Go into your new repository, click the green **Clone** button, and copy the URL to your clipboard.

![Clone GitHub Repo](/img/github-clone-repository-new.png "Clone GitHub Repo")

* On your computer, create a new folder with the same name as your repository.
* Open your command line, navigate to the folder you just created, and enter the command `git clone` + the URL you copied to your clipboard.

Note - these are the same steps you'd use to work with a brand-new GitHub repository, as I described in [a previous blog post](https://ilyana.dev/blog/2020-06-24-connecting-github/)

**Step 3** - Make your desired changes

**Step 4** - Push those changes to your Fork (as you would with any GitHub repository)

**Step 5** - Go to the Pull Requests tab of your Fork. GitHub should default to sending the pull request to the base repository you forked from. Confirm that this is the case and that the changes you've made are correct, then click **Create Pull Request**.

![Create Pull Request](/img/github-create-pull-request.png "Create Pull Request")

Add a description to your pull request so the owner of the original repository has an idea of what you're trying to do. Then click **Create Pull Request** again. Now you're all set! It's up to the owner of the original repository now to decide whether to accept your pull request.

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
