import{j as e,L as d,l}from"./index-537169cc.js";import{c as p,a as s,F as h,b as u,d as a,E as o}from"./index.esm-2ae21385.js";import{u as x}from"./useDispatch-c3f4068a.js";const j=p().shape({email:s().required(),password:s().required()}),g={email:"",password:""},f=()=>{const r=x(),t=({email:n,password:i},{resetForm:m})=>{r(l({email:n,password:i})).then(c=>!c.error&&m())};return e.jsx(h,{initialValues:g,onSubmit:t,validationSchema:j,children:e.jsxs(u,{autoComplete:"off",children:[e.jsx(a,{type:"text",name:"email",placeholder:"Email"}),e.jsx(o,{name:"email",component:"div"}),e.jsx(a,{type:"password",name:"password",placeholder:"Password"}),e.jsx(o,{name:"password",component:"div"}),e.jsx("button",{type:"submit",children:"Login"}),e.jsxs(d,{to:"/register",children:["Does not have an account? ",e.jsx("span",{children:"Registration"})]})]})})},L=()=>e.jsx(e.Fragment,{children:e.jsx(f,{})});export{L as default};
