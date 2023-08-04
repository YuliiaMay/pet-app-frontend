import{s as t,L as H,G as N,P as O,a as w,u as $,j as o,I as D,l as X,r as n,b as A}from"./index-c4b9f27e.js";import{F as U,a as V,E as W,b as J}from"./formik.esm-7528797b.js";import{c as K,a as m,b as Q}from"./index.esm-09b5fd9f.js";import{e as Z,s as v,h as y}from"./cross-73e4761d.js";import{M as _}from"./ModalComponents-56aa0e6e.js";import{b as ee,a as oe,c as te}from"./bg-mob@1x-38a1584a.js";const re=t.div`
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
`,ie=t(U)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ne=t.h2`
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
`,b=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,x=t(V)`
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
`,S=t.span`
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
`,se=t.span`
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
`;const h=t(W)`
  color: red;
`,ae=t.button`
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
`,de=t(H)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,pe=t.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`;function le(e){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}}]})(e)}const ce=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 608px;

  padding: 60px 0;
`,me=t.h2`
  padding-bottom: 52px;

  font-size: 36px;
  font-weight: 500;
  letter-spacing: 1.44px;
`,xe=t.p`
  padding-bottom: 60px;

  font-size: 24px;
  font-weight: 500;

  letter-spacing: 0.96px;
`,he=t.button`
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
`;t(O)`
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  cursor: pointer;

  color: #ffffff;
`;const ge=t(le)`
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
`;function C({active:e,setShow:a,userLogin:g}){const{email:p,password:f}=g,u=$(),c=()=>{u(X({email:p,password:f})),a(!1)};return o.jsx(o.Fragment,{children:o.jsx(_,{onClose:a,active:e,children:o.jsxs(ce,{children:[o.jsx(me,{children:"Congrats!"}),o.jsx(ge,{onClick:c,children:"X"}),o.jsx(xe,{children:"Your registration is successful"}),o.jsxs(he,{onClick:c,children:["Go to profile",o.jsx(D,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})})})}C.propTypes={active:w.bool,setShow:w.func,userLogin:w.object};const fe=K().shape({name:m().min(2).max(16).required("Name is required"),email:m().required("Email is required").email("Email is invalid"),password:m().min(6,"Password mast be at least 6 characters").max(16,"Password can not have more then 16 characters").required("Password is required"),confirmPassword:m().required("Conformation is required").min(4).oneOf([Q("password"),null],"Passwords must match")}),ue={name:"",email:"",password:"",confirmPassword:""},we=()=>{const e=$(),[a,g]=n.useState(!1),[p,f]=n.useState(!1),[u,c]=n.useState(""),[k,I]=n.useState(""),[E,j]=n.useState(!1),[M,z]=n.useState({}),[L,R]=n.useState(!1),[F,P]=n.useState(""),T=({name:r,email:i,password:s},{resetForm:l})=>{z({email:i,password:s}),e(A({name:r,email:i,password:s})).then(d=>{d.error?P("Registration failed. Please try again later."):(P(""),l())})},q=()=>{g(r=>!r),c("")},Y=()=>{f(r=>!r),I("")},B=()=>{j(!0),R(!0)};return o.jsx(J,{initialValues:ue,onSubmit:T,validationSchema:fe,children:({errors:r,touched:i,values:s,handleChange:l,handleBlur:d,isSubmitting:G})=>o.jsxs(re,{children:[o.jsx(ne,{children:"Registration"}),o.jsxs(ie,{autoComplete:"off",children:[o.jsx(x,{type:"text",name:"name",placeholder:"Name",value:s.name,onChange:l,onBlur:d,border:r.name&&i.name&&"1px solid red"}),o.jsx(h,{name:"name",component:"div"}),o.jsxs(b,{children:[o.jsx(x,{type:"text",name:"email",value:s.email,placeholder:"Email",onChange:l,onBlur:d,border:r.email&&i.email&&"1px solid red"}),i.email&&r.email&&o.jsx(se,{children:o.jsx("img",{src:Z,alt:"error"})})]}),o.jsx(h,{name:"email",component:"div"}),o.jsxs(b,{children:[o.jsx(x,{type:a?"text":"password",name:"password",value:s.password,placeholder:"Password",onBlur:d,error:r.password||u,border:r.password&&i.password&&"1px solid red"}),o.jsx(S,{onClick:q,children:o.jsx("img",{src:a?v:y,alt:a?"Show password":"Hide password"})})]}),o.jsx(h,{name:"password",component:"div"}),o.jsxs(b,{children:[o.jsx(x,{type:p?"text":"password",name:"confirmPassword",value:s.confirmPassword,placeholder:"Confirm password",onChange:l,onBlur:d,border:r.confirmPassword&&i.confirmPassword&&"1px solid red",error:r.confirmPassword||k}),o.jsx(S,{onClick:Y,children:o.jsx("img",{src:p?v:y,alt:p?"Show confirmPassword":"Hide confirmPassword"})})]}),o.jsx(h,{name:"confirmPassword",component:"div"}),o.jsxs(o.Fragment,{children:[o.jsx(ae,{type:"submit",disabled:G,onClick:B,children:"Registration"}),L&&o.jsx(C,{setShow:j,active:E,userLogin:M}),r&&o.jsxs("div",{children:[F," "]})]}),o.jsxs(de,{to:"/login",children:["Already have a account? ",o.jsx(pe,{children:"Login"})]})]})]})})},be=t.div`
  background-image: url(${ee});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${oe});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${te});
  }
`,Ce=()=>o.jsx(be,{children:o.jsx(we,{})});export{Ce as default};
