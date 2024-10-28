<template>
<div :style='{"border":"2px solid #a4d9b7","padding":"20px","margin":"20px auto 0","borderRadius":"8px","flexWrap":"wrap","background":"#fff","width":"1200px","position":"relative"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="200px"
    >
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="订单编号" prop="dingdanbianhao">
            <el-input v-model="ruleForm.dingdanbianhao" 
                placeholder="订单编号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="产品名称" prop="chanpinmingcheng">
            <el-input v-model="ruleForm.chanpinmingcheng" 
                placeholder="产品名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="产品类型" prop="chanpinleixing">
            <el-input v-model="ruleForm.chanpinleixing" 
                placeholder="产品类型" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="采摘日期" prop="caizhairiqi">
            <el-input v-model="ruleForm.caizhairiqi" 
                placeholder="采摘日期" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="预订数量" prop="shuliang">
            <el-input v-model="ruleForm.shuliang" 
                placeholder="预订数量" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="价格" prop="jiage">
            <el-input v-model="ruleForm.jiage" 
                placeholder="价格" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}'  label="尾款比例" prop="weikuanbili">
            <el-select v-model="ruleForm.weikuanbili" placeholder="请选择尾款比例"  >
              <el-option
                  v-for="(item,index) in weikuanbiliOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="尾款" prop="weikuan">
              <el-input v-model="weikuan" placeholder="尾款" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="规格" prop="guige">
            <el-input v-model="ruleForm.guige" 
                placeholder="规格" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="保质期" prop="baozhiqi">
            <el-input v-model="ruleForm.baozhiqi" 
                placeholder="保质期" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="农户号" prop="nonghuhao">
            <el-input v-model="ruleForm.nonghuhao" 
                placeholder="农户号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="商家号" prop="shangjiahao">
            <el-input v-model="ruleForm.shangjiahao" 
                placeholder="商家号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="商家名称" prop="shangjiamingcheng">
            <el-input v-model="ruleForm.shangjiamingcheng" 
                placeholder="商家名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="电话" prop="dianhua">
            <el-input v-model="ruleForm.dianhua" 
                placeholder="电话" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"10px","margin":"0 0 0px","display":"inline-block"}' label="登记时间" prop="dengjishijian" >
              <el-date-picker
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.dengjishijian" 
                  type="datetime"
                  placeholder="登记时间">
              </el-date-picker>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"8px 0 0 0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"20px 40px 20px 260px","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"20px","background":"#47b144","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"2px solid #3db769","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#3db769","borderRadius":"20px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            dingdanbianhao : false,
            chanpinmingcheng : false,
            chanpinleixing : false,
            caizhairiqi : false,
            shuliang : false,
            jiage : false,
            weikuanbili : false,
            weikuan : false,
            guige : false,
            baozhiqi : false,
            nonghuhao : false,
            shangjiahao : false,
            shangjiamingcheng : false,
            dianhua : false,
            dengjishijian : false,
            ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          dingdanbianhao: '',
          chanpinmingcheng: '',
          chanpinleixing: '',
          caizhairiqi: '',
          shuliang: '',
          jiage: '',
          weikuanbili: '',
          weikuan: '',
          guige: '',
          baozhiqi: '',
          nonghuhao: '',
          shangjiahao: '',
          shangjiamingcheng: '',
          dianhua: '',
          dengjishijian: '',
          ispay: '',
        },
        weikuanbiliOptions: [],
        rules: {
          dingdanbianhao: [
          ],
          chanpinmingcheng: [
            { required: true, message: '产品名称不能为空', trigger: 'blur' },
          ],
          chanpinleixing: [
          ],
          caizhairiqi: [
          ],
          shuliang: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          jiage: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          weikuanbili: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          weikuan: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          guige: [
            { required: true, message: '规格不能为空', trigger: 'blur' },
          ],
          baozhiqi: [
            { required: true, message: '保质期不能为空', trigger: 'blur' },
          ],
          nonghuhao: [
          ],
          shangjiahao: [
          ],
          shangjiamingcheng: [
          ],
          dianhua: [
            { validator: this.$validate.isMobile, trigger: 'blur' },
          ],
          dengjishijian: [
          ],
          ispay: [
          ],
        },
      };
    },
    computed: {


        weikuan:{
            get: function () {
                return 1*this.ruleForm.shuliang*this.ruleForm.jiage*this.ruleForm.weikuanbili
            }
        },

    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.dengjishijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='dingdanbianhao'){
              this.ruleForm.dingdanbianhao = obj[o];
              this.ro.dingdanbianhao = true;
              continue;
            }
            if(o=='chanpinmingcheng'){
              this.ruleForm.chanpinmingcheng = obj[o];
              this.ro.chanpinmingcheng = true;
              continue;
            }
            if(o=='chanpinleixing'){
              this.ruleForm.chanpinleixing = obj[o];
              this.ro.chanpinleixing = true;
              continue;
            }
            if(o=='caizhairiqi'){
              this.ruleForm.caizhairiqi = obj[o];
              this.ro.caizhairiqi = true;
              continue;
            }
            if(o=='shuliang'){
              this.ruleForm.shuliang = obj[o];
              this.ro.shuliang = true;
              continue;
            }
            if(o=='jiage'){
              this.ruleForm.jiage = obj[o];
              this.ro.jiage = true;
              continue;
            }
            if(o=='weikuanbili'){
              this.ruleForm.weikuanbili = obj[o];
              this.ro.weikuanbili = true;
              continue;
            }
            if(o=='weikuan'){
              this.ruleForm.weikuan = obj[o];
              this.ro.weikuan = true;
              continue;
            }
            if(o=='guige'){
              this.ruleForm.guige = obj[o];
              this.ro.guige = true;
              continue;
            }
            if(o=='baozhiqi'){
              this.ruleForm.baozhiqi = obj[o];
              this.ro.baozhiqi = true;
              continue;
            }
            if(o=='nonghuhao'){
              this.ruleForm.nonghuhao = obj[o];
              this.ro.nonghuhao = true;
              continue;
            }
            if(o=='shangjiahao'){
              this.ruleForm.shangjiahao = obj[o];
              this.ro.shangjiahao = true;
              continue;
            }
            if(o=='shangjiamingcheng'){
              this.ruleForm.shangjiamingcheng = obj[o];
              this.ro.shangjiamingcheng = true;
              continue;
            }
            if(o=='dianhua'){
              this.ruleForm.dianhua = obj[o];
              this.ro.dianhua = true;
              continue;
            }
            if(o=='dengjishijian'){
              this.ruleForm.dengjishijian = obj[o];
              this.ro.dengjishijian = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.weikuanbiliOptions = "0.8".split(',')
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('yushouweikuan/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

          this.ruleForm.weikuan = this.weikuan
        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('yushouweikuan/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('yushouweikuan/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('yushouweikuan/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 200px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 200px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #9ce0b5;
	  border-radius: 4px;
	  padding: 0 12px;
	  box-shadow: inset 0px 0px 48px 0px #cef1db;
	  outline: none;
	  color: #666;
	  width: 80%;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #9ce0b5;
	  border-radius: 4px;
	  padding: 0 10px;
	  box-shadow: inset 0px 0px 48px 0px #cef1db;
	  outline: none;
	  color: #666;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #9ce0b5;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  box-shadow: inset 0px 0px 48px 0px #cef1db;
	  outline: none;
	  color: #666;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #9ce0b5;
	  cursor: pointer;
	  border-radius: 6px;
	  box-shadow: inset 0px 0px 48px 0px #cef1db;
	  color: #3db769;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #9ce0b5;
	  cursor: pointer;
	  border-radius: 6px;
	  box-shadow: inset 0px 0px 48px 0px #cef1db;
	  color: #3db769;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #9ce0b5;
	  cursor: pointer;
	  border-radius: 6px;
	  box-shadow: inset 0px 0px 48px 0px #cef1db;
	  color: #3db769;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #9ce0b5;
	  border-radius: 4px;
	  padding: 12px;
	  box-shadow: inset 0px 0px 48px 0px #cef1db;
	  outline: none;
	  color: #666;
	  width: 80%;
	  font-size: 14px;
	  min-height: 180px;
	}
</style>
