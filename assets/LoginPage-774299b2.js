import{s as t,L as b,u as f,r as d,j as o,l as j}from"./index-9a49ec36.js";import{F as $,a as S,E as v,b as y}from"./formik.esm-379ce80f.js";import{c as I,a as p}from"./index.esm-222d2eb8.js";import{e as k,s as E,a as P,h as F}from"./cross-85b421a0.js";import{p as L,a as z,b as Y}from"./bg-mob@1x-9dd97546.js";const C=t.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  min-height: 425px;
  background-color: ${e=>e.theme.background.wight};
  border: 1px solid ${e=>e.theme.border.blue};
  border-radius: ${e=>e.theme.border.radius};
  box-shadow: ${e=>e.theme.border.shadow};

  @media screen and (min-width: 768px) {
    margin-top: 82px;
    //margin-bottom: 564px;
    width: 608px;
    min-height: 481px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 91px;
    // margin-bottom: 141px;
  }
`,T=t($)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,q=t.h2`
  color: ${e=>e.theme.color.main};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.44px;
  margin-top: 40px;
  //margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    //margin-bottom: 40px;
    font-size: 36px;
  }
`,m=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,c=t(S)`
  padding-left: 16px;
  margin-top: 14px;
  width: 248px;
  height: 48px;
  border-radius: ${e=>e.theme.border.radius};
  cursor: pointer;
  outline: none;
  border: ${e=>e.border||e.theme.border.blue};

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
`,D=t.span`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);

  @media screen and (min-width: 768px) {
    top: 65%;
    transform: translateY(-70%);
  }
`,M=t.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;

  color: ${e=>e.icon||e.theme.color.error};

  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    top: 65%;
    transform: translateY(-70%);
  }
`,R=t.span`
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
`,l=t(v)`
  color: red;
  margin-top: 4px;
`,B=t.button`
  width: 256px;
  height: 48px;
  margin-top: 40px;
  margin-bottom: 8px;
  background-color: ${e=>e.theme.color.blue};
  border: none;
  border-radius: ${e=>e.theme.border.radius};

  color: ${e=>e.theme.color.wight};
  font-size: 20px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    width: 458px;
    margin-top: 60px;
    margin-bottom: 20px;
  }
`,H=t(b)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,V=t.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,A=I().shape({email:p().required().min(6).email(),password:p().required().min(4)}),G={email:"",password:""},J=()=>{const e=f(),x=({email:r,password:i},{resetForm:n})=>{e(j({email:r,password:i})).then(a=>!a.error&&n())},[s,h]=d.useState(!1),[g,u]=d.useState(""),w=()=>{h(r=>!r),u("")};return o.jsx(y,{initialValues:G,onSubmit:x,validationSchema:A,children:({errors:r,touched:i,values:n,isSubmitting:a})=>o.jsx(C,{children:o.jsxs(T,{autoComplete:"off",children:[o.jsx(q,{children:"Login"}),o.jsx("div",{children:r.password}),o.jsxs(m,{children:[o.jsx(c,{name:"email",placeholder:"Email",value:n.email,border:r.email&&i.email&&"1px solid red"}),i.email&&r.email&&o.jsx(M,{color:"red",children:o.jsx("img",{src:k,alt:"error",color:"red"})})]}),o.jsx(l,{name:"email",component:"div"}),o.jsxs(m,{children:[o.jsx(c,{type:s?"text":"password",name:"password",placeholder:"Password",value:n.password,error:r.password||g,border:r.password&&i.password&&"1px solid red"}),!r.password&&o.jsx(R,{children:o.jsx("img",{src:E,alt:"success"})}),o.jsx(D,{onClick:w,children:o.jsx("img",{src:s?P:F,alt:s?"Show password":"Hide password"})})]}),o.jsx(l,{name:"password",component:"div"}),o.jsx(B,{type:"submit",disabled:a,children:"Login"}),o.jsxs(H,{to:"/register",children:["Does not have an account? ",o.jsx(V,{children:"Registration"})]})]})})})},K=t.div`
  background-image: url(${L});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${z});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${Y});
  }
`,X=()=>o.jsx(K,{children:o.jsx(J,{})});export{X as default};
