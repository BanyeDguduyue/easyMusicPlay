(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0b38":function(n,t,e){"use strict";e.r(t);var i=e("a6d4"),o=e("4b92");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("0dac");var r=e("2877"),c=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},"0dac":function(n,t,e){"use strict";var i=e("d6cd"),o=e.n(i);o.a},"3a06":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("components/bmusic").then(e.bind(null,"4505"))},o=function(){return e.e("components/header").then(e.bind(null,"3c3c"))},u=function(){return e.e("components/hot").then(e.bind(null,"10eb"))},r=function(){return e.e("components/recommend").then(e.bind(null,"3172"))},c=function(){return e.e("components/search").then(e.bind(null,"416b"))},a=function(){return e.e("components/my").then(e.bind(null,"9476"))},l={data:function(){return{current:"now",songList:[],imgurl:null,tablist:[{title:"正在热播",type:"now"},{title:"推荐",type:"recommend"},{title:"搜索",type:"search"},{title:"我听过的",type:"already"}]}},computed:{getimgbg:function(){var n=this.$store.state.bgimgurl;return n},underline:function(){}},onLoad:function(){var t=this;n.showLoading({title:"正在加载请稍后。。。"}),n.request({url:"http://39.107.80.8:5000/top/list?idx=1",method:"GET",data:{},success:function(e){var i=e.data.playlist.tracks.splice(0,100);t.songList=i.map(function(n){var t="";return n.ar.forEach(function(n,e){t=0==e?n.name:t+"/"+n.name}),{name:n.name,singer:1==n.ar.length?n.ar[0].name:t,id:n.id,picurl:n.al.picUrl}}),n.hideLoading(),t.$store.commit("getsonglist",t.songList)},fail:function(){},complete:function(){}})},methods:{switchPage:function(n){this.current=n},onImageLoad:function(n){var t=this.$store.state.bgimgurl;this.$store.commit("changeAvatar",t),this.imgurl="url(".concat(t,")")}},components:{Bmusic:i,Mheader:o,Hot:u,Recommend:r,Search:c,My:a}};t.default=l}).call(this,e("543d")["default"])},"4b92":function(n,t,e){"use strict";e.r(t);var i=e("3a06"),o=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=o.a},a6d4:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},d6cd:function(n,t,e){},f444:function(n,t,e){"use strict";(function(n){e("fdf1"),e("921b");i(e("66fd"));var t=i(e("0b38"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["f444","common/runtime","common/vendor"]]]);