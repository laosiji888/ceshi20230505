<template>
<div>
    <div class="footer">
    <div class="footer_content">
        <div class="footer-content-list">
            <dl>
                <dt>
                    <span>{{$t('footer.organize')}}</span>
                </dt>
                <dd>
                    <router-link to="/compressPDF">{{$t('footer.compress')}}</router-link>
                </dd>
                <dd>
                    <router-link to="/mergePDF">{{$t('footer.merge')}}</router-link>
                </dd>
                <dd>
                    <router-link to="/splitPDF">{{$t('footer.split')}}</router-link>
                </dd>
            </dl>
            <dl>
                <dt>
                    <span>{{$t('footer.view')}}</span>
                </dt>
                <dd>
                    <router-link to="">{{$t('footer.read')}}</router-link>
                </dd>
                <dd>
                    <router-link to="">{{$t('footer.edit')}}</router-link>
                </dd>
                <dd>
                    <router-link to="">{{$t('footer.delete')}}</router-link>
                </dd>
                <dd>
                    <router-link to="">{{$t('footer.watermark')}}</router-link>
                </dd>
            </dl>
            <dl>
                <dt>
                    <span>P{{$t('footer.convertpdfto')}}</span>
                </dt>
                <dd>
                    <router-link to="">{{$t('footer.toword')}}</router-link>
                </dd>
                <dd><router-link to="" >{{$t('footer.toppt')}}</router-link></dd>
                <dd><router-link to="">{{$t('footer.toexcel')}}</router-link></dd>
                <dd><router-link to="">{{$t('footer.tohtml')}}</router-link></dd>
                <dd><router-link to="">{{$t('footer.toimg')}}</router-link></dd>
            </dl>
            <dl>
                <dt><span>{{$t('footer.convertto')}}</span></dt>
                <dd><router-link to="">{{$t('footer.wordto')}}</router-link></dd>
                <dd><router-link to="/pptTopdf">{{$t('footer.pptto')}}</router-link></dd>
                <dd><router-link to="">{{$t('footer.excelto')}}</router-link></dd>
                <dd><router-link to="">{{$t('footer.htmlto')}}</router-link></dd>
                <dd><router-link to="">{{$t('footer.imgto')}}</router-link></dd>
            </dl>
            <dl>
                <dt><span>{{$t('footer.security')}}</span></dt>
                <dd><router-link to="">{{$t('footer.encrypt')}}</router-link></dd>
                <dd><router-link to="">{{$t('footer.electronic')}}</router-link></dd>
            </dl>
        </div>
        <div class="footer_contern_right">
            <img src="../assets/css/img/banner/nwlogo.png" alt="" class="footer_content_img">
            <span class="footer_content_body"> {{$t('footer.footcontent')}}</span>
        </div>
      
    </div>
    <span class="fenge23"></span>
    <div class="copyright">
         <p>Copyright © 2021 All rights reserved.</p> 
      </div>
<div class="lang">
   <div class="language">
       <img src="../assets/css/img/banner/nwicon31.png" alt="" >
        <span > {{language_footer}}</span>
    </div> 
<ul class="language_ul">
    <li @click="changeen2()">English</li>
    <li @click="changezh2()">中文</li>
</ul>
 </div>


</div>
</div>
</template>
<script>
export default{
name:'',
data(){
    return{
 language_footer:'',
    }
},
methods:{
    changeen2(){
  
      var lang = localStorage.language
　　   　this.$i18n.locale='en';//改变当前语言
　　　　localStorage.language='en';
    this.$store.commit('set_lang',lang)
    this.language_footer='English'
    console.log(this.language_footer);
},
changezh2(){
var lang = localStorage.language
　　　this.$i18n.locale='zh';//改变当前语言
　　　　localStorage.language='zh';
console.log(lang);
  this.$store.commit('set_lang',lang)

  this.language_footer='中文'
}
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
.footer{
    width: 1920px;
    height: 461px;
    position: absolute;
    top: 889px;
}
.footer-content-list{
    top: 83px;
    width: 1000px;
    position: absolute;
    height: 230px;
    left: 260px;
    border-right: 2px solid #D5D5D5;

    display: flex;
    justify-content: space-between;
}
.footer-content-list>dl{

  
    width: 145px;

}
.footer-content-list>dl>dt{
    font-size: 18px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
margin-bottom: 30px;
}

.footer-content-list>dl>dd{
    margin-bottom: 15px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
line-height: 20px;
}
.footer_content_img{
    width: 206px;
    height: 60px;
    position: absolute;
    top: 85px;
    left: 1347px;
}
.footer_content_body{
    width: 310px;
    position: absolute;
    top: 199px;
    left: 1338px;
    font-size: 18px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
line-height: 25px;
}
.copyright{
    position: absolute;
    height: 80px;
    // left: 840px;
    width: 1920px;
    bottom:0;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    
   
}
.copyright>p{
   line-height: 80px; 
   text-align: center;
}

.lang{
    position: absolute;
    bottom: 0px;
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

.language>img{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 30px;
    left: 0;
}
.language>span{
position: absolute;
line-height: 17px;
top: 32px;
left: 28px;
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;

}
.language>span::after{
                 position: absolute;
				right: -20px;
				top:0;
				content: "";
				width: 10px;
                height: 10px;
                border-bottom: 1px solid #333;
                border-right: 1px solid #333;
                transform: rotate(45deg);
				

}
.fenge23{
   border-top:1px solid #d5d5d5;
    width: 1632px;
    position: absolute;
    bottom: 79px;
    left: 144px;

}
</style>