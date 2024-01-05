---
layout: default
title: UAParser Demo
nav_order: 2
---

# UAParser Demo

This page parse userAgent (that you sent to the server when opening this page) to get your environment.  

## Parsed info

- OS: <span id="os"></span>  
- Architecture: <span id="arch"></span>  
- Browser: <span id="browser"></span>  
- Device Vendor: <span id="device_vendor"></span>  
- Device Model: <span id="device_model"></span>  
- Device Type: <span id="device_type"></span>  
- Engine: <span id="engine"></span>  

<script src="{{ '/node_modules/ua-parser-js/dist/ua-parser.min.js' | relative_url }}"></script>
<script>
    const parser = new UAParser();
    var arch = parser.getCPU().architecture;
    if (arch == null) {
        arch = "Undefined";
    }
    document.getElementById('arch').innerHTML = arch;
    const osInfo = parser.getOS();
    var os = osInfo.name;
    if (os == null) {
        os = "Undefined";
    }
    if (osInfo.version != null) {
        os += " " + osInfo.version;
    }
    document.getElementById('os').innerHTML = os;
    const browserInfo = parser.getBrowser();
    var browser = browserInfo.name;
    if (browser == null) {
        browser = "Undefined";
    }
    if (browserInfo.version != null) {
        browser += " " + browserInfo.version;
    }
    document.getElementById('browser').innerHTML = browser;
    const deviceInfo = parser.getDevice();
    var vendor = deviceInfo.vendor;
    if (vendor == null) {
        vendor = "Undefined";
    }
    document.getElementById('device_vendor').innerHTML = vendor;
    var model = deviceInfo.model;
    if (model == null) {
        model = "Undefined";
    }
    document.getElementById('device_model').innerHTML = model;
    var type = deviceInfo.type;
    if (type == null) {
        type = "Undefined";
    }
    document.getElementById('device_type').innerHTML = type;
    const engineInfo = parser.getEngine();
    var engine = engineInfo.name;
    if (engine == null) {
        engine = "Undefined";
    }
    if (engineInfo.version != null) {
        engine += " " + engineInfo.version;
    }
    document.getElementById('engine').innerHTML = engine;
</script>
