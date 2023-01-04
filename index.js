const Koa = require('koa');
const KoaCors = require('@koa/cors');
const KoaRouter = require('@koa/router');
const KoaBodyParser = require('koa-bodyparser');
const axios = require('axios');

const app = new Koa();
const router = new KoaRouter();

router.post('/github_access_token', async (ctx, next) => {
  const reqBody = ctx.request.body;
  const res = await axios.post('https://github.com/login/oauth/access_token', reqBody);
  const params = new URLSearchParams(res.data);
  ctx.body = Array.from(params.entries()).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
  await next();
});

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello,World!\n to use this service,just replace proxy with https://github.com/login/oauth/access_token';
  await next();
})

app.use(KoaCors());
app.use(KoaBodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(9999, () => {
  console.log('cors-server success!');
});
