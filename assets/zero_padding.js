var zero_padding = function (num) {
  return ('00'+num).slice(-3);
};

// add the object to the browser window or node environment
root = exports ? exports : window; 
// assign the object to the root
root.zero_padding = zero_padding;
