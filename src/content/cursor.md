---
layout: page
title: 'Cursor: learning with no barriers'
date: '2020-04-21'
---

![Cursor mockup](./images/cursor-mockup.png)

I've always wanted to teach programming to others, just so they can understand what it takes to build something in our modern generation.
Most of the time, when talking to my friends, family or even my own fiancée its hard to explain some of the challenges I tackle every day throughout my career. This is why I created Cursor, to help others understand some of the inner workings of programming without any barriers to entry.

## No Barriers?

A lot of people don't know this, but a lot of the knowledge I've learned over the years regarding development has come from free resources available online. When ever I needed help or a solutions towards a problem I would just Google it and millions of free articles would come up to help me move forward. Now if someone wants to learn programming, the options on the App Store are very limited, some have paid tiers, bad data collection policies or even undesirable design.

So when I set out to create this app, I wanted to provide the same experience as a Google search (but with out the data collection 😉) **meaning no barriers to start!** Just enter your name (could be fake, don't care as the info isn't stored anywhere except your device) and start learning. Most importantly I wanted to ensure that these statements aren't false, that's why the whole app is and always will be **free** and **[open source](https://github.com/awaseem/cursor)**

## Design

I've always been fascinated with making beautiful applications. Now beauty is in the eye of the beholder, and what I make I find extremely appealing. I wanted to make this app for people who have zero experience into programming and just want to learn fundamentals. Not only did this mean simpler ways to verify information, but also the language presented to the user.

First I wanted the app to feel good, scrolling should be smooth, animations should be playful but never get in the way of progress and wording should be clear and helpful.

![Cursor mockup](./images/cursor-question.png)

When it came to the app's interface, I wanted there to be a single home screen and transitions to content would be done through modals. This would keep the number of options to the user small so that they can focus on the content. You'll also notice the intention on holding a button to lock in your option, why not just a simple press. I debated this for quite sometime, but I always felt that this would ensure the user is at least reading some content before frantically just pressing the next button and moving on. I know some might find this annoying, so in the future I might add an option to toggle this off.

The wording of the content is always the most difficult part, I've been known to have the worst spelling of all time so I'm sorry if any of those issues pop up 🙈. Also why so many emojis? Well emojis are an amazing tool to show emotion, every question or explanation that is presented I always try to see how the user would respond, it's a way to keep the interaction between the content writer and the users thoughts at the same level. It might not work all the time, but it at least presents the information that can be seen in the perspective of the user.

## Data

I tried to keep this as simple as possible, basically all the course file live within a Github repo called [Teacher](https://github.com/awaseem/teacher). Any changes to `master` will trigger a redeploy within [vercel](https://vercel.com/) that hosts the data files. The app calls these files like any other API, parses them and then presents the content. This way if I need to change anything related to the courses or content, I just make a small commit into master and boom everything is redeployed. The best part is this costs me **zero dollars** and get a bunch of added features like caching and worldwide CDN support. You can view the data here: [teacher.getcursor.app](https://teacher.getcursor.app)

![Cursor Design](./images/cursor-architecture.png)

## Future

The future is bright, I will always continue to work on this app to make it the best possible experience. If anything I hope I've taught someone something new wether it may be through this app, its code or even this post. Learning should never have barriers and I hope to continue to work on this until that statement is truly achieved.
