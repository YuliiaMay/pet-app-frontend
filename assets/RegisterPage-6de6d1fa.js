import{s as r,N as l,u as x,j as t,r as h}from"./index-e566f0f0.js";import{F as g,a as u,E as b,c as w,b as o,d as f}from"./index.esm-15e22d6e.js";const j=r.div`
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
`,$=r(g)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
`,y=r.h2`
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
`,i=r(u)`
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
`,n=r(b)`
  color: red;
`,S=r.button`
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
`,F=r(l)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,v=r.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,P=w().shape({name:o().required(),email:o().min(6).email().required(),password:o().required(),confirmPassword:o().required()}),k={name:"",email:"",password:"",confirmPassword:""},z=()=>{const e=x(),a=({name:s,email:d,password:m},{resetForm:p})=>{e(h({name:s,email:d,password:m})).then(c=>!c.error&&p())};return t.jsx(f,{initialValues:k,onSubmit:a,validationSchema:P,children:t.jsx(j,{children:t.jsxs($,{autoComplete:"off",children:[t.jsx(y,{children:"Registration"}),t.jsx(i,{type:"text",name:"name",placeholder:"Name"}),t.jsx(n,{name:"name",component:"div"}),t.jsx(i,{type:"text",name:"email",placeholder:"Email"}),t.jsx(n,{name:"email",component:"div"}),t.jsx(i,{type:"password",name:"password",placeholder:"Password"}),t.jsx(n,{name:"password",component:"div"}),t.jsx(i,{type:"password",name:"confirmPassword",placeholder:"confirmPassword"}),t.jsx(n,{name:"confirmPassword",component:"div"}),t.jsx(S,{type:"submit",children:"Registration"}),t.jsxs(F,{to:"/login",children:["Already have a account? ",t.jsx(v,{children:"Login"})]})]})})})},q=()=>t.jsx(t.Fragment,{children:t.jsx(z,{})});export{q as default};
