import{s as n,r as o,c as g,d as f,j as e,N as b,e as w,f as j,g as S,h as v,i as y,O as k}from"./index-a989ea0c.js";import{S as C,a as $}from"./Cross-b05f76bf.js";import{M as F}from"./ModalAttention-77f4cc52.js";import"./ModalComponents-a05a9432.js";const P=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,z=n.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 608px;

  @media (max-width: 479px) {
    width: 280px;
  }
`,A=n.input`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: ${t=>t.theme.color.grey};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: transparent;
    box-shadow: ${t=>t.theme.color.blue} 0px 2px 8px 0px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.56px;
    padding: 14px 20px;
  }
`,B=n.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  right: ${t=>t.position?"47px":"20px"};

  @media (max-width: 480px) {
    right: ${t=>t.position?"37px":"13px"};
  }
`,L=n.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,N=()=>{const[t,i]=o.useState(""),[a,c]=o.useState(""),r=g(),l=d=>{const u=d.currentTarget.value.toLowerCase();i(u)},x=d=>{d.preventDefault(),t.trim()!==""&&(p({search:t}),i(t))},[h,p]=f();h.get("search");const m=()=>{i(""),p(),c(r.pathname)};return o.useEffect(()=>{c(r.pathname),a!==r.pathname&&i("")},[r.pathname,a,p]),e.jsx(P,{children:e.jsxs(z,{onSubmit:x,children:[e.jsx(A,{type:"text",placeholder:"Search",value:t,autoComplete:"off",onChange:l}),e.jsx(B,{type:"submit",position:t,onSubmit:x,children:e.jsx(C,{})}),t!==""&&e.jsx(L,{type:"button",onClick:m,children:e.jsx($,{})})]})})},E=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 43px;
    margin-bottom: 42px;
  }
`,M=n.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 205px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 319px;
    gap: 12px;
  }

  @media (min-width: 1280px) {
    width: 100%;
    gap: 8px;
  }
`,s=n(b)`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  color: ${t=>t.theme.color.blue};
  background-color: ${t=>t.theme.background.lightBlue};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: ${t=>t.theme.color.blue};
    color: ${t=>t.theme.color.wight};
  }

  &:hover {
    box-shadow: ${t=>t.theme.color.blue} 0px 2px 8px 0px;
  }
`,Q=t=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...t},o.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),T=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 35px;
  /* padding: 8px 20px; */
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  border-radius: 40px;
  border: none;
  color: ${t=>t.theme.color.wight};
  background-color: ${t=>t.theme.color.blue};
  filter: drop-shadow(3px 8px 14px rgba(136, 198, 253, 0.19));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  & > span {
    @media (max-width: 480px) {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 65px;
    }
  }

  &:hover {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 0px;
  }
`,I=n.svg`
  display: flex;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  fill: #fef9f9;

  @media (max-width: 767px) {
    margin-left: 0px;
  }
`,D=()=>{const[t,i]=o.useState(!1),{token:a}=w(j),c=S(),r=()=>{if(!a){i(!0);return}c("/add-pet")};return e.jsxs(e.Fragment,{children:[e.jsxs(T,{onClick:r,children:[e.jsx("span",{children:"Add Pet"}),e.jsx(I,{children:e.jsx(Q,{})})]}),e.jsx(F,{active:t,setShow:i})]})},O=()=>{const{isLoggedIn:t}=v();return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsxs(M,{children:[e.jsx(s,{to:"/notices/sell",children:"sell"}),e.jsx(s,{to:"/notices/lost-found",children:"lost/found"}),e.jsx(s,{to:"/notices/for-free",children:"in good hands"}),t&&e.jsxs(e.Fragment,{children:[e.jsx(s,{to:"/notices/favorite",children:"favorite ads"}),e.jsx(s,{to:"/notices/own",children:"my ads"})]})]}),e.jsx(D,{})]}),e.jsx(o.Suspense,{fallback:e.jsx(y,{}),children:e.jsx(k,{})})]})},R=n.div`
display: flex;
  flex-direction: column;
align-items: center;
margin-top: 40px;  
margin-bottom: 24px;

@media (min-width: 767px) {
  margin-top: 80px;  
margin-bottom: 40px;
  
}
`,U=n.h2`
  font-size: 24px;
  font-weight: 700;
  

  @media (min-width: 768px) {
    font-size: 48px;
    
  }
`,V=()=>e.jsx(R,{children:e.jsx(U,{children:"Find your favorite pet"})}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsx(N,{}),e.jsx(O,{})]});export{J as default};
