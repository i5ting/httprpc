const requireDir = require('require-dir')
const flatten = require('flat')

const debug = require("debug")("httprpc")

module.exports = (dir) => {
    const files = requireDir(dir, { 
        recurse: true, extensions: ['.js', '.json'] 
    })

    debug(files)

    return flatten(files)
}