webpackJsonp([1],{JgPM:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("uWFy");s.default={data:function(){return{scroll:0,isShow:!1}},methods:{goTop:function(){var t=this;this.scroll=Object(n.b)(),this.n=this.scroll,this.timer=setInterval(function(){t.scroll-=.03*t.n/.5,window.scrollTo(0,t.scroll),t.scroll<=0&&(clearInterval(t.timer),window.scrollTo(0,0))},30)}},mounted:function(){var t=this;window.addEventListener("scroll",function(){Object(n.b)()>=300?t.isShow=!0:t.isShow=!1})}}},Kjo5:function(t,s,i){i("OOSW");var n=i("mEwh")(i("k2Lv"),i("bcQV"),"data-v-35936840",null);t.exports=n.exports},OOSW:function(t,s){},ROw0:function(t,s,i){i("xUUT");var n=i("mEwh")(i("JgPM"),i("bZgj"),"data-v-015f00b7",null);t.exports=n.exports},bZgj:function(t,s,i){t.exports={render:function(){var t=this.$createElement,s=this._self._c||t;return s("transition",{attrs:{name:"slide"}},[this.isShow?s("div",{attrs:{id:"goTop"},on:{click:this.goTop}},[s("img",{attrs:{src:i("kvjl"),alt:"top"}})]):this._e()])},staticRenderFns:[]}},bcQV:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{style:{background:"url('static/rank/banner.jpg') no-repeat 0 0 / cover fixed"},attrs:{id:"rank"}},[i("div",{staticClass:"inner"},[i("div",{staticClass:"search"},[i("input",{ref:"search",attrs:{type:"text",placeholder:"请输入关键词"},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key))return null;t.search(s)}}}),t._v(" "),i("button",{on:{click:t.search}},[t._v("搜索")]),t._v(" "),t.isShow?i("span",[t._v("该城市不存在！")]):t._e()]),t._v(" "),t._m(0),t._v(" "),i("div",{ref:"list",staticClass:"list"},[i("table",{attrs:{border:"1"}},[i("thead",[i("tr",[i("th",[t._v("排名")]),t._v(" "),i("th",[t._v("城市")]),t._v(" "),i("th",{on:{click:function(s){t.sortList("num")}}},[t._v("AQI")]),t._v(" "),i("th",[t._v("空气质量")]),t._v(" "),i("th",{on:{click:function(s){t.sortList("pm25")}}},[t._v("PM"),i("sub",[t._v("2.5")])]),t._v(" "),i("th",{on:{click:function(s){t.sortList("pm10")}}},[t._v("PM"),i("sub",[t._v("10")])]),t._v(" "),i("th",{on:{click:function(s){t.sortList("co")}}},[t._v("CO")]),t._v(" "),i("th",{on:{click:function(s){t.sortList("no2")}}},[t._v("NO"),i("sub",[t._v("2")])]),t._v(" "),i("th",{on:{click:function(s){t.sortList("o3")}}},[t._v("O"),i("sub",[t._v("3")])]),t._v(" "),i("th",{on:{click:function(s){t.sortList("so2")}}},[t._v("SO"),i("sub",[t._v("2")])])])]),t._v(" "),i("tbody",[t._l(t.aqiList,function(s,n){return t.PC?t._e():i("tr",{ref:"top",refInFor:!0,staticClass:"phoneList"},[i("td",[i("span",{staticClass:"listTitle"},[t._v("排名")]),t._v(" "),i("span",{staticClass:"listCon"},[t._v(t._s(n+1))])]),t._v(" "),i("td",[i("span",{staticClass:"listTitle"},[t._v("城市")]),t._v(" "),i("span",{staticClass:"listCon"},[i("a",{ref:"city",refInFor:!0,attrs:{href:"javascript:;"},domProps:{innerHTML:t._s(s.cityname)},on:{click:function(i){t.goToSmog(s.cityname)}}})])]),t._v(" "),i("td",[i("span",{staticClass:"listTitle"},[t._v("AQI")]),t._v(" "),i("span",{staticClass:"listCon",domProps:{innerHTML:t._s(s.num)}})]),t._v(" "),i("td",[i("span",{staticClass:"listTitle"},[t._v("空气质量")]),t._v(" "),i("span",{staticClass:"listCon",domProps:{innerHTML:t._s(s.status)}})]),t._v(" "),i("td",[t._m(1,!0),t._v(" "),i("span",{staticClass:"listCon",domProps:{innerHTML:t._s(s.pm25)}})]),t._v(" "),i("td",[t._m(2,!0),t._v(" "),i("span",{staticClass:"listCon",domProps:{innerHTML:t._s(s.pm10)}})]),t._v(" "),i("td",[i("span",{staticClass:"listTitle"},[t._v("CO")]),t._v(" "),i("span",{staticClass:"listCon",domProps:{innerHTML:t._s(s.co)}})]),t._v(" "),i("td",[t._m(3,!0),t._v(" "),i("span",{staticClass:"listCon",domProps:{innerHTML:t._s(s.no2)}})]),t._v(" "),i("td",[t._m(4,!0),t._v(" "),i("span",{staticClass:"listCon",domProps:{innerHTML:t._s(s.o3)}})]),t._v(" "),i("td",[t._m(5,!0),t._v(" "),i("span",{staticClass:"listCon",domProps:{innerHTML:t._s(s.so2)}})])])}),t._v(" "),t._l(t.aqiList,function(s,n){return t.PC?i("tr",{ref:"name",refInFor:!0,staticClass:"webList"},[i("td",[t._v(t._s(n+1))]),t._v(" "),i("td",[i("a",{ref:"webCity",refInFor:!0,attrs:{href:"javascript:;"},domProps:{innerHTML:t._s(s.cityname)},on:{click:function(i){t.goToSmog(s.cityname)}}})]),t._v(" "),i("td",{domProps:{innerHTML:t._s("0"===s.num?"暂无":s.num)}}),t._v(" "),i("td",{domProps:{innerHTML:t._s(s.status)}}),t._v(" "),i("td",{domProps:{innerHTML:t._s(s.pm25)}}),t._v(" "),i("td",{domProps:{innerHTML:t._s(s.pm10)}}),t._v(" "),i("td",{domProps:{innerHTML:t._s(s.co)}}),t._v(" "),i("td",{domProps:{innerHTML:t._s(s.no2)}}),t._v(" "),i("td",{domProps:{innerHTML:t._s(s.o3)}}),t._v(" "),i("td",{domProps:{innerHTML:t._s(s.so2)}})]):t._e()})],2)])]),t._v(" "),t.isBlock?i("div",{staticClass:"none"},[i("span",[t._v("暂无数据！稍后再试")])]):t._e(),t._v(" "),i("foot-box")],1),t._v(" "),i("go-top"),t._v(" "),t.aqiList.length||t.error?t._e():i("loading"),t._v(" "),t.error?i("wrong"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("h3",[this._v("空气质量排行榜(根据AQI排序)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"listTitle"},[this._v("PM"),s("sub",[this._v("2.5")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"listTitle"},[this._v("PM"),s("sub",[this._v("10")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"listTitle"},[this._v("NO"),s("sub",[this._v("2")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"listTitle"},[this._v("O"),s("sub",[this._v("3")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"listTitle"},[this._v("SO"),s("sub",[this._v("2")])])}]}},k2Lv:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("Dd8w"),o=i.n(n),e=i("T452"),r=i("BMa3"),a=i.n(r),c=i("uWFy"),l=i("HVJf"),v=i("dQCR"),_=i.n(v),u=i("ROw0"),d=i.n(u),f=i("y/jF"),h=i.n(f),p=i("v0QW"),m=i.n(p);s.default={data:function(){return{error:!1,aqiList:[],isShow:!1,isBlock:!1}},methods:o()({goToSmog:function(t){this.setSmogCity(t),this.$router.push({path:"/smog"})},_getRankList:function(){var t=this;a.a.get("http://www.cq.cn/x/air/tianqi4/index.php/play/aqiRank").then(function(s){s.data.error===e.a?(t.aqiList=s.data.data,0===t.aqiList.length&&(t.isBlock=!0)):t.error=!0}).catch(function(s){t.error=!0})},search:function(){if(document.body.clientWidth>=750)for(var t=this.$refs.search.value,s=0;s<this.$refs.webCity.length;s++){if(t===this.$refs.webCity[s].innerHTML)return this.isShow=!1,void window.scrollTo(0,this.$refs.name[s].offsetTop+this.$refs.list.offsetTop);this.isShow=!0}if(document.body.clientWidth<=750)for(var i=this.$refs.search.value,n=0;n<this.$refs.city.length;n++){if(i===this.$refs.city[n].innerHTML)return this.isShow=!1,void window.scrollTo(0,this.$refs.top[n].offsetTop+this.$refs.list.offsetTop);this.isShow=!0}},sortList:function(t){var s=this.aqiList;s=s.sort(Object(c.a)(t)),this.aqiList=s}},Object(l.c)({setSmogCity:"SET_SMOG_CITY"})),mounted:function(){var t=this;this._getRankList(),document.body.clientWidth>=750?this.PC=!0:this.PC=!1,window.addEventListener("resize",function(){document.body.clientWidth>=750?t.PC=!0:t.PC=!1})},components:{FootBox:_.a,goTop:d.a,Loading:h.a,Wrong:m.a}}},kvjl:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACJUlEQVRYR8WXjzHEUBDGv68COqADVOBUgApQASpABUYFqAAVoAJ0QAeugjVfZt95iSRvXzC3M3dzN0l2f/v3bYglC2vtm9kegA0A6/6Rinf/vJJ8qNEZAjCzGYBjADIekXsAVySfSjePApiZvDwDcFhSNHD9BsAFSUWoVwYBzGwTwCOA1YnG02OfAHZIvvbp6QUwM3l8/UvD3cePSCoiLfkB4J6//LHxpG6rG4kWgOdcxqNhf3PN6oqIKB2CWNREF0AhOohoAiDj6g6Jqj0KcUtyUdQLAG81FV1EGuMk5RHMTBGrgVBRNi2aA6h3dwPWc89TqhqQCogHks1MyQGs0riiderPXKrVaiBINrabLx+vdwWA3HMZ15xIRvVffV4DsU/yPgGc+8QbYvhwg7qejOt3DqD/OYR+r404pQl5ngBK1f/s50BuvA8gh1BNbY8A6Kw4SQCqyLGbFX7ViMKeSzcC6Zq8l+6x1nwmOYsCDDkyBBCoZ7QASin4D4BWCkpF+B8ArSLUUCi1YR/Eb1Lw3YY+CyKDqAsxFWBOspmiU0ZxpAtKRdg7inWyRQ+jZGBqBH4eRp6G2m6YAtB/HDuAllANkZVSDP16WrGiS+tcw2xwIXEITbvlrGTJ66UupRmEIqEzIpqOoawp7Nqe4mt5BqGa0JSM7oldiFs9P+nFJNfk++JJcGWTx4qcDPd6nesOvRt2YDS2lZ6hl1PtAWGpBghrDt74BWP5ziHYaSCtAAAAAElFTkSuQmCC"},mvHQ:function(t,s,i){t.exports={default:i("qkKv"),__esModule:!0}},qkKv:function(t,s,i){var n=i("FeBl"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},uWFy:function(t,s,i){"use strict";s.a=function(t){return function(s,i){var n=parseInt(s[t]),o=parseInt(i[t]);return n>o?-1:n<o?1:0}},s.b=function(){var t=0;return document.documentElement&&document.documentElement.scrollTop?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t};var n=i("mvHQ"),o=(i.n(n),document.createElement("div").style);!function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var s in t)if(void 0!==o[t[s]])return s}()},xUUT:function(t,s){}});
//# sourceMappingURL=1.2d8adcb49540264a3466.js.map