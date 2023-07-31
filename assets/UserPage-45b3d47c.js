import{r as n,s as i,P as y,u as k,f as L,i as C,j as t,k as $,I as z,m as U,L as D}from"./index-79cfb9b4.js";import{F as E,a as I,b as A,E as P}from"./formik.esm-e935a514.js";import{c as W,a as f,d as Z}from"./index.esm-2c9441e4.js";import{M as T}from"./ModalComponents-35eae5f2.js";const q=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"}),n.createElement("path",{d:"M3 9C3 7.89543 3.89543 7 5 7H7.5C8.05228 7 8.5 6.55228 8.5 6C8.5 5.44772 8.94772 5 9.5 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"})),N=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M20 6L9 17L4 12",stroke:"#54ADFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),O=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M18 6L6 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M6 6L18 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),R=i.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
  }
`,_=i(E)`
  position: relative;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Y=i(I)`
  position: absolute;
  transform: translate(32%, 0%);
  color: transparent;
  background-color: transparent;
  opacity: 0;
  z-index: 2;
`,G=({children:e})=>{switch(e){case"isImgUpdating":return"-1";case"!isImgUpdating":return"2";default:return"1"}},J=i.button`
  color: ${e=>e.theme.color.main};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;

  // position: absolute;
  // transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 92px;
  // z-index: ${G};
  @media (min-width: ${e=>e.theme.sizes.mobile}) {
  }
`,K=i.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 49px 46px 49px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
    margin: 18px 34px 46px 71px;
  }
`,Q=i.div`
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
  transform: translate(-50%, 0);
`,V=({isFormEnable:e})=>{const r=k(),s=L(C),[l,a]=n.useState(!1),[o,p]=n.useState(!1),v={avatar:s.avatar},d=()=>{p(!0)},M=async c=>{if(d(),a(!1),c.target.files[0].type!=="image/jpeg"){a(!0);return}p(!1);const g=new FormData;g.append("avatar",c.target.files[0]),await r($(g)).then(()=>"")},H=c=>{c("avatar",null),p(!1)};return t.jsxs(K,{children:[l&&t.jsx("p",{children:"Only img can be uploaded"}),t.jsx(R,{src:s.avatar,alt:""}),e&&t.jsx(A,{initialValues:v,onSubmit:M,children:({values:c,setFieldValue:g})=>t.jsxs(_,{encType:"multipart/form-data",children:[t.jsx(Y,{type:"file",id:"avatar",name:"avatar",accept:"image/*",value:"",onChange:M}),o?t.jsxs(Q,{hidden:!0,children:[t.jsx("button",{type:"button",children:t.jsx(N,{})}),t.jsx("p",{children:"Confirm"}),c.avatar&&t.jsx("button",{type:"button",onClick:()=>H(g),children:t.jsx(O,{})})]}):t.jsxs(J,{type:"button",children:[t.jsx(q,{}),"Edit photo"]})]})})]})};V.propTypes={isFormEnable:y.bool.isRequired};const X=i.div`
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
`,ee=i.div`
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
`,te=i.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: center;
    letter-spacing: 1.44px;
  }
`,ie=i.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 17px;
  }
`,ne=i.button`
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
`,oe=i.button`
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
`,B=({active:e,setShow:r})=>{const s=()=>{r(!1)};return t.jsx(t.Fragment,{children:t.jsx(T,{onClose:r,active:e,children:t.jsxs(X,{children:[t.jsx(ee,{onClick:s,children:t.jsx(z,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),t.jsx(te,{children:"Already leaving?"}),t.jsxs(ie,{children:[t.jsx(ne,{onClick:s,type:"button",children:"Cancel"}),t.jsxs(oe,{type:"button",children:["Yes",t.jsx(z,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})]})})})};B.propTypes={active:y.bool,setShow:y.func};const se=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M3 12L15 12M3 12L7 8M3 12L7 16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),re=i(E)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 16px;

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    align-items: center;
    margin-bottom: 24px;
  }
`,x=i(I)`
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
`,h=i.label`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 18px;
  }
`,u=i(P)`
  color: red;
`,m=i.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`,ae=i.button`
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
`,de=i.button`
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
`,le=i(se)``,pe=i.div`
  // margin-top: 60px;
  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    margin: 0;
  }
`,S=({isFormEnable:e})=>{const[r,s]=n.useState(!1),l=k(),a=L(C);W().shape({name:f().min(3).max(30).required(),email:f().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email").required(),birthday:Z().required(),phone:f().min(3).max(30).required(),city:f().min(3).max(30).required()});const o=async d=>{await l($(d))},p={name:a.name,email:a.email,birthday:a.birthday,phone:a.phone,city:a.city},v=()=>{s(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(pe,{children:t.jsx(A,{initialValues:p,validate:()=>{},onSubmit:o,children:({isSubmitting:d})=>t.jsxs(re,{children:[t.jsxs(m,{children:[t.jsx(h,{htmlFor:"name",children:"Name:"}),t.jsx(x,{type:"text",name:"name",id:"name",disabled:d||!e})]}),t.jsx(P,{name:"name",component:"div"}),t.jsxs(m,{children:[t.jsx(h,{htmlFor:"email",children:"Email:"}),t.jsx(x,{type:"email",name:"email",id:"email",disabled:d||!e})]}),t.jsx(u,{name:"email",component:"div"}),t.jsxs(m,{children:[t.jsx(h,{htmlFor:"birthday",children:"Birthday:"}),t.jsx(x,{type:"date",name:"birthday",id:"birthday",disabled:d||!e})]}),t.jsx(u,{name:"birthday",component:"div"}),t.jsxs(m,{children:[t.jsx(h,{htmlFor:"phone",children:"Phone:"}),t.jsx(x,{type:"number",name:"phone",id:"phone",disabled:d||!e})]}),t.jsx(u,{name:"phone",component:"div"}),t.jsxs(m,{children:[t.jsx(h,{htmlFor:"city",children:"City:"}),t.jsx(x,{type:"text",name:"city",id:"city",disabled:d||!e})]}),t.jsx(u,{name:"city",component:"div"}),e?t.jsx(ae,{type:"submit",disabled:d||!e,children:"Save"}):t.jsxs(de,{type:"button",onClick:v,children:[t.jsx(le,{}),"Log Out"]})]})})}),t.jsx(B,{active:r,setShow:s})]})};S.propTypes={isFormEnable:y.bool};const ce=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),xe=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M5 15.7059L4.46967 15.1756C4.32902 15.3162 4.25 15.507 4.25 15.7059H5ZM15.7059 5L16.2362 4.46967C15.9433 4.17678 15.4684 4.17678 15.1756 4.46967L15.7059 5ZM19 8.29412L19.5303 8.82445C19.8232 8.53155 19.8232 8.05668 19.5303 7.76379L19 8.29412ZM8.29412 19V19.75C8.49303 19.75 8.6838 19.671 8.82445 19.5303L8.29412 19ZM5 19H4.25C4.25 19.4142 4.58579 19.75 5 19.75V19ZM11.5882 18.25C11.174 18.25 10.8382 18.5858 10.8382 19C10.8382 19.4142 11.174 19.75 11.5882 19.75V18.25ZM18.5882 19.75C19.0024 19.75 19.3382 19.4142 19.3382 19C19.3382 18.5858 19.0024 18.25 18.5882 18.25V19.75ZM5.53033 16.2362L16.2362 5.53033L15.1756 4.46967L4.46967 15.1756L5.53033 16.2362ZM15.1756 5.53033L18.4697 8.82445L19.5303 7.76379L16.2362 4.46967L15.1756 5.53033ZM18.4697 7.76379L7.76379 18.4697L8.82445 19.5303L19.5303 8.82445L18.4697 7.76379ZM8.29412 18.25H5V19.75H8.29412V18.25ZM5.75 19V15.7059H4.25V19H5.75ZM12.705 8.00092L15.9991 11.295L17.0597 10.2344L13.7656 6.94026L12.705 8.00092ZM11.5882 19.75H18.5882V18.25H11.5882V19.75Z",fill:"#54ADFF"})),he=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),me=i.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
`,ge=i.div`
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
`,fe=i.button`
  position: absolute;
  right: 0;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    right: 20px;
    top: 20px;
  }
`,ue=i.div`
  display: flex;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    display: flex;
    flex-direction:column;
    gap: 24px;
  }
`,we=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),be=()=>{const e=L(C),[r,s]=n.useState(e.pets),l=k(),a=async o=>{await l(U(o)).then(p=>s(p.payload))};return t.jsx(ue,{children:r.map(o=>t.jsxs(ge,{children:[t.jsx(me,{src:o.imgUrl,alt:""}),t.jsxs("div",{children:[t.jsxs(w,{children:[t.jsx(fe,{type:"button",onClick:()=>a(o._id),children:t.jsx(we,{})}),t.jsx(b,{children:"Name: "}),t.jsx(j,{children:o.name})]}),t.jsxs(w,{children:[t.jsx(b,{children:"Date of birth: "}),t.jsx(j,{children:o.birthday})]}),t.jsxs(w,{children:[t.jsx(b,{children:"Type: "}),t.jsx(j,{children:o.type})]}),t.jsxs(w,{children:[t.jsx(b,{children:"Comments: "}),t.jsx(j,{children:o.comments})]})]})]},o._id))})},je=i.div`
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
`,ye=i.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 28px;
  }
`,ve=i.div`
  @media (min-width: ${e=>e.theme.sizes.desk}) {
    margin-bottom:24px;
  }
`,ke=i.div`
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
`,F=i.button`
  position: absolute;
  right: 15px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    right: 18px;
    top: 18px;
  }
`,Le=i.div`
  background-color: ${e=>e.theme.background.wight};
`,Ce=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 280px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    width: 704px;
  }
`,Me=i(D)`
  display: flex;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background-color: ${e=>e.theme.color.blue};
  color: ${e=>e.theme.color.wight};
`,ze=i.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 28px;
  }
`,Ae=()=>{const[e,r]=n.useState(!1),s=()=>{r(!1)},l=()=>{r(!0)};return t.jsxs(je,{children:[t.jsxs("div",{children:[t.jsx(ve,{children:t.jsx(ye,{children:"My information"})}),t.jsxs(ke,{children:[e?t.jsx(F,{type:"button",onClick:s,children:t.jsx(ce,{})}):t.jsx(F,{type:"button",onClick:l,children:t.jsx(xe,{})}),t.jsx(V,{isFormEnable:e}),t.jsx(S,{isFormEnable:e})]})]}),t.jsxs("div",{children:[t.jsxs(Ce,{children:[t.jsx(ze,{children:"My pets"}),t.jsxs(Me,{to:"/add-pet",children:["Add Pet",t.jsx(he,{})]})]}),t.jsx(Le,{children:t.jsx(be,{})})]})]})};export{Ae as default};
