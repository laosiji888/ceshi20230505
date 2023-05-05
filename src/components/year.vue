<template>
<div class="year">
    <div class="year_main">
        <div class="one">
<img src="../assets/css/img/trial/pro.png" alt="" class="pro_img">
     <span class="title_pro">
       Pro
     </span>
     <span class="person_pro">
1 person
     </span>
     <span><i class="iconfont user_icon_pro"  >&#xe63d;</i></span><span class="price_body_pro">per user,billed annually. <br> billed as one payment of <br> USD 108</span>
      <span class="price_pro">$8.99</span>
     <span class="month_pro">/Month</span>
      <button class="buynow_pro" @click="buyyearpro()">Buy Now</button>
        </div>
        <div class="two">
<img src="../assets/css/img/trial/team.png" alt="" class="pro_img">
<span class="title_team">
       Team
     </span>
      <span class="person_team">
2-50 person
     </span>
     <span><i class="iconfont user_icon_team" >&#xe63c;</i></span><span class="price_body_team">per user,billed annually. <br> billed as one payment of <br> USD 84</span>
      <span class="price_team">$6.00</span>
     <span class="month_team">/Month</span>
     <button class="buynow_team" @click="buyyearteam()">Buy Now</button>
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
     buyyearpro(){
console.log(1111);
        },
       buyyearteam(){
           
       }  
}

}
</script>
<style lang='less' scoped>
.year{
    position: absolute;
    top: 92px;
    left: -841px;
    width: 1920px;
    height: 645px;   
}
.year_main{
    position: absolute;
    top: 0;
    left: 572px;
    width: 776px;
    display: flex;
    justify-content: space-between;
    height: 645px;
}
.one,.two{
    width: 364px;
    position: relative;

}
.one{
   background:#40407A;
border-radius: 12px;
border: 1px solid #D5D5D5;
}
.two{
    background: #FFFFFF;
border-radius: 12px;
border: 1px solid #D5D5D5;
}
.pro_img{
    width: 74px;
    height: 80px;
    position: absolute;
    top: 18px;
    left: 32px;
}
.title_pro{
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    // color: #40407A;
    position: absolute;
    top: 33px;
    left: 122px;
    line-height: 33px;
    }
    .person_pro{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #D5D5D5;
    position: absolute;
    top: 69px;
    left: 122px;

line-height: 22px;
}
.title_team{
     font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #40407A;
    position: absolute;
    top: 33px;
    left: 122px;
    line-height: 33px;
}
.person_team{
    line-height: 22px;
font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
position: absolute;
    top: 69px;
    left: 122px;

}
.user_icon_pro{
    position: absolute;
    top: 152px;
    left: 45px;
    font-size: 24px;

}
.price_body_pro{
    position: absolute;
    top: 152px;
    left: 81px;
    // width: 242px;
    font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
line-height: 24px;
text-align: left;
}
.price_body_team{
    position: absolute;
    top: 152px;
    left: 81px;
    // width: 242px;
    font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #989898;
line-height: 24px;
text-align: left;
}
.user_icon_team{
   color: #40407A;
    position: absolute;
    top: 152px;
    left: 45px;
    font-size: 24px;

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
.price_team{
     font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #EB4840;
    position: absolute;
    top: 476px;
    left: 122px;
}
.month_team{
    font-size: 20px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
position: absolute;
top: 497px;
left: 220px;
line-height: 28px;
}
.buynow_team{
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
</style>