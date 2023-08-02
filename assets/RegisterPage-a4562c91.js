import{s as t,L as Y,G as R,P as B,a as w,j as o,I as G,u as O,r as p,b as H}from"./index-43eade4e.js";import{F as N,a as V,E as X,b as A}from"./formik.esm-e3170c16.js";import{c as D,a as m,b as W}from"./index.esm-7efbc4ea.js";import{M as J}from"./ModalComponents-6cad8c44.js";import{e as K,s as b,a as j,h as P}from"./cross-b2b587dc.js";import{p as Q,a as U,b as Z}from"./bg-mob@1x-9dd97546.js";const _=t.div`
  margin-top: 42px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  width: 280px;
  min-height: 479px;
  background-color: ${e=>e.theme.background.wight};
  border: 1px solid ${e=>e.theme.border.blue};
  border-radius: ${e=>e.theme.border.radius};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    margin-top: 88px;
    margin-bottom: 416px;
    width: 608px;
    min-height: 629px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 91px;
    margin-bottom: 75px;
    min-height: 617px;
  }
`,ee=t(N)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,oe=t.h2`
  color: ${e=>e.theme.color.main};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.44px;
  margin-top: 26px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 40px;
    font-size: 40px;
  }
`,g=t.div`
  position: relative;
  display: flex;
  align-items: center;
  //margin-bottom: 4px;
`,x=t(V)`
  padding-left: 16px;
  width: 224px;
  height: 48px;
  font-size: 16px;
  border-radius: ${e=>e.theme.border.radius};
  outline: none;
  border: ${e=>e.border||e.theme.border.blue};
  color: ${e=>e.theme.color.grey};

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
`,y=t.span`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);

  //right: ${e=>e.position||(e.position?"47px":"20px")};
  //right: ${e=>e.position?"47px":"20px"};

  @media screen and (min-width: 768px) {
    top: 65%;
    transform: translateY(-70%);
  }
`,te=t.span`
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
`,$=t.span`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translateY(-50%);
  pointer-events: none;
  width: 30px;
  height: 30px;
  //opacity: ${e=>e.isVisible?"1":"0"};

  @media screen and (min-width: 768px) {
    top: 72%;
    transform: translateY(-70%);
  }
`;t`
position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  
 
  //right: ${e=>e.position||(e.position?"47px":"20px")};
`;const h=t(X)`
  color: red;
  //text-align: left;
`,re=t.button`
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
`,ie=t(Y)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,ne=t.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`;function se(e){return R({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}}]})(e)}const ae=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 608px;

  padding: 60px 0;
`,de=t.h2`
  padding-bottom: 52px;

  font-size: 36px;
  font-weight: 500;
  letter-spacing: 1.44px;
`,pe=t.p`
  padding-bottom: 60px;

  font-size: 24px;
  font-weight: 500;

  letter-spacing: 0.96px;
`,le=t.button`
  box-sizing: border-box;

  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  outline: none;
  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;

  line-height: normal;
  letter-spacing: 0.64px;

  border-radius: 40px;
  background: #54adff;

  &:hover {
    outline: 2px solid #54adff;
    background: #ffffff;
    color: #54adff;
    & use {
      fill: #54adff;
      stroke: #54adff;
    }
  }
`;t(B)`
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  cursor: pointer;

  color: #ffffff;
`;const ce=t(se)`
  position: absolute;
  right: 24px;
  top: 24px;

  width: 24px;
  height: 24px;
  transition: 0.5s;

  cursor: pointer;

  color: #54adff;

  :hover {
    color: #3cd95b;
  }
`;function v({active:e,setShow:l}){const n=c=>{c.currentTarget===c.target&&l(!1)};return o.jsx(o.Fragment,{children:o.jsx(J,{onClose:l,active:e,children:o.jsxs(ae,{children:[o.jsx(de,{children:"Congrats!"}),o.jsx(ce,{onClick:n,children:"X"}),o.jsx(pe,{children:"Your registration is successful"}),o.jsxs(le,{onClick:n,children:["Go to profile",o.jsx(G,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})})})}v.propTypes={active:w.bool,setShow:w.func};const me=D().shape({name:m().min(2).max(16).required("Name is required"),email:m().required("Email is required").email("Email is invalid"),password:m().min(6,"Password mast be at least 6 characters").max(16,"Password can not have more then 16 characters").required("Password is required"),confirmPassword:m().required("Conformation is required").min(4).oneOf([W("password"),null],"Passwords must match")}),xe={name:"",email:"",password:"",confirmPassword:""},he=()=>{const e=O(),l=({name:r,email:i,password:s},{resetForm:d})=>{e(H({name:r,email:i,password:s})).then(a=>!a.error&&d())},[n,c]=p.useState(!1),[f,C]=p.useState(!1),[S,k]=p.useState(""),[I,E]=p.useState(""),[M,u]=p.useState(!1),z=()=>{c(r=>!r),k("")},T=()=>{C(r=>!r),E("")},F=()=>{u(!0)},q=()=>{u(!1)};return o.jsx(A,{initialValues:xe,onSubmit:l,validationSchema:me,children:({errors:r,touched:i,values:s,handleChange:d,handleBlur:a,isSubmitting:L})=>o.jsxs(_,{children:[o.jsx(oe,{children:"Registration"}),o.jsxs(ee,{autoComplete:"off",children:[o.jsx(x,{type:"text",name:"name",placeholder:"Name",value:s.name,onChange:d,onBlur:a,border:r.name&&i.name&&"1px solid red"}),o.jsx(h,{name:"name",component:"div"}),o.jsxs(g,{children:[o.jsx(x,{type:"text",name:"email",value:s.email,placeholder:"Email",onChange:d,onBlur:a,border:r.email&&i.email&&"1px solid red"}),i.email&&r.email&&o.jsx(te,{children:o.jsx("img",{src:K,alt:"error"})})]}),o.jsx(h,{name:"email",component:"div"}),o.jsxs(g,{children:[o.jsx(x,{type:n?"text":"password",name:"password",value:s.password,placeholder:"Password",onBlur:a,error:r.password||S,border:r.password&&i.password&&"1px solid red"}),!r.password&&o.jsx($,{children:o.jsx("img",{src:b,alt:"success"})}),o.jsx(y,{onClick:z,children:o.jsx("img",{src:n?j:P,alt:n?"Show password":"Hide password"})})]}),o.jsx(h,{name:"password",component:"div"}),o.jsxs(g,{children:[o.jsx(x,{type:f?"text":"password",name:"confirmPassword",value:s.confirmPassword,placeholder:"Confirm password",onChange:d,onBlur:a,border:r.confirmPassword&&i.confirmPassword&&"1px solid red",error:r.confirmPassword||I}),!r.confirmPassword&&o.jsx($,{children:o.jsx("img",{src:b,alt:"success"})}),o.jsx(y,{onClick:T,children:o.jsx("img",{src:f?j:P,alt:f?"Show confirmPassword":"Hide confirmPassword"})})]}),o.jsx(h,{name:"confirmPassword",component:"div"}),o.jsxs(o.Fragment,{children:[o.jsx(re,{type:"submit",disabled:L,onClick:F,children:"Registration"}),o.jsx(v,{isOpen:M,onClose:q})]}),o.jsxs(ie,{to:"/login",children:["Already have a account? ",o.jsx(ne,{children:"Login"})]})]})]})})},fe=t.div`
  background-image: url(${Q});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${U});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${Z});
  }
`,ye=()=>o.jsx(fe,{children:o.jsx(he,{})});export{ye as default};
