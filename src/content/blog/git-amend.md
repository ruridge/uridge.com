---
title: Edit the last thing you committed to git
description: I use this all the time, it's perfect for when you commit, then realise you need to change one small part of your code.
pubDate: 2021-05-26T22:36:19+08:00
image: "https://picsum.photos/seed/git-amend/2560/1440.jpg"
imageAlt: ""

lastUpdated: 2021-05-26T22:37:38+08:00
abstract: Using --amend you can edit your previous commit.
category: Git
---

Make your changes and `add` them, next run `commit` with the `--amend` flag and it will update your last commit with the changes you just added!

```bash
git add --patch
git commit --amend
```

> Warning:
> Never amend commits that have been pushed to a shared branch as it can cause issues if someone has already pulled the original commit.
