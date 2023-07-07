var mount = require('./mount');
const Koa = require('koa');

const bodyParser = require("@koa/bodyparser");
const app = new Koa();

var result = mount('./api')
console.dir(result)

app.use(bodyParser());

app.use(async ctx => {
    var key = ctx.path.replace('/', '').split('/').join('.')
    console.dir(key)
    
    if (result[key]){
        console.dir(ctx.query.$p)
    
        ctx.body = result[key].apply(ctx, JSON.parse(ctx.query.$p))
    } else {
        ctx.body = ` not match path ${ctx.path} \n ctx = ${JSON.stringify(ctx,0,4)}`;
    }
});

app.listen(3000);
