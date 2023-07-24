import{a as o,s as i,j as t,N as a,u as l,O as h}from"./index-307a80b9.js";import g from"./NoticesCategoriesList-4b6e7816.js";import"./useDispatch-1e2a0fa7.js";const m=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},o.createElement("path",{d:"M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z",fill:"#54ADFF"})),u=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},o.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#FFC107",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),w=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 320px) {
    margin-top: 40px;
  }
`,f=i.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 479px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,b=i.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 608px;

  @media (max-width: 479px) {
    width: 280px;
  }
`,j=i.input`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: ${e=>e.theme.color.grey};

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.56px;
    padding: 14px 20px;
  }
`,v=i.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  right: ${e=>e.position?"47px":"20px"};

  @media (max-width: 480px) {
    right: ${e=>e.position?"37px":"13px"};
  }
`,y=i.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,C=()=>{const[e,r]=o.useState(""),p=s=>{const c=s.currentTarget.value.toLowerCase();r(c)},d=s=>{s.preventDefault(),e.trim()!==""&&r("")},x=()=>{r("")};return t.jsxs(w,{children:[t.jsx(f,{children:"Find your favorite pet"}),t.jsxs(b,{onSubmit:d,children:[t.jsx(j,{type:"text",placeholder:"Search",value:e,onChange:p}),t.jsx(v,{type:"submit",position:e,children:t.jsx(m,{})}),e!==""&&t.jsx(y,{type:"button",onClick:x,children:t.jsx(u,{})})]})]})},S=i.div`
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
`,k=i.div`
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
`,n=i(a)`
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
`,L=i(a)`
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
`,F=i.svg`
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
`,$=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},o.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),M=()=>{const{isLoggedIn:e}=l();return t.jsxs(t.Fragment,{children:[t.jsxs(S,{children:[t.jsxs(k,{children:[t.jsx(n,{to:"/notices/sell",children:"sell"}),t.jsx(n,{to:"/notices/lost-found",children:"lost/found"}),t.jsx(n,{to:"/notices/for-free",children:"in good hands"}),e&&t.jsxs(t.Fragment,{children:[t.jsx(n,{to:"/notices/favorite",children:"favorite ads"}),t.jsx(n,{to:"/notices/own",children:"my ads"})]})]}),t.jsxs(L,{to:"/add-pet",children:[t.jsx("span",{children:"Add Pet"}),t.jsx(F,{children:t.jsx($,{})})]})]}),t.jsx(o.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(h,{})})]})},N=()=>t.jsxs(t.Fragment,{children:[t.jsx(C,{}),t.jsx(M,{}),t.jsx(g,{})]});export{N as default};
