import{s as o,r as n,b as f,c as b,j as t,N as l,d as w,e as j,O as S}from"./index-9a49ec36.js";import{S as y,a as v}from"./Cross-c18c08ca.js";const k=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 320px) {
    margin-top: 40px;
  }
`,$=o.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 479px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,C=o.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 608px;

  @media (max-width: 479px) {
    width: 280px;
  }
`,F=o.input`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: ${e=>e.theme.color.grey};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: transparent;
    box-shadow: ${e=>e.theme.color.blue} 0px 2px 8px 0px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.56px;
    padding: 14px 20px;
  }
`,z=o.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  right: ${e=>e.position?"47px":"20px"};

  @media (max-width: 480px) {
    right: ${e=>e.position?"37px":"13px"};
  }
`,P=o.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,B=()=>{const[e,r]=n.useState(""),[c,x]=n.useState(""),s=f(),h=p=>{const g=p.currentTarget.value.toLowerCase();r(g)},d=p=>{p.preventDefault(),e.trim()!==""&&(a({search:e}),r(e))},[m,a]=b();m.get("search");const u=()=>{r(""),a(),x(s.pathname)};return n.useEffect(()=>{x(s.pathname),c!==s.pathname&&r("")},[s.pathname,c,a]),t.jsxs(k,{children:[t.jsx($,{children:"Find your favorite pet"}),t.jsxs(C,{onSubmit:d,children:[t.jsx(F,{type:"text",placeholder:"Search",value:e,autoComplete:"off",onChange:h}),t.jsx(z,{type:"submit",position:e,onSubmit:d,children:t.jsx(y,{})}),e!==""&&t.jsx(P,{type:"button",onClick:u,children:t.jsx(v,{})})]})]})},L=o.div`
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
`,E=o.div`
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
`,i=o(l)`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  color: ${e=>e.theme.color.blue};
  background-color: ${e=>e.theme.background.lightBlue};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: ${e=>e.theme.color.blue};
    color: ${e=>e.theme.color.wight};
  }

  &:hover {
    box-shadow: ${e=>e.theme.color.blue} 0px 2px 8px 0px;
  }
`,N=e=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},n.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),A=o(l)`
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
  color: ${e=>e.theme.color.wight};
  background-color: ${e=>e.theme.color.blue};
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
`,Q=o.svg`
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
`,I=()=>t.jsxs(A,{to:"/add-pet",children:[t.jsx("span",{children:"Add Pet"}),t.jsx(Q,{children:t.jsx(N,{})})]}),D=()=>{const{isLoggedIn:e}=w();return t.jsxs(t.Fragment,{children:[t.jsxs(L,{children:[t.jsxs(E,{children:[t.jsx(i,{to:"/notices/sell",children:"sell"}),t.jsx(i,{to:"/notices/lost-found",children:"lost/found"}),t.jsx(i,{to:"/notices/for-free",children:"in good hands"}),e&&t.jsxs(t.Fragment,{children:[t.jsx(i,{to:"/notices/favorite",children:"favorite ads"}),t.jsx(i,{to:"/notices/own",children:"my ads"})]})]}),t.jsx(I,{})]}),t.jsx(n.Suspense,{fallback:t.jsx(j,{}),children:t.jsx(S,{})})]})},T=()=>t.jsxs(t.Fragment,{children:[t.jsx(B,{}),t.jsx(D,{})]});export{T as default};
