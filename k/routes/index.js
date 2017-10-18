const router = require('koa-router')()

const sleep = ms => new Promise(r => setTimeout(r, ms))

router.get('/', async (ctx, next) => {
  await sleep(2000)
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router
