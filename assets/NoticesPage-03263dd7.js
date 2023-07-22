import{G as c,s as o,r as l,j as t}from"./index-61c9c5d8.js";function h(e){return c({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(e)}const p=o.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-items: center;
`,x=o.h2`
  font-size: 48px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
`,u=o.form`
  display: flex;
  position: relative;
  align-items: center;
`,d=o.input`
  width: 608px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  /* box-shadow: ${e=>e.theme.border.shadow};
  color: ${e=>e.theme.color.yellow}; */
  &:focus {
    outline: none;
  }
`,g=o.button`
  position: absolute;
  right: 20px;
  border: none;
  background-color: inherit;
`;o.button`
  position: absolute;
  right: 20px;
  border: none;
  background-color: inherit;
`;const m=()=>{const[e,n]=l.useState(""),a=r=>{const i=r.currentTarget.value.toLowerCase();n(i)};console.log(e);const s=r=>{r.preventDefault(),e.trim()!==""&&n("")};return t.jsxs(p,{children:[t.jsx(x,{children:"Find your favorite pet"}),t.jsxs(u,{onSubmit:s,children:[t.jsx(d,{type:"text",placeholder:"Search",value:e,onChange:a}),t.jsx(g,{type:"submit",children:t.jsx(h,{color:"#54ADFF",size:24})})]})]})},f=o.section`
  display: flex;
`,S=()=>t.jsx(f,{children:t.jsx(m,{})});export{S as default};
