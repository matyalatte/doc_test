---
layout: default
title: Auto Color Theme
nav_order: 2
---

# Auto Color Theme

Put the following code in `docs/_includes/head_custom.html`.  
You can use the dark theme when the user's machine prefers it.  

```html
<link rel="stylesheet" href="{{ '/assets/css/just-the-docs-dark.css' | relative_url }}" media="(prefers-color-scheme: dark)">
```
