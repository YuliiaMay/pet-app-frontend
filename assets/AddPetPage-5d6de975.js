import{s as n,j as t,e as s,L as P,c as _,g as v,u as g,I as u,t as F,v as B,w as N,r as R,x as b,y as ee,R as te}from"./index-7c6b2bc2.js";import{u as U}from"./formik.esm-7daf92cc.js";import{c as ne,a as oe,b as re}from"./bg-mob@1x-38a1584a.js";const ie=n.div`
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
`,se=n.h1`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 24px;

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 28px;          
    };    
`,ae=({title:e})=>t.jsx(se,{children:e}),A=e=>e.pet.FormStage,p=e=>e.pet.OptionForm.category,J=e=>e.pet.DetailsForm.name,M=e=>e.pet.DetailsForm.birthday,ce=e=>e.pet.DetailsForm.breed,Q=e=>e.pet.DetailsForm.title,X=e=>e.pet.DetailsForm.type,le=e=>e.pet.MoreInfoForm.sex,de=e=>e.pet.MoreInfoForm.comments,me=e=>e.pet.MoreInfoForm.location,he=e=>e.pet.MoreInfoForm.price,ue=n.nav`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    padding-left: auto;
    padding-right: auto;    


    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        gap: 16px;         
    };      
`,ge=n.div`
`,pe=n.h2`
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 12px;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    };    
`,xe=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };                 
`,fe=n.div`
`,be=n.h2`
    font-size: 10px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey};

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    }; 
    
`,ye=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};     
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };            
`,we=n.div`
`,je=n.h2`
    font-size: 10px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    };     
`,Se=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};   
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };             
`,ke=()=>{const e=s(A);return t.jsxs(ue,{children:[t.jsxs(ge,{children:[t.jsx(pe,{$formStage:e,children:"Choose  option"}),t.jsx(xe,{$formStage:e})]}),t.jsx(fe,{children:t.jsxs(be,{$formStage:e,children:["Personal details",t.jsx(ye,{$formStage:e})]})}),t.jsxs(we,{children:[t.jsx(je,{$formStage:e,children:"More info"}),t.jsx(Se,{$formStage:e})]})]})},Ce=n.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
    width: 100%;
`,y=n.input`
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

`,$e=n.div`
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
`,k=n(P)`
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
`,C=n.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,ve=n.button`
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
`,T=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`,E=({onClick:e})=>{const i=s(A);s(p),_(),v();const o=g();let r;const c=()=>{if(i===3||i===2)return r=i-1,r},l=()=>{o(F(c()))};return t.jsx(t.Fragment,{children:i!=="success"&&t.jsxs($e,{children:[i===1?t.jsxs(k,{children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(C,{children:"Cancel"})]}):t.jsxs(k,{onClick:l,children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(C,{children:"Back"})]}),t.jsxs(ve,{onClick:e,type:"submit",children:[i===3?t.jsx(T,{children:"Done"}):t.jsx(T,{children:"Next"}),t.jsx(u,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})},Fe=({onLeavePage:e})=>{const i=g(),o=s(p),r=({target:{value:l}})=>{i(B({category:l}))},c=()=>{(o==="your pet"||o==="sell"||o==="lost/found"||o==="in good hands")&&i(F(2))};return t.jsxs(t.Fragment,{children:[t.jsxs(Ce,{children:[t.jsx(y,{type:"button",value:"your pet",name:"your pet",onClick:r,$category:o}),t.jsx(y,{type:"button",value:"sell",name:"sell",onClick:r,$category:o}),t.jsx(y,{type:"button",value:"lost/found",name:"lost/found",onClick:r,$category:o}),t.jsx(y,{type:"button",value:"in good hands",name:"in good hands",onClick:r,$category:o})]}),t.jsx(E,{onClick:c,onLeavePage:e})]})},Ae=n.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: 458px;
`,w=n.label`
    font-weight: 500;
    font-size: 20px;
    // margin-bottom: 8px;
`,j=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,Ee=()=>{const e=g(),i=s(p),o=new Date().toISOString().slice(0,10),r=U({initialValues:{name:s(J)||"",birthday:s(M)||"",title:s(Q)||"",type:s(X)||""},onSubmit:c=>{e(N(c)),e(F(3))}});return t.jsxs(Ae,{onSubmit:r.handleSubmit,encType:"multipart/form-data",children:[(i==="sell"||i==="lost/found"||i==="in good hands")&&t.jsxs(t.Fragment,{children:[t.jsx(w,{htmlFor:"title",children:"Title of add"}),t.jsx(j,{placeholder:"Type title for adv",type:"text",id:"title",name:"title",onChange:r.handleChange,value:r.values.title,required:!0})]}),t.jsx(w,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(j,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name",onChange:r.handleChange,value:r.values.name,required:!0}),t.jsx(w,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(j,{type:"date",max:o,id:"pet-birth",name:"birthday",onChange:r.handleChange,value:r.values.birthday,required:!0}),t.jsx(w,{htmlFor:"pet-type",children:"Type"}),t.jsx(j,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type",onChange:r.handleChange,value:r.values.type,required:!0}),t.jsx(E,{})]})},Ie="data:image/png;base64,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",Re=n.form`
    display: flex;
    flex-direction: column;
    padding-left: 74px;
    padding-right: 74px;
`,Te=n.div`
    display: flex;
    flex-direction: column;
`,ze=n.div`
    display: flex;
    gap: 97px;
    margin-bottom: 60px;
`,Ye=n.div`
    display: flex;
    flex-direction: column;
`,De=n.p`
    font-weight: 500;
    font-size: 20px;
`,Be=n.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
`,z=n.button`
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
`,Y=n.span`
    font-weight: 400;
    font-size: 16px;
`;n.label`
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
`;const Ne=n.input`
    display: none;
`,Ue=n.div`
    border-radius: ${e=>e.theme.border.radius};
    margin-top: 12px;
`,Je=n.img`
border-radius: ${e=>e.theme.border.radius};
    width: 182px;
    height: 182px;    
`,D=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 395px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  

`,S=n.label`
    font-weight: 500;
    font-size: 20px;
`,Me=n.div`
    display: flex;
    flex-direction: column;
`,Qe=n.textarea`
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
`,$=()=>{const[e,i]=R.useState(null),[o,r]=R.useState(""),c=g(),l=s(p),x=s(le),K=s(J),L=s(M),V=s(ce),q=s(Q),W=s(X),f=v(),h=U({initialValues:{imgUrl:o,comments:s(de)||"",location:s(me)||"",price:s(he)||""},onSubmit:d=>{console.log(d),c(b(d));const a=new FormData;for(let m in d)m!=="imgUrl"&&m!=="sell"?a.append(m,d[m]):m==="imgUrl"&&a.append("file",o);a.append("sex",x),a.append("category",l),a.append("name",K),a.append("birthday",L),a.append("breed",V),a.append("title",q),a.append("type",W);for(const[m,O]of a.entries())console.log(`${m}: ${O}`);c(ee(a)),H(),Z()}}),G=d=>{let a=d.target.files[0];r(a);const m=new FileReader;m.onloadend=()=>{i(m.result)},m.readAsDataURL(a)},I=({target:{value:d}})=>{if(d==="Male"){c(b({...$,sex:"male"}));return}if(d==="Female"){c(b({...$,sex:"female"}));return}},Z=()=>{l==="your pet"?f("/user"):l==="sell"?f("/notices/sell"):l==="lost/found"?f("/notices/lost-found"):l==="in good hands"&&f("/notices/for-free")},H=()=>{c(B({category:null}),N({name:"",birthday:"",breed:"",title:"",type:""}),b({sex:"",imgUrl:"",comments:"",location:"",price:""}))};return t.jsx(t.Fragment,{children:t.jsxs(Re,{onSubmit:h.handleSubmit,encType:"multipart/form-data",children:[t.jsxs(ze,{children:[t.jsxs(Te,{children:[(l==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(De,{children:"The Sex"}),t.jsxs(Be,{children:[t.jsxs(z,{type:"button",value:"Female",name:"female",onClick:I,$sex:x,children:[t.jsx(u,{iconName:"icon-female",width:"24px",height:"24px",stroke:"#F43F5E"}),t.jsx(Y,{children:"Female"})]}),t.jsxs(z,{type:"button",value:"Male",name:"male",onClick:I,$sex:x,children:[t.jsx(u,{iconName:"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(Y,{children:"Male"})]})]})]}),t.jsxs(S,{htmlFor:"imgUrl",children:["Load the pet’s image:",t.jsx(Ue,{children:e?t.jsx("div",{children:t.jsx(Je,{src:e,alt:"pet`s photo"})}):t.jsx("img",{src:Ie,alt:"default avatar photo"})}),t.jsx(Ne,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:d=>G(d)})]})]}),t.jsxs(Ye,{children:[(l==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(S,{htmlFor:"location",children:"Location"}),t.jsx(D,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:h.handleChange,value:h.values.location,required:!0})]}),l==="sell"&&t.jsxs(t.Fragment,{children:[t.jsx(S,{htmlFor:"price",children:"Price"}),t.jsx(D,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:h.handleChange,value:h.values.price,required:!0})]}),t.jsxs(Me,{children:[t.jsx(S,{htmlFor:"comment",children:"Comments"}),t.jsx(Qe,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:h.handleChange,value:h.values.comments,required:!0})]})]})]}),t.jsx(E,{})]})})},Xe="/pet-app-frontend/assets/success-created-b8079584.png",Ke=n.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Le=n.img`
    width: 300px;
    height: 300px;
`,Ve=({onLeavePage:e,onClick:i})=>(g(),t.jsxs(Ke,{children:[t.jsx(Le,{src:Xe,alt:"success",width:300}),t.jsxs(k,{onLeavePage:e,children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(C,{onClick:i,children:"Go Back"})]})]})),qe=({onLeavePage:e})=>{const i=s(A),o=s(p),r=v();g();const c=()=>{o==="your pet"?r("/user"):o==="sell"?r("/notices/sell"):o==="lost/found"?r("/notices/lost-found"):o==="in good hands"&&r("/notices/for-free")};return t.jsxs(ie,{$stage:i,children:[t.jsx(ae,{title:o===null&&"Add pet"||o==="your pet"&&"Add pet"||o==="sell"&&"Add pet for sell"||o==="lost/found"&&"Add lost pet"||o==="in good hands"&&"Add pet in good hands"||o==="success"&&"Your post has been created!"}),t.jsx(ke,{}),i===1&&t.jsx(Fe,{onLeavePage:e}),i===2&&t.jsx(Ee,{}),i===3&&t.jsx($,{}),i==="success"&&t.jsx(Ve,{onLeavePage:e,onClick:c})]})},We="/pet-app-frontend/assets/bg-mob@2x-283a5e61.png",Ge="/pet-app-frontend/assets/bg-tab@2x-0903fd47.png",Ze="/pet-app-frontend/assets/bg-des@2x-5b99db9e.png",He=n.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;    
    background-image: url(${ne});

    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
        background-image: url(${We});
    }

    //Tablet hero-img
    @media screen and (min-width: 768px) {
        max-width: 768px;
        background-image: url(${oe});

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
                background-image: url(${Ge});
            }
    }

    //Desktop hero-img
    @media screen and (min-width: 1200px) {
        background-image: url(${re});
        height: 600px;
        max-width: 1600px;

        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${Ze});
        }
    }
`,et=()=>t.jsx(te,{children:t.jsx(He,{children:t.jsx(qe,{})})});export{et as default};
