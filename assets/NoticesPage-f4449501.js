import{s as i,a as n,b as m,j as e,N as x,c as g,d as u,O as b}from"./index-ee2f9a25.js";import{S as f,a as w}from"./Cross-f0e7efd2.js";import j from"./NoticesCategoriesList-a17fc8e2.js";import"./formatDate-791aee65.js";const y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 320px) {
    margin-top: 40px;
  }
`,S=i.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 479px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,v=i.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 608px;

  @media (max-width: 479px) {
    width: 280px;
  }
`,k=i.input`
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
`,$=i.button`
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
`,F=i.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,z=()=>{const[t,r]=n.useState(""),d=a=>{const p=a.currentTarget.value.toLowerCase();s({query:p}),r(p)},c=a=>{if(a.preventDefault(),t.trim()===""){s();return}r("")},[l,s]=m();l.get("query");const h=()=>{r(""),s()};return e.jsxs(y,{children:[e.jsx(S,{children:"Find your favorite pet"}),e.jsxs(v,{onSubmit:c,children:[e.jsx(k,{type:"text",placeholder:"Search",value:t,onChange:d}),e.jsx($,{type:"submit",position:t,children:e.jsx(f,{})}),t!==""&&e.jsx(F,{type:"button",onClick:h,children:e.jsx(w,{})})]})]})},B=i.div`
  display: flex;
  justify-content: space-between;
  margin-top: 43px;
  margin-bottom: 42px;

  @media (min-width: 320px) {
    margin-top: 20px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`,C=i.div`
  display: flex;
  gap: 12px;

  @media (min-width: 320px) {
    flex-wrap: wrap;
    width: 205px;
    gap: 8px;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 319px;
  }
`,o=i(x)`
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
`,L=t=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...t},n.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),P=i(x)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  border-radius: 40px;
  border: none;
  color: ${t=>t.theme.color.wight};
  background-color: ${t=>t.theme.color.blue};
  filter: drop-shadow(3px 8px 14px rgba(136, 198, 253, 0.19));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 0px;
  }

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }
`,N=i.svg`
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
`,E=()=>e.jsxs(P,{to:"/add-pet",children:[e.jsx("span",{children:"Add Pet"}),e.jsx(N,{children:e.jsx(L,{})})]}),A=()=>{const{isLoggedIn:t}=g();return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsxs(C,{children:[e.jsx(o,{to:"/notices/sell",children:"sell"}),e.jsx(o,{to:"/notices/lost-found",children:"lost/found"}),e.jsx(o,{to:"/notices/for-free",children:"in good hands"}),t&&e.jsxs(e.Fragment,{children:[e.jsx(o,{to:"/notices/favorite",children:"favorite ads"}),e.jsx(o,{to:"/notices/own",children:"my ads"})]})]}),e.jsx(E,{})]}),e.jsx(n.Suspense,{fallback:e.jsx(u,{}),children:e.jsx(b,{})})]})},M=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(A,{}),e.jsx(j,{})]});export{M as default};
