import{a0 as Ge,x as p,a2 as Je,P as el,o as z,a$ as xl,z as ye,a5 as ll,a6 as b,a7 as U,a8 as a,c as e,a9 as al,ac as l,ai as He,af as ie,ab as me,ad as V,am as ve,ay as tl,ae as x,aA as m,H as Le,aC as sl,aa as rl,K as j,aD as ul,aE as ol,A as Dl,ak as kl,ag as Qe,an as Y,ao as _e,ax as Ul,aj as wl,X as Cl}from"./index-CDGlHwuR.js";import{c as nl,a as i,d as he,u as dl,b as d,e as Xe}from"./index.esm-BElVrIHK.js";import{l as Nl}from"./lodash-DHyxJ22h.js";import{C as Al}from"./ConfirmDeleteDialogWithTextField-DSz3CB-n.js";import{V as il}from"./VForm-Bf7GBivV.js";import{V as k,a as o}from"./VRow-c2sxsQB6.js";import{V as G}from"./VDivider-BWazCLQ0.js";import{a as _}from"./VPagination-CDeKvYwQ.js";import{V as ml}from"./VTooltip-DN4CBF_q.js";import{V as Ml}from"./VContainer-PrWo7SB4.js";import{V as Sl}from"./VDataTableServer-DGJes_T6.js";import{V as Il}from"./VHover-DQKbdFnp.js";import{T as Ye}from"./index-BENQjCqP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VList-DQb7xxY0.js";import"./VCheckboxBtn-D4-rOcoU.js";const Tl={class:"card-title ps-4 py-3 d-flex align-center text-blue-grey-darken-1"},Pl={__name:"TransferDialog",props:{tempUser:{type:Object,required:!0,default:null}},emits:["transferred"],setup(We,{expose:W,emit:O}){const Ve=We,Be=O,J=p(!1),{apiAuth:h}=ol(),M=Je(),{smAndUp:$,mdAndUp:$e,lgAndUp:qe,xlAndUp:ee}=el(),B=p(!1),le=p([]),xe=z(()=>$.value?"default":"small"),pe=z(()=>$.value?64:48),ce=p(Object.entries(xl).map(([v,u])=>({value:Number(v),title:u}))),De=()=>{S.value.value&&(K.value.value=S.value.value)},Re=z(()=>ee.value?"1200":qe.value?"900":$e.value?"800":$.value?"600":"100%"),ge=nl({email:i().required("請輸入email").email("請輸入正確的 email 格式"),personalEmail:i().email("請輸入正確的 email 格式"),name:i().required("請輸入姓名"),englishName:i().required("請輸入英文名"),gender:i().required("請選擇性別"),IDNumber:i().matches(/^[A-Za-z][12]\d{8}$/,"身分證號碼格式錯誤").required("請輸入身分證號碼"),permanentAddress:i().required("請輸入戶籍地址"),contactAddress:i().required("請輸入聯絡地址"),birthDate:he().nullable().required("請選擇生日"),company:i().nullable().required("請選擇公司"),department:i().required("請選擇部門"),cellphone:i().min(10,"手機號碼需為10位數字").max(10,"手機號碼勿超過10位數字").required("請輸入手機號碼"),salary:i(),role:i().required("請選擇權限"),extNumber:i().required("請輸入分機號碼"),printNumber:i().required("請輸入列印編號"),jobTitle:i().required("請輸入職稱"),hireDate:he().nullable().required("請選擇入職日期"),emergencyName:i().required("請輸入緊急聯絡人姓名"),emergencyCellphone:i().required("請輸入緊急聯絡人連絡電話"),emergencyRelationship:i(),cowellAccount:i().required("請輸入Cowell帳號"),cowellPassword:i().required("請輸入Cowell密碼"),note:i()}),{handleSubmit:Fe,isSubmitting:Ee,resetForm:R}=dl({validationSchema:ge,initialValues:{email:"",personalEmail:"",name:"",englishName:"",gender:"",IDNumber:"",permanentAddress:"",contactAddress:"",birthDate:null,company:"",department:"",cellphone:"",salary:"",extNumber:"",printNumber:"",jobTitle:"",role:0,employmentStatus:"在職",hireDate:new Date,resignationDate:null,emergencyName:"",emergencyCellphone:"",emergencyRelationship:"",note:"",userId:"",cowellAccount:"",cowellPassword:""},validateOnMount:!1,validateOnChange:!0,validateOnBlur:!0,validateOnInput:!1}),ke=d("name"),q=d("englishName"),ae=d("email"),Ue=d("personalEmail"),fe=d("IDNumber"),we=d("gender"),Ce=d("cellphone"),c=d("birthDate"),S=d("permanentAddress"),K=d("contactAddress"),w=d("emergencyName"),N=d("emergencyCellphone"),Ne=d("emergencyRelationship"),te=d("company"),se=d("department"),C=d("jobTitle"),D=d("salary"),Ae=d("role"),Me=d("extNumber"),re=d("hireDate"),be=d("printNumber"),I=d("cowellAccount"),F=d("cowellPassword"),Z=d("note"),T=p(null),P=p([]),ue=z(()=>[...le.value].sort((v,u)=>{const g=v.companyId||"",n=u.companyId||"";return g.localeCompare(n)}).map(v=>({title:v.name,value:v._id}))),E=p(!1),A=p(!1),Q=[{title:"男性",value:"男性"},{title:"女性",value:"女性"}],oe=async v=>{B.value=!0,J.value=!0;try{const{data:u}=await h.get("/company/all");u.success&&(le.value=u.result);const{data:g}=await h.get(`/tempUser/${v._id}/formatted-for-transfer`);g.success&&(g.result.company&&(T.value=g.result.company,await H(g.result.company),se.value.value=g.result.department),R({values:{...g.result,personalEmail:g.result.personalEmail||"",company:g.result.company||"",department:g.result.department||"",hireDate:g.result.hireDate||null,birthDate:g.result.birthDate?new Date(g.result.birthDate):null}}))}catch(u){console.error("獲取格式化數據失敗:",u),M({text:"獲取員工數據失敗",snackbarProps:{color:"error"}})}finally{setTimeout(()=>{B.value=!1},300)}},H=async v=>{try{if(!v){P.value=[];return}const{data:u}=await h.get("/department/all",{params:{companyId:v,itemsPerPage:100}});u.success&&(P.value=u.result.data||[],te.value.value=v)}catch(u){console.error("載入部門失敗:",u),M({text:"載入部門資料失敗",snackbarProps:{color:"error"}}),P.value=[]}},ne=Fe(async v=>{var u,g;try{const{data:n}=await h.post("/user",v);n.success&&(await h.patch(`/tempUser/${Ve.tempUser._id}/update-after-transfer/${n.result._id}`),Be("transferred",n.result),J.value=!1,M({text:"轉換成功",snackbarProps:{color:"success"}}))}catch(n){console.error("轉換失敗:",n),M({text:((g=(u=n==null?void 0:n.response)==null?void 0:u.data)==null?void 0:g.message)||"轉換失敗",snackbarProps:{color:"error"}})}}),X=()=>{J.value=!1,R(),B.value=!1};return W({openTransferDialog:oe}),ye(T,async v=>{v?(te.value.value=v,await H(v)):(te.value.value=null,se.value.value=null,P.value=[])}),ye(()=>te.value.value,v=>{v&&(T.value=v)}),(v,u)=>{const g=ll("v-date-input");return b(),U(ul,{modelValue:J.value,"onUpdate:modelValue":u[26]||(u[26]=n=>J.value=n),persistent:"",width:Re.value},{default:a(()=>[e(il,{ref:"transferForm",onSubmit:al(l(ne),["prevent"])},{default:a(()=>[e(He,{class:"rounded-lg px-4 py-6"},{default:a(()=>[ie("div",Tl,[e(me,{icon:"mdi-account-convert",size:"18",class:"me-3"}),u[27]||(u[27]=V("轉為正式員工 "))]),e(k,{class:"py-4"},{default:a(()=>[e(o,{cols:"4",md:"5",class:"d-flex align-center ps-6"},{default:a(()=>[e(G)]),_:1}),e(o,{cols:"4",md:"2",class:"info-title px-0 text-blue-grey-darken-2"},{default:a(()=>u[28]||(u[28]=[V(" 基本資料 ")])),_:1}),e(o,{cols:"4",md:"5",class:"d-flex align-center pe-6"},{default:a(()=>[e(G)]),_:1})]),_:1}),B.value?(b(),U(ve,{key:0,class:"d-flex justify-center align-center",style:{height:"600px"}},{default:a(()=>[e(tl,{indeterminate:"",color:"blue-grey-darken-2",size:pe.value},null,8,["size"])]),_:1})):x("",!0),B.value?x("",!0):(b(),U(ve,{key:1,class:"mt-3 pa-3"},{default:a(()=>[e(k,null,{default:a(()=>[e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(ke).value.value,"onUpdate:modelValue":u[0]||(u[0]=n=>l(ke).value.value=n),"error-messages":l(ke).errorMessage.value,label:"*姓名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(q).value.value,"onUpdate:modelValue":u[1]||(u[1]=n=>l(q).value.value=n),"error-messages":l(q).errorMessage.value,label:"*英文名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(fe).value.value,"onUpdate:modelValue":u[2]||(u[2]=n=>l(fe).value.value=n),"error-messages":l(fe).errorMessage.value,label:"*身分證號碼",maxlength:"10",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(g,{modelValue:l(c).value.value,"onUpdate:modelValue":u[3]||(u[3]=n=>l(c).value.value=n),"error-messages":l(c).errorMessage.value,label:"*生日","prepend-icon":"",variant:"outlined",density:"compact",clearable:"","cancel-text":"取消","ok-text":"確認"},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(_,{modelValue:l(we).value.value,"onUpdate:modelValue":u[4]||(u[4]=n=>l(we).value.value=n),items:Q,"error-messages":l(we).errorMessage.value,label:"*性別",variant:"outlined",density:"compact"},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Ce).value.value,"onUpdate:modelValue":u[5]||(u[5]=n=>l(Ce).value.value=n),"error-messages":l(Ce).errorMessage.value,label:"*手機號碼",maxlength:"10",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Ue).value.value,"onUpdate:modelValue":u[6]||(u[6]=n=>l(Ue).value.value=n),"error-messages":l(Ue).errorMessage.value,label:"個人Email",type:"email",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(S).value.value,"onUpdate:modelValue":u[7]||(u[7]=n=>l(S).value.value=n),"error-messages":l(S).errorMessage.value,label:"*戶籍地址",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(K).value.value,"onUpdate:modelValue":u[8]||(u[8]=n=>l(K).value.value=n),"error-messages":l(K).errorMessage.value,label:"*聯絡地址",type:"text",variant:"outlined",density:"compact",clearable:""},{"append-inner":a(()=>[e(ml,{location:"top","close-delay":"200"},{activator:a(({cprops:n})=>[e(me,Le(n,{icon:"mdi-content-copy",onClick:De}),null,16)]),default:a(()=>[u[29]||(u[29]=V(" 複製戶籍地址 "))]),_:1})]),_:1},8,["modelValue","error-messages"])]),_:1}),l($e)&&!l(qe)?(b(),U(o,{key:0,cols:"6"})):x("",!0),e(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(w).value.value,"onUpdate:modelValue":u[9]||(u[9]=n=>l(w).value.value=n),"error-messages":l(w).errorMessage.value,label:"*緊急聯絡人姓名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(N).value.value,"onUpdate:modelValue":u[10]||(u[10]=n=>l(N).value.value=n),"error-messages":l(N).errorMessage.value,label:"*緊急聯絡人電話",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Ne).value.value,"onUpdate:modelValue":u[11]||(u[11]=n=>l(Ne).value.value=n),"error-messages":l(Ne).errorMessage.value,label:"緊急聯絡人關係",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1})),B.value?x("",!0):(b(),U(k,{key:2,class:"py-4"},{default:a(()=>[e(o,{cols:"3",md:"4",class:"d-flex align-center ps-6"},{default:a(()=>[e(G)]),_:1}),e(o,{cols:"6",md:"4",class:"info-title text-blue-grey-darken-2"},{default:a(()=>u[30]||(u[30]=[V(" 任職資訊 ")])),_:1}),e(o,{cols:"3",md:"4",class:"d-flex align-center pe-6"},{default:a(()=>[e(G)]),_:1})]),_:1})),B.value?x("",!0):(b(),U(ve,{key:3,class:"mt-3 pa-3"},{default:a(()=>[e(k,null,{default:a(()=>[e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(_,{modelValue:T.value,"onUpdate:modelValue":[u[12]||(u[12]=n=>T.value=n),H],"error-messages":l(te).errorMessage.value,items:ue.value,label:"*所屬公司","item-title":"title","item-value":"value",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages","items"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(_,{modelValue:l(se).value.value,"onUpdate:modelValue":u[13]||(u[13]=n=>l(se).value.value=n),items:P.value,"error-messages":l(se).errorMessage.value,"item-title":"name","item-value":"_id",label:"*選擇部門",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","items","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(C).value.value,"onUpdate:modelValue":u[14]||(u[14]=n=>l(C).value.value=n),"error-messages":l(C).errorMessage.value,label:"*職稱",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(D).value.value,"onUpdate:modelValue":u[15]||(u[15]=n=>l(D).value.value=n),"error-messages":l(D).errorMessage.value,label:"基本薪資",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(_,{modelValue:l(Ae).value.value,"onUpdate:modelValue":u[16]||(u[16]=n=>l(Ae).value.value=n),"error-messages":l(Ae).errorMessage.value,items:ce.value,"item-title":"title","item-value":"value",label:"*權限",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages","items"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(g,{modelValue:l(re).value.value,"onUpdate:modelValue":u[17]||(u[17]=n=>l(re).value.value=n),"error-messages":l(re).errorMessage.value,label:"*入職日期","prepend-icon":"",variant:"outlined",density:"compact",clearable:"","cancel-text":"取消","ok-text":"確認"},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Me).value.value,"onUpdate:modelValue":u[18]||(u[18]=n=>l(Me).value.value=n),"error-messages":l(Me).errorMessage.value,label:"*分機號碼",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(be).value.value,"onUpdate:modelValue":u[19]||(u[19]=n=>l(be).value.value=n),"error-messages":l(be).errorMessage.value,label:"*列印編號",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(I).value.value,"onUpdate:modelValue":u[20]||(u[20]=n=>l(I).value.value=n),"error-messages":l(I).errorMessage.value,label:"*科威帳號",type:E.value?"text":"password","append-inner-icon":E.value?"mdi-eye-off":"mdi-eye",variant:"outlined",density:"compact",clearable:"","onClick:appendInner":u[21]||(u[21]=n=>E.value=!E.value)},null,8,["modelValue","error-messages","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(F).value.value,"onUpdate:modelValue":u[22]||(u[22]=n=>l(F).value.value=n),"error-messages":l(F).errorMessage.value,label:"*科威密碼",type:A.value?"text":"password","append-inner-icon":A.value?"mdi-eye-off":"mdi-eye",variant:"outlined",density:"compact",clearable:"","onClick:appendInner":u[23]||(u[23]=n=>A.value=!A.value)},null,8,["modelValue","error-messages","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",sm:"6",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(ae).value.value,"onUpdate:modelValue":u[24]||(u[24]=n=>l(ae).value.value=n),"error-messages":l(ae).errorMessage.value,label:"*公司Email",type:"email",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Z).value.value,"onUpdate:modelValue":u[25]||(u[25]=n=>l(Z).value.value=n),"error-messages":l(Z).errorMessage.value,label:"備註",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1})),e(sl,{class:"px-3 mt-4"},{default:a(()=>[e(rl),e(j,{color:"red-lighten-1",variant:"outlined",size:xe.value,loading:l(Ee),onClick:X},{default:a(()=>u[31]||(u[31]=[V(" 取消 ")])),_:1},8,["size","loading"]),e(j,{color:"teal-darken-1",variant:"outlined",type:"submit",class:"ms-1",size:xe.value,loading:l(Ee)},{default:a(()=>u[32]||(u[32]=[V(" 確認轉換 ")])),_:1},8,["size","loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1},8,["modelValue","width"])}}},zl=Ge(Pl,[["__scopeId","data-v-2684e527"]]),_l={key:0},$l={key:1},ql={key:2},El={key:3},jl={key:4},Ol={class:"d-flex align-center overflow-hidden h-25 pe-0"},hl={class:"card-title ps-4 py-3"},Bl={__name:"tempUser",setup(We){const{apiAuth:W}=ol(),O=Je(),Ve=p(null),Be=t=>{h.value=t,Cl(()=>{Ve.value&&Ve.value.openTransferDialog(t)})},J=async t=>{await de(),R&&await R(!0)},h=p(null),{smAndUp:M,mdAndUp:$,lgAndUp:$e,xlAndUp:qe}=el(),ee=z(()=>M.value?"default":"small"),B=z(()=>M.value?64:48),le=p(!1),xe=p([]),pe=p(1),ce=p(10),De=p(0),Re=p(0),ge=p([{key:"effectiveDate",order:"asc"}]),Fe=p(""),Ee={class:"header-bg"},R=async t=>{t&&(pe.value=1),await de()},ke=t=>{t<1&&(t=1);const s=Math.ceil(De.value/ce.value);t>s&&(t=s),pe.value=t,de()},q=p(!1),ae=[{title:"生效日期",align:"start",sortable:!0,key:"effectiveDate"},{title:"姓名",align:"start",sortable:!0,key:"name"},{title:"預計公司",align:"start",sortable:!0,key:"company.name"},{title:"預計部門",align:"start",sortable:!0,key:"department.name"},{title:"預計分機",align:"start",sortable:!0,key:"extNumber"},{title:"座位",align:"start",sortable:!0,key:"seatDescription"},{title:"狀態",align:"start",sortable:!0,key:"status"},{title:"操作",align:"start",sortable:!1,key:"actions",minWidth:"100px"}],Ue=z(()=>M.value?$.value?ae:ae.filter(t=>!["extNumber","seatDescription","status"].includes(t.key)):ae.filter(t=>["effectiveDate","name","actions"].includes(t.key))),fe=[{title:"待面試",value:"待面試"},{title:"待入職",value:"待入職"},{title:"已完成",value:"已完成"},{title:"已取消",value:"已取消"}],we=[{title:"男性",value:"男性"},{title:"女性",value:"女性"}],Ce=t=>({待面試:"warning",待入職:"info",已完成:"success",已取消:"error"})[t]||"grey",c=p({status:"",companyId:"",department:"",effectiveDate:null}),S=p(""),K=p([]),w=p([]),N=p(null),Ne=z(()=>[{title:"全部",value:""},...[...K.value].sort((t,s)=>{const f=t.companyId||"",r=s.companyId||"";return f.localeCompare(r)}).map(t=>({title:t.name,value:t._id}))]),te=z(()=>[...K.value].sort((t,s)=>{const f=t.companyId||"",r=s.companyId||"";return f.localeCompare(r)}).map(t=>({title:t.name,value:t._id}))),se=z(()=>qe.value?"1200":$e.value?"900":$.value?"800":M.value?"600":"100%"),C=p(!1),D=p({open:!1,id:""}),Ae=nl({name:i().required("請輸入姓名"),effectiveDate:he().required("請選擇生效日期"),status:i().required("請選擇狀態"),personalEmail:i().transform(t=>t===""?null:t).test("email-format","請輸入正確的Email格式",t=>t?/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(t):!0).nullable(),IDNumber:i().transform(t=>t===""?null:t).test("id-format","身分證號碼格式不正確",t=>t?/^[A-Za-z][12]\d{8}$/.test(t):!0).nullable(),cellphone:i().transform(t=>t===""?null:t).test("phone-format","手機號碼格式不正確",t=>t?/^09\d{8}$/.test(t):!0).nullable(),englishName:i().nullable(),gender:i().nullable(),birthDate:he().nullable(),permanentAddress:i().nullable(),contactAddress:i().nullable(),emergencyName:i().nullable(),emergencyCellphone:i().nullable(),emergencyRelationship:i().nullable(),company:Xe().transform(t=>t===""?null:t).nullable(),department:Xe().transform(t=>t===""?null:t).nullable(),jobTitle:i().nullable(),salary:i().nullable(),extNumber:i().nullable(),seatDescription:i().nullable(),note:i().nullable()}),{handleSubmit:Me,isSubmitting:re,resetForm:be}=dl({validationSchema:Ae,initialValues:{name:"",englishName:"",personalEmail:"",IDNumber:"",gender:"",cellphone:"",birthDate:null,permanentAddress:"",contactAddress:"",emergencyName:"",emergencyCellphone:"",emergencyRelationship:"",company:"",department:"",jobTitle:"",salary:"",extNumber:"",effectiveDate:null,status:"待面試",seatDescription:"",note:""}}),I=d("name"),F=d("englishName"),Z=d("personalEmail"),T=d("IDNumber"),P=d("gender"),ue=d("cellphone"),E=d("birthDate"),A=d("permanentAddress"),Q=d("contactAddress"),oe=d("emergencyName"),H=d("emergencyCellphone"),ne=d("emergencyRelationship"),X=d("company"),v=d("department"),u=d("jobTitle"),g=d("salary"),n=d("extNumber"),Se=d("effectiveDate"),Ie=d("status"),Te=d("seatDescription"),Pe=d("note"),vl=()=>{A.value.value&&(Q.value.value=A.value.value)},pl=z(()=>{var f;if(!C.value||!((f=D.value)!=null&&f.originalData))return!0;const t={name:I.value.value,englishName:F.value.value,personalEmail:Z.value.value,IDNumber:T.value.value,gender:P.value.value,cellphone:ue.value.value,birthDate:E.value.value,permanentAddress:A.value.value,contactAddress:Q.value.value,emergencyName:oe.value.value,emergencyCellphone:H.value.value,emergencyRelationship:ne.value.value,company:X.value.value,department:v.value.value,jobTitle:u.value.value,salary:g.value.value,extNumber:n.value.value,effectiveDate:Se.value.value,status:Ie.value.value,seatDescription:Te.value.value,note:Pe.value.value},s=D.value.originalData;return Object.entries(t).some(([r,y])=>{if(r==="birthDate"||r==="effectiveDate"){const L=s[r]?new Date(s[r]).toISOString():null,Oe=y?new Date(y).toISOString():null;return L!==Oe}return s[r]!==y})}),cl=t=>{if(!t)return"-";const s=new Date(t);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`},ze=async t=>{var s;try{if(D.value.open?N.value=t:c.value={...c.value,companyId:t,department:""},!t){w.value=[];return}const{data:f}=await W.get("/department/all",{params:{companyId:t,itemsPerPage:100}});f.success?w.value=((s=f.result)==null?void 0:s.data)||[]:(console.warn("找不到該公司的部門"),w.value=[])}catch(f){console.error("載入部門失敗:",f),O({text:"載入部門資料失敗",snackbarProps:{color:"red-lighten-1"}}),w.value=[]}},gl=async()=>{try{const{data:t}=await W.get("/company/all");t.success&&(K.value=t.result)}catch(t){console.error("載入公司列表失敗:",t),O({text:"載入公司列表失敗",snackbarProps:{color:"red-lighten-1"}})}},de=async()=>{var t,s,f,r;le.value=!0,console.log("Selected date range:",c.value.effectiveDate);try{const y={page:pe.value,itemsPerPage:ce.value,sortBy:((t=ge.value[0])==null?void 0:t.key)||"createdAt",sortOrder:((s=ge.value[0])==null?void 0:s.order)||"desc",quickSearch:S.value,...c.value,department:c.value.department};c.value.effectiveDate&&c.value.effectiveDate.length>0&&(y.effectiveStartDate=c.value.effectiveDate[0].toISOString(),y.effectiveEndDate=c.value.effectiveDate.length>1?c.value.effectiveDate[c.value.effectiveDate.length-1].toISOString():y.effectiveStartDate),console.log("Query params:",y);const{data:L}=await W.get("/tempUser/all",{params:y});L.success&&(xe.value=L.result.data,De.value=L.result.totalItems)}catch(y){console.error("搜索失败:",y),O({text:((r=(f=y==null?void 0:y.response)==null?void 0:f.data)==null?void 0:r.message)||"搜索失败",snackbarProps:{color:"red-lighten-1"}})}finally{le.value=!1}},fl=()=>{c.value={status:"",companyId:"",department:"",effectiveDate:null},S.value="",de()},bl=Me(async t=>{var s,f;try{const r={...t,company:t.company||void 0,department:t.department||void 0};D.value.id?await W.patch(`/tempUser/${D.value.id}`,r):await W.post("/tempUser",r),await R(!0),Ze(),O({text:D.value.id?"更新成功":"新增成功",snackbarProps:{color:"teal-lighten-1"}})}catch(r){O({text:((f=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:f.message)||"操作失敗",snackbarProps:{color:"red-lighten-1"}})}}),Ke=async t=>{D.value={open:!0,id:(t==null?void 0:t._id)||"",originalData:t?{...t}:null},q.value=!0,t?(C.value=!0,t.company&&(N.value=t.company._id,X.value.value=t.company._id,await ze(t.company._id),t.department&&t.department._id&&(v.value.value=t.department._id)),I.value.value=t.name,F.value.value=t.englishName,Z.value.value=t.personalEmail,T.value.value=t.IDNumber,P.value.value=t.gender,ue.value.value=t.cellphone,E.value.value=t.birthDate?new Date(t.birthDate):null,A.value.value=t.permanentAddress,Q.value.value=t.contactAddress,oe.value.value=t.emergencyName,H.value.value=t.emergencyCellphone,ne.value.value=t.emergencyRelationship,u.value.value=t.jobTitle,g.value.value=t.salary,n.value.value=t.extNumber,Se.value.value=t.effectiveDate?new Date(t.effectiveDate):null,Ie.value.value=t.status,Te.value.value=t.seatDescription,Pe.value.value=t.note):(C.value=!1,N.value=null,w.value=[],be()),setTimeout(()=>{q.value=!1},300)},Ze=()=>{D.value.open=!1,N.value=null,w.value=[],be()},je=p(!1),yl=async()=>{var t,s;try{await W.delete(`/tempUser/${D.value.id}`),await R(!0),Ze(),je.value=!1,O({text:"刪除成功",snackbarProps:{color:"teal-lighten-1"}})}catch(f){O({text:((s=(t=f==null?void 0:f.response)==null?void 0:t.data)==null?void 0:s.message)||"刪除失敗",snackbarProps:{color:"red-lighten-1"}})}};return Dl(async()=>{await de(),await gl()}),ye(S,Nl.debounce(()=>{de()},300)),ye(N,async t=>{t!=null?(X.value.value=t,v.value.value="",await ze(t)):(X.value.value=null,v.value.value="",w.value=[])}),ye(()=>c.value.companyId,async t=>{t?await ze(t):w.value=[]}),ye(X.value,t=>{t&&t.value!==null&&t.value!==void 0&&(N.value=t.value)}),(t,s)=>{const f=ll("v-date-input");return b(),U(Ml,{"max-width":"2200"},{default:a(()=>[e(k,{class:"py-0 ma-sm-1 ma-md-2"},{default:a(()=>[e(o,{cols:"12",lg:"3"},{default:a(()=>[e(k,null,{default:a(()=>[e(o,{cols:"12",class:"mt-1 ps-lg-8 pe-lg-12"},{default:a(()=>[e(He,{class:"elevation-4 rounded-lg py-4 py-sm-8 px-4 px-sm-4 px-xl-8"},{default:a(()=>[e(kl,{class:"font-weight-bold d-flex align-center"},{default:a(()=>s[34]||(s[34]=[V(" 搜尋條件 ")])),_:1}),e(ve,{class:"pa-2"},{default:a(()=>[e(k,null,{default:a(()=>[e(o,{cols:"12",sm:"6",lg:"12"},{default:a(()=>[e(_,{modelValue:c.value.status,"onUpdate:modelValue":s[0]||(s[0]=r=>c.value.status=r),items:fe,label:"狀態","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",sm:"6",lg:"12"},{default:a(()=>[e(_,{modelValue:c.value.companyId,"onUpdate:modelValue":[s[1]||(s[1]=r=>c.value.companyId=r),ze],items:Ne.value,label:"公司","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1}),e(o,{cols:"12",sm:"6",lg:"12"},{default:a(()=>[e(_,{modelValue:c.value.department,"onUpdate:modelValue":s[2]||(s[2]=r=>c.value.department=r),items:w.value,label:"部門","item-title":"name","item-value":"_id",variant:"outlined",density:"compact","hide-details":"",clearable:"",disabled:!c.value.companyId},null,8,["modelValue","items","disabled"])]),_:1}),e(o,{cols:"12",sm:"6",lg:"12"},{default:a(()=>[e(f,{modelValue:c.value.effectiveDate,"onUpdate:modelValue":s[3]||(s[3]=r=>c.value.effectiveDate=r),label:"生效日期","prepend-icon":"",variant:"outlined",density:"compact","hide-details":"",clearable:"",multiple:"range","cancel-text":"取消","ok-text":"確認"},null,8,["modelValue"])]),_:1})]),_:1}),e(k,null,{default:a(()=>[e(o,{cols:"12",class:"d-flex justify-end gap-2"},{default:a(()=>[e(k,{class:"d-flex justify-space-between"},{default:a(()=>[e(o,{cols:"3"},{default:a(()=>[e(j,{color:"grey",width:"40",block:"",onClick:fl},{default:a(()=>[e(me,null,{default:a(()=>s[35]||(s[35]=[V("mdi-refresh")])),_:1})]),_:1})]),_:1}),e(o,{cols:"9",class:"ps-0"},{default:a(()=>[e(j,{color:"cyan-darken-2","prepend-icon":"mdi-magnify",loading:le.value,block:"",onClick:de},{default:a(()=>s[36]||(s[36]=[V(" 搜尋 ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",lg:"9",class:"px-6 ps-lg-4 pe-lg-12 mb-6"},{default:a(()=>[e(k,{class:"elevation-4 rounded-lg py-4 py-sm-8 px-1 px-sm-4 px-md-10 mt-1 bg-white"},{default:a(()=>[e(o,{cols:"12",class:"ps-4 pb-sm-6"},{default:a(()=>s[37]||(s[37]=[ie("h3",null,"招聘資料管理",-1)])),_:1}),e(o,{cols:"12"},{default:a(()=>[e(k,null,{default:a(()=>[e(o,null,{default:a(()=>[e(j,{"prepend-icon":"mdi-account-plus",variant:"outlined",color:"blue-grey-darken-2",onClick:s[4]||(s[4]=r=>Ke(null))},{default:a(()=>s[38]||(s[38]=[V(" 新增招聘資料 ")])),_:1})]),_:1}),e(o,{sm:"4",lg:"3"},{default:a(()=>[e(k,{class:"d-flex align-center"},{default:a(()=>[l($)?(b(),U(o,{key:0,cols:"2",class:"ps-lg-5"},{default:a(()=>[Qe(e(me,{icon:"mdi-information",size:"small",color:"blue-grey-darken-2",class:"pe-3 pe-xl-0"},null,512),[[Ye,"可搜尋姓名、個人Email、手機","start"]])]),_:1})):x("",!0),e(o,null,{default:a(()=>[e(m,{modelValue:S.value,"onUpdate:modelValue":s[5]||(s[5]=r=>S.value=r),label:"搜尋","append-inner-icon":"mdi-magnify","base-color":"#666",color:"blue-grey-darken-3",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:a(()=>[(b(),U(Sl,{key:Re.value,"items-per-page":ce.value,"onUpdate:itemsPerPage":[s[6]||(s[6]=r=>ce.value=r),s[8]||(s[8]=r=>R(!1))],"sort-by":ge.value,"onUpdate:sortBy":[s[7]||(s[7]=r=>ge.value=r),s[9]||(s[9]=r=>R(!1))],page:pe.value,density:"compact",class:"rounded-ts-lg rounded-te-lg py-3","items-per-page-options":[10,20,50],items:xe.value,headers:Ue.value,"header-props":Ee,loading:le.value,"items-length":De.value,search:Fe.value,hover:"","onUpdate:page":ke},{item:a(({item:r,index:y})=>{var L,Oe;return[ie("tr",{class:wl({"odd-row":y%2===0,"even-row":y%2!==0})},[ie("td",null,Y(cl(r.effectiveDate)),1),ie("td",null,Y(r.name),1),l(M)?(b(),_e("td",_l,Y(((L=r.company)==null?void 0:L.name)||""),1)):x("",!0),l(M)?(b(),_e("td",$l,Y(((Oe=r.department)==null?void 0:Oe.name)||""),1)):x("",!0),l($)?(b(),_e("td",ql,Y(r.extNumber),1)):x("",!0),l($)?(b(),_e("td",El,Y(r.seatDescription),1)):x("",!0),l($)?(b(),_e("td",jl,[e(Ul,{color:Ce(r.status),size:"small"},{default:a(()=>[V(Y(r.status),1)]),_:2},1032,["color"])])):x("",!0),ie("td",Ol,[e(j,{icon:"",color:"light-blue-darken-4",variant:"plain",width:"28",size:ee.value,ripple:!1,onClick:Vl=>Ke(r)},{default:a(()=>[e(me,null,{default:a(()=>s[39]||(s[39]=[V("mdi-pencil")])),_:1})]),_:2},1032,["size","onClick"]),r.status==="待入職"?Qe((b(),U(j,{key:0,icon:"",color:"teal-darken-1",variant:"plain",width:"28",class:"ms-2",size:ee.value,ripple:!1,onClick:Vl=>Be(r)},{default:a(()=>[e(me,null,{default:a(()=>s[40]||(s[40]=[V("mdi-account-convert")])),_:1})]),_:2},1032,["size","onClick"])),[[Ye,"轉為正式員工","top"]]):x("",!0)])],2)]}),_:1},8,["items-per-page","sort-by","page","items","headers","loading","items-length","search"]))]),_:1})]),_:1})]),_:1})]),_:1}),e(ul,{modelValue:D.value.open,"onUpdate:modelValue":s[32]||(s[32]=r=>D.value.open=r),persistent:"",width:se.value},{default:a(()=>[e(il,{ref:"tempForm",disabled:l(re),onSubmit:al(l(bl),["prevent"])},{default:a(()=>[e(He,{class:"rounded-lg px-4 py-6"},{default:a(()=>[ie("div",hl,Y(D.value.id?"招聘資料編輯":"新增招聘資料"),1),e(k,{class:"py-4"},{default:a(()=>[e(o,{cols:"4",md:"5",class:"d-flex align-center ps-6"},{default:a(()=>[e(G)]),_:1}),e(o,{cols:"4",md:"2",class:"info-title px-0 text-blue-grey-darken-2"},{default:a(()=>s[41]||(s[41]=[V(" 基本資料 ")])),_:1}),e(o,{cols:"4",md:"5",class:"d-flex align-center pe-6"},{default:a(()=>[e(G)]),_:1})]),_:1}),q.value&&C.value?(b(),U(ve,{key:0,class:"d-flex justify-center align-center",style:{height:"600px"}},{default:a(()=>[e(tl,{indeterminate:"",color:"blue-grey-darken-2",size:B.value},null,8,["size"])]),_:1})):x("",!0),!q.value||!C.value?(b(),U(ve,{key:1,class:"mt-3 pa-3"},{default:a(()=>[e(k,null,{default:a(()=>[e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(I).value.value,"onUpdate:modelValue":s[10]||(s[10]=r=>l(I).value.value=r),"error-messages":l(I).errorMessage.value,label:"*姓名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(F).value.value,"onUpdate:modelValue":s[11]||(s[11]=r=>l(F).value.value=r),"error-messages":l(F).errorMessage.value,label:"英文名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(T).value.value,"onUpdate:modelValue":s[12]||(s[12]=r=>l(T).value.value=r),"error-messages":l(T).errorMessage.value,label:"身分證號碼",maxlength:"10",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(f,{modelValue:l(E).value.value,"onUpdate:modelValue":s[13]||(s[13]=r=>l(E).value.value=r),"error-messages":l(E).errorMessage.value,label:"生日","prepend-icon":"",variant:"outlined",density:"compact",clearable:"","cancel-text":"取消","ok-text":"確認"},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(_,{modelValue:l(P).value.value,"onUpdate:modelValue":s[14]||(s[14]=r=>l(P).value.value=r),items:we,"error-messages":l(P).errorMessage.value,label:"性別",variant:"outlined",density:"compact"},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(ue).value.value,"onUpdate:modelValue":s[15]||(s[15]=r=>l(ue).value.value=r),"error-messages":l(ue).errorMessage.value,label:"手機號碼",maxlength:"10",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Z).value.value,"onUpdate:modelValue":s[16]||(s[16]=r=>l(Z).value.value=r),"error-messages":l(Z).errorMessage.value,label:"個人Email",type:"email",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(A).value.value,"onUpdate:modelValue":s[17]||(s[17]=r=>l(A).value.value=r),"error-messages":l(A).errorMessage.value,label:"戶籍地址",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Q).value.value,"onUpdate:modelValue":s[18]||(s[18]=r=>l(Q).value.value=r),"error-messages":l(Q).errorMessage.value,label:"聯絡地址",type:"text",variant:"outlined",density:"compact",clearable:""},{"append-inner":a(()=>[e(ml,{location:"top","close-delay":"200"},{activator:a(({props:r})=>[e(me,Le(r,{icon:"mdi-content-copy",onClick:vl}),null,16)]),default:a(()=>[s[42]||(s[42]=V(" 複製戶籍地址 "))]),_:1})]),_:1},8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(oe).value.value,"onUpdate:modelValue":s[19]||(s[19]=r=>l(oe).value.value=r),"error-messages":l(oe).errorMessage.value,label:"緊急聯絡人姓名",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(H).value.value,"onUpdate:modelValue":s[20]||(s[20]=r=>l(H).value.value=r),"error-messages":l(H).errorMessage.value,label:"緊急聯絡人電話",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(ne).value.value,"onUpdate:modelValue":s[21]||(s[21]=r=>l(ne).value.value=r),"error-messages":l(ne).errorMessage.value,label:"緊急聯絡人關係",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1})):x("",!0),!q.value||!C.value?(b(),U(k,{key:2,class:"py-4"},{default:a(()=>[e(o,{cols:"3",md:"4",class:"d-flex align-center ps-6"},{default:a(()=>[e(G)]),_:1}),e(o,{cols:"6",md:"4",class:"info-title text-blue-grey-darken-2"},{default:a(()=>s[43]||(s[43]=[V(" 預計任職資訊 ")])),_:1}),e(o,{cols:"3",md:"4",class:"d-flex align-center pe-6"},{default:a(()=>[e(G)]),_:1})]),_:1})):x("",!0),!q.value||!C.value?(b(),U(ve,{key:3,class:"mt-3 pa-3"},{default:a(()=>[e(k,null,{default:a(()=>[e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(f,{modelValue:l(Se).value.value,"onUpdate:modelValue":s[22]||(s[22]=r=>l(Se).value.value=r),"error-messages":l(Se).errorMessage.value,label:"*生效日期","prepend-icon":"",variant:"outlined",density:"compact",clearable:"","cancel-text":"取消","ok-text":"確認"},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(_,{modelValue:l(Ie).value.value,"onUpdate:modelValue":s[23]||(s[23]=r=>l(Ie).value.value=r),"error-messages":l(Ie).errorMessage.value,items:fe,"item-title":"title","item-value":"value",label:"*狀態",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(_,{modelValue:N.value,"onUpdate:modelValue":[s[24]||(s[24]=r=>N.value=r),ze],"error-messages":l(X).errorMessage.value,items:te.value,label:"所屬公司","item-title":"title","item-value":"value",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages","items"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(_,{modelValue:l(v).value.value,"onUpdate:modelValue":s[25]||(s[25]=r=>l(v).value.value=r),items:w.value,"error-messages":l(v).errorMessage.value,"item-title":"name","item-value":"_id",label:"選擇部門",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","items","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(u).value.value,"onUpdate:modelValue":s[26]||(s[26]=r=>l(u).value.value=r),"error-messages":l(u).errorMessage.value,label:"預計職稱",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(g).value.value,"onUpdate:modelValue":s[27]||(s[27]=r=>l(g).value.value=r),"error-messages":l(g).errorMessage.value,label:"預計薪資",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(n).value.value,"onUpdate:modelValue":s[28]||(s[28]=r=>l(n).value.value=r),"error-messages":l(n).errorMessage.value,label:"預計分機號碼",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Te).value.value,"onUpdate:modelValue":s[29]||(s[29]=r=>l(Te).value.value=r),"error-messages":l(Te).errorMessage.value,label:"座位描述",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",sm:"6",md:"4",lg:"3",class:"pb-0"},{default:a(()=>[e(m,{modelValue:l(Pe).value.value,"onUpdate:modelValue":s[30]||(s[30]=r=>l(Pe).value.value=r),"error-messages":l(Pe).errorMessage.value,label:"備註",type:"text",variant:"outlined",density:"compact",clearable:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1})):x("",!0),e(sl,{class:"px-3 mt-4"},{default:a(()=>[e(Il,null,{default:a(({isHovering:r,props:y})=>[C.value?(b(),U(j,Le({key:0},y,{color:r?"red-lighten-1":"grey",variant:"outlined","prepend-icon":"mdi-delete",size:ee.value,onClick:s[31]||(s[31]=L=>je.value=!0)}),{default:a(()=>s[44]||(s[44]=[V(" 永久刪除 ")])),_:2},1040,["color","size"])):x("",!0)]),_:1}),e(rl),e(j,{color:"red-lighten-1",variant:"outlined",size:ee.value,loading:l(re),onClick:Ze},{default:a(()=>s[45]||(s[45]=[V(" 取消 ")])),_:1},8,["size","loading"]),e(j,{color:"teal-darken-1",variant:"outlined",type:"submit",class:"ms-1",size:ee.value,loading:l(re),disabled:C.value&&!pl.value},{default:a(()=>s[46]||(s[46]=[V(" 送出 ")])),_:1},8,["size","loading","disabled"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue","width"]),e(Al,{modelValue:je.value,"onUpdate:modelValue":s[33]||(s[33]=r=>je.value=r),title:"確認刪除招聘資料",message:`確定要刪除「<span class='text-pink-lighten-1' style='font-weight: 800;'>${l(I).value.value}</span>」的招聘資料嗎？ 此操作無法復原。`,"expected-name":l(I).value.value,"input-label":"輸入欲刪除姓名",onConfirm:yl},null,8,["modelValue","message","expected-name"]),h.value?(b(),U(zl,{key:0,ref_key:"transferDialog",ref:Ve,"temp-user":h.value,onTransferred:J},null,8,["temp-user"])):x("",!0)]),_:1})}}},sa=Ge(Bl,[["__scopeId","data-v-136e42ca"]]);export{sa as default};
