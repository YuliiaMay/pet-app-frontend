import{s as t,N as l,j as r,r as x}from"./index-e2364b93.js";import{F as h,a as g,E as u,c as b,b as o,d as w}from"./index.esm-a21b4335.js";import{u as f}from"./useDispatch-da61b67b.js";const j=t.div`
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
`,$=t(h)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
`,y=t.h2`
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
`,i=t(g)`
  padding-left: 16px;
  margin-top: 14px;
  width: 224px;
  height: 48px;
  border-radius: ${e=>e.theme.border.radius};
  cursor: pointer;

  border: 1px solid ${e=>e.theme.error?"#F43F5E":"#54adff"};

  &:hover,
  &:focus {
    border: 1px solid ${e=>e.theme.border.success};
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
`,n=t(u)`
  color: red;
`,S=t.button`
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
`,F=t(l)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,v=t.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,P=b().shape({name:o().required(),email:o().min(6).email().required(),password:o().required(),confirmPassword:o().required()}),k={name:"",email:"",password:"",confirmPassword:""},z=()=>{const e=f(),a=({name:s,email:d,password:m},{resetForm:p})=>{e(x({name:s,email:d,password:m})).then(c=>!c.error&&p())};return r.jsx(w,{initialValues:k,onSubmit:a,validationSchema:P,children:r.jsx(j,{children:r.jsxs($,{autoComplete:"off",children:[r.jsx(y,{children:"Registration"}),r.jsx(i,{type:"text",name:"name",placeholder:"Name"}),r.jsx(n,{name:"name",component:"div"}),r.jsx(i,{type:"text",name:"email",placeholder:"Email"}),r.jsx(n,{name:"email",component:"div"}),r.jsx(i,{type:"password",name:"password",placeholder:"Password"}),r.jsx(n,{name:"password",component:"div"}),r.jsx(i,{type:"password",name:"confirmPassword",placeholder:"confirmPassword"}),r.jsx(n,{name:"confirmPassword",component:"div"}),r.jsx(S,{type:"submit",children:"Registration"}),r.jsxs(F,{to:"/login",children:["Already have a account? ",r.jsx(v,{children:"Login"})]})]})})})},L=()=>r.jsx(r.Fragment,{children:r.jsx(z,{})});export{L as default};
