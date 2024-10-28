export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"商户","menuJump":"列表","tableName":"shanghu"}],"menu":"商户管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除"],"menu":"农户","menuJump":"列表","tableName":"nonghu"}],"menu":"农户管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"产品类型","menuJump":"列表","tableName":"chanpinleixing"}],"menu":"产品类型管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除","查看评论","预订农产"],"menu":"农产预售","menuJump":"列表","tableName":"nongchanyushou"}],"menu":"农产预售管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除","审核","违约付款","预售尾款","农户违约"],"menu":"预订农产","menuJump":"列表","tableName":"yudingnongchan"}],"menu":"预订农产管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","修改","删除"],"menu":"商家违约","menuJump":"列表","tableName":"shangjiaweiyue"}],"menu":"商家违约管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除"],"menu":"预售尾款","menuJump":"列表","tableName":"yushouweikuan"}],"menu":"预售尾款管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除","查看评论","农产登记"],"menu":"农产求购","menuJump":"列表","tableName":"nongchanqiugou"}],"menu":"农产求购管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除","审核","商家违约","农户违约","求购尾款"],"menu":"农产登记","menuJump":"列表","tableName":"nongchandengji"}],"menu":"农产登记管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","修改","删除"],"menu":"农户违约","menuJump":"列表","tableName":"nonghuweiyue"}],"menu":"农户违约管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"求购尾款","menuJump":"列表","tableName":"qiugouweikuan"}],"menu":"求购尾款管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除","查看评论"],"menu":"公告信息","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言板","tableName":"messages"}],"menu":"留言板"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"交流论坛","tableName":"forum"}],"menu":"交流论坛"},{"child":[{"appFrontIcon":"cuIcon-service","buttons":["新增","查看","修改","删除"],"menu":"在线咨询","tableName":"chat"},{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"农产资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","预订农产"],"menu":"农产预售列表","menuJump":"列表","tableName":"nongchanyushou"}],"menu":"农产预售模块"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","农产登记"],"menu":"农产求购列表","menuJump":"列表","tableName":"nongchanqiugou"}],"menu":"农产求购模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除","支付","农户违约"],"menu":"预订农产","menuJump":"列表","tableName":"yudingnongchan"}],"menu":"预订农产管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","支付"],"menu":"商家违约","menuJump":"列表","tableName":"shangjiaweiyue"}],"menu":"商家违约管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","支付"],"menu":"预售尾款","menuJump":"列表","tableName":"yushouweikuan"}],"menu":"预售尾款管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除","查看评论"],"menu":"农产求购","menuJump":"列表","tableName":"nongchanqiugou"}],"menu":"农产求购管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","审核","支付","农户违约"],"menu":"农产登记","menuJump":"列表","tableName":"nongchandengji"}],"menu":"农产登记管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","删除"],"menu":"农户违约","menuJump":"列表","tableName":"nonghuweiyue"}],"menu":"农户违约管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","支付"],"menu":"求购尾款","menuJump":"列表","tableName":"qiugouweikuan"}],"menu":"求购尾款管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","预订农产"],"menu":"农产预售列表","menuJump":"列表","tableName":"nongchanyushou"}],"menu":"农产预售模块"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","农产登记"],"menu":"农产求购列表","menuJump":"列表","tableName":"nongchanqiugou"}],"menu":"农产求购模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"商户","tableName":"shanghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除","查看评论"],"menu":"农产预售","menuJump":"列表","tableName":"nongchanyushou"}],"menu":"农产预售管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除","审核","违约付款","预售尾款"],"menu":"预订农产","menuJump":"列表","tableName":"yudingnongchan"}],"menu":"预订农产管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看","删除"],"menu":"商家违约","menuJump":"列表","tableName":"shangjiaweiyue"}],"menu":"商家违约管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","删除"],"menu":"预售尾款","menuJump":"列表","tableName":"yushouweikuan"}],"menu":"预售尾款管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除","商家违约","求购尾款"],"menu":"农产登记","menuJump":"列表","tableName":"nongchandengji"}],"menu":"农产登记管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","支付"],"menu":"农户违约","menuJump":"列表","tableName":"nonghuweiyue"}],"menu":"农户违约管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","删除"],"menu":"求购尾款","menuJump":"列表","tableName":"qiugouweikuan"}],"menu":"求购尾款管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","预订农产"],"menu":"农产预售列表","menuJump":"列表","tableName":"nongchanyushou"}],"menu":"农产预售模块"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","农产登记"],"menu":"农产求购列表","menuJump":"列表","tableName":"nongchanqiugou"}],"menu":"农产求购模块"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"农户","tableName":"nonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
