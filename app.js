const path = require('path')
const Koa = require('koa')
const { bodyParser } = require("@koa/bodyparser")

const mount = require('./src/mount')
const entry = require('./src/entry')

const app = new Koa()

const dir = path.resolve('./api')

const routers = mount(dir)

app.use(bodyParser());

app.use(entry(routers));

module.exports = app
