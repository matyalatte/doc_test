---
layout: default
title: Animated Menu
nav_order: 0
---

# Animated Menu

This website uses [`docs/_sass/custom/animated_menu.scss`](//github.com/{{ site.repository }}/blob/main/docs/_sass/custom/animated_menu.scss) to animate the menu bar.  
You can use it by including the scss file into `custom.scss`.

```scss
// docs/_sass/custom/custom.scss
@import "./animated_menu.scss";
```

Note that the menu bar require icons in `docs/_includes/icons`.  
See the [Icons]({{ site.baseurl }}{% link tips/Icons.md %}) page for the details.  

## Toggle Button

The toggle button uses two icons, and their scales are animated with css.  

```html
<!-- docs/_includes/components/sidebar.html -->
<button id="menu-button" class="site-button btn-reset" aria-label="Toggle menu" aria-pressed="false">
  <svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><use xlink:href="#svg-menu"></use></svg>
  <svg viewBox="0 0 24 24" class="icon site-button-alt" aria-hidden="true"><use xlink:href="#svg-cancel"></use></svg>
</button>
```

```scss
// docs/_sass/custom/animated_menu.scss
.site-button {
  display: grid;
  .icon {
    transition: 0.5s;
    transform: scale(1);
    grid-column-start: 1;
    grid-row-start: 1;
    &.site-button-alt {
      transform: scale(0);
    }
  }

  &.nav-open {
    .icon {
      transform: scale(0);
      &.site-button-alt {
        transform: scale(1);
      }
    }
  }
}
```

## Navigation

The max height of the navigation bar is animated with css.  

```scss
// docs/_sass/custom/animated_menu.scss
.site-nav {
  display: block;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  overflow: clip;

  &.nav-open {
    display: block;
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
  }

  @include mq(md) {
    max-height: none;
    transition: 0s;

    &.nav-open {
      max-height: none;
      transition: 0s;
    }
  }
}

// apply the same method to .main-header and .nav-list
```
