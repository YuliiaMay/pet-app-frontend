import{s as n,j as t,f as r,L as v,u as x,r as g,o as R,i as b,k as Y,m as I}from"./index-1c6c42bd.js";import{a as D,b as J,F as T}from"./formik.esm-1b11aad2.js";const B=n.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,N=n.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,U=()=>t.jsx(N,{children:"Add pet"}),y=e=>e.pet.FormStage,j=e=>e.pet.OptionForm.category,A=e=>e.pet.DetailsForm.name,C=e=>e.pet.DetailsForm.birthday,F=e=>e.pet.DetailsForm.breed,w=e=>e.pet.DetailsForm.title,k=e=>e.pet.DetailsForm.type,M=e=>e.pet.MoreInfoForm.sex,Q=e=>e.pet.MoreInfoForm.avatar,X=e=>e.pet.MoreInfoForm.comments,K=e=>e.pet.MoreInfoForm.location,V=e=>e.pet.MoreInfoForm.price,L=n.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,W=n.div`
`,$=n.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,Z=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,q=n.div`
`,G=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,z=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,H=n.div`
`,O=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,P=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,_=()=>{const e=r(y);return t.jsxs(L,{children:[t.jsxs(W,{children:[t.jsx($,{$formStage:e,children:"Choose  option"}),t.jsx(Z,{$formStage:e})]}),t.jsx(q,{children:t.jsxs(G,{$formStage:e,children:["Personal details",t.jsx(z,{$formStage:e})]})}),t.jsxs(H,{children:[t.jsx(O,{$formStage:e,children:"More info"}),t.jsx(P,{$formStage:e})]})]})},ee=n.ul`
    // display: flex;
    // flex-direction: column;
    // gap: 12px;
    margin-bottom: 140px;
`,p=n(D)`
    background-color: ${e=>e.theme.background.lightBlue};
    color: ${e=>e.theme.color.blue};
    padding: 8px 16px;
    border-radius: 40px;
    border: none;


    &:not(:last-child) {
        margin-bottom: 12px;
    }


    &:hover,
    &:focus {
        color: ${e=>e.theme.color.wight};
        background-color: ${e=>e.theme.background.accentBlue}
    }
`,te=n.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,oe=n.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.shadow};
    }   
`,ne=n(v)`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,re=n.button`
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
`,se=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,f=({onClick:e})=>t.jsxs(te,{children:[t.jsx(oe,{children:t.jsx(ne,{children:"Cancel"})}),t.jsx(re,{onClick:e,type:"button",children:t.jsx(se,{children:"Next"})})]}),ae=()=>{const e=x(),c=r(j),[h,i]=g.useState(!1),d={category:c},o=({target:{value:u}})=>{e(R({category:u})),i(!0)},m=()=>{(c==="your pet"||c==="sell"||c==="lost"||c==="good hands")&&e(b(2))};return t.jsx(J,{initialValues:d,onSubmit:m,children:t.jsxs(T,{children:[t.jsxs(ee,{children:[t.jsx(p,{as:"button",value:"your pet",onClick:o,children:"your pet"}),t.jsx(p,{as:"button",value:"sell",onClick:o,children:"sell"}),t.jsx(p,{as:"button",value:"lost",onClick:o,children:"lost/found"}),t.jsx(p,{as:"button",value:"good hands",onClick:o,children:"in good hands"})]}),t.jsx(f,{onClick:m,isSelected:h})]})})},ce=n.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`,ie=()=>{const e=x(),[c,h]=g.useState({name:r(A)||"",birthday:r(C)||"",breed:r(F)||"",title:r(w)||"",type:r(k)||""}),i=({target:o})=>{const{name:m,value:u}=o;h({...c,[m]:u})},d=o=>{o.preventDefault(),e(Y({name:c.name,birthday:c.birthday,breed:c.breed,title:c.title,type:c.type})),e(b(3))};return t.jsx(t.Fragment,{children:t.jsxs(ce,{children:[t.jsx("label",{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx("input",{type:"text",id:"pet-name",name:"name",onChange:i}),t.jsx("label",{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx("input",{type:"date",id:"pet-birth",name:"birthday",onChange:i}),t.jsx("label",{htmlFor:"pet-type",children:"Type"}),t.jsx("input",{type:"text",id:"pet-type",name:"type",onChange:i}),t.jsx(f,{onClick:d})]})})},le="data:image/png;base64,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",de=()=>{const[e,c]=g.useState(null),[h,i]=g.useState(""),d=x(),[o,m]=g.useState({category:r(j)||"",name:r(A)||"",birthday:r(C)||"",breed:r(F)||"",title:r(w)||"",type:r(k)||"",sex:r(M)||"",file:r(Q)||"",comments:r(X)||"",location:r(K)||"",price:r(V)||""}),u=l=>{let a=l.target.files[0];i(a);const s=new FileReader;s.onloadend=()=>{c(s.result)},s.readAsDataURL(a)},S=({target:l})=>{const{name:a,value:s}=l;m({...o,[a]:s})},E=l=>{l.preventDefault();const a={category:o.category,name:o.name,birthday:o.birthday,breed:o.breed,title:o.title,type:o.type,sex:o.sex,file:h,comments:o.comments,location:o.location,price:o.price},s=new FormData;s.append("category",a.category),s.append("name",a.name),s.append("birthday",a.birthday),s.append("breed",a.breed),s.append("title",a.title),s.append("type",a.type),s.append("sex",a.sex),s.append("file",a.file),s.append("comments",a.comments),s.append("location",a.location),s.append("price",a.price),d(I(s)),d(b("success"))};return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"upload"}),t.jsx("div",{children:!e&&t.jsx("img",{src:le,alt:"pet`s photo"})}),t.jsx("input",{type:"file",name:"upload",id:"upload",onChange:l=>u(l)})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"comment",children:"Comments"}),t.jsx("textarea",{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:S})]}),t.jsx(f,{onClick:E})]})})},me=()=>{const e=r(y);return t.jsxs(B,{children:[t.jsx(U,{}),t.jsx(_,{}),e===1&&t.jsx(ae,{stage:e}),e===2&&t.jsx(ie,{stage:e}),(e===3||e==="success")&&t.jsx(de,{stage:e})]})},ge=()=>t.jsx(t.Fragment,{children:t.jsx(me,{})});export{ge as default};
