/**
* Useful async functions
**/

function asyncLoop(max, iteration, func, callback) {
  new Promise( (fulfill, reject) => {
    func(iteration, (err) => {
      if (err) reject(err)
      fulfill()
    })
  }).then( () => {
    iteration++
    if (iteration < max) {
      asyncLoop(max, iteration, func, callback)
    }
    return callback(null)
  }).catch( (err) => {
    callback(err)
  })
}

module.exports.asyncLoop = asyncLoop
