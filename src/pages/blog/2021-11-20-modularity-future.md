---
templateKey: blog-post
title: Modularity - The Shared Future of Computer Science and Space Travel
date: 2021-11-20T18:05:10.000Z
featuredpost: true
featuredimage: /img/modularity.png
description: You might not normally see much in common between aerospace engineering and computer science. And in a lot of cases, you'd be right. But both these industries are and have been trending towards one common goal - modularity.
tags:
  - software development
  - coding
  - testing
  - aerospace
---

## What is Modularity?

Modularity simply refers to something that can easily be removed from a larger whole and replaced with something else. And, depending on the context, that something else might be a better version of that original thing, or it might be something else entirely.

Think about the difference between a mess of spaghetti code, compared with a clean and well-defined architecture. Recall the basic principle of depending on an interface rather than on an implementation - so that when a better implementation is created, it can just be plugged into the larger whole without much difficulty at all. Or imagine a USB or HDMI port: if you have any device, be it a mouse or a speaker or a DVD player, you can plug it into your computer's USB port and suddenly your computer has a new component that gives it functionality it didn't have before. Without USB or HDMI or all the other ports on your computer, you'd be limited to the functionality built into that computer.

*Note: Coding to an interface, rather than an implementation means that if one piece of your code is dependent on a second piece of code, you should design that first piece to be dependent on* what *that second piece does, rather than* how *it does it. For example, if you have a program that depends on a function that calculates the factorial of a given number, it shouldn't matter at all to that program how the factorial function calculates the factorial (e.g. iteratively, recursively), only that if the program gives the factorial function a number, that number's factorial will be the output. This gets into encapsulation and information hiding in general.* 

## What does that have to do with space travel?

Everything, actually.

A few months ago, Dr. Gordon Roesler gave a lecture to my Aerospace 200 class about sustainability and logistics in space. (and you can tell from how long it's taken me to write this article just how busy that class and others are keeping me!)

Dr. Roesler's lecture focused in large part on - you guesssed it - modularity! He had some really interesting insights into projects currently being developed for satellites that can be made more modular and therefore more sustainable.

It used to be that if you wanted to put a satellite in orbit, you needed to design a schoolbus-sized monstrosity, and you needed to design every inch of it - the solar panels, the sensors, the communications equipment (the "utilities," essentially), in addition to whatever you were actually trying to accomplish with this satellite. And when you wanted to upgrade your equipment (get better batteries/solar panels, improve your sensors, etc.), that meant it was time to start designing your next bus-sized satellite.

![Hubble Space Telescope](/img/hubble_service.jpg)

*[Image source](https://www.nasa.gov/content/about-the-hubble-story)*

But as I learned from Dr. Roesler's talk, the industry is trending away from this paradigm. [CubeSats](https://en.wikipedia.org/wiki/CubeSat) and similar developments have already begun this transformation, but Dr. Roesler envisions a future of orbital infrastructure driven by modular satellite components. If you build a satellite with modular "utility" components, then if a solar panel is cracked by a micrometeorite, you can just swap it out without having to send up a whole new satellite. If you build a satellite with other modular components, then you can swap those out too as they break or technology improves. For example, the Hubble Space Telescope was actually [designed modularly](https://www.nasa.gov/content/about-the-hubble-story) because it was intended to be serviced by astronauts during the shuttle program. Because Hubble is modular, as technology improved, components of the telescope could be replaced with better, newer versions - and was done 5 times since Hubble launched in 1990! 

Modularity first collided with space travel in the 1980s when the Soviet space station, Mir, launched. Mir was the [first modular space station](https://www.nasa.gov/feature/35-years-ago-launch-of-mir-space-station-s-first-module) and had a huge influence on the design of the International Space Station, which is, of course, modular:

![International Space Station](/img/iss.png)

*[Image source](https://www.nasa.gov/feature/facts-and-figures)*

Before Mir, some elements of space travel were modular - consider the Apollo program, where the command module housed the astronauts during most of the trip, but the lunar lander actually carried the astronauts down to the lunar surface. However, the modularity of space travel has vastly improved since then, and it continues to improve as people envision new ways to modularize space systems.

## Conclusions

The similarities between programming principles and aerospace engineering principles as far as modularity is concerned are striking. Having spent a lot of time coding in the last few years, all I could think of during Dr. Roesler's presentation was, "code to an interface, not to an implementation," and that was when I knew I needed to write this article. I suspect it's not a huge surprise to many readers that modularity exists and is desirable in both these industries; but recognizing that parallel can help deepen one's understanding in both fields. At least, I know it has for me. 

Thanks for reading! I hope you find this and other articles here at ilyanaDev helpful! Be sure to follow me on Twitter [@ilyanaDev](https://twitter.com/ilyanaDev).
