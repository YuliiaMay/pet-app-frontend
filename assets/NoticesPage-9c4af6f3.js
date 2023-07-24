import{G as s,s as o,a,j as e,N as c,u as h,O as u}from"./index-3b6d3c7a.js";import g from"./NoticesCategoriesList-586f566e.js";import"./useDispatch-343ec221.js";function m(t){return s({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(t)}function b(t){return s({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(t)}function f(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}const w=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 320px) {
    margin-top: 40px;
  }
`,j=o.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 479px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,v=o.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 608px;

  @media (max-width: 479px) {
    width: 280px;
  }
`,y=o.input`
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

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.56px;
    padding: 14px 20px;
  }
`,k=o.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  right: ${t=>t.position?"47px":"20px"};

  @media (max-width: 480px) {
    right: ${t=>t.position?"37px":"13px"};
  }
`,z=o.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,S=()=>{const[t,n]=a.useState(""),x=r=>{const d=r.currentTarget.value.toLowerCase();n(d)},l=r=>{r.preventDefault(),t.trim()!==""&&n("")},p=()=>{n("")};return e.jsxs(w,{children:[e.jsx(j,{children:"Find your favorite pet"}),e.jsxs(v,{onSubmit:l,children:[e.jsx(y,{type:"text",placeholder:"Search",value:t,onChange:x}),e.jsx(k,{type:"submit",position:t,children:e.jsx(b,{color:"#54ADFF",size:24})}),t!==""&&e.jsx(z,{type:"button",onClick:p,children:e.jsx(f,{color:"#FFC107",size:24})})]})]})},$=o.div`
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
`,B=o.div`
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
`,i=o(c)`
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
`,F=o(c)`
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${t=>t.theme.color.blue};
    background-color: ${t=>t.theme.background.lightBlue};
    box-shadow: ${t=>t.theme.color.blue} 0px 2px 8px 0px;
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
`,C=o.svg`
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
`,L=()=>{const{isLoggedIn:t}=h();return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:[e.jsxs(B,{children:[e.jsx(i,{to:"/notices/sell",children:"sell"}),e.jsx(i,{to:"/notices/lost-found",children:"lost/found"}),e.jsx(i,{to:"/notices/for-free",children:"in good hands"}),t&&e.jsxs(e.Fragment,{children:[e.jsx(i,{to:"/notices/favorite",children:"favorite ads"}),e.jsx(i,{to:"/notices/own",children:"my ads"})]})]}),e.jsxs(F,{to:"/add-pet",children:[e.jsx("span",{children:"Add Pet"}),e.jsx(C,{children:e.jsx(m,{size:"24px"})})]})]}),e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(u,{})})]})},Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{}),e.jsx(L,{}),e.jsx(g,{})]});export{Q as default};
