---
title: "Keeping you git commits tidy with --fixup and --autosquash"
description: "Keep your commit history clear by re-write history making the commits easier to follow."
pubDate: 2021-06-28T17:24:39+08:00
image:
  url: "https://picsum.photos/seed/git-fixup-rebase/2560/1440.jpg"
  alt: ""

lastUpdated: 2021-06-28T17:24:39+08:00
abstract: Use --fixup to re-write history and make your commits easier to follow.
category: Git
---

If you find yourself reverting changes you made earlier in a feature branch you can re-write the commit history, removing the initial changes, and making it look like you had it all planned out from the start!

Make and `add` your changes. When you're ready to commit, look up the commit hash of the commit you are changing the history of. Use `git log --online` to get a one-line summary of all commits. Each line starts with an abbreviated commit hash, eg: `f3bd518`. Copy the hash.

Now use `git commit --fixup f3bd518`. This will immediately create a new **fixup** commit.

Before you merge back into the **main** branch use rebase to combine the fixup commits into the original commit, re-writing it! First get any commit hash from a commit before the first commit you "fixed", this is where the rebase will start form, and use `git rebase -i --autosquash a13245b` to squash your fixups into the original commit.

```bash
git add /file-to-change.txt
git commit --fixup <commit hash to be fixed>
git rebase -i --autosquash <commit hash one before the one to be fixed>
```
