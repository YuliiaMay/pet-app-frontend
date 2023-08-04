import{s as n,j as t,e as s,L as P,c as _,u,r as C,I as p,t as z,v as N,w as U,g as J,x as b,y as ee}from"./index-8cb1eb91.js";import{u as M}from"./formik.esm-6e1e522a.js";import{c as te,a as ne,b as oe}from"./bg-mob@1x-38a1584a.js";const ie=n.div`
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
`,re=n.h1`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 24px;

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 28px;          
    };    
`,se=({title:e})=>t.jsx(re,{children:e}),E=e=>e.pet.FormStage,S=e=>e.pet.OptionForm.category,Q=e=>e.pet.DetailsForm.name,X=e=>e.pet.DetailsForm.birthday,ae=e=>e.pet.DetailsForm.breed,K=e=>e.pet.DetailsForm.title,L=e=>e.pet.DetailsForm.type,ce=e=>e.pet.MoreInfoForm.sex,le=e=>e.pet.MoreInfoForm.comments,de=e=>e.pet.MoreInfoForm.location,me=e=>e.pet.MoreInfoForm.price,he=n.nav`
    display: flex;
    justify-content: center;

    gap: 12px;
    margin-bottom: 40px;
    padding-left: auto;
    padding-right: auto;    


    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        gap: 16px;         
    };      
`,xe=n.div`
`,pe=n.h2`
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 12px;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    };    
`,ue=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };                 
`,ge=n.div`
`,fe=n.h2`
    font-size: 10px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey};

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    }; 
    
`,be=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};     
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };            
`,ye=n.div`
`,we=n.h2`
    font-size: 10px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey};
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;          
    };     
`,je=n.div`
    width: 80px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};   
    
    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 120px;         
    };             
`,$e=()=>{const e=s(E);return t.jsxs(he,{children:[t.jsxs(xe,{children:[t.jsx(pe,{$formStage:e,children:"Choose  option"}),t.jsx(ue,{$formStage:e})]}),t.jsx(ge,{children:t.jsxs(fe,{$formStage:e,children:["Personal details",t.jsx(be,{$formStage:e})]})}),t.jsxs(ye,{children:[t.jsx(we,{$formStage:e,children:"More info"}),t.jsx(je,{$formStage:e})]})]})},Se=n.ul`
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

`,ke=n.div`
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
`,v=n(P)`
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
`,F=n.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,Ce=n.button`
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
`,R=n.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`,I=({onClick:e})=>{var g;const i=s(E),o=_(),r=u(),a=C.useRef(((g=o.state)==null?void 0:g.from)??"/notices/sell");console.log(a.current);let l;const x=()=>{if(i===3||i===2)return l=i-1,l},k=()=>{r(z(x()))};return t.jsx(t.Fragment,{children:i!=="success"&&t.jsxs(ke,{children:[i===1?t.jsxs(v,{to:a.current,children:[t.jsx(p,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(F,{children:"Cancel"})]}):t.jsxs(v,{onClick:k,children:[t.jsx(p,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(F,{children:"Back"})]}),t.jsxs(Ce,{onClick:e,type:"submit",children:[i===3?t.jsx(R,{children:"Done"}):t.jsx(R,{children:"Next"}),t.jsx(p,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})},ve=({onLeavePage:e})=>{const i=u(),o=s(S),r=({target:{value:l}})=>{i(N({category:l}))},a=()=>{(o==="your pet"||o==="sell"||o==="lost/found"||o==="in good hands")&&i(z(2))};return t.jsxs(t.Fragment,{children:[t.jsxs(Se,{children:[t.jsx(y,{type:"button",value:"your pet",name:"your pet",onClick:r,$category:o}),t.jsx(y,{type:"button",value:"sell",name:"sell",onClick:r,$category:o}),t.jsx(y,{type:"button",value:"lost/found",name:"lost/found",onClick:r,$category:o}),t.jsx(y,{type:"button",value:"in good hands",name:"in good hands",onClick:r,$category:o})]}),t.jsx(I,{onClick:a,onLeavePage:e})]})},Fe=n.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    width: 458px;
`,w=n.label`
    font-weight: 500;
    font-size: 12px;

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 20px;  
    };     
`,j=n.input`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 264px;
    margin-top: 4px;
    margin-bottom: 20px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    color: ${e=>e.theme.color.grey};  

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 16px;  
        margin-top: 8px;
        width: 390px;

            &:not(:last-child) {
                margin-bottom: 24px;
            }
    };     
    
    @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
            &:not(:last-child) {
                margin-bottom: 20px;
            }

            &:last-child {
                margin-bottom: 40px;
            }
    };    

    &:hover,
    &:focus {
        border: 2px solid #00C3AD;
    }; 
`,Ae=()=>{const e=u(),i=s(S),o=new Date().toISOString().slice(0,10),r=M({initialValues:{name:s(Q)||"",birthday:s(X)||"",title:s(K)||"",type:s(L)||""},onSubmit:a=>{e(U(a)),e(z(3))}});return t.jsxs(Fe,{onSubmit:r.handleSubmit,encType:"multipart/form-data",children:[(i==="sell"||i==="lost/found"||i==="in good hands")&&t.jsx(t.Fragment,{children:t.jsxs(w,{htmlFor:"title",children:["Title of add",t.jsx(j,{placeholder:"Type title for adv",type:"text",id:"title",name:"title",onChange:r.handleChange,value:r.values.title,required:!0})]})}),t.jsxs(w,{htmlFor:"pet-name",children:["Pet’s name",t.jsx(j,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name",onChange:r.handleChange,value:r.values.name,required:!0})]}),t.jsxs(w,{htmlFor:"pet-birth",children:["Date of birth",t.jsx(j,{type:"date",max:o,id:"pet-birth",name:"birthday",onChange:r.handleChange,value:r.values.birthday,required:!0})]}),t.jsxs(w,{htmlFor:"pet-type",children:["Type",t.jsx(j,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type",onChange:r.handleChange,value:r.values.type,required:!0})]}),t.jsx(I,{})]})},ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAC2CAYAAAB08HcEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcKSURBVHgB7d09cxNHGMDxZ/dWDmkSp/TwJpepYg0wmVSIT4Bp0wCfwNClw3TpcKqUQJMW+ASIislgxu5SIsAJM2lQmkCsu9vsni2PbCzLkvV2D//fjJGEBC74s/NodXc2MkUbr/x8lmR1cfl54+2S975qwld8zhtTFZRBK3w1460xppnn2WsR23Cp26wtmpZMiZEJ2gvZ5PXwja8Sr27em6a10vCZPEmypDHJ0CcS9ou37bqxsiJe6uHhvOCzFFb0BzHyi+fcYxmzsYUdV+d8Ll3xXm4JMaNLXMmdk1WR5FltwTRlDEYeNkHjuHZGFf/gwunKXRmxkYa9vrV9w3i5w+yMQXRW8NqCeygjMpKwn7/7UK1k7n64WxdgWEYeJ9bdHsV4YuWE1v/aXglRbwhR46S8LGdZurHxLr0uJzT0il3M0pX0jpdilgZGKoS5duFM5bYMaaiwd0ePR+HukgDjs5kk7towo8nAYceo59LkKW8QMQk7byyTK4PGPVDYRI1pGCbuY4dN1JimQeM+VthEjVkwSNzH2u6LbxSJGtNmjK+G7cBHcUeu32v7hv1yq31P2P3A7FiK28z9XnTkKBI/Ig8vuS/AjPGS3b505tRar+d7hr27Vx0/UeRAJsyiVtjjrvWat3uOIpXcxRGEqDGr5sO83XOaODTsYgQJn9sLMNvqvY4rOXQUefl2+xW7ICiDYgswTWoHTzv7ZMV++Web46lRGnELMHXbnxyIt2/F5oMYlFQrabvF7lV734pdyZI6UaOE5g+u2vvCjqd1CVBCxtiV7sd7Ya+/SZdZrVFi8/EyH50He2HnkrO9h1Irrl3TuR9/Ka7QVEnfC1Bue28iixW7uOwYUH7zMpddjneKsBlDoEWW51fibRF2YuSyAAoYsVeLW+ZraBPm7G9s6lJOIoAuYc4Oo0heF0CR1KeL1nupCqCINe47G5wXQJH4I1/irghnyUAV400RdlUAZVixoY43O6MIoA5hQyXChkqEDZUIGyoRNlQibKhE2FCJsKESYUMlwoZKhA2VCBsqETZUImyoRNhQibChEmFDJcKGSoQNlQgbKhE2VCJsqETYUImwoRJhQyXChkqEPUG/bibFF8bPCSbmn/+MYDJYsaESYUMlwoZKhA2VCBsqETZUImyoRNhQibChEmFDJcKGSoQNlQgbKhE2VCJsqETYUImwoRJhQyXChkqEDZUIGyoRNlQy61ttL5C//zXy2x9WPqblv0TCj99mcu6rz/uflRV718dUVER9yol8wTV5WLEn6effd65P9NP3qWC8WLGhEmFDJcKGSoQNlQgbKhE2VCJsqETYUImwoRJhQyXChkqEDZUIGyoRNlQibKhE2FCJsKESYUMlwoZKhA2VCBsqETZUcoKJ+foLwYRwXRGoxCgClQgbKhE2VCJsqETYUImwoRJhQyXChkqEDZUIGyoRNlQibKhE2FCJsKESYUMlwoZKhA2VCBsqETZUImyoRNhQibChEmFDJcKGSoQNlQgbKhE2VLLG+6YAurRYsaFR03pjmgLo0rJ5nr8WQBETFmtrrN8UQJE8z15bk7umAKrYhk2ypCGAIi51m7a2aFps+UEL700zNl1s93mRJwIoYK00itvikbcNARQIQT/evRXZnbNbApTddvIs3hRhx5lEzM4SDpRV2L9+ULQsXQdB+Vx+EaDEOmNIZLqfWN9qvw838wKUTNwNuXTWLXYe2/1P5qzaKCXnZLX78b6wXTq3JryJRMnE1TpsgTzr/r19YcfBm1Ub5eMf1hb2H6VqDr5k45Wfz117wxtTFWDGHZytOz450aBYtY3cFaAEDs7WHabXHwg7JE/DTV2AWWXk8cXTlWuHPdXz1LB2kt4U3khidrUS6273erJn2D8sfNn04hlJMJOSxNw6+Iax25En8146E7b/PJ9IYsaEJmsL7uFRLzHSR9wlySppnLeXBJi+zYtnKrV+L+p7+YW4SxLm7WucjIBpi1t7SeKuHee1fVfsjufvPlTn0uQp+9uYhhi1c8mVo+bqbscOOyJuTMOgUUcDhR0RNyZpmKijgS9xFrcBt112JdzleiQYt81hoo4GXrG7rb9tr4W/YUWAUQtbeknqVjtnxAzqRGFH61vbN8Jfc084QQGj0YofDBafoZzAicOO4txdyd298L9sWYDhNcJ23s1hRo+DRhJ2R1y9jZc7vLHEIHbeIMpqv08TBzHSsDtevG2vWvHXCRx9tHyYpV3q1oadpXsZS9hRMZ5kSZ0VHIcYW9AdYwu72/qbdDmXfNlac13wuSquXRMv83HpbKUhYzaRsDuKA6qSrB4jT4xcZiXXLR5fVFwX0ttGvNrYuFbnQ7+3TFEMPXXpkkhetzY5772vys62YecWM65zcFz8kS/xJwl4k29Kal9POuSD/gfIFFMBgXi6vwAAAABJRU5ErkJggg==",Ee=n.form`
    display: flex;
    flex-direction: column;
    padding-left: 74px;
    padding-right: 74px;
`,Ie=n.div`
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
`,Te=n.div`
    display: flex;
    flex-direction: column;
`,Re=n.div`
    display: flex;
    flex-direction: column;
`,De=n.p`
    font-weight: 500;
    font-size: 20px;
`,Ye=n.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
`,D=n.button`
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
`,Y=n.span`
    font-weight: 400;
    font-size: 16px;
`;n.label`
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
`;const Be=n.input`
    display: none;
`,Ne=n.div`
    border-radius: ${e=>e.theme.border.radius};
    margin-top: 12px;
`,Ue=n.img`
    border-radius: ${e=>e.theme.border.radius};
    width: 112px;
    height: 112px;    

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        width: 182px;
        height: 182px;  
    };       
`,B=n.input`
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


`,$=n.label`
    font-weight: 500;
    font-size: 14px;

    @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
        font-size: 20px;
    };    
`,Je=n.div`
    display: flex;
    flex-direction: column;
`,Me=n.textarea`
    border-radius: 20px;
    border: ${e=>e.theme.border.blue};
    max-width: 394px;
    height: auto;
    margin-top: 8px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,A=()=>{const[e,i]=C.useState(null),[o,r]=C.useState(""),a=u(),l=s(S),x=s(ce),k=s(Q),g=s(X),V=s(ae),q=s(K),W=s(L),f=J(),h=M({initialValues:{imgUrl:o,comments:s(le)||"",location:s(de)||"",price:s(me)||""},onSubmit:d=>{console.log(d),a(b(d));const c=new FormData;for(let m in d)m!=="imgUrl"&&m!=="sell"?c.append(m,d[m]):m==="imgUrl"&&c.append("file",o);c.append("sex",x),c.append("category",l),c.append("name",k),c.append("birthday",g),c.append("breed",V),c.append("title",q),c.append("type",W);for(const[m,O]of c.entries())console.log(`${m}: ${O}`);a(ee(c)),H(),Z()}}),G=d=>{let c=d.target.files[0];r(c);const m=new FileReader;m.onloadend=()=>{i(m.result)},m.readAsDataURL(c)},T=({target:{value:d}})=>{if(d==="Male"){a(b({...A,sex:"male"}));return}if(d==="Female"){a(b({...A,sex:"female"}));return}},Z=()=>{l==="your pet"?f("/user"):l==="sell"?f("/notices/sell"):l==="lost/found"?f("/notices/lost-found"):l==="in good hands"&&f("/notices/for-free")},H=()=>{a(N({category:null}),U({name:"",birthday:"",breed:"",title:"",type:""}),b({sex:"",imgUrl:"",comments:"",location:"",price:""}))};return t.jsx(t.Fragment,{children:t.jsxs(Ee,{onSubmit:h.handleSubmit,encType:"multipart/form-data",children:[t.jsxs(Ie,{children:[t.jsxs(Te,{children:[(l==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(De,{children:"The Sex"}),t.jsxs(Ye,{children:[t.jsxs(D,{type:"button",value:"Female",name:"female",onClick:T,$sex:x,children:[t.jsx(p,{iconName:"icon-female",width:"24px",height:"24px",stroke:"#F43F5E"}),t.jsx(Y,{children:"Female"})]}),t.jsxs(D,{type:"button",value:"Male",name:"male",onClick:T,$sex:x,children:[t.jsx(p,{iconName:"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(Y,{children:"Male"})]})]})]}),t.jsxs($,{htmlFor:"imgUrl",children:["Load the pet’s image:",t.jsx(Ne,{children:e?t.jsx("div",{children:t.jsx(Ue,{src:e,alt:"pet`s photo"})}):t.jsx("img",{src:ze,alt:"default avatar photo"})}),t.jsx(Be,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:d=>G(d)})]})]}),t.jsxs(Re,{children:[(l==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx($,{htmlFor:"location",children:"Location"}),t.jsx(B,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:h.handleChange,value:h.values.location,required:!0})]}),l==="sell"&&t.jsxs(t.Fragment,{children:[t.jsx($,{htmlFor:"price",children:"Price"}),t.jsx(B,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:h.handleChange,value:h.values.price,required:!0})]}),t.jsxs(Je,{children:[t.jsx($,{htmlFor:"comment",children:"Comments"}),t.jsx(Me,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:h.handleChange,value:h.values.comments,required:!0})]})]})]}),t.jsx(I,{})]})})},Qe="/pet-app-frontend/assets/success-created-b8079584.png",Xe=n.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Ke=n.img`
    width: 300px;
    height: 300px;
`,Le=({onLeavePage:e,onClick:i})=>(u(),t.jsxs(Xe,{children:[t.jsx(Ke,{src:Qe,alt:"success",width:300}),t.jsxs(v,{onLeavePage:e,children:[t.jsx(p,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(F,{onClick:i,children:"Go Back"})]})]})),Ve=({onLeavePage:e})=>{const i=s(E),o=s(S),r=J();u();const a=()=>{o==="your pet"?r("/user"):o==="sell"?r("/notices/sell"):o==="lost/found"?r("/notices/lost-found"):o==="in good hands"&&r("/notices/for-free")};return t.jsxs(ie,{$stage:i,children:[t.jsx(se,{title:o===null&&"Add pet"||o==="your pet"&&"Add pet"||o==="sell"&&"Add pet for sell"||o==="lost/found"&&"Add lost pet"||o==="in good hands"&&"Add pet in good hands"||o==="success"&&"Your post has been created!"}),t.jsx($e,{}),i===1&&t.jsx(ve,{onLeavePage:e}),i===2&&t.jsx(Ae,{}),i===3&&t.jsx(A,{}),i==="success"&&t.jsx(Le,{onLeavePage:e,onClick:a})]})},qe="/pet-app-frontend/assets/bg-mob@2x-283a5e61.png",We="/pet-app-frontend/assets/bg-tab@2x-0903fd47.png",Ge="/pet-app-frontend/assets/bg-des@2x-5b99db9e.png",Ze=n.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;    
    background-image: url(${te});

    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
        background-image: url(${qe});
    }

    //Tablet hero-img
    @media screen and (min-width: 768px) {
        max-width: 768px;
        background-image: url(${ne});

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
                background-image: url(${We});
            }
    }

    //Desktop hero-img
    @media screen and (min-width: 1200px) {
        background-image: url(${oe});
        height: 600px;
        max-width: 1600px;

        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${Ge});
        }
    }
`,_e=()=>t.jsx(Ze,{children:t.jsx(Ve,{})});export{_e as default};
