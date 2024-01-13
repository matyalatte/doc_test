---
layout: default
title: Carousel Slider
nav_order: 1
carousels:
  - images:
    - image: /assets/images/img1.jpg
    - image: /assets/images/img2.jpg
    - image: /assets/images/img3.jpg
---

# Carousel Slider

This page uses a customized version of [carousel.html](https://jekyllcodex.org/without-plugin/slider/) to make an image gallery.  
Put the html file in `_include`, and define images in front matters.  
Then, you can include the html file to make carousel sliders.  

```md
---
layout: default
title: Page Title
carousels:
  - images:
    - image: /assets/images/img1.jpg
    - image: /assets/images/img2.jpg
    - image: /assets/images/img3.jpg
---

# Page Title

{% raw %}{% include carousel.html width="50" height="50" unit="%" duration="7" relative_url=true centerize=true %}{% endraw %}
```

{% include carousel.html width="50" height="50" unit="%" duration="7" relative_url=true centerize=true %}

(Photo courtesy [photos-public-domain.com](https://www.photos-public-domain.com/category/animals/dogs/))
