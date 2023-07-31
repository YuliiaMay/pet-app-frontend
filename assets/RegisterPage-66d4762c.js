import{s,L as F,u as z,r as d,j as o,a as Y}from"./index-13f030ea.js";import{F as R,a as T,E as q,b as L}from"./formik.esm-fc9a59d0.js";import{c as B,a as m,b as H}from"./index.esm-1d12f6a3.js";import{e as M,s as g,a as w,h as u}from"./cross-e96e1fa9.js";import{p as A,a as D,b as N}from"./bg-mob@1x-9dd97546.js";const O=s.div`
  margin-top: 42px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  min-height: 479px;
  background-color: ${e=>e.theme.background.wight};
  border: 1px solid ${e=>e.theme.border.blue};
  border-radius: ${e=>e.theme.border.radius};
  box-shadow: ${e=>e.theme.border.shadow};

  @media screen and (min-width: 768px) {
    margin-top: 88px;
    //margin-bottom: 416px;
    width: 608px;
    min-height: 629px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 91px;
    //margin-bottom: 75px;
    min-height: 617px;
  }
`,V=s(R)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,G=s.h2`
  color: ${e=>e.theme.color.main};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.44px;
  margin-top: 26px;
  //margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    font-size: 36px;
  }
`,h=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,c=s(T)`
  padding-left: 16px;
  margin-top: 14px;
  width: 224px;
  height: 48px;
  border-radius: ${e=>e.theme.border.radius};
  outline: none;
  border: ${e=>e.border||e.theme.border.blue};
  outline: none;

  &:hover,
  &:focus {
    border: 2px solid ${e=>e.theme.color.success};
    color: ${e=>e.theme.color.success};
  }

  &::placeholder {
    color: ${e=>e.theme.color.grey};
    font-size: 16px;
    line-height: 0.026;
    letter-spacing: 0.64px;
  }
  @media screen and (min-width: 768px) {
    width: 458px;
    height: 48px;
    margin-top: 32px;
  }
`,b=s.span`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  /* color: ${e=>e.error?e.theme.color.error:e.theme.color.success}; */
  right: ${e=>e.position||(e.position?"47px":"20px")};
  //right: ${e=>e.position?"47px":"20px"};

  @media screen and (min-width: 768px) {
    top: 65%;
    transform: translateY(-70%);
  }
`,J=s.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;

  color: ${e=>e.icon||e.theme.color.error};
  //border: ${e=>e.border||e.theme.border.blue};

  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    top: 65%;
    transform: translateY(-70%);
  }
`,f=s.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${e=>e.theme.color.success};
  position: absolute;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    top: 72%;
    transform: translateY(-70%);
  }
`,p=s(q)`
  color: red;
`,K=s.button`
  width: 256px;
  height: 48px;
  margin-top: 40px;
  margin-bottom: 8px;
  background-color: ${e=>e.theme.color.blue};
  border: none;
  border-radius: ${e=>e.theme.border.radius};

  color: ${e=>e.theme.color.wight};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;

  button:disabled {
    opacity: 0.35;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
    height: 48px;
    padding: 10px 20px;
    margin-top: 52px;
    margin-bottom: 16px;
  }
`,Q=s(F)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,U=s.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,W=B().shape({name:m().required(),email:m().required().min(6).email(),password:m().min(4).required(),confirmPassword:m().required().min(4).oneOf([H("password"),null],"Passwords must match")}),X={name:"",email:"",password:"",confirmPassword:""},Z=()=>{const e=z(),j=({name:r,email:t,password:n},{resetForm:a})=>{e(Y({name:r,email:t,password:n})).then(i=>!i.error&&a())},[l,$]=d.useState(!1),[x,P]=d.useState(!1),[S,y]=d.useState(""),[v,C]=d.useState(""),k=()=>{$(r=>!r),y("")},E=()=>{P(r=>!r),C("")};return o.jsx(L,{initialValues:X,onSubmit:j,validationSchema:W,children:({errors:r,touched:t,values:n,handleChange:a,handleBlur:i,isSubmitting:I})=>o.jsx(O,{children:o.jsxs(V,{autoComplete:"off",children:[o.jsx(G,{children:"Registration"}),o.jsx("div",{children:r.password}),o.jsx(c,{type:"text",name:"name",placeholder:"Name",value:n.name,onChange:a,onBlur:i,border:r.name&&t.name&&"1px solid red"}),o.jsx(p,{name:"name",component:"div"}),o.jsxs(h,{children:[o.jsx(c,{type:"text",name:"email",value:n.email,placeholder:"Email",onChange:a,onBlur:i,border:r.email&&t.email&&"1px solid red"}),t.email&&r.email&&o.jsx(J,{color:"red",children:o.jsx("img",{src:M,alt:"error",color:"red"})})]}),o.jsx(p,{name:"email",component:"div"}),o.jsxs(h,{children:[o.jsx(c,{type:l?"text":"password",name:"password",value:n.password,placeholder:"Password",onBlur:i,error:r.password||S,border:r.password&&t.password&&"1px solid red"}),!r.password&&o.jsx(f,{children:o.jsx("img",{src:g,alt:"success"})}),o.jsx(b,{onClick:k,children:o.jsx("img",{src:l?w:u,alt:l?"Show password":"Hide password"})})]}),o.jsx(p,{name:"password",component:"div"}),o.jsxs(h,{children:[o.jsx(c,{type:x?"text":"password",name:"confirmPassword",value:n.confirmPassword,placeholder:"Confirm password",onChange:a,onBlur:i,border:r.confirmPassword&&t.confirmPassword&&"1px solid red",error:r.confirmPassword||v}),!r.confirmPassword&&o.jsx(f,{children:o.jsx("img",{src:g,alt:"success"})}),o.jsx(b,{onClick:E,children:o.jsx("img",{src:x?w:u,alt:x?"Show confirmPassword":"Hide confirmPassword"})})]}),o.jsx(p,{name:"confirmPassword",component:"div"}),o.jsx(K,{type:"submit",disabled:I,children:"Registration"}),o.jsxs(Q,{to:"/login",children:["Already have a account? ",o.jsx(U,{children:"Login"})]})]})})})},_=s.div`
  background-image: url(${A});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${D});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${N});
  }
`,ne=()=>o.jsx(_,{children:o.jsx(Z,{})});export{ne as default};
