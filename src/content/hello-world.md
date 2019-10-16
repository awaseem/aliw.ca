---
layout: page
title: 'Hello world!'
date: '2019-10-14'
---

It's been a long time since I launched my website and even longer since I've launched a personal blog. I think for me I defenitly lost touch on branding myself as an individual and my talents. Heck the only time I updated my Linkedin was in 2015 when I was just graduting university.

It took me sometime to really understand how important personal brand is! The way you present youself to others can be your biggest asset to showcase your talent.

With this new website I want to do just that, show case a new minimal website and compare it's branding vs. my personal websites of the past.

## 2015: Starting a career

<br />

![2015 webiste](./images/2015-website.png)

2015 was a weird time. I was just finishing up my internship and trying my best to create a portfolio that would help me start my career, but to showcase my talent I needed a website.

When I asked my peers on what to do, they all just asked to do a simple [jekyll](https://jekyllrb.com/) starter and work my way up from there, but being the 'bright', 'young' and 'reinventing' wheel' developer I was, I decided to create my own.... **With a full CMS system built from scratch.**..

This website was massive and it had every webframe/library under the sun as dependency. Semantic UI, jQuery, Express.js, etc...

Serisouly just look at this dependency list:

```json
...
  "dependencies": {
    "bcrypt-nodejs": "0.0.3",
    "better-console": "^0.2.4",
    "body-parser": "^1.13.3",
    "connect-flash": "^0.1.1",
    "cookie-parser": "^1.3.5",
    "del": "^1.2.0",
    "express": "^4.13.1",
    "express-handlebars": "^2.0.1",
    "express-session": "^1.11.3",
    "extend": "^3.0.0",
    "gulp-autoprefixer": "^2.3.1",
    "gulp-chmod": "^1.2.0",
    "gulp-clone": "^1.0.0",
    "gulp-concat": "^2.6.0",
    "gulp-concat-css": "^2.2.0",
    "gulp-copy": "0.0.2",
    "gulp-flatten": "^0.1.0",
    "gulp-header": "^1.2.2",
    "gulp-help": "^1.6.0",
    "gulp-if": "^1.2.5",
    "gulp-less": "^3.0.3",
    "gulp-minify-css": "^1.2.0",
    "gulp-notify": "^2.2.0",
    "gulp-plumber": "^1.0.1",
    "gulp-print": "^1.1.0",
    "gulp-rename": "^1.2.2",
    "gulp-replace": "^0.5.3",
    "gulp-rtlcss": "^0.1.4",
    "gulp-uglify": "^1.2.0",
    "gulp-util": "^3.0.6",
    "gulp-watch": "^4.3.4",
    "inquirer": "^0.9.0",
    "map-stream": "0.0.6",
    "mongoose": "^4.1.0",
    "passport": "^0.2.2",
    "passport-local": "^1.0.0",
    "require-dot-file": "^0.4.0",
    "semantic-ui": "^2.0.7",
    "session-file-store": "0.0.17",
    "winston": "^1.0.1",
    "yamljs": "^0.2.3"
  }
...
```

All this was extremely overkill to make something so simple and it took way to much time, but you know what? I loved and learned a lot from this project. It thought me that no matter how small each project may seem, it can balloon to new heights, and **every dependency that solves a single problem might prop up 10 more.** Of course in hindsight it would have been much easier to just take something of the shelf, but the learnings were well worth the time and effort.

The design on the other hand does not hold up in anyway. First of all I don't know why I thought it would be a code idea to a take a picture of my desk with two text editors open on two different computers. I guess it showcased my 'elite' programming ability, or whatever I was thinking at the time. The worst part is that, this picture is still my linkedin cover photo (well at least at the time of this blog post), the same picture of 4 years.

Also the hover state doesn't make sense on any of my portfolio items, why show the title again when hovering of the item? Like the items name is already visible...

Anyway after 4 years I was extremely proud of what I made, and if you want to see what it looks like check it out on wayback machine [here](https://web.archive.org/web/20150927214543/http://aliwaseem.com/) and view all the source code on [Github](https://github.com/awaseem/aliwaseem.com)

## 2016: Age of React

<br />

![jam components website](./images/jam-comps.png)

2016 was a great year for me, I had just relocated to Los Angeles to work at a [GoGuardian](https://www.goguardian.com/) that was developing on a more modern development stack. **This was where my career really sky rocketed, all my peers really challenged me to think outside the box and bring solutions to problems that I would have never encountered in Calgary.** So with all these new skills under my belt, it was time to redesign my brand, but this time I decided to something a bit different (Spoiler I ended up creating CMS system again 🙃).

At this point I had fully given up on templating with HandlerBars.js to fully embrace client side rendering with the use of React. I just didn't want to just recreate my website using React, and looking back I never even intended to create a personal website again. Instead I wanted to design a standalone component library using Reacts biggest strength: **component based user interfaces.**

The inspiration actually came from GoGuardian's own internal component library (obviously with very different component designs). My spin on it was that going forward if I needed to build a web application, I can re-use components from my own personal library vs. re writing everything from scratch. Now this was the time where [Storybook.js](https://storybook.js.org/) was gaining popularity, but unfortunately split under my radar when I embarked on this project (I did end up implementing a Storybook.js based component library with React, but that can be another blog post).

I based my component library on [Skelton.css](http://getskeleton.com/) for the design and [Anime.js](https://animejs.com/) for animations. In the end I ended up creating [Jam](https://awaseem.github.io/Jam/). Now I would not recommend using Jam, as it's horribly out of date and I have no idea how well it still integrates into new React projects. Once I had finished creating the library, I had no idea what do actually build next, so just to test out the components I decided to build a redesigned personal website. **The sad thing is that I only ever used the component library for my personal site and then quickly abandoned it.**

I actually liked the design of this website, it was still very similar to my previous to my one but with a bigger higher resolution image. The buttons were clean and the typography was sharp yet readable. I do remember that the buttons within Jam had this obnoxious jump animation, that I ended up disabling, now as to why I added that animation in the first place: 🤷.

![2016 personal website](./images/2016-website.png)

<br />

And yes I did end up creating another CMS system that talked to a Go based Redis wrapper exposed through a REST api named [blob](https://github.com/awaseem/blob), and an auth service that I created in Go as well called [JWTea](https://github.com/awaseem/JWTea). The idea behind these services was similar to Jam, it was going to be used more than once for other projects. Sadly like Jam, they were only used for my personal website. Even with all that work I realistically only updating the website maybe twice. These were obviously overkill for a personal website...but hey at least it was a learning opportunity.
