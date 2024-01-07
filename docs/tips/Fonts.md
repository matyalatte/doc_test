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

This website uses the download icon from [Google Fonts](https://fonts.google.com/icons).  
To use the icon, you should put the following code in `docs/_includes/head_custom.html`.  

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

Then, you can use the icon like this.

<a href="https://url_here">
  <span class="material-symbols-outlined" style="vertical-align: -0.25em;">
    download
  </span>
  Download Link
</a>

```html
<a href="https://url_here">
  <span class="material-symbols-outlined" style="vertical-align: -0.25em;">
    download
  </span>
  Download Link
</a>
```
