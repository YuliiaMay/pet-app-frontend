import{s as r,L as I,u as E,r as n,j as o,a as k}from"./index-40b1425e.js";import{F,a as z,E as R,c as q,b as i,d as L}from"./index.esm-6b10b472.js";const T=r.div`
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
    margin-bottom: 416px;
    width: 608px;
    min-height: 629px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 91px;
    margin-bottom: 75px;
    min-height: 617px;
  }
`,Y=r(F)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,H=r.h2`
  color: ${e=>e.theme.color.main};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1.44px;
  margin-top: 26px;
  margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    font-size: 36px;
  }
`,p=r.div`
  position: relative;
  display: flex;
  align-items: center;
`,a=r(z)`
  padding-left: 16px;
  margin-top: 14px;
  width: 224px;
  height: 48px;
  border-radius: ${e=>e.theme.border.radius};
  outline: none;
  border: ${e=>e.theme.border.blue};
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
`,m=r.span`
  position: absolute;
  top: 65%;
  right: 20px;
  transform: translateY(-50%);
  color: ${e=>e.error?e.theme.color.error:e.theme.color.success};

  @media screen and (min-width: 768px) {
    top: 72%;
  }
`,V=r.span`
  position: absolute;
  top: 65%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${e=>e.theme.color.error};
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    top: 72%;
  }
`,A=r.span`
  position: absolute;
  top: 65%;
  right: 20px;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${e=>e.theme.color.success};
  //color: #f43f5e;

  @media screen and (min-width: 768px) {
    top: 72%;
  }
`,d=r(R)`
  color: red;
`,B=r.button`
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

  @media screen and (min-width: 768px) {
    width: 458px;
    height: 48px;
    padding: 10px 20px;
    margin-top: 52px;
    margin-bottom: 16px;
  }
`,D=r(I)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,M=r.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,l="/pet-app-frontend/assets/eyeOpen-580f730d.svg",h="/pet-app-frontend/assets/eyeClosed-3e03a211.svg",N="/pet-app-frontend/assets/check-224c259e.svg",O="/pet-app-frontend/assets/cross-69a30993.svg",G=q().shape({name:i().required(),email:i().min(6).email().required(),password:i().required(),confirmPassword:i().required()}),J={name:"",email:"",password:"",confirmPassword:""},K=()=>{const e=E(),x=({name:t,email:y,password:S},{resetForm:v})=>{e(k({name:t,email:y,password:S})).then(C=>!C.error&&v())},[s,g]=n.useState(!1),[c,w]=n.useState(!1),[u,f]=n.useState(""),[b,j]=n.useState(""),P=()=>{g(t=>!t),f("")},$=()=>{w(t=>!t),j("")};return o.jsx(L,{initialValues:J,onSubmit:x,validationSchema:G,children:({errors:t})=>o.jsxs(T,{children:[o.jsxs(Y,{autoComplete:"off",children:[o.jsx(H,{children:"Registration"}),o.jsx(a,{type:"text",name:"name",placeholder:"Name",border:t.name&&"1px solid red"}),o.jsx(d,{name:"name",component:"div"}),o.jsxs(p,{children:[o.jsx(a,{type:"text",name:"email",placeholder:"Email",border:t.email&&"1px solid red"}),t.email&&o.jsx(V,{color:"red",children:o.jsx("img",{src:O,alt:"error",width:"24",height:"24"})})]}),o.jsx(d,{name:"email",component:"div"}),o.jsxs(p,{children:[o.jsx(a,{type:s?"text":"password",name:"password",placeholder:"Password",error:t.password||u,border:t.password&&"1px solid red"}),o.jsx(A,{isValid:s,children:o.jsx("img",{src:N,alt:"error",width:"24",height:"24"})}),o.jsx(m,{onClick:P,children:o.jsx("img",{src:s?h:l,alt:s?"Hide password":"Show password",width:"24",height:"24"})})]}),o.jsx(d,{name:"password",component:"div"}),o.jsxs(p,{children:[o.jsx(a,{type:c?"text":"password",name:"confirmPassword",placeholder:"Confirm password",border:t.confirmPassword&&"1px solid red",error:t.confirmPassword||b}),o.jsx(m,{onClick:$,children:o.jsx("img",{src:c?h:l,alt:c?"Hide confirmPassword":"Show confirmPassword",width:"24",height:"24"})})]}),o.jsx(d,{name:"confirmPassword",component:"div"}),o.jsx(B,{type:"submit",children:"Registration"}),o.jsxs(D,{to:"/login",children:["Already have a account? ",o.jsx(M,{children:"Login"})]})]}),"dd"]})})},W=()=>o.jsx(o.Fragment,{children:o.jsx(K,{})});export{W as default};
