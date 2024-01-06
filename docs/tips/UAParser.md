---
layout: default
title: UAParser.js
nav_order: 4
---

# UAParser.js

This page uses [UAParser.js](https://github.com/faisalman/ua-parser-js) to parse user agents (that you sent to the server when opening this page).  

## Parsed info

User agents contain info about your environment.

<span id="parsed_info"></span>  

## Download Buttons

I made `makeDownloadButton()` to make dowload buttons based on the user's device.  
It selects a version from `Windows-x64`, `Windows-arm64`, `macOS`, `Linux-x64`, and `Linux-arm64`. 

<span id="download_button"></span>
[Looking for other versions?](https://github.com/{{ site.repository }}/releases)  

```html
<span id="download_button"></span>  
[Looking for other versions?](https://github.com/{{ site.repository }}/releases)  

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

Note that the download buttons require icons from [Google Fonts](https://fonts.google.com/icons).  
See [the Fonts page]({{ site.baseurl }}{% link tips/Fonts.md %}#icons) for the details.  
