<template>
<div>
 
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
        licenseKey: 'Insert commercial license key here after purchase',
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
'commentsToolButton',
'highlightToolButton2',
'highlightToolButton3',
'highlightToolButton4',
'strikeoutToolButton2',
'strikeoutToolButton3',
'strikeoutToolButton4',
'freeHandToolButton2',
'freeHandToolButton3',
'freeHandToolButton4',
'freeTextToolButton2',
'freeTextToolButton3',
'freeTextToolButton4',

  ]
    }, this.$refs.viewer).then((instance) => {
      console.log(this.$parent.$refs);
    this.$parent.$refs.file_upload.addEventListener('change',()=>{
      const file = this.$parent.$refs.file_upload.files[0];
      instance.loadDocument(file,{filename:file.name})
    })
      this.docViewer = instance.docViewer;
      

      this.docViewer.on('documentLoaded', () => {
       
      });
      // 隐藏第一行的按钮
    //   instance.setHeaderItems(header => {
    //   const items = header.getItems().slice(0,0);
    //   header.update(items);
    // });
     instance.setHeaderItems(header => {
      header.push({
        type: 'actionButton',
        img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
        onClick: () => {
          // save the annotations
        }
      });
    });
       instance.setToolbarGroup('toolbarGroup-Annotation');
    // 隐藏第一行
    //  instance.disableElements(['header']);
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
  top:0;
  z-index: 20;
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