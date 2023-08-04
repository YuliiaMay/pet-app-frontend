import{s as r,L as $,u as S,r as d,j as o,l as v}from"./index-49ee36c7.js";import{F as y,a as E,E as P,b as k}from"./formik.esm-5dbe6933.js";import{c as F,a as m}from"./index.esm-698ec7a7.js";import{e as I,s as L,h as z}from"./cross-4657cc6b.js";import{p as Y,a as C,b as q}from"./bg-mob@1x-9dd97546.js";const M=r.div`
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
`,T=r(y)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,B=r.h2`
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
`,l=r.div`
  position: relative;
  display: flex;
  align-items: center;
`,c=r(E)`
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
    color: ${e=>e.theme.color.grey};
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
`,D=r.span`
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
`,R=r.span`
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
`;r.span`
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
`;const x=r(P)`
  color: red;
  margin-top: 4px;
`,H=r.button`
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
`,V=r($)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,A=r.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,G=F().shape({email:m().required("Email is required").email("Email is invalid"),password:m().min(6,"Password must be at least 6 characters").max(16,"Password can not have more then 16 characters").required("Password is required")}),J={email:"",password:""},K=()=>{const e=S(),[n,h]=d.useState(!1),[g,u]=d.useState(""),[w,p]=d.useState(""),b=({email:t,password:i},{resetForm:a})=>{e(v({email:t,password:i})).then(s=>{s.error?p("Login failed. Please try again later."):(p(""),a())})},f=()=>{h(t=>!t),u("")};return o.jsx(k,{initialValues:J,onSubmit:b,validationSchema:G,children:({errors:t,touched:i,values:a,handleBlur:s,isSubmitting:j})=>o.jsx(M,{children:o.jsxs(T,{autoComplete:"off",children:[o.jsx(B,{children:"Login"}),o.jsxs(l,{children:[o.jsx(c,{name:"email",placeholder:"Email",value:a.email,onBlur:s,border:t.email&&i.email&&"1px solid red"}),i.email&&t.email&&o.jsx(R,{children:o.jsx("img",{src:I,alt:"error"})})]}),o.jsx(x,{name:"email",component:"div"}),o.jsxs(l,{children:[o.jsx(c,{type:n?"text":"password",name:"password",placeholder:"Password",value:a.password,error:t.password||g,border:t.password&&i.password&&"1px solid red"}),o.jsx(D,{onClick:f,children:o.jsx("img",{src:n?L:z,alt:n?"Show password":"Hide password"})})]}),o.jsx(x,{name:"password",component:"div"}),o.jsxs(o.Fragment,{children:[o.jsx(H,{type:"submit",disabled:j,children:"Login"}),t&&o.jsxs("div",{children:[w," "]})]}),o.jsxs(V,{to:"/register",children:["Does not have an account? ",o.jsx(A,{children:"Registration"})]})]})})})},N=r.div`
  background-image: url(${Y});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${C});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${q});
  }
`,Z=()=>o.jsx(N,{children:o.jsx(K,{})});export{Z as default};
