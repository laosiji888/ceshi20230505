<template>
<div>
  <input type="file" ref="file_upload" class="file_upload">
  <div ref="viewer" class="WebViewer" ></div>
</div>
</template>
<script>
export default {
  name: 'WebViewer',
  props: {
    path: String,
    url: String
  },
  mounted: function () {
    WebViewer({
     path: '.././lib',
     css:'../assets/css/viewer.css',
       disabledElements: [
    'leftPanelButton',
    'viewControlsButton',
    'panToolButton',
'selectToolButton',
'fitButton',
'zoomOutButton',
'zoomInButton',
'eraserToolButton',
'underlineToolButton',
// 'viewControlsOverlay',
// 'freeHandToolGroupButton',
'rectangleToolButton',
'rectangleToolButton2',
'rectangleToolButton3',
'rectangleToolButton4',
'underlineToolButton',
'underlineToolButton2',
'underlineToolButton3',
'underlineToolButton4',
'squigglyToolButton',
'squigglyToolButton2',
'squigglyToolButton3',
'squigglyToolButton4',
'textToolGroupButton',
'textToolGroupButton2',
'textToolGroupButton3',
'textToolGroupButton4',
'stickyToolButton',
'stickyToolButton2',
'stickyToolButton3',
'stickyToolButton4',
'rectangleToolButton',
'commentsToolButton'


  ]
    }, this.$refs.viewer).then((instance) => {
     this.$refs.file_upload.onchange = e =>{
      
   instance.loadDocument(e.target.value);
     }
      this.docViewer = instance.docViewer;
      

      this.docViewer.on('documentLoaded', () => {
       
      });
      // 隐藏第一行的按钮
      instance.setHeaderItems(header => {
      const items = header.getItems().slice(0,0);
      header.update(items);
    });
    // // 替换图标
     
    instance.updateTool('AnnotationCreateTextHighlight', {
      buttonImage: '.././edit/nwicon1.png'
    });
   instance.updateTool('AnnotationCreateTextStrikeout', {
      buttonImage: '.././edit/nwicon2.png'
    });
     instance.updateTool('AnnotationCreateFreeHand', {
      buttonImage: '.././edit/nwicon3.png'
    });
     instance.updateTool('AnnotationCreateFreeText', {
      buttonImage: '.././edit/nwicon4.png'
    });
    //  const style = instance.iframeWindow.document.documentElement.style;
    //  console.log(style);
    //  style.setProperty(`--tools`,'red')
  // style.setProperty(`--primary-button`, 'red');
  // style.setProperty(`--primary-button-hover`, 'yellow');
 
    // instance.updateTool('AnnotationCreateHighlight', {
    //   buttonImage: '.././edit/nwicon1.png'
    
//  隐藏最上面除了annotate以外的项目
    //   instance.disableElements(['ribbons']);
    // // set the default toolbar group to the Shapes group
    // instance.setToolbarGroup('toolbarGroup-Annotate');

    });
  },
  methods:{

  }
}
</script>
<style lang='less' scoped>
.WebViewer{
  width: 1920px;
  height: 800px;
  position: absolute;
  top: 64px;
}
.file_upload{
position: absolute;
top: 260px;
z-index: 100;
left: 300px;
}
.tools-container{
  /deep/.no-presets{
    display: none;
  }
}
</style>