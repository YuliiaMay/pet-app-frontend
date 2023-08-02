import{s as o,j as t,g as d,L as M,r as x,u as g,c as B,I as u,q as C,t as N,v as J,w as S,x as Q}from"./index-941173e4.js";import{F as V,a as X,b as K,u as L}from"./formik.esm-e13ea3cc.js";const z=o.div`
    background-color: ${e=>e.theme.background.wight};
    width: auto;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    // margin-left: auto;
    // margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,W=o.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,q=({title:e})=>t.jsx(W,{children:e}),R=e=>e.pet.FormStage,F=e=>e.pet.OptionForm.category,G=e=>e.pet.MoreInfoForm.sex,Z=e=>e.pet,H=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,P=o.div`
`,O=o.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,_=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,ee=o.div`
`,te=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,oe=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,ne=o.div`
`,re=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,se=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,ie=()=>{const e=d(R);return t.jsxs(H,{children:[t.jsxs(P,{children:[t.jsx(O,{$formStage:e,children:"Choose  option"}),t.jsx(_,{$formStage:e})]}),t.jsx(ee,{children:t.jsxs(te,{$formStage:e,children:["Personal details",t.jsx(oe,{$formStage:e})]})}),t.jsxs(ne,{children:[t.jsx(re,{$formStage:e,children:"More info"}),t.jsx(se,{$formStage:e})]})]})},ce=o.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 140px;
`,b=o.input`
    background-color: ${e=>e.theme.background.lightBlue};
    color: ${e=>e.theme.color.blue};
    padding: 8px 16px;
    border-radius: 40px;
    border: none;
    cursor: grab;

    &:hover,
    &:focus {
        color: ${e=>e.theme.color.wight};
        background-color: ${e=>e.theme.background.accentBlue};
    }
`,ae=o.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0px;
`,k=o(M)`
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
`,v=o.span`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: 12px;  
`,le=o.button`
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
`,T=o.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
    margin-right: 12px;
`;function de(e,r){const n=x.useRef(null),i=x.useRef(e);return x.useEffect(()=>{i.current=e},[e]),x.useEffect(()=>{const s=()=>i.current();if(typeof r=="number")return n.current=window.setTimeout(s,r),()=>window.clearTimeout(n.current)},[r]),n}const I=({onClick:e,leaveAddPetForm:r})=>{var p;const n=d(R),i=g();let s;const h=B(),f=x.useRef(((p=h.state)==null?void 0:p.from)??"notices/sell"),l=()=>{if(n===3||n===2)return s=n-1,s},A=()=>{i(C(l()))};return t.jsx("div",{children:t.jsx("div",{children:n!=="success"&&t.jsxs(ae,{children:[n===1?t.jsxs(k,{to:f.current,children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(v,{children:"Cancel"})]}):t.jsxs(k,{onClick:A,children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(v,{children:"Back"})]}),t.jsxs(le,{onClick:e,type:"submit",children:[n===3?t.jsx(T,{children:"Done"}):t.jsx(T,{children:"Next"}),t.jsx(u,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#FEF9F9"})]})]})})})},he=({leaveAddPetForm:e})=>{const r=g(),n=d(F),i=({target:{value:h}})=>{r(N({category:h}))},s=()=>{(n==="your pet"||n==="sell"||n==="lost/found"||n==="in good hands")&&r(C(2))};return t.jsxs("div",{children:[t.jsxs(ce,{children:[t.jsx(b,{type:"button",value:"your pet",name:"category-your-pet",onClick:i}),t.jsx(b,{type:"button",value:"sell",name:"category-sell",onClick:i}),t.jsx(b,{type:"button",value:"lost/found",name:"category-lost",onClick:i}),t.jsx(b,{type:"button",value:"in good hands",name:"category-good-hands",onClick:i})]}),t.jsx(I,{onClick:s,leaveAddPetForm:e})]})},me=o(V)`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`,j=o.label`
    font-weight: 500;
    font-size: 20px;
    // margin-bottom: 8px;
`,y=o(X)`
    border-radius: ${e=>e.theme.border.radius};
    border: ${e=>e.theme.border.blue};
    width: 394px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,xe={name:"",birthday:"",title:"",type:""},ue=()=>{const e=g(),r=d(F),n=(s,h)=>{e(J(s)),e(C(3))},i=d(Z);return console.log(i),t.jsx(K,{initialValues:xe,onSubmit:n,children:t.jsxs(me,{children:[(r==="sell"||r==="lost/found"||r==="in good hands")&&t.jsxs(t.Fragment,{children:[t.jsx(j,{htmlFor:"title",children:"Title of add"}),t.jsx(y,{placeholder:"Type title for adv",type:"text",id:"title",name:"title"})]}),t.jsx(j,{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx(y,{placeholder:"Type name pet",type:"text",id:"pet-name",name:"name"}),t.jsx(j,{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx(y,{type:"date",id:"pet-birth",name:"birthday"}),t.jsx(j,{htmlFor:"pet-type",children:"Type"}),t.jsx(y,{placeholder:"Type of pet",type:"type",id:"pet-type",name:"type"}),t.jsx(I,{})]})})},pe="data:image/png;base64,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",ge=o.form`
    display: flex;
    flex-direction: column;
    padding-left: 74px;
    padding-right: 74px;
`,fe=o.div`
    display: flex;
    flex-direction: column;
`,be=o.div`
    display: flex;
    gap: 97px;
`,je=o.div`
    display: flex;
    flex-direction: column;
`,ye=o.p`
    font-weight: 500;
    font-size: 20px;
`,we=o.div`
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 20px;
`,Y=o.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    border-radius: 40px;

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
`,$=o.span`
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};
`;o.label`
    font-weight: 500;
    font-size: 20px;
    margin-top: 12px;
`;const Se=o.input`
    display: none;
`,Ce=o.div`
    border-radius: ${e=>e.theme.border.radius};
    margin-top: 12px;
`,Fe=o.img`
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
`,w=o.label`
    font-weight: 500;
    font-size: 20px;
`,Ae=o.div`
    display: flex;
    flex-direction: column;
`,ke=o.textarea`
    border-radius: 20px;
    border: ${e=>e.theme.border.blue};
    max-width: 394px;
    height: auto;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    color: ${e=>e.theme.color.grey};  
`,E=()=>{const[e,r]=x.useState(null),[n,i]=x.useState(""),s=g(),h=d(F),f=d(G),l=L({initialValues:{imgUrl:"",comments:"",location:"",price:""},onSubmit:a=>{console.log(a),s(S(a));const m=new FormData;for(let c in a)c!=="imgUrl"&&c!=="sell"?m.append(c,a[c]):c==="imgUrl"&&m.append(c,n);m.append("sex",f);for(const[c,D]of m.entries())console.log(`${c}: ${D}`);s(Q(m)),s(C("success"))}}),A=a=>{let m=a.target.files[0];i(m);const c=new FileReader;c.onloadend=()=>{r(c.result)},c.readAsDataURL(m)},p=({target:{value:a}})=>{if(a==="Male"){s(S({...E,sex:"male"}));return}if(a==="Female"){s(S({...E,sex:"female"}));return}};return t.jsx(t.Fragment,{children:t.jsxs(ge,{onSubmit:l.handleSubmit,encType:"multipart/form-data",children:[t.jsxs(be,{children:[t.jsxs(fe,{children:[(h==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(ye,{children:"The Sex"}),t.jsxs(we,{children:[t.jsxs(Y,{type:"button",value:"Female",name:"sex-female",onClick:p,children:[t.jsx(u,{iconName:"icon-female",width:"24px",height:"24px",stroke:"#F43F5E"}),t.jsx($,{children:"Female"})]}),t.jsxs(Y,{type:"button",value:"Male",name:"sex-male",onClick:p,children:[t.jsx(u,{iconName:"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx($,{children:"Male"})]})]})]}),t.jsxs(w,{htmlFor:"imgUrl",children:["Load the pet’s image:",t.jsx(Ce,{children:e?t.jsx("div",{children:t.jsx(Fe,{src:e,alt:"pet`s photo"})}):t.jsx("img",{src:pe,alt:"default avatar photo"})}),t.jsx(Se,{accept:"image/*",type:"file",name:"imgUrl",id:"imgUrl",onChange:a=>A(a)})]})]}),t.jsxs(je,{children:[(h==="sell"||"lost/found")&&t.jsxs(t.Fragment,{children:[t.jsx(w,{htmlFor:"location",children:"Location"}),t.jsx(U,{placeholder:"Type of location",type:"text",id:"location",name:"location",onChange:l.handleChange,value:l.values.location})]}),h==="sell"&&t.jsxs(t.Fragment,{children:[t.jsx(w,{htmlFor:"price",children:"Price"}),t.jsx(U,{placeholder:"Type of price",type:"text",id:"price",name:"price",onChange:l.handleChange,value:l.values.price})]}),t.jsxs(Ae,{children:[t.jsx(w,{htmlFor:"comment",children:"Comments"}),t.jsx(ke,{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:l.handleChange,value:l.values.comments})]})]})]}),t.jsx(I,{})]})})},ve="/pet-app-frontend/assets/success-created-b8079584.png",Ee=o.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    // margin-top: 75px
`,Re=o.img`
    width: 300px;
    height: 300px;
`,Ie=({leaveAddPetForm:e})=>{const r=g();de(()=>{n()},5e3);const n=()=>{r(N({category:null}),J({name:"",birthday:"",breed:"",title:"",type:""}),S({sex:"",imgUrl:"",comments:"",location:"",price:""}))};return t.jsxs(Ee,{children:[t.jsx(Re,{src:ve,alt:"success",width:300}),t.jsxs(k,{onClick:e,children:[t.jsx(u,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#54ADFF"}),t.jsx(v,{children:"Go Back"})]})]})},Te=({leaveAddPetForm:e})=>{const r=d(R),n=d(F);return t.jsxs(z,{children:[t.jsx(q,{title:n===null&&"Add pet"||n==="your pet"&&"Add pet"||n==="sell"&&"Add pet for sell"||n==="lost/found"&&"Add lost pet"||n==="in good hands"&&"Add pet in good hands"||n==="success"&&"Your post has been created!"}),t.jsx(ie,{}),r===1&&t.jsx(he,{leaveAddPetForm:e}),r===2&&t.jsx(ue,{}),r===3&&t.jsx(E,{}),r==="success"&&t.jsx(Ie,{leaveAddPetForm:e})]})},Ue=()=>{var n;const e=B(),r=x.useRef(((n=e.state)==null?void 0:n.from)??"notices/sell");return t.jsx(t.Fragment,{children:t.jsx(Te,{leaveAddPetForm:r})})};export{Ue as default};
