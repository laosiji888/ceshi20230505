<template>
<div class="loginpage">
    <div class="login">
     <img src="../assets/css/img/login/login.png" alt="" class="login_img">
     <span class="login_welcome">{{$t('logina.welcome')}}</span>
     <!-- <img class="close_btn" src="../assets/css/img/login/clear.png" alt="" @click="closebtn()"> -->
     <div>  
         <el-form 
     :model="loginForm"
     size="medium"
      :rules="loginFormrules" ref="loginFormRef" class="loginhome" >
      <span class="login__email">{{$t('logina.email')}}</span>
 <el-form-item  prop="email" >
   <div class="sjkdn">
        <el-input ref="loginformemailref" @input="focusfns" @change="blurfns" class="loginformemail" v-model="loginForm.email"  clearable  :placeholder='email_holder' > </el-input></div>
  </el-form-item>
   <span class="login__pass">{{$t('logina.pass')}}</span>
  <el-form-item  prop="password">
    <div class="sjkdn"> 
        <el-input show-password type="password"  v-model="loginForm.password" :placeholder='pass_holder' ></el-input></div>

  </el-form-item>
  <!-- 记住密码区 -->
  <el-form-item class="foot_log">
 <el-checkbox v-model="checked">{{$t('logina.remember')}}</el-checkbox>
<span @click="isForget()">  <router-link class="forpass" to="/forgetpassword">{{$t('logina.forgetpass')}}</router-link></span>
    
  </el-form-item>
    </el-form>
  <span slot="footer" class="dialog-footer">
     <span class="userexit" v-show='isshow'>
       {{tip}}
     </span>
     <el-button  class="login_button"  @click="login"  >{{$t('logina.sign')}}</el-button>
         <div class="agreement">
             <!-- <el-link type="danger" @click="dialogRegisterVisible = true" >Register an account</el-link> -->
        <span> {{$t('logina.click')}}<br><span @click="isPricy()"><router-link to="/privacy" class="login_pri_agree" >{{$t('logina.privacy')}}</router-link> </span> {{$t('logina.and')}} <span @click="isAgreement()"><router-link to="/termsService" class="login_pri_agree" >{{$t('logina.agreement')}}</router-link></span></span>
          </div>
   </span>
    </div>
    </div>
    <div class="login_footer">
 <div class="copyright">
          Copyright © 2021 All rights reserved.
      </div>
<div class="lang">
   <div class="language"><img src="../assets/css/img/banner/nwicon31.png" alt="" > <span > {{language_footer}}</span></div> 
<ul class="language_ul">
    <li @click="changeen1()">English</li>
    <li @click="changezh1()">中文</li>
</ul>
 </div>

 </div>

</div>
</template>
<script>
import AES from '../utils/AES'
 import qs from 'qs'
 let Base64 = require('js-base64').Base64
import DES from '../utils/DES'
export default{
name:'',
data(){
    return{
        isshow:false,
        tip:'',
        language_footer:'',
        email_holder:'',
        pass_holder:'',
       checked:true,
      loginForm:{
        email:'123@qq.com',
        password:"Qq12sa",
    },
     loginFormrules:{
                   email:[
                       { required: true, message: 'Please enter an email containing @', trigger: 'blur' },
                       { type: 'email', message: 'Please enter an email containing @', trigger: 'blur' }
                   ],
                   password:[
                       {required:true, message:'Please enter a password of 6-16 digits, must contain uppercase letters, lowercase letters, numbers or special characters, etc.',trigger:'blur'},
                       {pattern:new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,16}$'),message:'Please enter a password of 6-16 digits, must contain uppercase letters, lowercase letters, numbers or special characters, etc.', trigger: 'blur'}
                       
                   ]
                },


            
    }
},


methods:{
login(){

},

focusfns () {
  // console.log(this.$refs.loginformemailref.value);
if(this.$refs.loginformemailref.value=="a"){
  console.log(this.$refs.loginformemailref.value);
  this.isCloseform=false
}else{
  this.isCloseform=true
}
},
blurfns () {
  if(this.$refs.loginformemailref.value ==""){
    this.isCloseform=false
  }
},
    login(){
        let that=this;
        this.$refs.loginFormRef.validate(async valid=>{
          if(!valid) return false
            var data={email:this.loginForm.email,password:this.loginForm.password}
            data=JSON.stringify(data)
            var data=AES.encrypt(data)
            var data=DES.encrypt(data)
            var data=Base64.encode(data)
                    console.log(data);
                    var data ={params:data}
                    // console.log(data);
                    var data =JSON.stringify(data)

                    const res = await this.axios({
                           method:"post",
                           url:'v1/user/register',
                           data:data
                       })
                  var data =res.data
                  var data=Base64.decode(data)
                   //  console.log(data);
                    var data=DES.decrypt(data)
                    //  console.log(data);
                     var data=AES.decrypt(data)
       
                     var datas =JSON.parse(data)   
                     console.log(datas);    
                    if(datas.code !==200) {
                        console.log(111111);
                        this.isshow=true
                  this. tip='The user mailbox already exists or the password is wrong'
      
            }
              // else if(datas.msg=='The email  already exists, Login successful !'){
              //   this.dialogRegisterVisible=true
              // }
              else{
                 
                 this.$router.push('/home')
                 this.$store.commit('set_token',datas.data.token)
                 console.log(datas.data.token);
                 this.$store.commit('set_email',datas.data.email)
              
              console.log(this.$parent.showname);
                this.$parent.showname=false;
                 this.$parent.showname=true
                }
               
              })
             
          
            },
changeen1(){
  
    this.$parent.changeen()
    this.language_footer='English'
    console.log(this.language_footer);
},
changezh1(){
this.$parent.changezh()
  this.language_footer='中文'
}
},
created(){



},
mounted(){
  
if(this.$store.state.lang=='en'||this.$store.state.lang=='undefined'){
       this.email_holder="Please input your email"
       this.pass_holder='Please enter password'
       this.language_footer='English'
   }else if(this.$store.state.lang=='zh'){
       this.email_holder='请输入邮箱'
       this.pass_holder='请输入密码'
       this.language_footer='中文'
   }
},
updated(){
  
   if(this.$store.state.lang=='zh'||this.$store.state.lang=='undefined'){
       this.email_holder="Please input your email"
       this.pass_holder='Please enter password'
        this.language_footer='English'
        
   }else if(this.$store.state.lang=='en'){
       this.email_holder='请输入邮箱'
       this.pass_holder='请输入密码'
       this.language_footer='中文'
      
   }
}
}
</script>
<style lang='less' scoped>
.loginpage{
    height: 1016px;
    width: 1920px;
    position: absolute;
    top: 64px;
    
}
.login{
    position: relative;
    top: 206px;
    left: 493px;
    width: 960px;
    height: 560px;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 2px 68px 0px rgba(0, 0, 0, 0.08);
    border-radius: 23px;
    border: 2px solid;
    border-image: linear-gradient(135deg, rgba(255, 255, 255, 0.45), rgba(255, 227, 226, 0.46)) 2 2;
}
.login_img{
    width: 520px;
    height: 520px;
    position: absolute;
    top: 20px;
    left: 20px;
}
.login_welcome{
    height: 50px;
    position: absolute;
    left: 567px;
    top: 71px;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 50px;

}
.login__email{
    line-height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    display: inline-block;
    margin-bottom: 10px ;
}
.login__pass{
    line-height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
     display: inline-block;
       margin-bottom: 10px

}
.el-form {
    width: 356px  !important;
    position: absolute;
    top: 158px;
    left: 572px;
    height: 270px !important;
}
.sjkdn{
  /deep/ .el-input > input{
    height: 42px;
    font-size: 16px;
}
}
.sjkdn{
/deep/.el-input__inner{
    border-radius: 4px ;
border: 1px solid #D5D5D5 ;
}
}

.foot_log{
    position: absolute !important;
    top: 200px !important;
    width: 100%;
    // text-align: justify !important;
    
}

.is-checked{
  /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
    color: #FA4E4E ;
    // font-size: 16px;
}  
}
.is-checked{
  /deep/.el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: #FA4E4E;
    border-color:  #FA4E4E;;
}
}
.el-checkbox__inner:hover{
    border-color: #FA4E4E !important;
}
.forpass{
   position: absolute;
   right: 0;
   color: #FA4E4E;
}
.login_button{
    width: 356px;
    height: 42px;
    background: #FA4E4E;
    border-radius: 4px;
    position: absolute;
    top: 449px;
    left: 572px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 42px;
    padding: 0;
}
.agreement{
    position: absolute;
    top: 501px;
    left: 625px;
    text-align: center;
    color: #FA4E4E;

}
.login_pri_agree{
    color: #FA4E4E;
    border-bottom: 1px solid #FA4E4E;
}
.el-form-item--medium{
    /deep/:first-child .el-form-item__error{
//   display: none;
width: 218px;
position: absolute;
top: 0;
left: 365px;
padding-left: 12px;
border-radius: 4px;
background: #40407A;
padding-top: 15px;
padding-bottom: 15px;
font-size: 12px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
}
}
.el-form-item--medium{
    /deep/:first-child .el-form-item__error::before{
    content: '';
			width: 0;
			height: 0;
			border: 20px solid;
			position: absolute;
			top: 1px;
			left: -30px;
			border-color:   transparent  #40407A  transparent  transparent;


    }}
.copyright{
    position: absolute;
    left: 840px;
    bottom: 34px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
   
}

.lang{
    position: absolute;
    bottom: -6px;
    left: 1322px;
    width: 128px;
    height: 80px;
}
.lang>ul{
    width: 128px;
    height: 102px;
    position: absolute;
    // left: 1378px;
    // top: 54px;
    left: -18px;
    bottom: 70px;
    z-index: 10;
    background: #FFFFFF;
    box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    display: none;
}
.lang:hover>.language_ul{
    display: block;
}
.lang>ul>li{
    margin: 14px;
    width: 100px;
    height: 33px;
    list-style: none;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    color: #333333;
    line-height: 33px;
    
}
.lang>ul>li:hover{
    
    background: #F6F6F6;
    border-radius: 4px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EB4840;


}
// .language{
//     position: absolute;
//     left: 1430px;
//     top: 20px;
//     width: 24px;
//     height: 64px;
// }
.language>img{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 30px;
}
.language>span{
line-height: 80px;
margin-left: 30px;
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
}
.language>span::after{
                 position: absolute;
				right: 29px;
				top: 31px;
				content: "";
				width: 10px;
                height: 10px;
                border-bottom: 1px solid #333;
                border-right: 1px solid #333;
                transform: rotate(45deg);
				

}

.el-input {
    /deep/.el-input__clear {
    color:  #40407A !important;
    font-size: 16px;
}
}
.el-input--medium {
   /deep/.el-input__icon{
       line-height: 45px;
   }
    }
.userexit{
    width: 218px;
    position: absolute;
    top: 299px;
left: 940px;
padding-left: 12px;
border-radius: 4px;
background: #40407A;
padding-top: 15px;
padding-bottom: 15px;
font-size: 12px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;

}
.userexit::before{
    content: '';
            width: 0;
			height: 0;
			border: 20px solid;
			position: absolute;
			top: 1px;
			left: -30px;
			border-color:   transparent  #40407A  transparent  transparent;

}
</style>