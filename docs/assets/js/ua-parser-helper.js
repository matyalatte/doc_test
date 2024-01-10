---
---
// Define "git_tag" in _config.yml to use ua-parser-helper.js
const TOOL_NAME = "{{ site.title }}";
const TOOL_TAG = "{{ site.git_tag }}";

function nullToStr(str) {
  return str == null ? "Undefined" : str;
}

function getOS(result) {
  return nullToStr(result.os.name);
}

function getDeviceType(result) {
  return nullToStr(result.device.type);
}

function getArch(result) {
  return nullToStr(result.cpu.architecture);
}

function isWindows(result) {
  const os = getOS(result);
  return os != null && os.startsWith("Windows");
}

function isMac(result) {
  const os = getOS(result);
  return os != null && (os == "Mac OS" || os == "macOS" || os == "iOS");
}

function isAndroid(result) {
  const os = getOS(result);
  return os != null && os.startsWith("Android");
}

function isDesktop(result) {
  const type = getDeviceType(result);
  return type == "desktop";
}

function isUnsupportedDeviceType(result) {
  return !(isDesktop(result) || getDeviceType(result) == "Undefined");
}

function isArm(result) {
  const arch = getArch(result);
  return arch.startsWith("arm");
}

function isAmd(result) {
  const arch = getArch(result);
  return arch == "ia32" || arch == "amd64";
}

function isUnsupportedArch(result) {
  return !(isArm(result) || isAmd(result) || getArch(result) == "Undefined");
}

function makeDownloadButton(result, id) {
  baseElement = document.getElementById(id);

  if (baseElement == null) {
    return;
  }

  baseHTML = "";

  // Show warnings if you use unsupported devices.
  warningStr = "";
  if (isUnsupportedDeviceType(result)) {
    warningStr = TOOL_NAME + " does NOT support your device type. (" + getDeviceType(result) + ")";
  } else if (isUnsupportedArch(result)) {
    warningStr = TOOL_NAME + " does NOT support your CPU. (" + getArch(result) + ")";
  }
  if (warningStr != "") {
    warningHTML = `<p class="warning">` + warningStr + "</p>";
    baseHTML += warningHTML;
  }

  function getArchSuffix(result) {
    if (isArm(result)) {
      return "-arm64";
    }
    return "-x64";
  }

  mainStr = TOOL_NAME + "-" + TOOL_TAG + "-";
  if (isWindows(result)) {
    mainStr += "Windows" + getArchSuffix(result) + ".zip";
  } else if (isMac(result)) {
    mainStr += "macOS.tar.bz2";
  } else {
    mainStr += "Linux" + getArchSuffix(result) + ".tar.bz2";
  }

  mainURL = "https://github.com/{{ site.repository }}/releases/download/" + TOOL_TAG + "/" + mainStr;
  mainHTML = `<a href="` + mainURL + `" class="btn btn-blue">` + 
             `<svg viewBox="0 0 16 16" class="icon" style="width:1em; color:white; vertical-align: -0.35em">
                <use xlink:href="#svg-download"></use>
              </svg>&thinsp;
              Download ` + mainStr + `</a><br>`;
  baseHTML += mainHTML;
  baseElement.innerHTML = baseHTML;
}

function showParseResult(result, id) {
  baseElement = document.getElementById(id);

  if (baseElement == null) {
    return;
  }

  const baseHTML = `
  <ul>
    <li>OS: <span id="show_parse_result_os"></span></li>
    <li>Architecture: <span id="show_parse_result_arch"></span></li>
    <li>Browser: <span id="show_parse_result_browser"></span></li>
    <li>Device Vendor: <span id="show_parse_result_device_vendor"></span></li>
    <li>Device Model: <span id="show_parse_result_device_model"></span></li>
    <li>Device Type: <span id="show_parse_result_device_type"></span></li>
    <li>Engine: <span id="show_parse_result_engine"></span></li>
    <li>User Agent: <span id="show_parse_result_ua"></span></li>
  </ul>`;

  baseElement.innerHTML = baseHTML;

  var arch = getArch(result);
  document.getElementById('show_parse_result_arch').innerHTML = arch;
  const osInfo = result.os;
  var os = getOS(result);
  if (osInfo.version != null) {
    os += " " + osInfo.version;
  }
  document.getElementById('show_parse_result_os').innerHTML = os;
  const browserInfo = result.browser;
  var browser = nullToStr(browserInfo.name);
  if (browserInfo.version != null) {
    browser += " " + browserInfo.version;
  }
  document.getElementById('show_parse_result_browser').innerHTML = browser;
  const deviceInfo = parser.getDevice();
  var vendor = nullToStr(deviceInfo.vendor);
  document.getElementById('show_parse_result_device_vendor').innerHTML = vendor;
  var model = nullToStr(deviceInfo.model);
  document.getElementById('show_parse_result_device_model').innerHTML = model;
  var type = getDeviceType(result);
  document.getElementById('show_parse_result_device_type').innerHTML = type;
  const engineInfo = result.engine;
  var engine = nullToStr(engineInfo.name);
  if (engineInfo.version != null) {
    engine += " " + engineInfo.version;
  }
  document.getElementById('show_parse_result_engine').innerHTML = engine;
  const ua = nullToStr(result.ua);
  document.getElementById('show_parse_result_ua').innerHTML = ua;
}
