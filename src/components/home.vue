<template>
<div class="ismallpdf">

<div class="main">
    <div class="main_title">
    <div class="main_title_title">
    <img src="../assets/css/img/main/Process.png" alt="">
    </div>
    <div class="main_title_body">
      {{$t('main.titlebody')}}
    </div>
    </div>
    <div class="main_tool">
        <router-link to="/mergePDF" class="main_tool_categories main_tool_merge">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <img src="../assets/css/img/main/nwicon.png" alt=""><div class="main_tool_name">{{$t('main.compress')}}</div><span class="main_tool_body">{{$t('main.compress_body')}}</span></router-link>
        <router-link to="/compressPDF" class="main_tool_categories main_tool_compress">
       <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <img src="../assets/css/img/main/nwicon2.png" alt=""><div class="main_tool_name">{{$t('main.merge')}}</div><span class="main_tool_body">{{$t('main.merge_body')}}</span></router-link>
        <router-link to="/splitPDF" class="main_tool_categories main_tool_split">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <img src="../assets/css/img/main/nwicon3.png" alt=""><div class="main_tool_name">{{$t('main.split')}}</div><span class="main_tool_body">{{$t('main.split_body')}}</span></router-link>
        <router-link to="/pptTopdf" class="main_tool_categories main_tool_pptpdf" >
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon4.png" alt=""><div class="main_tool_name">{{$t('main.ppttopdf')}}</div><span class="main_tool_body">{{$t('main.ppttopdf_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_pdfppt">
          <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>  
            <img src="../assets/css/img/main/nwicon5.png" alt=""><div class="main_tool_name">{{$t('main.pdftoppt')}}</div><span class="main_tool_body">{{$t('main.pdftoppt_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_pdfjpg">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon6.png" alt=""><div class="main_tool_name">{{$t('main.pdftojpg')}}</div><span class="main_tool_body">{{$t('main.pdftojpg_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_jpgpdf">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon7.png" alt=""><div class="main_tool_name">{{$t('main.jptopdf')}}</div><span class="main_tool_body">{{$t('main.jptopdf_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_pdfexcel">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon8.png" alt=""><div class="main_tool_name">{{$t('main.pdftoexcel')}}</div><span class="main_tool_body">{{$t('main.pdftoexcel_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_excelpdf">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon9.png" alt=""><div class="main_tool_name">{{$t('main.exceltopdf')}}</div><span class="main_tool_body"> {{$t('main.exceltopdf_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_sign">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon10.png" alt=""><div class="main_tool_name"> {{$t('main.signature')}}</div><span class="main_tool_body">{{$t('main.signature_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_pdfword">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon11.png" alt=""><div class="main_tool_name">{{$t('main.pdf2word')}} </div><span class="main_tool_body">{{$t('main.pdf2word_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_wordpdf">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon12.png" alt=""><div class="main_tool_name"> {{$t('main.word2pdf')}}</div><span class="main_tool_body">{{$t('main.word2pdf_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_edit">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon13.png" alt=""><div class="main_tool_name"> {{$t('main.edit')}}</div><span class="main_tool_body">{{$t('main.edit_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_cipher">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon14.png" alt=""><div class="main_tool_name"> {{$t('main.encrypt')}}</div><span class="main_tool_body">{{$t('main.encrypt_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_delete">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon15.png" alt=""><div class="main_tool_name"> {{$t('main.delete')}}</div><span class="main_tool_body">{{$t('main.delete_body')}}</span></router-link>
        <router-link to="" class="main_tool_categories main_tool_des">
            <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
            <img src="../assets/css/img/main/nwicon16.png" alt=""><div class="main_tool_name"> {{$t('main.decrypt')}}</div><span class="main_tool_body">{{$t('main.decrypt_body')}}</span></router-link>
    </div>
  
</div>

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
    <div class="copyright">
          Copyright © 2021 All rights reserved.
          <div class="lang">
   <div class="language">
       <img src="../assets/css/img/banner/nwicon31.png" alt="" class="lang_img" > 
       <span class="lang_p" > {{language_footer}}</span>
       </div> 
<ul class="language_ul">
    <li @click="changeen3()">English</li>
    <li @click="changezh3()">中文</li>
</ul>
 </div>
      </div>
      
</div>
</div>
</template>
<script>
export default{
name:'',
data(){
    return{
        language_footer:''
    }
},
methods:{
    changeen3(){
        this.$parent.changeen()
    this.language_footer='English'
    },
    changezh3(){
this.$parent.changezh()
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

.ismallpdf{
    width: 1920px;
    height: 2002px;
    position: absolute;top: 64px;
}
.main{
    position: relative;
    width: 1920px;
    height: 1685px;
    background: #FAFAFA;
}
.main_title{
width: 1400px;
height: 179px;
background: #FFDCC3;
border-radius: 12px;
position: absolute;
top: 124px;
left: 260px;
}
.main_title_title{
    position: absolute;
    top: 39px;
    left: 259px;
    width: 855px;
    height: 36px;
}
.main_title_body{
    width: 781px;
    font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #EB4840;
text-align: center;
position: absolute;
top: 85px;
left: 310px;
}
.main_tool{
    padding-left: 36px;
    padding-right: 36px;
    padding-top: 36px;
    box-sizing: border-box;
    position: absolute;
    width: 1276px;
    top: 347px;
    left: 322px;
    height: 1228px;
    display: flex;
    flex-wrap: wrap;
     justify-content: space-between;
}
.main_tool_categories{
   position: relative;
    width: 274px;
    height: 240px;
    border-radius: 14px;
    overflow: hidden;
}
.main_tool_merge{
background: #EB4840;
}
.main_tool_compress{
background: #FF5722;
}
.main_tool_split{
background: #FF9802;
}
.main_tool_pptpdf{
background: #FFB802;
}
.main_tool_pdfppt{
background: #FFDA00;
}
.main_tool_pdfjpg{
background: #CDDC38;
}
.main_tool_jpgpdf{
background: #8AC34A;
}
.main_tool_pdfexcel{
background: #4CAF50;
}
.main_tool_excelpdf{
background: #009688;
}
.main_tool_sign{
background: #03BCD4;
}
.main_tool_pdfword{
background: #03A9F4;
}
.main_tool_wordpdf{
    background: #1F96F3;
}
.main_tool_edit{
background: #3F50B5;
}
.main_tool_cipher{
background: #673AB7;
}
.main_tool_delete{
background: #9C27B0;
}
.main_tool_des{
background: #E91E63;
}
.main_tool_categories>img{
    width: 64px;
    height: 64px;
    position: absolute;
    top: 32px;
    left: 178px;
}
.main_tool_name{
    font-size: 21px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    position: absolute;
    top: 127px;
    left: 24px;

}
.main_tool_body{
 font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;   
width: 226px;
position: absolute;
top: 168px;
left: 24px;
}
.footer{
    width: 1920px;
    height: 381px;
    position: relative;
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
.circle1 {
        position: absolute;
        left: -43px;
        top: -65px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transition: all 1s ease;
        
    }
    
    .circle2 {
        position: absolute;
        position: absolute;
        left: -73px;
        top: -77px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transition: all 1s ease .1s;
     
    }
    
    .circle3 {
        position: absolute;
        position: absolute;
        left: -113px;
        top: -165px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        transition: all 1s ease .2s;
   
    }
.main_tool_categories:hover .circle1{
         width: 158px;
        height: 158px;
   background-color: #fff;
        opacity: 0.09;
}
.main_tool_categories:hover .circle2{
        width: 254px;
        height: 254px;
        background: #FFFFFF;
        opacity: 0.2;
}
.main_tool_categories:hover .circle3{
     width: 379px;
        height: 379px;
        background: #FFFFFF;
        opacity: 0.29;
}
.copyright{
    position: absolute;
    width: 1920px;
    top: 361px;
    line-height: 80px;
    height: 80px;
    font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
text-align: center;
border-top: 1px solid #D5D5D5;
}
.lang{
width: 96px;
height: 30px;
position: absolute;
left: 1338px;
top: 30px;
}
.language{
    width: 100%;
    height: 100%;
    position: relative;
    
}
.lang_img{
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    
}
.lang_p{
    font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
position: absolute;
top: -30px;
left: 30px;
// left: 28px;
}
.language>.lang_p::before{
                 position: absolute;
				right: -24px;
				top: 31px;
				content: "";
				width: 10px;
                height: 10px;
                border-bottom: 1px solid #333;
                border-right: 1px solid #333;
                transform: rotate(45deg);
				

}
.lang>ul>li:hover{
    
    background: #F6F6F6;
    border-radius: 4px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EB4840;


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
.lang:hover>.language_ul{
    display: block;
}
.lang>ul{
    width: 128px;
    height: 102px;
    position: absolute;
    // left: 1378px;
    // top: 54px;
    left: -18px;
    bottom: 50px;
    z-index: 10;
    background: #FFFFFF;
    box-shadow: 4px 6px 14px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    display: none;
}
</style>