const requireDir = require('require-dir')
const flatten = require('flat')

const debug = require("debug")("httprpc-mount")
// {a:{a:1, b:2}}
// {a.b:2, a.a:1}
// a.b => /a/b + function

module.exports = (dir) => {
    const files = requireDir(dir, { 
        recurse: true, extensions: ['.js', '.json'] 
    })

    debug(files)

    return flatten(files)
}