import{s as j,P as f,a as u,j as e,L as F}from"./index-999f1daf.js";import{F as w,a as E,b as c,E as h}from"./formik.esm-026362d2.js";import{u as y}from"./useDispatch-0f9974d8.js";import{c as k,a as g,b as U}from"./index.esm-9b090085.js";const $=j.img`
  width: 182px;
  height: 182px;
`,C=({isFormDisabled:t})=>{const s=y(),[i,a]=u.useState(!1),[r,m]=u.useState(!1),x={avatar:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"},b={avatar:x.avatar},o=()=>{m(!0)},d=async l=>{if(a(!1),l.target.files[0].type!=="image/jpeg"){a(!0);return}m(!1);const p=new FormData;p.append("avatar",l.target.files[0]),s(uploadImg(p))},n=l=>{l("avatar",null),m(!1)};return e.jsxs(e.Fragment,{children:[i&&e.jsx("p",{children:"Only img can be uploaded"}),e.jsx($,{src:x.avatar,alt:""}),!t&&e.jsx(w,{initialValues:b,onSubmit:d,children:({values:l,setFieldValue:p})=>e.jsxs(E,{encType:"multipart/form-data",children:[e.jsx(c,{type:"file",id:"avatar",name:"avatar",accept:"image/*",value:void 0}),r?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"submit",children:e.jsx(Confirm,{})}),e.jsx("p",{children:"Confirm"}),l.avatar&&e.jsx("button",{type:"button",onClick:()=>n(p),children:e.jsx(Decline,{})})]}):e.jsxs("button",{type:"button",onClick:o,children:[e.jsx(EditAvatar,{}),"Edit photo"]})]})})]})};C.propTypes={isFormDisabled:f.bool.isRequired};const v=({isFormDisabled:t})=>{const[s,i]=u.useState(!1),a=y(),r={name:"Anna",email:"anna00@gmail.com",birthday:"00.00.0000",phone:38e9,city:"Kiev"},m=k().shape({name:g().min(3).max(30).required(),email:g().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email").required(),birthday:g().required(),phone:U().min(3).max(30).required(),city:g().min(3).max(30).required()}),x=n=>{a(editUser(n))},b={name:r.name,email:r.email,birthday:r.birthday,phone:r.phone,city:r.city},o=()=>{i(!0)},d=()=>{i(!1)};return e.jsx("div",{children:e.jsx(w,{initialValues:b,validate:m,onSubmit:x,children:({isSubmitting:n})=>e.jsxs(v,{children:[e.jsxs("label",{htmlFor:"name",children:["Name",e.jsx(c,{type:"text",name:"name",id:"name",disabled:n||t,onChange:o,onBlur:d})]}),e.jsx(h,{name:"name",component:"div"}),e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx(c,{type:"email",name:"email",id:"email",disabled:n||t,onChange:o,onBlur:d}),e.jsx(h,{name:"email",component:"div"}),e.jsx("label",{htmlFor:"birthday",children:"Birthday"}),e.jsx(c,{type:"date",name:"birthday",id:"birthday",disabled:n||t,onChange:o,onBlur:d}),e.jsx(h,{name:"birthday",component:"div"}),e.jsx("label",{htmlFor:"phone",children:"Phone"}),e.jsx(c,{type:"number",name:"phone",id:"phone",disabled:n||t,onChange:o,onBlur:d}),e.jsx(h,{name:"phone",component:"div"}),e.jsx("label",{htmlFor:"city",children:"City"}),e.jsx(c,{type:"text",name:"city",id:"city",disabled:n||t,onChange:o,onBlur:d}),e.jsx(h,{name:"city",component:"div"}),s?e.jsx("button",{type:"submit",disabled:n||t,children:"Save"}):e.jsxs("button",{type:"button",children:[e.jsx(LogOutSvg,{})," Log Out"]})]})})})};v.propTypes={isFormDisabled:f.bool.isRequired};const I=()=>{const t=y(),s=[{id:1,img:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",name:"gggggggg",dateofbirth:"gggggggggg",comments:"gggggggggggggg"}],i=a=>{t(deletePetFromFavorite(a.target.id))};return e.jsx("div",{children:s.map(a=>e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:i,children:e.jsx(Delete,{})}),e.jsxs("div",{children:[e.jsx("img",{src:a.img,alt:""}),e.jsxs("div",{children:[e.jsx("p",{children:a.name}),e.jsx("p",{children:a.dateofbirth}),e.jsx("p",{children:a.comments})]})]})]},a.id))})},B=j.div`

  min-width: ${t=>t.theme.sizes.desk};
  padding: 20px;

  @media (min-width: ${t=>t.theme.sizes.tab}) {
    min-width:${t=>t.theme.sizes.tab};
    max-width:${t=>t.theme.sizes.desk};
  }

  @media (min-width: ${t=>t.theme.sizes.mobile}) {
    min-width:${t=>t.theme.sizes.mobile};
    max-width:${t=>t.theme.sizes.tab};
  }
`,A=j.div`
  background-color: ${t=>t.theme.background.wight};
`,M=j.div`
  background-color: ${t=>t.theme.background.wight};
`,H=()=>{const[t,s]=u.useState(!1),i=()=>{s(!1)},a=()=>{s(!0)};return e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"My information"}),e.jsxs(A,{children:[t?e.jsx("button",{type:"button",onClick:i}):e.jsx("button",{type:"button",onClick:a}),e.jsx(C,{isFormDisabled:t}),e.jsx(v,{isFormDisabled:t})]})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"My pets"}),e.jsx(F,{to:"..add pet page",children:"Add Pet"}),e.jsx(M,{children:e.jsx(I,{})})]})]})};export{H as default};
