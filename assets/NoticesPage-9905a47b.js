import{s as n,r as i,b as f,c as b,j as e,N as l,d as w,e as j,O as S}from"./index-73cf2fb7.js";import{S as y,a as v}from"./Cross-832422b0.js";const k=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,$=n.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 608px;

  @media (max-width: 479px) {
    width: 280px;
  }
`,C=n.input`
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
`,F=n.button`
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
`,z=n.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,P=()=>{const[t,r]=i.useState(""),[p,x]=i.useState(""),s=f(),h=c=>{const g=c.currentTarget.value.toLowerCase();r(g)},d=c=>{c.preventDefault(),t.trim()!==""&&(a({search:t}),r(t))},[m,a]=b();m.get("search");const u=()=>{r(""),a(),x(s.pathname)};return i.useEffect(()=>{x(s.pathname),p!==s.pathname&&r("")},[s.pathname,p,a]),e.jsx(k,{children:e.jsxs($,{onSubmit:d,children:[e.jsx(C,{type:"text",placeholder:"Search",value:t,autoComplete:"off",onChange:h}),e.jsx(F,{type:"submit",position:t,onSubmit:d,children:e.jsx(y,{})}),t!==""&&e.jsx(z,{type:"button",onClick:u,children:e.jsx(v,{})})]})})},B=n.div`
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
`,L=n.div`
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
`,o=n(l)`
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
`,N=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...t},i.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),E=n(l)`
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
`,A=n.svg`
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
`,Q=()=>e.jsxs(E,{to:"/add-pet",children:[e.jsx("span",{children:"Add Pet"}),e.jsx(A,{children:e.jsx(N,{})})]}),T=()=>{const{isLoggedIn:t}=w();return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsxs(L,{children:[e.jsx(o,{to:"/notices/sell",children:"sell"}),e.jsx(o,{to:"/notices/lost-found",children:"lost/found"}),e.jsx(o,{to:"/notices/for-free",children:"in good hands"}),t&&e.jsxs(e.Fragment,{children:[e.jsx(o,{to:"/notices/favorite",children:"favorite ads"}),e.jsx(o,{to:"/notices/own",children:"my ads"})]})]}),e.jsx(Q,{})]}),e.jsx(i.Suspense,{fallback:e.jsx(j,{}),children:e.jsx(S,{})})]})},I=n.div`
display: flex;
  flex-direction: column;
align-items: center;
margin-top: 40px;  
margin-bottom: 24px;

@media (min-width: 767px) {
  margin-top: 80px;  
margin-bottom: 40px;
  
}
`,D=n.h2`
  font-size: 24px;
  font-weight: 700;
  

  @media (min-width: 768px) {
    font-size: 48px;
    
  }
`,M=()=>e.jsx(I,{children:e.jsx(D,{children:"Find your favorite pet"})}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(P,{}),e.jsx(T,{})]});export{V as default};
