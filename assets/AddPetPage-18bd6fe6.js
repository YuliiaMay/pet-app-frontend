import{s as o,j as t,e as r,L as W,u as g,c as N,r as w,I as u,t as S,v as G,w as Z,x as A,y as H}from"./index-49ee36c7.js";import{u as J}from"./formik.esm-5dbe6933.js";const P=o.div`
    background-color: ${e=>e.theme.background.wight};
    width: ${e=>e.$stage!==3?"458px":"822px"};
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,O=o.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,_=({title:e})=>t.jsx(O,{children:e}),I=e=>e.pet.FormStage,C=e=>e.pet.OptionForm.category,M=e=>e.pet.DetailsForm.name,L=e=>e.pet.DetailsForm.birthday,ee=e=>e.pet.DetailsForm.breed,Q=e=>e.pet.DetailsForm.title,X=e=>e.pet.DetailsForm.type,te=e=>e.pet.MoreInfoForm.sex,oe=e=>e.pet.MoreInfoForm.comments,ne=e=>e.pet.MoreInfoForm.location,re=e=>e.pet.MoreInfoForm.price,se=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,ie=o.div`
`,ae=o.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,ce=o.div`
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
`,he=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,me=o.div`
`,xe=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,ue=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,ge=()=>{const e=r(I);return t.jsxs(se,{children:[t.jsxs(ie,{children:[t.jsx(ae,{$formStage:e,children:"Choose  option"}),t.jsx(ce,{$formStage:e})]}),t.jsx(le,{children:t.jsxs(de,{$formStage:e,children:["Personal details",t.jsx(he,{$formStage:e})]})}),t.jsxs(me,{children:[t.jsx(xe,{$formStage:e,children:"More info"}),t.jsx(ue,{$formStage:e})]})]})},pe=o.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
    width: 100%;
`,f=o.input`
    background-color: ${e=>e.name===e.$category?e.theme.background.accentBlue:e.theme.background.lightBlue};
    color: ${e=>e.name===e.$category?e.theme.color.wight:e.theme.color.blue};
    padding: 8px 16px;
    border-radius: 50px;
    border: none;
    cursor: grab;
    margin-left: 0;

    &:hover,
    &:focus {
        color: ${e=>e.theme.color.wight};
        background-color: ${e=>e.theme.background.accentBlue};
    }

`,fe=o.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
    gap: 32px;
`,v=o(W)`
    width: 150px;
    height: 40px;
    border-radius: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    

    &:hover,
    &:focus {
        box-shadow: ${e=>e.theme.border.shadow};
    }   
`,$=o.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,be=o.button`
    width: 200px;
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
`,Y=o.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`,R=({onClick:e,leaveAddPetForm:i})=>{var p;const n=r(I),s=g();let c;const h=N(),x=w.useRef(((p=h.state)==null?void 0:p.from)??"notices/sell"),F=()=>{if(n===3||n===2)return c=n-1,c},k=()=>{s(S(F()))};return t.jsx("div",{children:t.jsx("div",{children:n!=="success"&&t.jsxs(fe,{children:[n===1?t.jsxs(v,{to:x.current,children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx($,{children:"Cancel"})]}):t.jsxs(v,{onClick:k,children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx($,{children:"Back"})]}),t.jsxs(be,{onClick:e,type:"submit",children:[n===3?t.jsx(Y,{children:"Done"}):t.jsx(Y,{children:"Next"}),t.jsx(u,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})})},ye=({leaveAddPetForm:e})=>{const i=g(),n=r(C),s=({target:{value:h}})=>{i(G({category:h}))},c=()=>{(n==="your pet"||n==="sell"||n==="lost/found"||n==="in good hands")&&i(S(2))};return t.jsxs(t.Fragment,{children:[t.jsxs(pe,{children:[t.jsx(f,{type:"button",value:"your pet",name:"your pet",onClick:s,$category:n}),t.jsx(f,{type:"button",value:"sell",name:"sell",onClick:s,$category:n}),t.jsx(f,{type:"button",value:"lost/found",name:"lost/found",onClick:s,$category:n}),t.jsx(f,{type:"button",value:"in good hands",name:"in good hands",onClick:s,$category:n})]}),t.jsx(R,{onClick:c,leaveAddPetForm:e})]})},je=o.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 458px;
`,b=o.label`
    font-weight: 500;
    font-size: 20px;
    // margin-bottom: 8px;
`,y=o.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,we=()=>{const e=g(),i=r(C),n=new Date().toISOString().slice(0,10),s=J({initialValues:{name:r(M)||"",birthday:r(L)||"",title:r(Q)||"",type:r(X)||""},onSubmit:c=>{e(Z(c)),e(S(3))}});return t.jsxs(je,{onSubmit:s.handleSubmit,encType:"multipart/form-data",children:[(i==="sell"||i==="lost/found"||i==="in good hands")&&t.jsxs(t.Fragment,{children:[t.jsx(b,{htmlFor:"title",children:"Title of add"}),t.jsx(y,{placeholder:"Type title for adv",type:"text",id:"title",name:"title",onChange:s.handleChange,value:s.values.title,required:!0})]}),t.jsx(b,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(y,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name",onChange:s.handleChange,value:s.values.name,required:!0}),t.jsx(b,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(y,{type:"date",max:n,id:"pet-birth",name:"birthday",onChange:s.handleChange,value:s.values.birthday,required:!0}),t.jsx(b,{htmlFor:"pet-type",children:"Type"}),t.jsx(y,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type",onChange:s.handleChange,value:s.values.type,required:!0}),t.jsx(R,{})]})},Se="data:image/png;base64,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",Ce=o.form`
    display: flex;
    flex-direction: column;
    padding-left: 74px;
    padding-right: 74px;
`,Fe=o.div`
    display: flex;
    flex-direction: column;
`,ke=o.div`
    display: flex;
    gap: 97px;
    margin-bottom: 60px;
`,Ae=o.div`
    display: flex;
    flex-direction: column;
`,ve=o.p`
    font-weight: 500;
    font-size: 20px;
`,$e=o.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
`,B=o.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    border-radius: 40px;
    background-color: ${e=>e.name===e.$sex?e.theme.background.accentBlue:"transparent"};
   

    &:hover,
    &:focus {
        // color: ${e=>e.theme.color.wight};
        background-color: ${e=>e.theme.background.accentBlue};

        & use {
            stroke: ${e=>e.theme.color.wight};
        }

        &:hover > span {
            color: ${e=>e.theme.color.wight};
        }
    };

    > span {
        color: ${e=>e.name===e.$sex?e.theme.color.wight:e.theme.color.grey};  
    };
`,D=o.span`
    font-weight: 400;
    font-size: 16px;
`;o.label`
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
`;const Ee=o.input`
    display: none;
`,Ie=o.div`
    border-radius: ${e=>e.theme.border.radius};
    margin-top: 12px;
`,Re=o.img`
border-radius: ${e=>e.theme.border.radius};
    width: 182px;
    height: 182px;    
`,U=o.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 395px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  

`,j=o.label`
    font-weight: 500;
    font-size: 20px;
`,Te=o.div`
    display: flex;
    flex-direction: column;
`,Ye=o.textarea`
    border-radius: 20px;
    border: ${e=>e.theme.border.blue};
    max-width: 394px;
    height: auto;
    margin-top: 8px;
    // margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,E=()=>{const[e,i]=w.useState(null),[n,s]=w.useState(""),c=g(),h=r(C),x=r(te),F=r(M),k=r(L),p=r(ee),K=r(Q),V=r(X),m=J({initialValues:{imgUrl:n,comments:r(oe)||"",location:r(ne)||"",price:r(re)||""},onSubmit:l=>{console.log(l),c(A(l));const a=new FormData;for(let d in l)d!=="imgUrl"&&d!=="sell"?a.append(d,l[d]):d==="imgUrl"&&a.append("file",n);a.append("sex",x),a.append("category",h),a.append("name",F),a.append("birthday",k),a.append("breed",p),a.append("title",K),a.append("type",V);for(const[d,q]of a.entries())console.log(`${d}: ${q}`);c(H(a)),c(S("success"))}}),z=l=>{let a=l.target.files[0];s(a);const d=new FileReader;d.onloadend=()=>{i(d.result)},d.readAsDataURL(a)},T=({target:{value:l}})=>{if(l==="Male"){c(A({...E,sex:"male"}));return}if(l==="Female"){c(A({...E,sex:"female"}));return}};return t.jsx(t.Fragment,{children:t.jsxs(Ce,{onSubmit:m.handleSubmit,encType:"multipart/form-data",children:[t.jsxs(ke,{children:[t.jsxs(Fe,{children:[(h==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(ve,{children:"The Sex"}),t.jsxs($e,{children:[t.jsxs(B,{type:"button",value:"Female",name:"female",onClick:T,$sex:x,children:[t.jsx(u,{iconName:"icon-female",width:"24px",height:"24px",stroke:"#F43F5E"}),t.jsx(D,{children:"Female"})]}),t.jsxs(B,{type:"button",value:"Male",name:"male",onClick:T,$sex:x,children:[t.jsx(u,{iconName:"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(D,{children:"Male"})]})]})]}),t.jsxs(j,{htmlFor:"imgUrl",children:["Load the pet’s image:",t.jsx(Ie,{children:e?t.jsx("div",{children:t.jsx(Re,{src:e,alt:"pet`s photo"})}):t.jsx("img",{src:Se,alt:"default avatar photo"})}),t.jsx(Ee,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:l=>z(l)})]})]}),t.jsxs(Ae,{children:[(h==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(j,{htmlFor:"location",children:"Location"}),t.jsx(U,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:m.handleChange,value:m.values.location,required:!0})]}),h==="sell"&&t.jsxs(t.Fragment,{children:[t.jsx(j,{htmlFor:"price",children:"Price"}),t.jsx(U,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:m.handleChange,value:m.values.price,required:!0})]}),t.jsxs(Te,{children:[t.jsx(j,{htmlFor:"comment",children:"Comments"}),t.jsx(Ye,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:m.handleChange,value:m.values.comments,required:!0})]})]})]}),t.jsx(R,{})]})})},Be="/pet-app-frontend/assets/success-created-b8079584.png",De=o.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Ue=o.img`
    width: 300px;
    height: 300px;
`,Ne=({leaveAddPetForm:e})=>(g(),t.jsxs(De,{children:[t.jsx(Ue,{src:Be,alt:"success",width:300}),t.jsxs(v,{onClick:e,children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx($,{children:"Go Back"})]})]})),Je=({leaveAddPetForm:e})=>{const i=r(I),n=r(C);return t.jsxs(P,{$stage:i,children:[t.jsx(_,{title:n===null&&"Add pet"||n==="your pet"&&"Add pet"||n==="sell"&&"Add pet for sell"||n==="lost/found"&&"Add lost pet"||n==="in good hands"&&"Add pet in good hands"||n==="success"&&"Your post has been created!"}),t.jsx(ge,{}),i===1&&t.jsx(ye,{leaveAddPetForm:e}),i===2&&t.jsx(we,{}),i===3&&t.jsx(E,{}),i==="success"&&t.jsx(Ne,{leaveAddPetForm:e})]})},Qe=()=>{var n;const e=N(),i=w.useRef(((n=e.state)==null?void 0:n.from)??"notices/sell");return t.jsx(t.Fragment,{children:t.jsx(Je,{leaveAddPetForm:i})})};export{Qe as default};
