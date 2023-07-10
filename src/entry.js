const debug = require("debug")("httprpc")

module.exports = function (routers) {
    return async ctx => {
        const key = ctx.path.replace('/', '').split('/').join('.')

        let param = ctx.method === 'POST' ? ctx.request.body : JSON.parse(ctx.query.$p)

        debug(key)
        debug(param)

        if (routers[key]) {
            ctx.body = routers[key].apply(ctx, param)
        } else {
            ctx.body = ` not match path ${ctx.path} \n ctx = ${JSON.stringify(ctx, 0, 4)}`;
        }
    }
}