import{s as t,L as f,u as $,r as d,j as o,l as j}from"./index-9f12a56f.js";import{F as S,a as v,E as y,b as E}from"./formik.esm-355f93b5.js";import{c as P,a as p}from"./index.esm-72c53750.js";import{e as k,s as I,h as z}from"./cross-9d39ef07.js";import{p as F,a as L,b as Y}from"./bg-mob@1x-9dd97546.js";const C=t.div`
  margin-top: 44px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 88px;
  width: 280px;
  min-height: 425px;
  background-color: ${e=>e.theme.background.wight};
  border: 1px solid ${e=>e.theme.border.blue};
  border-radius: ${e=>e.theme.border.radius};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    margin-top: 82px;
    margin-bottom: 564px;
    width: 608px;
    min-height: 481px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 91px;
    margin-bottom: 141px;
  }
`,q=t(S)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,T=t.h2`
  color: ${e=>e.theme.color.main};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.44px;
  margin-top: 40px;
  margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 8px;
    font-size: 36px;
  }
`,m=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,l=t(v)`
  padding-left: 16px;
  margin-top: 14px;
  width: 248px;
  height: 48px;
  font-size: 16px;
  border-radius: ${e=>e.theme.border.radius};
  border: ${e=>e.border||e.theme.border.blue};
  color: ${e=>e.theme.color.grey};
  cursor: pointer;
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
`,B=t.span`
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
`,D=t.span`
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
`;t.span`
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
`;const c=t(y)`
  color: red;
  margin-top: 4px;
`,M=t.button`
  width: 256px;
  height: 48px;
  margin-top: 110px;
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
`,R=t(f)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,H=t.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,V=P().shape({email:p().required("Email is required").email("Email is invalid"),password:p().min(6,"Password must be at least 6 characters").max(16,"Password can not have more then 16 characters").required("Password is required")}),A={email:"",password:""},G=()=>{const e=$(),x=({email:r,password:i},{resetForm:n})=>{e(j({email:r,password:i})).then(s=>!s.error&&n())},[a,h]=d.useState(!1),[g,u]=d.useState(""),w=()=>{h(r=>!r),u("")};return o.jsx(E,{initialValues:A,onSubmit:x,validationSchema:V,children:({errors:r,touched:i,values:n,handleBlur:s,isSubmitting:b})=>o.jsx(C,{children:o.jsxs(q,{autoComplete:"off",children:[o.jsx(T,{children:"Login"}),o.jsxs(m,{children:[o.jsx(l,{name:"email",placeholder:"Email",value:n.email,onBlur:s,border:r.email&&i.email&&"1px solid red"}),i.email&&r.email&&o.jsx(D,{children:o.jsx("img",{src:k,alt:"error"})})]}),o.jsx(c,{name:"email",component:"div"}),o.jsxs(m,{children:[o.jsx(l,{type:a?"text":"password",name:"password",placeholder:"Password",value:n.password,error:r.password||g,border:r.password&&i.password&&"1px solid red"}),o.jsx(B,{onClick:w,children:o.jsx("img",{src:a?I:z,alt:a?"Show password":"Hide password"})})]}),o.jsx(c,{name:"password",component:"div"}),o.jsx(M,{type:"submit",disabled:b,children:"Login"}),o.jsxs(R,{to:"/register",children:["Does not have an account? ",o.jsx(H,{children:"Registration"})]})]})})})},J=t.div`
  background-image: url(${F});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${L});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${Y});
  }
`,W=()=>o.jsx(J,{children:o.jsx(G,{})});export{W as default};
