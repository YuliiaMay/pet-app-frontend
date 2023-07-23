import{G as s,s as o,r as p,j as e,N as c,u as h}from"./index-3154821f.js";function u(t){return s({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(t)}function g(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(t)}function m(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}const b=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (max-width: 479px) {
    margin-top: 40px;
  }
`,f=o.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 479px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,j=o.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 608px;

  @media (max-width: 479px) {
    width: 280px;
  }
`,w=o.input`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: ${t=>t.theme.color.grey};

  &:focus {
    outline: none;
  }

  @media (max-width: 479px) {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.56px;
    padding: 14px 20px;
  }
`,y=o.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  right: ${t=>t.position?"47px":"20px"};

  @media (max-width: 479px) {
    right: ${t=>t.position?"37px":"12px"};
  }
`,v=o.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,k=()=>{const[t,i]=p.useState(""),a=r=>{const d=r.currentTarget.value.toLowerCase();i(d)},l=r=>{r.preventDefault(),t.trim()!==""&&i("")},x=()=>{i("")};return e.jsxs(b,{children:[e.jsx(f,{children:"Find your favorite pet"}),e.jsxs(j,{onSubmit:l,children:[e.jsx(w,{type:"text",placeholder:"Search",value:t,onChange:a}),e.jsx(y,{type:"submit",position:t,children:e.jsx(u,{color:"#54ADFF",size:24})}),t!==""&&e.jsx(v,{type:"button",onClick:x,children:e.jsx(m,{color:"#FFC107",size:24})})]})]})},z=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 43px;

  @media (max-width: 767px) {
    justify-content: none;
  }
`,S=o.div`
  display: flex;
  gap: 12px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 205px;
    gap: 8px;
  }
`,n=o(c)`
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  color: ${t=>t.theme.color.blue};
  background-color: ${t=>t.theme.background.lightBlue};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: ${t=>t.theme.color.blue};
    color: ${t=>t.theme.color.wight};
  }
`,F=o(c)`
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: none;
  color: ${t=>t.theme.color.wight};
  background-color: ${t=>t.theme.color.blue};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,B=o.span`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`,C=()=>{const{isLoggedIn:t}=h();return e.jsxs(z,{children:[e.jsxs(S,{children:[e.jsx(n,{to:"/notices/sell",children:"sell"}),e.jsx(n,{to:"/notices/lost-found",children:"lost/found"}),e.jsx(n,{to:"/notices/for-free",children:"in good hands"}),t&&e.jsxs(e.Fragment,{children:[e.jsx(n,{to:"/notices/favorite",children:"favorite ads"}),e.jsx(n,{to:"/notices/own",children:"my ads"})]})]}),e.jsxs(F,{to:"/add-pet",children:["Add Pet",e.jsx(B,{children:e.jsx(g,{})})]})]})},L=()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(C,{})]});export{L as default};
