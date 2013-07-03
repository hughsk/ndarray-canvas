# ndarray-canvas #

Renders a 2D [ndarray](http://github.com/mikolalysenko/ndarray) to a canvas
element.

## Installation ##

``` bash
npm install ndarray-canvas
```

## Usage ##

### `require('ndarray-canvas')(canvas, ndarray)` ###

Renders a single ndarray as a greyscale image, returning the canvas element.
If a canvas element is not supplied, a new one will be created.
Values in the array are expected to range between 0 and 255.

### `require('ndarray-canvas')(canvas, red, green, blue)` ###

If you supply three ndarrays to the function (one representing each channel),
you can get an RGB canvas back instead!

Take the following example:

``` javascript
var cave = require('cave-automata-2d')
  , fill = require('ndarray-fill')
  , zeros = require('zeros')
  , render = require('./')

function amplify(array) {
  return fill(array, function(x, y) {
    return array.get(x, y) * 255
  })
}

function generate() {
  var array = zeros([250, 250])
  cave(array)(20)
  amplify(array)
  return array
}

var greyscale = render(null, generate())
  , rgb = render(null, generate(), generate(), generate())

document.body.appendChild(greyscale)
document.body.appendChild(rgb)
```

And you should get back something like this:

[![example](https://raw.github.com/hughsk/ndarray-canvas/master/screenshot.png)](http://github.com/hughsk/ndarray-canvas/blob/master/demo.js)
