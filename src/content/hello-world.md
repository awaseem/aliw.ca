---
layout: page
title: 'Hello world!'
date: '2019-10-14'
---

It's been a long time since I launched my website and even longer since I've launched a personal blog. I think for me I defenitly lost touch on branding myself as an individual and my talents. Heck the only time I updated my Linkedin was in 2015 when I was just graduting university.

It took me sometime to really understand how important personal brand is! The way you present youself to others can be your biggest asset to showcase your talent.

With this new website I want to do just that, show case a new minimal website and compare it's branding vs. my personal websites of the past.

## 2015: Starting a career

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

Anyway even after 4 years I was extremely proud of what I made, and if you want to see what it looks like check it out on Wayback Machine [here](https://web.archive.org/web/20150927214543/http://aliwaseem.com/) and view all the source code on [Github](https://github.com/awaseem/aliwaseem.com)

## 2016: Age of React

![jam components website](./images/jam-comps.png)

2016 was a great year for me, I had just relocated to Los Angeles to work at a [GoGuardian](https://www.goguardian.com/) that was developing on a more modern development stack. **This was where my career really sky rocketed, all my peers really challenged me to think outside the box and bring solutions to problems that I would have never encountered in Calgary.** So with all these new skills under my belt, it was time to redesign my brand, but this time I decided to something a bit different (Spoiler I ended up creating CMS system again 🙃).

At this point I had fully given up on templating with HandlerBars.js to fully embrace client side rendering with the use of React. I just didn't want to just recreate my website using React, and looking back I never even intended to create a personal website again. Instead I wanted to design a standalone component library using Reacts biggest strength: **component based user interfaces.**

The inspiration actually came from GoGuardian's own internal component library (obviously with very different component designs). My spin on it was that going forward if I needed to build a web application, I can re-use components from my own personal library vs. re writing everything from scratch. Now this was the time where [Storybook.js](https://storybook.js.org/) was gaining popularity, but unfortunately split under my radar when I embarked on this project (I did end up implementing a Storybook.js based component library with React, but that can be another blog post).

I based my component library on [Skelton.css](http://getskeleton.com/) for the design and [Anime.js](https://animejs.com/) for animations. In the end I ended up creating [Jam](https://awaseem.github.io/Jam/). Now I would not recommend using Jam, as it's horribly out of date and I have no idea how well it still integrates into new React projects. Once I had finished creating the library, I had no idea what do actually build next, so just to test out the components I decided to build a redesigned personal website. **The sad thing is that I only ever used the component library for my personal site and then quickly abandoned it.**

I actually liked the design of this website, it was still very similar to my previous to my one but with a bigger higher resolution image. The buttons were clean and the typography was sharp yet readable. I do remember that the buttons within Jam had this obnoxious jump animation, that I ended up disabling, now as to why I added that animation in the first place: 🤷.

![2016 personal website](./images/2016-website.png)

And yes I did end up creating another CMS system that talked to a Go based Redis wrapper exposed through a REST api named [Blob](https://github.com/awaseem/blob), and an auth service that I created in Go as well called [JWTea](https://github.com/awaseem/JWTea). The idea behind these services was similar to Jam, it was going to be used more than once for other projects. Sadly like Jam, they were only used for my personal website. Even with all that work I realistically only updating the website maybe twice. These were obviously overkill for a personal website...but hey at least it was a learning opportunity.

Unfortently you can't view the website on Wayback Machine, but all the source code is still on [Github](https://github.com/awaseem/aliwaseem.com-redesign)

## 2019: Re-branding

![2019 website](./images/2019-phone-mockup.png)

So after starting my career and building these platforms for my personal brand, why take such a long break? Well life happened, I moved back to Calgary to work for Solium (aka [Shareworks by Morgan Stanley](https://www.shareworks.com/)). At this point I never really updated anything related to myself. Slowly all my projects had their domains expired, my Linkedin had never changed since 2015 (except for my new roles) and personally the changes I was making within Solium was to interesting for me to really focus on my external image. I'm extremely proud of all the things I accomplished in my career at Solium, but it still bothered me that if people were to look me up, they would receive a brand of myself from the past.

So now we come to Thanksgiving 2019 (Canadian Thanksgiving) were I couldn't let that thought exist and decided to re-create a new platform that is more than just a website to showcase my talent. This is where the adventure began and its completely different in some cases than my other personal websites. I was heavily inspired by [OverReacted.io](https://overreacted.io/) by [Dan Abramov](https://mobile.twitter.com/dan_abramov) and also wanted to add a blog component where I could share my thoughts about anything from development to life lessons. This is the reason why I created [aliw.ca](https://aliw.ca) an extremely clean and minimal design that showcases my skills with a built in blog to highlight my opinions on development and life.

I knew for a fact that I didn't want to create another CMS myself and go crazy with the design. It uses [Gatsby.js](https://www.gatsbyjs.org/) a relatively new framework for creating static websites. Working with Gatsby this weekend has been amazing, basically everything that relates to static sites from server side rendering, content management and SEO has been abstracted from you via plugins that you install. You still write all the front end with React and can use GraphQL to query data from any data source, a data source can be something as simple as a page within your github repo, complex APIs, or CMS systems. Once the queries are written everything is fetched in build time which generates static files that you can host anywhere!

### Gatsby.js

![gatsby](./images/gatsby.png)

It's this idea of fetching data at _build time_ rather than _run time_ which makes Gatsby so unique (of course you can still make API calls when the components are mounted at run time as well). It totally makes sense to gather data when building all the assets for content that isn't going to change all that often. I'm also a huge fan of the [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/?=gatsby-remark-images). This is what allows my images to blur in when they're fully loaded, implmenting this on my on would actually take quite a long time, but with gatsby its as simple as installing the plugin and adding it to `gatsby-config.js`

When I need to write new content for the blog, I simply add a markdown page within the content folder and Gatsby will generate a new static page on build time. When I push the new changes to master, it automatically deploys all the new static assets with [now.sh](https://now.sh). It's that simple, no more creating complicated CMS systems and admin panels with everything being managed through Github.

### Design

When I set out to create a new website, I wanted the design to be unique and completely different than what I've done in the past. That why the whole website has basically no color and only text with some light icon usage. Even though I had no colors to choose from, I still wanted the readers attention, and I personally feel I accomplished that with the use of 'fade in' style animations. These animations really help give the idea that this website is more alive vs. simple black text on a white page.

You'll also notice there is no mention of personal projects, both my previous sites had projects has the main showcase. This time around I really wanted to showcase my skills, and I wanted to present them in a minimal and digestible way. The approach I took was to create this rotating text that randomly picks any one of my skills and presents it the user. It's small and minimal, but once the text starts rotating it grabs the readers attention directly to the center page to see what other skills can potentially pop up.

## Closing thoughts

I've had quite a journey from personal websites creation. This design I'm happy about the most, it's clean and done a great job of showcasing the developer I am vs the developer I was. I hope you enjoyed reading my journey, I'll be doing more of these posts in the future about various other aspects of my life going beyond the scope of development. Thanks again and feel free to [connect.](https://ca.linkedin.com/in/waseema393)
