# Browser Compatibility Check

Check if your browser is compatible with some latest feature (`async` here).

Redirects to a basic HTML page that invites your viewer to download Firefox, Chromium or Google Chrome.

This project is espacially useful when your web-app depends on some recent feature like [Lego](https://github.com/Polight/lego) and you can't or don't want to bother with retrocompatibility compilers and issues.


## Usage

Just include the check.js script in priority of your `head`:
```
<meta…>
<title>…</title>
<script src=https://cdn.jsdelivr.net/gh/polight/browser-compatibility@master/check.js></script>
…
```
