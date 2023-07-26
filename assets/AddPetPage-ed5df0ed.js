import{s as o,N as r,L as n,j as t,d as a,a as i,O as d}from"./index-1a738a8c.js";import{s as c}from"./selectors-83a9eece.js";import{F as s}from"./FormTitle-210bf948.js";const l=o.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,x=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,h=o(r)`
    color: ${e=>e.$formStage>=1?e.theme.color.blue:e.theme.color.grey};
`,g=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage>=1?e.theme.background.accentBlue:e.theme.background.lightBlue};           
`,m=o(r)`
    color: ${e=>e.$formStage>=2?e.theme.color.blue:e.theme.color.grey};
`,u=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage>=2?e.theme.background.accentBlue:e.theme.background.lightBlue};           
`,p=o(r)`
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.theme.color.grey};
`,b=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.accentBlue:e.theme.background.lightBlue};           
`,f=o.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,j=o.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.shadow};
    }   
`,$=o(n)`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,k=o.button`
    width: 248px;
    height: 40px;
    background-color: ${e=>e.theme.background.accentBlue};
    border-radius: 40px;
    border: none;
    padding-top: 9px;
    padding-bottom: 9px;

    &:hover,
    &:focus {
        box-shadow: ${e=>e.theme.border.shadow};
    }
`,S=o.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,v=()=>t.jsxs(f,{children:[t.jsx(j,{children:t.jsx($,{children:"Cancel"})}),t.jsx(k,{children:t.jsx(S,{children:"Next"})})]}),w=()=>{const e=a(c);return console.log(e),t.jsxs(l,{children:[t.jsx(s,{}),t.jsxs(x,{children:[t.jsx("div",{children:t.jsxs(h,{to:"option",$formStage:e,children:["Choose  option",t.jsx(g,{$formStage:e})]})}),t.jsx("div",{children:t.jsxs(m,{to:"details",$formStage:e,children:["Personal details",t.jsx(u,{$formStage:e})]})}),t.jsx("div",{children:t.jsxs(p,{to:"more-info",$formStage:e,children:["More info",t.jsx(b,{$formStage:e})]})})]}),t.jsx(i.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(d,{})}),t.jsx(v,{})]})},F=()=>t.jsx(t.Fragment,{children:t.jsx(w,{})});export{F as default};
