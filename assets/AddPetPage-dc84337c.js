import{s as o,j as t,g as i,L as J,u as p,c as D,r as w,I as x,q as S,t as M,v as L,w as k,x as Q}from"./index-48756c4d.js";import{u as U}from"./formik.esm-6ad049e9.js";const X=o.div`
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
`,K=o.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,V=({title:e})=>t.jsx(K,{children:e}),E=e=>e.pet.FormStage,C=e=>e.pet.OptionForm.category,q=e=>e.pet.DetailsForm.name,z=e=>e.pet.DetailsForm.birthday,W=e=>e.pet.DetailsForm.title,G=e=>e.pet.DetailsForm.type,Z=e=>e.pet.MoreInfoForm.sex,H=e=>e.pet.MoreInfoForm.comments,P=e=>e.pet.MoreInfoForm.location,O=e=>e.pet.MoreInfoForm.price,_=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,ee=o.div`
`,te=o.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,oe=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,ne=o.div`
`,re=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,se=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,ie=o.div`
`,ae=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,ce=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,le=()=>{const e=i(E);return t.jsxs(_,{children:[t.jsxs(ee,{children:[t.jsx(te,{$formStage:e,children:"Choose  option"}),t.jsx(oe,{$formStage:e})]}),t.jsx(ne,{children:t.jsxs(re,{$formStage:e,children:["Personal details",t.jsx(se,{$formStage:e})]})}),t.jsxs(ie,{children:[t.jsx(ae,{$formStage:e,children:"More info"}),t.jsx(ce,{$formStage:e})]})]})},de=o.ul`
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

`,he=o.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
    gap: 32px;
`,A=o(J)`
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
`,v=o.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,me=o.button`
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
`,R=o.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`,I=({onClick:e,leaveAddPetForm:s})=>{var g;const n=i(E),r=p();let a;const m=D(),u=w.useRef(((g=m.state)==null?void 0:g.from)??"notices/sell"),d=()=>{if(n===3||n===2)return a=n-1,a},F=()=>{r(S(d()))};return t.jsx("div",{children:t.jsx("div",{children:n!=="success"&&t.jsxs(he,{children:[n===1?t.jsxs(A,{to:u.current,children:[t.jsx(x,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(v,{children:"Cancel"})]}):t.jsxs(A,{onClick:F,children:[t.jsx(x,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(v,{children:"Back"})]}),t.jsxs(me,{onClick:e,type:"submit",children:[n===3?t.jsx(R,{children:"Done"}):t.jsx(R,{children:"Next"}),t.jsx(x,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})})},ue=({leaveAddPetForm:e})=>{const s=p(),n=i(C),r=({target:{value:m}})=>{s(M({category:m}))},a=()=>{(n==="your pet"||n==="sell"||n==="lost/found"||n==="in good hands")&&s(S(2))};return t.jsxs(t.Fragment,{children:[t.jsxs(de,{children:[t.jsx(f,{type:"button",value:"your pet",name:"your pet",onClick:r,$category:n}),t.jsx(f,{type:"button",value:"sell",name:"sell",onClick:r,$category:n}),t.jsx(f,{type:"button",value:"lost/found",name:"lost/found",onClick:r,$category:n}),t.jsx(f,{type:"button",value:"in good hands",name:"in good hands",onClick:r,$category:n})]}),t.jsx(I,{onClick:a,leaveAddPetForm:e})]})},xe=o.form`
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
`,ge=()=>{const e=p(),s=i(C),n=new Date().toISOString().slice(0,10),r=U({initialValues:{name:i(q)||"",birthday:i(z)||"",title:i(W)||"",type:i(G)||""},onSubmit:a=>{e(L(a)),e(S(3))}});return t.jsxs(xe,{onSubmit:r.handleSubmit,encType:"multipart/form-data",children:[(s==="sell"||s==="lost/found"||s==="in good hands")&&t.jsxs(t.Fragment,{children:[t.jsx(b,{htmlFor:"title",children:"Title of add"}),t.jsx(y,{placeholder:"Type title for adv",type:"text",id:"title",name:"title",onChange:r.handleChange,value:r.values.title,required:!0})]}),t.jsx(b,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(y,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name",onChange:r.handleChange,value:r.values.name,required:!0}),t.jsx(b,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(y,{type:"date",max:n,id:"pet-birth",name:"birthday",onChange:r.handleChange,value:r.values.birthday,required:!0}),t.jsx(b,{htmlFor:"pet-type",children:"Type"}),t.jsx(y,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type",onChange:r.handleChange,value:r.values.type,required:!0}),t.jsx(I,{})]})},pe="data:image/png;base64,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",fe=o.form`
    display: flex;
    flex-direction: column;
    padding-left: 74px;
    padding-right: 74px;
`,be=o.div`
    display: flex;
    flex-direction: column;
`,ye=o.div`
    display: flex;
    gap: 97px;
    margin-bottom: 60px;
`,je=o.div`
    display: flex;
    flex-direction: column;
`,we=o.p`
    font-weight: 500;
    font-size: 20px;
`,Se=o.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
`,T=o.button`
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
`,Y=o.span`
    font-weight: 400;
    font-size: 16px;
`;o.label`
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
`;const Ce=o.input`
    display: none;
`,Fe=o.div`
    border-radius: ${e=>e.theme.border.radius};
    margin-top: 12px;
`,ke=o.img`
border-radius: ${e=>e.theme.border.radius};
    width: 182px;
    height: 182px;    
`,B=o.input`
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
`,Ae=o.div`
    display: flex;
    flex-direction: column;
`,ve=o.textarea`
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
`,$=()=>{const[e,s]=w.useState(null),[n,r]=w.useState(""),a=p(),m=i(C),u=i(Z);console.log(u);const d=U({initialValues:{imgUrl:n,comments:i(H)||"",location:i(P)||"",price:i(O)||""},onSubmit:l=>{a(k(l));const h=new FormData;for(let c in l)c!=="imgUrl"&&c!=="sell"?h.append(c,l[c]):c==="imgUrl"&&h.append(c,n);h.append("sex",u);for(const[c,N]of h.entries())console.log(`${c}: ${N}`);a(Q(h)),a(S("success"))}}),F=l=>{let h=l.target.files[0];r(h);const c=new FileReader;c.onloadend=()=>{s(c.result)},c.readAsDataURL(h)},g=({target:{value:l}})=>{if(l==="Male"){a(k({...$,sex:"male"}));return}if(l==="Female"){a(k({...$,sex:"female"}));return}};return t.jsx(t.Fragment,{children:t.jsxs(fe,{onSubmit:d.handleSubmit,encType:"multipart/form-data",children:[t.jsxs(ye,{children:[t.jsxs(be,{children:[(m==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(we,{children:"The Sex"}),t.jsxs(Se,{children:[t.jsxs(T,{type:"button",value:"Female",name:"female",onClick:g,$sex:u,children:[t.jsx(x,{iconName:"icon-female",width:"24px",height:"24px",stroke:"#F43F5E"}),t.jsx(Y,{children:"Female"})]}),t.jsxs(T,{type:"button",value:"Male",name:"male",onClick:g,$sex:u,children:[t.jsx(x,{iconName:"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(Y,{children:"Male"})]})]})]}),t.jsxs(j,{htmlFor:"imgUrl",children:["Load the pet’s image:",t.jsx(Fe,{children:e?t.jsx("div",{children:t.jsx(ke,{src:e,alt:"pet`s photo"})}):t.jsx("img",{src:pe,alt:"default avatar photo"})}),t.jsx(Ce,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:l=>F(l)})]})]}),t.jsxs(je,{children:[(m==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(j,{htmlFor:"location",children:"Location"}),t.jsx(B,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:d.handleChange,value:d.values.location,required:!0})]}),m==="sell"&&t.jsxs(t.Fragment,{children:[t.jsx(j,{htmlFor:"price",children:"Price"}),t.jsx(B,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:d.handleChange,value:d.values.price,required:!0})]}),t.jsxs(Ae,{children:[t.jsx(j,{htmlFor:"comment",children:"Comments"}),t.jsx(ve,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:d.handleChange,value:d.values.comments,required:!0})]})]})]}),t.jsx(I,{})]})})},$e="/pet-app-frontend/assets/success-created-b8079584.png",Ee=o.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Ie=o.img`
    width: 300px;
    height: 300px;
`,Re=({leaveAddPetForm:e})=>(p(),t.jsxs(Ee,{children:[t.jsx(Ie,{src:$e,alt:"success",width:300}),t.jsxs(A,{onClick:e,children:[t.jsx(x,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(v,{children:"Go Back"})]})]})),Te=({leaveAddPetForm:e})=>{const s=i(E),n=i(C);return t.jsxs(X,{$stage:s,children:[t.jsx(V,{title:n===null&&"Add pet"||n==="your pet"&&"Add pet"||n==="sell"&&"Add pet for sell"||n==="lost/found"&&"Add lost pet"||n==="in good hands"&&"Add pet in good hands"||n==="success"&&"Your post has been created!"}),t.jsx(le,{}),s===1&&t.jsx(ue,{leaveAddPetForm:e}),s===2&&t.jsx(ge,{}),s===3&&t.jsx($,{}),s==="success"&&t.jsx(Re,{leaveAddPetForm:e})]})},De=()=>{var n;const e=D(),s=w.useRef(((n=e.state)==null?void 0:n.from)??"notices/sell");return t.jsx(t.Fragment,{children:t.jsx(Te,{leaveAddPetForm:s})})};export{De as default};
