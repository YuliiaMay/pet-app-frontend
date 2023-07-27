import{s as o,j as t,i as h,L as p,u as m,o as f,k as g,a as d,m as j}from"./index-ee2f9a25.js";const S=o.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,y=o.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,A=()=>t.jsx(y,{children:"Add pet"}),x=e=>e.pet.FormStage,C=e=>e.pet.OptionForm.category,w=e=>e.pet.DataForm.name,k=e=>e.pet.DataForm.birthday,E=e=>e.pet.DataForm.breed,R=e=>e.pet.DataForm.title,v=e=>e.pet.DataForm.type,F=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,Y=o.div`
`,J=o.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,B=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,D=o.div`
`,U=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,I=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,N=o.div`
`,T=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,Q=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,X=()=>{const e=h(x);return t.jsxs(F,{children:[t.jsxs(Y,{children:[t.jsx(J,{$formStage:e,children:"Choose  option"}),t.jsx(B,{$formStage:e})]}),t.jsx(D,{children:t.jsxs(U,{$formStage:e,children:["Personal details",t.jsx(I,{$formStage:e})]})}),t.jsxs(N,{children:[t.jsx(T,{$formStage:e,children:"More info"}),t.jsx(Q,{$formStage:e})]})]})},K=o.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 140px;
`,c=o.button`
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
`,V=o.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,L=o.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.shadow};
    }   
`,M=o(p)`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,W=o.button`
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
`,Z=o.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,u=({onClick:e})=>t.jsxs(V,{children:[t.jsx(L,{children:t.jsx(M,{children:"Cancel"})}),t.jsx(W,{onClick:e,type:"button",children:t.jsx(Z,{children:"Next"})})]}),$=()=>{const e=m(),n=h(C),r=({target:{value:i}})=>{e(f({category:i}))},s=()=>{(n==="pet"||n==="sell"||n==="lost-found"||n==="in-good-hands")&&e(g(2))};return t.jsxs("div",{children:[t.jsxs(K,{children:[t.jsx("li",{children:t.jsx(c,{type:"button",value:"pet",onClick:r,children:"your pet"})}),t.jsx("li",{children:t.jsx(c,{type:"button",value:"sell",onClick:r,children:"sell"})}),t.jsx("li",{children:t.jsx(c,{type:"button",value:"lost-found",onClick:r,children:"lost/found"})}),t.jsx("li",{children:t.jsx(c,{type:"button",value:"in-good-hands",onClick:r,children:"in good hands"})})]}),t.jsx(u,{onClick:s})]})},q=o.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`,z=()=>{const e=m(),[n,r]=d.useState({name:w||"",birthday:k||"",breed:E||"",title:R||"",type:v||""}),s=({target:a})=>{const{name:l,value:b}=a;r({...n,[l]:b})},i=a=>{a.preventDefault(),e(j({name:n.name,birthday:n.birthday,breed:n.breed,title:"",type:""})),e(g(3))};return t.jsx(t.Fragment,{children:t.jsxs(q,{children:[t.jsx("label",{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx("input",{type:"text",id:"pet-name",name:"name",onChange:s}),t.jsx("label",{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx("input",{type:"date",id:"pet-birth",name:"birthday",onChange:s}),t.jsx("label",{htmlFor:"pet-breed",children:"Breed"}),t.jsx("input",{type:"text",id:"pet-breed",name:"breed",onChange:s}),t.jsx(u,{onClick:i})]})})},G="data:image/png;base64,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",H=()=>{const e=d.useRef(null),[n,r]=d.useState(null),s=()=>{e.current.click()},i=({target:a})=>{const l=a.files[0];r(l)};return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsxs("div",{onClick:s,children:[t.jsx("label",{htmlFor:"pet-avatar",children:"Load the pet’s image:"}),t.jsx("input",{id:"pet-avatar",type:"file",ref:e,onClick:i,style:{display:"none"}}),n?t.jsx("img",{src:URL.createObjectURL(n),alt:"pet`s photo",style:{width:182,height:182}}):t.jsx("img",{src:G,alt:"pet`s photo"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"comment",children:"Comments"}),t.jsx("textarea",{type:"text",id:"comment",placeholder:"Type of pet"})]}),t.jsx(u,{})]})})},O=()=>{const e=h(x);return t.jsxs(S,{children:[t.jsx(A,{}),t.jsx(X,{}),e===1&&t.jsx($,{stage:e}),e===2&&t.jsx(z,{stage:e}),(e===3||e==="success")&&t.jsx(H,{stage:e})]})},_=()=>t.jsx(t.Fragment,{children:t.jsx(O,{})});export{_ as default};
