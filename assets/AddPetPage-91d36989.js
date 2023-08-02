import{s as n,j as t,g as c,L as z,r as h,u as p,c as Y,I as w,q as S,t as D,v as J,w as N,x as W}from"./index-829dacb4.js";import{F as U,a as q,b as G,u as Z}from"./formik.esm-974bd9b5.js";const H=n.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,P=n.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,O=({title:e})=>t.jsx(P,{children:e}),R=e=>e.pet.FormStage,A=e=>e.pet.OptionForm.category,_=e=>e.pet.DetailsForm.name,ee=e=>e.pet.DetailsForm.birthday,te=e=>e.pet.DetailsForm.breed,oe=e=>e.pet.DetailsForm.title,ne=e=>e.pet.DetailsForm.type,se=e=>e.pet.MoreInfoForm.sex,re=e=>e.pet.MoreInfoForm.comments,ce=e=>e.pet.MoreInfoForm.location,ie=e=>e.pet.MoreInfoForm.price,ae=e=>e.pet,le=n.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,de=n.div`
`,me=n.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,he=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,ue=n.div`
`,pe=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,xe=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,ge=n.div`
`,fe=n.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,be=n.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,ye=()=>{const e=c(R);return t.jsxs(le,{children:[t.jsxs(de,{children:[t.jsx(me,{$formStage:e,children:"Choose  option"}),t.jsx(he,{$formStage:e})]}),t.jsx(ue,{children:t.jsxs(pe,{$formStage:e,children:["Personal details",t.jsx(xe,{$formStage:e})]})}),t.jsxs(ge,{children:[t.jsx(fe,{$formStage:e,children:"More info"}),t.jsx(be,{$formStage:e})]})]})},je=n.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
`,f=n.input`
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
`,we=n.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
`,v=n(z)`
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
`,E=n.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,Se=n.button`
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
`,T=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`;function Ae(e,s){const o=h.useRef(null),i=h.useRef(e);return h.useEffect(()=>{i.current=e},[e]),h.useEffect(()=>{const l=()=>i.current();if(typeof s=="number")return o.current=window.setTimeout(l,s),()=>window.clearTimeout(o.current)},[s]),o}const I=({onClick:e,leaveAddPetForm:s})=>{var g;const o=c(R),i=p();let l;const m=Y(),x=h.useRef(((g=m.state)==null?void 0:g.from)??"notices/sell"),F=()=>{if(o===3||o===2)return l=o-1,l},C=()=>{i(S(F()))};return t.jsx("div",{children:t.jsx("div",{children:o!=="success"&&t.jsxs(we,{children:[o===1?t.jsxs(v,{to:x.current,children:[t.jsx(w,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(E,{children:"Cancel"})]}):t.jsxs(v,{onClick:C,children:[t.jsx(w,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(E,{children:"Back"})]}),t.jsxs(Se,{onClick:e,type:"submit",children:[o===3?t.jsx(T,{children:"Done"}):t.jsx(T,{children:"Next"}),t.jsx(w,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})})},Fe=({leaveAddPetForm:e})=>{const s=p(),o=c(A),i=({target:{value:m}})=>{s(D({category:m}))},l=()=>{(o==="your pet"||o==="sell"||o==="lost/found"||o==="in good hands")&&s(S(2))};return t.jsxs("div",{children:[t.jsxs(je,{children:[t.jsx(f,{type:"button",value:"your pet",name:"category-your-pet",onClick:i}),t.jsx(f,{type:"button",value:"sell",name:"category-sell",onClick:i}),t.jsx(f,{type:"button",value:"lost/found",name:"category-lost",onClick:i}),t.jsx(f,{type:"button",value:"in good hands",name:"category-good-hands",onClick:i})]}),t.jsx(I,{onClick:l,leaveAddPetForm:e})]})};n(U)`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;const b=n.label`
    font-weight: 500,
    font-size: 20px,
    margin-bottom: 8px,
`,y=n(q)`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,Ce={name:"",birthday:"",title:"",type:""},ke=()=>{const e=p(),s=c(A),o=(l,m)=>{e(J(l)),e(S(3))},i=c(ae);return console.log(i),t.jsx(G,{initialValues:Ce,onSubmit:o,children:t.jsxs(U,{children:[(s==="sell"||s==="lost/found"||s==="in good hands")&&t.jsxs(t.Fragment,{children:[t.jsx(b,{htmlFor:"title",children:"Title of add"}),t.jsx(y,{placeholder:"Type title for adv",type:"text",id:"title",name:"title"})]}),t.jsx(b,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(y,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name"}),t.jsx(b,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(y,{type:"date",id:"pet-birth",name:"birthday"}),t.jsx(b,{htmlFor:"pet-type",children:"Type"}),t.jsx(y,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type"}),t.jsx(I,{})]})})},ve="data:image/png;base64,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",j=n.label`
    font-weight: 500,
    font-size: 20px,
    margin-bottom: 8px,
`,k=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,Ee=n.textarea`
    border-radius: 20px;
    border: ${e=>e.theme.border.blue};
    width: 394px;
    height: auto;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,Re=()=>{const[e,s]=h.useState(null),[o,i]=h.useState(""),l=p(),m=c(A),x=c(_),F=c(ee),C=c(te),g=c(oe),B=c(ne),$=c(se),M=c(re),Q=c(ce),V=c(ie),d=Z({initialValues:{sex:"",imgUrl:"",comments:"",location:"",price:""},onSubmit:u=>{console.log(u),l(N(u));const a={category:m,name:x,birthday:F,breed:C,title:g,type:B,sex:$,file:o,comments:M,location:Q,price:V},r=new FormData;r.append("category",a.category),r.append("name",a.name),r.append("birthday",a.birthday),r.append("breed",a.breed),r.append("title",a.title),r.append("type",a.type),r.append("sex",a.sex),r.append("file",o),r.append("comments",a.comments),r.append("location",a.location),r.append("price",a.price);for(const[K,L]of r.entries())console.log(`${K}: ${L}`);l(W(r)),l(S("success"))}}),X=u=>{let a=u.target.files[0];i(a);const r=new FileReader;r.onloadend=()=>{s(r.result)},r.readAsDataURL(a)};return t.jsxs("form",{onSubmit:d.handleSubmit,encType:"multipart/form-data",children:[(m==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The Sex"}),t.jsx("input",{type:"button",id:"pet-name",name:"sex",onChange:d.handleChange,value:d.values.sex}),t.jsx("input",{type:"button",value:"Male",id:"pet-name",name:"sex",onChange:d.handleChange})]}),t.jsxs("div",{children:[t.jsx(j,{htmlFor:"imgUrl"}),t.jsx("div",{children:!e&&t.jsx("img",{src:ve,alt:"pet`s photo"})}),t.jsx(k,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:u=>X(u)})]}),(m==="sell"||"lost/found")&&t.jsxs("div",{children:[t.jsx(j,{htmlFor:"location",children:"Location"}),t.jsx(k,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:d.handleChange,value:d.values.location})]}),m==="sell"&&t.jsxs("div",{children:[t.jsx(j,{htmlFor:"price",children:"Price"}),t.jsx(k,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:d.handleChange,value:d.values.price})]}),t.jsxs("div",{children:[t.jsx(j,{htmlFor:"comment",children:"Comments"}),t.jsx(Ee,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:d.handleChange,value:d.values.comments})]}),t.jsx(I,{})]})},Ie="/pet-app-frontend/assets/success-created-b8079584.png",Te=n.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Ye=n.img`
    width: 300px;
    height: 300px;
`,De=({leaveAddPetForm:e})=>{const s=p();Ae(()=>{o()},5e3);const o=()=>{s(D({category:null}),J({name:"",birthday:"",breed:"",title:"",type:""}),N({sex:"",imgUrl:"",comments:"",location:"",price:""}))};return t.jsxs(Te,{children:[t.jsx(Ye,{src:Ie,alt:"success",width:300}),t.jsxs(v,{onClick:e,children:[t.jsx(w,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(E,{children:"Go Back"})]})]})},Je=({leaveAddPetForm:e})=>{const s=c(R),o=c(A);return t.jsxs(H,{children:[t.jsx(O,{title:o===null&&"Add pet"||o==="your pet"&&"Add pet"||o==="sell"&&"Add pet for sell"||o==="lost/found"&&"Add lost pet"||o==="in good hands"&&"Add pet in good hands"||o==="success"&&"Your post has been created!"}),t.jsx(ye,{}),s===1&&t.jsx(Fe,{leaveAddPetForm:e}),s===2&&t.jsx(ke,{}),s===3&&t.jsx(Re,{}),s==="success"&&t.jsx(De,{leaveAddPetForm:e})]})},Be=()=>{var o;const e=Y(),s=h.useRef(((o=e.state)==null?void 0:o.from)??"notices/sell");return t.jsx(t.Fragment,{children:t.jsx(Je,{leaveAddPetForm:s})})};export{Be as default};
