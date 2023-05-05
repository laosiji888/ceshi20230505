<template>
<div>
  <div class="main"  >
      <span class="main_title">
     {{$t('operation.ppttopdf')}}
      </span>
      <span class="main_body">
          <span>
      {{$t('operation.ppttopdfBody')}}
      </span>
      </span>
      
      <div class="upload_operation" v-show="!operationshow">
       <input type="file" class="origin_upload"   @change="tirggerFile($event)" accept=".pptx" multiple>
      <div class="choose_files">
          <img src="../assets/css/img/operation/nwicon1.png" alt="" class="choose_files_img">
      <span class="choose_files_text">
   {{$t('operation.choosefiles')}}
      </span>
      </div>
      <span class="drop_here">
          {{$t('operation.drophere')}}
      </span>
      </div>
      <div class="upload_style" v-show="operationshow" >aaaa</div>
      

  </div>
  <Footer></Footer>
</div>

</template>
<script>
import Footer from './footer'
export default{
name:'',
data () {
    return {
      operationshow:false
    }
    },
   
methods:{
    
 tirggerFile(event){
   var file = event.target.files;
   console.log(file);
   if(file.length>0){
 
  
    }
 }
},
components:{
    Footer
}

}
</script>
<style lang='less' scoped>
.main{
    position: absolute;
    top: 64px;
    height: 825px;
    width: 1920px;
}
.main_title{
    position: absolute;
    top: 60px;
    left: 857px;
    font-size: 30px;
    font-family: Helvetica;
    color: #EB4840;
}
.main_body{
    position: absolute;
    top: 103px;
    display: block;
    text-align: center;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
}
.main_body>span{
    text-align: center;
    width: 1920px;
    display:inline-block
}
.upload_operation{
    position: absolute;
    top: 192px;
    left: 460px;
    width: 1000px;
    height: 280px;
    background: #EAEAEA;
    border-radius: 6px;
    // display:none;
}
.choose_files{
    width: 400px;
    height: 96px;
    border-radius: 6px;
    background: #FFB802;
    position: absolute;
    top: 77px;
    left: 300px;
}
.origin_upload{
  width: 400px;
   height: 96px;
    position: absolute;
    top: 77px;
    left: 300px;
    z-index: 2;
    opacity: 0;
}
.drop_here{
    position: absolute;
    top: 193px;
    left: 323px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
}
.choose_files_text{
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
   line-height: 96px;
   position: absolute;
   left: 152px;

}
.choose_files_img{
    position: absolute;
    width: 40px;
    height: 40px;
    top: 28px;
    left: 100px;
}
.upload_style{
    background-color: black;
    color: blanchedalmond;
}
</style>