import{s as p,P as v,a as j,j as e,L as U}from"./index-9ab128cc.js";import{F as f,b as w,d as c,c as k,a as u,e as E,E as h}from"./index.esm-e4a7d637.js";import{u as y}from"./useDispatch-103324e1.js";const $=p.img`
  width: 182px;
  height: 182px;
`,C=({isFormDisabled:t})=>{const s=y(),[i,a]=j.useState(!1),[r,m]=j.useState(!1),x={avatar:"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"},b={avatar:x.avatar},o=()=>{m(!0)},d=async l=>{if(a(!1),l.target.files[0].type!=="image/jpeg"){a(!0);return}m(!1);const g=new FormData;g.append("avatar",l.target.files[0]),s(uploadImg(g))},n=l=>{l("avatar",null),m(!1)};return e.jsxs(e.Fragment,{children:[i&&e.jsx("p",{children:"Only img can be uploaded"}),e.jsx($,{src:x.avatar,alt:""}),!t&&e.jsx(f,{initialValues:b,onSubmit:d,children:({values:l,setFieldValue:g})=>e.jsxs(w,{encType:"multipart/form-data",children:[e.jsx(c,{type:"file",id:"avatar",name:"avatar",accept:"image/*",value:void 0}),r?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"submit",children:e.jsx(Confirm,{})}),e.jsx("p",{children:"Confirm"}),l.avatar&&e.jsx("button",{type:"button",onClick:()=>n(g),children:e.jsx(Decline,{})})]}):e.jsx("button",{type:"button",onClick:o,children:"Edit photo"})]})})]})};C.propTypes={isFormDisabled:v.bool.isRequired};const I=p(w)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,F=({isFormDisabled:t})=>{const[s,i]=j.useState(!1),a=y(),r={name:"Anna",email:"anna00@gmail.com",birthday:"00.00.0000",phone:38e9,city:"Kiev"},m=k().shape({name:u().min(3).max(30).required(),email:u().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Invalid email").required(),birthday:u().required(),phone:E().min(3).max(30).required(),city:u().min(3).max(30).required()}),x=n=>{a(editUser(n))},b={name:r.name,email:r.email,birthday:r.birthday,phone:r.phone,city:r.city},o=()=>{i(!0)},d=()=>{i(!1)};return e.jsx("div",{children:e.jsx(f,{initialValues:b,validate:m,onSubmit:x,children:({isSubmitting:n})=>e.jsxs(I,{children:[e.jsxs("label",{htmlFor:"name",children:["Name",e.jsx(c,{type:"text",name:"name",id:"name",disabled:n||t,onChange:o,onBlur:d})]}),e.jsx(h,{name:"name",component:"div"}),e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx(c,{type:"email",name:"email",id:"email",disabled:n||t,onChange:o,onBlur:d}),e.jsx(h,{name:"email",component:"div"}),e.jsx("label",{htmlFor:"birthday",children:"Birthday"}),e.jsx(c,{type:"date",name:"birthday",id:"birthday",disabled:n||t,onChange:o,onBlur:d}),e.jsx(h,{name:"birthday",component:"div"}),e.jsx("label",{htmlFor:"phone",children:"Phone"}),e.jsx(c,{type:"number",name:"phone",id:"phone",disabled:n||t,onChange:o,onBlur:d}),e.jsx(h,{name:"phone",component:"div"}),e.jsx("label",{htmlFor:"city",children:"City"}),e.jsx(c,{type:"text",name:"city",id:"city",disabled:n||t,onChange:o,onBlur:d}),e.jsx(h,{name:"city",component:"div"}),s?e.jsx("button",{type:"submit",disabled:n||t,children:"Save"}):e.jsx("button",{type:"button",children:"Log Out"})]})})})};F.propTypes={isFormDisabled:v.bool};const B=()=>{const t=y(),s=[{id:1,img:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",name:"gggggggg",dateofbirth:"gggggggggg",comments:"gggggggggggggg"}],i=a=>{t(deletePetFromFavorite(a.target.id))};return e.jsx("div",{children:s.map(a=>e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:i}),e.jsxs("div",{children:[e.jsx("img",{src:a.img,alt:""}),e.jsxs("div",{children:[e.jsx("p",{children:a.name}),e.jsx("p",{children:a.dateofbirth}),e.jsx("p",{children:a.comments})]})]})]},a.id))})},M=p.div`

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
`,P=p.div`
  background-color: ${t=>t.theme.background.wight};
`,z=p.div`
  background-color: ${t=>t.theme.background.wight};
`,D=()=>{const[t,s]=j.useState(!1),i=()=>{s(!1)},a=()=>{s(!0)};return e.jsxs(M,{children:[e.jsxs("div",{children:[e.jsx("h2",{children:"My information"}),e.jsxs(P,{children:[t?e.jsx("button",{type:"button",onClick:i}):e.jsx("button",{type:"button",onClick:a}),e.jsx(C,{isFormDisabled:t}),e.jsx(F,{isFormDisabled:t})]})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"My pets"}),e.jsx(U,{to:"..add pet page",children:"Add Pet"}),e.jsx(z,{children:e.jsx(B,{})})]})]})};export{D as default};
