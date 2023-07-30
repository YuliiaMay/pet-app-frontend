import{s as i,P as p,j as e,I as c,N as D,d as S,r as d,b as L,f as T,u as W,q as Y}from"./index-9af1dba1.js";import{f as E,P as O,s as R}from"./scrollToTop-7c0b02d1.js";import{M as C}from"./ModalComponents-036c3d67.js";const U="/pet-app-frontend/assets/defaultPoster-d1161abc.jpeg",q=t=>t||U,G=t=>t.replace(/[.\-/\\\s]/g,"");function _(t){if(!t)return;const n=new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),a=new Date(t),l=new Date(r.getFullYear(),a.getMonth(),a.getDate());let o;return o=r.getFullYear()-a.getFullYear(),r<l&&(o=o-1),o}const H=t=>t.notices.items,J=i.div`
  width: 280px;

  display: flex;
  padding: 45px 20px 16px 20px;

  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 681px;
    min-height: 540px;

    padding: 32px 32px 24px 32px;

    justify-content: space-between;
  }
`,K=i.div`
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
`,Q=i.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,V=i.div`
  max-width: 240px;
  height: 240px;

  margin: 0 auto;

  overflow: hidden;
  /* object-fit: cover; */

  border-radius: 0px 0px 40px 40px;
  span {
    position: absolute;
    margin-top: 16px;
    padding: 11px;

    font-size: 14px;
    font-weight: 500;

    border-radius: 0px 20px 20px 0px;
    background: #cce4fb;
  }
  @media screen and (min-width: 768px) {
    max-width: 262px;
    height: 298px;

    margin: 0;
  }
`,X=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Z=i.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`,ee=i.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,te=i.div`
  font-size: 16px;
  table {
    margin-bottom: 8px;
  }
  table,
  td,
  th {
    height: 25px;
    padding-right: 20px;
    font-weight: 600;
  }
  td {
    font-weight: 600;
  }
  span {
    font-weight: 200;
  }
  a {
    font-weight: 200;

    text-decoration-line: underline;

    color: #ffc107;
  }
  @media screen and (min-width: 768px) {
    th {
      height: 27px;
      padding-right: 50px;
      font-weight: 600;
    }
  }
`,ie=i.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.64px;
  margin-bottom: 10px;

  span {
    margin-left: 3px;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: auto;
  }
`;i.p``;const ne=i.div`
  display: flex;
  flex-direction: column-reverse;

  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: end;

    flex-direction: row;
    align-items: center;

    gap: 17px;
  }
`,oe=i.button`
  display: flex;

  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  font-size: 16px;

  letter-spacing: 0.64px;
  font-weight: 700;

  margin-top: 8px;
  padding: 8px 20px;

  color: #fef9f9;
  border-radius: 40px;
  background: #54adff;
  border: 2px solid #54adff;
  &:hover {
    background: #ffffff;
    border: 2px solid #54adff;

    color: #54adff;

    & use {
      stroke: #54adff;
      fill: #54adff;
    }
  }
  svg {
    margin-left: 8px;
  }

  @media screen and (min-width: 768px) {
    /* display: inline-flex; */
    /* justify-content: end; */
    /* padding: 8px 20px; */
    margin-top: 0;
  }
`,re=i.a`
  height: 25px;
  display: flex;
  padding: 8px 30px;

  justify-content: center;
  align-items: center;
  border-radius: 40px;

  font-size: 16px;

  font-weight: 700;
  letter-spacing: 0.64px;

  color: #54adff;
  border: 2px solid #54adff;

  &:hover {
    border: 2px solid #54adff;
    background-color: #54adff;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    display: inline-flex;
    justify-content: end;
  }
`;function z({active:t,setShow:n,card:r}){if(!r)return;const{imgUrl:a,name:l,birthday:o,breed:s,place:m,sex:j,email:u,phone:g,text:y,favorite:k,title:v,category:x}=r,f=()=>{n(!1)},F=()=>{},w=b=>b?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(c,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsx(e.Fragment,{children:e.jsx(C,{onClose:n,active:t,children:e.jsxs(J,{children:[e.jsx(K,{onClick:f,children:e.jsx(c,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Q,{children:[e.jsxs(V,{children:[e.jsx("span",{children:x}),e.jsx(X,{src:q(a),alt:"name image"})]}),e.jsxs(ee,{children:[e.jsx(Z,{children:v}),e.jsx(te,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:l})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:E(o)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:s})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:m})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:j})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${u}`,children:u})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${g}`,children:G(g)})})]})]})})})]})]}),e.jsxs(ie,{children:["Comments:",e.jsx("span",{children:y})]}),e.jsxs(ne,{children:[e.jsx(oe,{onClick:F,children:w(k)}),e.jsx(re,{href:`tel:${g}`,children:"Contact"})]})]})})})}z.propTypes={active:p.bool,setShow:p.func,card:p.object};i.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`;i.li`
    cursor: pointer;
    align-items: center;
    background-color: ${t=>t.theme.background.lightBlue};
    border-radius: 16px;
    color: ${t=>t.theme.color.main};
    stroke: ${t=>t.theme.color.blue};
    display: flex;
    gap: 3px;
    justify-content: center;
    width: 81px;
    height: 28px;
    padding: 0 5px;

    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);

    &:hover,
    &:focus {
        background-color: ${t=>t.theme.background.accentBlue};
        transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: ${t=>t.theme.color.wight};
         & use {
        stroke: ${t=>t.theme.color.wight};
         fill: ${t=>t.theme.color.wight};
    }  
    }
         
`;const se=i.li`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 24px;
  border-radius: 0 0 40px 40px;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: ${t=>t.theme.color.wight};

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`,ae=i.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,ce=i.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,de=i.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,pe=i.p`
  align-items: center;
  background-color: ${t=>t.theme.background.lightBlue};
  border-radius: 0 16px 16px 0;
  color: ${t=>t.theme.color.main};
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  line-height: 19px;

  width: 126px;
  height: 32px;
`,le=i.div`
  display: block;
`,xe=i.button`
  align-items: center;
  background-color: ${t=>t.theme.background.lightBlue};
  border: none;
  border-radius: 50%;
  color: transparent;
  display: flex;
  height: 40px;
  justify-content: center;
  line-height: 0;
  margin: 0;
  padding: 0;
  width: 40px;
  fill: #cce4fb;
  &:hover,
  focus {
    background-color: ${t=>t.theme.background.lightBlue};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover > svg {
    stroke: ${t=>t.theme.color.blue};
    fill: ${t=>t.theme.color.blue};
    //  box-shadow: ${t=>t.theme.color.blue} 0px 2px 8px 0px;
  }
`,he=i.ul`
  bottom: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
  left: 8px;
  list-style: none;
  position: absolute;
  right: 8px;
  padding: 0;
  @media screen and (min-width: 768px) {
    left: 24px;
    right: 24px;

    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`,ge=i.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  width: 100%;
  margin-bottom: 60px;

  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    column-gap: 32px;
    row-gap: 24px;
  }

  & > li > p {
    flex-grow: 1;
  }
`;i.li`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 24px;
  border-radius: 0 0 40px 40px;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: ${t=>t.theme.color.wight};

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;i.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`;const fe=i.div`
  display: flex;
  flex-direction: column;
`,me=i.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
`,ue=i.button`
  align-items: center;
  background-color: transparent;
  border: 2px solid ${t=>t.theme.background.accentBlue};
  border-radius: 40px;
  color: #54adff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  gap: 12px;
  height: 38px;
  justify-content: center;
  letter-spacing: 0.64px;
  margin: 0 auto;
  padding: 8px 28px 8px 28px;
  position: relative;
  width: 248px;
  &:hover,
  &:focus {
    border: transparent;
    background: linear-gradient(
      315deg,
      rgb(65, 158, 241) 0%,
      rgb(155, 208, 255) 100%
    );
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${t=>t.theme.color.wight};
    & use {
      stroke: ${t=>t.theme.color.wight};
      fill: ${t=>t.theme.color.wight};
    }
    
    @media screen and (max-width: 767px) {
      /* gap: 5px; */
    }
  }
`;i.li`
  cursor: pointer;
  align-items: center;
  background-color: ${t=>t.theme.background.lightBlue};
  border-radius: 16px;
  color: ${t=>t.theme.color.main};
  stroke: ${t=>t.theme.color.blue};
  display: flex;
  gap: 3px;
  justify-content: center;
  width: 81px;
  height: 28px;
  padding: 0 5px;

  transition: 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    background-color: ${t=>t.theme.background.accentBlue};
    transition: 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
    color: ${t=>t.theme.color.wight};
    & use {
      stroke: ${t=>t.theme.color.wight};
      fill: ${t=>t.theme.color.wight};
    }
  }
`;const we=i.div`
  display: inline-flex;
  justify-content: center;

  align-items: center;
  width: 100%;

  /* margin: 0 auto; */
  margin-top: 60px;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    /* justify-content: center; */

    /* width: 357px; */
    width: 100%;
  }
`,I=({item:t,children:n})=>{const r=o=>{let s=o;return s.length>15&&(s=o.slice(0,21)+"..."),s},a=o=>{let s=o;return s.length>6&&(s=o.slice(0,4)+"..."),s},l=o=>{let s=o;return s.length>6&&(s=o.slice(0,4)+"..."),s};return e.jsxs(se,{children:[e.jsxs(ae,{children:[e.jsx(ce,{src:t.imgUrl,alt:"pet",loading:"lazy"}),e.jsxs(de,{children:[e.jsx(pe,{children:t.category}),e.jsx(le,{children:e.jsx(xe,{"aria-label":"add to favorites",children:e.jsx(c,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})})})]}),e.jsxs(he,{children:[e.jsx(c,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF",children:a(t.place)}),e.jsx(c,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF",children:l(_(t.birthday)+" year")}),e.jsx(c,{iconName:t.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF",children:t.sex})]})]}),e.jsxs(fe,{children:[e.jsx(me,{children:r(t.title)}),n]})]})};I.propTypes={item:p.object,children:p.object};const N=i.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`,be=i.div`
  width: 608px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 700;
  }

  & p {
    text-align: center;
    font-weight: 500;
    line-height: 1.4;
    width: 393px;
  }

  & span {
    font-weight: 700;
  }

  @media screen and (max-width: 767px) {
    padding: 12px 20px 60px;
    width: 280px;
    gap: 0;
    margin-bottom: 0;
    & h2 {
      font-size: 24px;
      letter-spacing: 0.96px;
      padding: 0 40px;
      text-align: center;
      margin-bottom: 14px;
    }
    & p {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.56px;
      width: 240px;
      line-height: 1.4;
    }
  }
`,je=i.div`
  display: flex;
  gap: 17px;
  margin-top: 48px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,ye=i.button`
  padding: 8px 20px;
  border: 1px solid #54adff;
  border-radius: 40px;
  font-weight: 700;
  color: #54adff;
  width: 130px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding: 8px 0;
  }
`,ke=i.button`
  padding: 8px 20px;
  background-color: #54adff;
  border-radius: 40px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 130px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding: 8px 0;
  }
`,ve=i.div``,A=({active:t,setShow:n})=>{const r=()=>{n(!t)};return e.jsx(e.Fragment,{children:e.jsxs(C,{onClose:n,active:t,children:[e.jsx(N,{onClick:r,children:e.jsx(c,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(be,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete"," ",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(je,{children:[e.jsx(ye,{type:"button",onClick:r,children:"Cancel"}),e.jsxs(ke,{type:"button",children:["Yes",e.jsx(ve,{children:e.jsx(c,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};A.propTypes={active:p.bool,setShow:p.func};const Fe=i.div`
  padding: 12px 40px 60px;
  width: 608px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 40px;
  & h2 {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1.44px;
  }

  & p {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }

  @media screen and (max-width: 767px) {
    padding: 12px 20px 60px;
    width: 280px;
    gap: 0;
    & h2 {
      font-size: 24px;
      letter-spacing: 0.96px;
      margin-bottom: 20px;
    }
    & p {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.56px;
      margin-bottom: 40px;
    }
  }
`,Ce=i.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,$e=i(D)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fef9f9;
  background-color: #ffc107;
  font-weight: 700;
  padding: 8px 40px;
  border-radius: 40px;
  border: 1px;
  gap: 8px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding: 8px 0;
  }
`,De=i(D)`
  font-weight: 700;
  padding: 8px 40px;
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 40px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 240px;
    padding: 8px 0;
  }
`,B=({active:t,setShow:n})=>{const{isLoggedIn:r}=S(),a=()=>{n(!t)};return e.jsx(e.Fragment,{children:!r&&e.jsxs(C,{onClose:n,active:t,children:[e.jsx(N,{onClick:a,children:e.jsx(c,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Fe,{children:[e.jsx("h2",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),e.jsxs(Ce,{children:[e.jsxs($e,{to:"/login",children:["Log IN",e.jsx(c,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),e.jsx(De,{to:"/register",children:"Registration"})]})]})]})})};B.propTypes={active:p.bool,setShow:p.func};const ze=()=>{const[t,n]=d.useState(!0),[r,a]=d.useState(1),[l,o]=d.useState("sale"),[s,m]=d.useState(!1),[j,u]=d.useState(!1),[g,y]=d.useState(!1),[k,v]=d.useState(null),x=L(),f=new URLSearchParams(x.search).get("search"),F=T(H),{notices:w,length:b}=F,$=W();d.useMemo(()=>{$(Y({page:r,category:l,search:f})),n(!1)},[l,r,$,f]);const M=h=>{m(!0),v(h)},P=h=>{a(h),n(!0),R()};return d.useEffect(()=>{x.pathname==="/notices/sell"?(o("sale"),n(!0)):x.pathname==="/notices/lost-found"?(o("lost/found"),n(!0)):x.pathname==="/notices/for-free"&&(o("in good hands"),n(!0)),a(1)},[x.pathname]),d.useEffect(()=>{a(1)},[f]),e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:w&&w.map(h=>e.jsx(I,{item:h,children:e.jsxs(ue,{onClick:()=>M(h),children:[e.jsx("span",{children:"Learn more"}),e.jsx(c,{iconName:"icon-pawprint",fill:"#54ADFF"})]})},h._id))}),e.jsx(we,{children:b<=10||e.jsx(O,{onChange:P,current:r,showLessItems:!0,total:b,showTitle:!1})}),e.jsx(z,{active:s,setShow:m,card:k}),e.jsx(A,{active:g,setShow:y}),e.jsx(B,{active:j,setShow:u})]})};ze.propTypes={props:p.object};export{ze as default};
