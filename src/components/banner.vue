<template>
<div>
    <div class="banner">
  <router-link to="/home"><img src="../assets/css/img/banner/nwlogo.png" alt="" class="banner_logo"></router-link>  

<router-link to="/mergePDF" class="banner_merge">{{$t('banner.merge')}}</router-link>
<router-link to="/splitPDF" class="banner_split">{{$t('banner.split')}}</router-link>
<router-link to="/compressPDF" class="banner_compress">{{$t('banner.compress')}}</router-link>
<router-view></router-view>
<div class="conver">
<span class="banner_convert">{{$t('banner.Conversion')}}</span>
<div class="banner_drop_conver">
<ul>
    <span class="banner_drop_conve_title">{{$t('bannercon.pdfto')}}</span>
 <li><img src="../assets/css/img/main/nwicon11.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannercon.pdftoword')}}</router-link></li>
 <li><img src="../assets/css/img/main/nwicon5.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannercon.pdftoppt')}}</router-link></li>
 <li><img src="../assets/css/img/main/nwicon8.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannercon.pdftoexcel')}}</router-link></li>
 <li><img src="../assets/css/img/banner/nwicon17.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannercon.pdftohtml')}}</router-link></li>
 <li><img src="../assets/css/img/banner/nwicon18.png" alt="" class="banner_drop_conve_img"> <router-link to="" class="banner_drop_conve_body">{{$t('bannercon.pdftoimg')}}</router-link></li>
</ul>
<ul>
    <span class="banner_drop_conve_title">{{$t('bannercon.topdf')}}</span>
 <li><img src="../assets/css/img/main/nwicon12.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannercon.wordtopdf')}}</router-link></li>
 <li><img src="../assets/css/img/main/nwicon4.png" alt="" class="banner_drop_conve_img"><router-link to="/pptTopdf" class="banner_drop_conve_body">{{$t('bannercon.ppttopdf')}}</router-link></li>
 <li><img src="../assets/css/img/main/nwicon9.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannercon.exceltopdf')}}</router-link></li>
 <li><img src="../assets/css/img/banner/nwicon19.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannercon.htmltopdf')}}</router-link></li>
 <li><img src="../assets/css/img/banner/nwicon20.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannercon.imgtopdf')}}</router-link></li>
</ul>
</div>
</div>
<div class="all_tools">
<span class="banner_all_tools">{{$t('banner.all_pdf_tools')}}</span>
<div class="banner_drop_tools">
    <ul>
        <span class="banner_drop_conve_title">{{$t('bannerall.organize')}}</span>
        <li><img src="../assets/css/img/banner/nwicon21.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.compress')}}</router-link></li>
        <li><img src="../assets/css/img/banner/nwicon22.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.merge')}}</router-link></li>
        <li><img src="../assets/css/img/banner/nwicon23.png" alt="" class="banner_drop_conve_img"><router-link to="/splitPDF" class="banner_drop_conve_body">{{$t('bannerall.solit')}}</router-link></li>
    </ul>
   <ul>
    <span class="banner_drop_conve_title">{{$t('bannerall.convertpdfto')}}</span>
 <li><img src="../assets/css/img/main/nwicon11.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.toword')}}</router-link></li>
 <li><img src="../assets/css/img/main/nwicon5.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.toppt')}}</router-link></li>
 <li><img src="../assets/css/img/main/nwicon8.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.toexcel')}}</router-link></li>
 <li><img src="../assets/css/img/banner/nwicon17.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.toimg')}}</router-link></li>
 <li><img src="../assets/css/img/banner/nwicon18.png" alt="" class="banner_drop_conve_img"> <router-link to="" class="banner_drop_conve_body">{{$t('bannerall.tohtml')}}</router-link></li>
</ul>
<ul>
    <span class="banner_drop_conve_title">{{$t('bannerall.convertto')}}</span>
 <li><img src="../assets/css/img/main/nwicon12.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.wordto')}}</router-link></li>
 <li><img src="../assets/css/img/main/nwicon4.png" alt="" class="banner_drop_conve_img"><router-link to="/pptTopdf" class="banner_drop_conve_body">{{$t('bannerall.pptto')}}</router-link></li>
 <li><img src="../assets/css/img/main/nwicon9.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.excelto')}}</router-link></li>
 <li><img src="../assets/css/img/banner/nwicon19.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.imgto')}}</router-link></li>
 <li><img src="../assets/css/img/banner/nwicon20.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.htmlto')}}</router-link></li>
</ul>
    <ul>
        <span class="banner_drop_conve_title">{{$t('bannerall.security')}}</span>
        <li><img src="../assets/css/img/banner/nwicon24.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.electronic')}}</router-link></li>
        <li><img src="../assets/css/img/banner/nwicon25.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.encrypt')}}</router-link></li>
        <li><img src="../assets/css/img/banner/nwicon26.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.decrypt')}}</router-link></li>
    </ul>
    <ul>
        <span class="banner_drop_conve_title">{{$t('bannerall.view')}}</span>
        <li><img src="../assets/css/img/banner/nwicon27.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.read')}}</router-link></li>
        <li><img src="../assets/css/img/banner/nwicon28.png" alt="" class="banner_drop_conve_img"><router-link to="/edit" class="banner_drop_conve_body">{{$t('bannerall.edit')}}</router-link></li>
        <li><img src="../assets/css/img/banner/nwicon29.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.delete')}}</router-link></li>
        <li><img src="../assets/css/img/banner/nwicon30.png" alt="" class="banner_drop_conve_img"><router-link to="" class="banner_drop_conve_body">{{$t('bannerall.watermark')}}</router-link></li>
    </ul>
</div>
</div>
<div class="lang">
   <div class="language"><img src="../assets/css/img/banner/nwicon31.png" alt="" ></div> 
<ul class="language_ul">
    <li @click="changeen()">English</li>
    <li @click="changezh()">中文</li>
</ul>
</div>





<router-link to="login" tag="button" class="banner_login" v-if="!showname">{{$t('banner.login')}}</router-link>
 <span class="banner_user"  v-if="showname">
      <i class="iconfont user_icon"  >&#xe63b;</i>
 <div  class="user_dropdown">
    
                  <div class="user_dropdown_content" >
                      <div   class=" user_infor">{{this.$store.state.email}}</div>
                    <span class="fenge"></span>
                    
                     <router-link to="/userinformation"  tag="div" class="user_dropdown_list userinformation">User Information</router-link>
                      <router-link to="/purchase"  tag="div" class="user_dropdown_list purchase">Purchase History</router-link>
                      <span class="fenge2"></span>
                      <div   class="user_dropdown_list signout">
                         
                          <div class="user_dropdown_list_span" @click="signOut()">Sign Out</div> </div>
                     

                  </div>
              </div>
</span>
  
<router-link to="/year" :style="this.$route.path=='/month'||this.$route.path=='/year'?'bgckground:#EB4840':'background:black'" tag="button"  class="banner_free_trial">{{$t('banner.trial')}}</router-link>
 <router-view></router-view>
</div>
</div>
</template>
<script>

 import qs from 'qs'
export default{
name:'',
data(){
    return{
        dropshow:false,
      
        lang:'',
         showname:false,
    showModal: false
    }
},
  

methods:{
 
    
  
  async  signOut(){
          
               let params = '';
               params = this.$store.state.token
               var data = {token:params}
                const datas=qs.stringify(data)
                const res =await this.axios({
                  method:'post',
                  headers: { 'content-type': 'application/x-www-form-urlencoded' },
                  url:"v1/user/logout",
                  data:datas
                               })
                   console.log(res.status);
                 if(res.status !==200){

                  }else{
                  window.sessionStorage.removeItem('token')
                  window.sessionStorage.removeItem('email')
                  this.$store.commit('set_email')
                  this.$store.commit('set_token')
                    // console.log('token');
                  window.location.reload()
                    }            
            },
    
    changeen(){
         var lang = localStorage.language
　　   　this.$i18n.locale='en';//改变当前语言
　　　　localStorage.language='en';
    this.$store.commit('set_lang',lang)
       console.log(lang);
         
    },
    changezh(){
        var lang = localStorage.language
　　　this.$i18n.locale='zh';//改变当前语言
　　　　localStorage.language='zh';
console.log(lang);
  this.$store.commit('set_lang',lang)

    }
},
created(){
    if(this.$store.state.token =="undefined"||this.$store.state.token ==null){
       
              
                 this.showname=false
     }else{
    //   
       this.showname=true
     }
},
 updated(){
   if(this.$store.state.token =="undefined"||this.$store.state.token ==null){
       
                
                 this.showname=false
     }else{
   
       this.showname=true
     }
     
    },
    }
    
 

</script>
<style lang='less' scoped>
.banner{
 height: 64px;
 background: #FEFEFE;
 border-bottom: 1px solid #E8E8E8;
}
.banner_logo{
    width: 144px;
    height: 42px;
    position: absolute;
    left: 291px;
    top: 11px;
}
.banner_merge,.banner_split,.banner_compress,.banner_convert,.banner_all_tools{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    position: absolute;
    top: 21px;
}
.banner_merge{
    left: 561px;
}
.banner_split{
    left: 685px;
}
.banner_compress{
    left: 795px;
}
.banner_convert{
    display: block;
    left: 948px;
    height: 43px;
  
    
}
.banner_all_tools{
    left: 1126px;
    height: 43px;
}
.banner_login{
    position: absolute;
    top: 17px;
    left: 1474px;
    width: 73px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #EB493F;font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EB4840;
    line-height: 30px;
  outline: none;
}
.banner_user{
     position: absolute;
    top: 16px;
    left: 1495px;
    width: 32px;
    height: 48px;
    font-family: PingFangSC-Semibold, PingFang SC;
    color: #EB4840;
    font-size: 32px;
}
.banner_free_trial{
    position: absolute;
    top: 17px;
    left: 1577px;
    width: 103px;
    height: 30px;
    background: #EB4840;
    border-radius: 15px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
   outline: none;
   border: none;
}
.conver{
     display: inline-block;
     height: 64px;
       
}
.conver:hover>.banner_convert{
    font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #EB4840;
}
.conver:hover>.banner_drop_conver{
  display: flex;

}
.banner_drop_conver{
     display: flex;
  position: absolute;
    width: 490px;
    height: 298px;
    background: #FFFFFF;
box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 6px 6px;
    flex-wrap: wrap;
    justify-content: space-between;
      z-index: 10;
       display: none;
       top: 64px;
       left: 750px;

}
.banner_drop_conver>ul{

    width: 170px;
    margin-left: 35px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
   z-index: 10;
}
.banner_drop_conve_title{
    margin-top: 24px;
    font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #999999;
margin-left: 10px;
}
.banner_drop_conve_body{
    font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
margin-left: 44px;
line-height: 24px;


}
.banner_drop_conver>ul>li{

   margin-top: 10px;
   line-height: 40px;
   list-style: none;
   position: relative;

  
}
.banner_drop_conver>ul>li:hover{
    
    width: 180px;
    height: 40px;
    background: #F6F6F6;
    border-radius: 4px;
}
.banner_drop_conver>ul>li:hover>.banner_drop_conve_body{
font-weight: 600;
    color: #333333;
}
.banner_drop_conve_img{
    width: 24px;
    height: 24px;
    margin-left:10px;
    position: absolute;
    top: 8px;
}
.banner_drop_tools>ul>li:hover>.banner_drop_conve_body{
font-weight: 600;
    color: #333333;
}
.lang>ul{
    width: 128px;
    height: 102px;
    position: absolute;
    left: 1378px;
    top: 54px;
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
.language{
    position: absolute;
    left: 1430px;
    top: 20px;
    width: 24px;
    height: 64px;
}
.language>img{
    width: 24px;
    height: 24px;
}

.all_tools{
     display: inline-block;
     height: 64px;
}
.all_tools:hover>.banner_all_tools{
    font-size: 16px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #EB4840;
}
.all_tools:hover>.banner_drop_tools{
     display: flex;

}
.banner_drop_tools{
     display: flex;
  position: absolute;
    width: 490px;
    height: 298px;
    background: #FFFFFF;
box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 6px 6px;
    flex-wrap: wrap;
    justify-content: space-between;
      z-index: 10;
       display: none;
       top: 64px;
       left: 750px;

}
.banner_drop_tools{
    width: 1200px;
    height: 298px;
    position: absolute;
    left: 526px;
    top: 64px;
     display: flex;
    background: #FFFFFF;
box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 6px 6px;
    flex-wrap: wrap;
    justify-content: space-between;
      z-index: 10;
       display: none;
    

}
.banner_drop_tools>ul{

    width: 160px;
    margin-left: 35px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    z-index: 10;
}
.banner_drop_tools>ul>li{

   margin-top: 10px;
   line-height: 40px;
   list-style: none;
   position: relative;

  
}
.banner_drop_tools>ul>li:hover{
    width: 180px;
    height: 40px;
    background: #F6F6F6;
    border-radius: 4px;
}
.banner_convert::after{
                 position: absolute;
				right: -20px;
				top: 2px;
				content: "";
				width: 10px;
                height: 10px;
                border-bottom: 1px solid #333;
                border-right: 1px solid #333;
                transform: rotate(45deg);
				

}
.banner_all_tools::after{
     position: absolute;
				right: -20px;
				top: 2px;
				content: "";
				width: 10px;
                height: 10px;
                border-bottom: 1px solid #333;
                border-right: 1px solid #333;
                transform: rotate(45deg);
}
.user_dropdown_content{
    position: absolute;
    width: 240px;
height: 219px;
background: #FFFFFF;
box-shadow: 2px 2px 12px 5px rgba(0, 0, 0, 0.13);
border-radius: 6px;
display: none;
position: absolute;
top: 48px;
left: -100px;
z-index: 1000000;
}
.fenge{
    width: 224px;
    border-bottom:1px solid #d5d5d5;
    position: absolute;
    top: 55px;left: 8px;
    
}
.fenge2{
    width: 224px;
    border-bottom:1px solid #d5d5d5;
    position: absolute;
    top: 167px;left: 8px;
    
}
.user_infor{
    
     line-height: 55px;
font-size: 18px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
margin-left: 12px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.user_dropdown_list{
  margin-top: 5px;
    font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
line-height: 50px;
width: 20px;
}
.purchase{
margin-bottom: 5px;
}
.signout{
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
}
.userinformation,.purchase,.signout{
    // margin-left: 12px;
    padding-left: 12px;
     width: 240px;
    white-space:nowrap
}
.userinformation:hover {
background-color: #FF7067;
color: #fff;
}
.purchase:hover {
background-color: #FF7067;
color: #fff;
}
.signout:hover {
background-color: #FF7067;
color: #fff;
}
悬停改变颜色
.user_icon:hover{
color: #40407A;
}
.banner_user:hover .user_icon{
 
color: #40407A;

}
.banner_user:hover .user_dropdown_content{
    display: block;
}
</style>