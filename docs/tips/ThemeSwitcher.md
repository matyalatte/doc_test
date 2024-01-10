---
layout: default
title: Theme Switcher
nav_order: 3
---

# Theme Switcher

This website uses customized `just-the-docs-default.scss` and `just-the-docs.js`.  
It defines `.theme-default` and `.theme-dark`.  
You can set the classes to the `<html>` tag with `jtd.setTheme()`.  
You can also set the user's prefered theme or a cached theme with `jtd.initTheme()`.  

```scss
{% raw %}// just-the-docs-default.scss
@charset "UTF-8";
{% if site.color_scheme and site.color_scheme != "nil" %}
  {% assign color_scheme = site.color_scheme %}
{% else %}
  {% assign color_scheme = "light" %}
{% endif %}

// some classes should not be defined with a theme class.
{% include css/just-the-docs.scss.liquid color_scheme=color_scheme %}

// the default theme
.theme-default {
  {% include css/just-the-docs.scss.liquid color_scheme=color_scheme %}
  .obj-default-theme {
    display:flex;
  }
  .obj-dark-theme {
    display:none;
  }
}

// the dark theme
.theme-dark {
  {% include css/just-the-docs.scss.liquid color_scheme="custom_dark" %}
  .obj-default-theme{
    display:none;
  }
  .obj-dark-theme{
    display:flex;
  }
}{% endraw %}
```

```js
// just-the-docs.js
jtd.getTheme = function() {
  var classList = document.documentElement.classList;
  for (let c of classList.values()) {
    if (c.startsWith('theme-')) {
      return c.substring(6);
    }
  }
  return this.initTheme();
}

jtd.getPreferedTheme = function() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'default';
}

jtd.initTheme = function() {
  var theme = localStorage.getItem('theme');
  if (theme == null) {
    theme = this.getPreferedTheme();
    localStorage.setItem('theme', theme);
  }
  document.documentElement.classList.add('theme-' + theme);
  return theme;
}

jtd.setTheme = function(theme) {
  let old_theme = this.getTheme();
  if (theme != old_theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.add('theme-' + theme);
    document.documentElement.classList.remove('theme-' + old_theme);
  }
}
```

## Toggle Button

You can try the toggle button for another theme.  

<button class="btn js-toggle-dark-mode">
  <span class="obj-default-theme">☀️</span>
  <span class="obj-dark-theme">🌙</span>
</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('default');
  } else {
    jtd.setTheme('dark');
  }
});
</script>

```html
<button class="btn js-toggle-dark-mode">
  <span class="obj-default-theme">☀️</span>
  <span class="obj-dark-theme">🌙</span>
</button>

<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('default');
  } else {
    jtd.setTheme('dark');
  }
});
</script>
```
