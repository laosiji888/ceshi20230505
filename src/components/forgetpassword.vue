<template>
<div class="forget_pass">
    <div class="forget_pass_out">
        <img src="../assets/css/img/forgetpassword/forgetpassword.png" alt="" class="for_img">
        <p>Forgot your password?</p>
        <span class="for_title">Don’t worry, we got you.</span>
 <div class="forget_form">
      <el-form
        size="medium"
        :model="registerForm"
        :rules="registerFormrules"
        ref="registerFormRef"
        aria-placeholder="Please input your email"
      >
      <span class="code_tip">Click verify to get the email verification code</span>
        <span class="forget_email">Email:</span><br />

        <el-form-item prop="email">
          <el-input
       
            class="inputemail inputemil-top"
            v-model="registerForm.email"
       clearable
          
          ></el-input>
          
        </el-form-item>
        <span class="forget_email">E-mail verification:</span>
          <el-row >
        <el-form-item>
      
          <el-col :span="15">
        <el-form-item prop="code">
          <el-input  class="inputver_code inputemail input-center" type="tel" v-model="registerForm.code" placeholder="Enter the email verification code">
          </el-input>
        </el-form-item>
          </el-col>
          <el-col :span="8" :offset="1" >
            <el-form-item>
        <el-button
          @click="getCode()"
          class="buttoncoded"
          :style="buttoncode"
          :class="{ 'disabled-selfstyle': 'getCodeBtnDisable '}"
          :disabled="getCodeBtnDisable"
          >{{ codeBtnWord }}</el-button
        >
            </el-form-item>
          </el-col>
          
</el-form-item>
</el-row>
        <!-- 创建密码 -->
        <span class="forget_email">New Password:</span><br/>
        <el-form-item class=" inputemail inputemail-bottom" prop="enterPassword">
          <el-input
            show-password
            type="password"
            v-model="registerForm.enterPassword"
            placeholder="Please create password"
          ></el-input>
        </el-form-item>
   
        <!-- 确认密码 -->

        <!-- 提交注册 -->
        <el-button :style="selfsubmitbutton" class="selfsubmitbutton" @click="submit">
          Reset Password
        </el-button>
        
      </el-form>
    </div>
     <div class="back_to_login">
          <router-link to="/home" class="back_to_login_1">Back to home</router-link>
       </div>
    </div>

</div>
</template>
<script>
 import qs from 'qs'
export default {
  data() {
    return {
      message:this.$store.state.email,
 
       buttoncode:{
          background:'#FA4E4E',
          color:'#FFF'
        },
 selfsubmitbutton:{
        
         background: '#FA4E4E',
         color: '#FFFFFF'


},

      
      dialogRegisterVisible: false,
      registerForm: {
        email: "",
        code: "",
      
        enterPassword: ""
      },
      codeBtnWord: "Send Code",
      
      registerFormrules: {
        email: [
          {
            required: true,
            message: "Please input your email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please enter an email containing @",
            trigger: ["blur", "change"]
          }
        ],
        code: [
          {
            required: true,
            message: "Enter the email verification code",
            trigger: "blur"
          },
          
        ],
       
        enterPassword: [
          {
            required: true,
            message: "Please create your password",
            trigger: "blur"
          },
           {pattern:new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,16}$'),message:'The password is 6-16 digits and must contain three types: uppercase letters, lowercase letters, numbers or special characters', trigger:  ["blur", "change"]}
     
          // {validator: (rule, value, callback) => {
          //     if (value === "") {
          //       callback(new Error("密码不能为空"));
          //     } 
              // else if (value != this.registerForm.creatPassword) {
              //   callback(new Error("两次输入不一致"));
              // } 
          //     else {
          //       callback("恭喜你");
          //     }
          //   },
          //   trigger: "blur"
          // }
        ]
      },
      waitTime: 60
    };
  },
  computed: {
    getCodeBtnDisable: {
      get() {
        if (this.waitTime == 60) {
          if (this.registerForm.email) {
            return false;
          }
          return true;
        }
        return true;
      },
      set() {}
    }
  },

  methods: {
   async getCode() {
      if (this.registerFormrules) {
       let params='';
        params= this.registerForm.email;
        var data ={email:params}
        const datas=qs.stringify(data)

        // 调用获取短信验证码接口
 const res =await this.axios({
  method:'post',

  headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url:"v1/user/sendEmailCode",
    data:datas
 })

     if(res.status !==200){


     }else{
     alert('send success')

     }

        // 因为下面用到了定时器，需要保存this指向
        let that = this;
        that.waitTime--;
        that.buttoncode.opacity = 0.4;
        that.getCodeBtnDisable = true;
        that.codeBtnWord = this.waitTime;
        let timer = setInterval(function() {
          if (that.waitTime > 1) {
            // console.log(timer);     
                  that.waitTime--;
            that.codeBtnWord = that.waitTime+'s';
            //  that.buttoncode.background=`#D5D5D5`
          } else {
            clearInterval(timer);
            that.codeBtnWord = "Send Code";
            that.getCodeBtnDisable = false;
            that.buttoncode.background = `#FA4E4E`;
            that.waitTime = 60;
          }
        }, 1000);
      }
     },
    submit() {

      this.$refs.registerFormRef.validate(async (valid) => {

        if (!valid) return false
        
       var data ={email:this.registerForm.email,code:this.registerForm.code,password:this.registerForm.enterPassword}

       const datas=qs.stringify(data)

      //  const datas=qs.stringify(data)


       const res =await this.axios({
         method:"post",
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
   
         url:"v1/user/resetPassword",
         data:datas
       })
       if(res.data.msg!=="Reset password successfully!"){
 
         alert('chance failure')
       }
       else{
         this.$router.push('/successful')
  
         

       }
        //    if(!valid) return false
        //    const { data:res} = await this.$http.post('register',this.registerForm)
        //    if(res.meta.status !==200) return this.$message.error('注册失败')
        //    this.$message.success('注册成功')
        //    window.sessionStorage.setItem('token',res.data.token)
      });
    }
  }
};
</script>
<style lang='less' scoped>
.forget_pass{
    height: 936px;
    width: 1920px;
    position: absolute;
    top: 64px;

background: #FAFAFA;
}
.forget_pass_out{
    width: 1200px;
    height: 720px;
    position: absolute;
    top: 64px;
    left: 360px;
    background: #FFFFFF;
    border-radius: 23px;
    border: 2px solid;
    border-image: linear-gradient(135deg, rgba(255, 255, 255, 0.45), rgba(255, 227, 226, 0.46)) 2 2;
}
.for_img{
    width: 551px;
    height: 485px;
    position: absolute;
    top: 121px;
    left: 601px;
}
p{
    position: absolute;
    top: 90px;
    left: 64px;
    font-size: 40px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #EB4840;
}
.for_title{
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    position: absolute;
    top: 159px;
    left: 64px;
}
.el-form{
    width: 430px;
    position: absolute;
    top: 270px;
    left: 64px;
}
.code_tip{
    position: absolute;
    top: 170px;
    left: 136px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #EB493F;
}
.el-form-item--medium{
/deep/.el-form-item__error{
    display: none ;
}
}
.el-form-item--medium{
/deep/.el-input--medium .el-input__inner{
    height: 42px;;
}
}
.buttoncoded{
    width: 144px;
    height: 42px;
}
.selfsubmitbutton{
    width: 430px;
    height: 42px;
}
.back_to_login{
    position: absolute;
    top: 607px;
    left: 226px;
    
}
.back_to_login_1{
font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #EB493F;
}
.forget_email{
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
}
.el-form-item {
    margin-top: 5px;
}
.el-input {
    /deep/.el-input__clear {
    color:  #40407A !important;
    font-size: 16px;
}
}
</style>