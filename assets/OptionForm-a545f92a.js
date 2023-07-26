import{s as o,L as x,j as e,d as a,a as i,f as g,o as m}from"./index-67318e3e.js";import{s as b,a as f,b as j}from"./selectors-83a9eece.js";import{u as y}from"./useDispatch-9d991a4a.js";const k=o.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 140px;
`,r=o.button`
    background-color: ${t=>t.theme.background.lightBlue};
    color: ${t=>t.theme.color.blue};
    padding: 8px 16px;
    border-radius: 40px;
    border: none;


    &:hover,
    &:focus {
        color: ${t=>t.theme.color.wight};
        background-color: ${t=>t.theme.background.accentBlue}
    }
`,C=o.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,v=o.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${t=>t.theme.border.shadow};
    }   
`,w=o(x)`
    color: ${t=>t.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,B=o.button`
    width: 248px;
    height: 40px;
    background-color: ${t=>t.theme.background.accentBlue};
    border-radius: 40px;
    border: none;
    padding-top: 9px;
    padding-bottom: 9px;

    &:hover,
    &:focus {
        box-shadow: ${t=>t.theme.border.shadow};
    }
`,$=o.span`
    color: ${t=>t.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,S=({onSubmit:t})=>e.jsxs(C,{children:[e.jsx(v,{children:e.jsx(w,{children:"Cancel"})}),e.jsx(B,{onSubmit:t,type:"button",children:e.jsx($,{children:"Next"})})]}),E=()=>{const t=y();a(b);const l=a(f);a(j);const[s,d]=i.useState(!1),[c,u]=i.useState({category:l||""}),n=({target:{value:p}})=>{u({...c,category:p})},h=()=>{d(!0)};return i.useEffect(()=>{s&&(t(g(2)),t(m({category:c.category})))},[c,s,t]),console.log(s),e.jsxs("form",{onClick:h,children:[e.jsxs(k,{children:[e.jsx("li",{children:e.jsx(r,{type:"button",value:"pet",onClick:n,children:"your pet"})}),e.jsx("li",{children:e.jsx(r,{type:"button",value:"sell",onClick:n,children:"sell"})}),e.jsx("li",{children:e.jsx(r,{type:"button",value:"lost-found",onClick:n,children:"lost/found"})}),e.jsx("li",{children:e.jsx(r,{type:"button",value:"in-good-hands",onClick:n,children:"in good hands"})})]}),e.jsx(S,{})]})};export{E as default};
