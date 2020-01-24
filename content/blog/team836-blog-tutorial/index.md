---
title: Team836 Blog Tutorial
date: '2020-01-24T20:15:07.480Z'
description: Let me tell you how to use markdown
author: jhaemin
---

# This is H1

## This is H2

### This is H3

> I recommend to use only `h1 ~ h3`

This is paragraph

Another paragraph

> This is a blockquote

```js
// You can also include code blocks
console.log('Hello World')
```

`inline code block` is helful when you emphasize things.

| Col 1                | Col2      |
| -------------------- | --------- |
| You can make a table | Like this |

![logo](./logo.png)

# Publishing a new post

Under `content/blog` You can create a new directory or just a single markdown file for a new post. The name should be written in `param-case` of your post's title. For example, when you write a new post which title is 'Hello World', name a directory or a single markdown file as 'hello-world'.

> Name markdown file as 'index.md' when you create a directory.

```
blog /
  new-post-title /
    index.md
    other_stuff
```

After adding new posts, push to the git origin and run the script below.

> Make sure to push all the commits and clear the git status before deploying.

```zsh
% npm run deploy
```

## Template

You should follow [the template](https://raw.githubusercontent.com/team836/team836.github.io/dev/content/blog-template/example.md) to make it work properly.
