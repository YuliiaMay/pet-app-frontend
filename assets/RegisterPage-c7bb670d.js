import{s as t,L as Y,G as B,P as G,a as w,j as o,I as H,u as N,r as n,b as O}from"./index-f687cdb8.js";import{F as X,a as A,E as D,b as V}from"./formik.esm-a95ddf2b.js";import{c as W,a as m,b as J}from"./index.esm-13f123dd.js";import{e as K,s as b,h as j}from"./cross-7f676d09.js";import{M as Q}from"./ModalComponents-40581de6.js";import{p as U,a as Z,b as _}from"./bg-mob@1x-9dd97546.js";const ee=t.div`
  margin-top: 46px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  width: 280px;
  min-height: 425px;
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
`,oe=t(X)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,te=t.h2`
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
    font-size: 40px;
  }
`,f=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,x=t(A)`
  padding-left: 16px;
  margin-top: 14px;
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
`,P=t.span`
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
`,re=t.span`
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
  right: 60px;
  transform: translateY(-50%);
  pointer-events: none;
  width: 30px;
  height: 30px;

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
`;const h=t(D)`
  color: red;
`,ie=t.button`
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
`,ne=t(Y)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,se=t.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`;function ae(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}}]})(e)}const de=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 608px;

  padding: 60px 0;
`,pe=t.h2`
  padding-bottom: 52px;

  font-size: 36px;
  font-weight: 500;
  letter-spacing: 1.44px;
`,le=t.p`
  padding-bottom: 60px;

  font-size: 24px;
  font-weight: 500;

  letter-spacing: 0.96px;
`,ce=t.button`
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
`;t(G)`
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  cursor: pointer;

  color: #ffffff;
`;const me=t(ae)`
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
`;function v({active:e,setShow:s}){const l=c=>{s(!1)};return o.jsx(o.Fragment,{children:o.jsx(Q,{onClose:s,active:e,children:o.jsxs(de,{children:[o.jsx(pe,{children:"Congrats!"}),o.jsx(me,{onClick:l,children:"X"}),o.jsx(le,{children:"Your registration is successful"}),o.jsxs(ce,{onClick:l,children:["Go to profile",o.jsx(H,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})})})}v.propTypes={active:w.bool,setShow:w.func};const xe=W().shape({name:m().min(2).max(16).required("Name is required"),email:m().required("Email is required").email("Email is invalid"),password:m().min(6,"Password mast be at least 6 characters").max(16,"Password can not have more then 16 characters").required("Password is required"),confirmPassword:m().required("Conformation is required").min(4).oneOf([J("password"),null],"Passwords must match")}),he={name:"",email:"",password:"",confirmPassword:""},fe=()=>{const e=N(),[s,l]=n.useState(!1),[c,y]=n.useState(!1),[S,$]=n.useState(""),[C,k]=n.useState(""),[I,g]=n.useState(!1),[E,M]=n.useState(!1),[z,u]=n.useState(""),R=({name:r,email:i,password:a},{resetForm:p})=>{e(O({name:r,email:i,password:a})).then(d=>{d.error?u("Registration failed. Please try again later."):(u(""),p())})},F=()=>{l(r=>!r),$("")},T=()=>{y(r=>!r),k("")},q=()=>{g(!0),M(!0)};return o.jsx(V,{initialValues:he,onSubmit:R,validationSchema:xe,children:({errors:r,touched:i,values:a,handleChange:p,handleBlur:d,isSubmitting:L})=>o.jsxs(ee,{children:[o.jsx(te,{children:"Registration"}),o.jsxs(oe,{autoComplete:"off",children:[o.jsx(x,{type:"text",name:"name",placeholder:"Name",value:a.name,onChange:p,onBlur:d,border:r.name&&i.name&&"1px solid red"}),o.jsx(h,{name:"name",component:"div"}),o.jsxs(f,{children:[o.jsx(x,{type:"text",name:"email",value:a.email,placeholder:"Email",onChange:p,onBlur:d,border:r.email&&i.email&&"1px solid red"}),i.email&&r.email&&o.jsx(re,{children:o.jsx("img",{src:K,alt:"error"})})]}),o.jsx(h,{name:"email",component:"div"}),o.jsxs(f,{children:[o.jsx(x,{type:s?"text":"password",name:"password",value:a.password,placeholder:"Password",onBlur:d,error:r.password||S,border:r.password&&i.password&&"1px solid red"}),o.jsx(P,{onClick:F,children:o.jsx("img",{src:s?b:j,alt:s?"Show password":"Hide password"})})]}),o.jsx(h,{name:"password",component:"div"}),o.jsxs(f,{children:[o.jsx(x,{type:c?"text":"password",name:"confirmPassword",value:a.confirmPassword,placeholder:"Confirm password",onChange:p,onBlur:d,border:r.confirmPassword&&i.confirmPassword&&"1px solid red",error:r.confirmPassword||C}),o.jsx(P,{onClick:T,children:o.jsx("img",{src:c?b:j,alt:c?"Show confirmPassword":"Hide confirmPassword"})})]}),o.jsx(h,{name:"confirmPassword",component:"div"}),o.jsxs(o.Fragment,{children:[o.jsx(ie,{type:"submit",disabled:L,onClick:q,children:"Registration"}),E&&o.jsx(v,{setShow:g,active:I}),r&&o.jsxs("div",{children:[z," "]})]}),o.jsxs(ne,{to:"/login",children:["Already have a account? ",o.jsx(se,{children:"Login"})]})]})]})})},ge=t.div`
  background-image: url(${U});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${Z});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${_});
  }
`,ye=()=>o.jsx(ge,{children:o.jsx(fe,{})});export{ye as default};
