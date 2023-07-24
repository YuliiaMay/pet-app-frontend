import{s as e,N as i,L as s,j as o,a as d,O as a}from"./index-fbcc4b5f.js";import{F as c}from"./FormTitle-4296bb2c.js";import"./formik.esm-2dbae2ab.js";const x=e.div`
    background-color: ${t=>t.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,h=e.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
`,r=e(i)`
    color: ${t=>t.theme.color.grey};

    &.active {
        color: ${t=>t.theme.color.blue};

        > div {
            background-color: ${t=>t.theme.background.accentBlue};
        }
    }

    
`,n=e.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    background-color: ${t=>t.theme.background.lightBlue};
    margin-top: 12px;    
`,l=e.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,p=e.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${t=>t.theme.border.shadow};
    }   
`,m=e(s)`
    color: ${t=>t.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,g=e.button`
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
`,u=e.span`
    color: ${t=>t.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,j=()=>o.jsxs(l,{children:[o.jsx(p,{children:o.jsx(m,{children:"Cancel"})}),o.jsx(g,{children:o.jsx(u,{children:"Next"})})]}),b=()=>o.jsx("form",{children:o.jsx(d.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(a,{})})}),f=()=>o.jsxs(x,{children:[o.jsx(c,{}),o.jsxs(h,{children:[o.jsx("div",{children:o.jsxs(r,{to:"option",children:["Choose  option",o.jsx(n,{})]})}),o.jsx("div",{children:o.jsxs(r,{to:"details",children:["Personal details",o.jsx(n,{})]})}),o.jsx("div",{children:o.jsxs(r,{to:"more-info",children:["More info",o.jsx(n,{})]})})]}),o.jsx(b,{}),o.jsx(j,{})]}),B=()=>o.jsx(o.Fragment,{children:o.jsx(f,{})});export{B as default};
