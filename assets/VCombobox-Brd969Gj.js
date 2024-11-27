import{m as Ce,u as pe,b as we}from"./VPagination-CDeKvYwQ.js";import{p as Se,aY as Ie,bi as Fe,bj as Pe,g as Ae,_ as De,x as N,s as P,D as J,o as b,ba as _e,bk as Re,z as A,X as Q,bl as Ee,u as Te,aA as Z,c as i,U as L,aw as Me,H as F,al as Ne,ab as ee,bm as Le,ax as Oe,r as Ke,ad as Ue,bn as Be,aP as ze,$ as je,bo as He,bp as $e}from"./index-CDGlHwuR.js";import{m as qe,u as We}from"./VDataTableServer-DGJes_T6.js";import{u as Xe,t as D,b as Ye,V as le}from"./VList-DQb7xxY0.js";import{V as Ge}from"./VCheckboxBtn-D4-rOcoU.js";function Je(e,g,_){if(g==null)return e;if(Array.isArray(g))throw new Error("Multiple matches is not implemented");return typeof g=="number"&&~g?i(L,null,[i("span",{class:"v-combobox__unmask"},[e.substr(0,g)]),i("span",{class:"v-combobox__mask"},[e.substr(g,_)]),i("span",{class:"v-combobox__unmask"},[e.substr(g+_)])]):e}const Qe=Se({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...qe({filterKeys:["title"]}),...Ce({hideNoData:!0,returnObject:!0}),...Ie(Fe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Pe({transition:!1})},"VCombobox"),nl=Ae()({name:"VCombobox",props:Qe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,g){var X;let{emit:_,slots:o}=g;const{t:O}=De(),x=N(),y=P(!1),k=P(!0),K=P(!1),q=N(),U=N(),B=J(e,"menu"),c=b({get:()=>B.value,set:l=>{var a;B.value&&!l&&((a=q.value)!=null&&a.ΨopenChildren.size)||(B.value=l)}}),s=P(-1);let z=!1;const ae=b(()=>{var l;return(l=x.value)==null?void 0:l.color}),W=b(()=>c.value?e.closeText:e.openText),{items:te,transformIn:ne,transformOut:ue}=Xe(e),{textColorClasses:oe,textColorStyles:ie}=_e(ae),n=J(e,"modelValue",[],l=>ne(je(l)),l=>{const a=ue(l);return e.multiple?a:a[0]??null}),I=Re(),R=b(()=>!!(e.chips||o.chip)),V=b(()=>R.value||!!o.selection),C=P(!e.multiple&&!V.value?((X=n.value[0])==null?void 0:X.title)??"":""),v=b({get:()=>C.value,set:l=>{var a;if(C.value=l??"",!e.multiple&&!V.value&&(n.value=[D(e,l)]),l&&e.multiple&&((a=e.delimiters)!=null&&a.length)){const r=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));r.length>1&&(r.forEach(t=>{t=t.trim(),t&&h(D(e,t))}),C.value="")}l||(s.value=-1),k.value=!l}}),se=b(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?n.value.length:v.value.length);A(C,l=>{z?Q(()=>z=!1):y.value&&!c.value&&(c.value=!0),_("update:search",l)}),A(n,l=>{var a;!e.multiple&&!V.value&&(C.value=((a=l[0])==null?void 0:a.title)??"")});const{filteredItems:E,getMatches:re}=We(e,te,()=>k.value?"":v.value),p=b(()=>e.hideSelected?E.value.filter(l=>!n.value.some(a=>a.value===l.value)):E.value),ce=b(()=>n.value.map(l=>l.value)),j=b(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((a=p.value[0])==null?void 0:a.title))&&p.value.length>0&&!k.value&&!K.value}),H=b(()=>e.hideNoData&&!p.value.length||e.readonly||(I==null?void 0:I.isReadonly.value)),$=N(),ve=pe($,x);function de(l){z=!0,e.openOnClear&&(c.value=!0)}function fe(){H.value||(c.value=!0)}function me(l){H.value||(y.value&&(l.preventDefault(),l.stopPropagation()),c.value=!c.value)}function be(l){var a;He(l)&&((a=x.value)==null||a.focus())}function he(l){var t;if($e(l)||e.readonly||I!=null&&I.isReadonly.value)return;const a=x.value.selectionStart,r=n.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(c.value=!0),["Escape"].includes(l.key)&&(c.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(j.value&&["Enter","Tab"].includes(l.key)&&!n.value.some(u=>{let{value:m}=u;return m===p.value[0].value})&&h(E.value[0]),k.value=!0),l.key==="ArrowDown"&&j.value&&((t=$.value)==null||t.focus("next")),l.key==="Enter"&&v.value&&(h(D(e,v.value)),V.value&&(C.value="")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&V.value&&n.value.length>0&&!v.value)return h(n.value[0],!1);if(~s.value){const u=s.value;h(n.value[s.value],!1),s.value=u>=r-1?r-2:u}else l.key==="Backspace"&&!v.value&&(s.value=r-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const u=s.value>-1?s.value-1:r-1;n.value[u]?s.value=u:(s.value=-1,x.value.setSelectionRange(v.value.length,v.value.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const u=s.value+1;n.value[u]?s.value=u:(s.value=-1,x.value.setSelectionRange(0,0))}}}function ge(){var l;e.eager&&((l=U.value)==null||l.calculateVisibleItems())}function xe(){var l;y.value&&(k.value=!0,(l=x.value)==null||l.focus())}function h(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const r=n.value.findIndex(u=>e.valueComparator(u.value,l.value)),t=a??!~r;if(~r){const u=t?[...n.value,l]:[...n.value];u.splice(r,1),n.value=u}else t&&(n.value=[...n.value,l]);e.clearOnSelect&&(v.value="")}else{const r=a!==!1;n.value=r?[l]:[],C.value=r&&!V.value?l.title:"",Q(()=>{c.value=!1,k.value=!0})}}function ye(l){y.value=!0,setTimeout(()=>{K.value=!0})}function Ve(l){K.value=!1}function ke(l){(l==null||l===""&&!e.multiple&&!V.value)&&(n.value=[])}return A(y,(l,a)=>{if(!(l||l===a)&&(s.value=-1,c.value=!1,v.value)){if(e.multiple){h(D(e,v.value));return}if(!V.value)return;n.value.some(r=>{let{title:t}=r;return t===v.value})?C.value="":h(D(e,v.value))}}),A(c,()=>{if(!e.hideSelected&&c.value&&n.value.length){const l=p.value.findIndex(a=>n.value.some(r=>e.valueComparator(r.value,a.value)));Ee&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=U.value)==null||a.scrollToIndex(l))})}}),A(()=>e.items,(l,a)=>{c.value||y.value&&!a.length&&l.length&&(c.value=!0)}),Te(()=>{const l=!!(!e.hideNoData||p.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),a=n.value.length>0,r=Z.filterProps(e);return i(Z,F({ref:x},r,{modelValue:v.value,"onUpdate:modelValue":[t=>v.value=t,ke],focused:y.value,"onUpdate:focused":t=>y.value=t,validationValue:n.externalValue,counterValue:se.value,dirty:a,class:["v-combobox",{"v-combobox--active-menu":c.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!V.value,"v-combobox--selecting-index":s.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:a?void 0:e.placeholder,"onClick:clear":de,"onMousedown:control":fe,onKeydown:he}),{...o,default:()=>i(L,null,[i(Me,F({ref:q,modelValue:c.value,"onUpdate:modelValue":t=>c.value=t,activator:"parent",contentClass:"v-combobox__content",disabled:H.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:ge,onAfterLeave:xe},e.menuProps),{default:()=>[l&&i(Ye,F({ref:$,selected:ce.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onKeydown:be,onFocusin:ye,onFocusout:Ve,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},ve,e.listProps),{default:()=>{var t,u,m;return[(t=o["prepend-item"])==null?void 0:t.call(o),!p.value.length&&!e.hideNoData&&(((u=o["no-data"])==null?void 0:u.call(o))??i(le,{title:O(e.noDataText)},null)),i(we,{ref:U,renderless:!0,items:p.value},{default:w=>{var G;let{item:d,index:S,itemRef:f}=w;const Y=F(d.props,{ref:f,key:S,active:j.value&&S===0?!0:void 0,onClick:()=>h(d,null)});return((G=o.item)==null?void 0:G.call(o,{item:d,index:S,props:Y}))??i(le,F(Y,{role:"option"}),{prepend:T=>{let{isSelected:M}=T;return i(L,null,[e.multiple&&!e.hideSelected?i(Ge,{key:d.value,modelValue:M,ripple:!1,tabindex:"-1"},null):void 0,d.props.prependAvatar&&i(Ne,{image:d.props.prependAvatar},null),d.props.prependIcon&&i(ee,{icon:d.props.prependIcon},null)])},title:()=>{var T,M;return k.value?d.title:Je(d.title,(T=re(d))==null?void 0:T.title,((M=v.value)==null?void 0:M.length)??0)}})}}),(m=o["append-item"])==null?void 0:m.call(o)]}})]}),n.value.map((t,u)=>{function m(f){f.stopPropagation(),f.preventDefault(),h(t,!1)}const w={"onClick:close":m,onKeydown(f){f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),f.stopPropagation(),m(f))},onMousedown(f){f.preventDefault(),f.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},d=R.value?!!o.chip:!!o.selection,S=d?Le(R.value?o.chip({item:t,index:u,props:w}):o.selection({item:t,index:u})):void 0;if(!(d&&!S))return i("div",{key:t.value,class:["v-combobox__selection",u===s.value&&["v-combobox__selection--selected",oe.value]],style:u===s.value?ie.value:{}},[R.value?o.chip?i(Ke,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:t.title}}},{default:()=>[S]}):i(Oe,F({key:"chip",closable:e.closableChips,size:"small",text:t.title,disabled:t.props.disabled},w),null):S??i("span",{class:"v-combobox__selection-text"},[t.title,e.multiple&&u<n.value.length-1&&i("span",{class:"v-combobox__selection-comma"},[Ue(",")])])])})]),"append-inner":function(){var w;for(var t=arguments.length,u=new Array(t),m=0;m<t;m++)u[m]=arguments[m];return i(L,null,[(w=o["append-inner"])==null?void 0:w.call(o,...u),(!e.hideNoData||e.items.length)&&e.menuIcon?i(ee,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:me,onClick:Be,"aria-label":O(W.value),title:O(W.value),tabindex:"-1"},null):void 0])}})}),ze({isFocused:y,isPristine:k,menu:c,search:v,selectionIndex:s,filteredItems:E,select:h},x)}});export{nl as V};
