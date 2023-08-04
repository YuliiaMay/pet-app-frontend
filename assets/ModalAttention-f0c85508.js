import{s as e,N as a,a as o,h as d,j as t,I as p}from"./index-61069971.js";import{M as x}from"./ModalComponents-187394e3.js";const c=e.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
  cursor: pointer;
`,b=e.div`
  width: 608px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 700;
  }

  & p {
    text-align: center;
    font-weight: 500;
    line-height: 1.4;
    width: 393px;
  }

  & span {
    font-weight: 700;
  }

  @media screen and (max-width: 767px) {
    padding: 12px 20px 60px;
    width: 280px;
    gap: 0;
    margin-bottom: 0;
    & h2 {
      font-size: 24px;
      letter-spacing: 0.96px;
      padding: 0 40px;
      text-align: center;
      margin-bottom: 14px;
    }
    & p {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.56px;
      width: 240px;
      line-height: 1.4;
    }
  }
`,y=e.div`
  display: flex;
  gap: 17px;
  margin-top: 48px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,j=e.button`
  padding: 8px 20px;
  border: 1px solid #54adff;
  border-radius: 40px;
  font-weight: 700;
  color: #54adff;
  width: 130px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding: 8px 0;
  }
`,v=e.button`
  padding: 8px 20px;
  background-color: #54adff;
  border-radius: 40px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 130px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding: 8px 0;
  }
`,I=e.div``,l=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  gap: 40px;
  width: 608px;
  & h2 {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1.44px;
  }

  & p {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }

  @media screen and (max-width: 767px) {
    padding: 12px 20px 60px;
    width: 280px;
    gap: 0;
    & h2 {
      font-size: 24px;
      letter-spacing: 0.96px;
      margin-bottom: 20px;
    }
    & p {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.56px;
      margin-bottom: 40px;
    }
  }
`,g=e.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,f=e(a)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fef9f9;
  background-color: #ffc107;
  font-weight: 700;
  padding: 8px 40px;
  border-radius: 40px;
  border: 1px;
  gap: 8px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding: 8px 0;
  }
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(239, 244, 167, 1) 1%,
      rgba(255, 193, 7, 1) 93%
    );
  }
`,h=e(a)`
  font-weight: 700;
  padding: 8px 40px;
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 40px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding: 8px 0;
  }
  &:hover {
    background-color: #ffc107;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`,m=({active:n,setShow:i})=>{const{isLoggedIn:r}=d(),s=()=>{i(!n)};return t.jsx(t.Fragment,{children:!r&&t.jsxs(x,{onClose:i,active:n,children:[t.jsx(c,{onClick:s,children:t.jsx(p,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),t.jsxs(l,{children:[t.jsx("h2",{children:"Attention"}),t.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),t.jsxs(g,{children:[t.jsxs(f,{to:"/login",children:["Log IN",t.jsx(p,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),t.jsx(h,{to:"/register",children:"Registration"})]})]})]})})};m.propTypes={active:o.bool,setShow:o.func};export{y as B,c as C,I as D,m as M,b as W,v as Y,j as a};
