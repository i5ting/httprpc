# e2k


express migrate to koa


## express

routes/index.js

```
var express = require('express');
var router = express.Router();

const sleep = ms => new Promise(r => setTimeout(r, ms))

/* GET home page. */
router.get('/', function(req, res, next) {
  // deplay 2 second and then show view
  return sleep(2000).then(() => {
    res.render('index', { title: 'Express' });
  }).catch((err) => {
    // custom error page
  })
});

module.exports = router;
```

## koa

routes/index.js

```
const router = require('koa-router')()

const sleep = ms => new Promise(r => setTimeout(r, ms))

router.get('/', async (ctx, next) => {
  await sleep(2000)
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router

```