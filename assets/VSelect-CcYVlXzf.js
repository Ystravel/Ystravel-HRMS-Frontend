import{p as W,m as pe,g as oe,bS as ge,z as H,u as ue,c,U as $,H as M,P as Se,s as _,I as re,x as N,o as D,M as ye,y as le,bV as ke,X as Ve,bn as ae,a$ as Pe,bF as xe,b0 as Te,t as Ie,E as Ce,A as Ae,bW as Re,v as Q,bu as De,aY as Fe,bk as Be,bl as Oe,bX as _e,aH as Ee,D as ce,bm as Le,ar as de,aA as Me,ah as He,a7 as fe,bo as Ue,ap as qe,r as ze,a9 as Ne,aP as Ke,aF as $e,bq as ve,bs as me}from"./index-CEUVR7RQ.js";import{m as We,u as je,b as Xe,V as he}from"./VList-DOI9Pofw.js";import{V as Ye}from"./VCheckboxBtn-CYsTMO8j.js";const Ge=W({renderless:Boolean,...pe()},"VVirtualScrollItem"),Je=oe()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ge(),emits:{"update:height":t=>!0},setup(t,d){let{attrs:n,emit:f,slots:u}=d;const{resizeRef:v,contentRect:m}=ge(void 0,"border");H(()=>{var o;return(o=m.value)==null?void 0:o.height},o=>{o!=null&&f("update:height",o)}),ue(()=>{var o,a;return t.renderless?c($,null,[(o=u.default)==null?void 0:o.call(u,{itemRef:v})]):c("div",M({ref:v,class:["v-virtual-scroll__item",t.class],style:t.style},n),[(a=u.default)==null?void 0:a.call(u)])})}}),Qe=-1,Ze=1,ne=100,et=W({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function tt(t,d){const n=Se(),f=_(0);re(()=>{f.value=parseFloat(t.itemHeight||0)});const u=_(0),v=_(Math.ceil((parseInt(t.height)||n.height.value)/(f.value||16))||1),m=_(0),o=_(0),a=N(),p=N();let A=0;const{resizeRef:B,contentRect:i}=ge();re(()=>{B.value=a.value});const V=D(()=>{var e;return a.value===document.documentElement?n.height.value:((e=i.value)==null?void 0:e.height)||parseInt(t.height)||0}),R=D(()=>!!(a.value&&p.value&&V.value&&f.value));let x=Array.from({length:d.value.length}),h=Array.from({length:d.value.length});const b=_(0);let S=-1;function E(e){return x[e]||f.value}const T=ke(()=>{const e=performance.now();h[0]=0;const l=d.value.length;for(let r=1;r<=l-1;r++)h[r]=(h[r-1]||0)+E(r-1);b.value=Math.max(b.value,performance.now()-e)},b),j=H(R,e=>{e&&(j(),A=p.value.offsetTop,T.immediate(),F(),~S&&Ve(()=>{ae&&window.requestAnimationFrame(()=>{J(S),S=-1})}))});ye(()=>{T.clear()});function Z(e,l){const r=x[e],g=f.value;f.value=g?Math.min(f.value,l):l,(r!==l||g!==f.value)&&(x[e]=l,T())}function k(e){return e=le(e,0,d.value.length-1),h[e]||0}function X(e){return lt(h,e)}let U=0,L=0,K=0;H(V,(e,l)=>{l&&(F(),e<l&&requestAnimationFrame(()=>{L=0,F()}))});function Y(){if(!a.value||!p.value)return;const e=a.value.scrollTop,l=performance.now();l-K>500?(L=Math.sign(e-U),A=p.value.offsetTop):L=e-U,U=e,K=l,F()}function q(){!a.value||!p.value||(L=0,K=0,F())}let G=-1;function F(){cancelAnimationFrame(G),G=requestAnimationFrame(ee)}function ee(){if(!a.value||!V.value)return;const e=U-A,l=Math.sign(L),r=Math.max(0,e-ne),g=le(X(r),0,d.value.length),I=e+V.value+ne,s=le(X(I)+1,g+1,d.value.length);if((l!==Qe||g<u.value)&&(l!==Ze||s>v.value)){const y=k(u.value)-k(g),w=k(s)-k(v.value);Math.max(y,w)>ne?(u.value=g,v.value=s):(g<=0&&(u.value=g),s>=d.value.length&&(v.value=s))}m.value=k(u.value),o.value=k(d.value.length)-k(v.value)}function J(e){const l=k(e);!a.value||e&&!l?S=e:a.value.scrollTop=l}const te=D(()=>d.value.slice(u.value,v.value).map((e,l)=>({raw:e,index:l+u.value})));return H(d,()=>{x=Array.from({length:d.value.length}),h=Array.from({length:d.value.length}),T.immediate(),F()},{deep:!0}),{calculateVisibleItems:F,containerRef:a,markerRef:p,computedItems:te,paddingTop:m,paddingBottom:o,scrollToIndex:J,handleScroll:Y,handleScrollend:q,handleItemResize:Z}}function lt(t,d){let n=t.length-1,f=0,u=0,v=null,m=-1;if(t[n]<d)return n;for(;f<=n;)if(u=f+n>>1,v=t[u],v>d)n=u-1;else if(v<d)m=u,f=u+1;else return v===d?u:f;return m}const nt=W({items:{type:Array,default:()=>[]},renderless:Boolean,...et(),...pe(),...Pe()},"VVirtualScroll"),at=oe()({name:"VVirtualScroll",props:nt(),setup(t,d){let{slots:n}=d;const f=xe("VVirtualScroll"),{dimensionStyles:u}=Te(t),{calculateVisibleItems:v,containerRef:m,markerRef:o,handleScroll:a,handleScrollend:p,handleItemResize:A,scrollToIndex:B,paddingTop:i,paddingBottom:V,computedItems:R}=tt(t,Ie(t,"items"));return Ce(()=>t.renderless,()=>{function x(){var S,E;const b=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";m.value===document.documentElement?(document[b]("scroll",a,{passive:!0}),document[b]("scrollend",p)):((S=m.value)==null||S[b]("scroll",a,{passive:!0}),(E=m.value)==null||E[b]("scrollend",p))}Ae(()=>{m.value=Re(f.vnode.el,!0),x(!0)}),ye(x)}),ue(()=>{const x=R.value.map(h=>c(Je,{key:h.index,renderless:t.renderless,"onUpdate:height":b=>A(h.index,b)},{default:b=>{var S;return(S=n.default)==null?void 0:S.call(n,{item:h.raw,index:h.index,...b})}}));return t.renderless?c($,null,[c("div",{ref:o,class:"v-virtual-scroll__spacer",style:{paddingTop:Q(i.value)}},null),x,c("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Q(V.value)}},null)]):c("div",{ref:m,class:["v-virtual-scroll",t.class],onScrollPassive:a,onScrollend:p,style:[u.value,t.style]},[c("div",{ref:o,class:"v-virtual-scroll__container",style:{paddingTop:Q(i.value),paddingBottom:Q(V.value)}},[x])])}),{calculateVisibleItems:v,scrollToIndex:B}}});function ot(t,d){const n=_(!1);let f;function u(o){cancelAnimationFrame(f),n.value=!0,f=requestAnimationFrame(()=>{f=requestAnimationFrame(()=>{n.value=!1})})}async function v(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const a=H(n,()=>{a(),o()})}else o()})}async function m(o){var A,B;if(o.key==="Tab"&&((A=d.value)==null||A.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const a=(B=t.value)==null?void 0:B.$el;if(!a)return;(o.key==="Home"||o.key==="End")&&a.scrollTo({top:o.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await v();const p=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const i=a.getBoundingClientRect().top;for(const V of p)if(V.getBoundingClientRect().top>=i){V.focus();break}}else{const i=a.getBoundingClientRect().bottom;for(const V of[...p].reverse())if(V.getBoundingClientRect().bottom<=i){V.focus();break}}}return{onScrollPassive:u,onKeydown:m}}const ut=W({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:De,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...We({itemChildren:!1})},"Select"),st=W({...ut(),...Fe(Be({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Oe({transition:{component:_e}})},"VSelect"),dt=oe()({name:"VSelect",props:st(),emits:{"update:focused":t=>!0,"update:modelValue":t=>!0,"update:menu":t=>!0},setup(t,d){let{slots:n}=d;const{t:f}=Ee(),u=N(),v=N(),m=N(),o=ce(t,"menu"),a=D({get:()=>o.value,set:e=>{var l;o.value&&!e&&((l=v.value)!=null&&l.ΨopenChildren.size)||(o.value=e)}}),{items:p,transformIn:A,transformOut:B}=je(t),i=ce(t,"modelValue",[],e=>A(e===null?[null]:$e(e)),e=>{const l=B(e);return t.multiple?l:l[0]??null}),V=D(()=>typeof t.counterValue=="function"?t.counterValue(i.value):typeof t.counterValue=="number"?t.counterValue:i.value.length),R=Le(),x=D(()=>i.value.map(e=>e.value)),h=_(!1),b=D(()=>a.value?t.closeText:t.openText);let S="",E;const T=D(()=>t.hideSelected?p.value.filter(e=>!i.value.some(l=>t.valueComparator(l,e))):p.value),j=D(()=>t.hideNoData&&!T.value.length||t.readonly||(R==null?void 0:R.isReadonly.value)),Z=D(()=>{var e;return{...t.menuProps,activatorProps:{...((e=t.menuProps)==null?void 0:e.activatorProps)||{},"aria-haspopup":"listbox"}}}),k=N(),X=ot(k,u);function U(e){t.openOnClear&&(a.value=!0)}function L(){j.value||(a.value=!a.value)}function K(e){ve(e)&&Y(e)}function Y(e){var I,s;if(!e.key||t.readonly||R!=null&&R.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(e.key)&&e.preventDefault(),["Enter","ArrowDown"," "].includes(e.key)&&(a.value=!0),["Escape","Tab"].includes(e.key)&&(a.value=!1),e.key==="Home"?(I=k.value)==null||I.focus("first"):e.key==="End"&&((s=k.value)==null||s.focus("last"));const l=1e3;if(t.multiple||!ve(e))return;const r=performance.now();r-E>l&&(S=""),S+=e.key.toLowerCase(),E=r;const g=p.value.find(y=>y.title.toLowerCase().startsWith(S));if(g!==void 0){i.value=[g];const y=T.value.indexOf(g);ae&&window.requestAnimationFrame(()=>{var w;y>=0&&((w=m.value)==null||w.scrollToIndex(y))})}}function q(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!e.props.disabled)if(t.multiple){const r=i.value.findIndex(I=>t.valueComparator(I.value,e.value)),g=l??!~r;if(~r){const I=g?[...i.value,e]:[...i.value];I.splice(r,1),i.value=I}else g&&(i.value=[...i.value,e])}else{const r=l!==!1;i.value=r?[e]:[],Ve(()=>{a.value=!1})}}function G(e){var l;(l=k.value)!=null&&l.$el.contains(e.relatedTarget)||(a.value=!1)}function F(){var e;t.eager&&((e=m.value)==null||e.calculateVisibleItems())}function ee(){var e;h.value&&((e=u.value)==null||e.focus())}function J(e){h.value=!0}function te(e){if(e==null)i.value=[];else if(me(u.value,":autofill")||me(u.value,":-webkit-autofill")){const l=p.value.find(r=>r.title===e);l&&q(l)}else u.value&&(u.value.value="")}return H(a,()=>{if(!t.hideSelected&&a.value&&i.value.length){const e=T.value.findIndex(l=>i.value.some(r=>t.valueComparator(r.value,l.value)));ae&&window.requestAnimationFrame(()=>{var l;e>=0&&((l=m.value)==null||l.scrollToIndex(e))})}}),H(()=>t.items,(e,l)=>{a.value||h.value&&!l.length&&e.length&&(a.value=!0)}),ue(()=>{const e=!!(t.chips||n.chip),l=!!(!t.hideNoData||T.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),r=i.value.length>0,g=de.filterProps(t),I=r||!h.value&&t.label&&!t.persistentPlaceholder?void 0:t.placeholder;return c(de,M({ref:u},g,{modelValue:i.value.map(s=>s.props.value).join(", "),"onUpdate:modelValue":te,focused:h.value,"onUpdate:focused":s=>h.value=s,validationValue:i.externalValue,counterValue:V.value,dirty:r,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!t.chips,[`v-select--${t.multiple?"multiple":"single"}`]:!0,"v-select--selected":i.value.length,"v-select--selection-slot":!!n.selection},t.class],style:t.style,inputmode:"none",placeholder:I,"onClick:clear":U,"onMousedown:control":L,onBlur:G,onKeydown:Y,"aria-label":f(b.value),title:f(b.value)}),{...n,default:()=>c($,null,[c(Me,M({ref:v,modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,activator:"parent",contentClass:"v-select__content",disabled:j.value,eager:t.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:t.transition,onAfterEnter:F,onAfterLeave:ee},Z.value),{default:()=>[l&&c(Xe,M({ref:k,selected:x.value,selectStrategy:t.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onKeydown:K,onFocusin:J,tabindex:"-1","aria-live":"polite",color:t.itemColor??t.color},X,t.listProps),{default:()=>{var s,y,w;return[(s=n["prepend-item"])==null?void 0:s.call(n),!T.value.length&&!t.hideNoData&&(((y=n["no-data"])==null?void 0:y.call(n))??c(he,{title:f(t.noDataText)},null)),c(at,{ref:m,renderless:!0,items:T.value},{default:O=>{var ie;let{item:C,index:z,itemRef:P}=O;const se=M(C.props,{ref:P,key:z,onClick:()=>q(C,null)});return((ie=n.item)==null?void 0:ie.call(n,{item:C,index:z,props:se}))??c(he,M(se,{role:"option"}),{prepend:be=>{let{isSelected:we}=be;return c($,null,[t.multiple&&!t.hideSelected?c(Ye,{key:C.value,modelValue:we,ripple:!1,tabindex:"-1"},null):void 0,C.props.prependAvatar&&c(He,{image:C.props.prependAvatar},null),C.props.prependIcon&&c(fe,{icon:C.props.prependIcon},null)])}})}}),(w=n["append-item"])==null?void 0:w.call(n)]}})]}),i.value.map((s,y)=>{function w(P){P.stopPropagation(),P.preventDefault(),q(s,!1)}const O={"onClick:close":w,onKeydown(P){P.key!=="Enter"&&P.key!==" "||(P.preventDefault(),P.stopPropagation(),w(P))},onMousedown(P){P.preventDefault(),P.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},C=e?!!n.chip:!!n.selection,z=C?Ue(e?n.chip({item:s,index:y,props:O}):n.selection({item:s,index:y})):void 0;if(!(C&&!z))return c("div",{key:s.value,class:"v-select__selection"},[e?n.chip?c(ze,{key:"chip-defaults",defaults:{VChip:{closable:t.closableChips,size:"small",text:s.title}}},{default:()=>[z]}):c(qe,M({key:"chip",closable:t.closableChips,size:"small",text:s.title,disabled:s.props.disabled},O),null):z??c("span",{class:"v-select__selection-text"},[s.title,t.multiple&&y<i.value.length-1&&c("span",{class:"v-select__selection-comma"},[Ne(",")])])])})]),"append-inner":function(){var O;for(var s=arguments.length,y=new Array(s),w=0;w<s;w++)y[w]=arguments[w];return c($,null,[(O=n["append-inner"])==null?void 0:O.call(n,...y),t.menuIcon?c(fe,{class:"v-select__menu-icon",icon:t.menuIcon},null):void 0])}})}),Ke({isFocused:h,menu:a,select:q},u)}});export{dt as V,at as a,ut as m,ot as u};
