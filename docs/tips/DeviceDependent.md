---
layout: default
title: Device Dependent Layout
nav_order: 1
---

# Device Dependent Layout

This page parses user agents with [UAParser.js](https://github.com/faisalman/ua-parser-js).  
You can use it to detect user's OS, CPU architecture, device type, etc.  

## Parsed info

Your user agent contains the following information.  

<span id="parsed_info"></span>  

## Download Buttons

I made `makeDownloadButton()` to make dowload buttons based on the user's device.  
It selects a version from `Windows-x64`, `Windows-arm64`, `macOS`, `Linux-x64`, and `Linux-arm64`. 

<span id="download_button"></span>
[Looking for other versions?](https://github.com/{{ site.repository }}/releases)  

```html
<span id="download_button"></span>
{% raw %}[Looking for other versions?](https://github.com/{{ site.repository }}/releases){% endraw %}

<script src="https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/1.0.37/ua-parser.min.js"></script>
<script src="{{ '/assets/js/ua-parser-helper.js' | relative_url }}"></script>
<script>
  const parser = new UAParser();
  const result = parser.getResult();
  makeDownloadButton(result, "download_button");
</script>
```

<script src="https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/1.0.37/ua-parser.min.js"></script>
<script src="{{ '/assets/js/ua-parser-helper.js' | relative_url }}"></script>
<script>
  const parser = new UAParser();
  const result = parser.getResult();
  showParseResult(result, "parsed_info");
  makeDownloadButton(result, "download_button");
</script>

Note that the download buttons require icons in `docs/_includes/icons`.  
See the [Fonts and Icons]({{ site.baseurl }}{% link tips/Fonts.md %}#icons) page for the details.  
