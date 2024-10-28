import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import shanghuList from '../pages/shanghu/list'
import shanghuDetail from '../pages/shanghu/detail'
import shanghuAdd from '../pages/shanghu/add'
import nonghuList from '../pages/nonghu/list'
import nonghuDetail from '../pages/nonghu/detail'
import nonghuAdd from '../pages/nonghu/add'
import chanpinleixingList from '../pages/chanpinleixing/list'
import chanpinleixingDetail from '../pages/chanpinleixing/detail'
import chanpinleixingAdd from '../pages/chanpinleixing/add'
import nongchanyushouList from '../pages/nongchanyushou/list'
import nongchanyushouDetail from '../pages/nongchanyushou/detail'
import nongchanyushouAdd from '../pages/nongchanyushou/add'
import yudingnongchanList from '../pages/yudingnongchan/list'
import yudingnongchanDetail from '../pages/yudingnongchan/detail'
import yudingnongchanAdd from '../pages/yudingnongchan/add'
import shangjiaweiyueList from '../pages/shangjiaweiyue/list'
import shangjiaweiyueDetail from '../pages/shangjiaweiyue/detail'
import shangjiaweiyueAdd from '../pages/shangjiaweiyue/add'
import yushouweikuanList from '../pages/yushouweikuan/list'
import yushouweikuanDetail from '../pages/yushouweikuan/detail'
import yushouweikuanAdd from '../pages/yushouweikuan/add'
import nongchanqiugouList from '../pages/nongchanqiugou/list'
import nongchanqiugouDetail from '../pages/nongchanqiugou/detail'
import nongchanqiugouAdd from '../pages/nongchanqiugou/add'
import nongchandengjiList from '../pages/nongchandengji/list'
import nongchandengjiDetail from '../pages/nongchandengji/detail'
import nongchandengjiAdd from '../pages/nongchandengji/add'
import nonghuweiyueList from '../pages/nonghuweiyue/list'
import nonghuweiyueDetail from '../pages/nonghuweiyue/detail'
import nonghuweiyueAdd from '../pages/nonghuweiyue/add'
import qiugouweikuanList from '../pages/qiugouweikuan/list'
import qiugouweikuanDetail from '../pages/qiugouweikuan/detail'
import qiugouweikuanAdd from '../pages/qiugouweikuan/add'
import gonggaoxinxiList from '../pages/gonggaoxinxi/list'
import gonggaoxinxiDetail from '../pages/gonggaoxinxi/detail'
import gonggaoxinxiAdd from '../pages/gonggaoxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'shanghu',
					component: shanghuList
				},
				{
					path: 'shanghuDetail',
					component: shanghuDetail
				},
				{
					path: 'shanghuAdd',
					component: shanghuAdd
				},
				{
					path: 'nonghu',
					component: nonghuList
				},
				{
					path: 'nonghuDetail',
					component: nonghuDetail
				},
				{
					path: 'nonghuAdd',
					component: nonghuAdd
				},
				{
					path: 'chanpinleixing',
					component: chanpinleixingList
				},
				{
					path: 'chanpinleixingDetail',
					component: chanpinleixingDetail
				},
				{
					path: 'chanpinleixingAdd',
					component: chanpinleixingAdd
				},
				{
					path: 'nongchanyushou',
					component: nongchanyushouList
				},
				{
					path: 'nongchanyushouDetail',
					component: nongchanyushouDetail
				},
				{
					path: 'nongchanyushouAdd',
					component: nongchanyushouAdd
				},
				{
					path: 'yudingnongchan',
					component: yudingnongchanList
				},
				{
					path: 'yudingnongchanDetail',
					component: yudingnongchanDetail
				},
				{
					path: 'yudingnongchanAdd',
					component: yudingnongchanAdd
				},
				{
					path: 'shangjiaweiyue',
					component: shangjiaweiyueList
				},
				{
					path: 'shangjiaweiyueDetail',
					component: shangjiaweiyueDetail
				},
				{
					path: 'shangjiaweiyueAdd',
					component: shangjiaweiyueAdd
				},
				{
					path: 'yushouweikuan',
					component: yushouweikuanList
				},
				{
					path: 'yushouweikuanDetail',
					component: yushouweikuanDetail
				},
				{
					path: 'yushouweikuanAdd',
					component: yushouweikuanAdd
				},
				{
					path: 'nongchanqiugou',
					component: nongchanqiugouList
				},
				{
					path: 'nongchanqiugouDetail',
					component: nongchanqiugouDetail
				},
				{
					path: 'nongchanqiugouAdd',
					component: nongchanqiugouAdd
				},
				{
					path: 'nongchandengji',
					component: nongchandengjiList
				},
				{
					path: 'nongchandengjiDetail',
					component: nongchandengjiDetail
				},
				{
					path: 'nongchandengjiAdd',
					component: nongchandengjiAdd
				},
				{
					path: 'nonghuweiyue',
					component: nonghuweiyueList
				},
				{
					path: 'nonghuweiyueDetail',
					component: nonghuweiyueDetail
				},
				{
					path: 'nonghuweiyueAdd',
					component: nonghuweiyueAdd
				},
				{
					path: 'qiugouweikuan',
					component: qiugouweikuanList
				},
				{
					path: 'qiugouweikuanDetail',
					component: qiugouweikuanDetail
				},
				{
					path: 'qiugouweikuanAdd',
					component: qiugouweikuanAdd
				},
				{
					path: 'gonggaoxinxi',
					component: gonggaoxinxiList
				},
				{
					path: 'gonggaoxinxiDetail',
					component: gonggaoxinxiDetail
				},
				{
					path: 'gonggaoxinxiAdd',
					component: gonggaoxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
