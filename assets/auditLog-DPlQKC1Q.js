import{a0 as Pe,o as Z,a2 as Oe,P as Le,x as f,z as pe,A as je,a6 as $,ao as D,c as l,a8 as n,aD as Fe,U as ee,aE as qe,a5 as ze,ai as me,ak as Ee,ad as x,am as ge,ac as C,aF as fe,ab as H,H as ve,an as h,K as te,af as p,ae as Y,ap as Ie,aj as Be,aC as He,aa as Ye}from"./index-NAqwdH6J.js";import{l as ye}from"./lodash-BYTxXjAY.js";import{V as Re}from"./VContainer--Jf4ISwH.js";import{V as T,a as v}from"./VRow-8rGLe-zz.js";import{V as he}from"./VAutocomplete-DlrNEa41.js";import{V as be}from"./VTooltip-BedYldYM.js";import{V as $e}from"./VSelect-B5ywJIix.js";import{V as Ke}from"./VDataTableServer-CzJsWLWM.js";import{V as F}from"./VDivider-CkTLoj78.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VList-Cw_cjN-u.js";import"./VCheckboxBtn-BqzdVZ1j.js";import"./VPagination-BecM98M1.js";const ae={1:"永信台北",2:"永信桃園",3:"永信台中",4:"永信高雄",5:"好漾台北",6:"好漾台中",7:"銳皇國際",8:"集睿創映"},Je={key:0},Ge={key:1},Qe={key:2},We={key:3,class:"py-3"},Xe={class:"text-center"},Ze={class:"d-flex flex-column gap-4"},et={class:"list-content"},tt={class:"list-content"},at={class:"list-content"},st={class:"list-content"},lt={class:"list-content"},rt={key:0,class:"list-content"},nt={class:"change-list"},ot={key:1},dt={__name:"auditLog",setup(ut){const De=Z(()=>M.value?"default":"small"),R=Oe(),{apiAuth:N}=qe(),{smAndUp:M,mdAndUp:se,lgAndUp:le}=Le(),_=f([]),I=f([]),K=f(!1),J=f(!1),q=f(""),A=f(""),z=f(!1),G=f([]),U=f(1),P=f(10),Q=f(0),O=f([{key:"createdAt",order:"desc"}]),we={class:"header-bg"},r=f({operatorId:null,targetId:null,action:"",targetModel:"",startDate:null,endDate:null}),E=f(!1),V=f(null),Ve=e=>{V.value=e,E.value=!0},ke=[{title:"創建",value:"創建"},{title:"修改",value:"修改"},{title:"刪除",value:"刪除"}],xe=[{title:"員工資料",value:"users"},{title:"部門資料",value:"departments"},{title:"設備資料",value:"assets"},{title:"招聘資料",value:"tempUsers"}],W=e=>({users:"員工資料",departments:"部門資料",assets:"資產資料",tempUsers:"招聘資料"})[e]||e,re=e=>{if(!e)return"";if(typeof e=="object"){if(e.name&&e.departmentId)return`${e.name} (${e.departmentId})`;if(e.name&&e.userId)return`${e.name} (${e.userId})`;if(e.name&&L.value==="tempUsers")return e.name}return e},Ce={name:"姓名",englishName:"英文名",email:"電子郵件",cellphone:"手機號碼",extNumber:"分機號碼",printNumber:"列印編號",department:"部門",companyId:"公司",company:"公司",companyName:"公司名稱",jobTitle:"職稱",role:"權限",employmentStatus:"任職狀態",gender:"性別",salary:"薪資",birthDate:"生日",hireDate:"入職日期",resignationDate:"離職日期",emergencyName:"緊急聯絡人",emergencyCellphone:"緊急聯絡電話",emergencyRelationship:"緊急聯絡人關係",permanentAddress:"戶籍地址",contactAddress:"聯絡地址",IDNumber:"身分證號碼",userId:"員工編號",departmentId:"部門編號",note:"備註",description:"描述",cowellAccount:"科威帳號",cowellPassword:"科威密碼",personalEmail:"個人Email",lastModifiedBy:"最後修改人",status:"狀態",isTransferred:"是否轉正",associatedUserId:"轉正後OBJ",effectiveDate:"生效日期",seatDescription:"座位描述"},B=[{title:"操作時間",align:"start",sortable:!0,key:"createdAt"},{title:"操作人員",align:"start",sortable:!0,key:"operatorId"},{title:"資料類型",align:"start",sortable:!0,key:"targetModel"},{title:"動作",align:"start",sortable:!0,key:"actionType"},{title:"操作對象",align:"start",sortable:!0,key:"targetId"},{title:"異動內容",align:"start",sortable:!1,key:"changes"},{title:"查看",align:"center",sortable:!1,key:"actions"}],_e=Z(()=>M.value?se.value?le.value?B:B.filter(e=>e.key!=="changes"):B.filter(e=>["createdAt","operatorId","targetModel","actionType","actions"].includes(e.key)):B.filter(e=>["createdAt","targetModel","actions"].includes(e.key))),Se=ye.debounce(async e=>{K.value=!0;try{const{data:t}=await N.get("/user/suggestions",{params:{search:e}});if(t.success)_.value=t.result;else if(e){const s={name:e,userId:e};_.value=[s],r.value.operatorId=s}else _.value=[]}catch(t){console.error("搜索操作人員失敗:",t),_.value=[]}finally{K.value=!1}},300),Te=ye.debounce(async e=>{J.value=!0;try{let t;switch(L.value){case"users":if(t=await N.get("/user/suggestions",{params:{search:e}}),t.data.success)I.value=t.data.result.map(s=>({_id:s._id,name:s.name,userId:s.userId}));else if(e){const s={name:e,userId:e};I.value=[s],r.value.targetId=s}else I.value=[];break;case"departments":if(t=await N.get("/department/all",{params:{search:e,searchFields:["name","departmentId"]}}),t.data.success)I.value=t.data.result.data.map(s=>({_id:s._id,name:s.name,departmentId:s.departmentId}));else if(e){const s={name:e,departmentId:e};I.value=[s],r.value.targetId=s}else I.value=[];break;case"tempUsers":if(t=await N.get("/tempuser/all",{params:{quickSearch:e,itemsPerPage:10}}),t.data.success)I.value=t.data.result.data.map(s=>({_id:s._id,name:s.name}));else if(e){const s={name:e};I.value=[s],r.value.targetId=s}else I.value=[];break}}catch(t){console.error("搜尋被操作對象失敗:",t),I.value=[]}finally{J.value=!1}},300),ne=()=>{var e;q.value="",_.value=[],((e=r.value.operatorId)==null?void 0:e.name)!==q.value&&(r.value.operatorId=null)},oe=()=>{var e;A.value="",I.value=[],((e=r.value.targetId)==null?void 0:e.name)!==A.value&&(r.value.targetId=null)},de=e=>{if(!e)return"-";const t=new Date(e),s=a=>String(a).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())} ${s(t.getHours())}:${s(t.getMinutes())}`},Me=e=>{if(!e)return"(無)";const t=new Date(e),s=a=>String(a).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`},ue=e=>{var t,s,a;return e?(t=e.operator)!=null&&t.name&&((s=e.operator)!=null&&s.userId)?`${e.operator.name} (${e.operator.userId})`:(a=e.operatorInfo)!=null&&a.name?`${e.operatorInfo.name}${e.operatorInfo.userId?` (${e.operatorInfo.userId})`:""}`:"系統":"-"},ie=e=>{var t,s,a,o,g,u,y,b,w,k;if(!e)return"-";if(e.targetData)switch(e.targetModel){case"users":{const d=e.targetData.name||"-",i=e.targetData.userId?` (${e.targetData.userId})`:"";return`${d}${i}`}case"departments":{const d=e.targetData.name||"-",i=e.targetData.departmentId?` (${e.targetData.departmentId})`:"",c=ae[e.targetData.companyId]||"";return`${d}${i}${c?` - ${c}`:""}`}default:return`${e.targetData.name||"-"}`}if(e.targetInfo)switch(e.targetModel){case"users":{const d=e.targetInfo.name||"-",i=e.targetInfo.userId?` (${e.targetInfo.userId})`:"";return`${d}${i}`}case"departments":{const d=e.targetInfo.name||"-",i=e.targetInfo.departmentId?` (${e.targetInfo.departmentId})`:"",c=ae[e.targetInfo.companyId]||"";return`${d}${i}${c?` - ${c}`:""}`}default:return`${e.targetInfo.name||"-"}`}if(e.changes)switch(e.targetModel){case"users":{const d=e.action==="刪除"?((t=e.changes.name)==null?void 0:t.from)||"-":((s=e.changes.name)==null?void 0:s.to)||"-",i=e.action==="刪除"?((a=e.changes.userId)==null?void 0:a.from)||"":((o=e.changes.userId)==null?void 0:o.to)||"";return`${d}${i?` (${i})`:""}`}case"departments":{const d=e.action==="刪除"?((g=e.changes.name)==null?void 0:g.from)||"-":((u=e.changes.name)==null?void 0:u.to)||"-",i=e.action==="刪除"?((y=e.changes.departmentId)==null?void 0:y.from)||"":((b=e.changes.departmentId)==null?void 0:b.to)||"",c=e.action==="刪除"?((w=e.changes.companyId)==null?void 0:w.from)||"":((k=e.changes.companyId)==null?void 0:k.to)||"",m=ae[c]||"";return`${d}${i?` (${i})`:""}${m?` - ${m}`:""}`}default:return"-"}return"-"},Ne=(e,t="")=>{if(e==="name"){if(t==="users")return"姓名";if(t==="departments")return"部門名稱"}return Ce[e]||e},ce=(e,t)=>e==null?"(無)":["englishName","IDNumber","name","userId","department","phoneNumber","cellphone","extNumber","printNumber","personalEmail","email","permanentAddress","contactAddress","emergencyName","emergencyPhoneNumber","emergencyCellphone","emergencyRelationship","jobTitle","cowellAccount","cowellPassword","YSRCAccount","YSRCPassword","YS168Account","YS168Password","note","salaryBank","salaryBankBranch","salaryAccountNumber"].includes(t)?e.toString():typeof e=="string"&&(o=>{const g=new Date(o);return g instanceof Date&&!isNaN(g)&&o.includes("-")})(e)?Me(e):e.toString(),X=e=>{if(!(e!=null&&e.changes))return[];const t=[],s=new Set;return Object.entries(e.changes).forEach(([a,o])=>{if(!o||typeof o!="object"||!("from"in o)&&!("to"in o)||s.has(a))return;if(a==="眷屬保險資料"){const b=o.from||[],w=o.to||[],k=Math.max(b.length,w.length),d=[];if(e.action==="創建")w.forEach((i,c)=>{d.push(`${a} - 眷屬 ${c+1}:`),d.push(` - 姓名: ${i.姓名}`),d.push(` - 關係: ${i.關係||"(無)"}`),d.push(` - 生日: ${i.生日||"(無)"}`),d.push(` - 身分證號: ${i.身分證號||"(無)"}`),d.push(` - 加保日期: ${i.加保日期||"(無)"}`),d.push(` - 退保日期: ${i.退保日期||"(無)"}`)});else for(let i=0;i<k;i++){const c=b[i]||{},m=w[i]||{};if(d.push(`${a} - 眷屬 ${i+1}:`),!(!c.姓名&&!m.姓名))if(!c.姓名&&m.姓名)d.push(" (新增)");else if(c.姓名&&!m.姓名)d.push(" (刪除)");else{let S=!1;c.姓名!==m.姓名&&(d.push(` - 姓名: ${c.姓名||"(無)"} → ${m.姓名||"(無)"}`),S=!0),c.關係!==m.關係&&(d.push(` - 關係: ${c.關係||"(無)"} → ${m.關係||"(無)"}`),S=!0),c.生日!==m.生日&&(d.push(` - 生日: ${c.生日||"(無)"} → ${m.生日||"(無)"}`),S=!0),c.身分證號!==m.身分證號&&(d.push(` - 身分證號: ${c.身分證號||"(無)"} → ${m.身分證號||"(無)"}`),S=!0),c.加保日期!==m.加保日期&&(d.push(` - 加保日期: ${c.加保日期||"(無)"} → ${m.加保日期||"(無)"}`),S=!0),c.退保日期!==m.退保日期&&(d.push(` - 退保日期: ${c.退保日期||"(無)"} → ${m.退保日期||"(無)"}`),S=!0),S||d.push(" (沒有變更)")}}d.length>0&&t.push(d.join(`
`)),s.add(a);return}const g=ce(o.from,a),u=ce(o.to,a),y=Ne(a,e.targetModel);if(e.action==="創建"){u!=="(無)"&&(t.push(`${y}: ${u}`),s.add(a));return}g!==u&&y&&(t.push(`${y}: ${g} → ${u}`),s.add(a))}),e.action==="創建"&&t.length===0&&t.push(`新增${W(e.targetModel)}`),t},Ae=()=>{r.value={operatorId:null,targetId:null,action:"",targetModel:"",startDate:null,endDate:null},ne(),oe(),j()},L=Z(()=>r.value.targetModel),j=async()=>{var e,t,s,a,o,g;if(r.value.startDate&&r.value.endDate){const u=new Date(r.value.startDate),y=new Date(r.value.endDate);if(u>y){R({text:"結束日期不能早於開始日期",snackbarProps:{color:"warning"}});return}}z.value=!0;try{const u={page:U.value,itemsPerPage:P.value,sortBy:((e=O.value[0])==null?void 0:e.key)||"createdAt",sortOrder:((t=O.value[0])==null?void 0:t.order)||"desc"};if(r.value.startDate){const b=new Date(r.value.startDate);b.setHours(0,0,0,0),u.startDate=b.toISOString()}if(r.value.endDate){const b=new Date(r.value.endDate);b.setHours(23,59,59,999),u.endDate=b.toISOString()}(s=r.value.operatorId)!=null&&s._id&&(u.operatorId=r.value.operatorId._id),(a=r.value.targetId)!=null&&a._id&&(u.targetId=r.value.targetId._id),r.value.action&&(u.action=r.value.action),r.value.targetModel&&(u.targetModel=r.value.targetModel);const y=await N.get("/auditlog/all",{params:u});if(y.data.success){const{data:b,totalItems:w}=y.data.result;G.value=b,Q.value=w;const k=Math.ceil(w/P.value);k>0&&U.value>k&&(U.value=k,await j())}else throw new Error(y.data.message)}catch(u){console.error("搜尋失敗:",u),R({text:((g=(o=u==null?void 0:u.response)==null?void 0:o.data)==null?void 0:g.message)||"搜尋時發生錯誤",snackbarProps:{color:"error"}}),G.value=[],Q.value=0}finally{z.value=!1}},Ue=async({page:e,itemsPerPage:t,sortBy:s})=>{U.value=e,P.value=t,(s==null?void 0:s.length)>0&&(O.value=s),await j()};return pe([()=>r.value.startDate,()=>r.value.endDate],([e,t])=>{if(e&&t){const s=new Date(e),a=new Date(t);s>a&&(R({text:"結束日期不能早於開始日期",snackbarProps:{color:"warning"}}),r.value.endDate=null)}}),pe(()=>r.value.targetModel,e=>{r.value.targetId=null,A.value="",I.value=[]}),je(async()=>{await j()}),(e,t)=>{const s=ze("v-date-input");return $(),D(ee,null,[l(Re,{"max-width":"2500"},{default:n(()=>[l(T,{class:"pt-md-5"},{default:n(()=>[l(v,{cols:"12",lg:"4",xl:"3"},{default:n(()=>[l(T,null,{default:n(()=>[l(v,{cols:"12",class:"mt-1 px-lg-10"},{default:n(()=>[l(me,{class:"elevation-4 rounded-lg py-4 py-sm-8 px-4 px-sm-4 px-xl-8"},{default:n(()=>[l(Ee,{class:"font-weight-bold d-flex align-center"},{default:n(()=>t[14]||(t[14]=[x(" 搜尋條件 ")])),_:1}),l(ge,{class:"pa-2"},{default:n(()=>[l(T,null,{default:n(()=>[l(v,{cols:"12",sm:"6",lg:"12"},{default:n(()=>[l(he,{modelValue:r.value.operatorId,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value.operatorId=a),"search-input":q.value,"onUpdate:searchInput":t[1]||(t[1]=a=>q.value=a),items:_.value,loading:K.value,label:"操作人員","return-object":"","item-props":a=>({title:`${a.name} (${a.userId})`,value:a}),variant:"outlined",density:"compact","hide-details":"",clearable:"",creatable:"","create-filter":`(item, queryText, itemText) =>
    item.name.toLowerCase().indexOf(queryText.toLowerCase()) > -1 ||
    item.userId.toLowerCase().indexOf(queryText.toLowerCase()) > -1`,"onUpdate:search":C(Se),"onClick:clear":ne,onCreate:t[2]||(t[2]=a=>{const o={name:a,userId:a};_.value.value.push(o),r.value.value.operatorId=o})},fe({selection:n(({item:a})=>{var o;return[x(h((o=a==null?void 0:a.props)==null?void 0:o.title),1)]}),_:2},[C(M)?{name:"append-inner",fn:n(()=>[l(be,{location:"top","close-delay":"200"},{activator:n(({props:a})=>[l(H,ve(a,{icon:"mdi-information",size:"18"}),null,16)]),default:n(()=>[t[15]||(t[15]=x(" 輸入員編、姓名查詢 "))]),_:1})]),key:"0"}:void 0]),1032,["modelValue","search-input","items","loading","item-props","onUpdate:search"])]),_:1}),l(v,{cols:"12",sm:"6",lg:"12"},{default:n(()=>[l($e,{modelValue:r.value.targetModel,"onUpdate:modelValue":t[3]||(t[3]=a=>r.value.targetModel=a),items:xe,label:"資料類型","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1}),l(v,{cols:"12",sm:"6",lg:"12"},{default:n(()=>[l(he,{modelValue:r.value.targetId,"onUpdate:modelValue":t[4]||(t[4]=a=>r.value.targetId=a),"search-input":A.value,"onUpdate:searchInput":t[5]||(t[5]=a=>A.value=a),items:I.value,loading:J.value,label:L.value?"操作對象":"操作對象( 請先選擇資料類型 )",disabled:!L.value,"return-object":"","item-props":a=>({title:re(a),value:a}),variant:"outlined",density:"compact","hide-details":"",clearable:"",creatable:"","create-filter":`(item, queryText, itemText) =>
    item.name.toLowerCase().indexOf(queryText.toLowerCase()) > -1 ||
    (item.userId && item.userId.toLowerCase().indexOf(queryText.toLowerCase()) > -1) ||
    (item.departmentId && item.departmentId.toLowerCase().indexOf(queryText.toLowerCase()) > -1)`,"onUpdate:search":C(Te),"onClick:clear":oe,onCreate:t[6]||(t[6]=a=>{let o;switch(L.value.value){case"users":o={name:a,userId:a};break;case"departments":o={name:a,departmentId:a};break}I.value.value.push(o),r.value.value.targetId=o})},fe({selection:n(({item:a})=>[x(h(re(a.props.value)),1)]),_:2},[C(M)?{name:"append-inner",fn:n(()=>[l(be,{location:"top","close-delay":"200"},{activator:n(({props:a})=>[l(H,ve(a,{icon:"mdi-information",size:"18"}),null,16)]),default:n(()=>[t[16]||(t[16]=x(" 輸入員編、姓名、部門編號、部門名稱、設備編號、設備名稱查詢 "))]),_:1})]),key:"0"}:void 0]),1032,["modelValue","search-input","items","loading","label","disabled","item-props","onUpdate:search"])]),_:1}),l(v,{cols:"12",sm:"6",lg:"12"},{default:n(()=>[l($e,{modelValue:r.value.action,"onUpdate:modelValue":t[7]||(t[7]=a=>r.value.action=a),items:ke,label:"操作類型","item-title":"title","item-value":"value",variant:"outlined",density:"compact","hide-details":"",clearable:""},null,8,["modelValue"])]),_:1}),l(v,{cols:"12",sm:"6",lg:"12"},{default:n(()=>[l(s,{modelValue:r.value.startDate,"onUpdate:modelValue":t[8]||(t[8]=a=>r.value.startDate=a),label:"開始日期","prepend-icon":"",variant:"outlined",density:"compact","hide-details":"",clearable:"","cancel-text":"取消","ok-text":"確認"},null,8,["modelValue"])]),_:1}),l(v,{cols:"12",sm:"6",lg:"12"},{default:n(()=>[l(s,{modelValue:r.value.endDate,"onUpdate:modelValue":t[9]||(t[9]=a=>r.value.endDate=a),label:"結束日期","prepend-icon":"",variant:"outlined",density:"compact","hide-details":"",clearable:"","cancel-text":"取消","ok-text":"確認",min:r.value.startDate},null,8,["modelValue","min"])]),_:1})]),_:1}),l(T,null,{default:n(()=>[l(v,{cols:"12",class:"d-flex justify-end gap-2"},{default:n(()=>[l(T,{class:"d-flex justify-space-between"},{default:n(()=>[l(v,{cols:"3"},{default:n(()=>[l(te,{color:"grey",width:"40",block:"",onClick:Ae},{default:n(()=>[l(H,null,{default:n(()=>t[17]||(t[17]=[x("mdi-refresh")])),_:1})]),_:1})]),_:1}),l(v,{cols:"9",class:"ps-0"},{default:n(()=>[l(te,{color:"blue-grey-darken-1","prepend-icon":"mdi-magnify",loading:z.value,block:"",onClick:j},{default:n(()=>t[18]||(t[18]=[x(" 搜尋 ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(v,{cols:"12",lg:"8",xl:"9",class:"px-6 ps-lg-4 pe-lg-12 mb-6"},{default:n(()=>[l(T,{class:"elevation-4 rounded-lg py-4 py-sm-8 px-1 px-sm-4 px-md-10 mt-1 bg-white"},{default:n(()=>[l(v,{cols:"12",class:"ps-4 pb-sm-6"},{default:n(()=>t[19]||(t[19]=[p("h3",null,"異動紀錄",-1)])),_:1}),l(v,{cols:"12"},{default:n(()=>[l(Ke,{"items-per-page":P.value,"onUpdate:itemsPerPage":t[10]||(t[10]=a=>P.value=a),"sort-by":O.value,"onUpdate:sortBy":t[11]||(t[11]=a=>O.value=a),items:G.value,headers:_e.value,loading:z.value,"items-length":Q.value,"items-per-page-options":[10,20,50,100],page:U.value,"header-props":we,hover:"",density:"compact",class:"rounded-ts-lg rounded-te-lg","onUpdate:options":Ue},{item:n(({item:a,index:o})=>[p("tr",{class:Be({"odd-row":o%2===0,"even-row":o%2!==0})},[p("td",null,h(de(a.createdAt)),1),C(M)?($(),D("td",Je,h(ue(a)),1)):Y("",!0),p("td",null,h(W(a.targetModel)),1),C(M)?($(),D("td",Ge,h(a.action),1)):Y("",!0),C(se)?($(),D("td",Qe,h(ie(a)),1)):Y("",!0),C(le)?($(),D("td",We,[($(!0),D(ee,null,Ie(X(a),(g,u)=>($(),D("div",{key:u},h(g),1))),128))])):Y("",!0),p("td",Xe,[l(H,{icon:"mdi-book-open-variant-outline",color:"blue-grey-darken-3",size:"small",class:"my-4",onClick:g=>Ve(a)},null,8,["onClick"])])],2)]),_:1},8,["items-per-page","sort-by","items","headers","loading","items-length","page"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(Fe,{modelValue:E.value,"onUpdate:modelValue":t[13]||(t[13]=a=>E.value=a),width:"600"},{default:n(()=>[l(me,{class:"pa-4"},{default:n(()=>[t[27]||(t[27]=p("div",{class:"ps-6 pt-4 pb-1 pb-sm-3 card-title"}," 異動詳細資料 ",-1)),l(ge,null,{default:n(()=>[l(T,null,{default:n(()=>[l(v,{cols:"12"},{default:n(()=>{var a,o,g;return[p("div",Ze,[p("div",null,[t[20]||(t[20]=p("div",{class:"text-grey-darken-1 list-title"}," 操作時間 ",-1)),p("div",et,h(de((a=V.value)==null?void 0:a.createdAt)),1)]),l(F,{class:"my-2"}),p("div",null,[t[21]||(t[21]=p("div",{class:"text-grey-darken-1 list-title"}," 操作人員 ",-1)),p("div",tt,h(ue(V.value)),1)]),l(F,{class:"my-2"}),p("div",null,[t[22]||(t[22]=p("div",{class:"text-grey-darken-1 list-title"}," 操作對象 ",-1)),p("div",at,h(ie(V.value)),1)]),l(F,{class:"my-2"}),p("div",null,[t[23]||(t[23]=p("div",{class:"text-grey-darken-1 list-title"}," 操作類型 ",-1)),p("div",st,h((o=V.value)==null?void 0:o.action),1)]),l(F,{class:"my-2"}),p("div",null,[t[24]||(t[24]=p("div",{class:"text-grey-darken-1 list-title"}," 資料類型 ",-1)),p("div",lt,h(W((g=V.value)==null?void 0:g.targetModel)),1)]),l(F,{class:"my-2"}),p("div",null,[t[25]||(t[25]=p("div",{class:"text-grey-darken-1 list-title"}," 異動內容 ",-1)),X(V.value).length>0?($(),D("div",rt,[p("ul",nt,[($(!0),D(ee,null,Ie(X(V.value),(u,y)=>($(),D("li",{key:y,class:"py-2"},h(u),1))),128))])])):($(),D("div",ot," 無異動內容 "))])])]}),_:1})]),_:1})]),_:1}),l(He,null,{default:n(()=>[l(Ye),l(te,{color:"grey-darken-1",variant:"outlined",size:De.value,onClick:t[12]||(t[12]=a=>E.value=!1)},{default:n(()=>t[26]||(t[26]=[x(" 關閉 ")])),_:1},8,["size"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},wt=Pe(dt,[["__scopeId","data-v-34791f2e"]]);export{wt as default};
