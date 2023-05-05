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

      <div class="pdf" v-show="isshow"></div>
      <div class="upload_operation" v-show='!isshow' >
       <input type="file" class="origin_upload" @change="tirggerFile($event)" >
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
    

  </div>
  <Footer/>
  
</div>

</template>
<script>
import pdf from 'vue-pdf'
import Footer from './footer'
export default{
name:'',
data () {
    return {
     
     isshow:false
    }
},
components:{
    Footer
},
mounted(){
   

},
methods:{

 tirggerFile(event){
   var file = event.target.files;
   console.log(file.length);
   if(file.length>0){
       this.$store.commit('set_file',file)
       this.isshow=true

       
       console.log(file);
//   this.$router.push('/mergeupload')
   }

 
   


   
 
 },

}
}
</script>
<style lang='less' scoped>
.main{
    position: absolute;
    top: 64px;
    height: 825px;
    width: 1920px;
    background: #FAFAFA;
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
    // display: none;
}

.choose_files{
    width: 400px;
    height: 96px;
    border-radius: 6px;
    background: #FF5722;
    position: absolute;
    top: 77px;
    left: 300px;
  
}
.origin_upload:hover+.choose_files{
background: #40407A;

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
.pdf{
 width: 1000px;
 height: 280px;
 background-color: #fff;
 z-index: 10;
 position: absolute;
 top: 192px;
 left: 460px;
}
</style>