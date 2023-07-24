import{s as n,j as o}from"./index-4556a271.js";const r=n.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 140px;
`,e=n.button`
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
`,i=()=>o.jsx("div",{children:o.jsxs(r,{children:[o.jsx("li",{children:o.jsx(e,{type:"button",children:"your pet"})}),o.jsx("li",{children:o.jsx(e,{type:"button",children:"sell"})}),o.jsx("li",{children:o.jsx(e,{type:"button",children:"lost/found"})}),o.jsx("li",{children:o.jsx(e,{type:"button",children:"in good hands"})})]})});export{i as default};
