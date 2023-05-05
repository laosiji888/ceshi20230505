<template>
<div class="month">
<div class="month_month">
    <div class="one">
     <img src="../assets/css/img/trial/free.png" alt="" class="free_img">
     <span class="title_free">
         Free Trail
     </span>
     <span class="person_free">
1 person
     </span>
     <ul class="fun_free">
         <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Free Features include</span></li>
         <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Access to 21 iSmallpdf tools</span></li>
         <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Word on website and  <br>mobile  app</span><br></li>
         <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Process up to 2 documents <br> per day</span></li>
     </ul>
     <span class="price_free">$0.00</span>
     <span class="month_free">/Month</span>
     <button class="buynow_free" @click="buymonthfree()">Buy Now</button>
    </div>
    <div class="two">
 <img src="../assets/css/img/trial/pro.png" alt="" class="pro_img">
     <span class="title_pro">
       Pro
     </span>
     <span class="person_pro">
1 person
     </span>
     <ul class="fun_pro">
         <li> <i class="iconfont user_icon_pro"  >&#xe63d;</i><span>Unlimited file processing</span></li>
         <li> <i class="iconfont user_icon_pro"  >&#xe63d;</i><span>Strong compression</span></li>
         <li> <i class="iconfont user_icon_pro"  >&#xe63d;</i><span>Bulk encryption </span></li>
         <li> <i class="iconfont user_icon_pro"  >&#xe63d;</i><span>Archive storage</span> </li>
         <li> <i class="iconfont user_icon_pro"  >&#xe63d;</i><span>Customer support</span> </li>
     </ul>
     <span class="price_pro">$10.99</span>
     <span class="month_pro">/Month</span>
     <button class="buynow_pro" @click="buymonthpro()">Buy Now</button>
    </div>
    <div class="three">
<img src="../assets/css/img/trial/team.png" alt="" class="pro_img">
<span class="title_team">
       Team
     </span>
      <span class="person_pro">
2-50 person
     </span>
     <ul class="fun_team">
      <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Easy and flexible billing <br><span class="moment"> management</span> </span></li>
         <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Free Features include</span></li>
         <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Add more users as needed</span></li>
         <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Volume discount pricing</span></li>
         <li> <i class="iconfont user_icon"  >&#xe63c;</i><span>Priority customer support</span></li>
     </ul>
     <span class="price_team">$9.99</span>
     <span class="month_team">/Month</span>
     <button class="buynow_team" @click="buymonthteam()">Buy Now</button>
    </div>
</div>

</div>
</template>
<script>

export default{
name:'',
data(){
    return{

    }
},
methods:{
    buymonthfree(){

    },
    buymonthpro(){

    },
    buymonthteam(){
        
    }
}

}
</script>
<style lang='less' scoped>
.month{
    position: absolute;
    top: 92px;
    left: -841px;
    width: 1920px;
    height: 645px;
    

    
}
.month_month{
    position: absolute;
    top: 0;
    left: 366px;
    width: 1140px;
    display: flex;
    justify-content: space-between;

}
.one,.two,.three{
    width: 364px;
    height: 645px;
    position: relative;
}
.one,.two,.three{
    background: #FFFFFF;
border-radius: 12px;
border: 1px solid #D5D5D5;
}
.two{
        background:#40407A;
border-radius: 12px;
border: 1px solid #D5D5D5;
    
}


.free_img,.pro_img{
    width: 74px;
    height: 80px;
    position: absolute;
    top: 18px;
    left: 32px;
}
.title_free{
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #40407A;
    position: absolute;
    top: 33px;
    left: 122px;
    line-height: 33px;
    }
    .title_pro{
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
  
    position: absolute;
    top: 33px;
    left: 122px;
    line-height: 33px;
    }
.person_free,.person_pro{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    position: absolute;
    top: 69px;
    left: 122px;

line-height: 22px;
}
.title_team{
     color: #40407A;
     font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
  
    position: absolute;
    top: 33px;
    left: 122px;
    line-height: 33px;
}
.fun_free{
    height: 192px;
    position: absolute;
    top: 152px;
    left: 45px;
    font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #989898;
line-height: 20px;
}
.fun_pro{
    height: 192px;
    position: absolute;
    top: 152px;
    left: 45px;
    font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #fff;
line-height: 20px;
}
.fun_free>li,.fun_pro>li{
    list-style: none;
    
    text-align: left;
   margin-bottom: 22px;
}
.user_icon{
    font-size: 24px;
    color: #40407A;
    line-height: 24px;
}
.user_icon_pro{
    font-size: 24px;
    color: #fff;
    line-height: 24px;
}
.fun_free>li>span{
   position: absolute;
   left: 35px;
   width: 240px;
  
   
}
.fun_free>:last-child{
    position: absolute;
    top: 152px;
}
.fun_pro>li>span{
    margin-left: 10px;
}
.moment{
    position: absolute;
    top: 20px;
    left: 30px;
}
.price_free,.price_team{
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EB4840;
    position: absolute;
    top: 476px;
    left: 122px;
}
.price_pro{
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EB4840;
     position: absolute;
    top: 476px;
    left: 106px;
}
.month_free,.month_team{
    font-size: 20px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
position: absolute;
top: 497px;
left: 220px;
line-height: 28px;
}
.month_pro{
    font-size: 20px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #D5D5D5;
line-height: 28px;
position: absolute;
top: 497px;
left: 220px;
}
.buynow_free,.buynow_team{
    width: 248px;
    height: 49px;
    border-radius: 6px;
    border: 1px solid #EB4840;
    position: absolute;
    bottom: 40px;
    left: 58px;font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EB4840;
    line-height: 49px;
    text-align: center;
    outline: none;
}
.buynow_pro{
    width: 248px;
    height: 49px;
    background: #EB4840;
    border-radius: 6px;
     position: absolute;
    bottom: 40px;
    left: 58px;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 49px;
    text-align: center;
    outline: none;
}
.fun_team{
   height: 192px;
    position: absolute;
    top: 152px;
    left: 45px;
    font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #989898;
line-height: 20px;  
list-style: none;
text-align: left;

}
.fun_team>li>span{
margin-left: 8px;
margin-bottom: 25px;
display: inline-block;
}
</style>