import{s as n,j as t,e as i,L as P,u,c as _,r as v,t as J,I as x,v as I,w as M,x as L,g as ee,y,z as te}from"./index-6136bed5.js";import{u as Q}from"./formik.esm-d725939f.js";import{c as ne,a as oe,b as ie}from"./bg-mob@1x-38a1584a.js";const re=n.div`
    background-color: ${e=>e.theme.background.wight};
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: ;;
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
`,ae=({title:e})=>t.jsx(se,{children:e}),T=e=>e.pet.FormStage,g=e=>e.pet.OptionForm.category,X=e=>e.pet.DetailsForm.name,K=e=>e.pet.DetailsForm.birthday,ce=e=>e.pet.DetailsForm.breed,V=e=>e.pet.DetailsForm.title,q=e=>e.pet.DetailsForm.type,le=e=>e.pet.MoreInfoForm.sex,de=e=>e.pet.MoreInfoForm.comments,me=e=>e.pet.MoreInfoForm.location,he=e=>e.pet.MoreInfoForm.price,xe=e=>e.pet.isAvailable,pe=n.nav`
    display: flex;
    justify-content: center;

    gap: 12px;
    margin-bottom: 40px;
    padding-left: auto;
    padding-right: auto;    


    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        gap: 16px;         
    };      
`,ue=n.div`
`,ge=n.h2`
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 12px;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    };    
`,fe=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };                 
`,be=n.div`
`,we=n.h2`
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
`,je=n.div`
`,$e=n.h2`
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
`,ke=()=>{const e=i(T);return t.jsxs(pe,{children:[t.jsxs(ue,{children:[t.jsx(ge,{$formStage:e,children:"Choose  option"}),t.jsx(fe,{$formStage:e})]}),t.jsx(be,{children:t.jsxs(we,{$formStage:e,children:["Personal details",t.jsx(ye,{$formStage:e})]})}),t.jsxs(je,{children:[t.jsx($e,{$formStage:e,children:"More info"}),t.jsx(Se,{$formStage:e})]})]})},ve=n.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
    width: 100%;
`,j=n.input`
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

`,Ce=n.div`
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
        // margin-top: 40px;
        
        // @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        //     margin-top: 40px;
        // }

        // @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
        //     margin-top: 40px;
        // }
    };      
`,F=n(P)`
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
`,z=n.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,Ae=n.button`
    width: 200px;
    height: 40px;
    background-color: ${e=>e.$isAvailable===!1?e.theme.background.lightBlue:e.theme.background.accentBlue};
    border-radius: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        box-shadow: ${e=>e.theme.border.shadow};
    }
`,Y=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`,R=({onClick:e})=>{var b;const o=u(),l=_(),r=i(T),a=i(xe),c=i(g),p=v.useRef(((b=l.state)==null?void 0:b.from)??"/notices/sell");let f;v.useEffect(()=>{c!==null&&o(J(!0))},[c,o]),console.log(a);const C=()=>{if(r===3||r===2)return f=r-1,f},A=()=>{o(I(C()))};return t.jsx(t.Fragment,{children:r!=="success"&&t.jsxs(Ce,{children:[r===1?t.jsxs(F,{to:p.current,children:[t.jsx(x,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(z,{children:"Cancel"})]}):t.jsxs(F,{onClick:A,children:[t.jsx(x,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(z,{children:"Back"})]}),t.jsxs(Ae,{onClick:e,type:"submit",$isAvailabl:a,children:[r===3?t.jsx(Y,{children:"Done"}):t.jsx(Y,{children:"Next"}),t.jsx(x,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})},Fe=()=>{const e=u(),o=i(g),l=({target:{value:a}})=>{e(M({category:a}))},r=()=>{(o==="your pet"||o==="sell"||o==="lost/found"||o==="in good hands")&&(e(J(!0)),e(I(2)))};return t.jsxs(t.Fragment,{children:[t.jsxs(ve,{children:[t.jsx(j,{type:"button",value:"your pet",name:"your pet",onClick:l,$category:o}),t.jsx(j,{type:"button",value:"sell",name:"sell",onClick:l,$category:o}),t.jsx(j,{type:"button",value:"lost/found",name:"lost/found",onClick:l,$category:o}),t.jsx(j,{type:"button",value:"in good hands",name:"in good hands",onClick:l,$category:o})]}),t.jsx(R,{onClick:r})]})},ze=n.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 458px;
`,$=n.label`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 12px;

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 20px;  
    };     
`,S=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 264px;
    margin-top: 4px;
    margin-bottom: 20px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    color: ${e=>e.theme.color.grey};  

    // &:last-child {
    //     margin-bottom: 40px;
    // }

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;  
        margin-top: 8px;
        width: 390px;

            // &:not(:last-child) {
            //     margin-bottom: 24px;
            // }
    };     
    
    @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
            &:not(:last-child) {
                margin-bottom: 20px;
            }

            // &:last-child {
            //     margin-bottom: 40px;
            // }
    };    

    &:hover,
    &:focus {
        border: 2px solid #00C3AD;
    }; 
`,Ee=()=>{const e=u(),o=i(g),l=new Date().toISOString().slice(0,10),r=Q({initialValues:{name:i(X)||"",birthday:i(K)||"",title:i(V)||"",type:i(q)||""},onSubmit:a=>{e(L(a)),e(I(3))}});return t.jsxs(ze,{onSubmit:r.handleSubmit,encType:"multipart/form-data",children:[(o==="sell"||o==="lost/found"||o==="in good hands")&&t.jsx(t.Fragment,{children:t.jsxs($,{htmlFor:"title",children:["Title of add",t.jsx(S,{placeholder:"Type title for adv",type:"text",id:"title",name:"title",onChange:r.handleChange,value:r.values.title,required:!0})]})}),t.jsxs($,{htmlFor:"pet-name",children:["Pet’s name",t.jsx(S,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name",onChange:r.handleChange,value:r.values.name,required:!0})]}),t.jsxs($,{htmlFor:"pet-birth",children:["Date of birth",t.jsx(S,{type:"date",max:l,id:"pet-birth",name:"birthday",onChange:r.handleChange,value:r.values.birthday,required:!0})]}),t.jsxs($,{htmlFor:"pet-type",children:["Type",t.jsx(S,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type",onChange:r.handleChange,value:r.values.type,required:!0})]}),t.jsx(R,{})]})},Ie="data:image/png;base64,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",Te=n.form`
    display: flex;
    flex-direction: column;
    padding-left: 74px;
    padding-right: 74px;
`,Re=n.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 60px;

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        flex-direction: row;
        gap: 34px;
    };  
    
    @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
        gap: 72px;
    };     
`,De=n.div`
    display: flex;
    flex-direction: column;
`,Ye=n.div`
    display: flex;
    flex-direction: column;
`,Be=n.p`
    font-weight: 500;
    font-size: 20px;
`,Ne=n.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
`,B=n.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    border-radius: 40px;
    background-color: ${e=>e.name===e.$sex?e.theme.background.accentBlue:"transparent"};
    
    // & use {
    //     ${e=>{e.name===e.$sex&&e.theme.color.wight}}
    // }

    &:hover,
    &:focus {
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
`,N=n.span`
    font-weight: 400;
    font-size: 16px;
`;n.label`
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
`;const Ue=n.input`
    display: none;
`,Je=n.div`
    border-radius: ${e=>e.theme.border.radius};
    margin-top: 12px;
`,Me=n.img`
    border-radius: ${e=>e.theme.border.radius};
    width: 112px;
    height: 112px;    

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 182px;
        height: 182px;  
    };       
`,U=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 264px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    color: ${e=>e.theme.color.grey};  

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 395px; 
        font-size: 16px;
    };   
    
    &:hover,
    &:focus {
        border: 2px solid #00C3AD;
    };    


`,k=n.label`
    font-weight: 500;
    font-size: 14px;

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 20px;
    };    
`,Le=n.div`
    display: flex;
    flex-direction: column;
`,Qe=n.textarea`
    border-radius: 20px;
    border: ${e=>e.theme.border.blue};
    max-width: 394px;
    height: auto;
    margin-top: 8px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,E=()=>{const[e,o]=v.useState(null),[l,r]=v.useState(""),a=u(),c=i(g),p=i(le),f=i(X),C=i(K),A=i(ce),b=i(V),W=i(q),w=ee(),h=Q({initialValues:{imgUrl:l,comments:i(de)||"",location:i(me)||"",price:i(he)||""},onSubmit:d=>{console.log(d),a(y(d));const s=new FormData;for(let m in d)m!=="imgUrl"&&m!=="sell"?s.append(m,d[m]):m==="imgUrl"&&s.append("file",l);s.append("sex",p),s.append("category",c),s.append("name",f),s.append("birthday",C),s.append("breed",A),s.append("title",b),s.append("type",W);for(const[m,O]of s.entries())console.log(`${m}: ${O}`);a(te(s)),Z(),H()}}),G=d=>{let s=d.target.files[0];r(s);const m=new FileReader;m.onloadend=()=>{o(m.result)},m.readAsDataURL(s)},D=({target:{value:d}})=>{if(d==="Male"){a(y({...E,sex:"male"}));return}if(d==="Female"){a(y({...E,sex:"female"}));return}},Z=()=>{c==="your pet"?w("/user"):c==="sell"?w("/notices/sell"):c==="lost/found"?w("/notices/lost-found"):c==="in good hands"&&w("/notices/for-free")},H=()=>{a(M({category:null}),L({name:"",birthday:"",breed:"",title:"",type:""}),y({sex:"",imgUrl:"",comments:"",location:"",price:""}))};return t.jsx(t.Fragment,{children:t.jsxs(Te,{onSubmit:h.handleSubmit,encType:"multipart/form-data",children:[t.jsxs(Re,{children:[t.jsxs(De,{children:[(c==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(Be,{children:"The Sex"}),t.jsxs(Ne,{children:[t.jsxs(B,{type:"button",value:"Female",name:"female",onClick:D,$sex:p,children:[t.jsx(x,{iconName:"icon-female",width:"24px",height:"24px",stroke:"#F43F5E"}),t.jsx(N,{children:"Female"})]}),t.jsxs(B,{type:"button",value:"Male",name:"male",onClick:D,$sex:p,children:[t.jsx(x,{iconName:"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(N,{children:"Male"})]})]})]}),t.jsxs(k,{htmlFor:"imgUrl",children:["Load the pet’s image:",t.jsx(Je,{children:e?t.jsx("div",{children:t.jsx(Me,{src:e,alt:"pet`s photo"})}):t.jsx("img",{src:Ie,alt:"default avatar photo"})}),t.jsx(Ue,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:d=>G(d)})]})]}),t.jsxs(Ye,{children:[(c==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(k,{htmlFor:"location",children:"Location"}),t.jsx(U,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:h.handleChange,value:h.values.location,required:!0})]}),c==="sell"&&t.jsxs(t.Fragment,{children:[t.jsx(k,{htmlFor:"price",children:"Price"}),t.jsx(U,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:h.handleChange,value:h.values.price,required:!0})]}),t.jsxs(Le,{children:[t.jsx(k,{htmlFor:"comment",children:"Comments"}),t.jsx(Qe,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:h.handleChange,value:h.values.comments,required:!0})]})]})]}),t.jsx(R,{})]})})},Xe="/pet-app-frontend/assets/success-created-b8079584.png",Ke=n.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Ve=n.img`
    width: 300px;
    height: 300px;
`,qe=({onLeavePage:e,onClick:o})=>(u(),t.jsxs(Ke,{children:[t.jsx(Ve,{src:Xe,alt:"success",width:300}),t.jsxs(F,{onLeavePage:e,children:[t.jsx(x,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(z,{onClick:o,children:"Go Back"})]})]})),We=()=>{const e=i(T),o=i(g);return t.jsxs(re,{$stage:e,children:[t.jsx(ae,{title:o===null&&"Add pet"||o==="your pet"&&"Add pet"||o==="sell"&&"Add pet for sell"||o==="lost/found"&&"Add lost pet"||o==="in good hands"&&"Add pet in good hands"||o==="success"&&"Your post has been created!"}),t.jsx(ke,{}),e===1&&t.jsx(Fe,{}),e===2&&t.jsx(Ee,{}),e===3&&t.jsx(E,{}),e==="success"&&t.jsx(qe,{})]})},Ge="/pet-app-frontend/assets/bg-mob@2x-283a5e61.png",Ze="/pet-app-frontend/assets/bg-tab@2x-0903fd47.png",He="/pet-app-frontend/assets/bg-des@2x-5b99db9e.png",Oe=n.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;    
    background-image: url(${ne});

    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
        background-image: url(${Ge});
    }

    //Tablet hero-img
    @media screen and (min-width: 768px) {
        max-width: 768px;
        background-image: url(${oe});

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
                background-image: url(${Ze});
            }
    }

    //Desktop hero-img
    @media screen and (min-width: 1200px) {
        background-image: url(${ie});
        height: 600px;
        max-width: 1600px;

        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${He});
        }
    }
`,tt=()=>t.jsx(Oe,{children:t.jsx(We,{})});export{tt as default};
