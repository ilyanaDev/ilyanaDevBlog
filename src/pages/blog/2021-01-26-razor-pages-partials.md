---
templateKey: blog-post
title: Using Partials to Remove Duplication in Razor Pages
date: 2021-01-26T15:04:10.000Z
featuredpost: true
featuredimage: /img/partials-remove-duplication.png
description: I really like using Razor Pages with Microsoft MVC, as these work very well for simple web applications. One of the more useful features of Razor Pages are partials, which can really help reduce duplication between pages.
tags:
  - razor pages
  - mvc
  - software development
  - coding
---

I'm currently working on a project to add a checkout interface to a web app, but due to some quirks of the payment provider we are using, there need to be two checkout pages: one for a monthly subscription, and one for an annual subscription. Since the only real difference between these two is the name and price of the plan at the top of the page and the information being passed to the payment provider, the pages are nearly identical. Obviously, this violates the [DRY Principle](https://deviq.com/principles/dont-repeat-yourself).

This is where partials come in. Partials are Razor Views (a Razor View consists of just a .cshtml page, as opposed to a Razor Page, which has both the .cshtml page and the .cshtml.cs backend). These partials can be used to virtually eliminate duplication, as they support parameters being passed in via a ViewModel/DTO (data transfer object). My checkout page problem was very well-suited to a partial, since I was able to create a simple DTO with the few differences between the two pages.

The process for cleaning up duplication between pages using a partial is pretty simple.

1. Identify pages with duplication
2. Create your DTO. For example, `SubscriptionTypeViewModel`
   1. Create properties for the areas of change between your duplicate pages. For example `Name`, `Price`, `SubscriptionPeriod`
3. Create a new Razor View and name it `_NameOfPage`
   1. this underline is the naming convention for partials
   2. Sometimes the file is called `_NameOfPagePartial` for additional clarity
4. As the **first line** of this new file, type `@model Full.Path.Of.SubscriptionTypeViewModel`
5. From this point, I found it easiest to copy-paste the contents of one of my duplicate pages (for me, this was essentially the whole page, but for you it may only be a small portion of that page, which is duplicated elsewhere) into my Partial. From here, it was easy enough to replace any information specific to either page with a call to the model.
   1. e.g. `<h1>Purchase Monthly Plan</h1>` becomes `<h1>Purchase @Model.Name Plan</h1>`
   2. Along the way, I found it necessary to add a couple additional properties to my model, but for the most part it was easy enough to reuse the ones I started with.
6. At this point, you are almost done! Congrats! All that's left are a few simple plumbing bits. First, add a property of the same type as your DTO (e.g. `SubscriptionTypeViewModel`) to the model for each of your duplicate pages (the .cshtml.cs file)
   1. In your model's constructor, be sure to populate the view model with the appropriate information for that page (for me, I set `SubscriptionType.Name = "Monthly"`, etc.)
7. Add a line of html to each of your duplicate pages: `<partial name="_NameOfPage" for="SubscriptionType" />`, where "SubscriptionType" was the name of the DTO property of type `SubscriptionTypeViewModel` for that page.
8. Now, it's a good idea to run the application to check that everything looks right. If you've done everything correctly, you should see two copies of the same page (or portion of the page) on each of the duplicate pages. You can now delete the html you replaced from each of those pages.
9. Congrats! You're done!

As this is a refactoring, your pages should now look exactly as they did before you began this process. But you have *vastly* increased their maintainability.

For more information on partials, here are some useful docs:

- [Partial views in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/partial?view=aspnetcore-5.0)
- [Partial Tag Helper in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/built-in/partial-tag-helper?view=aspnetcore-5.0)

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
