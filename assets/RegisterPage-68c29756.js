import{j as e,L as l,r as p}from"./index-64898a0a.js";import{c as x,a as s,F as h,b as u,d as a,E as r}from"./index.esm-ca9edf0f.js";import{u as j}from"./useDispatch-1a8a7ec0.js";const w=x().shape({name:s().required(),email:s().min(6).email().required(),password:s().required(),confirmPassword:s().required()}),f={name:"",email:"",password:"",confirmPassword:""},g=()=>{const o=j(),n=({name:i,email:t,password:m},{resetForm:d})=>{o(p({name:i,email:t,password:m})).then(c=>!c.error&&d())};return e.jsx(h,{initialValues:f,onSubmit:n,validationSchema:w,children:e.jsxs(u,{autoComplete:"off",children:[e.jsx(a,{type:"text",name:"name",placeholder:"Name"}),e.jsx(r,{name:"name",component:"div"}),e.jsx(a,{type:"text",name:"email",placeholder:"Email"}),e.jsx(r,{name:"email",component:"div"}),e.jsx(a,{type:"password",name:"password",placeholder:"Password"}),e.jsx(r,{name:"password",component:"div"}),e.jsx(a,{type:"password",name:"confirmPassword",placeholder:"confirmPassword"}),e.jsx(r,{name:"confirmPassword",component:"div"}),e.jsx("button",{type:"submit",children:"Registration"}),e.jsxs(l,{to:"/login",children:["Already have a account? ",e.jsx("span",{children:"Login"})]})]})})},F=()=>e.jsx(e.Fragment,{children:e.jsx(g,{})});export{F as default};
