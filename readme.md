## "Playing with Chaos" util module.

[![Greenkeeper badge](https://badges.greenkeeper.io/mikeal/chaosjs.svg)](https://greenkeeper.io/)

This is the util module from Keith Peters' wonderful book ["Playing with Chaos"]() adapted to a node-style module.

### Example

```javascript
var keycode = require('keycode')
  , chaosjs = require('chaosjs')
  ;

window.onload = init

function init() {

  var chaos = chaosjs()

  document.body.addEventListener("keyup", function(event) {
    var key = keycode(event.keyCode)
    if (key === 'space') draw()
    else if (key === 'p') chaos.popImage()
  })

  function draw() {
    var x = Math.random() * (chaos.width - 100)
      , y = Math.random() * (chaos.height - 100)
      , w = 20 + Math.random() * 100
      , h = 20 + Math.random() * 100
      , r = Math.floor(Math.random() * 256)
      , g = Math.floor(Math.random() * 256)
      , b = Math.floor(Math.random() * 256)
      ;

    chaos.context.fillStyle = "rgb(" + r + "," + g + "," + b + ")"
    chaos.context.fillRect(x, y, w, h)
  }
}
```

### Differences from original

The biggest difference is that the "init" method is gone and the module itself intializes an object it returns. This is so that you can use this against multiple canvas elements on a single page.

### chaosjs([element[, autoSize=true]])

Intializes and returns the util API for `element` which can be a canvas element or an element id to lookup. If no element is passed one with an id `canvas` is used. By default the element is resized to the full height and width of the window, you can disable this by passing `false` as the second argument.
