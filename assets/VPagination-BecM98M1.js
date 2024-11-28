import{x as E,bP as K,p as q,bt as L,b as W,m as X,bf as G,d as H,e as O,bQ as Q,a as U,f as j,bw as J,g as Y,D as Z,_ as ee,n as ae,l as te,P as le,s as ie,q as A,bR as ne,o as b,bS as k,t as f,u as se,c as o,K as P,H as h,bT as R,X as B}from"./index-NAqwdH6J.js";function ue(){const e=E([]);K(()=>e.value=[]);function V(n,_){e.value[_]=n}return{refs:e,updateRef:V}}const re=q({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:L,default:"$first"},prevIcon:{type:L,default:"$prev"},nextIcon:{type:L,default:"$next"},lastIcon:{type:L,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...W(),...X(),...G(),...H(),...O(),...Q(),...U({tag:"nav"}),...j(),...J({variant:"text"})},"VPagination"),ve=Y()({name:"VPagination",props:re(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,V){let{slots:n,emit:_}=V;const i=Z(e,"modelValue"),{t:g,n:$}=ee(),{isRtl:x}=ae(),{themeClasses:w}=te(e),{width:C}=le(),p=ie(-1);A(void 0,{scoped:!0});const{resizeRef:F}=ne(a=>{if(!a.length)return;const{target:t,contentRect:l}=a[0],r=t.querySelector(".v-pagination__list > *");if(!r)return;const v=l.width,m=r.offsetWidth+parseFloat(getComputedStyle(r).marginRight)*2;p.value=I(v,m)}),s=b(()=>parseInt(e.length,10)),u=b(()=>parseInt(e.start,10)),c=b(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):p.value>=0?p.value:I(C.value,58));function I(a,t){const l=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((a-t*l)/t).toFixed(2)))}const M=b(()=>{if(s.value<=0||isNaN(s.value)||s.value>Number.MAX_SAFE_INTEGER)return[];if(c.value<=0)return[];if(c.value===1)return[i.value];if(s.value<=c.value)return k(s.value,u.value);const a=c.value%2===0,t=a?c.value/2:Math.floor(c.value/2),l=a?t:t+1,r=s.value-t;if(l-i.value>=0)return[...k(Math.max(1,c.value-1),u.value),e.ellipsis,s.value];if(i.value-r>=(a?1:0)){const v=c.value-1,m=s.value-v+u.value;return[u.value,e.ellipsis,...k(v,m)]}else{const v=Math.max(1,c.value-3),m=v===1?i.value:i.value-Math.ceil(v/2)+u.value;return[u.value,e.ellipsis,...k(v,m),e.ellipsis,s.value]}});function y(a,t,l){a.preventDefault(),i.value=t,l&&_(l,t)}const{refs:N,updateRef:D}=ue();A({VPaginationBtn:{color:f(e,"color"),border:f(e,"border"),density:f(e,"density"),size:f(e,"size"),variant:f(e,"variant"),rounded:f(e,"rounded"),elevation:f(e,"elevation")}});const T=b(()=>M.value.map((a,t)=>{const l=r=>D(r,t);if(typeof a=="string")return{isActive:!1,key:`ellipsis-${t}`,page:a,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}};{const r=a===i.value;return{isActive:r,key:a,page:$(a),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:r?e.activeColor:e.color,"aria-current":r,"aria-label":g(r?e.currentPageAriaLabel:e.pageAriaLabel,a),onClick:v=>y(v,a)}}}})),d=b(()=>{const a=!!e.disabled||i.value<=u.value,t=!!e.disabled||i.value>=u.value+s.value-1;return{first:e.showFirstLastPage?{icon:x.value?e.lastIcon:e.firstIcon,onClick:l=>y(l,u.value,"first"),disabled:a,"aria-label":g(e.firstAriaLabel),"aria-disabled":a}:void 0,prev:{icon:x.value?e.nextIcon:e.prevIcon,onClick:l=>y(l,i.value-1,"prev"),disabled:a,"aria-label":g(e.previousAriaLabel),"aria-disabled":a},next:{icon:x.value?e.prevIcon:e.nextIcon,onClick:l=>y(l,i.value+1,"next"),disabled:t,"aria-label":g(e.nextAriaLabel),"aria-disabled":t},last:e.showFirstLastPage?{icon:x.value?e.firstIcon:e.lastIcon,onClick:l=>y(l,u.value+s.value-1,"last"),disabled:t,"aria-label":g(e.lastAriaLabel),"aria-disabled":t}:void 0}});function S(){var t;const a=i.value-u.value;(t=N.value[a])==null||t.$el.focus()}function z(a){a.key===R.left&&!e.disabled&&i.value>+e.start?(i.value=i.value-1,B(S)):a.key===R.right&&!e.disabled&&i.value<u.value+s.value-1&&(i.value=i.value+1,B(S))}return se(()=>o(e.tag,{ref:F,class:["v-pagination",w.value,e.class],style:e.style,role:"navigation","aria-label":g(e.ariaLabel),onKeydown:z,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(d.value.first):o(P,h({_as:"VPaginationBtn"},d.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(d.value.prev):o(P,h({_as:"VPaginationBtn"},d.value.prev),null)]),T.value.map((a,t)=>o("li",{key:a.key,class:["v-pagination__item",{"v-pagination__item--is-active":a.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(a):o(P,h({_as:"VPaginationBtn"},a.props),{default:()=>[a.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(d.value.next):o(P,h({_as:"VPaginationBtn"},d.value.next),null)]),e.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(d.value.last):o(P,h({_as:"VPaginationBtn"},d.value.last),null)])])]})),{}}});export{ve as V};
