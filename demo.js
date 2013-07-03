var cave = require('cave-automata-2d')
  , fill = require('ndarray-fill')
  , domready = require('domready')
  , zeros = require('zeros')
  , render = require('./')

function amplify(array) {
  return fill(array, function(x, y) {
    return array.get(x, y) * 255
  })
}

domready(function() {
  document.body.appendChild(
    render(null
      , amplify(cave(zeros([250, 250]))(20))
    )
  )

  document.body.appendChild(
    render(null
      , amplify(cave(zeros([250, 250]))(20))
      , amplify(cave(zeros([250, 250]))(20))
      , amplify(cave(zeros([250, 250]))(20))
    )
  )
})
