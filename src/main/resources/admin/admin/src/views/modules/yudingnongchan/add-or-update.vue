<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"width":"93.5%","padding":"30px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3020)","borderRadius":"6px"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="140px"
		>
			<template >
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'" label="订单编号" prop="dingdanbianhao">
					<el-input v-model="ruleForm.dingdanbianhao" placeholder="订单编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.dingdanbianhao" label="订单编号" prop="dingdanbianhao">
					<el-input v-model="ruleForm.dingdanbianhao" placeholder="订单编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="产品名称" prop="chanpinmingcheng">
					<el-input v-model="ruleForm.chanpinmingcheng" placeholder="产品名称" clearable  :readonly="ro.chanpinmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="产品名称" prop="chanpinmingcheng">
					<el-input v-model="ruleForm.chanpinmingcheng" placeholder="产品名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="产品类型" prop="chanpinleixing">
					<el-input v-model="ruleForm.chanpinleixing" placeholder="产品类型" clearable  :readonly="ro.chanpinleixing"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="产品类型" prop="chanpinleixing">
					<el-input v-model="ruleForm.chanpinleixing" placeholder="产品类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="upload" v-if="type!='info' && !ro.chanpintupian" label="产品图片" prop="chanpintupian">
					<file-upload
						tip="点击上传产品图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.chanpintupian?ruleForm.chanpintupian:''"
						@change="chanpintupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="upload" v-else-if="ruleForm.chanpintupian" label="产品图片" prop="chanpintupian">
					<img v-if="ruleForm.chanpintupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.chanpintupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.chanpintupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="采摘日期" prop="caizhairiqi">
					<el-input v-model="ruleForm.caizhairiqi" placeholder="采摘日期" clearable  :readonly="ro.caizhairiqi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="采摘日期" prop="caizhairiqi">
					<el-input v-model="ruleForm.caizhairiqi" placeholder="采摘日期" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="预订数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="预订数量" clearable  :readonly="ro.shuliang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="预订数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="预订数量" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="价格" prop="jiage">
					<el-input v-model="ruleForm.jiage" placeholder="价格" clearable  :readonly="ro.jiage"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="价格" prop="jiage">
					<el-input v-model="ruleForm.jiage" placeholder="价格" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="预付比例" prop="yufubili">
					<el-select :disabled="ro.yufubili" v-model="ruleForm.yufubili" placeholder="请选择预付比例" >
						<el-option
							v-for="(item,index) in yufubiliOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="预付比例" prop="yufubili">
					<el-input v-model="ruleForm.yufubili"
						placeholder="预付比例" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="预付款" prop="yufukuan">
					<el-input v-model="yufukuan" placeholder="预付款" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.yufukuan" label="预付款" prop="yufukuan">
					<el-input v-model="ruleForm.yufukuan" placeholder="预付款" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="规格" prop="guige">
					<el-input v-model="ruleForm.guige" placeholder="规格" clearable  :readonly="ro.guige"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="规格" prop="guige">
					<el-input v-model="ruleForm.guige" placeholder="规格" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="保质期" prop="baozhiqi">
					<el-input v-model="ruleForm.baozhiqi" placeholder="保质期" clearable  :readonly="ro.baozhiqi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="保质期" prop="baozhiqi">
					<el-input v-model="ruleForm.baozhiqi" placeholder="保质期" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="农户号" prop="nonghuhao">
					<el-input v-model="ruleForm.nonghuhao" placeholder="农户号" clearable  :readonly="ro.nonghuhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="农户号" prop="nonghuhao">
					<el-input v-model="ruleForm.nonghuhao" placeholder="农户号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="商家号" prop="shangjiahao">
					<el-input v-model="ruleForm.shangjiahao" placeholder="商家号" clearable  :readonly="ro.shangjiahao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="商家号" prop="shangjiahao">
					<el-input v-model="ruleForm.shangjiahao" placeholder="商家号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="商家名称" prop="shangjiamingcheng">
					<el-input v-model="ruleForm.shangjiamingcheng" placeholder="商家名称" clearable  :readonly="ro.shangjiamingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="商家名称" prop="shangjiamingcheng">
					<el-input v-model="ruleForm.shangjiamingcheng" placeholder="商家名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="电话" prop="dianhua">
					<el-input v-model="ruleForm.dianhua" placeholder="电话" clearable  :readonly="ro.dianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="电话" prop="dianhua">
					<el-input v-model="ruleForm.dianhua" placeholder="电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="date" v-if="type!='info'" label="下单时间" prop="xiadanshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.xiadanshijian" 
						type="datetime"
						:readonly="ro.xiadanshijian"
						placeholder="下单时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.xiadanshijian" label="下单时间" prop="xiadanshijian">
					<el-input v-model="ruleForm.xiadanshijian" placeholder="下单时间" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"rgba(135, 154, 108, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid rgba(135, 154, 108, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"rgba(135, 154, 108, 1)","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid rgba(135, 154, 108, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"rgba(135, 154, 108, 1)","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				dingdanbianhao : false,
				chanpinmingcheng : false,
				chanpinleixing : false,
				chanpintupian : false,
				caizhairiqi : false,
				shuliang : false,
				jiage : false,
				yufubili : false,
				yufukuan : false,
				guige : false,
				baozhiqi : false,
				nonghuhao : false,
				shangjiahao : false,
				shangjiamingcheng : false,
				dianhua : false,
				xiadanshijian : false,
				sfsh : false,
				shhf : false,
				ispay : false,
			},
			
			
			ruleForm: {
				dingdanbianhao: this.getUUID(),
				chanpinmingcheng: '',
				chanpinleixing: '',
				chanpintupian: '',
				caizhairiqi: '',
				shuliang: '',
				jiage: '',
				yufubili: '',
				yufukuan: '',
				guige: '',
				baozhiqi: '',
				nonghuhao: '',
				shangjiahao: '',
				shangjiamingcheng: '',
				dianhua: '',
				xiadanshijian: '',
				shhf: '',
			},
		
			yufubiliOptions: [],
			
			rules: {
				dingdanbianhao: [
				],
				chanpinmingcheng: [
					{ required: true, message: '产品名称不能为空', trigger: 'blur' },
				],
				chanpinleixing: [
				],
				chanpintupian: [
				],
				caizhairiqi: [
				],
				shuliang: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				jiage: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				yufubili: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				yufukuan: [
					{ validator: validateNumber, trigger: 'blur' },
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
					{ validator: validateMobile, trigger: 'blur' },
				],
				xiadanshijian: [
				],
				sfsh: [
				],
				shhf: [
				],
				ispay: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {


		yufukuan:{
			get: function () {
				return 1*this.ruleForm.shuliang*this.ruleForm.jiage*this.ruleForm.yufubili
			}
		},

	},
	created() {
		this.ruleForm.xiadanshijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
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
						if(o=='chanpintupian'){
							this.ruleForm.chanpintupian = obj[o];
							this.ro.chanpintupian = true;
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
						if(o=='yufubili'){
							this.ruleForm.yufubili = obj[o];
							this.ro.yufubili = true;
							continue;
						}
						if(o=='yufukuan'){
							this.ruleForm.yufukuan = obj[o];
							this.ro.yufukuan = true;
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
						if(o=='xiadanshijian'){
							this.ruleForm.xiadanshijian = obj[o];
							this.ro.xiadanshijian = true;
							continue;
						}
				}
				





				this.ruleForm.shuliang = 0
				this.ro.shuliang = false;














			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.shangjiahao!=''&&json.shangjiahao) || json.shangjiahao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shangjiahao = json.shangjiahao
						this.ro.shangjiahao = true;
					}
					if(((json.shangjiamingcheng!=''&&json.shangjiamingcheng) || json.shangjiamingcheng==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shangjiamingcheng = json.shangjiamingcheng
						this.ro.shangjiamingcheng = true;
					}
					if(((json.dianhua!=''&&json.dianhua) || json.dianhua==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.dianhua = json.dianhua
						this.ro.dianhua = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.yufubiliOptions = "0.2".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `yudingnongchan/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.yufukuan = this.yufukuan








	if(this.ruleForm.chanpintupian!=null) {
		this.ruleForm.chanpintupian = this.ruleForm.chanpintupian.replace(new RegExp(this.$base.url,"g"),"");
	}































var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.shuliang = objcross.shuliang - this.ruleForm.shuliang
	      if(objcross.shuliang<0){
		this.$message.error("预订数量不足");
		return
	      }
                }

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
                                }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "yudingnongchan/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `yudingnongchan/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.yudingnongchanCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
                      this.$http({
                          url: `${table}/update`,
                          method: "post",
                          data: objcross
                        }).then(({ data }) => {});
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `yudingnongchan/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
                  this.$http({
                      url: `${table}/update`,
                      method: "post",
                      data: objcross
                    }).then(({ data }) => {});
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.yudingnongchanCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
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
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.yudingnongchanCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    chanpintupianUploadChange(fileUrls) {
	    this.ruleForm.chanpintupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  font-weight: 500;
	  	  width: 140px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 140px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: rgba(121, 121, 121, 1);
	  	  width: 300px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: rgba(121, 121, 121, 1);
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: rgba(121, 121, 121, 1);
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
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: rgba(121, 121, 121, 1);
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
