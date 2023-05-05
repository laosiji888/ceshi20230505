<template>
  <div id="app">
     <!-- <WebViewer :path="`${publicPath}lib`" url="https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf" /> -->
    <router-view></router-view>
  </div>
  
</template>

<script>
// import WebViewer from './components/WebViewer.vue'
    export default {
        name: 'app',
       components:{
         WebViewer
       },
       data(){
         return {
          // publicPath: process.env.BASE_URL
         }
       }
    }
</script>

<style >
@import './assets/css/base.css';


#nprogress .bar {
  background:#FFB900 !important;
  height: 2px!important;
}
</style>