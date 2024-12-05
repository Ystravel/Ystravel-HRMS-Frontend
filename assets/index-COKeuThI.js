import{_ as se,o as _,a2 as r,a3 as y,a4 as l,c as t,V as ye,ak as V,a7 as F,a9 as u,ai as N,ab as p,ap as xe,aj as x,ae as B,Y as Ve,aq as be,Z as ke,x as c,z as we,A as _e,a1 as Ce,K as w,aa as W,U as T,al as L,ar as te,as as le,ag as G,a5 as he,a8 as De,at as H,a6 as O,au as Q,av as Ae,H as Te,aw as M}from"./index-CEUVR7RQ.js";import{Q as Ue}from"./vue-quill.snow-B_ufE7tA.js";import{V as b,a as m}from"./VRow-DoWseTgQ.js";import{V as Se}from"./VContainer-D-TpANnr.js";import{V as Pe,a as ae,b as Ie,c as oe}from"./VTabs-DyalDDIO.js";import{V as $e}from"./VPagination-PoDO8lg_.js";import{V as ze}from"./VForm-CcbGa_35.js";import{V as je}from"./VSelect-CcYVlXzf.js";import{V as qe}from"./VFileInput-4ylzSqY_.js";import{V as Re}from"./VCheckbox-BjTITKb_.js";import{b as Le,V as Me,a as Ne,d as Be}from"./VList-DOI9Pofw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VCheckboxBtn-CYsTMO8j.js";import"./VDivider-BEhlNDsF.js";const Ee={key:1,class:"announcement-img d-flex align-center justify-center bg-grey-lighten-3"},Fe={class:"d-flex align-center mb-2"},We={class:"text-h6 text-blue-grey-darken-3 text-truncate"},Ge={class:"preview-text mb-4"},He={class:"info-section"},Oe={class:"d-flex align-center mb-2"},Qe={class:"text-grey text-caption"},Ke={class:"d-flex align-center"},Ye={class:"text-grey text-caption"},Ze={__name:"AnnouncementCard",props:{_id:{type:String,required:!0},title:{type:String,required:!0},content:{type:String,required:!0},type:{type:String,required:!0},author:{type:Object,required:!0},createdAt:{type:String,required:!0}},setup(K){const v=K,$=_(()=>{const i=/<img[^>]+src="([^">]+)"/,n=v.content.match(i);return n?n[1]:null}),z=_(()=>{const i=v.content.replace(/<[^>]+>/g,"");return i.length>100?i.slice(0,100)+"...":i}),C={置頂:"red",重要:"orange",活動:"green",系統:"blue",一般:"grey"},k=i=>C[i]||"grey",h=i=>i==="一般"?"black":"white",U=i=>new Date(i).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});return(i,n)=>(r(),y(B,{class:"custom-card d-flex flex-column",width:"100%",onClick:n[0]||(n[0]=g=>i.$router.push(`/announcement/${v._id}`))},{default:l(()=>[t(b,{class:"flex-grow-1"},{default:l(()=>[t(m,{cols:"12",sm:"5"},{default:l(()=>[$.value?(r(),y(ye,{key:0,src:$.value,width:"100%",class:"announcement-img",cover:""},null,8,["src"])):(r(),V("div",Ee,[t(F,{size:"64",color:"grey"},{default:l(()=>n[1]||(n[1]=[u(" mdi-newspaper-variant-outline ")])),_:1})]))]),_:1}),t(m,{cols:"12",sm:"7"},{default:l(()=>[t(N,{class:"d-flex flex-column justify-space-between h-100 py-0"},{default:l(()=>{var g;return[p("div",null,[p("div",Fe,[t(xe,{color:k(v.type),"text-color":h(v.type),size:"small",class:"me-2"},{default:l(()=>[u(x(v.type),1)]),_:1},8,["color","text-color"]),p("div",We,x(v.title),1)]),p("div",Ge,x(z.value),1)]),p("div",He,[p("div",Oe,[t(F,{size:"small",color:"grey",class:"me-1"},{default:l(()=>n[2]||(n[2]=[u(" mdi-account ")])),_:1}),p("span",Qe,x((g=v.author)==null?void 0:g.name),1)]),p("div",Ke,[t(F,{size:"small",color:"grey",class:"me-1"},{default:l(()=>n[3]||(n[3]=[u(" mdi-clock-outline ")])),_:1}),p("span",Ye,x(U(v.createdAt)),1)])])]}),_:1})]),_:1})]),_:1})]),_:1}))}},Je=se(Ze,[["__scopeId","data-v-403f42d2"]]),Xe={class:"d-flex align-center"},et={key:1,class:"d-flex justify-center align-center py-12"},tt={__name:"index",setup(K){const v=Ve(),{token:$,role:z}=be(v),{apiAuth:C}=Ae(),k=ke(),h=_(()=>{var a;return((a=$.value)==null?void 0:a.length)>0}),U=c(!1),i=c([]),n=c("all"),g=c(""),D=c(1),Y=c(12),Z=c(0),j=c(!1),f=c({show:!1,id:null}),S=c({show:!1,announcement:null}),A=c(!1),P=c(null),q=c(!1),R=c(!1),d=c({title:"",content:"",type:"一般",attachments:[],expiryDate:null}),ne=[a=>!!a||"請輸入標題",a=>a&&a.length<=100||"標題不能超過100個字"],ue=[a=>!a||!a.length||a.length<=10||"最多只能上傳10個檔案",a=>!a||!a.some(e=>e.size>10*1024*1024)||"檔案大小不能超過10MB"],E=["置頂","重要","活動","系統","一般"],re=_(()=>{const a=new Date;return a.setDate(a.getDate()+1),a.toISOString().split("T")[0]}),ie=_(()=>{const a=[M.SUPER_ADMIN,M.ADMIN,M.HR,M.MANAGER];return z.value&&a.includes(Number(z.value))}),J=_(()=>Math.ceil(Z.value/Y.value)),X=_(()=>{let a=i.value||[];if(g.value){const e=g.value.toLowerCase();a=a.filter(s=>s.title.toLowerCase().includes(e)||s.content.toLowerCase().includes(e))}return a}),I=async()=>{var a,e;if(h.value){U.value=!0;try{const{data:s}=await C.get("/announcement/all",{params:{page:D.value,limit:Y.value,search:g.value,type:n.value==="all"?void 0:n.value}});s.success&&s.result&&typeof s.result=="object"&&(i.value=s.result.data||[],Z.value=s.result.total||0)}catch(s){console.error("獲取公告失敗:",s),k({text:((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)||"獲取公告失敗",snackbarProps:{color:"error"}})}finally{U.value=!1}}},de=(a=null)=>{f.value.id=(a==null?void 0:a._id)||null,d.value=a?{title:a.title,content:a.content,type:a.type,attachments:[],expiryDate:a.expiryDate}:{title:"",content:"",type:"一般",attachments:[],expiryDate:null},A.value=!!(a!=null&&a.expiryDate),f.value.show=!0},me=()=>{f.value.show=!1,f.value.id=null,d.value={title:"",content:"",type:"一般",attachments:[],expiryDate:null},A.value=!1,P.value&&P.value.reset()},ce=()=>{d.value={title:"",content:"",type:"一般",attachments:[],expiryDate:null},A.value=!1,P.value&&P.value.reset()},ee=async()=>{var a,e;if(q.value){R.value=!0;try{const{data:s}=f.value.id?await C.patch(`/announcement/${f.value.id}`,d.value):await C.post("/announcement",d.value);s.success&&(k({text:`公告${f.value.id?"編輯":"新增"}成功`,snackbarProps:{color:"success"}}),f.value.show=!1,ce(),D.value=1,await I())}catch(s){console.error("提交公告失敗:",s),k({text:((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)||"提交失敗",snackbarProps:{color:"error"}})}finally{R.value=!1}}},pe=async()=>{var a,e;try{const{data:s}=await C.delete(`/announcement/${S.value.announcement._id}`);s.success&&(k({text:"公告刪除成功",snackbarProps:{color:"success"}}),I())}catch(s){console.error("刪除公告失敗:",s),k({text:((e=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:e.message)||"刪除失敗",snackbarProps:{color:"error"}})}finally{S.value.show=!1}},fe=[{icon:"mdi-format-list-text",title:"公告分類",content:"公告分為置頂、重要、活動、系統、一般五種類型。置頂公告會顯示在最上方。"},{icon:"mdi-text-search",title:"搜尋功能",content:"可以透過關鍵字搜尋公告標題和內容。"},{icon:"mdi-file-upload",title:"附件上傳",content:"支援圖片、文件等多種格式，單個檔案大小不超過10MB。"},{icon:"mdi-clock-outline",title:"自動下架",content:"可以設定自動下架時間，到期後公告會自動下架。"}];we([n,D,g],()=>{h.value&&(D.value=1,I())},{immediate:!0}),_e(()=>{h.value&&I()});const ve=()=>{window.scrollTo({top:0,behavior:"smooth"}),I()};return(a,e)=>{const s=Ce("v-date-input");return r(),y(Se,{"max-width":"2000"},{default:l(()=>[h.value?(r(),V(T,{key:0},[t(b,{class:"py-4 py-sm-8 px-1 px-sm-10 mt-2 mt-sm-6 mx-0 mx-sm-4 mx-md-10 mb-4"},{default:l(()=>[t(m,{cols:"12",class:"ps-3 d-flex justify-space-between align-center"},{default:l(()=>[p("div",Xe,[e[20]||(e[20]=p("h3",null,"所有公告",-1)),t(w,{size:"x-small",color:"grey-darken-1",class:"ms-4",elevation:"1",onClick:e[0]||(e[0]=o=>j.value=!0)},{default:l(()=>e[19]||(e[19]=[u(" 使用說明 ")])),_:1})]),ie.value?(r(),y(w,{key:0,"prepend-icon":"mdi-plus",color:"blue-grey-darken-2",variant:"outlined",onClick:e[1]||(e[1]=o=>de(null))},{default:l(()=>e[21]||(e[21]=[u(" 新增公告 ")])),_:1})):W("",!0)]),_:1}),t(m,{cols:"12"},{default:l(()=>[t(b,{align:"center",class:"py-4"},{default:l(()=>[t(m,{cols:"12",md:"8"},{default:l(()=>[t(Pe,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=o=>n.value=o),color:"blue-grey-darken-2","align-tabs":"start"},{default:l(()=>[t(ae,{value:"all"},{default:l(()=>e[22]||(e[22]=[u(" 全部 ")])),_:1}),(r(),V(T,null,L(E,o=>t(ae,{key:o,value:o},{default:l(()=>[u(x(o),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1}),t(m,{cols:"12",md:"4"},{default:l(()=>[t(te,{modelValue:g.value,"onUpdate:modelValue":e[3]||(e[3]=o=>g.value=o),label:"搜尋公告","append-inner-icon":"mdi-magnify",density:"comfortable",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(m,{cols:"12"},{default:l(()=>[t(Ie,{modelValue:n.value,"onUpdate:modelValue":e[5]||(e[5]=o=>n.value=o)},{default:l(()=>[t(oe,{value:"all"},{default:l(()=>[U.value?(r(),y(b,{key:0,justify:"center",align:"center",style:{height:"200px"}},{default:l(()=>[t(m,{cols:"12",class:"text-center"},{default:l(()=>[t(le,{indeterminate:"",color:"primary",size:"64"})]),_:1})]),_:1})):(r(),V(T,{key:1},[X.value.length>0?(r(),y(b,{key:0},{default:l(()=>[(r(!0),V(T,null,L(X.value,o=>(r(),y(m,{key:o._id,cols:"12",sm:"6",lg:"4",xl:"3",class:"mb-4"},{default:l(()=>[t(Je,Te({ref_for:!0},o),null,16)]),_:2},1024))),128))]),_:1})):(r(),y(b,{key:1},{default:l(()=>[t(m,{cols:"12",class:"text-center"},{default:l(()=>e[23]||(e[23]=[p("p",null,"沒有找到相關公告",-1)])),_:1})]),_:1})),J.value>1?(r(),y(b,{key:2},{default:l(()=>[t(m,{cols:"12"},{default:l(()=>[t($e,{modelValue:D.value,"onUpdate:modelValue":[e[4]||(e[4]=o=>D.value=o),ve],length:J.value,rounded:"circle",density:"comfortable","total-visible":7,color:"blue-grey"},null,8,["modelValue","length"])]),_:1})]),_:1})):W("",!0)],64))]),_:1}),(r(),V(T,null,L(E,o=>t(oe,{key:o,value:o},null,8,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(Q,{modelValue:f.value.show,"onUpdate:modelValue":e[14]||(e[14]=o=>f.value.show=o),persistent:"","max-width":"900px",height:"100%"},{default:l(()=>[t(B,{class:"pa-4 h-100"},{default:l(()=>[t(G,{class:"text-h5 pb-4"},{default:l(()=>[u(x(f.value.id?"編輯公告":"新增公告"),1)]),_:1}),t(N,null,{default:l(()=>[t(ze,{ref_key:"form",ref:P,modelValue:q.value,"onUpdate:modelValue":e[13]||(e[13]=o=>q.value=o),onSubmit:he(ee,["prevent"])},{default:l(()=>[t(b,null,{default:l(()=>[t(m,{cols:"12",sm:"8"},{default:l(()=>[t(te,{modelValue:d.value.title,"onUpdate:modelValue":e[6]||(e[6]=o=>d.value.title=o),label:"公告標題",rules:ne,required:""},null,8,["modelValue"])]),_:1}),t(m,{cols:"12",sm:"4"},{default:l(()=>[t(je,{modelValue:d.value.type,"onUpdate:modelValue":e[7]||(e[7]=o=>d.value.type=o),items:E,label:"公告類型",required:""},null,8,["modelValue"])]),_:1}),t(m,{cols:"12"},{default:l(()=>[e[24]||(e[24]=p("div",{class:"text-subtitle-1 mb-2"}," 公告內容 ",-1)),t(De(Ue),{content:d.value.content,"onUpdate:content":e[8]||(e[8]=o=>d.value.content=o),style:{"min-height":"640px"},"content-type":"html",toolbar:"full",theme:"snow",options:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image"]]}}},null,8,["content"])]),_:1}),t(m,{cols:"12",class:"px-9"},{default:l(()=>[t(qe,{modelValue:d.value.attachments,"onUpdate:modelValue":e[9]||(e[9]=o=>d.value.attachments=o),label:"附件上傳",multiple:"","show-size":"",counter:"",variant:"underlined",rules:ue,accept:".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar"},null,8,["modelValue"])]),_:1}),t(m,{cols:"12"},{default:l(()=>[t(Re,{modelValue:A.value,"onUpdate:modelValue":e[10]||(e[10]=o=>A.value=o),label:"設定下架時間"},null,8,["modelValue"]),A.value?(r(),y(s,{key:0,modelValue:d.value.expiryDate,"onUpdate:modelValue":e[11]||(e[11]=o=>d.value.expiryDate=o),label:"自動下架時間",min:re.value,variant:"outlined",density:"comfortable",clearable:"","ok-text":"確認","cancel-text":"取消","onClick:clear":e[12]||(e[12]=o=>d.value.expiryDate=null)},null,8,["modelValue","min"])):W("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(H,null,{default:l(()=>[t(O),t(w,{color:"grey",variant:"text",onClick:me},{default:l(()=>e[25]||(e[25]=[u(" 取消 ")])),_:1}),t(w,{color:"primary",loading:R.value,disabled:!q.value||R.value,onClick:ee},{default:l(()=>[u(x(f.value.id?"更新":"發布"),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(Q,{modelValue:j.value,"onUpdate:modelValue":e[16]||(e[16]=o=>j.value=o),"max-width":"600px"},{default:l(()=>[t(B,{class:"pa-4"},{default:l(()=>[t(G,{class:"text-h5"},{default:l(()=>e[26]||(e[26]=[u(" 公告系統使用說明 ")])),_:1}),t(N,{class:"pt-4"},{default:l(()=>[t(Le,null,{default:l(()=>[(r(),V(T,null,L(fe,(o,ge)=>t(Me,{key:ge,"prepend-icon":o.icon},{default:l(()=>[t(Ne,null,{default:l(()=>[u(x(o.title),1)]),_:2},1024),t(Be,{class:"mt-1"},{default:l(()=>[u(x(o.content),1)]),_:2},1024)]),_:2},1032,["prepend-icon"])),64))]),_:1})]),_:1}),t(H,null,{default:l(()=>[t(O),t(w,{color:"primary",variant:"text",onClick:e[15]||(e[15]=o=>j.value=!1)},{default:l(()=>e[27]||(e[27]=[u(" 關閉 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(Q,{modelValue:S.value.show,"onUpdate:modelValue":e[18]||(e[18]=o=>S.value.show=o),"max-width":"400px"},{default:l(()=>[t(B,null,{default:l(()=>[t(G,{class:"text-h5"},{default:l(()=>e[28]||(e[28]=[u(" 確認刪除 ")])),_:1}),t(N,null,{default:l(()=>e[29]||(e[29]=[u(" 確定要刪除此公告嗎？此操作無法復原。 ")])),_:1}),t(H,null,{default:l(()=>[t(O),t(w,{color:"grey",variant:"text",onClick:e[17]||(e[17]=o=>S.value.show=!1)},{default:l(()=>e[30]||(e[30]=[u(" 取消 ")])),_:1}),t(w,{color:"error",variant:"text",onClick:pe},{default:l(()=>e[31]||(e[31]=[u(" 確認刪除 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)):(r(),V("div",et,[t(le,{indeterminate:"",color:"primary"})]))]),_:1})}}},gt=se(tt,[["__scopeId","data-v-70bae44d"]]);export{gt as default};
