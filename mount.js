var requireDir = require('require-dir');
var flatten = require('flat')
const Koa = require('koa');
const app = new Koa();

var files = requireDir('./api', { recurse: true, extensions: ['.js', '.json'] })

var result = flatten(files)
console.dir(result)

console.dir(result['a.a'](2232))

module.exports = (dir) => {

    var files = requireDir(dir, { recurse: true, extensions: ['.js', '.json'] })

    var result = flatten(files)
    console.dir(result)
    return result
}