import{s as n,j as t,f as r,L as X,r as h,u,I as j,p as w,q as R,t as I,v as Y,w as K,b as L}from"./index-8f7a4cab.js";import{F as T,a as z,b as W,u as q}from"./formik.esm-721b6da9.js";const G=n.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,Z=n.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,H=({title:e})=>t.jsx(Z,{children:e}),k=e=>e.pet.FormStage,S=e=>e.pet.OptionForm.category,P=e=>e.pet.DetailsForm.name,O=e=>e.pet.DetailsForm.birthday,_=e=>e.pet.DetailsForm.breed,ee=e=>e.pet.DetailsForm.title,te=e=>e.pet.DetailsForm.type,oe=e=>e.pet.MoreInfoForm.sex,ne=e=>e.pet.MoreInfoForm.comments,se=e=>e.pet.MoreInfoForm.location,re=e=>e.pet.MoreInfoForm.price,ce=e=>e.pet,ie=n.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,ae=n.div`
`,le=n.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,de=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,me=n.div`
`,he=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,pe=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,ue=n.div`
`,xe=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,ge=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,fe=()=>{const e=r(k);return t.jsxs(ie,{children:[t.jsxs(ae,{children:[t.jsx(le,{$formStage:e,children:"Choose  option"}),t.jsx(de,{$formStage:e})]}),t.jsx(me,{children:t.jsxs(he,{$formStage:e,children:["Personal details",t.jsx(pe,{$formStage:e})]})}),t.jsxs(ue,{children:[t.jsx(xe,{$formStage:e,children:"More info"}),t.jsx(ge,{$formStage:e})]})]})},be=n.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
`,g=n.input`
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
`,ye=n.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
`,F=n(X)`
    width: 150px;
    height: 40px;
    border-radius: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.blue};
    }   
`,C=n.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,je=n.button`
    width: 248px;
    height: 40px;
    background-color: ${e=>e.theme.background.accentBlue};
    border-radius: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        box-shadow: ${e=>e.theme.border.shadow};
    }
`,E=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`;function we(e,s){const o=h.useRef(null),i=h.useRef(e);return h.useEffect(()=>{i.current=e},[e]),h.useEffect(()=>{const l=()=>i.current();if(typeof s=="number")return o.current=window.setTimeout(l,s),()=>window.clearTimeout(o.current)},[s]),o}const v=({onClick:e,leaveAddPetForm:s})=>{const o=r(k),i=u();let l;console.log(s);const d=()=>{if(o===3||o===2)return l=o-1,l},x=()=>{i(w(d()))};return t.jsx("div",{children:t.jsx("div",{children:o!=="success"&&t.jsxs(ye,{children:[o===1?t.jsxs(F,{onClick:s,children:[t.jsx(j,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(C,{children:"Cancel"})]}):t.jsxs(F,{onClick:x,children:[t.jsx(j,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(C,{children:"Back"})]}),t.jsxs(je,{onClick:e,type:"submit",children:[o===3?t.jsx(E,{children:"Done"}):t.jsx(E,{children:"Next"}),t.jsx(j,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})})},Se=({leaveAddPetForm:e})=>{const s=u(),o=r(S),i=({target:{value:d}})=>{s(R({category:d}))},l=()=>{(o==="your pet"||o==="sell"||o==="lost/found"||o==="in good hands")&&s(w(2))};return t.jsxs("div",{children:[t.jsxs(be,{children:[t.jsx(g,{type:"button",value:"your pet",name:"category-your-pet",onClick:i}),t.jsx(g,{type:"button",value:"sell",name:"category-sell",onClick:i}),t.jsx(g,{type:"button",value:"lost/found",name:"category-lost",onClick:i}),t.jsx(g,{type:"button",value:"in good hands",name:"category-good-hands",onClick:i})]}),t.jsx(v,{onClick:l,leaveAddPetForm:e})]})};n(T)`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;const f=n.label`
    font-weight: 500,
    font-size: 20px,
    margin-bottom: 8px,
`,b=n(z)`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,Ae={name:"",birthday:"",title:"",type:""},Fe=()=>{const e=u(),s=r(S),o=(l,d)=>{e(I(l)),e(w(3))},i=r(ce);return console.log(i),t.jsx(W,{initialValues:Ae,onSubmit:o,children:t.jsxs(T,{children:[(s==="sell"||s==="lost/found"||s==="in good hands")&&t.jsxs(t.Fragment,{children:[t.jsx(f,{htmlFor:"title",children:"Title of add"}),t.jsx(b,{placeholder:"Type title for adv",type:"text",id:"title",name:"title"})]}),t.jsx(f,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(b,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name"}),t.jsx(f,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(b,{type:"date",id:"pet-birth",name:"birthday"}),t.jsx(f,{htmlFor:"pet-type",children:"Type"}),t.jsx(b,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type"}),t.jsx(v,{})]})})},Ce="data:image/png;base64,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",y=n.label`
    font-weight: 500,
    font-size: 20px,
    margin-bottom: 8px,
`,A=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,ke=n.textarea`
    border-radius: 20px;
    border: ${e=>e.theme.border.blue};
    width: 394px;
    height: auto;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,ve=()=>{const[e,s]=h.useState(null),[o,i]=h.useState(""),l=u(),d=r(S),x=r(P),D=r(O),J=r(_),N=r(ee),U=r(te),B=r(oe),$=r(ne),M=r(se),Q=r(re),m=q({initialValues:{sex:"",imgUrl:"",comments:"",location:"",price:""},onSubmit:p=>{l(Y(p));const a={category:d,name:x,birthday:D,breed:J,title:N,type:U,sex:B,file:o,comments:$,location:M,price:Q},c=new FormData;c.append("category",a.category),c.append("name",a.name),c.append("birthday",a.birthday),c.append("breed",a.breed),c.append("title",a.title),c.append("type",a.type),c.append("sex",a.sex),c.append("file",o),c.append("comments",a.comments),c.append("location",a.location),c.append("price",a.price),l(K(c)),l(w("success"))}}),V=p=>{let a=p.target.files[0];i(a);const c=new FileReader;c.onloadend=()=>{s(c.result)},c.readAsDataURL(a)};return t.jsxs("form",{onSubmit:m.handleSubmit,encType:"multipart/form-data",children:[t.jsxs("div",{children:[t.jsx(y,{htmlFor:"imgUrl"}),t.jsx("div",{children:!e&&t.jsx("img",{src:Ce,alt:"pet`s photo"})}),t.jsx(A,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:p=>V(p)})]}),(d==="sell"||"lost/found")&&t.jsxs("div",{children:[t.jsx(y,{htmlFor:"location",children:"Location"}),t.jsx(A,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:m.handleChange,value:m.values.location})]}),d==="sell"&&t.jsxs("div",{children:[t.jsx(y,{htmlFor:"price",children:"Price"}),t.jsx(A,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:m.handleChange,value:m.values.price})]}),t.jsxs("div",{children:[t.jsx(y,{htmlFor:"comment",children:"Comments"}),t.jsx(ke,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:m.handleChange,value:m.values.comments})]}),t.jsx(v,{})]})},Ee="/pet-app-frontend/assets/success-created-b8079584.png",Re=n.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Ie=n.img`
    width: 300px;
    height: 300px;
`,Ye=({leaveAddPetForm:e})=>{const s=u();we(()=>{o()},5e3);const o=()=>{s(R({category:null}),I({name:"",birthday:"",breed:"",title:"",type:""}),Y({sex:"",imgUrl:"",comments:"",location:"",price:""}))};return t.jsxs(Re,{children:[t.jsx(Ie,{src:Ee,alt:"success",width:300}),t.jsxs(F,{onClick:e,children:[t.jsx(j,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(C,{children:"Go Back"})]})]})},Te=({leaveAddPetForm:e})=>{const s=r(k),o=r(S);return console.log(e),t.jsxs(G,{children:[t.jsx(H,{title:o===null&&"Add pet"||o==="your pet"&&"Add pet"||o==="sell"&&"Add pet for sell"||o==="lost/found"&&"Add lost pet"||o==="in good hands"&&"Add pet in good hands"||o==="success"&&"Your post has been created!"}),t.jsx(fe,{}),s===1&&t.jsx(Se,{leaveAddPetForm:e}),s===2&&t.jsx(Fe,{}),s===3&&t.jsx(ve,{}),s==="success"&&t.jsx(Ye,{leaveAddPetForm:e})]})},Ne=()=>{var o;const e=L(),s=h.useRef(((o=e.state)==null?void 0:o.from)??"notices/sell");return t.jsx(t.Fragment,{children:t.jsx(Te,{leaveAddPetForm:s})})};export{Ne as default};
