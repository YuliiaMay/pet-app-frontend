import{s as n,N as R,a as c,e as te,j as e,I as x,r as o,g as b,k as T,u as U,z as ne,c as ie,A as W,B as oe,C as se,f as re,D as ae,E as ce}from"./index-0ed24258.js";import{f as le,P as de,s as pe}from"./index-1ccbc64e.js";import{M as _}from"./ModalComponents-41b6208c.js";const xe="/pet-app-frontend/assets/defaultPoster-c04359c8.jpeg",G=t=>t||xe,he=t=>t.replace(/[.\-/\\\s]/g,"");function fe(t){if(!t)return;const i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()),a=new Date(t),l=new Date(s.getFullYear(),a.getMonth(),a.getDate());let p;return p=s.getFullYear()-a.getFullYear(),s<l&&(p=p-1),p}const ge=t=>{if(!t)return;let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},ue=t=>{let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},me=t=>{if(!t)return;let i=t;return i.length>15&&(i=t.slice(0,21)+"..."),i},we=t=>t.notices.items,O=t=>t.notices.favorite,je=t=>t.notices.own,be=t=>t.notices.isLoading,q=n.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`,ye=n.div`
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
`,ke=n.div`
  display: flex;
  gap: 17px;
  margin-top: 48px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,ve=n.button`
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
`,Fe=n.button`
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
`,Ce=n.div``,De=n.div`
  padding: 12px 40px 60px;
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
`,Ae=n.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,$e=n(R)`
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
`,Ie=n(R)`
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
`,E=({active:t,setShow:i})=>{const{isLoggedIn:s}=te(),a=()=>{i(!t)};return e.jsx(e.Fragment,{children:!s&&e.jsxs(_,{onClose:i,active:t,children:[e.jsx(q,{onClick:a,children:e.jsx(x,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(De,{children:[e.jsx("h2",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),e.jsxs(Ae,{children:[e.jsxs($e,{to:"/login",children:["Log IN",e.jsx(x,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),e.jsx(Ie,{to:"/register",children:"Registration"})]})]})]})})};E.propTypes={active:c.bool,setShow:c.func};const ze=n.div`
  width: 280px;

  display: flex;
  padding: 45px 20px 16px 20px;

  flex-direction: column;

  @media screen and (min-width: 768px) {
    min-width: 681px;
    min-height: 540px;

    padding: 32px 32px 24px 32px;

    justify-content: space-between;
  }
`,Se=n.div`
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
`,Ne=n.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,Be=n.div`
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
`,Me=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Le=n.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,Pe=n.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,Te=n.div`
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
`,_e=n.div`
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
`;n.p``;const Ee=n.div`
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
`,We=n.button`
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
`,Ye=n.a`
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
`;function H({card:t,active:i,setShow:s,isFavorites:a,handleFollowAdd:l,handleFollowDel:p}){const[D,y]=o.useState(!1),A=b(T),[u,m]=o.useState(a);if(!t)return;const k=()=>{s(!1)};if(!t)return;const{imgUrl:v,name:F,birthday:h,breed:r,place:w,sex:C,email:j,phone:g,comments:f,title:I,category:B,price:N}=t,z=$=>{if(!A.token){y(!0);return}u?p($):l($),m(!u)},M=$=>$?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(x,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(x,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsxs(e.Fragment,{children:[e.jsx(_,{onClose:s,active:i,children:e.jsxs(ze,{children:[e.jsx(Se,{onClick:k,children:e.jsx(x,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Ne,{children:[e.jsxs(Be,{children:[e.jsx("span",{children:B}),e.jsx(Me,{src:G(v),alt:"name image"})]}),e.jsxs(Pe,{children:[e.jsx(Le,{children:I}),e.jsx(Te,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:F})})]}),!N<=0&&e.jsxs("tr",{children:[e.jsx("td",{children:"Price:"}),e.jsx("td",{children:e.jsxs("span",{children:[N," ₿"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:le(h)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:r})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:w})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:C})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${j}`,children:j})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${g}`,children:he(g)})})]})]})})})]})]}),e.jsxs(_e,{children:["Comments:",e.jsx("span",{children:f})]}),e.jsxs(Ee,{children:[e.jsx(We,{onClick:()=>z(t._id),children:M(u)}),e.jsx(Ye,{href:`tel:${g}`,children:"Contact"})]})]})}),e.jsx(e.Fragment,{children:e.jsx(E,{active:D,setShow:y})})]})}H.propTypes={active:c.bool,isFavorites:c.bool,setShow:c.func,card:c.object,handleFollowAdd:c.func,handleFollowDel:c.func};const L=n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,P=n.li`

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
`,Re=n.li`
  /* margin: 0 auto; */
  align-items: center;
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
`,Ue=n.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,Ge=n.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,Oe=n.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,qe=n.p`
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
`,He=n.div`
  display: block;
`,Y=n.button`
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
  margin-bottom: 15px;
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
`,Je=n.ul`
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
`,Ke=n.ul`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 60px;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 32px;
    row-gap: 24px;
  }

  & > li > p {
    flex-grow: 1;
  }
`;n.li`
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
`;n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`;const Qe=n.div`
  display: flex;
  flex-direction: column;
`,Ve=n.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
`,Xe=n.button`
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
`;n.li`
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
`;const Ze=n.div`
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
`,J=({item:t,handleClickDelete:i,handleClickDeleteFavorite:s})=>{const a=b(T),l=b(O),[p,D]=o.useState(!1),[y,A]=o.useState(!1),[u,m]=o.useState(null),k=U(),[v,F]=o.useState(!1),[h,r]=o.useState(!1);o.useEffect(()=>{r(!!(l!=null&&l.find(f=>f._id===t._id)))},[t._id]);const w=o.useCallback(f=>{if(!a.token){D(!0);return}r(!0),k(ne(f))},[k,a.token]),C=o.useCallback(f=>{r(!1),s(f)},[s]),j=f=>{i(f)};o.useEffect(()=>{if(a.token&&a._id===t.owner){F(!0);return}},[t.owner,a]);const g=f=>{m(f),A(!0)};return e.jsxs(Re,{children:[e.jsxs(Ue,{children:[e.jsx(Ge,{src:G(t.imgUrl),alt:"pet",loading:"lazy"}),e.jsxs(Oe,{children:[e.jsx(qe,{children:t.category}),e.jsxs(He,{children:[e.jsx(Y,{"aria-label":"add to favorites",children:h?e.jsx("div",{onClick:()=>C(t._id),children:e.jsx(x,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}):e.jsx("div",{onClick:()=>w(t._id),children:e.jsx(x,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#54ADFF"})})}),v?e.jsx(Y,{"aria-label":"add to trash",onClick:()=>j(t._id),children:e.jsx(x,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}):""]})]}),e.jsxs(Je,{children:[e.jsxs(P,{children:[e.jsx(x,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsxs(L,{children:[" ",ge(t.place)]})]}),e.jsxs(P,{children:[e.jsx(x,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(L,{children:ue(fe(t.birthday)+" year")})]}),e.jsxs(P,{children:[e.jsx(x,{iconName:t.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(L,{children:t.sex})]})]})]}),e.jsxs(Qe,{children:[e.jsx(Ve,{children:me(t.title)}),e.jsxs(Xe,{onClick:()=>g(t),children:[e.jsx("span",{children:"Learn more"}),e.jsx(x,{iconName:"icon-pawprint",fill:"#54ADFF"})]})]}),e.jsxs(e.Fragment,{children:[e.jsx(H,{active:y,setShow:A,card:u,isFavorites:h,handleFollowAdd:w,handleFollowDel:C}),e.jsx(E,{active:p,setShow:D})]})]})};J.propTypes={item:c.object,children:c.object,handleClickDelete:c.func,handleClickDeleteFavorite:c.func,isFavorite:c.bool};const K=({active:t,setShow:i,isId:s,handleConfirmDelete:a})=>{const l=()=>{i(!t)};return e.jsx(e.Fragment,{children:e.jsxs(_,{onClose:i,active:t,children:[e.jsx(q,{onClick:l,children:e.jsx(x,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(ye,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(ke,{children:[e.jsx(ve,{type:"button",onClick:l,children:"Cancel"}),e.jsxs(Fe,{type:"button",onClick:()=>a(s),children:["Yes",e.jsx(Ce,{children:e.jsx(x,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};K.propTypes={active:c.bool,setShow:c.func,handleConfirmDelete:c.func,isId:c.string};const et=()=>{const t=U(),[i,s]=o.useState(!1),[a,l]=o.useState(!1),[p,D]=o.useState(null),[y,A]=o.useState(null),[u,m]=o.useState(1),[k,v]=o.useState("sell"),[F,h]=o.useState(null),r=ie(),w=new URLSearchParams(r.search).get("search"),C=b(je),j=b(O),{notices:g,length:f}=b(we),I=b(T),B=b(be),[N,z]=o.useState(!1);o.useEffect(()=>{t(W())},[]),o.useEffect(()=>{a&&(t(W()),h(j),h(d=>d.filter(S=>S._id!==p)),l(!1))},[t,j,a]),o.useEffect(()=>{t(oe({page:u,category:k,search:w})),p&&h(d=>d.filter(S=>S._id!==p))},[k,u,t,p,w]),o.useEffect(()=>{i&&I._id&&(t(se({owner:I._id})),h(C),s(!1))},[C,t,i,p,F,I._id]),o.useEffect(()=>{if(r.pathname==="/notices/sell")v("sell"),h(g);else if(r.pathname==="/notices/lost-found")v("lost/found"),h(g);else if(r.pathname==="/notices/for-free")v("in good hands"),h(g);else if(r.pathname==="/notices/own")s(!0);else if(r.pathname==="/notices/favorite"){if(l(!0),!y)return;l(!1),A(!1)}},[y,r.pathname,g]),o.useMemo(()=>{r.pathname==="/notices/sell"||r.pathname==="/notices/lost-found"||r.pathname==="/notices/for-free"?(m(1),s(!1)):r.pathname==="/notices/own"?(s(!0),m(1)):r.pathname==="/notices/favorite"&&s(!0)},[r.pathname]),o.useEffect(()=>{m(1)},[w]);const M=d=>{pe(),m(d)},[$,Q]=o.useState(null),V=d=>{z(!0),Q(d)},X=d=>{t(ae(d)),D(d),s(!0),z(!1)},Z=d=>{l(!0),t(ce(d)),r.pathname==="/notices/favorite"&&h(S=>S.filter(ee=>ee._id!==d)),l(!1)};return e.jsxs(e.Fragment,{children:[B&&j?e.jsx(re,{}):e.jsxs(Ke,{children:[F&&F.map(d=>e.jsx(J,{item:d,handleClickDelete:V,handleClickDeleteFavorite:Z},d._id)),e.jsx(Ze,{children:e.jsx(de,{onChange:M,current:u,showLessItems:!0,total:f,showTitle:!1})})]}),e.jsx(K,{active:N,setShow:z,isId:$,handleConfirmDelete:X})]})};et.propTypes={props:c.object};export{et as default};
