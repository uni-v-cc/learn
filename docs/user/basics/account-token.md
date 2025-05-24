---
sidebar_position: 3
---

# Account Tokens

From the previous topic, you've noticed the `Your token is ✅ Active` label. So what does it mean?

When adding the repository, you may notice the url is rather long. It contains the account token on Uni-V.CC, which is used to identify you, and what license keys you've activated on the platform.

What you also (probably) noticed inside [`VCC Token`](https://uni-v.cc/dash/tabs/tokens) tab is the `Suspend Token` and `Reset Token` buttons.

:::danger Important
While account tokens are not the key to accessing your account, they are still sensitive piece of information that you should keep secure.
:::

If you share the repository URL, you **will** leak your account token. If that happens, please reset the token. It will generate a new account token, and thus change the URL of the repository.

There are internal tools to keep track of repository access, and your account token *can* get suspended if you share your token with others automatically, thus blocking future use of it.