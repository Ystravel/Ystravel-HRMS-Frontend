import{a0 as L,a1 as $,a2 as z,x as b,A as N,X as R,ao as T,c as a,a8 as s,a7 as A,ae as y,a3 as X,a5 as D,a6 as V,ac as t,a9 as K,V as H,aA as w,ad as f,K as _,aX as J,ab as O,ay as Q}from"./index-CDGlHwuR.js";import{_ as W}from"./logo_horizontal-BK2T4LU0.js";import{c as Y,a as h,u as Z,b as C}from"./index.esm-BElVrIHK.js";import{V as ee}from"./VContainer-PrWo7SB4.js";import{V as ae}from"./VForm-Bf7GBivV.js";import{V as P,a as o}from"./VRow-c2sxsQB6.js";import{V as se}from"./VCheckbox-DWL6uKCI.js";import{V as S}from"./VDivider-BWazCLQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VCheckboxBtn-D4-rOcoU.js";const I={},oe={key:0,id:"background",class:"d-flex justify-center align-center"},te="890205288379-2bm447qt1rj7jkooc7luqej83if9inp4.apps.googleusercontent.com",j={__name:"login",setup(le){const i=X(),g=$(),r=z(),c=b(!0),d=b(!1),u=b(!1),E=Y({email:h().required("請輸入email").email("請輸入正確email格式"),password:h().required("請輸入密碼")}),{handleSubmit:M,isSubmitting:k}=Z({validationSchema:E}),m=C("email"),v=C("password"),U=async l=>{try{if(!l.code)throw new Error("未收到 Google 授權碼");const e=await g.googleLogin(l.code);e==="登入成功"?(r({text:"登入成功",snackbarProps:{color:"teal-lighten-1"}}),i.push("/profile")):r({text:e,snackbarProps:{color:"red-lighten-1"}})}catch(e){console.error("Google 登入錯誤:",e),e.response&&e.response.data&&e.response.data.message==="您是初次登入，請使用初始密碼登入"?r({text:"您是初次登入，請使用初始密碼登入",snackbarProps:{color:"red-lighten-1"}}):r({text:"Google 登入失敗，請稍後再試",snackbarProps:{color:"red-lighten-1"}})}},q=M(async l=>{u.value?localStorage.setItem("savedEmail",l.email):localStorage.removeItem("savedEmail");const e=await g.login(l);e==="登入成功"?(r({text:e,snackbarProps:{color:"teal-lighten-1"}}),i.push("/profile")):e==="首次登入,請修改密碼"?i.push("/first-time-login"):r({text:e,snackbarProps:{color:"red-lighten-1"}})});return N(async()=>{const l=localStorage.getItem("savedEmail");l&&(m.value.value=l,u.value=!0);const e=new URLSearchParams(window.location.search),p=e.get("token"),n=e.get("email"),B=e.get("avatar"),F=e.get("name"),G=parseInt(e.get("role"),10),x=e.get("message");if(x){r({text:x,snackbarProps:{color:"red-lighten-1"}}),c.value=!1;return}p&&(g.$patch({token:p,email:n,avatar:B,name:F,role:G}),await R(),r({text:"登入成功",snackbarProps:{color:"teal-lighten-1"}}),i.push("/")),c.value=!1}),(l,e)=>{const p=D("router-link");return c.value?y("",!0):(V(),T("div",oe,[a(ee,{width:"380",height:"510",class:"login-wrapper mx-2 mx-sm-0"},{default:s(()=>[a(ae,{disabled:t(k),onSubmit:K(t(q),["prevent"])},{default:s(()=>[a(P,{class:"px-4"},{default:s(()=>[a(o,{cols:"12",class:"pt-9 pb-6 pe-8 d-flex justify-center"},{default:s(()=>[a(H,{src:W,"max-width":"200"})]),_:1}),a(o,{cols:"12"},{default:s(()=>[a(w,{modelValue:t(m).value.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t(m).value.value=n),"error-messages":t(m).errorMessage.value,label:"email",density:"compact",variant:"underlined",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),a(o,{cols:"12",class:"pb-1"},{default:s(()=>[a(w,{modelValue:t(v).value.value,"onUpdate:modelValue":e[1]||(e[1]=n=>t(v).value.value=n),"error-messages":t(v).errorMessage.value,type:d.value?"text":"password","append-inner-icon":d.value?"mdi-eye-off":"mdi-eye",label:"password",density:"compact",variant:"underlined","onClick:appendInner":e[2]||(e[2]=n=>d.value=!d.value)},null,8,["modelValue","error-messages","type","append-inner-icon"])]),_:1}),a(o,{cols:"12",class:"ps-2 pe-4 py-0 d-flex justify-space-between align-center"},{default:s(()=>[a(se,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=n=>u.value=n),label:"記住我","hide-details":"",density:"compact",color:"grey-darken-2",class:"text-caption"},null,8,["modelValue"]),a(p,{class:"text-caption text-blue-grey-darken-2",to:"./forgotPassword"},{default:s(()=>e[4]||(e[4]=[f(" 忘記密碼？ ")])),_:1})]),_:1}),a(o,{cols:"12",class:"text-center"},{default:s(()=>[a(_,{block:"",elevation:"2",color:"blue-grey-darken-2",type:"submit",loading:t(k)},{default:s(()=>e[5]||(e[5]=[f(" Login ")])),_:1},8,["loading"])]),_:1}),a(o,{cols:"12",class:"py-0 ps-2"}),a(o,null,{default:s(()=>[a(P,null,{default:s(()=>[a(o,{cols:"5"},{default:s(()=>[a(S,{class:"my-4"})]),_:1}),a(o,{cols:"2",class:"d-flex align-center justify-center pa-0",style:{"letter-spacing":"2px","font-size":"15px",opacity:"60%"}},{default:s(()=>e[6]||(e[6]=[f(" 或使用 ")])),_:1}),a(o,{cols:"5"},{default:s(()=>[a(S,{class:"my-4"})]),_:1})]),_:1})]),_:1}),a(o,{cols:"12",class:"text-center"},{default:s(()=>[a(t(J),{callback:U,"client-id":te,prompt:"",class:"w-100"},{default:s(()=>[a(_,{block:"",elevation:"2",color:"cyan-darken-3"},{default:s(()=>[a(O,{icon:"mdi-google-plus",size:"24",class:"me-2"}),e[7]||(e[7]=f("Google 登入 "))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1}),c.value?(V(),A(Q,{key:0,indeterminate:"",size:"64",color:"primary",class:"center-screen"})):y("",!0)]))}}};typeof I=="function"&&I(j);const ve=L(j,[["__scopeId","data-v-f9e92e40"]]);export{ve as default};
