import{s as o,j as t,f as r,L as B,G as L,u as b,o as f,p as M,q as N,r as w,t as $,v as Q}from"./index-24a5fdef.js";import{F as C,a as V,b as X,u as K}from"./formik.esm-b461d879.js";const z=o.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,G=o.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,W=({title:e})=>t.jsx(G,{children:e}),S=e=>e.pet.FormStage,y=e=>e.pet.OptionForm.category,q=e=>e.pet.DetailsForm.name,Z=e=>e.pet.DetailsForm.birthday,H=e=>e.pet.DetailsForm.breed,P=e=>e.pet.DetailsForm.title,O=e=>e.pet.DetailsForm.type,_=e=>e.pet.MoreInfoForm.sex,ee=e=>e.pet.MoreInfoForm.avatar,te=e=>e.pet.MoreInfoForm.comments,oe=e=>e.pet.MoreInfoForm.location,ne=e=>e.pet.MoreInfoForm.price,re=e=>e.pet,se=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,ae=o.div`
`,ce=o.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,ie=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,le=o.div`
`,de=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,me=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,he=o.div`
`,pe=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,ge=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,ue=()=>{const e=r(S);return t.jsxs(se,{children:[t.jsxs(ae,{children:[t.jsx(ce,{$formStage:e,children:"Choose  option"}),t.jsx(ie,{$formStage:e})]}),t.jsx(le,{children:t.jsxs(de,{$formStage:e,children:["Personal details",t.jsx(me,{$formStage:e})]})}),t.jsxs(he,{children:[t.jsx(pe,{$formStage:e,children:"More info"}),t.jsx(ge,{$formStage:e})]})]})},xe=o.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
`,p=o.input`
    background-color: ${e=>e.theme.background.lightBlue};
    color: ${e=>e.theme.color.blue};
    padding: 8px 16px;
    border-radius: 40px;
    border: none;
    cursor: grab;

    &:hover,
    &:focus {
        color: ${e=>e.theme.color.wight};
        background-color: ${e=>e.theme.background.accentBlue}
    }
`,be=o.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,fe=o(B)`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.shadow};
    }   
`,ye=o.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,je=o.button`
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
`,F=o.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`;function Se(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}const A=({onClick:e})=>{const n=r(S),c=b();let i;const l=()=>{if(n===3||n===2)return i=n-1,i},d=()=>{console.log(i),c(f(l()))};return t.jsx(t.Fragment,{children:n!=="success"&&t.jsxs(be,{children:[t.jsxs(fe,{onClick:d,children:[t.jsx(Se,{}),t.jsx(ye,{children:n===1?"Cancel":"Back"})]}),t.jsx(je,{onClick:e,type:"submit",children:n===3?t.jsx(F,{children:"Done"}):t.jsx(F,{children:"Next"})})]})})},Ae=()=>{const e=b(),n=r(y),c=({target:{value:l}})=>{e(M({category:l}))},i=()=>{(n==="your pet"||n==="sell"||n==="lost"||n==="good hands")&&e(f(2))};return t.jsxs("div",{children:[t.jsxs(xe,{children:[t.jsx(p,{type:"button",value:"your pet",name:"category-your-pet",onClick:c}),t.jsx(p,{type:"button",value:"sell",name:"category-sell",onClick:c}),t.jsx(p,{type:"button",value:"lost",name:"category-lost",onClick:c}),t.jsx(p,{type:"button",value:"good hands",name:"category-good-hands",onClick:c})]}),t.jsx(A,{onClick:i})]})};o(C)`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;const g=o.label`
    font-weight: 500,
    font-size: 20px,
    margin-bottom: 8px,
`,u=o(V)`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,we={name:"",birthday:"",title:"",type:""},Fe=()=>{const e=b(),n=r(y),c=(l,d)=>{e(N(l)),e(f(3))},i=r(re);return console.log(i),t.jsx(X,{initialValues:we,onSubmit:c,children:t.jsxs(C,{children:[(n==="sell"||n==="lost"||n==="good hands")&&t.jsxs(t.Fragment,{children:[t.jsx(g,{htmlFor:"title",children:"Title of add"}),t.jsx(u,{placeholder:"Type title for adv",type:"text",id:"title",name:"title"})]}),t.jsx(g,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(u,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name"}),t.jsx(g,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(u,{type:"date",id:"pet-birth",name:"birthday"}),t.jsx(g,{htmlFor:"pet-type",children:"Type"}),t.jsx(u,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type"}),t.jsx(A,{})]})})},Ce="data:image/png;base64,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",x=o.label`
    font-weight: 500,
    font-size: 20px,
    margin-bottom: 8px,
`,j=o.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,ve=o.textarea`
    border-radius: 20px;
    border: ${e=>e.theme.border.blue};
    width: 394px;
    height: auto;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,ke=()=>{const[e,n]=w.useState(null),[c,i]=w.useState(""),l=b(),d=r(y),v=r(q),k=r(Z),E=r(H),R=r(P),I=r(O),Y=r(_);r(ee);const T=r(te),D=r(oe),J=r(ne),m=K({initialValues:{sex:"",imgUrl:"",comments:"",location:"",price:""},onSubmit:h=>{l($(h));const a={category:d,name:v,birthday:k,breed:E,title:R,type:I,sex:Y,file:c,comments:T,location:D,price:J},s=new FormData;s.append("category",a.category),s.append("name",a.name),s.append("birthday",a.birthday),s.append("breed",a.breed),s.append("title",a.title),s.append("type",a.type),s.append("sex",a.sex),s.append("file",c),s.append("comments",a.comments),s.append("location",a.location),s.append("price",a.price),l(Q(s)),l(f("success"))}}),U=h=>{let a=h.target.files[0];i(a);const s=new FileReader;s.onloadend=()=>{n(s.result)},s.readAsDataURL(a)};return t.jsxs("form",{onSubmit:m.handleSubmit,encType:"multipart/form-data",children:[t.jsxs("div",{children:[t.jsx(x,{htmlFor:"imgUrl"}),t.jsx("div",{children:!e&&t.jsx("img",{src:Ce,alt:"pet`s photo"})}),t.jsx(j,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:h=>U(h)})]}),(d==="sell"||"lost")&&t.jsxs("div",{children:[t.jsx(x,{htmlFor:"location",children:"Location"}),t.jsx(j,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:m.handleChange,value:m.values.location})]}),d==="sell"&&t.jsxs("div",{children:[t.jsx(x,{htmlFor:"price",children:"Price"}),t.jsx(j,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:m.handleChange,value:m.values.price})]}),t.jsxs("div",{children:[t.jsx(x,{htmlFor:"comment",children:"Comments"}),t.jsx(ve,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:m.handleChange,value:m.values.comments})]}),t.jsx(A,{})]})},Ee="/pet-app-frontend/assets/avatar-c2617e09.png",Re=()=>t.jsx(t.Fragment,{children:t.jsx("img",{src:Ee,alt:"success",width:400})}),Ie=()=>{const e=r(S),n=r(y);return t.jsxs(z,{children:[t.jsx(W,{title:n===null&&"Add pet"||n==="your pet"&&"Add pet"||n==="sell"&&"Add pet for sell"||n==="lost"&&"Add lost pet"||n==="good hands"&&"Add pet in good hands"}),t.jsx(ue,{}),e===1&&t.jsx(Ae,{}),e===2&&t.jsx(Fe,{}),e===3&&t.jsx(ke,{}),e==="success"&&t.jsx(Re,{})]})},De=()=>t.jsx(t.Fragment,{children:t.jsx(Ie,{})});export{De as default};
