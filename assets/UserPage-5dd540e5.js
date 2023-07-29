import{r as n,s as i,P as y,u as v,j as t,I as C,L as D,h as I,i as P,k as S}from"./index-74ae73c6.js";import{F,a as z,d as $,E,c as U,b as w,e as Z}from"./index.esm-6902141b.js";import{M as W}from"./ModalComponents-1b7df74e.js";const T=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"}),n.createElement("path",{d:"M3 9C3 7.89543 3.89543 7 5 7H7.5C8.05228 7 8.5 6.55228 8.5 6C8.5 5.44772 8.94772 5 9.5 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"})),q=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M20 6L9 17L4 12",stroke:"#54ADFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),N=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M18 6L6 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M6 6L18 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),O=i.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
  }
`,Y=i(F)`
  position: relative;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,R=i(z)`
  position: absolute;
  transform: translate(32%, 0%);
  color: transparent;
  background-color: transparent;
  opacity: 0;
  z-index: 2;
`,G=i.button`
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
`,_=i.div`
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
`,A=({isFormEnable:e})=>{const r=v(),[s,o]=n.useState(!1),[d,p]=n.useState(!1),u={avatar:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"},k={avatar:u.avatar},L=()=>{p(!0)},a=async l=>{if(o(!1),l.target.files[0].type!=="image/jpeg"){o(!0);return}p(!1);const b=new FormData;b.append("avatar",l.target.files[0]),r(uploadImg(b))},B=l=>{l("avatar",null),p(!1)};return t.jsxs(K,{children:[s&&t.jsx("p",{children:"Only img can be uploaded"}),t.jsx(O,{src:u.avatar,alt:""}),e&&t.jsx($,{initialValues:k,onSubmit:a,children:({values:l,setFieldValue:b})=>t.jsxs(Y,{encType:"multipart/form-data",children:[t.jsx(R,{type:"file",id:"avatar",name:"avatar",accept:"image/*",value:"",onChange:L}),d?t.jsxs(_,{children:[t.jsx("button",{type:"submit",children:t.jsx(q,{})}),t.jsx("p",{children:"Confirm"}),l.avatar&&t.jsx("button",{type:"button",onClick:()=>B(b),children:t.jsx(N,{})})]}):t.jsxs(G,{type:"button",children:[t.jsx(T,{}),"Edit photo"]})]})})]})};A.propTypes={isFormEnable:y.bool.isRequired};const J=i.div`
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
`,Q=i.div`
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
`,X=i.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: center;
    letter-spacing: 1.44px;
  }
`,ee=i.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 17px;
  }
`,te=i.button`
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
`,ie=i.button`
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
`,H=({active:e,setShow:r})=>{const s=()=>{r(!1)};return t.jsx(t.Fragment,{children:t.jsx(W,{onClose:r,active:e,children:t.jsxs(J,{children:[t.jsx(Q,{onClick:s,children:t.jsx(C,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),t.jsx(X,{children:"Already leaving?"}),t.jsxs(ee,{children:[t.jsx(te,{onClick:s,type:"button",children:"Cancel"}),t.jsxs(ie,{type:"button",children:["Yes",t.jsx(C,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})]})})})};H.propTypes={active:y.bool,setShow:y.func};const ne=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M3 12L15 12M3 12L7 8M3 12L7 16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),oe=i(F)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 16px;

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    align-items: center;
    margin-bottom: 24px;
  }
`,c=i(z)`
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
`,x=i.label`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 18px;
  }
`,j=i(E)`
  color: red;
`,h=i.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`,se=i.button`
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
`,re=i.button`
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
`,ae=i(ne)``,de=i.div`
  // margin-top: 60px;
  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    margin: 0;
  }
`,V=({isFormEnable:e})=>{const[r,s]=n.useState(!1),o=v(),d={name:"Anna",email:"anna00@gmail.com",birthday:"00.00.0000",phone:38e9,city:"Kiev"},p=U().shape({name:w().min(3).max(30).required(),email:w().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email").required(),birthday:w().required(),phone:Z().min(3).max(30).required(),city:w().min(3).max(30).required()}),u=a=>{o(editUser(a))},k={name:d.name,email:d.email,birthday:d.birthday,phone:d.phone,city:d.city},L=()=>{s(!0)};return t.jsxs(t.Fragment,{children:[t.jsx(de,{children:t.jsx($,{initialValues:k,validate:p,onSubmit:u,children:({isSubmitting:a})=>t.jsxs(oe,{children:[t.jsxs(h,{children:[t.jsx(x,{htmlFor:"name",children:"Name:"}),t.jsx(c,{type:"text",name:"name",id:"name",disabled:a||!e})]}),t.jsx(E,{name:"name",component:"div"}),t.jsxs(h,{children:[t.jsx(x,{htmlFor:"email",children:"Email:"}),t.jsx(c,{type:"email",name:"email",id:"email",disabled:a||!e})]}),t.jsx(j,{name:"email",component:"div"}),t.jsxs(h,{children:[t.jsx(x,{htmlFor:"birthday",children:"Birthday:"}),t.jsx(c,{type:"text",name:"birthday",id:"birthday",disabled:a||!e})]}),t.jsx(j,{name:"birthday",component:"div"}),t.jsxs(h,{children:[t.jsx(x,{htmlFor:"phone",children:"Phone:"}),t.jsx(c,{type:"number",name:"phone",id:"phone",disabled:a||!e})]}),t.jsx(j,{name:"phone",component:"div"}),t.jsxs(h,{children:[t.jsx(x,{htmlFor:"city",children:"City:"}),t.jsx(c,{type:"text",name:"city",id:"city",disabled:a||!e})]}),t.jsx(j,{name:"city",component:"div"}),e?t.jsx(se,{type:"submit",disabled:a||!e,children:"Save"}):t.jsxs(re,{type:"button",onClick:L,children:[t.jsx(ae,{}),"Log Out"]})]})})}),t.jsx(H,{active:r,setShow:s})]})};V.propTypes={isFormEnable:y.bool};const le=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),pe=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M5 15.7059L4.46967 15.1756C4.32902 15.3162 4.25 15.507 4.25 15.7059H5ZM15.7059 5L16.2362 4.46967C15.9433 4.17678 15.4684 4.17678 15.1756 4.46967L15.7059 5ZM19 8.29412L19.5303 8.82445C19.8232 8.53155 19.8232 8.05668 19.5303 7.76379L19 8.29412ZM8.29412 19V19.75C8.49303 19.75 8.6838 19.671 8.82445 19.5303L8.29412 19ZM5 19H4.25C4.25 19.4142 4.58579 19.75 5 19.75V19ZM11.5882 18.25C11.174 18.25 10.8382 18.5858 10.8382 19C10.8382 19.4142 11.174 19.75 11.5882 19.75V18.25ZM18.5882 19.75C19.0024 19.75 19.3382 19.4142 19.3382 19C19.3382 18.5858 19.0024 18.25 18.5882 18.25V19.75ZM5.53033 16.2362L16.2362 5.53033L15.1756 4.46967L4.46967 15.1756L5.53033 16.2362ZM15.1756 5.53033L18.4697 8.82445L19.5303 7.76379L16.2362 4.46967L15.1756 5.53033ZM18.4697 7.76379L7.76379 18.4697L8.82445 19.5303L19.5303 8.82445L18.4697 7.76379ZM8.29412 18.25H5V19.75H8.29412V18.25ZM5.75 19V15.7059H4.25V19H5.75ZM12.705 8.00092L15.9991 11.295L17.0597 10.2344L13.7656 6.94026L12.705 8.00092ZM11.5882 19.75H18.5882V18.25H11.5882V19.75Z",fill:"#54ADFF"})),ce=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),xe=i.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
`,he=i.div`
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
`,m=i.div`
  display: flex;
  margin-top: 12px;
  position: relative;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    position: static;
  }
`,g=i.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`,f=i.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
`,me=i.button`
  position: absolute;
  right: 0;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    right: 20px;
    top: 20px;
  }
`,ge=i.div`
  display: flex;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    display: flex;
    flex-direction:column;
    gap: 24px;
  }
`,fe=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ue=()=>{const e=v(),r=[{id:1,img:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",name:"gggggggg",dateofbirth:"gggggggggg",type:"ggggggggg",comments:"gggggggggggggg"}],s=o=>{e(deletePetFromFavorite(o.target.id))};return t.jsx(ge,{children:r.map(o=>t.jsxs(he,{children:[t.jsx(xe,{src:o.img,alt:""}),t.jsxs("div",{children:[t.jsxs(m,{children:[t.jsx(me,{type:"button",onClick:s,children:t.jsx(fe,{})}),t.jsx(g,{children:"Name: "}),t.jsx(f,{children:o.name})]}),t.jsxs(m,{children:[t.jsx(g,{children:"Date of birth: "}),t.jsx(f,{children:o.dateofbirth})]}),t.jsxs(m,{children:[t.jsx(g,{children:"Type: "}),t.jsx(f,{children:o.type})]}),t.jsxs(m,{children:[t.jsx(g,{children:"Date of birth: "}),t.jsx(f,{children:o.dateofbirth})]}),t.jsxs(m,{children:[t.jsx(g,{children:"Comments: "}),t.jsx(f,{children:o.comments})]})]})]},o.id))})},be=i.div`
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
`,we=i.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 28px;
  }
`,je=i.div`
  @media (min-width: ${e=>e.theme.sizes.desk}) {
    margin-bottom:24px;
  }
`,ye=i.div`
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
`,M=i.button`
  position: absolute;
  right: 15px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    right: 18px;
    top: 18px;
  }
`,ve=i.div`
  background-color: ${e=>e.theme.background.wight};
`,ke=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:24px;
`,Le=i(D)`
  display: flex;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background-color: ${e=>e.theme.color.blue};
  color: ${e=>e.theme.color.wight};
`,Ce=i.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 28px;
  }
`,$e=()=>{const[e,r]=n.useState(!1);I(P);const s=v();n.useEffect(()=>{s(S())},[s]);const o=()=>{r(!1)},d=()=>{r(!0)};return t.jsxs(be,{children:[t.jsxs("div",{children:[t.jsx(je,{children:t.jsx(we,{children:"My information"})}),t.jsxs(ye,{children:[e?t.jsx(M,{type:"button",onClick:o,children:t.jsx(le,{})}):t.jsx(M,{type:"button",onClick:d,children:t.jsx(pe,{})}),t.jsx(A,{isFormEnable:e}),t.jsx(V,{isFormEnable:e})]})]}),t.jsxs("div",{children:[t.jsxs(ke,{children:[t.jsx(Ce,{children:"My pets"}),t.jsxs(Le,{to:"/add-pet",children:["Add Pet",t.jsx(ce,{})]})]}),t.jsx(ve,{children:t.jsx(ue,{})})]})]})};export{$e as default};
