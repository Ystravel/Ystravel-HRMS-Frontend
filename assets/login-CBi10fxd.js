import{a0 as L,a1 as $,a2 as z,x as k,A as N,X as R,ao as T,c as a,a8 as s,a7 as A,ae as y,a3 as D,a5 as K,a6 as V,ac as o,a9 as X,V as H,aA as w,ad as f,K as _,a_ as J,ab as O,ay as Q}from"./index-CKxVcWW0.js";import{_ as W}from"./logo_horizontal-XUxLdibV.js";import{c as Y,a as h,u as Z,b as C}from"./index.esm-Ti_xy5K_.js";import{V as ee}from"./VContainer-Cz58CMdO.js";import{V as ae}from"./VForm-CelHDawG.js";import{V as P,a as l}from"./VRow-GUaNSdEp.js";import{V as se}from"./VCheckbox-g3eGR-5j.js";import{V as S}from"./VDivider-D2C35Q8H.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VCheckboxBtn-B7hfR8P8.js";const I={},oe={key:0,id:"background",class:"d-flex justify-center align-center"},le="890205288379-2bm447qt1rj7jkooc7luqej83if9inp4.apps.googleusercontent.com",j={__name:"login",setup(te){const c=D(),v=$(),r=z(),d=k(!0),u=k(!1),m=k(!1),E=Y({email:h().required("請輸入email").email("請輸入正確email格式"),password:h().required("請輸入密碼")}),{handleSubmit:M,isSubmitting:i}=Z({validationSchema:E}),p=C("email"),b=C("password"),U=async t=>{try{if(i.value=!0,!t.code)throw new Error("未收到 Google 授權碼");const e=await v.googleLogin(t.code);e==="登入成功"?(r({text:"登入成功",snackbarProps:{color:"teal-lighten-1"}}),c.push("/")):r({text:e,snackbarProps:{color:"red-lighten-1"}})}catch(e){console.error("Google 登入錯誤:",e),e.response&&e.response.data&&e.response.data.message==="您是初次登入，請使用初始密碼登入"?r({text:"您是初次登入，請使用初始密碼登入",snackbarProps:{color:"red-lighten-1"}}):r({text:"Google 登入失敗，請稍後再試",snackbarProps:{color:"red-lighten-1"}})}finally{i.value=!1}},q=M(async t=>{m.value?localStorage.setItem("savedEmail",t.email):localStorage.removeItem("savedEmail");const e=await v.login(t);e==="登入成功"?(r({text:e,snackbarProps:{color:"teal-lighten-1"}}),c.push("/")):e==="首次登入,請修改密碼"?c.push("/first-time-login"):r({text:e,snackbarProps:{color:"red-lighten-1"}})});return N(async()=>{const t=localStorage.getItem("savedEmail");t&&(p.value.value=t,m.value=!0);const e=new URLSearchParams(window.location.search),g=e.get("token"),n=e.get("email"),B=e.get("avatar"),F=e.get("name"),G=parseInt(e.get("role"),10),x=e.get("message");if(x){r({text:x,snackbarProps:{color:"red-lighten-1"}}),d.value=!1;return}g&&(v.$patch({token:g,email:n,avatar:B,name:F,role:G}),await R(),r({text:"登入成功",snackbarProps:{color:"teal-lighten-1"}}),c.push("/")),d.value=!1}),(t,e)=>{const g=K("router-link");return d.value?y("",!0):(V(),T("div",oe,[a(ee,{width:"380",height:"510",class:"login-wrapper mx-2 mx-sm-0"},{default:s(()=>[a(ae,{disabled:o(i),onSubmit:X(o(q),["prevent"])},{default:s(()=>[a(P,{class:"px-4"},{default:s(()=>[a(l,{cols:"12",class:"pt-9 pb-6 pe-8 d-flex justify-center"},{default:s(()=>[a(H,{src:W,"max-width":"200"})]),_:1}),a(l,{cols:"12"},{default:s(()=>[a(w,{modelValue:o(p).value.value,"onUpdate:modelValue":e[0]||(e[0]=n=>o(p).value.value=n),"error-messages":o(p).errorMessage.value,label:"email",density:"compact",variant:"underlined",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(l,{cols:"12",class:"pb-1"},{default:s(()=>[a(w,{modelValue:o(b).value.value,"onUpdate:modelValue":e[1]||(e[1]=n=>o(b).value.value=n),"error-messages":o(b).errorMessage.value,type:u.value?"text":"password","append-inner-icon":u.value?"mdi-eye-off":"mdi-eye",label:"password",density:"compact",variant:"underlined","onClick:appendInner":e[2]||(e[2]=n=>u.value=!u.value)},null,8,["modelValue","error-messages","type","append-inner-icon"])]),_:1}),a(l,{cols:"12",class:"ps-2 pe-4 py-0 d-flex justify-space-between align-center"},{default:s(()=>[a(se,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=n=>m.value=n),label:"記住我","hide-details":"",density:"compact",color:"grey-darken-2",class:"text-caption"},null,8,["modelValue"]),a(g,{class:"text-caption text-blue-grey-darken-2",to:"./forgotPassword"},{default:s(()=>e[4]||(e[4]=[f(" 忘記密碼？ ")])),_:1})]),_:1}),a(l,{cols:"12",class:"text-center"},{default:s(()=>[a(_,{block:"",elevation:"2",color:"blue-grey-darken-2",type:"submit",loading:o(i),disabled:o(i)},{default:s(()=>e[5]||(e[5]=[f(" Login ")])),_:1},8,["loading","disabled"])]),_:1}),a(l,{cols:"12",class:"py-0 ps-2"}),a(l,null,{default:s(()=>[a(P,null,{default:s(()=>[a(l,{cols:"5"},{default:s(()=>[a(S,{class:"my-4"})]),_:1}),a(l,{cols:"2",class:"d-flex align-center justify-center pa-0",style:{"letter-spacing":"2px","font-size":"15px",opacity:"60%"}},{default:s(()=>e[6]||(e[6]=[f(" 或使用 ")])),_:1}),a(l,{cols:"5"},{default:s(()=>[a(S,{class:"my-4"})]),_:1})]),_:1})]),_:1}),a(l,{cols:"12",class:"text-center"},{default:s(()=>[a(o(J),{callback:U,"client-id":le,prompt:"",class:"w-100"},{default:s(()=>[a(_,{block:"",elevation:"2",color:"cyan-darken-3",loading:o(i),disabled:o(i)},{default:s(()=>[a(O,{icon:"mdi-google-plus",size:"24",class:"me-2"}),e[7]||(e[7]=f("Google 登入 "))]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1}),d.value?(V(),A(Q,{key:0,indeterminate:"",size:"64",color:"primary",class:"center-screen"})):y("",!0)]))}}};typeof I=="function"&&I(j);const ve=L(j,[["__scopeId","data-v-9dc917c4"]]);export{ve as default};
