import{s as o,N as r,d as a,j as t,a as n,O as i}from"./index-b6d30496.js";import{s as c}from"./selectors-83a9eece.js";import{F as d}from"./FormTitle-85182ce8.js";const l=o.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,s=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,g=o(r)`
    color: ${e=>e.$formStage>=1?e.theme.color.blue:e.theme.color.grey};
`,m=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage>=1?e.theme.background.accentBlue:e.theme.background.lightBlue};           
`,x=o(r)`
    color: ${e=>e.$formStage>=2?e.theme.color.blue:e.theme.color.grey};
`,h=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage>=2?e.theme.background.accentBlue:e.theme.background.lightBlue};           
`,u=o(r)`
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.theme.color.grey};
`,f=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.accentBlue:e.theme.background.lightBlue};           
`,b=()=>{const e=a(c);return console.log(e),t.jsxs(l,{children:[t.jsx(d,{}),t.jsxs(s,{children:[t.jsx("div",{children:t.jsxs(g,{to:"option",$formStage:e,children:["Choose  option",t.jsx(m,{$formStage:e})]})}),t.jsx("div",{children:t.jsxs(x,{to:"details",$formStage:e,children:["Personal details",t.jsx(h,{$formStage:e})]})}),t.jsx("div",{children:t.jsxs(u,{to:"more-info",$formStage:e,children:["More info",t.jsx(f,{$formStage:e})]})})]}),t.jsx(n.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(i,{})})]})},p=()=>t.jsx(t.Fragment,{children:t.jsx(b,{})});export{p as default};
