<template>
<div class="user_purch">
    <p>User Information</p>
<div class="user_left">
    <div class="left_1">
 <router-link to="/userinformation" tag="div" class="user_purch_1">User Information</router-link>
 </div>
 <div class="left_2">
 <router-link to="/purchase" tag="div" class="user_purch_2">Purchase History</router-link>
  <router-view></router-view> 
</div>

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
}
</script>
<style lang='less' scoped>
.user_purch{
    height: 924px;
    width: 1920px;
    background: #FAFAFA;
    position: absolute;
    top: 64px;
}
.user_left{
    position: absolute;
    top: 123px;
    left: 360px;
    width: 244px;
    height: 554px;
    background-color: #fff;
}
.left_1{
    
    height: 72px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 8px;
    margin-right: 8px;
     
     border-bottom: 1px solid #d5d5d5;

}
.left_2{
   height: 72px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 8px;
    margin-right: 8px;
}
.user_purch_1{
    width: 228px;
    height: 56px;


border-radius: 6px;
line-height: 56px;
    text-align: center;
    font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
}
.user_purch_2{
        width: 228px;
    height: 56px;
font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
border-radius: 6px;
line-height: 56px;
text-align: center;
}
.router-link-active{
    background: #FF7067;
border-radius: 6px;
font-weight: 600;
color: #FFFFFF;
}
p{
    font-size: 36px;
font-family: Arial-Black, Arial;
font-weight: 900;
color: #EB4840;
position: absolute;
top: 36px;
left: 794px;
}
</style>