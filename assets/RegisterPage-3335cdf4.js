import{s as t,L as T,G as q,P as L,a as u,j as o,I as Y,u as R,r as p,b as B}from"./index-cccd35a4.js";import{F as G,a as H,E as N,b as O}from"./formik.esm-de941a59.js";import{c as X,a as m,b as A}from"./index.esm-1587be41.js";import{e as D,s as w,h as b}from"./cross-c8f855af.js";import{M as V}from"./ModalComponents-8216df93.js";import{p as W,a as J,b as K}from"./bg-mob@1x-9dd97546.js";const Q=t.div`
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
`,U=t(G)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Z=t.h2`
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
`,x=t(H)`
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
`,j=t.span`
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
`,_=t.span`
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
`,ee=t.span`
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
`;const h=t(N)`
  color: red;
`,oe=t.button`
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
`,te=t(T)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,re=t.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,ne="/pet-app-frontend/assets/check-cc30df76.svg";function ie(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}}]})(e)}const se=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 608px;

  padding: 60px 0;
`,ae=t.h2`
  padding-bottom: 52px;

  font-size: 36px;
  font-weight: 500;
  letter-spacing: 1.44px;
`,de=t.p`
  padding-bottom: 60px;

  font-size: 24px;
  font-weight: 500;

  letter-spacing: 0.96px;
`,pe=t.button`
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
`;t(L)`
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
  cursor: pointer;

  color: #ffffff;
`;const le=t(ie)`
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
`;function P({active:e,setShow:i}){const l=c=>{i(!1)};return o.jsx(o.Fragment,{children:o.jsx(V,{onClose:i,active:e,children:o.jsxs(se,{children:[o.jsx(ae,{children:"Congrats!"}),o.jsx(le,{onClick:l,children:"X"}),o.jsx(de,{children:"Your registration is successful"}),o.jsxs(pe,{onClick:l,children:["Go to profile",o.jsx(Y,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})})})}P.propTypes={active:u.bool,setShow:u.func};const ce=X().shape({name:m().min(2).max(16).required("Name is required"),email:m().required("Email is required").email("Email is invalid"),password:m().min(6,"Password mast be at least 6 characters").max(16,"Password can not have more then 16 characters").required("Password is required"),confirmPassword:m().required("Conformation is required").min(4).oneOf([A("password"),null],"Passwords must match")}),me={name:"",email:"",password:"",confirmPassword:""},xe=()=>{const e=R(),[i,l]=p.useState(!1),[c,v]=p.useState(!1),[y,$]=p.useState(""),[S,C]=p.useState(""),[k,g]=p.useState(!1),I=({name:r,email:n,password:s},{resetForm:d})=>{e(B({name:r,email:n,password:s})).then(a=>!a.error&&d())},E=()=>{l(r=>!r),$("")},z=()=>{v(r=>!r),C("")},M=()=>{g(!0)};return o.jsx(O,{initialValues:me,onSubmit:I,validationSchema:ce,children:({errors:r,touched:n,values:s,handleChange:d,handleBlur:a,isSubmitting:F})=>o.jsxs(Q,{children:[o.jsx(Z,{children:"Registration"}),o.jsxs(U,{autoComplete:"off",children:[o.jsx(x,{type:"text",name:"name",placeholder:"Name",value:s.name,onChange:d,onBlur:a,border:r.name&&n.name&&"1px solid red"}),o.jsx(h,{name:"name",component:"div"}),o.jsxs(f,{children:[o.jsx(x,{type:"text",name:"email",value:s.email,placeholder:"Email",onChange:d,onBlur:a,border:r.email&&n.email&&"1px solid red"}),n.email&&r.email&&o.jsx(_,{children:o.jsx("img",{src:D,alt:"error"})})]}),o.jsx(h,{name:"email",component:"div"}),o.jsxs(f,{children:[o.jsx(x,{type:i?"text":"password",name:"password",value:s.password,placeholder:"Password",onBlur:a,error:r.password||y,border:r.password&&n.password&&"1px solid red"}),!r.password&&o.jsx(ee,{children:o.jsx("img",{src:ne,alt:"success"})}),o.jsx(j,{onClick:E,children:o.jsx("img",{src:i?w:b,alt:i?"Show password":"Hide password"})})]}),o.jsx(h,{name:"password",component:"div"}),o.jsxs(f,{children:[o.jsx(x,{type:c?"text":"password",name:"confirmPassword",value:s.confirmPassword,placeholder:"Confirm password",onChange:d,onBlur:a,border:r.confirmPassword&&n.confirmPassword&&"1px solid red",error:r.confirmPassword||S}),o.jsx(j,{onClick:z,children:o.jsx("img",{src:c?w:b,alt:c?"Show confirmPassword":"Hide confirmPassword"})})]}),o.jsx(h,{name:"confirmPassword",component:"div"}),o.jsxs(o.Fragment,{children:[o.jsx(oe,{type:"submit",disabled:F,onClick:M,children:"Registration"}),o.jsx(P,{setShow:g,active:k})]}),o.jsxs(te,{to:"/login",children:["Already have a account? ",o.jsx(re,{children:"Login"})]})]})]})})},he=t.div`
  background-image: url(${W});
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${J});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${K});
  }
`,Pe=()=>o.jsx(he,{children:o.jsx(xe,{})});export{Pe as default};
