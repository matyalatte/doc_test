---
layout: default
title: Fonts and Icons
nav_order: 1
---

# Fonts and Icons

## Fonts

This website uses [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) and [Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono) as fonts.  
To use the fonts, you should put the following code in `docs/_includes/head_custom.html`.  

```html
<!-- Download Noto Sans and Not Sans Mono -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap" rel="stylesheet">
```

You should also put the following code in `docs/_sass/custom/setup.scss`.  

```scss
$body-font-family: "Noto Sans", sans-serif, system-ui, -apple-system, blinkmacsystemfont, roboto, "Segoe UI Emoji";
$mono-font-family: "Noto Sans Mono", "SFMono-Regular", menlo, consolas, monospace;
```

## Icons

`docs/_includes/icons` includes [Bootstrap Icons](https://icons.getbootstrap.com/).  
You can use them like this.  

<a href="https://url_here"><svg viewBox="0 0 16 16" class="icon" style="width:1em; vertical-align: -0.35em"><use xlink:href="#svg-download"></use></svg>&nbsp;Download Link</a>

```html
<a href="https://url_here"><svg viewBox="0 0 16 16" class="icon" style="width:1em; vertical-align: -0.35em"><use xlink:href="#svg-download"></use></svg>&nbsp;Download Link</a>
```

<svg viewBox="0 0 16 16" class="icon"><use xlink:href="#svg-git"></use></svg>
<svg viewBox="0 0 16 16" class="icon"><use xlink:href="#svg-sun"></use></svg>
<svg viewBox="0 0 16 16" class="icon"><use xlink:href="#svg-moon"></use></svg>

```html
<svg viewBox="0 0 16 16" class="icon"><use xlink:href="#svg-git"></use></svg>
<svg viewBox="0 0 16 16" class="icon"><use xlink:href="#svg-sun"></use></svg>
<svg viewBox="0 0 16 16" class="icon"><use xlink:href="#svg-moon"></use></svg>
```
