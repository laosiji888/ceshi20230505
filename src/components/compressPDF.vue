<template>
<div>
<!-- <input type="file" ref="fileElem" multiple accept="image/*" > -->
<!-- <a href="#" id="fileSelect">Select some files</a> -->
<!-- <div ref="fileList" class="fileList"> -->
  <!-- <iframe ref="viewer"> -->
  <!-- </iframe> -->
  <!-- <p>No files selected!</p> -->
<!-- </div> -->
</div>
</template>
<script>
  
  // inputElement.addEventListener("change", handleFiles, false);
export default{
name:'',
data(){
  return{
  size:'',
  names:''
  
  }
},

// mounted(){
// const inputElem = this.$refs.fileElem
// console.log(inputElem);
// const fileList = this.$refs.fileList
// console.log(fileList);

// inputElem.addEventListener("change", handleFiles, false) 
// function handleFiles() {
// if (!this.files.length) {
//     fileList.innerHTML = "<p>No files selected!</p>";
//   } else {
//     fileList.innerHTML = "";
//     const obj_url = URL.createObjectURL(blob);
// const iframe = this.$ref.viewer
// console.log(iframe);
// iframe.setAttribute('src', obj_url);
// URL.revokeObjectURL(obj_url);
//     const list = document.createElement("ul");
//     fileList.appendChild(list);
//     for (let i = 0; i < this.files.length; i++) {
//       const li = document.createElement("li");
//       list.appendChild(li);

//       const img = document.createElement("img");
//       img.src = URL.createObjectURL(this.files[i]);
//       img.height = 60;
//       img.onload = function() {
//         URL.revokeObjectURL(this.src);
//       }
//       li.appendChild(img);
//       const info = document.createElement("span");
//       info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
//       li.appendChild(info);
//     }
//   }
// }
// // function senFiles(){
// //   const imgs = document.querySelectorAll('.obj');
// //   for(let i=0; i<imgs.length;i++){
// //  new FileUpload(imgs[i],imgs[i].file);


// // }

// // }
// // function FileUpload(img,file){
// //   const reader = new FileReader();
// //   this.ctrl = createThrobber(img);
// //   const xhr = new XMLHttpRequest();
// //   this.xhr = xhr;

// //   const self = this;
// //   this.xhr.upload.addEventListener("progress", function(e) {
// //         if (e.lengthComputable) {
// //           const percentage = Math.round((e.loaded * 100) / e.total);
// //           self.ctrl.update(percentage);
// //         }
// //       }, false);

// //   xhr.upload.addEventListener("load", function(e){
// //           self.ctrl.update(100);
// //           const canvas = self.ctrl.ctx.canvas;
// //           canvas.parentNode.removeChild(canvas);
// //       }, false);
// //   xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
// //   xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
// //   reader.onload = function(evt) {
// //     xhr.send(evt.target.result);
// //   };
// //   reader.readAsBinaryString(file);
// // }
// },
watch:{
  
},
methods:{
get(){
  //  const inputElement = document.getElementById("input");
   
},

}
}
</script>
<style lang='less' scoped>
.fileList{
  width: 800px;
  height: 300px;
  position: absolute;
  top: 200px;
  left: 300px;
}
.fileList{
  /deep/img{
    width: 200px;
    height: 300px;
  }
}
</style>