import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import nonghu from '@/views/modules/nonghu/list'
    import yushouweikuan from '@/views/modules/yushouweikuan/list'
    import yudingnongchan from '@/views/modules/yudingnongchan/list'
    import nongchanqiugou from '@/views/modules/nongchanqiugou/list'
    import nongchanyushou from '@/views/modules/nongchanyushou/list'
    import nonghuweiyue from '@/views/modules/nonghuweiyue/list'
    import forum from '@/views/modules/forum/list'
    import qiugouweikuan from '@/views/modules/qiugouweikuan/list'
    import chanpinleixing from '@/views/modules/chanpinleixing/list'
    import discussnongchanqiugou from '@/views/modules/discussnongchanqiugou/list'
    import nongchandengji from '@/views/modules/nongchandengji/list'
    import chat from '@/views/modules/chat/list'
    import shangjiaweiyue from '@/views/modules/shangjiaweiyue/list'
    import messages from '@/views/modules/messages/list'
    import discussnongchanyushou from '@/views/modules/discussnongchanyushou/list'
    import discussgonggaoxinxi from '@/views/modules/discussgonggaoxinxi/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import shanghu from '@/views/modules/shanghu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '农产资讯',
        component: news
      }
      ,{
	path: '/nonghu',
        name: '农户',
        component: nonghu
      }
      ,{
	path: '/yushouweikuan',
        name: '预售尾款',
        component: yushouweikuan
      }
      ,{
	path: '/yudingnongchan',
        name: '预订农产',
        component: yudingnongchan
      }
      ,{
	path: '/nongchanqiugou',
        name: '农产求购',
        component: nongchanqiugou
      }
      ,{
	path: '/nongchanyushou',
        name: '农产预售',
        component: nongchanyushou
      }
      ,{
	path: '/nonghuweiyue',
        name: '农户违约',
        component: nonghuweiyue
      }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/qiugouweikuan',
        name: '求购尾款',
        component: qiugouweikuan
      }
      ,{
	path: '/chanpinleixing',
        name: '产品类型',
        component: chanpinleixing
      }
      ,{
	path: '/discussnongchanqiugou',
        name: '农产求购评论',
        component: discussnongchanqiugou
      }
      ,{
	path: '/nongchandengji',
        name: '农产登记',
        component: nongchandengji
      }
      ,{
	path: '/chat',
        name: '在线咨询',
        component: chat
      }
      ,{
	path: '/shangjiaweiyue',
        name: '商家违约',
        component: shangjiaweiyue
      }
      ,{
	path: '/messages',
        name: '留言板',
        component: messages
      }
      ,{
	path: '/discussnongchanyushou',
        name: '农产预售评论',
        component: discussnongchanyushou
      }
      ,{
	path: '/discussgonggaoxinxi',
        name: '公告信息评论',
        component: discussgonggaoxinxi
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/shanghu',
        name: '商户',
        component: shanghu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
