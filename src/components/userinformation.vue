<template>
<div class="user_information">
    <div class="user_form">
    <p>
     BASIC INFORMATION
    </p>
    <span class="fengexian1">

    </span>
     <div class="userinformation_content">
         <el-form
         :model="updateForm"
         :rules="updateFormrules"
         ref="updateFormRef"
        
         > 
             <span class="userinfo_email_t">email:</span>
             <el-form-item prop="email">
             <el-input  v-model="updateForm.email" class="userinfo_email_i">
           
             </el-input>
             </el-form-item>
             <span class="userinfo_old_t">
             Old Password:
             </span>
             <el-form-item prop="oldPassword">
<el-input  show-password class="userinfo_old_i" type="password" v-model="updateForm.oldPassword" > </el-input>
             </el-form-item>
             <span class="userinfo_new_t">
             New Password:
             </span>
             <el-form-item prop="newPassword">
<el-input type="password" show-password v-model="updateForm.newPassword" class="userinfo_new_i"></el-input>
             </el-form-item>
         </el-form>
        <el-button @click="submitForm" class="userinfo_save">Save</el-button>
        <el-button @click="cancel" class="userinfo_cancel">Cancel</el-button>
        </div>
    </div>
 </div>
</template>
<script>
 import qs from 'qs'
export default {
  name: "",
  data(){
  return {
      updateForm:{
          email:'',
          oldPassword:'',
          newPassword:''
      },
      updateFormrules:{
           email:[
                       { required: true, message: 'Please input your email', trigger: 'blur' },
                       { type: 'email', message: 'Please enter your email containing @', trigger: ['blur', 'change'] }
                   ],
           oldPassword:[
                       {required:true, message:'',trigger:'blur'},
                        
                  ],
          newPassword:[
                      {required:true, message:'',trigger:'blur'},
                         {pattern:new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,16}$'),message:'The password is 6-16 digits and must contain three types: uppercase letters, lowercase letters, numbers or special characters', trigger:  ["blur", "change"]},
          ]
           
      }
  }
  },
  methods:{
      
      submitForm(){
          this.$refs.updateFormRef.validate(async valid=>{
   
              if(!valid)return false
              var data={email:this.updateForm.email,oldPassword:this.updateForm.oldPassword,password:this.updateForm.newPassword}

              const datas=qs.stringify(data)

              const res = await this.axios
              ({
         method:"post",
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
   
         url:"v1/user/updatePassword",
         data:datas,
        
       })
       if(res.data.code !==200){
          alert('用户名或密码错误')
       }else {
           alert('Modified successfully')
       }
          })
      },
      cancel(){

      }
  }
};
</script>
<style lang='less' scoped>
.user_information{
    position: absolute;
    width: 932px;height: 554px;
    top: 0;
    left: 268px;
    background-color: #fff;
    border-radius: 6px
}
p{
    font-size: 20px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
position: absolute;
top: 54px;
left: 72px;
}
.fengexian1{
    width: 879px;
    position: absolute;
    top: 100px;
    left: 26px;
    border-bottom: 1px solid #d5d5d5;
}

.userinformation_content{
 /deep/.el-form{
   width: 545px;
   position: absolute;
   top: 141px;
   left: 246px;
}
}
.el-input{
    /deep/.el-input__inner{
        height: 48px;
        background-color: #F4F4F4;
    }
}
.el-input{
    /deep/.el-input__inner:focus{
        height: 48px;
        background-color: #ffffff;
    }
}
.userinfo_email_t{
    position: absolute;
    top: 12px;
    left:-70px;
    font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;

}
.userinfo_old_t{
    position: absolute;
    top: 86px;
    left:-132px;
    font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
}
.userinfo_new_t{
    position: absolute;
    top: 155px;
    left:-132px;
    font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
}
.userinfo_save{
    position: absolute;
    top: 467px;
    left: 528px;
    width: 116px;
height: 40px;
background: #40407A;
border-radius: 24px;
font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
}
.userinfo_cancel{
    position: absolute;
    top: 467px;
    left: 669px;
width: 116px;
height: 40px;
background: #FFFFFF;
border-radius: 24px;
border: 1px solid #D5D5D5;
font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
}
.userinfo_save:hover{
background: #40407A;
border-radius: 24px;
opacity: 0.4;
}
.userinfo_cancel:hover{
    opacity: 0.4;
border: 1px solid #D5D5D5;
}
.el-input {
    /deep/.el-input__clear {
    color:  #40407A !important;
    font-size: 16px;
}
}
</style>