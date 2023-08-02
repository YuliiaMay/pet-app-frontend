import{s as n,N as U,P as p,d as te,j as e,I as h,r as o,f as y,i as _,u as E,y as O,z as T,A as G,B as ne,b as ie,C as oe,D as se,E as re,e as ae}from"./index-5672dca9.js";import{f as ce,P as le,s as de}from"./index-8d0394c8.js";import{M as W}from"./ModalComponents-04b21268.js";const pe="/pet-app-frontend/assets/defaultPoster-c04359c8.jpeg",V=t=>t||pe,xe=t=>t.replace(/[.\-/\\\s]/g,"");function he(t){if(!t)return;const i=new Date,c=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=new Date(t),f=new Date(c.getFullYear(),s.getMonth(),s.getDate());let r;return r=c.getFullYear()-s.getFullYear(),c<f&&(r=r-1),r}const fe=t=>{if(!t)return;let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},ge=t=>{let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},ue=t=>{if(!t)return;let i=t;return i.length>15&&(i=t.slice(0,21)+"..."),i},me=t=>t.notices.items,we=t=>t.notices.favorite,je=t=>t.notices.own,be=t=>t.notices.isLoading,P=n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,L=n.li`

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
`,ye=n.li`
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
`,ve=n.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,ke=n.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,Fe=n.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,Ce=n.p`
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
`,De=n.div`
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
`,$e=n.ul`
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
`,Se=n.ul`
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
    justify-content: flex-start;
    padding-left: 10px;
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
`;const Ae=n.div`
  display: flex;
  flex-direction: column;
`,Ie=n.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
`,ze=n.button`
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
`,q=n.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`,Ne=n.div`
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
`,Me=n.div`
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
`,Le=n.button`
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
`,Te=n.div``,_e=n.div`
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
`,Ee=n.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,We=n(U)`
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
`,Ye=n(U)`
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
`,Y=({active:t,setShow:i})=>{const{isLoggedIn:c}=te(),s=()=>{i(!t)};return e.jsx(e.Fragment,{children:!c&&e.jsxs(W,{onClose:i,active:t,children:[e.jsx(q,{onClick:s,children:e.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(_e,{children:[e.jsx("h2",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),e.jsxs(Ee,{children:[e.jsxs(We,{to:"/login",children:["Log IN",e.jsx(h,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),e.jsx(Ye,{to:"/register",children:"Registration"})]})]})]})})};Y.propTypes={active:p.bool,setShow:p.func};const Re=n.div`
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
`,Ue=n.div`
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
`,Oe=n.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,Ge=n.div`
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
`,He=n.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,Je=n.div`
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
`,Ke=n.div`
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
`;n.p``;const Qe=n.div`
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
`,Xe=n.button`
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
`,Ze=n.a`
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
`;function H({card:t,active:i,setShow:c,isFavorites:s}){const[f,r]=o.useState(!1),I=y(_),g=E(),[S,m]=o.useState(s);if(!t)return;const u=()=>{c(!1)};if(!t)return;const{imgUrl:v,name:k,birthday:F,breed:d,place:a,sex:C,email:D,phone:w,comments:j,title:x,category:$,price:z}=t,N=(b,M)=>{if(!I.token){r(!0);return}if(!M){m(!0),g(O(b)),g(T(b));return}m(!1),g(T(b)),g(G(b))},B=b=>b?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(h,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsxs(e.Fragment,{children:[e.jsx(W,{onClose:c,active:i,children:e.jsxs(Re,{children:[e.jsx(Ue,{onClick:u,children:e.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Oe,{children:[e.jsxs(Ge,{children:[e.jsx("span",{children:$}),e.jsx(Ve,{src:V(v),alt:"name image"})]}),e.jsxs(He,{children:[e.jsx(qe,{children:x}),e.jsx(Je,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:k})})]}),!z<=0&&e.jsxs("tr",{children:[e.jsx("td",{children:"Price:"}),e.jsx("td",{children:e.jsxs("span",{children:[z," ₿"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:ce(F)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:d})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:a})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:C})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${D}`,children:D})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${w}`,children:xe(w)})})]})]})})})]})]}),e.jsxs(Ke,{children:["Comments:",e.jsx("span",{children:j})]}),e.jsxs(Qe,{children:[e.jsx(Xe,{onClick:()=>N(t._id,S),children:B(s)}),e.jsx(Ze,{href:`tel:${w}`,children:"Contact"})]})]})}),e.jsx(e.Fragment,{children:e.jsx(Y,{active:f,setShow:r})})]})}H.propTypes={active:p.bool,isFavorites:p.bool,setShow:p.func,card:p.object};const J=({item:t,handleClickDelete:i,handleClickDeleteFavorite:c})=>{const s=y(_),[f,r]=o.useState(!1),[I,g]=o.useState(!1),[S,m]=o.useState(null),u=y(ne),v=E(),[k,F]=o.useState(!1),[d,a]=o.useState(!1);o.useEffect(()=>{s.token&&a(u.includes(t._id))},[t._id,u,s.token]);const C=(x,$)=>{if(!s.token){r(!0);return}if(!$){a(!0),v(O(x));return}a(!1),c(x)},D=x=>{if(!s.token){r(!0);return}v(T(x))};o.useState(!1);const w=x=>{i(x)};o.useEffect(()=>{if(s.token&&s._id===t.owner){F(!0);return}},[t.owner,s]);const j=x=>{console.log(x),m(x),g(!0)};return e.jsxs(ye,{children:[e.jsxs(ve,{children:[e.jsx(ke,{src:V(t.imgUrl),alt:"pet",loading:"lazy"}),e.jsxs(Fe,{children:[e.jsx(Ce,{children:t.category}),e.jsxs(De,{children:[e.jsx("div",{onClick:()=>C(t._id,d),children:e.jsx(R,{"aria-label":"add to favorites",onClick:()=>{D(t._id)},children:e.jsx(h,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#54ADFF",fill:d?"#54ADFF":""})})}),k?e.jsx(R,{"aria-label":"add to trash",onClick:()=>w(t._id),children:e.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}):""]})]}),e.jsxs($e,{children:[e.jsxs(L,{children:[e.jsx(h,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsxs(P,{children:[" ",fe(t.place)]})]}),e.jsxs(L,{children:[e.jsx(h,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(P,{children:ge(he(t.birthday)+" year")})]}),e.jsxs(L,{children:[e.jsx(h,{iconName:t.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(P,{children:t.sex})]})]})]}),e.jsxs(Ae,{children:[e.jsx(Ie,{children:ue(t.title)}),e.jsxs(ze,{onClick:()=>j(t),children:[e.jsx("span",{children:"Learn more"}),e.jsx(h,{iconName:"icon-pawprint",fill:"#54ADFF"})]})]}),e.jsxs(e.Fragment,{children:[e.jsx(H,{active:I,setShow:g,card:S,isFavorites:d}),e.jsx(Y,{active:f,setShow:r})]})]})};J.propTypes={item:p.object,children:p.object,handleClickDelete:p.func,handleClickDeleteFavorite:p.func,isFavorite:p.bool};const K=({active:t,setShow:i,setModal:c,isId:s,handleConfirmDelete:f})=>{const r=()=>{i(!t)};return e.jsx(e.Fragment,{children:e.jsxs(W,{onClose:i,active:t,children:[e.jsx(q,{onClick:r,children:e.jsx(h,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Ne,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(Me,{children:[e.jsx(Pe,{type:"button",onClick:r,children:"Cancel"}),e.jsxs(Le,{type:"button",onClick:()=>f(s),children:["Yes",e.jsx(Te,{children:e.jsx(h,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};K.propTypes={active:p.bool,setShow:p.func};const et=()=>{const[t,i]=o.useState(!1);return{isOpen:t,open:()=>i(!0),close:()=>i(!1),toggle:()=>i(r=>!r)}},tt=()=>{const t=E(),[i,c]=o.useState(!1),[s,f]=o.useState(!1),[r,I]=o.useState(null),[g,S]=o.useState(null),[m,u]=o.useState(1),[v,k]=o.useState("sell"),[F,d]=o.useState(null),a=ie(),C=new URLSearchParams(a.search).get("search"),D=y(je),{favNotices:w}=y(we),{notices:j,length:x}=y(me),$=y(_),z=y(be),[N,B]=o.useState(!1);o.useState(!1),o.useEffect(()=>{s&&(t(oe()),d(w),f(!1))},[t,w,s,g]),o.useEffect(()=>{t(se({page:m,category:v,search:C})),r&&d(l=>l.filter(A=>A._id!==r))},[v,m,t,r,C]),o.useEffect(()=>{i&&$._id&&(t(re({owner:$._id})),d(D),d(l=>l.filter(A=>A._id!==r)),c(!1))},[D,t,i,r,F,$._id]),o.useMemo(()=>{if(a.pathname==="/notices/sell")k("sell"),d(j);else if(a.pathname==="/notices/lost-found")k("lost/found"),d(j);else if(a.pathname==="/notices/for-free")k("in good hands"),d(j);else if(a.pathname==="/notices/own")c(!0);else if(a.pathname==="/notices/favorite"){if(f(!0),!g)return;d(l=>l.filter(A=>A._id!==g)),f(!1),S(!1)}},[g,a.pathname,j]),o.useMemo(()=>{a.pathname==="/notices/sell"||a.pathname==="/notices/lost-found"||a.pathname==="/notices/for-free"?(u(1),c(!1)):a.pathname==="/notices/own"?(c(!0),u(1)):a.pathname==="/notices/favorite"&&c(!0)},[a.pathname]),o.useEffect(()=>{u(1)},[C]);const b=l=>{de(),u(l)};o.useState(!1);const{isOpen:M,toggle:Q,open:nt,close:it}=et(),X=l=>{B(!0)},Z=l=>{},ee=l=>{t(G(l)),S(l)};return e.jsxs(e.Fragment,{children:[z?e.jsx(ae,{}):e.jsxs(Se,{children:[F&&F.map(l=>e.jsx(J,{item:l,handleClickDelete:X,handleClickDeleteFavorite:ee},l._id)),e.jsx(Be,{children:e.jsx(le,{onChange:b,current:m,showLessItems:!0,total:x,showTitle:!1})})]}),e.jsx(K,{active:N,setShow:B,setModal:Q,isId:M,handleConfirmDelete:Z})]})};tt.propTypes={props:p.object};export{tt as default};
