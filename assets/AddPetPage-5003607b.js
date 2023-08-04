import{s as n,j as t,e as r,L as W,u,c as U,r as j,I as p,t as S,v as G,w as Z,x as F,y as H,R as P}from"./index-f123b098.js";import{u as N}from"./formik.esm-c8c12175.js";import{c as O,a as _,b as ee}from"./bg-mob@1x-38a1584a.js";const te=n.div`
    background-color: ${e=>e.theme.background.wight};
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;;
    width: 280px;    
    height: 496px;


    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: ${e=>e.$stage!==3?"458px":"704px"};
        height: ${e=>e.$stage===1?"542px":e.$stage===2?"648px":"602px"};            
    };

    @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
        width: ${e=>e.$stage!==3?"458px":"822px"};
        height: ${e=>e.$stage!==3?"542px":"602px"};           
    }    
`,ne=n.h1`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 24px;

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 28px;          
    };    
`,oe=({title:e})=>t.jsx(ne,{children:e}),E=e=>e.pet.FormStage,k=e=>e.pet.OptionForm.category,J=e=>e.pet.DetailsForm.name,M=e=>e.pet.DetailsForm.birthday,re=e=>e.pet.DetailsForm.breed,L=e=>e.pet.DetailsForm.title,Q=e=>e.pet.DetailsForm.type,ie=e=>e.pet.MoreInfoForm.sex,se=e=>e.pet.MoreInfoForm.comments,ae=e=>e.pet.MoreInfoForm.location,ce=e=>e.pet.MoreInfoForm.price,le=n.nav`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    padding-left: auto;
    padding-right: auto;    


    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        gap: 16px;         
    };      
`,de=n.div`
`,me=n.h2`
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 12px;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    };    
`,he=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };                 
`,xe=n.div`
`,pe=n.h2`
    font-size: 10px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey};

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    }; 
    
`,ue=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};     
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };            
`,ge=n.div`
`,fe=n.h2`
    font-size: 10px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    };     
`,be=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};   
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };             
`,ye=()=>{const e=r(E);return t.jsxs(le,{children:[t.jsxs(de,{children:[t.jsx(me,{$formStage:e,children:"Choose  option"}),t.jsx(he,{$formStage:e})]}),t.jsx(xe,{children:t.jsxs(pe,{$formStage:e,children:["Personal details",t.jsx(ue,{$formStage:e})]})}),t.jsxs(ge,{children:[t.jsx(fe,{$formStage:e,children:"More info"}),t.jsx(be,{$formStage:e})]})]})},we=n.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
    width: 100%;
`,f=n.input`
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

`,je=n.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 0px;
    // padding-left: auto;
    // padding-right: auto;
    gap: 20px;


    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        flex-direction: row;  
        justify-content: space-around;
        gap: 32px;     
    };      
`,v=n(W)`
    width: 200px;
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
`,A=n.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,Se=n.button`
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
`,z=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`,I=({onClick:e,leaveAddPetForm:s})=>{var g;const o=r(E),i=u();let c;const m=U(),x=j.useRef(((g=m.state)==null?void 0:g.from)??"notices/sell"),C=()=>{if(o===3||o===2)return c=o-1,c},$=()=>{i(S(C()))};return t.jsx(t.Fragment,{children:o!=="success"&&t.jsxs(je,{children:[o===1?t.jsxs(v,{to:x.current,children:[t.jsx(p,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(A,{children:"Cancel"})]}):t.jsxs(v,{onClick:$,children:[t.jsx(p,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(A,{children:"Back"})]}),t.jsxs(Se,{onClick:e,type:"submit",children:[o===3?t.jsx(z,{children:"Done"}):t.jsx(z,{children:"Next"}),t.jsx(p,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})},ke=({leaveAddPetForm:e})=>{const s=u(),o=r(k),i=({target:{value:m}})=>{s(G({category:m}))},c=()=>{(o==="your pet"||o==="sell"||o==="lost/found"||o==="in good hands")&&s(S(2))};return t.jsxs(t.Fragment,{children:[t.jsxs(we,{children:[t.jsx(f,{type:"button",value:"your pet",name:"your pet",onClick:i,$category:o}),t.jsx(f,{type:"button",value:"sell",name:"sell",onClick:i,$category:o}),t.jsx(f,{type:"button",value:"lost/found",name:"lost/found",onClick:i,$category:o}),t.jsx(f,{type:"button",value:"in good hands",name:"in good hands",onClick:i,$category:o})]}),t.jsx(I,{onClick:c,leaveAddPetForm:e})]})},Ce=n.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 458px;
`,b=n.label`
    font-weight: 500;
    font-size: 20px;
    // margin-bottom: 8px;
`,y=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,$e=()=>{const e=u(),s=r(k),o=new Date().toISOString().slice(0,10),i=N({initialValues:{name:r(J)||"",birthday:r(M)||"",title:r(L)||"",type:r(Q)||""},onSubmit:c=>{e(Z(c)),e(S(3))}});return t.jsxs(Ce,{onSubmit:i.handleSubmit,encType:"multipart/form-data",children:[(s==="sell"||s==="lost/found"||s==="in good hands")&&t.jsxs(t.Fragment,{children:[t.jsx(b,{htmlFor:"title",children:"Title of add"}),t.jsx(y,{placeholder:"Type title for adv",type:"text",id:"title",name:"title",onChange:i.handleChange,value:i.values.title,required:!0})]}),t.jsx(b,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(y,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name",onChange:i.handleChange,value:i.values.name,required:!0}),t.jsx(b,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(y,{type:"date",max:o,id:"pet-birth",name:"birthday",onChange:i.handleChange,value:i.values.birthday,required:!0}),t.jsx(b,{htmlFor:"pet-type",children:"Type"}),t.jsx(y,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type",onChange:i.handleChange,value:i.values.type,required:!0}),t.jsx(I,{})]})},Fe="data:image/png;base64,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",ve=n.form`
    display: flex;
    flex-direction: column;
    padding-left: 74px;
    padding-right: 74px;
`,Ae=n.div`
    display: flex;
    flex-direction: column;
`,Re=n.div`
    display: flex;
    gap: 97px;
    margin-bottom: 60px;
`,Ee=n.div`
    display: flex;
    flex-direction: column;
`,Ie=n.p`
    font-weight: 500;
    font-size: 20px;
`,Te=n.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
`,Y=n.button`
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
`,D=n.span`
    font-weight: 400;
    font-size: 16px;
`;n.label`
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
`;const ze=n.input`
    display: none;
`,Ye=n.div`
    border-radius: ${e=>e.theme.border.radius};
    margin-top: 12px;
`,De=n.img`
border-radius: ${e=>e.theme.border.radius};
    width: 182px;
    height: 182px;    
`,B=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 395px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  

`,w=n.label`
    font-weight: 500;
    font-size: 20px;
`,Be=n.div`
    display: flex;
    flex-direction: column;
`,Ue=n.textarea`
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
`,R=()=>{const[e,s]=j.useState(null),[o,i]=j.useState(""),c=u(),m=r(k),x=r(ie),C=r(J),$=r(M),g=r(re),X=r(L),K=r(Q),h=N({initialValues:{imgUrl:o,comments:r(se)||"",location:r(ae)||"",price:r(ce)||""},onSubmit:l=>{console.log(l),c(F(l));const a=new FormData;for(let d in l)d!=="imgUrl"&&d!=="sell"?a.append(d,l[d]):d==="imgUrl"&&a.append("file",o);a.append("sex",x),a.append("category",m),a.append("name",C),a.append("birthday",$),a.append("breed",g),a.append("title",X),a.append("type",K);for(const[d,q]of a.entries())console.log(`${d}: ${q}`);c(H(a)),c(S("success"))}}),V=l=>{let a=l.target.files[0];i(a);const d=new FileReader;d.onloadend=()=>{s(d.result)},d.readAsDataURL(a)},T=({target:{value:l}})=>{if(l==="Male"){c(F({...R,sex:"male"}));return}if(l==="Female"){c(F({...R,sex:"female"}));return}};return t.jsx(t.Fragment,{children:t.jsxs(ve,{onSubmit:h.handleSubmit,encType:"multipart/form-data",children:[t.jsxs(Re,{children:[t.jsxs(Ae,{children:[(m==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(Ie,{children:"The Sex"}),t.jsxs(Te,{children:[t.jsxs(Y,{type:"button",value:"Female",name:"female",onClick:T,$sex:x,children:[t.jsx(p,{iconName:"icon-female",width:"24px",height:"24px",stroke:"#F43F5E"}),t.jsx(D,{children:"Female"})]}),t.jsxs(Y,{type:"button",value:"Male",name:"male",onClick:T,$sex:x,children:[t.jsx(p,{iconName:"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(D,{children:"Male"})]})]})]}),t.jsxs(w,{htmlFor:"imgUrl",children:["Load the pet’s image:",t.jsx(Ye,{children:e?t.jsx("div",{children:t.jsx(De,{src:e,alt:"pet`s photo"})}):t.jsx("img",{src:Fe,alt:"default avatar photo"})}),t.jsx(ze,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:l=>V(l)})]})]}),t.jsxs(Ee,{children:[(m==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(w,{htmlFor:"location",children:"Location"}),t.jsx(B,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:h.handleChange,value:h.values.location,required:!0})]}),m==="sell"&&t.jsxs(t.Fragment,{children:[t.jsx(w,{htmlFor:"price",children:"Price"}),t.jsx(B,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:h.handleChange,value:h.values.price,required:!0})]}),t.jsxs(Be,{children:[t.jsx(w,{htmlFor:"comment",children:"Comments"}),t.jsx(Ue,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:h.handleChange,value:h.values.comments,required:!0})]})]})]}),t.jsx(I,{})]})})},Ne="/pet-app-frontend/assets/success-created-b8079584.png",Je=n.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Me=n.img`
    width: 300px;
    height: 300px;
`,Le=({leaveAddPetForm:e})=>(u(),t.jsxs(Je,{children:[t.jsx(Me,{src:Ne,alt:"success",width:300}),t.jsxs(v,{onClick:e,children:[t.jsx(p,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(A,{children:"Go Back"})]})]})),Qe=({leaveAddPetForm:e})=>{const s=r(E),o=r(k);return t.jsxs(te,{$stage:s,children:[t.jsx(oe,{title:o===null&&"Add pet"||o==="your pet"&&"Add pet"||o==="sell"&&"Add pet for sell"||o==="lost/found"&&"Add lost pet"||o==="in good hands"&&"Add pet in good hands"||o==="success"&&"Your post has been created!"}),t.jsx(ye,{}),s===1&&t.jsx(ke,{leaveAddPetForm:e}),s===2&&t.jsx($e,{}),s===3&&t.jsx(R,{}),s==="success"&&t.jsx(Le,{leaveAddPetForm:e})]})},Xe="/pet-app-frontend/assets/bg-mob@2x-283a5e61.png",Ke="/pet-app-frontend/assets/bg-tab@2x-0903fd47.png",Ve="/pet-app-frontend/assets/bg-des@2x-5b99db9e.png",qe=n.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;    
    background-image: url(${O});

    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
        background-image: url(${Xe});
    }

    //Tablet hero-img
    @media screen and (min-width: 768px) {
        max-width: 768px;
        background-image: url(${_});

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
                background-image: url(${Ke});
            }
    }

    //Desktop hero-img
    @media screen and (min-width: 1200px) {
        background-image: url(${ee});
        height: 600px;
        max-width: 1600px;

        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${Ve});
        }
    }
`,He=()=>{var o;const e=U(),s=j.useRef(((o=e.state)==null?void 0:o.from)??"notices/sell");return t.jsx(P,{children:t.jsx(qe,{children:t.jsx(Qe,{leaveAddPetForm:s})})})};export{He as default};
