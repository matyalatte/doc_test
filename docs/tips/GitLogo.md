---
layout: default
title: Git Logo
nav_order: 1
---

# Git Logo

Download the logo from the [official site](https://github.com/logos) and put them in `docs/assets/images/`.  
Then, put the following code in `docs/_includes/header_custom.html`.  
Your website puts the logo in the header to navigate users to your repo.  

```html
<nav aria-label="Auxiliary" class="aux-nav">
  <ul class="aux-nav-list">
    <li class="aux-nav-list-item">
      <a href="//github.com/{{ site.repository }}"
        class="site-button" title="View it on Github"
      >
        <img src="{{'/assets/images/github-mark.svg' | relative_url}}" alt="git logo"
          style='height: 32px; width: 32px; object-fit: contain'
        >
      </a>
    </li>
  </ul>
</nav>
```
