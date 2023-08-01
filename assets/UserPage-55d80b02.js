import{r as n,s as i,P as y,u as C,f as M,i as F,j as t,k as A,I as E,m as N,L as O}from"./index-57c65e5b.js";import{F as P,a as U,b as V,E as B}from"./formik.esm-13a7e704.js";import{c as R,a as f,d as _}from"./index.esm-5f0ff6fd.js";import{M as Y}from"./ModalComponents-224f9f8b.js";const G=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"}),n.createElement("path",{d:"M3 9C3 7.89543 3.89543 7 5 7H7.5C8.05228 7 8.5 6.55228 8.5 6C8.5 5.44772 8.94772 5 9.5 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"})),J=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M20 6L9 17L4 12",stroke:"#54ADFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),K=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M18 6L6 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M6 6L18 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Q=i.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
  object-position: center; 
  bject-fit: contain;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
  }
`,X=i(P)`
  position: relative;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ee=i(U)`
  position: absolute;
  transform: translate(32%, 0%);
  color: transparent;
  background-color: transparent;
  opacity: 0;
  z-index: 2;
`,te=i.button`
  color: ${e=>e.theme.color.main};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 92px;
  @media (min-width: ${e=>e.theme.sizes.mobile}) {
  }
`,ie=i.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 49px 46px 49px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
    margin: 18px 34px 46px 71px;
  }
`,ne=i.div`
  color: ${e=>e.theme.color.main};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;

  display: flex;
  gap: 8px;
  position: absolute;
`,oe=i.p`
color: red;
`,I=({isFormEnable:e})=>{const r=C(),a=M(F),[l,d]=n.useState(a.avatar||""),[s,x]=n.useState(""),[v,o]=n.useState(!1),[z,p]=n.useState(!1),W={avatar:l},Z=()=>{p(!1),T(s)},$=async k=>{o(!1),p(!0);const c=k.target.files[0];if(c.type!=="image/jpeg"){o(!0),p(!1);return}const L=URL.createObjectURL(c);d(L),x(c),o(!1),p(!0)},T=async k=>{const c=new FormData;c.append("file",k),await r(A(c)).then(L=>{L.error&&(o(!0),p(!0)),o(!1),p(!1)})},q=()=>{d(""),p(!1)};return t.jsxs(ie,{children:[v&&t.jsx(oe,{children:"Something went wrong. Only img can be uploaded"}),t.jsx(Q,{src:l,alt:"",id:"avatar"}),e&&t.jsx(V,{initialValues:W,onSubmit:$,children:()=>t.jsxs(X,{encType:"multipart/form-data",children:[t.jsx(ee,{type:"file",id:"avatar",name:"avatar",accept:"image/*",value:"",onChange:$,hidden:z}),z?t.jsxs(ne,{children:[t.jsx("button",{type:"button",onClick:Z,children:t.jsx(J,{})}),t.jsx("p",{children:"Confirm"}),t.jsx("button",{type:"button",onClick:q,children:t.jsx(K,{})})]}):t.jsxs(te,{type:"button",children:[t.jsx(G,{}),"Edit photo"]})]})})]})};I.propTypes={isFormEnable:y.bool.isRequired};const se=i.div`
  width: 280px;
  min-height: 302px;

  display: flex;
  padding: 45px 20px 16px 20px;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    width: fit-content;
    padding: 32px 32px 24px 32px;
    margin: 0 auto;
  }
`,re=i.div`
  width: 24px;
  height: 24px;

  position: absolute;

  right: 18px;
  top: 18px;

  transition: 0.5s;

  color: #54adff;
  cursor: pointer;
  use {
    padding: 10px;
  }
  :hover {
    use {
      fill: #3cd95b;
      stroke: #3cd95b;
    }
  }
  @media screen and (min-width: 768px) {
    right: 24px;
    top: 24px;
  }
`,ae=i.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: center;
    letter-spacing: 1.44px;
  }
`,de=i.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 17px;
  }
`,le=i.button`
  margin-bottom: 8px;

  width: 100%;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  font-size: 16px;
  color: #54adff;

  letter-spacing: 0.64px;

  border-radius: 40px;

  background: #ffffff;
  border: 2px solid #54adff;
  &:hover {
    background: #54adff;
    color: #fef9f9;

    & use {
      fill: #54adff;
      stroke: #54adff;
    }
  }
`,pe=i.button`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  font-size: 16px;

  letter-spacing: 0.64px;

  border-radius: 40px;
  color: #fef9f9;
  background: #54adff;

  border: 2px solid #54adff;
  &:hover {
    background: #ffffff;
    color: #54adff;

    & use {
      fill: #54adff;
      stroke: #54adff;
    }
  }
  & svg {
    margin-left: 8px;
  }
`,H=({active:e,setShow:r})=>{const a=()=>{r(!1)};return t.jsx(t.Fragment,{children:t.jsx(Y,{onClose:r,active:e,children:t.jsxs(se,{children:[t.jsx(re,{onClick:a,children:t.jsx(E,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),t.jsx(ae,{children:"Already leaving?"}),t.jsxs(de,{children:[t.jsx(le,{onClick:a,type:"button",children:"Cancel"}),t.jsxs(pe,{type:"button",children:["Yes",t.jsx(E,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})]})})})};H.propTypes={active:y.bool,setShow:y.func};const ce=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M3 12L15 12M3 12L7 8M3 12L7 16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),xe=i(P)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 16px;

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    align-items: center;
    margin-bottom: 24px;
  }
`,h=i(U)`
  width: 190px;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: ${e=>e.theme.border.radius};
  cursor: pointer;
  box-sizing: border-box;

  border: 1px solid ${e=>e.theme.error?"#F43F5E":"#54adff"};

  &:hover,
  &:focus {
    border: 1px solid ${e=>e.theme.border.success};
    color: ${e=>e.theme.color.success};
  }

  &::placeholder {
    color: ${e=>e.theme.color.grey};
    font-size: 16px;
    line-height: 0.026;
    letter-spacing: 0.64px;
  }

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    width: 255px;
    padding: 4px 12px;
    align-items: center;
    font-size: 16px;
  }

  @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
  }
`,m=i.label`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 18px;
  }
`,u=i(B)`
  color: red;
`,g=i.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`,he=i.button`
  width: 248px;
  padding: 6px 107px;
  margin-top: 20px;
  width: 100%;
  background-color: ${e=>e.theme.color.blue};
  border: none;
  border-radius: ${e=>e.theme.border.radius};

  color: ${e=>e.theme.color.wight};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    width: 255px;
    padding: 5px 108px;
    margin: 0px 0px 0px 100px;
  }

  @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
    margin: 0px 0px 0px 138px;
  }
`,me=i.button`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  color: ${e=>e.theme.color.grey};

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    position: absolute;
    left: 16px;
    bottom: 20px;
  }
`,ge=i(ce)``,fe=i.div`
  // margin-top: 60px;
  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    margin: 0;
  }
`,D=({isFormEnable:e})=>{const[r,a]=n.useState(!1),l=C(),d=M(F);R().shape({name:f().min(3).max(30).required(),email:f().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email").required(),birthday:_().required(),phone:f().min(3).max(30).required(),city:f().min(3).max(30).required()});const s=async o=>{await l(A(o))},x={name:d.name,email:d.email,birthday:d.birthday,phone:d.phone,city:d.city},v=()=>{a(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(fe,{children:t.jsx(V,{initialValues:x,validate:()=>{},onSubmit:s,children:({isSubmitting:o})=>t.jsxs(xe,{children:[t.jsxs(g,{children:[t.jsx(m,{htmlFor:"name",children:"Name:"}),t.jsx(h,{type:"text",name:"name",id:"name",disabled:o||!e})]}),t.jsx(B,{name:"name",component:"div"}),t.jsxs(g,{children:[t.jsx(m,{htmlFor:"email",children:"Email:"}),t.jsx(h,{type:"email",name:"email",id:"email",disabled:o||!e})]}),t.jsx(u,{name:"email",component:"div"}),t.jsxs(g,{children:[t.jsx(m,{htmlFor:"birthday",children:"Birthday:"}),t.jsx(h,{type:"date",name:"birthday",id:"birthday",disabled:o||!e})]}),t.jsx(u,{name:"birthday",component:"div"}),t.jsxs(g,{children:[t.jsx(m,{htmlFor:"phone",children:"Phone:"}),t.jsx(h,{type:"number",name:"phone",id:"phone",disabled:o||!e})]}),t.jsx(u,{name:"phone",component:"div"}),t.jsxs(g,{children:[t.jsx(m,{htmlFor:"city",children:"City:"}),t.jsx(h,{type:"text",name:"city",id:"city",disabled:o||!e})]}),t.jsx(u,{name:"city",component:"div"}),e?t.jsx(he,{type:"submit",disabled:o||!e,children:"Save"}):t.jsxs(me,{type:"button",onClick:v,children:[t.jsx(ge,{}),"Log Out"]})]})})}),t.jsx(H,{active:r,setShow:a})]})};D.propTypes={isFormEnable:y.bool};const ue=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),we=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M5 15.7059L4.46967 15.1756C4.32902 15.3162 4.25 15.507 4.25 15.7059H5ZM15.7059 5L16.2362 4.46967C15.9433 4.17678 15.4684 4.17678 15.1756 4.46967L15.7059 5ZM19 8.29412L19.5303 8.82445C19.8232 8.53155 19.8232 8.05668 19.5303 7.76379L19 8.29412ZM8.29412 19V19.75C8.49303 19.75 8.6838 19.671 8.82445 19.5303L8.29412 19ZM5 19H4.25C4.25 19.4142 4.58579 19.75 5 19.75V19ZM11.5882 18.25C11.174 18.25 10.8382 18.5858 10.8382 19C10.8382 19.4142 11.174 19.75 11.5882 19.75V18.25ZM18.5882 19.75C19.0024 19.75 19.3382 19.4142 19.3382 19C19.3382 18.5858 19.0024 18.25 18.5882 18.25V19.75ZM5.53033 16.2362L16.2362 5.53033L15.1756 4.46967L4.46967 15.1756L5.53033 16.2362ZM15.1756 5.53033L18.4697 8.82445L19.5303 7.76379L16.2362 4.46967L15.1756 5.53033ZM18.4697 7.76379L7.76379 18.4697L8.82445 19.5303L19.5303 8.82445L18.4697 7.76379ZM8.29412 18.25H5V19.75H8.29412V18.25ZM5.75 19V15.7059H4.25V19H5.75ZM12.705 8.00092L15.9991 11.295L17.0597 10.2344L13.7656 6.94026L12.705 8.00092ZM11.5882 19.75H18.5882V18.25H11.5882V19.75Z",fill:"#54ADFF"})),be=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),je=i.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
`,ye=i.div`
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  width: 280px;
  background-color: ${e=>e.theme.background.wight};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  text-align: center;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
    position: relative;
    width: 704px;
    height: 268px;
    display: flex;
    gap: 20px;
    padding: 20px;
  }
`,w=i.div`
  display: flex;
  margin-top: 12px;
  position: relative;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    position: static;
  }
`,b=i.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`,j=i.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
`,ve=i.button`
  position: absolute;
  right: 0;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    right: 20px;
    top: 20px;
  }
`,ke=i.div`
  display: flex;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    display: flex;
    flex-direction:column;
    gap: 24px;
  }
`,Le=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ce=()=>{const e=M(F),[r,a]=n.useState(e.pets),l=C(),d=async s=>{await l(N(s)).then(x=>a(x.payload))};return t.jsx(ke,{children:r.map(s=>t.jsxs(ye,{children:[t.jsx(je,{src:s.imgUrl,alt:""}),t.jsxs("div",{children:[t.jsxs(w,{children:[t.jsx(ve,{type:"button",onClick:()=>d(s._id),children:t.jsx(Le,{})}),t.jsx(b,{children:"Name: "}),t.jsx(j,{children:s.name})]}),t.jsxs(w,{children:[t.jsx(b,{children:"Date of birth: "}),t.jsx(j,{children:s.birthday})]}),t.jsxs(w,{children:[t.jsx(b,{children:"Type: "}),t.jsx(j,{children:s.type})]}),t.jsxs(w,{children:[t.jsx(b,{children:"Comments: "}),t.jsx(j,{children:s.comments})]})]})]},s._id))})},Me=i.div`
  margin: 44px 20px;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
    min-width: ${e=>e.theme.sizes.tab};
  }

  @media (min-width: ${e=>e.theme.sizes.desk}) {
    min-width: ${e=>e.theme.sizes.desk};
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: flex-start;
  }
`,Fe=i.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 28px;
  }
`,ze=i.div`
  @media (min-width: ${e=>e.theme.sizes.desk}) {
    margin-bottom:24px;
  }
`,$e=i.div`
  width: 280px;
  background-color: ${e=>e.theme.background.wight};
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  position: relative;
  text-align: center;
  padding: 20px 8px 6px 8px;
  margin-top: 18px;
  margin-bottom: 40px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
    width: 704px;
    height: 268px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
    display: block;
    width: 395px;
    height: 540px;
    position: relative;
    text-align: center;
    padding: 20px 24px 21px 16px;
    margin-top: 18px;
    margin-bottom: 40px;
  }
`,S=i.button`
  position: absolute;
  right: 15px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    right: 18px;
    top: 18px;
  }
`,Ee=i.div`
  background-color: ${e=>e.theme.background.wight};
`,Se=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 280px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    width: 704px;
  }
`,Ae=i(O)`
  display: flex;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background-color: ${e=>e.theme.color.blue};
  color: ${e=>e.theme.color.wight};
`,Pe=i.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 28px;
  }
`,He=()=>{const[e,r]=n.useState(!1),a=()=>{r(!1)},l=()=>{r(!0)};return t.jsxs(Me,{children:[t.jsxs("div",{children:[t.jsx(ze,{children:t.jsx(Fe,{children:"My information"})}),t.jsxs($e,{children:[e?t.jsx(S,{type:"button",onClick:a,children:t.jsx(ue,{})}):t.jsx(S,{type:"button",onClick:l,children:t.jsx(we,{})}),t.jsx(I,{isFormEnable:e}),t.jsx(D,{isFormEnable:e})]})]}),t.jsxs("div",{children:[t.jsxs(Se,{children:[t.jsx(Pe,{children:"My pets"}),t.jsxs(Ae,{to:"/add-pet",children:["Add Pet",t.jsx(be,{})]})]}),t.jsx(Ee,{children:t.jsx(Ce,{})})]})]})};export{He as default};
