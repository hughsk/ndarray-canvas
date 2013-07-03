module.exports = function ndarrayCanvas(canvas, red, green, blue) {
  if (!green || !blue) return toCanvas(canvas, red, red, red)
  return toCanvas(canvas, red, green, blue)
}

function toCanvas(canvas, red, green, blue) {
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.width = red.shape[0]
    canvas.height = red.shape[1]
  }

  var ctx = canvas.getContext('2d')
    , imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    , data = imageData.data
    , width = red.shape[0]
    , height = red.shape[1]
    , x, y, i = 0

  for (y = 0; y < height; y++)
  for (x = 0; x < width; x++, i += 4) {
    data[i+3] = 255
    data[i  ] = red.get(x, y)
    data[i+1] = green.get(x, y)
    data[i+2] = blue.get(x, y)
  }

  ctx.putImageData(imageData, 0, 0)

  return canvas
}
