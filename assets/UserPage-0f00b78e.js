import{a as i,s as n,P as L,u as j,j as t,L as P}from"./index-b5977883.js";import{a as y,d as k,F as M,E as C,c as A,b as u,e as D}from"./index.esm-8c66217d.js";const Z=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"}),i.createElement("path",{d:"M3 9C3 7.89543 3.89543 7 5 7H7.5C8.05228 7 8.5 6.55228 8.5 6C8.5 5.44772 8.94772 5 9.5 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9Z",stroke:"#54ADFF",strokeWidth:1.5,strokeLinejoin:"round"})),B=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M20 6L9 17L4 12",stroke:"#54ADFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),S=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M18 6L6 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M6 6L18 18",stroke:"#F43F5E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),I=n.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
  }
`;n(y)`
  color: transparent;
`;const U=n.button`
  color: ${e=>e.theme.color.main};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;

  position: absolute;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: ${e=>e.theme.sizes.mobile}) {
  }
`,W=n.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,T=n.div`
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
`,F=({isFormEnable:e})=>{const a=j(),[s,o]=i.useState(!1),[w,l]=i.useState(!1),r={avatar:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"},$={avatar:r.avatar},z=()=>{l(!0)},H=async d=>{if(o(!1),d.target.files[0].type!=="image/jpeg"){o(!0);return}l(!1);const f=new FormData;f.append("avatar",d.target.files[0]),a(uploadImg(f))},V=d=>{d("avatar",null),l(!1)};return t.jsxs(W,{children:[s&&t.jsx("p",{children:"Only img can be uploaded"}),t.jsx(I,{src:r.avatar,alt:""}),e&&t.jsx(k,{initialValues:$,onSubmit:H,children:({values:d,setFieldValue:f})=>t.jsxs(M,{encType:"multipart/form-data",children:[t.jsx(y,{type:"file",id:"avatar",name:"avatar",accept:"image/*",value:void 0,hidden:!0}),w?t.jsxs(T,{children:[t.jsx("button",{type:"submit",children:t.jsx(B,{})}),t.jsx("p",{children:"Confirm"}),d.avatar&&t.jsx("button",{type:"button",onClick:()=>V(f),children:t.jsx(S,{})})]}):t.jsxs(U,{type:"button",onClick:z,children:[t.jsx(Z,{}),"Edit photo"]})]})})]})};F.propTypes={isFormEnable:L.bool.isRequired};const q=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M3 12L15 12M3 12L7 8M3 12L7 16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),N=n(M)`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
  }
`,h=n(y)`
  margin-top: 14px;
  width: 190px;
  height: 24px;
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
    width: 458px;
    height: 48px;
    margin-top: 32px;
  }

  @media screen and (min-width: ${e=>e.theme.sizes.desk}) {

  }
`,p=n.label`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
`,b=n(C)`
  color: red;
`,c=n.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
`,O=n.button`
  height: 48px;
  width: 248px;
  padding: 6px 107px;
  margin: 21px auto 0px auto;
  margin-top: 40px;
  margin-bottom: 8px;
  background-color: ${e=>e.theme.color.blue};
  border: none;
  border-radius: ${e=>e.theme.border.radius};

  color: ${e=>e.theme.color.wight};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;

  @media screen and (min-width: ${e=>e.theme.sizes.tab}) {
    width: 458px;
    height: 48px;
    padding: 10px 20px;
    margin-top: 52px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${e=>e.theme.sizes.desk}) {
  }
`,R=n.button`
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
  margin-top: 30px;
`,Y=n(q)``,G=n.div`
  margin-top: 60px;
`,E=({isFormEnable:e})=>{const a=j(),s={name:"Anna",email:"anna00@gmail.com",birthday:"00.00.0000",phone:38e9,city:"Kiev"},o=A().shape({name:u().min(3).max(30).required(),email:u().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email").required(),birthday:u().required(),phone:D().min(3).max(30).required(),city:u().min(3).max(30).required()}),w=r=>{a(editUser(r))},l={name:s.name,email:s.email,birthday:s.birthday,phone:s.phone,city:s.city};return t.jsx(G,{children:t.jsx(k,{initialValues:l,validate:o,onSubmit:w,children:({isSubmitting:r})=>t.jsxs(N,{children:[t.jsxs(c,{children:[t.jsx(p,{htmlFor:"name",children:"Name:"}),t.jsx(h,{type:"text",name:"name",id:"name",disabled:r||!e})]}),t.jsx(C,{name:"name",component:"div"}),t.jsxs(c,{children:[t.jsx(p,{htmlFor:"email",children:"Email:"}),t.jsx(h,{type:"email",name:"email",id:"email",disabled:r||!e})]}),t.jsx(b,{name:"email",component:"div"}),t.jsxs(c,{children:[t.jsx(p,{htmlFor:"birthday",children:"Birthday:"}),t.jsx(h,{type:"text",name:"birthday",id:"birthday",disabled:r||!e})]}),t.jsx(b,{name:"birthday",component:"div"}),t.jsxs(c,{children:[t.jsx(p,{htmlFor:"phone",children:"Phone:"}),t.jsx(h,{type:"number",name:"phone",id:"phone",disabled:r||!e})]}),t.jsx(b,{name:"phone",component:"div"}),t.jsxs(c,{children:[t.jsx(p,{htmlFor:"city",children:"City:"}),t.jsx(h,{type:"text",name:"city",id:"city",disabled:r||!e})]}),t.jsx(b,{name:"city",component:"div"}),e?t.jsx(O,{type:"submit",disabled:r||!e,children:"Save"}):t.jsxs(R,{type:"button",children:[t.jsx(Y,{}),"Log Out"]})]})})})};E.propTypes={isFormEnable:L.bool};const K=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M5 15.7059L4.46967 15.1756C4.32902 15.3162 4.25 15.507 4.25 15.7059H5ZM15.7059 5L16.2362 4.46967C15.9433 4.17678 15.4684 4.17678 15.1756 4.46967L15.7059 5ZM19 8.29412L19.5303 8.82445C19.8232 8.53155 19.8232 8.05668 19.5303 7.76379L19 8.29412ZM8.29412 19V19.75C8.49303 19.75 8.6838 19.671 8.82445 19.5303L8.29412 19ZM5 19H4.25C4.25 19.4142 4.58579 19.75 5 19.75V19ZM11.5882 18.25C11.174 18.25 10.8382 18.5858 10.8382 19C10.8382 19.4142 11.174 19.75 11.5882 19.75V18.25ZM18.5882 19.75C19.0024 19.75 19.3382 19.4142 19.3382 19C19.3382 18.5858 19.0024 18.25 18.5882 18.25V19.75ZM5.53033 16.2362L16.2362 5.53033L15.1756 4.46967L4.46967 15.1756L5.53033 16.2362ZM15.1756 5.53033L18.4697 8.82445L19.5303 7.76379L16.2362 4.46967L15.1756 5.53033ZM18.4697 7.76379L7.76379 18.4697L8.82445 19.5303L19.5303 8.82445L18.4697 7.76379ZM8.29412 18.25H5V19.75H8.29412V18.25ZM5.75 19V15.7059H4.25V19H5.75ZM12.705 8.00092L15.9991 11.295L17.0597 10.2344L13.7656 6.94026L12.705 8.00092ZM11.5882 19.75H18.5882V18.25H11.5882V19.75Z",fill:"#54ADFF"})),J=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Q=n.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
`,X=n.div`
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background-color: ${e=>e.theme.background.wight};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  text-align: center;
`,m=n.div`
  display: flex;
  margin-top: 12px;
  position: relative;
`,x=n.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`,g=n.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
`,ee=n.button`
  position: absolute;
  right: 0;
`,te=e=>i.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},i.createElement("path",{d:"M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ne=()=>{const e=j(),a=[{id:1,img:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",name:"gggggggg",dateofbirth:"gggggggggg",type:"ggggggggg",comments:"gggggggggggggg"}],s=o=>{e(deletePetFromFavorite(o.target.id))};return t.jsx("div",{children:a.map(o=>t.jsx(X,{children:t.jsxs("div",{children:[t.jsx(Q,{src:o.img,alt:""}),t.jsxs("div",{children:[t.jsxs(m,{children:[t.jsx(ee,{type:"button",onClick:s,children:t.jsx(te,{})}),t.jsx(x,{children:"Name: "}),t.jsx(g,{children:o.name})]}),t.jsxs(m,{children:[t.jsx(x,{children:"Date of birth: "}),t.jsx(g,{children:o.dateofbirth})]}),t.jsxs(m,{children:[t.jsx(x,{children:"Type: "}),t.jsx(g,{children:o.type})]}),t.jsxs(m,{children:[t.jsx(x,{children:"Date of birth: "}),t.jsx(g,{children:o.dateofbirth})]}),t.jsxs(m,{children:[t.jsx(x,{children:"Comments: "}),t.jsx(g,{children:o.comments})]})]})]})},o.id))})},ie=n.div`
  min-width: ${e=>e.theme.sizes.mobile};
  margin: 44px 20px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
    min-width: ${e=>e.theme.sizes.tab};
  }

  @media (min-width: ${e=>e.theme.sizes.desk}) {
    min-width: ${e=>e.theme.sizes.desk};
  }
`,oe=n.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
`,se=n.div`
  background-color: ${e=>e.theme.background.wight};
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  position: relative;
  text-align: center;
  padding: 20px 8px 24px 8px;
  margin-top: 18px;
  margin-bottom: 40px;

  @media (min-width: ${e=>e.theme.sizes.tab}) {
    text-align: center;
    padding: 20px 8px 24px 8px;
    margin-top: 18px;
  }
`,v=n.button`
  position: absolute;
  right: 15px;
  @media (min-width: ${e=>e.theme.sizes.tab}) {
  }
`,re=n.div`
  background-color: ${e=>e.theme.background.wight};
`,ae=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:24px;
`,de=n(P)`
  display: flex;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background-color: ${e=>e.theme.color.blue};
  color: ${e=>e.theme.color.wight};
`,le=n.h2`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
`,ce=()=>{const[e,a]=i.useState(!1),s=()=>{a(!1)},o=()=>{a(!0)};return t.jsxs(ie,{children:[t.jsxs("div",{children:[t.jsx(oe,{children:"My information"}),t.jsxs(se,{children:[e?t.jsx(v,{type:"button",onClick:s,children:t.jsx(K,{})}):t.jsx(v,{type:"button",onClick:o,children:t.jsx(_,{})}),t.jsx(F,{isFormEnable:e}),t.jsx(E,{isFormEnable:e})]})]}),t.jsxs("div",{children:[t.jsxs(ae,{children:[t.jsx(le,{children:"My pets"}),t.jsxs(de,{to:"..add pet page",children:["Add Pet",t.jsx(J,{})]})]}),t.jsx(re,{children:t.jsx(ne,{})})]})]})};export{ce as default};
