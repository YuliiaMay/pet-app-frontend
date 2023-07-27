import{s as n,j as t,i as r,L as R,u as x,o as E,k as p,a as g,m as Y,n as U,p as I}from"./index-07a4f5ed.js";const J=n.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,D=n.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,T=()=>t.jsx(D,{children:"Add pet"}),f=e=>e.pet.FormStage,y=e=>e.pet.OptionForm.category,S=e=>e.pet.DetailsForm.name,j=e=>e.pet.DetailsForm.birthday,A=e=>e.pet.DetailsForm.breed,C=e=>e.pet.DetailsForm.title,w=e=>e.pet.DetailsForm.type,B=e=>e.pet.MoreInfoForm.sex,M=e=>e.pet.MoreInfoForm.imgUrl,N=e=>e.pet.MoreInfoForm.text,Q=e=>e.pet.MoreInfoForm.location,X=e=>e.pet.MoreInfoForm.price,K=n.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,L=n.div`
`,V=n.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,W=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,Z=n.div`
`,$=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,q=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,z=n.div`
`,G=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,H=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,P=()=>{const e=r(f);return t.jsxs(K,{children:[t.jsxs(L,{children:[t.jsx(V,{$formStage:e,children:"Choose  option"}),t.jsx(W,{$formStage:e})]}),t.jsx(Z,{children:t.jsxs($,{$formStage:e,children:["Personal details",t.jsx(q,{$formStage:e})]})}),t.jsxs(z,{children:[t.jsx(G,{$formStage:e,children:"More info"}),t.jsx(H,{$formStage:e})]})]})},O=n.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 140px;
`,m=n.button`
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
`,_=n.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,ee=n.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.shadow};
    }   
`,te=n(R)`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,oe=n.button`
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
`,ne=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,b=({onClick:e})=>t.jsxs(_,{children:[t.jsx(ee,{children:t.jsx(te,{children:"Cancel"})}),t.jsx(oe,{onClick:e,type:"button",children:t.jsx(ne,{children:"Next"})})]}),re=()=>{const e=x(),s=r(y),a=({target:{value:o}})=>{e(E({category:o}))},i=()=>{(s==="your pet"||s==="sell"||s==="lost"||s==="good hands")&&e(p(2))};return t.jsxs("div",{children:[t.jsxs(O,{children:[t.jsx("li",{children:t.jsx(m,{type:"button",value:"your pet",onClick:a,children:"your pet"})}),t.jsx("li",{children:t.jsx(m,{type:"button",value:"sell",onClick:a,children:"sell"})}),t.jsx("li",{children:t.jsx(m,{type:"button",value:"lost",onClick:a,children:"lost/found"})}),t.jsx("li",{children:t.jsx(m,{type:"button",value:"good hands",onClick:a,children:"in good hands"})})]}),t.jsx(b,{onClick:i})]})},se=n.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`,ae=()=>{const e=x(),[s,a]=g.useState({name:r(S)||"",birthday:r(j)||"",breed:r(A)||"",title:r(C)||"",type:r(w)||""}),i=({target:c})=>{const{name:h,value:u}=c;a({...s,[h]:u})},o=c=>{c.preventDefault(),e(Y({name:s.name,birthday:s.birthday,breed:s.breed,title:s.title,type:s.type})),e(p(3))};return t.jsx(t.Fragment,{children:t.jsxs(se,{children:[t.jsx("label",{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx("input",{type:"text",id:"pet-name",name:"name",onChange:i}),t.jsx("label",{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx("input",{type:"date",id:"pet-birth",name:"birthday",onChange:i}),t.jsx("label",{htmlFor:"pet-type",children:"Type"}),t.jsx("input",{type:"text",id:"pet-type",name:"type",onChange:i}),t.jsx(b,{onClick:o})]})})},ie="data:image/png;base64,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",ce=()=>{const e=x(),s=g.useRef(null),[a,i]=g.useState(null),[o,c]=g.useState({category:r(y)||"",name:r(S)||"",birthday:r(j)||"",breed:r(A)||"",title:r(C)||"",type:r(w)||"",sex:r(B)||"",imgUrl:r(M)||"",text:r(N)||"",location:r(Q)||"",price:r(X)||""}),h=({target:d})=>{const{name:l,value:F}=d;c({...o,[l]:F})},u=()=>{s.current.click()},k=({target:d})=>{const l=d.files[0];i(l)},v=d=>{d.preventDefault(),e(U({sex:o.sex,imgUrl:o.imgUrl,text:o.text,location:o.location,price:o.price})),e(p("success"));const l={category:o.category,name:o.name,birthday:o.birthday,breed:o.breed,title:o.title,type:o.type,sex:o.sex,imgUrl:o.imgUrl,text:o.text,location:o.location,price:o.price};console.log(l),e(I(l))};return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsxs("div",{onClick:u,children:[t.jsx("label",{htmlFor:"pet-avatar",children:"Load the pet’s image:"}),t.jsx("input",{id:"pet-avatar",type:"file",ref:s,name:"imgUrl",onClick:k,onChange:h,style:{display:"none"}}),a?t.jsx("img",{id:"image",src:URL.createObjectURL(a),alt:"pet`s photo",style:{width:182,height:182}}):t.jsx("img",{src:ie,alt:"pet`s photo"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"comment",children:"Comments"}),t.jsx("textarea",{type:"text",id:"comment",placeholder:"Type of pet",name:"text",onChange:h})]}),t.jsx(b,{onClick:v})]})})},le=()=>{const e=r(f);return t.jsxs(J,{children:[t.jsx(T,{}),t.jsx(P,{}),e===1&&t.jsx(re,{stage:e}),e===2&&t.jsx(ae,{stage:e}),(e===3||e==="success")&&t.jsx(ce,{stage:e})]})},he=()=>t.jsx(t.Fragment,{children:t.jsx(le,{})});export{he as default};
