<template>
<div class="plans_price">
  <span class="title">
     {{$t('plansPrice.title')}}
</span>
 <span class="sologan">
     {{$t('plansPrice.sologan')}}
 </span>
 <span class="title1">
       {{$t('plansPrice.title1')}}
 </span>
 <div class="plans_tab"> 
  <router-link to="month" tag="span" :style="this.$route.path=='/month'?ischange:nochange" class="month"> {{$t('plansPrice.month')}}</router-link>
 <router-link to="year" tag="span" :style="this.$route.path=='/year'?ischange:nochange" class="year"> {{$t('plansPrice.year')}}</router-link>
 <router-view></router-view> 
 </div>
 <Footer class="main_footer"></Footer>
</div>
</template>
<script>

import Footer from './footer'
export default{
name:'',
components:{
  
Footer
},
data(){
    return{
     ischange:{
         "background":"#fff",
         "color":'#EB4840'
     },
     nochange:{
         "background":"#EB4840",
         "color":'#fff'
     }
    }
},
created(){

},
methods:{

},
}
</script>
<style lang='less' scoped>
.title{
    position: absolute;
    top: 100px;
    left: 827px;
    font-size: 36px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #EB4840;
}
.sologan{
    position: absolute;
    top: 176px;
    left: 553px;
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
}
.title1{
    font-size: 24px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #40407A;
    position: absolute;
    top: 217px;
    left: 669px;
}
.plans_tab{
    position: absolute;
    top: 322px;
    left: 841px;
    width: 239px;
    height: 56px;
    background: #EB4840;
    border-radius: 40px;
   

}
.year{
    display: block;
    line-height: 48px;
    width: 115px;
    margin-left: 7px;
    height: 48px;
    // background: #FFFFFF;
    border-radius: 34px;
    position: absolute;
    top: 4px;
    right: 4px;
    text-align: center;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #FFFFFF;
        
}
.month{
    display: block;
    line-height: 48px;
    width: 116px;
    margin-left: 7px;
    height: 48px;
    // background: #FFFFFF;
    border-radius: 34px;
    position: absolute;
    top: 4px;
    left: -3px;
    text-align: center;
    font-size: 18px;
    font-family: Arial-Black, Arial;
    font-weight: 900;
    color: #FFFFFF;
        
}
.main_footer{
    position: absolute;
    top: 300px;
}
</style>