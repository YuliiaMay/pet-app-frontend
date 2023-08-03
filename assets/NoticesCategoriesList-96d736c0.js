import{s as n,N as U,a as d,e as te,j as e,I as h,r as o,g as y,k as _,u as E,z as G,A as T,B as H,C as ne,c as ie,D as oe,E as se,F as re,f as ae,H as ce}from"./index-48756c4d.js";import{f as le,P as de,s as pe}from"./index-4f786420.js";import{M as W}from"./ModalComponents-902d5a9c.js";const xe="/pet-app-frontend/assets/defaultPoster-c04359c8.jpeg",O=t=>t||xe,he=t=>t.replace(/[.\-/\\\s]/g,"");function fe(t){if(!t)return;const i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=new Date(t),f=new Date(r.getFullYear(),s.getMonth(),s.getDate());let l;return l=r.getFullYear()-s.getFullYear(),r<f&&(l=l-1),l}const ge=t=>{if(!t)return;let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},ue=t=>{let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},me=t=>{if(!t)return;let i=t;return i.length>15&&(i=t.slice(0,21)+"..."),i},we=t=>t.notices.items,je=t=>t.notices.favorite,be=t=>t.notices.own,ye=t=>t.notices.isLoading,L=n.span`
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
`,ve=n.li`
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
`,ke=n.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,Fe=n.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,Ce=n.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,De=n.p`
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
`,$e=n.div`
  display: block;
`,R=n.button`
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
`,Ae=n.ul`
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
`,Ie=n.ul`
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
`;const Se=n.div`
  display: flex;
  flex-direction: column;
`,ze=n.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
`,Ne=n.button`
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
`;const Be=n.div`
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
`,V=n.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`,Me=n.div`
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
`,Le=n.div`
  display: flex;
  gap: 17px;
  margin-top: 48px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,Pe=n.button`
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
`,Te=n.button`
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
`,_e=n.div``,Ee=n.div`
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
`,We=n.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,Ye=n(U)`
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
`,Re=n(U)`
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
`,Y=({active:t,setShow:i})=>{const{isLoggedIn:r}=te(),s=()=>{i(!t)};return e.jsx(e.Fragment,{children:!r&&e.jsxs(W,{onClose:i,active:t,children:[e.jsx(V,{onClick:s,children:e.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Ee,{children:[e.jsx("h2",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),e.jsxs(We,{children:[e.jsxs(Ye,{to:"/login",children:["Log IN",e.jsx(h,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),e.jsx(Re,{to:"/register",children:"Registration"})]})]})]})})};Y.propTypes={active:d.bool,setShow:d.func};const Ue=n.div`
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
`,Ge=n.div`
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
`,He=n.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,Oe=n.div`
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
`,Ve=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,qe=n.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,Je=n.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,Ke=n.div`
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
`,Qe=n.div`
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
`;n.p``;const Xe=n.div`
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
`,Ze=n.button`
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
`,et=n.a`
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
`;function q({card:t,active:i,setShow:r,isFavorites:s}){const[f,l]=o.useState(!1),I=y(_),g=E(),[A,m]=o.useState(s);if(!t)return;const u=()=>{r(!1)};if(!t)return;const{imgUrl:v,name:k,birthday:F,breed:p,place:a,sex:C,email:D,phone:w,comments:j,title:x,category:$,price:N}=t,B=(b,M)=>{if(!I.token){l(!0);return}if(!M){m(!0),g(G(b)),g(T(b));return}m(!1),g(T(b)),g(H(b))},S=b=>b?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsxs(e.Fragment,{children:[e.jsx(W,{onClose:r,active:i,children:e.jsxs(Ue,{children:[e.jsx(Ge,{onClick:u,children:e.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(He,{children:[e.jsxs(Oe,{children:[e.jsx("span",{children:$}),e.jsx(Ve,{src:O(v),alt:"name image"})]}),e.jsxs(Je,{children:[e.jsx(qe,{children:x}),e.jsx(Ke,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:k})})]}),!N<=0&&e.jsxs("tr",{children:[e.jsx("td",{children:"Price:"}),e.jsx("td",{children:e.jsxs("span",{children:[N," ₿"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:le(F)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:p})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:a})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:C})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${D}`,children:D})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${w}`,children:he(w)})})]})]})})})]})]}),e.jsxs(Qe,{children:["Comments:",e.jsx("span",{children:j})]}),e.jsxs(Xe,{children:[e.jsx(Ze,{onClick:()=>B(t._id,A),children:S(s)}),e.jsx(et,{href:`tel:${w}`,children:"Contact"})]})]})}),e.jsx(e.Fragment,{children:e.jsx(Y,{active:f,setShow:l})})]})}q.propTypes={active:d.bool,isFavorites:d.bool,setShow:d.func,card:d.object};const J=({item:t,handleClickDelete:i,handleClickDeleteFavorite:r})=>{const s=y(_),[f,l]=o.useState(!1),[I,g]=o.useState(!1),[A,m]=o.useState(null),u=y(ne),v=E(),[k,F]=o.useState(!1),[p,a]=o.useState(!1);o.useEffect(()=>{s.token&&a(u.includes(t._id))},[t._id,u,s.token]);const C=(x,$)=>{if(!s.token){l(!0);return}if(!$){a(!0),v(G(x));return}a(!1),r(x)},D=x=>{if(!s.token){l(!0);return}v(T(x))};o.useState(!1);const w=x=>{i(x)};o.useEffect(()=>{if(s.token&&s._id===t.owner){F(!0);return}},[t.owner,s]);const j=x=>{console.log(x),m(x),g(!0)};return e.jsxs(ve,{children:[e.jsxs(ke,{children:[e.jsx(Fe,{src:O(t.imgUrl),alt:"pet",loading:"lazy"}),e.jsxs(Ce,{children:[e.jsx(De,{children:t.category}),e.jsxs($e,{children:[e.jsx("div",{onClick:()=>C(t._id,p),children:e.jsx(R,{"aria-label":"add to favorites",onClick:()=>{D(t._id)},children:e.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#54ADFF",fill:p?"#54ADFF":""})})}),k?e.jsx(R,{"aria-label":"add to trash",onClick:()=>w(t._id),children:e.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}):""]})]}),e.jsxs(Ae,{children:[e.jsxs(P,{children:[e.jsx(h,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsxs(L,{children:[" ",ge(t.place)]})]}),e.jsxs(P,{children:[e.jsx(h,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(L,{children:ue(fe(t.birthday)+" year")})]}),e.jsxs(P,{children:[e.jsx(h,{iconName:t.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(L,{children:t.sex})]})]})]}),e.jsxs(Se,{children:[e.jsx(ze,{children:me(t.title)}),e.jsxs(Ne,{onClick:()=>j(t),children:[e.jsx("span",{children:"Learn more"}),e.jsx(h,{iconName:"icon-pawprint",fill:"#54ADFF"})]})]}),e.jsxs(e.Fragment,{children:[e.jsx(q,{active:I,setShow:g,card:A,isFavorites:p}),e.jsx(Y,{active:f,setShow:l})]})]})};J.propTypes={item:d.object,children:d.object,handleClickDelete:d.func,handleClickDeleteFavorite:d.func,isFavorite:d.bool};const K=({active:t,setShow:i,isId:r,handleConfirmDelete:s})=>{const f=()=>{i(!t)};return e.jsx(e.Fragment,{children:e.jsxs(W,{onClose:i,active:t,children:[e.jsx(V,{onClick:f,children:e.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Me,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(Le,{children:[e.jsx(Pe,{type:"button",onClick:f,children:"Cancel"}),e.jsxs(Te,{type:"button",onClick:()=>s(r),children:["Yes",e.jsx(_e,{children:e.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};K.propTypes={active:d.bool,setShow:d.func,handleConfirmDelete:d.func,isId:d.string};const tt=()=>{const t=E(),[i,r]=o.useState(!1),[s,f]=o.useState(!1),[l,I]=o.useState(null),[g,A]=o.useState(null),[m,u]=o.useState(1),[v,k]=o.useState("sell"),[F,p]=o.useState(null),a=ie(),C=new URLSearchParams(a.search).get("search"),D=y(be),{favNotices:w}=y(je),{notices:j,length:x}=y(we),$=y(_),N=y(ye),[B,S]=o.useState(!1);o.useEffect(()=>{s&&(t(oe()),p(w),f(!1))},[t,w,s,g]),o.useEffect(()=>{t(se({page:m,category:v,search:C})),l&&p(c=>c.filter(z=>z._id!==l))},[v,m,t,l,C]),o.useEffect(()=>{i&&$._id&&(t(re({owner:$._id})),p(D),p(c=>c.filter(z=>z._id!==l)),r(!1))},[D,t,i,l,F,$._id]),o.useMemo(()=>{if(a.pathname==="/notices/sell")k("sell"),p(j);else if(a.pathname==="/notices/lost-found")k("lost/found"),p(j);else if(a.pathname==="/notices/for-free")k("in good hands"),p(j);else if(a.pathname==="/notices/own")r(!0);else if(a.pathname==="/notices/favorite"){if(f(!0),!g)return;p(c=>c.filter(z=>z._id!==g)),f(!1),A(!1)}},[g,a.pathname,j]),o.useMemo(()=>{a.pathname==="/notices/sell"||a.pathname==="/notices/lost-found"||a.pathname==="/notices/for-free"?(u(1),r(!1)):a.pathname==="/notices/own"?(r(!0),u(1)):a.pathname==="/notices/favorite"&&r(!0)},[a.pathname]),o.useEffect(()=>{u(1)},[C]);const b=c=>{pe(),u(c)},[M,Q]=o.useState(null),X=c=>{S(!0),Q(c)},Z=c=>{t(ce(c)),I(c),r(!0),S(!1)},ee=c=>{t(H(c)),A(c)};return e.jsxs(e.Fragment,{children:[N?e.jsx(ae,{}):e.jsxs(Ie,{children:[F&&F.map(c=>e.jsx(J,{item:c,handleClickDelete:X,handleClickDeleteFavorite:ee},c._id)),e.jsx(Be,{children:e.jsx(de,{onChange:b,current:m,showLessItems:!0,total:x,showTitle:!1})})]}),e.jsx(K,{active:B,setShow:S,isId:M,handleConfirmDelete:Z})]})};tt.propTypes={props:d.object};export{tt as default};
