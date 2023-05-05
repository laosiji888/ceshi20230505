<template>
<div class="pdf_upload">

    <div class="main"  >
      <span class="main_title">
     {{$t('operation.ppttopdf')}}
      </span>
      <span class="main_body">
          <span>
      {{$t('operation.ppttopdfBody')}}
      </span>
      
      </span>
    </div>
    <div class="pdf_el_upload" id="viewer">

<el-dialog :visible.sync="dialogVisible">
  <img width="100" height="100px" :src="dialogImageUrl" alt="">
</el-dialog>

    </div>
    
</div>
</template>
<script>

  export default {
    data() {
      return {
     
      };
    },
    methods: {
    
        
      },
      

  }
</script>

<style lang='less' scope>
// li{
//     list-style: none;
//     border: none
   
// }
// .el-upload-list--picture-card{
//     position: absolute;
//     width: 880px;
//     top: 284px;
//     left: 520px;
//     display: flex ;
//     flex-wrap: wrap;
//     border-style: none;
//     justify-content: space-between;
// }
// // .el-upload-list__item-thumbnail{
// // width: 114px;
// // height: 163px;
// // position: absolute;
// // top: 17px;
// // left: 34px;

// // }
// .el-upload-list__item{
//     width: 188px;
//     height: 240px;
 

//     background-color:#F6F6F6;;
   
// }
// .pdf_upload{
//     position: absolute;
//     top: 64px;
// }
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
.pdf_el_upload{
    position: absolute;
    top: 284px;
    left: 520px;
}
.el-upload-list__item{
    width: 188px  !important;
    height: 240px !important;
    margin-right: 24px !important;
   
background: #F6F6F6 !important;
}
.el-upload--picture-card{
    width: 188px !important;
    height: 240px !important;
}
.el-icon-plus{
   font-size: 50px  !important;
    color: #FF5722 !important;
    font-weight: 900;
    text-align: center;
    line-height: 240px;
    
}

.el-upload-list--picture-card .el-upload-list__item-actions {
  background: rgba(255, 87, 47, 0.79);
    
    border-radius: 6px !important;

}
.el-upload-list__item-thumbnail{
    position: absolute !important;
    top: 14px !important;
    left: 37px !important;
    width: 114px !important;
    height: 163px !important;
}
.el-icon-zoom-in,.el-icon-download{
    display: none;
}

.el-icon-delete{
    position: absolute;
    top: 0;
    left:77px;
    line-height: 240px;
    font-size: 40px;
    font-weight: 900;
}
</style>