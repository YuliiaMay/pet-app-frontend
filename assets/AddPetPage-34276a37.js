import{s as o,j as t,i as n,L as R,u as x,o as Y,k as b,r as u,m as I,e as y,f as D}from"./index-66294a2e.js";const J=o.div`
    background-color: ${e=>e.theme.background.wight};
    width: 458px;
    height: 540px;
    border-radius: 40px;
    padding: 20px 32px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
`,T=o.h1`
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 24px;
`,U=()=>t.jsx(T,{children:"Add pet"}),S=e=>e.pet.FormStage,j=e=>e.pet.OptionForm.category,A=e=>e.pet.DetailsForm.name,C=e=>e.pet.DetailsForm.birthday,w=e=>e.pet.DetailsForm.breed,F=e=>e.pet.DetailsForm.title,k=e=>e.pet.DetailsForm.type,B=e=>e.pet.MoreInfoForm.sex,M=e=>e.pet.MoreInfoForm.avatar,N=e=>e.pet.MoreInfoForm.comments,Q=e=>e.pet.MoreInfoForm.location,X=e=>e.pet.MoreInfoForm.price,K=o.nav`
    display: flex;
    justify-content: flex-start;
    gap: 22px;
    margin-bottom: 40px;
    
`,V=o.div`
`,L=o.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${e=>{if(e.$formStage===1)return e.theme.color.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.color.success}}
`,W=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>{if(e.$formStage===1)return e.theme.background.blue;if(e.$formStage>1||e.$formStage==="success")return e.theme.background.success}};           
`,q=o.div`
`,Z=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===2?e.theme.color.blue:e.$formStage>2||e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,$=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===2?e.theme.background.blue:e.$formStage>2||e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};          
`,z=o.div`
`,G=o.h2`
    font-size: 16px;
    font-weight: 500;    
    color: ${e=>e.$formStage===3?e.theme.color.blue:e.$formStage==="success"?e.theme.color.success:e.theme.color.grey}
`,H=o.div`
    width: 120px;
    height: 8px;
    border-radius: 8px;
    margin-top: 12px;
    background-color: ${e=>e.$formStage===3?e.theme.background.blue:e.$formStage==="success"?e.theme.background.success:e.theme.background.lightBlue};         
`,P=()=>{const e=n(S);return t.jsxs(K,{children:[t.jsxs(V,{children:[t.jsx(L,{$formStage:e,children:"Choose  option"}),t.jsx(W,{$formStage:e})]}),t.jsx(q,{children:t.jsxs(Z,{$formStage:e,children:["Personal details",t.jsx($,{$formStage:e})]})}),t.jsxs(z,{children:[t.jsx(G,{$formStage:e,children:"More info"}),t.jsx(H,{$formStage:e})]})]})},O=o.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 140px;
`,m=o.button`
    background-color: ${e=>e.theme.background.lightBlue};
    color: ${e=>e.theme.color.blue};
    padding: 8px 16px;
    border-radius: 40px;
    border: none;


    &:hover,
    &:focus {
        color: ${e=>e.theme.color.wight};
        background-color: ${e=>e.theme.background.accentBlue}
    }
`,_=o.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 0px;
`,ee=o.div`
    width: 130px;
    height: 40px;
    padding: 9px 0;

    border-radius: 40px;
    border: none;

    &:hover,
    &:focus {
        border: ${e=>e.theme.border.shadow};
    }   
`,te=o(R)`
    color: ${e=>e.theme.color.blue};
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;    
`,oe=o.button`
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
`,ne=o.span`
    color: ${e=>e.theme.color.wight};
    font-weight: 700;
    font-size: 16px;
`,f=({onClick:e})=>t.jsxs(_,{children:[t.jsx(ee,{children:t.jsx(te,{children:"Cancel"})}),t.jsx(oe,{onClick:e,type:"button",children:t.jsx(ne,{children:"Next"})})]}),re=()=>{const e=x(),c=n(j),i=({target:{value:h}})=>{e(Y({category:h}))},l=()=>{(c==="your pet"||c==="sell"||c==="lost"||c==="good hands")&&e(b(2))};return t.jsxs("div",{children:[t.jsxs(O,{children:[t.jsx("li",{children:t.jsx(m,{type:"button",value:"your pet",onClick:i,children:"your pet"})}),t.jsx("li",{children:t.jsx(m,{type:"button",value:"sell",onClick:i,children:"sell"})}),t.jsx("li",{children:t.jsx(m,{type:"button",value:"lost",onClick:i,children:"lost/found"})}),t.jsx("li",{children:t.jsx(m,{type:"button",value:"good hands",onClick:i,children:"in good hands"})})]}),t.jsx(f,{onClick:l})]})},se=o.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`,ae=()=>{const e=x(),[c,i]=u.useState({name:n(A)||"",birthday:n(C)||"",breed:n(w)||"",title:n(F)||"",type:n(k)||""}),l=({target:s})=>{const{name:p,value:g}=s;i({...c,[p]:g})},h=s=>{s.preventDefault(),e(I({name:c.name,birthday:c.birthday,breed:c.breed,title:c.title,type:c.type})),e(b(3))};return t.jsx(t.Fragment,{children:t.jsxs(se,{children:[t.jsx("label",{htmlFor:"pet-name",children:"Pet’s name"}),t.jsx("input",{type:"text",id:"pet-name",name:"name",onChange:l}),t.jsx("label",{htmlFor:"pet-birth",children:"Date of birth"}),t.jsx("input",{type:"date",id:"pet-birth",name:"birthday",onChange:l}),t.jsx("label",{htmlFor:"pet-type",children:"Type"}),t.jsx("input",{type:"text",id:"pet-type",name:"type",onChange:l}),t.jsx(f,{onClick:h})]})})},ce="data:image/png;base64,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";y.defaults.baseURL="https://pets-zywq.onrender.com/api";const ie=D("pet/addPet",async(e,c)=>{try{return(await y.post("/notices/add",e)).data}catch(i){return c.rejectWithValue(i.message)}}),le=()=>{const[e,c]=u.useState(null),[i,l]=u.useState(""),h=x(),[s,p]=u.useState({category:n(j)||"",name:n(A)||"",birthday:n(C)||"",breed:n(w)||"",title:n(F)||"",type:n(k)||"",sex:n(B)||"",file:n(M)||"",comments:n(N)||"",location:n(Q)||"",price:n(X)||""}),g=d=>{let a=d.target.files[0];l(a);const r=new FileReader;r.onloadend=()=>{c(r.result)},r.readAsDataURL(a)},v=({target:d})=>{const{name:a,value:r}=d;p({...s,[a]:r})},E=d=>{d.preventDefault();const a={category:s.category,name:s.name,birthday:s.birthday,breed:s.breed,title:s.title,type:s.type,sex:s.sex,file:i,comments:s.comments,location:s.location,price:s.price},r=new FormData;r.append("category",a.category),r.append("name",a.name),r.append("birthday",a.birthday),r.append("breed",a.breed),r.append("title",a.title),r.append("type",a.type),r.append("sex",a.sex),r.append("file",a.file),r.append("comments",a.comments),r.append("location",a.location),r.append("price",a.price),h(ie(r)),h(b("success"))};return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"upload"}),t.jsx("div",{children:!e&&t.jsx("img",{src:ce,alt:"pet`s photo"})}),t.jsx("input",{type:"file",name:"upload",id:"upload",onChange:d=>g(d)})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"comment",children:"Comments"}),t.jsx("textarea",{type:"text",id:"comment",placeholder:"Type of pet",name:"comments",onChange:v})]}),t.jsx(f,{onClick:E})]})})},de=()=>{const e=n(S);return t.jsxs(J,{children:[t.jsx(U,{}),t.jsx(P,{}),e===1&&t.jsx(re,{stage:e}),e===2&&t.jsx(ae,{stage:e}),(e===3||e==="success")&&t.jsx(le,{stage:e})]})},me=()=>t.jsx(t.Fragment,{children:t.jsx(de,{})});export{me as default};
