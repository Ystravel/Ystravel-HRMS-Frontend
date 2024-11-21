import{x as y,Y as Q,Z as X,P as h,o as T,a2 as c,aj as S,ab as v,ac as E,a3 as w,a4 as l,b0 as se,aa as x,a9 as t,K as b,c as e,a7 as J,_ as te,an as K,U as oe,ae as G,ag as ne,V as de,a8 as n,ai as m,at as u,ah as Y,a5 as re,ar as Z,a6 as q}from"./index-CwvhLw15.js";import{T as F}from"./index-BYbhMB0T.js";import{V as ue}from"./VContainer-BMqPcRAG.js";import{V as d,a as s}from"./VRow-CAz54Qec.js";import{V as ie}from"./VDivider-CtBGMpHm.js";import{V as me}from"./VForm-BxkoF5po.js";import"./VTooltip-COJdjokX.js";const H={__name:"FileUploadButton",setup(ee){const V=y(null),I=Q(),C=X(),_=y(!1),{width:j}=h(),z=T(()=>j.value>=1500),P=async g=>{const p=g.target.files[0];if(!p)return;if(!["image/jpeg","image/png"].includes(p.type)){C({text:"只能上傳 JPG、PNG、WEBP 格式的圖片",snackbarProps:{color:"error"}});return}if(p.size>2*1024*1024){C({text:"圖片大小不能超過 2MB",snackbarProps:{color:"error"}});return}const k=new FormData;k.append("image",p);try{_.value=!0,await I.updateAvatar(k),C({text:"大頭貼更新成功",snackbarProps:{color:"success"}})}catch(D){C({text:D.message||"上傳失敗",snackbarProps:{color:"error"}})}finally{_.value=!1,g.target.value=""}};return(g,p)=>(c(),S("div",null,[v("input",{ref_key:"fileInput",ref:V,type:"file",accept:"image/jpeg,image/png",style:{display:"none"},onChange:P},null,544),z.value?E((c(),w(b,{key:0,"prepend-icon":"mdi-camera-outline",color:"blue-grey-darken-2",variant:"outlined",loading:_.value,onClick:p[0]||(p[0]=k=>g.$refs.fileInput.click())},{default:l(()=>[_.value?(c(),w(se,{key:0,indeterminate:"",size:"20",width:"2",color:"teal-lighten-1",class:"me-2"})):x("",!0),p[2]||(p[2]=t(" 更換大頭貼 "))]),_:1},8,["loading"])),[[F,"檔案不超過2MB。格式僅限JPG、PNG、WEBP。","top"]]):(c(),w(b,{key:1,color:"blue-grey-darken-2",size:"24",elevation:"0",rounded:"xl",loading:_.value,onClick:p[1]||(p[1]=k=>g.$refs.fileInput.click())},{default:l(()=>[e(J,{icon:"mdi-camera-outline",size:"14"})]),_:1},8,["loading"]))]))}},fe={class:"text-h6 mb-3 opacity-90"},ce={class:"text-subtitle-2 mb-4 opacity-70"},pe={style:{"font-size":"15px","font-weight":"600"},class:"opacity-90 mb-12"},ve={key:0,class:"text-subtitle-2 opacity-80 font-weight-regular"},ye={__name:"profile",setup(ee){const{mdAndUp:V,width:I,smAndUp:C}=h(),_=T(()=>I.value>=1500),j=T(()=>o.guideLicense?"有":"無"),z=T(()=>C.value?"default":"small"),P=y(!1),g=y(""),p=y(""),k=y(!1),D=y(!1),U=y(!1),L=y(!1),f=y({currentPassword:"",newPassword:"",confirmPassword:""}),N=y(""),$=y(""),A=y(""),o=Q(),B=X(),M=i=>i?new Date(i).toLocaleDateString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"}):"",le=()=>{let i=!0;return f.value.currentPassword||(N.value="請輸入當前密碼",i=!1),f.value.newPassword?f.value.newPassword.length<8&&($.value="新密碼長度至少需要8個字元",i=!1):($.value="請輸入新密碼",i=!1),f.value.confirmPassword?f.value.newPassword!==f.value.confirmPassword&&(A.value="兩次輸入的密碼不相符",i=!1):(A.value="請確認新密碼",i=!1),i},W=async()=>{if(le())try{L.value=!0;const i=await o.changePassword(f.value.currentPassword,f.value.newPassword);B({text:i.message,snackbarProps:{color:"teal-lighten-1"}}),O()}catch(i){B({text:i.message,snackbarProps:{color:"red-lighten-1"}})}finally{L.value=!1}},O=()=>{U.value=!1,f.value={currentPassword:"",newPassword:"",confirmPassword:""},N.value="",$.value="",A.value=""},ae=async()=>{if(!g.value){p.value="請輸入密碼";return}try{D.value=!0;const i=await fetch("https://ystravel-hrms-backend.onrender.com/user/reveal-cowell",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o.token}`},body:JSON.stringify({password:g.value})}),a=await i.json();if(!i.ok){B({text:a.message||"驗證失敗，請稍後重試",snackbarProps:{color:"red-lighten-1"}});return}k.value=!0,o.cowellAccount=a.result.cowellAccount,o.cowellPassword=a.result.cowellPassword,B({text:"密碼驗證成功，科威帳號與密碼已解鎖",snackbarProps:{color:"teal-lighten-1"}}),R()}catch(i){console.error("驗證科威密碼錯誤:",i),B({text:"驗證失敗，請稍後重試",snackbarProps:{color:"red-lighten-1"}})}finally{D.value=!1}},R=()=>{P.value=!1,g.value="",p.value=""};return(i,a)=>(c(),S(oe,null,[e(ue,{"max-width":"2200"},{default:l(()=>[e(d,null,{default:l(()=>[_.value?(c(),w(s,{key:0,md:"3"},{default:l(()=>[e(d,{class:"elevation-4 rounded-xl pt-8 pb-10 px-1 px-sm-10 mt-2 mt-sm-10 mx-10 bg-white"},{default:l(()=>[e(G,{width:"100%",elevation:"0"},{default:l(()=>[e(d,{class:"text-center"},{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(ne,{size:"100"},{default:l(()=>[e(de,{src:n(o).avatar},null,8,["src"])]),_:1})]),_:1}),e(s,null,{default:l(()=>[v("div",fe,m(n(o).name),1),v("div",ce,[E((c(),S("span",null,[t(m(n(o).userId),1)])),[[F,"員工編號","end"]])]),v("div",pe,m(n(o).jobTitle),1),e(H)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):x("",!0),e(s,{xl:"9"},{default:l(()=>[e(d,{class:"elevation-4 rounded-xl pt-8 pb-6 px-1 px-sm-10 mt-2 mt-sm-10 mx-0 mx-sm-4 ms-xl-0 me-xl-10 mb-4 bg-white"},{default:l(()=>[e(s,{cols:"12",class:"d-flex justify-space-between"},{default:l(()=>[v("h3",null,[a[14]||(a[14]=t(" 個人資料管理   ")),n(V)?(c(),S("span",ve,a[13]||(a[13]=[v("span",{class:"text-red-darken-2"},"* ",-1),t("若有需要修改 請聯絡人資 ( 密碼可自行修改 )")]))):x("",!0)]),v("div",null,[e(d,null,{default:l(()=>[e(s,null,{default:l(()=>[n(V)?(c(),w(b,{key:0,color:"blue-grey-darken-2","prepend-icon":"mdi-pencil",variant:"outlined",height:"36",onClick:a[0]||(a[0]=r=>U.value=!0)},{default:l(()=>a[15]||(a[15]=[t(" 修改密碼 ")])),_:1})):x("",!0)]),_:1}),n(V)?x("",!0):(c(),w(s,{key:0},{default:l(()=>[e(b,{color:"blue-grey-darken-2","prepend-icon":"mdi-pencil",variant:"outlined",size:"small",height:"32",onClick:a[1]||(a[1]=r=>U.value=!0)},{default:l(()=>a[16]||(a[16]=[t(" 修改密碼 ")])),_:1})]),_:1})),_.value?x("",!0):(c(),w(s,{key:1,class:"d-flex align-center"},{default:l(()=>[e(H),E((c(),w(b,{icon:"",color:"blue-grey-darken-2",size:"24",elevation:"0",style:{"margin-top":"1px"},class:"ms-4",onClick:a[2]||(a[2]=r=>P.value=!0)},{default:l(()=>[e(J,{icon:"mdi-eye-outline",size:"14"})]),_:1})),[[F,"查看科威帳號密碼","top"]])]),_:1})),_.value?(c(),w(s,{key:2,class:"d-flex align-center"},{default:l(()=>[E((c(),w(b,{icon:"",color:"blue-grey-darken-2",size:"24",elevation:"0",style:{"margin-top":"1px"},onClick:a[3]||(a[3]=r=>P.value=!0)},{default:l(()=>[e(J,{icon:"mdi-eye-outline",size:"14"})]),_:1})),[[F,"查看科威帳號密碼","top"]])]),_:1})):x("",!0)]),_:1})])]),_:1}),n(V)?x("",!0):(c(),w(s,{key:0,cols:"12"},{default:l(()=>a[17]||(a[17]=[v("span",{class:"text-subtitle-2 opacity-80 font-weight-regular"},[v("span",{class:"text-red-darken-2"},"* "),t("若有需要修改 請聯絡人資 ( 密碼可自行修改 )")],-1)])),_:1})),e(s,null,{default:l(()=>[e(ie)]),_:1}),e(s,{cols:"12",class:"mt-3 mb-6 text-center text-blue-grey-darken-3"},{default:l(()=>a[18]||(a[18]=[v("div",{class:"profile-subtitle"}," 《 基本資料 》 ",-1)])),_:1}),e(s,{cols:"12"},{default:l(()=>[e(d,{class:"text-blue-grey-darken-3"},{default:l(()=>[e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[19]||(a[19]=[t(" 姓名 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).name),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[20]||(a[20]=[t(" 英文名 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).englishName),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[21]||(a[21]=[t(" 生日 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(M(n(o).birthDate)),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[22]||(a[22]=[t(" 性別 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).gender),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[23]||(a[23]=[t(" 手機號碼 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).cellphone),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",md:"6",lg:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[24]||(a[24]=[t(" 戶籍地址 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:"",class:"address-style"},{default:l(()=>[t(m(n(o).permanentAddress),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",md:"6",lg:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[25]||(a[25]=[t(" 聯絡地址 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:"",class:"address-style"},{default:l(()=>[t(m(n(o).contactAddress),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0 pe-0"},{default:l(()=>a[26]||(a[26]=[t(" 緊急聯絡人 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).emergencyName),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[27]||(a[27]=[t(" 緊急連絡人電話 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).emergencyCellphone),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{cols:"12",class:"mt-3 mb-6 text-center text-blue-grey-darken-3"},{default:l(()=>a[28]||(a[28]=[v("div",{class:"profile-subtitle"}," 《 任職資料 》 ",-1)])),_:1}),e(s,{cols:"12"}),e(d,{class:"text-blue-grey-darken-3"},{default:l(()=>[e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[29]||(a[29]=[t(" 公司 Email : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).email),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[30]||(a[30]=[t(" 所屬公司 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>{var r;return[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:"",value:((r=n(o).company)==null?void 0:r.name)||""},null,8,["value"])]}),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[31]||(a[31]=[t(" 部門 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>{var r;return[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:"",value:((r=n(o).department)==null?void 0:r.name)||""},null,8,["value"])]}),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[32]||(a[32]=[t(" 入職日期 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(M(n(o).hireDate)),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[33]||(a[33]=[t(" 科威帳號 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:"",value:k.value?n(o).cowellAccount:"******"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[34]||(a[34]=[t(" 科威密碼 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:"",value:k.value?n(o).cowellPassword:"******"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[35]||(a[35]=[t(" 分機號碼 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).extNumber),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[36]||(a[36]=[t(" 列印編號 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:""},{default:l(()=>[t(m(n(o).printNumber),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"py-0 mb-6",cols:"12",sm:"6",md:"4"},{default:l(()=>[e(d,null,{default:l(()=>[e(s,{cols:"3",sm:"12",class:"align-self-center py-0"},{default:l(()=>a[37]||(a[37]=[t(" 領隊證 : ")])),_:1}),e(s,{cols:"9",sm:"12"},{default:l(()=>[e(u,{variant:"outlined",density:"compact","hide-details":"",readonly:"",value:j.value},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(K,{modelValue:U.value,"onUpdate:modelValue":a[10]||(a[10]=r=>U.value=r),"max-width":"360"},{default:l(()=>[e(G,null,{default:l(()=>[a[40]||(a[40]=v("div",{class:"card-title ps-6 py-6"}," 修改密碼 ",-1)),e(Y,{class:"pb-0"},{default:l(()=>[e(me,{onSubmit:re(W,["prevent"])},{default:l(()=>[e(u,{modelValue:f.value.currentPassword,"onUpdate:modelValue":[a[4]||(a[4]=r=>f.value.currentPassword=r),a[5]||(a[5]=r=>N.value="")],"error-messages":N.value,label:"當前密碼",type:"password",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue","error-messages"]),e(u,{modelValue:f.value.newPassword,"onUpdate:modelValue":[a[6]||(a[6]=r=>f.value.newPassword=r),a[7]||(a[7]=r=>$.value="")],"error-messages":$.value,label:"新密碼",type:"password",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue","error-messages"]),e(u,{modelValue:f.value.confirmPassword,"onUpdate:modelValue":[a[8]||(a[8]=r=>f.value.confirmPassword=r),a[9]||(a[9]=r=>A.value="")],"error-messages":A.value,label:"確認新密碼",type:"password",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(Z,{class:"me-4 mb-3"},{default:l(()=>[e(q),e(b,{color:"grey-darken-1",variant:"outlined",size:z.value,onClick:O},{default:l(()=>a[38]||(a[38]=[t(" 取消 ")])),_:1},8,["size"]),e(b,{color:"red-darken-1",variant:"outlined",size:z.value,loading:L.value,onClick:W},{default:l(()=>a[39]||(a[39]=[t(" 確認修改 ")])),_:1},8,["size","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(K,{modelValue:P.value,"onUpdate:modelValue":a[12]||(a[12]=r=>P.value=r),"max-width":"360"},{default:l(()=>[e(G,null,{default:l(()=>[a[43]||(a[43]=v("div",{class:"card-title ps-6 pt-6 pb-4"}," 輸入密碼 ",-1)),a[44]||(a[44]=v("div",{class:"ps-6 pb-2",style:{"font-size":"15px"}}," 查看科威帳號與密碼 ",-1)),e(Y,{class:"pb-0"},{default:l(()=>[e(u,{modelValue:g.value,"onUpdate:modelValue":a[11]||(a[11]=r=>g.value=r),label:"輸入密碼",type:"password",variant:"outlined",density:"compact",class:"mb-4"},null,8,["modelValue"])]),_:1}),e(Z,{class:"me-4 mb-3"},{default:l(()=>[e(q),e(b,{color:"grey-darken-1",variant:"outlined",size:z.value,onClick:R},{default:l(()=>a[41]||(a[41]=[t(" 取消 ")])),_:1},8,["size"]),e(b,{color:"red-darken-1",variant:"outlined",size:z.value,loading:D.value,onClick:ae},{default:l(()=>a[42]||(a[42]=[t(" 確認 ")])),_:1},8,["size","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},Ve=te(ye,[["__scopeId","data-v-96cd42f6"]]);export{Ve as default};
