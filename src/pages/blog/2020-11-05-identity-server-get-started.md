---
templateKey: blog-post
title: Getting Started with IdentityServer in an ASPNET Core Application
date: 2020-11-05T15:04:10.000Z
featuredpost: true
featuredimage: /img/identityserver.png
description: IdentityServer uses OpenID Connect and OAuth to issue security tokens to clients. It authenticates (determines if they are who they say they are) and authorizes (determines if they can access the data they've requested) users and clients.
tags:
  - software development
  - coding
  - identityserver
  - getting started
---

I'm completely new to IdentityServer, and I wanted to get a better idea of how it works, so I decided to get some practice with it. In case anyone else (and/or my future self) wants to get started with IdentityServer and play around with it, I'll be logging all the steps I follow and any errors I run into. I'm following [this tutorial](https://identityserver4.readthedocs.io/en/latest/quickstarts/1_client_credentials.html) and [this other tutorial](https://identityserver4.readthedocs.io/en/latest/quickstarts/2_interactive_aspnetcore.html), so I'm noting all the steps from those, as well as any additional steps/troubleshooting I end up needing. All my code is available [on GitHub](https://github.com/ilyanaDev/IdentityServerStart).

For more information on *why* each step is taken, take a look at these tutorials, but if you just want a quick list of steps, keep reading. Another thing I will note: following the tutorial results in having several files with the same name open at once, and the tutorial is not always clear which one you want to be working with. I've done some work to figure out which file is meant in each case, and I've done my best to clarify each of those cases below.

First, I opened Powershell and navigated to the folder I wanted to make my application in. Then I ran the following commands:

```powershell
dotnet new -i IdentityServer4.Templates

md quickstart
cd quickstart

md src
cd src

dotnet new is4empty -n IdentityServer
```

And then to add Visual Studio support:

```powershell
cd ..
dotnet new sln -n Quickstart
dotnet sln add .\src\IdentityServer\IdentityServer.csproj
```

Next, I opened up the code in Visual Studio and went to the Config.cs file. I changed the default `IEnumerable<ApiScope>`:

```csharp
public static IEnumerable<ApiScope> ApiScopes =>
    new ApiScope[]
    { };
```

to:

```csharp
public static IEnumerable<ApiScope> ApiScopes =>
    new List<ApiScope>
    {
        new ApiScope("api1", "My API")
    };
```

Next I changed the default `IEnumerable<Client>`:

```csharp
public static IEnumerable<Client> Clients =>
    new Client[]
    { };
```

to:

```csharp
public static IEnumerable<Client> Clients =>
    new List<Client>
    {
        new Client
        {
            ClientId = "client",

            // no interactive user, use the clientid/secret for authentication
            AllowedGrantTypes = GrantTypes.ClientCredentials,

            // secret for authentication
            ClientSecrets =
            {
                new Secret("secret".Sha256())
            },

            // scopes that client has access to
            AllowedScopes = { "api1" }
        }
    };
```

Note: When you run into a wall of code like this, it's easy to just copy-paste and be done with it. But I strongly encourage typing out the changes yourself so you understand what you're doing. Personally, I hand-typed everything from the tutorials since my goal with this exercise is to learn what IdentityServer involves. On the other hand, if I just needed to get a functional web app with IdentityServer up and running, I'd probably copy-paste. **Update: as you will learn below in my troubleshooting, following this tutorial without copy-pasting requires a lot of careful focus (more than I originally applied). Doing this again, I'd honestly probably copy-paste to save myself the trouble, though I think I did learn more when I didn't copy-paste.**

Moving over to the Startup.cs file, I changed the ConfigureServices method to be:

```csharp
var builder = services.AddIdentityServer()
    .AddInMemoryIdentityResources(Config.IdentityResources)
    .AddInMemoryApiScopes(Config.ApiScopes)
    .AddInMemoryClients(Config.Clients);

builder.AddDeveloperSigningCredential();
```

At this point, the [tutorial I am following](https://identityserver4.readthedocs.io/en/latest/quickstarts/1_client_credentials.html) told me I should be able to run the application and see something at: [https://localhost:5001/.well-known/openid-configuration](https://localhost:5001/.well-known/openid-configuration). I was confused for a few minutes because I'd run the application, open localhost:5001 and tell me there was nothing there... and then I'd close the application. But once I got smart enough to paste in the url above, everything worked out. If things are working for you, that url should let you see a bunch of text that is apparently the discovery document, which "is a standard endpoint in identity servers." Interesting.

Alright, now that that's working, I'll head over to my src folder in Powershell and run:

```powershell
dotnet new webapi -n Api
```

and to add that to my Visual Studio solution:

```powershell
cd ..
dotnet sln add .\src\Api\Api.csproj
```

Now, in Visual Studio (which, if you kept it open, should have asked you to reload it), I go to launchSettings.json under Properties in the Api application, and I change the application URL setting to run at [https://localhost:6001](https://localhost:6001).

Now I'll create a new class, `IdentityController` with the following code:

```csharp
[Route("identity")]
[Authorize]
public class IdentityController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return new JsonResult(from c in User.Claims select new { c.Type, c.Value });
    }
}
```

I also had to give that class a `using System.linq` statement. (You can learn a bit more about Linq from [my blog post on it](https://ilyana.dev/blog/2020-09-18-linq/)).

Next, I ran this command in the root directory (the quickstart folder):

```powershell
dotnet add .\\src\\api\\Api.csproj package Microsoft.AspNetCore.Authentication.JwtBearer
```

Next I had to make a few modifications to Startup.cs. **Note: your solution has two Startup files. Right now, I mean the one in the Api project.**

ConfigureServices now looks like:

```csharp
public void ConfigureServices(IServiceCollection services)
{

    services.AddControllers();

    services.AddAuthentication("Bearer")
        .AddJwtBearer("Bearer", options =>
        {
            options.Authority = "https://localhost:5001";

            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = false
            };
        });
}
```

and Configure should contain:

```csharp
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
```

Now, when I run the application and navigate to [https://localhost:6001/identity](https://localhost:6001/identity), I should get a 401. Let's see.

Nope. I'll look a little closer to see what's wrong.

Ah, well that's embarassing. Turns out I was running my IdentityServer project instead of the Api project. There's a lovely dropdown menu in Visual Studio that fixes that problem:

![Dropdown menu](/img/vs-dropdown.png "How to make sure you're running the right project")

Alright. Now I'm getting that 401, so I can move on.

Now I have to create a client by going to src in powershell and running:

```powershell
dotnet new console -n Client

cd..
dotnet sln add .\src\Client\Client.csproj

cd src
cd client
dotnet add package IdentityModel
```

Now, Client's Program class should contain:

```csharp
private static async Task Main()
{
    // discover endpoints from metadata
    var client = new HttpClient();
    var disco = await client.GetDiscoveryDocumentAsync("https://localhost:5001");
    if (disco.IsError)
    {
        Console.WriteLine(disco.Error);
        return;
    }

    var tokenResponse = await client.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
    {
        Address = disco.TokenEndpoint,

        ClientId = "client",
        ClientSecret = "secret",
        Scope = "api1"
    });

    if (tokenResponse.IsError)
    {
        Console.WriteLine(tokenResponse.Error);
        return;
    }

    Console.WriteLine(tokenResponse.Json);

    // call api
    var apiClient = new HttpClient();
    apiClient.SetBearerToken(tokenResponse.AccessToken);

    var response = await apiClient.GetAsync("https://localhost:6001/identity");
    if (!response.IsSuccessStatusCode)
    {
        Console.WriteLine(response.StatusCode);
    }
    else
    {
        var content = await response.Content.ReadAsStringAsync();
        Console.WriteLine(JArray.Parse(content));
    }
}
```

In Visual Studio, I can right-click my Quickstart solution and select "Select Startup Projects." I select "Multiple Startup Projects" and set Client to Start and Api and IdentityServer to Start without Debugging. Now I can run the solution and step through the Client code and I see an access token in JSON. That's cool.

**Note:** It's important that Client be run with debugging and you put breakpoints in it (at least one) because otherwise it'll run and close the window pretty much immediately and you won't be able to see the token.

Now I'll head on over to the ConfigureServices method of Startup (in the Api Project) and add:

```csharp
services.AddAuthorization(options =>
{
    options.AddPolicy("ApiScope", policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireClaim("scope", "api1");
    });
});
```

Now I think I've finished [the first tutorial](https://identityserver4.readthedocs.io/en/latest/quickstarts/1_client_credentials.html) I've been following. I run it and confirm that everything still seems to work, which it does.

Next I'd like to get a UI working, because UIs are cool, so I'm moving on to [this next tutorial](https://identityserver4.readthedocs.io/en/latest/quickstarts/2_interactive_aspnetcore.html).

In Powershell in src/IdentityServer I run:

```powershell
dotnet new is4ui
```

I need to enable MVC by uncommenting some sections (as noted in the comments generated in the template) in the IdentityServer Startup class. These are:

```csharp
services.AddControllersWithViews();
```

in the ConfigureServices method, and

```csharp
app.UseStaticFiles();
app.UseRouting();
```

and

```csharp
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapDefaultControllerRoute();
});
```

from the Configure method.

Running IdentityServer (using that handy-dandy dropdown menu), I expect to see a home page. And I do see a home page.

At this point the tutorial suggests exploring the controllers and models (especially AccountController) in the Quickstart folder under IdentityServer.

Now I'll go back to the src folder in Powershell and run:

```powershell
dotnet new mvc -n MvcClient
cd ..
dotnet sln add .\src\MvcClient\MvcClient.csproj
```

After navigating to the MvcClient directory, I run:

```powershell
dotnet add package Microsoft.AspNetCore.Authentication.OpenIdConnect
```

Next, navigate to the Startup.cs for the MvcClient application. Add a using statement:

```csharp
using System.IdentityModel.Tokens.Jwt;
```

*Fun fact* - "Jwt" is pronounced "Jot."

Now, add the following to the ConfigureServices method:

```csharp
JwtSecurityTokenHandler.DefaultMapInboundClaims = false;

services.AddAuthentication(options =>
{
    options.DefaultScheme = "Cookies";
    options.DefaultChallengeScheme = "oidc";
})
.AddCookie("Cookies")
.AddOpenIdConnect("oidc", options =>
{
    options.Authority = "https://localhost:5001";

    options.ClientId = "mvc";
    options.ClientSecret = "secret";
    options.ResponseType = "code";

    options.SaveTokens = true;
});
```

and in the Configure method, add:

```csharp
.RequireAuthorization();
```

as shown below:

```csharp
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}")
    .RequireAuthorization();
});
```

The `RequireAuthorization()` method will make it impossible to access any part of the application anonymously.

You should also add `app.UseAuthentication()`. The Configure method should now look like this:

```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Home/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
    }
    app.UseHttpsRedirection();
    app.UseStaticFiles();

    app.UseRouting();

    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}")
        .RequireAuthorization();
    });
}
```

Add the following to the home view:

```html
@using Microsoft.AspNetCore.Authentication

<h2>Claims</h2>

<dl>
    @foreach (var claim in User.Claims)
    {
        <dt>@claim.Type</dt>
        <dd>@claim.Value</dd>
    }
</dl>

<h2>Properties</h2>

<dl>
    @foreach (var prop in (await Context.AuthenticateAsync()).Properties.Items)
    {
        <dt>@prop.Key</dt>
        <dd>@prop.Value</dd>
    }
</dl>
```

*Note: I am currently working to fix the HTML formatting seen above. This issue is reminiscent of the "number circles" I addressed when [I first got started with Prism](https://ilyana.dev/blog/2020-07-13-prism-code-renderer/), but I have so far been unable to use my experience with that problem to fix this one. If you find a solution to the HTML formatting, please let me know in the comments below!*

Now in IdentityServer's Config.cs file change the `IEnumerable<IdentityResource>` to be:

```csharp
public static IEnumerable<IdentityResource> IdentityResources =>
    new List<IdentityResource>
    {
        new IdentityResources.OpenId(),
        new IdentityResources.Profile(),
    };
```

In IdentityServer's Startup.cs file, you'll need to edit the ConfigureServices method from this:

```csharp
var builder = services.AddIdentityServer()
    .AddInMemoryApiScopes(Config.ApiScopes)
    .AddInMemoryClients(Config.Clients);
```

to this:

```csharp
var builder = services.AddIdentityServer()
    .AddInMemoryIdentityResources(Config.IdentityResources)
    .AddInMemoryApiScopes(Config.ApiScopes)
    .AddInMemoryClients(Config.Clients)
    .AddTestUsers(TestUsers.Users);
```

Now in IdentityServer's Config.cs file, edit the `IEnumerable<Client>` to be:

```csharp
public static IEnumerable<Client> Clients =>
    new List<Client>
    {
    new Client
    {
        ClientId = "client",

        // no interactive user, use the clientid/secret for authentication
        AllowedGrantTypes = GrantTypes.ClientCredentials,

        // secret for authentication
        ClientSecrets =
        {
            new Secret("secret".Sha256())
        },

        // scopes that client has access to
        AllowedScopes = { "api1" }
    },

    new Client
    {
        ClientId = "mvc",
        ClientSecrets = { new Secret("secret".Sha256()) },

        AllowedGrantTypes = GrantTypes.Code,

        //where to redirect to after login
        RedirectUris = { "https://localhost:5002/signin-oidc" },

        PostLogoutRedirectUris = {"https://localhost:5002/signout-callback-oidc" },

        AllowedScopes = new List<string>
        {
            IdentityServerConstants.StandardScopes.OpenId,
            IdentityServerConstants.StandardScopes.Profile
        }
    }
};
```

Alright, the moment of truth is finally here! The application should work!

Nope.

Alright. Well, first, I need to make sure I've got my applicationurl set to localhost:5002 (using https) for the MvcClient application in its launchsettings.json file. I also need to set my startup projects as multiple startup projects (full process for this described above). I'll select "None" for Api and Client and "Start without debugging" for IdentityServer and MvcClient. I hit Ctrl  + F5 to start it up... aaaand I get an invalid request error. My MvcClient redirected to IdentityServer as expected, but I got an error there.

Troubleshooting the error, I make sure I've saved everything, then run it again. That doesn't work, so I go through the last few steps in the tutorial to check that I haven't missed anything.

I found a typo in my `IEnumerable<Client>` (which I've fixed above, so you shouldn't have that problem). I suppose this is a point against my "type it all manually" philosophy. In any case, fixing the typo allows me to log in on IdentityServer (go to the TestUsers class in IdentityServer to see usernames and passwords). But once that redirects me to localhost:5002, it tells me there is no webpage found at that address.

At this point, I had no clue what to do. I skimmed [the docs](https://identityserver4.readthedocs.io/en/latest/topics/startup.html) to see if they had anything useful. I googled my problem and found an interesting [GitHub discussion](https://github.com/IdentityServer/IdentityServer4/issues/3120) where someone had the same problem, but implementing their solution (running things using https) didn't help me (in fact, I was already running everything in https).

I waited a couple of days before coming back to this and decided to skim the tutorial again, checking for anything I might have missed. Lo and behold I had forgotted to add UseAuthentication to the Configure method of MvcClient's Startup.cs (this has been fixed above). Another point against my "don't copy paste" philosophy. At this point, the application works as expected. Wonderful!

Alright, just a few more steps to go. The next step is to add logout functionality. This is pretty simple, but the tutorial I'm following was a bit vague about how to do this (which causes me to assume there's more than one way to do it), but here's what I ended up doing:

Add to HomeController.cs class of MvcClient:

```csharp
public IActionResult Logout()
{
    return SignOut("Cookies", "oidc");
}
```

Add to _Layout.cshtml of MvcClient:

```html
<li class="nav-item">
    <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Logout">Logout</a>
</li>
```

Alright, the last step is to get some claims from the UserInfo endpoint.

Just add this:

```csharp
options.Scope.Add("profile");
options.GetClaimsFromUserInfoEndpoint = true;
```

to MvcClient's Startup.cs's ConfigureServices method like so:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllersWithViews();

    JwtSecurityTokenHandler.DefaultMapInboundClaims = false;

    services.AddAuthentication(options =>
    {
        options.DefaultScheme = "Cookies";
        options.DefaultChallengeScheme = "oidc";
    })
    .AddCookie("Cookies")
    .AddOpenIdConnect("oidc", options =>
    {
        options.Authority = "https://localhost:5001";

        options.ClientId = "mvc";
        options.ClientSecret = "secret";
        options.ResponseType = "code";

        options.Scope.Add("profile");
        options.GetClaimsFromUserInfoEndpoint = true;

        options.SaveTokens = true;
    });
}
```

Running this to check if it works, I see that the homepage of my MvcClient app now displays the user's name, given name, and family name, as expected.

Wow, I feel like I've learned a lot about identity server, and I hope you have too!

The rest of [the tutorial I'm following](https://identityserver4.readthedocs.io/en/latest/quickstarts/2_interactive_aspnetcore.html) shows how to set up external authentication (via Google, Twitter, etc.), so check that out if that sounds interesting!

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
