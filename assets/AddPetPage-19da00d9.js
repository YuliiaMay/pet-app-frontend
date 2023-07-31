import{s as n,j as t,f as o,L as T,u as S,r as p,o as J,p as A,q as B,t as N}from"./index-522e0d14.js";import{a as w,b as C,F as k}from"./formik.esm-215db4fa.js";const U=n.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,M=n.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,Q=({title:e})=>t.jsx(M,{children:e}),y=e=>e.pet.FormStage,f=e=>e.pet.OptionForm.category,E=e=>e.pet.DetailsForm.name,v=e=>e.pet.DetailsForm.birthday,R=e=>e.pet.DetailsForm.breed,I=e=>e.pet.DetailsForm.title,Y=e=>e.pet.DetailsForm.type,X=e=>e.pet.MoreInfoForm.sex,K=e=>e.pet.MoreInfoForm.avatar,V=e=>e.pet.MoreInfoForm.comments,L=e=>e.pet.MoreInfoForm.location,$=e=>e.pet.MoreInfoForm.price,W=e=>e.pet,q=n.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,z=n.div`
`,Z=n.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,G=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,H=n.div`
`,P=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,O=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,_=n.div`
`,ee=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,te=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,oe=()=>{const e=o(y);return t.jsxs(q,{children:[t.jsxs(z,{children:[t.jsx(Z,{$formStage:e,children:"Choose  option"}),t.jsx(G,{$formStage:e})]}),t.jsx(H,{children:t.jsxs(P,{$formStage:e,children:["Personal details",t.jsx(O,{$formStage:e})]})}),t.jsxs(_,{children:[t.jsx(ee,{$formStage:e,children:"More info"}),t.jsx(te,{$formStage:e})]})]})},ne=n.ul`
    // display: flex;
    // flex-direction: column;
    // gap: 12px;
    margin-bottom: 140px;
`,g=n(w)`
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
`,re=n.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,se=n.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.shadow};
    }   
`,ae=n(T)`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,ie=n.button`
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
`,ce=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,j=({onClick:e})=>t.jsxs(re,{children:[t.jsx(se,{children:t.jsx(ae,{children:"Cancel"})}),t.jsx(ie,{onClick:e,type:"button",children:t.jsx(ce,{children:"Next"})})]}),le=()=>{const e=S(),c=o(f),[s,u]=p.useState(!1),d={category:c},r=({target:{value:h}})=>{e(J({category:h})),u(!0)},m=()=>{(c==="your pet"||c==="sell"||c==="lost"||c==="good hands")&&e(A(2))};return t.jsx(C,{initialValues:d,onSubmit:m,children:t.jsxs(k,{children:[t.jsxs(ne,{children:[t.jsx(g,{as:"button",value:"your pet",onClick:r,children:"your pet"}),t.jsx(g,{as:"button",value:"sell",onClick:r,children:"sell"}),t.jsx(g,{as:"button",value:"lost",onClick:r,children:"lost/found"}),t.jsx(g,{as:"button",value:"good hands",onClick:r,children:"in good hands"})]}),t.jsx(j,{onClick:m,isSelected:s})]})})},de=n(k)`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`,x=n.label`
    font-weight: 500,
    font-size: 20px,
    margin-bottom: 8px,
`,b=n(w)`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,me=()=>{const e=S(),c=o(f),[s,u]=p.useState({name:o(E)||"",birthday:o(v)||"",breed:o(R)||"",title:o(I)||"",type:o(Y)||""}),d={name:s.name,birthday:s.birthday,breed:s.breed,title:s.title,type:s.type},r=h=>{h.preventDefault(),e(B({name:s.name,birthday:s.birthday,breed:s.breed,title:s.title,type:s.type})),e(A(3))},m=o(W);return console.log(m),t.jsx(C,{initialValues:d,onSubmit:r,children:t.jsxs(de,{children:[(c==="sell"||"lost")&&t.jsxs(t.Fragment,{children:[t.jsx(x,{htmlFor:"title",children:"Title of add"}),t.jsx(b,{placeholder:"Type title for adv",type:"text",id:"title",name:"title"})]}),t.jsx(x,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(b,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name"}),t.jsx(x,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(b,{type:"date",id:"pet-birth",name:"birthday"}),t.jsx(x,{htmlFor:"pet-type",children:"Type"}),t.jsx(b,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type"}),t.jsx(j,{onClick:r})]})})},he="data:image/png;base64,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",pe=()=>{const[e,c]=p.useState(null),[s,u]=p.useState(""),d=S(),[r,m]=p.useState({category:o(f)||"",name:o(E)||"",birthday:o(v)||"",breed:o(R)||"",title:o(I)||"",type:o(Y)||"",sex:o(X)||"",file:o(K)||"",comments:o(V)||"",location:o(L)||"",price:o($)||""}),h=l=>{let i=l.target.files[0];u(i);const a=new FileReader;a.onloadend=()=>{c(a.result)},a.readAsDataURL(i)},F=({target:l})=>{const{name:i,value:a}=l;m({...r,[i]:a})},D=l=>{l.preventDefault();const i={category:r.category,name:r.name,birthday:r.birthday,breed:r.breed,title:r.title,type:r.type,sex:r.sex,file:s,comments:r.comments,location:r.location,price:r.price},a=new FormData;a.append("category",i.category),a.append("name",i.name),a.append("birthday",i.birthday),a.append("breed",i.breed),a.append("title",i.title),a.append("type",i.type),a.append("sex",i.sex),a.append("file",i.file),a.append("comments",i.comments),a.append("location",i.location),a.append("price",i.price),d(N(a)),d(A("success"))};return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"upload"}),t.jsx("div",{children:!e&&t.jsx("img",{src:he,alt:"pet`s photo"})}),t.jsx("input",{type:"file",name:"upload",id:"upload",onChange:l=>h(l)})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"comment",children:"Comments"}),t.jsx("textarea",{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:F})]}),t.jsx(j,{onClick:D})]})})},ue=()=>{const e=o(y),c=o(f),s=o(y);return t.jsxs(U,{children:[t.jsx(Q,{title:c==="your pet"||c===null&&"Add pet"||c==="sell"&&s!==1&&"Add pet for sell"||c==="lost"&&s!==1&&"Add lost pet"||c==="good hands"&&s!==1&&"Add pet in good hands"}),t.jsx(oe,{}),e===1&&t.jsx(le,{stage:e}),e===2&&t.jsx(me,{stage:e}),(e===3||e==="success")&&t.jsx(pe,{stage:e})]})},be=()=>t.jsx(t.Fragment,{children:t.jsx(ue,{})});export{be as default};
