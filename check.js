try {
  eval("async function _(){}")
}
catch (e) {
  window.location.href = 'https://polight.github.io/browser-compatibility'
  console.error('This browser is not up-to-date')
}
