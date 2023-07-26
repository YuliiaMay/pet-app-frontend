import{s as o,j as t,d,L as f,a as l,f as p,o as S}from"./index-256b5008.js";import{u as j}from"./useDispatch-e1273b18.js";const A=o.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,w=o.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,h=()=>t.jsx(w,{children:"Add pet"}),u=e=>e.pet.FormStage,y=e=>e.pet.OptionForm.category,C=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,E=o.div`
`,k=o.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,R=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,v=o.div`
`,Y=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,F=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,J=o.div`
`,B=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,I=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,Q=()=>{const e=d(u);return t.jsxs(C,{children:[t.jsxs(E,{children:[t.jsx(k,{$formStage:e,children:"Choose  option"}),t.jsx(R,{$formStage:e})]}),t.jsx(v,{children:t.jsxs(Y,{$formStage:e,children:["Personal details",t.jsx(F,{$formStage:e})]})}),t.jsxs(J,{children:[t.jsx(B,{$formStage:e,children:"More info"}),t.jsx(I,{$formStage:e})]})]})},U=o.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 140px;
`,n=o.button`
    background-color: ${e=>e.theme.background.lightBlue};
    color: ${e=>e.theme.color.blue};
    padding: 8px 16px;
    border-radius: 40px;
    border: none;


    &:hover,
    &:focus {
        color: ${e=>e.theme.color.wight};
        background-color: ${e=>e.theme.background.accentBlue}
    }
`,X=o.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,K=o.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.shadow};
    }   
`,T=o(f)`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,D=o.button`
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
`,N=o.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,V=({onSubmit:e})=>t.jsxs(X,{children:[t.jsx(K,{children:t.jsx(T,{children:"Cancel"})}),t.jsx(D,{onSubmit:e,type:"button",children:t.jsx(N,{children:"Next"})})]}),M=({stage:e})=>{const s=j(),g=d(y),[i,m]=l.useState(!1),[c,x]=l.useState({category:g||""}),r=({target:{value:a}})=>{x({...c,category:a})},b=a=>{a.preventDefault(),m(!0)};return l.useEffect(()=>{i&&(s(p(2)),s(S({category:c.category})))},[c,i,s]),console.log(i),t.jsx("form",{onClick:b,children:t.jsxs(U,{children:[t.jsx("li",{children:t.jsx(n,{type:"button",value:"pet",onClick:r,children:"your pet"})}),t.jsx("li",{children:t.jsx(n,{type:"button",value:"sell",onClick:r,children:"sell"})}),t.jsx("li",{children:t.jsx(n,{type:"button",value:"lost-found",onClick:r,children:"lost/found"})}),t.jsx("li",{children:t.jsx(n,{type:"button",value:"in-good-hands",onClick:r,children:"in good hands"})})]})})},L=o.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`,W=({stage:e})=>t.jsx(t.Fragment,{children:t.jsxs(L,{children:[t.jsx("label",{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx("input",{type:"text",id:"pet-name"}),t.jsx("label",{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx("input",{type:"text",id:"pet-birth"}),t.jsx("label",{htmlFor:"pet-breed",children:"Breed"}),t.jsx("input",{type:"text",id:"pet-breed"})]})}),Z="data:image/png;base64,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",$=({stage:e})=>t.jsxs(t.Fragment,{children:[t.jsx(h,{}),t.jsxs("div",{children:[t.jsx("p",{children:"Load the pet’s image:"}),t.jsx("div",{children:t.jsx("img",{src:Z,alt:"default avatar"})}),t.jsx("label",{htmlFor:"comment",children:"Comments"}),t.jsx("textarea",{type:"text",id:"comment",placeholder:"Type of pet"})]})]}),q=()=>{const e=d(u);return t.jsxs(A,{children:[t.jsx(h,{}),t.jsx(Q,{}),e===1&&t.jsx(M,{stage:e}),e===2&&t.jsx(W,{stage:e}),(e===3||e==="success")&&t.jsx($,{stage:e}),t.jsx(V,{})]})},O=()=>t.jsx(t.Fragment,{children:t.jsx(q,{})});export{O as default};
