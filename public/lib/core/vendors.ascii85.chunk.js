/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[19],{361:function(ha,da,h){(function(h){function aa(e){this.vf=e=e||{};if(Array.isArray(e.table)){var f=[];e.table.forEach(function(e,h){f[e.charCodeAt(0)]=h});e.J0=e.table;e.$Z=f}}var ca=h.from||function(){switch(arguments.length){case 1:return new h(arguments[0]);case 2:return new h(arguments[0],arguments[1]);case 3:return new h(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ea=h.allocUnsafe||
function(e){return new h(e)},z=function(){return"undefined"===typeof Uint8Array?function(e){return Array(e)}:function(e){return new Uint8Array(e)}}(),x=String.fromCharCode(0),f=x+x+x+x,e=ca("<~").cv(0),y=ca("~>").cv(0),r=function(){var e=Array(85),f;for(f=0;85>f;f++)e[f]=String.fromCharCode(33+f);return e}(),n=function(){var e=Array(256),f;for(f=0;85>f;f++)e[33+f]=f;return e}();x=ha.exports=new aa;aa.prototype.encode=function(e,f){var n=z(5),w=e,y=this.vf,x,ba;"string"===typeof w?w=ca(w,"binary"):
w instanceof h||(w=ca(w));f=f||{};if(Array.isArray(f)){e=f;var aa=y.cy||!1;var fa=y.hF||!1}else e=f.table||y.J0||r,aa=void 0===f.cy?y.cy||!1:!!f.cy,fa=void 0===f.hF?y.hF||!1:!!f.hF;y=0;var da=Math.ceil(5*w.length/4)+4+(aa?4:0);f=ea(da);aa&&(y+=f.write("<~",y));var ha=x=ba=0;for(da=w.length;ha<da;ha++){var Ba=w.VG(ha);ba*=256;ba+=Ba;x++;if(!(x%4)){if(fa&&538976288===ba)y+=f.write("y",y);else if(ba){for(x=4;0<=x;x--)Ba=ba%85,n[x]=Ba,ba=(ba-Ba)/85;for(x=0;5>x;x++)y+=f.write(e[n[x]],y)}else y+=f.write("z",
y);x=ba=0}}if(x)if(ba){w=4-x;for(ha=4-x;0<ha;ha--)ba*=256;for(x=4;0<=x;x--)Ba=ba%85,n[x]=Ba,ba=(ba-Ba)/85;for(x=0;5>x;x++)y+=f.write(e[n[x]],y);y-=w}else for(ha=0;ha<x+1;ha++)y+=f.write(e[0],y);aa&&(y+=f.write("~>",y));return f.slice(0,y)};aa.prototype.decode=function(r,x){var w=this.vf,ba=!0,z=!0,aa,fa,da;x=x||w.$Z||n;if(!Array.isArray(x)&&(x=x.table||x,!Array.isArray(x))){var ha=[];Object.keys(x).forEach(function(e){ha[e.charCodeAt(0)]=x[e]});x=ha}ba=!x[122];z=!x[121];r instanceof h||(r=ca(r));
ha=0;if(ba||z){var la=0;for(da=r.length;la<da;la++){var sa=r.VG(la);ba&&122===sa&&ha++;z&&121===sa&&ha++}}var Ba=0;da=Math.ceil(4*r.length/5)+4*ha+5;w=ea(da);if(4<=r.length&&r.cv(0)===e){for(la=r.length-2;2<la&&r.cv(la)!==y;la--);if(2>=la)throw Error("Invalid ascii85 string delimiter pair.");r=r.slice(2,la)}la=aa=fa=0;for(da=r.length;la<da;la++)sa=r.VG(la),ba&&122===sa?Ba+=w.write(f,Ba):z&&121===sa?Ba+=w.write("    ",Ba):void 0!==x[sa]&&(fa*=85,fa+=x[sa],aa++,aa%5||(Ba=w.Qba(fa,Ba),aa=fa=0));if(aa){r=
5-aa;for(la=0;la<r;la++)fa*=85,fa+=84;la=3;for(da=r-1;la>da;la--)Ba=w.Rba(fa>>>8*la&255,Ba)}return w.slice(0,Ba)};x.Jca=new aa({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});x.jca=new aa({cy:!0});x.zU=aa}).call(this,h(368).Buffer)}}]);}).call(this || window)