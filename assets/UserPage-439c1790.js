import{a as n,s as i,P as v,u as j,j as t,L as P}from"./index-82b2997e.js";import{F as L,a as k,d as M,E as C,c as A,b as w,e as D}from"./index.esm-ffac0d32.js";const I=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"}),n.createElement("path",{d:"M3 9C3 7.89543 3.89543 7 5 7H7.5C8.05228 7 8.5 6.55228 8.5 6C8.5 5.44772 8.94772 5 9.5 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"})),Z=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M20 6L9 17L4 12",stroke:"#54ADFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),B=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M18 6L6 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M6 6L18 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),S=i.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
  }
`,U=i(L)`
  position: relative;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,W=i(k)`
  position: absolute;
  transform: translate(32%, 0%);
  color: transparent;
  background-color: transparent;
  opacity: 0;
  z-index: 2;
`,T=i.button`
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
`,q=i.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 49px 46px 49px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
    margin: 18px 34px 46px 71px;
  }
`,N=i.div`
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
`,F=({isFormEnable:e})=>{const a=j(),[s,o]=n.useState(!1),[u,l]=n.useState(!1),r={avatar:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"},z={avatar:r.avatar},E=()=>{l(!0)},H=async d=>{if(o(!1),d.target.files[0].type!=="image/jpeg"){o(!0);return}l(!1);const f=new FormData;f.append("avatar",d.target.files[0]),a(uploadImg(f))},V=d=>{d("avatar",null),l(!1)};return t.jsxs(q,{children:[s&&t.jsx("p",{children:"Only img can be uploaded"}),t.jsx(S,{src:r.avatar,alt:""}),e&&t.jsx(M,{initialValues:z,onSubmit:H,children:({values:d,setFieldValue:f})=>t.jsxs(U,{encType:"multipart/form-data",children:[t.jsx(W,{type:"file",id:"avatar",name:"avatar",accept:"image/*",value:"",onChange:E}),u?t.jsxs(N,{children:[t.jsx("button",{type:"submit",children:t.jsx(Z,{})}),t.jsx("p",{children:"Confirm"}),d.avatar&&t.jsx("button",{type:"button",onClick:()=>V(f),children:t.jsx(B,{})})]}):t.jsxs(T,{type:"button",children:[t.jsx(I,{}),"Edit photo"]})]})})]})};F.propTypes={isFormEnable:v.bool.isRequired};const O=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M3 12L15 12M3 12L7 8M3 12L7 16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),R=i(L)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 16px;

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    align-items: center;
    margin-bottom: 24px;
  }
`,p=i(k)`
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
`,b=i(C)`
  color: red;
`,h=i.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`,Y=i.button`
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
`,G=i.button`
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
`,K=i(O)``,_=i.div`
  // margin-top: 60px;
  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    margin: 0;
  }
`,$=({isFormEnable:e})=>{const a=j(),s={name:"Anna",email:"anna00@gmail.com",birthday:"00.00.0000",phone:38e9,city:"Kiev"},o=A().shape({name:w().min(3).max(30).required(),email:w().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email").required(),birthday:w().required(),phone:D().min(3).max(30).required(),city:w().min(3).max(30).required()}),u=r=>{a(editUser(r))},l={name:s.name,email:s.email,birthday:s.birthday,phone:s.phone,city:s.city};return t.jsx(_,{children:t.jsx(M,{initialValues:l,validate:o,onSubmit:u,children:({isSubmitting:r})=>t.jsxs(R,{children:[t.jsxs(h,{children:[t.jsx(m,{htmlFor:"name",children:"Name:"}),t.jsx(p,{type:"text",name:"name",id:"name",disabled:r||!e})]}),t.jsx(C,{name:"name",component:"div"}),t.jsxs(h,{children:[t.jsx(m,{htmlFor:"email",children:"Email:"}),t.jsx(p,{type:"email",name:"email",id:"email",disabled:r||!e})]}),t.jsx(b,{name:"email",component:"div"}),t.jsxs(h,{children:[t.jsx(m,{htmlFor:"birthday",children:"Birthday:"}),t.jsx(p,{type:"text",name:"birthday",id:"birthday",disabled:r||!e})]}),t.jsx(b,{name:"birthday",component:"div"}),t.jsxs(h,{children:[t.jsx(m,{htmlFor:"phone",children:"Phone:"}),t.jsx(p,{type:"number",name:"phone",id:"phone",disabled:r||!e})]}),t.jsx(b,{name:"phone",component:"div"}),t.jsxs(h,{children:[t.jsx(m,{htmlFor:"city",children:"City:"}),t.jsx(p,{type:"text",name:"city",id:"city",disabled:r||!e})]}),t.jsx(b,{name:"city",component:"div"}),e?t.jsx(Y,{type:"submit",disabled:r||!e,children:"Save"}):t.jsxs(G,{type:"button",children:[t.jsx(K,{}),"Log Out"]})]})})})};$.propTypes={isFormEnable:v.bool};const J=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Q=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M5 15.7059L4.46967 15.1756C4.32902 15.3162 4.25 15.507 4.25 15.7059H5ZM15.7059 5L16.2362 4.46967C15.9433 4.17678 15.4684 4.17678 15.1756 4.46967L15.7059 5ZM19 8.29412L19.5303 8.82445C19.8232 8.53155 19.8232 8.05668 19.5303 7.76379L19 8.29412ZM8.29412 19V19.75C8.49303 19.75 8.6838 19.671 8.82445 19.5303L8.29412 19ZM5 19H4.25C4.25 19.4142 4.58579 19.75 5 19.75V19ZM11.5882 18.25C11.174 18.25 10.8382 18.5858 10.8382 19C10.8382 19.4142 11.174 19.75 11.5882 19.75V18.25ZM18.5882 19.75C19.0024 19.75 19.3382 19.4142 19.3382 19C19.3382 18.5858 19.0024 18.25 18.5882 18.25V19.75ZM5.53033 16.2362L16.2362 5.53033L15.1756 4.46967L4.46967 15.1756L5.53033 16.2362ZM15.1756 5.53033L18.4697 8.82445L19.5303 7.76379L16.2362 4.46967L15.1756 5.53033ZM18.4697 7.76379L7.76379 18.4697L8.82445 19.5303L19.5303 8.82445L18.4697 7.76379ZM8.29412 18.25H5V19.75H8.29412V18.25ZM5.75 19V15.7059H4.25V19H5.75ZM12.705 8.00092L15.9991 11.295L17.0597 10.2344L13.7656 6.94026L12.705 8.00092ZM11.5882 19.75H18.5882V18.25H11.5882V19.75Z",fill:"#54ADFF"})),X=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ee=i.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
`,te=i.div`
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
`,x=i.div`
  display: flex;
  margin-top: 12px;
  position: relative;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    position: static;
  }
`,c=i.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`,g=i.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
`,ie=i.button`
  position: absolute;
  right: 0;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    right: 20px;
    top: 20px;
  }
`,ne=i.div`
  display: flex;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    display: flex;
    flex-direction:column;
    gap: 24px;
  }
`,oe=e=>n.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),se=()=>{const e=j(),a=[{id:1,img:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",name:"gggggggg",dateofbirth:"gggggggggg",type:"ggggggggg",comments:"gggggggggggggg"}],s=o=>{e(deletePetFromFavorite(o.target.id))};return t.jsx(ne,{children:a.map(o=>t.jsxs(te,{children:[t.jsx(ee,{src:o.img,alt:""}),t.jsxs("div",{children:[t.jsxs(x,{children:[t.jsx(ie,{type:"button",onClick:s,children:t.jsx(oe,{})}),t.jsx(c,{children:"Name: "}),t.jsx(g,{children:o.name})]}),t.jsxs(x,{children:[t.jsx(c,{children:"Date of birth: "}),t.jsx(g,{children:o.dateofbirth})]}),t.jsxs(x,{children:[t.jsx(c,{children:"Type: "}),t.jsx(g,{children:o.type})]}),t.jsxs(x,{children:[t.jsx(c,{children:"Date of birth: "}),t.jsx(g,{children:o.dateofbirth})]}),t.jsxs(x,{children:[t.jsx(c,{children:"Comments: "}),t.jsx(g,{children:o.comments})]})]})]},o.id))})},re=i.div`
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
`,ae=i.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 28px;
  }
`,de=i.div`
  @media (min-width: ${e=>e.theme.sizes.desk}) {
    margin-bottom:24px;
  }
`,le=i.div`
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
`,y=i.button`
  position: absolute;
  right: 15px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    right: 18px;
    top: 18px;
  }
`,pe=i.div`
  background-color: ${e=>e.theme.background.wight};
`,me=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:24px;
`,he=i(P)`
  display: flex;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background-color: ${e=>e.theme.color.blue};
  color: ${e=>e.theme.color.wight};
`,xe=i.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
    font-size: 28px;
  }
`,fe=()=>{const[e,a]=n.useState(!1),s=()=>{a(!1)},o=()=>{a(!0)};return t.jsxs(re,{children:[t.jsxs("div",{children:[t.jsx(de,{children:t.jsx(ae,{children:"My information"})}),t.jsxs(le,{children:[e?t.jsx(y,{type:"button",onClick:s,children:t.jsx(J,{})}):t.jsx(y,{type:"button",onClick:o,children:t.jsx(Q,{})}),t.jsx(F,{isFormEnable:e}),t.jsx($,{isFormEnable:e})]})]}),t.jsxs("div",{children:[t.jsxs(me,{children:[t.jsx(xe,{children:"My pets"}),t.jsxs(he,{to:"/add-pet",children:["Add Pet",t.jsx(X,{})]})]}),t.jsx(pe,{children:t.jsx(se,{})})]})]})};export{fe as default};
