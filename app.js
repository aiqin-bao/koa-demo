const Koa = require('koa');

const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')
const app = new Koa();


const dataJson = `{"code":"200","message":"OK","data":{"citys":[{"name":"九江市","areacode":"0796"},{"name":"上饶市","areacode":"0793"},{"name":"赣州市","areacode":"0797"},{"name":"萍乡市","areacode":"0799"},{"name":"鹰潭市","areacode":"0701"},{"name":"新余市","areacode":"0790"},{"name":"其他","areacode":"eeee"},{"name":"南昌市","areacode":"0791"},{"name":"抚州市","areacode":"0794"},{"name":"宜春市","areacode":"0795"},{"name":"景德镇","areacode":"0798"}],"usercnts":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23233,23354,0,0,0,0,0,0,0,0,0,0],"avgTimes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9187,5238,0,0,0,0,0,0,0,0,0,0],"stbs":[{"name":"其他","areacode":"eeee"},{"name":"华为","areacode":"1xxx"},{"name":"中兴","areacode":"2xxx"},{"name":"烽火","areacode":"3xxx"},{"name":"贝尔","areacode":"4xxx"},{"name":"杭研","areacode":"5xxx"},{"name":"直真","areacode":"7xxx"},{"name":"终端公司","areacode":"8xxx"},{"name":"有华","areacode":"9xxx"},{"name":"物联网","areacode":"6xxx"}],"runningTimes":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,213456434,122340000,0,0,0,0,0,0,0,0,0,0],"dateList":["20190301","20190302","20190303","20190304","20190305","20190306","20190307","20190308","20190309","20190310","20190311","20190312","20190313","20190314","20190315","20190316","20190317","20190318","20190319","20190320","20190321","20190322","20190323","20190324","20190325","20190326","20190327","20190328","20190329","20190330","20190331"]}}`





app.use( async (ctx, next) => {
	console.warn(ctx.request.url);
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  	ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	if (ctx.method == 'OPTIONS') {
		ctx.body = 200; 
	} else {
		await next();
	}
} )

app.use(bodyParser())


router.get('/hello/:name', async(ctx, next) => {
	const name = ctx.params.name;
	ctx.response.body= `<h1> hello  ${name}</h1>`
})

router.get('/index', async(ctx, next) => {
	ctx.response.body = "<h1> hello index</h1>"
})

router.post('/post-admin', async(ctx, next) => {
	ctx.response.type = "text/json",
	ctx.response.body = dataJson
})

app.use(router.routes());

app.listen(3002)

console.log('app started at port 3002')