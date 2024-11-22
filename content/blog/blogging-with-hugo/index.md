---
date: '2024-11-17T20:46:00+08:00'
draft: false
title: 'Blogging with Hugo'
layout: "post"
thumbnail: ""
external_Links: false
youtube: ""
github: ""
demo: ""
---

It's been a while since I last wrote anything for my blog. Instead of updating what I have been doing for the past 1 year, I migrated my blog to Hugo.

When I created my first blog using Gatsby I felt that everything was slow and hard to use. It has everything I need, readers can list pages according to tags and years, a functioning side menu that displays the latest posts and much more. Although they are functioning, I doubt I optimized them. But everything felt hacky and I seem to have some dependencies issue after updating it. 

I knew that updating the framework would break the dependencies, but the fact that Gatsby relies on so many dependencies and plugins frustrated me at the time. I could revert the changes I have made, I use git after all, but, I choose not to as I don't like my libraries to have **CRITICAL** vulnerabilities. Plus, I don't like the blog design like I thought I would.

So, with the frustration from it and the fact that I can't blog because it doesn't let me  I decided to migrate it to another Static Site Generator(SSG), just for the fun of it and to try out another SSG framework.

I need something minimal to work with, something without a mess of dependencies, and something robust. As I browsed through the internet, many people were recommending Hugo or Astro and that they are happy/satisfied using them. I had heard of Hugo before I used Gatsby but Gatsby was really popular and the hot trend at that time (back in 2020), I followed the rest onto the hype train and dived straight into Gatsby. It might have been my mistake now that I looked back. Well, I did learn some ReactJS thanks to Gatsby, dealing with GraphQL was not easy for me. 

Looking into Hugo's documentation, it has all the features I need for the new blog. 

- Minimal design
- Built-in table of contents
- Built-in page navigation
- Built-in image processor

And many more.

I decided not to use an existing template, mostly because I wanted to learn how the content is structured in Hugo. The contents will be separated into blog posts and projects. Regular blog posts will be published in the blog section, while the documentation/writeup of my new/old projects will go into the projects section. 

This time I decided not to complicate things and keep everything as minimal as possible. A table of contents was added to let readers skip some sections in case I publish a long post with multiple chapters or sections in the future. I also added pagination below the content so readers can read new or older posts. 

So here am I, with a functioning blog, and now I don't have to be worried about updating and breaking dependencies ever again. All that's important is that I can blog now!
