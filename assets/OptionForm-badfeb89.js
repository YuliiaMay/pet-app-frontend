import{s as r,d as n,a as i,j as e}from"./index-f0a325f4.js";import{s as d,a as u,b as g}from"./selectors-83a9eece.js";const p=r.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 140px;
`,l=r.button`
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
`,m=()=>{n(d);const t=n(u),s=n(g);console.log(s);const[x,c]=i.useState(t),o=({target:a})=>{c(a)};return e.jsx("div",{children:e.jsxs(p,{children:[e.jsx("li",{children:e.jsx(l,{type:"button",value:"pet",onClick:o,children:"your pet"})}),e.jsx("li",{children:e.jsx(l,{type:"button",value:"sell",onClick:o,children:"sell"})}),e.jsx("li",{children:e.jsx(l,{type:"button",value:"lost-found",onClick:o,children:"lost/found"})}),e.jsx("li",{children:e.jsx(l,{type:"button",value:"in-good-hands",onClick:o,children:"in good hands"})})]})})};export{m as default};
