import{s as o,L as c,j as t,l}from"./index-b6d30496.js";import{F as x,a as h,E as g,c as u,b as r,d as b}from"./index.esm-b3edba5f.js";import{u as w}from"./useDispatch-c97c53d0.js";const f=o.div`
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
`,$=o(x)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
`,j=o.h2`
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
`,i=o(h)`
  padding-left: 16px;
  margin-top: 14px;
  width: 248px;
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
`,n=o(g)`
  color: red;
`,y=o.button`
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
`,S=o(c)`
  text-align: center;
  margin-bottom: 40px;
  color: ${e=>e.theme.color.grey};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`,F=o.span`
  color: ${e=>e.theme.color.blue};
  font-size: 12px;
  letter-spacing: 0.48px;
  text-decoration-line: underline;
`,L=u().shape({email:r().required(),password:r().required()}),k={email:"",password:""},v=()=>{const e=w(),a=({email:s,password:d},{resetForm:m})=>{e(l({email:s,password:d})).then(p=>!p.error&&m())};return t.jsx(b,{initialValues:k,onSubmit:a,validationSchema:L,children:t.jsx(f,{children:t.jsxs($,{autoComplete:"off",children:[t.jsx(j,{children:"Login"}),t.jsx(i,{type:"text",name:"email",placeholder:"Email"}),t.jsx(n,{name:"email",component:"div"}),t.jsx(i,{type:"password",name:"password",placeholder:"Password"}),t.jsx(n,{name:"password",component:"div"}),t.jsx(y,{type:"submit",children:"Login"}),t.jsxs(S,{to:"/register",children:["Does not have an account? ",t.jsx(F,{children:"Registration"})]})]})})})},C=()=>t.jsx(t.Fragment,{children:t.jsx(v,{})});export{C as default};
