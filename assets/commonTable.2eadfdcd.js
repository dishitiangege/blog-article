import{_ as e,bn as t,f as a,o as l,c as o,a as i,e as s,m as n,p as c,t as d,u as r,l as p,h as u,q as m,i as f,E as b,j as h}from"./index.c4992b69.js";import{S as g,b as _,E as v,a as y}from"./el-table-column.86b734c2.js";import"./el-checkbox.85bc3be8.js";import{d as A}from"./formatter.91a3b54e.js";const k=e({__name:"commonTable",props:{title:String,data:String,getApi:String,addApi:String,delApi:String},setup(e){const k=e,C=t(),S=a(!1),V=a("");let j=!1;const x=()=>{j||(j=!0,S.value=!1,u(k.addApi,{name:V.value}).then((e=>{C[k.getApi](),V.value="",m.success("保存成功"),j=!1})).catch((()=>{j=!1})))};let $=[];const T=e=>{$=e},w=()=>{let e=$.length;if(e>0){let t=$.map((e=>e._id));_.confirm(`确定要删除这 ${e} 项吗？`,"彻底删除！！！",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((()=>{j||(j=!0,u(k.delApi,{ids:t}).then((e=>{C[k.getApi](),m.success("删除成功"),j=!1})).catch((()=>{j=!1})))})).catch((()=>{}))}};return(e,t)=>{const a=f,u=v,m=y,_=b,j=h;return l(),o("div",{class:"container"},[i("div",{class:"tools"},[s(a,{onClick:w,type:"danger"},{default:n((()=>[c("删除选中")])),_:1}),s(a,{onClick:t[0]||(t[0]=e=>S.value=!0),type:"primary"},{default:n((()=>[c(d(`新增${k.title}`),1)])),_:1}),s(a,{onClick:r(C)[k.getApi],icon:r(g),circle:"",style:{float:"right"}},null,8,["onClick","icon"])]),s(m,{data:r(C)[k.data],onSelectionChange:T,style:{width:"100%"}},{default:n((()=>[s(u,{type:"selection",width:"55"}),s(u,{prop:"name",label:`${k.title}名称`},null,8,["label"]),s(u,{prop:"created_date",label:"创建日期",formatter:r(A)},null,8,["formatter"])])),_:1},8,["data"]),s(j,{modelValue:r(S),"onUpdate:modelValue":t[3]||(t[3]=e=>p(S)?S.value=e:null),title:`新增${k.title}`},{footer:n((()=>[s(a,{onClick:t[2]||(t[2]=e=>S.value=!1)},{default:n((()=>[c("取消")])),_:1}),s(a,{type:"primary",disabled:!r(V),onClick:x},{default:n((()=>[c("保存")])),_:1},8,["disabled"])])),default:n((()=>[s(_,{modelValue:r(V),"onUpdate:modelValue":t[1]||(t[1]=e=>p(V)?V.value=e:null),placeholder:`在这里输入${k.title}名称`},null,8,["modelValue","placeholder"])])),_:1},8,["modelValue","title"])])}}},[["__scopeId","data-v-f4d406eb"]]);export{k as c};
