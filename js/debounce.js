/**
 * Debounce Events
 *
 * The debounce function can be a game changer when it comes to event fueled performance.
 * If you aren't using a debouncing function with a scroll, resize, key* event, you're probably doing it wrong.
 *
 * Working:
 * Debounce returns a function that, as long as it continues to be invoked, will not be triggered.
 * The function will be called after it stops being called for N milliseconds.
 *
 * If 'immediate' parameter is passed, trigger the function on leading edge instead of the trailing.
 * ie. It is called every time when the event is triggered (if set to true)
 *
 * The debounce function will not allow a callback to be used more than once per given time frame.
 * This is especially important when assigning a callback function to frequently-firing events.
 *
 * @Reference:
 * http://davidwalsh.name/essential-javascript-functions
 * http://modernjavascript.blogspot.co.uk/2013/08/building-better-debounce.html
 * http://drupalmotion.com/article/debounce-and-throttle-visual-explanation
 */

(function () {
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this;
      var args = Array.prototype.slice.call(arguments);

      // Clear any timeouts already present.
      clearTimeout(timeout);

      // Call function with after timeout.
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      }, wait);

      // If immediate param is passed on there is no active timeout.
      if (immediate && !timeout) {
        func.apply(context, args);
      }
    };
  }

  var myEffecientFn = debounce(function () {
    // All the taxing stuff you do
  }, 250);

  window.addEventListener('resize', myEffecientFn);
})();
