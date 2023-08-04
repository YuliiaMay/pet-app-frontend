import{s as n,r as o,N as _,a as h,e as Z,j as e,I as f,g as j,k as B,u as M,z as ee,c as te,A as ne,B as ie,C as oe,f as se,D as re,E as ae}from"./index-f9c0fc01.js";import{f as ce,P as le,s as de}from"./index-1f6d292f.js";import{M as L}from"./ModalComponents-89a8ebe5.js";const pe="/pet-app-frontend/assets/defaultPoster-c04359c8.jpeg",W=t=>t||pe,xe=t=>t.replace(/[.\-/\\\s]/g,"");function he(t){if(!t)return;const i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()),r=new Date(t),l=new Date(s.getFullYear(),r.getMonth(),r.getDate());let d;return d=s.getFullYear()-r.getFullYear(),s<l&&(d=d-1),d}const fe=t=>{if(!t)return;let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},ge=t=>{let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},ue=t=>{if(!t)return;let i=t;return i.length>15&&(i=t.slice(0,21)+"..."),i},me=t=>t.notices.items,Y=t=>t.notices.favorite,we=t=>t.notices.own,je=t=>t.notices.isLoading,z=n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,N=n.li`

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
`,be=n.li`
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
`,ye=n.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,ve=n.img`
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
`,ke=n.p`
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
`,Ce=n.div`
  display: block;
`,E=n.button`
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
`,De=n.ul`
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
`,Ae=()=>{const[t,i]=o.useState(!1);return{isOpen:t,open:()=>i(!0),close:()=>i(!1),toggle:()=>i(d=>!d)}},$e=n.ul`
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
`;const Ne=n.div`
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
`,R=n.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`,Be=n.div`
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
`,Le=n.button`
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
`,Pe=n.button`
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
`,Te=n.div``,Ee=n.div`
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
`,_e=n.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,We=n(_)`
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
`,Ye=n(_)`
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
`,P=({active:t,setShow:i})=>{const{isLoggedIn:s}=Z(),r=()=>{i(!t)};return e.jsx(e.Fragment,{children:!s&&e.jsxs(L,{onClose:i,active:t,children:[e.jsx(R,{onClick:r,children:e.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Ee,{children:[e.jsx("h2",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),e.jsxs(_e,{children:[e.jsxs(We,{to:"/login",children:["Log IN",e.jsx(f,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),e.jsx(Ye,{to:"/register",children:"Registration"})]})]})]})})};P.propTypes={active:h.bool,setShow:h.func};const Re=n.div`
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
`,qe=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,He=n.h2`
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
`;n.p``;const Ve=n.div`
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
`;function U({card:t,active:i,setShow:s,isFavorites:r}){const[l,d]=o.useState(!1);if(j(B),M(),o.useState(r),!t)return;const $=()=>{s(!1)};if(!t)return;const{imgUrl:u,name:b,birthday:y,breed:m,place:k,sex:v,email:w,phone:p,comments:a,title:F,category:C,price:g}=t,c=(A,T)=>{},D=A=>A?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(f,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(f,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsxs(e.Fragment,{children:[e.jsx(L,{onClose:s,active:i,children:e.jsxs(Re,{children:[e.jsx(Ue,{onClick:$,children:e.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Oe,{children:[e.jsxs(Ge,{children:[e.jsx("span",{children:C}),e.jsx(qe,{src:W(u),alt:"name image"})]}),e.jsxs(Je,{children:[e.jsx(He,{children:F}),e.jsx(Ke,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:b})})]}),!g<=0&&e.jsxs("tr",{children:[e.jsx("td",{children:"Price:"}),e.jsx("td",{children:e.jsxs("span",{children:[g," ₿"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:ce(y)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:m})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:k})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:v})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${w}`,children:w})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${p}`,children:xe(p)})})]})]})})})]})]}),e.jsxs(Qe,{children:["Comments:",e.jsx("span",{children:a})]}),e.jsxs(Ve,{children:[e.jsx(Xe,{onClick:()=>c(t._id),children:D(r)}),e.jsx(Ze,{href:`tel:${p}`,children:"Contact"})]})]})}),e.jsx(e.Fragment,{children:e.jsx(P,{active:l,setShow:d})})]})}U.propTypes={active:h.bool,isFavorites:h.bool,setShow:h.func,card:h.object};const O=({item:t,handleClickDelete:i,handleClickDeleteFavorite:s})=>{const r=j(B),l=j(Y),[d,$]=o.useState(!1);Ae();const[u,b]=o.useState(!1),[y,m]=o.useState(null),k=M(),[v,w]=o.useState(!1),[p,a]=o.useState(!1);o.useEffect(()=>{a(!!(l!=null&&l.find(c=>c._id===t._id)))},[l,t._id]);const F=(c,D)=>{if(a(!p),console.log(c),console.log(D),!D){k(ee(c));return}s(c)};o.useState(!1);const C=c=>{i(c)};o.useEffect(()=>{if(r.token&&r._id===t.owner){w(!0);return}},[t.owner,r]);const g=c=>{console.log(c),m(c),b(!0)};return e.jsxs(be,{children:[e.jsxs(ye,{children:[e.jsx(ve,{src:W(t.imgUrl),alt:"pet",loading:"lazy"}),e.jsxs(Fe,{children:[e.jsx(ke,{children:t.category}),e.jsxs(Ce,{children:[e.jsx("div",{children:e.jsx(E,{"aria-label":"add to favorites",onClick:()=>F(t._id,p),children:p?e.jsx(f,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}):e.jsx(f,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#54ADFF"})})}),v?e.jsx(E,{"aria-label":"add to trash",onClick:()=>C(t._id),children:e.jsx(f,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}):""]})]}),e.jsxs(De,{children:[e.jsxs(N,{children:[e.jsx(f,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsxs(z,{children:[" ",fe(t.place)]})]}),e.jsxs(N,{children:[e.jsx(f,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(z,{children:ge(he(t.birthday)+" year")})]}),e.jsxs(N,{children:[e.jsx(f,{iconName:t.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(z,{children:t.sex})]})]})]}),e.jsxs(Se,{children:[e.jsx(Ie,{children:ue(t.title)}),e.jsxs(ze,{onClick:()=>g(t),children:[e.jsx("span",{children:"Learn more"}),e.jsx(f,{iconName:"icon-pawprint",fill:"#54ADFF"})]})]}),e.jsxs(e.Fragment,{children:[e.jsx(U,{active:u,setShow:b,card:y,isFavorites:p}),e.jsx(P,{active:d,setShow:$})]})]})};O.propTypes={item:h.object,children:h.object,handleClickDelete:h.func,handleClickDeleteFavorite:h.func,isFavorite:h.bool};const G=({active:t,setShow:i,isId:s,handleConfirmDelete:r})=>{const l=()=>{i(!t)};return e.jsx(e.Fragment,{children:e.jsxs(L,{onClose:i,active:t,children:[e.jsx(R,{onClick:l,children:e.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Be,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(Me,{children:[e.jsx(Le,{type:"button",onClick:l,children:"Cancel"}),e.jsxs(Pe,{type:"button",onClick:()=>r(s),children:["Yes",e.jsx(Te,{children:e.jsx(f,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};G.propTypes={active:h.bool,setShow:h.func,handleConfirmDelete:h.func,isId:h.string};const et=()=>{const t=M(),[i,s]=o.useState(!1),[r,l]=o.useState(!1),[d,$]=o.useState(null),[u,b]=o.useState(null),[y,m]=o.useState(1),[k,v]=o.useState("sell"),[w,p]=o.useState(null),a=te(),F=new URLSearchParams(a.search).get("search"),C=j(we),g=j(Y),{notices:c,length:D}=j(me),A=j(B),T=j(je),[q,S]=o.useState(!1);console.log(g),o.useEffect(()=>{r&&(console.log(u),t(ne()),p(g),l(!1))},[t,g,r,u]),o.useEffect(()=>{t(ie({page:y,category:k,search:F})),d&&p(x=>x.filter(I=>I._id!==d))},[k,y,t,d,F]),o.useEffect(()=>{i&&A._id&&(t(oe({owner:A._id})),p(C),p(x=>x.filter(I=>I._id!==d)),s(!1))},[C,t,i,d,w,A._id]),o.useEffect(()=>{if(a.pathname==="/notices/sell")v("sell"),p(c);else if(a.pathname==="/notices/lost-found")v("lost/found"),p(c);else if(a.pathname==="/notices/for-free")v("in good hands"),p(c);else if(a.pathname==="/notices/own")s(!0);else if(a.pathname==="/notices/favorite"){if(l(!0),!u)return;l(!1),b(!1)}},[u,a.pathname,c]),o.useMemo(()=>{a.pathname==="/notices/sell"||a.pathname==="/notices/lost-found"||a.pathname==="/notices/for-free"?(m(1),s(!1)):a.pathname==="/notices/own"?(s(!0),m(1)):a.pathname==="/notices/favorite"&&s(!0)},[a.pathname]),o.useEffect(()=>{m(1)},[F]);const H=x=>{de(),m(x)},[J,K]=o.useState(null),Q=x=>{S(!0),K(x)},V=x=>{t(re(x)),$(x),s(!0),S(!1)},X=x=>{t(ae(x)),console.log(g),b(x)};return e.jsxs(e.Fragment,{children:[T&&g?e.jsx(se,{}):e.jsxs($e,{children:[w&&w.map(x=>e.jsx(O,{item:x,handleClickDelete:Q,handleClickDeleteFavorite:X},x._id)),e.jsx(Ne,{children:e.jsx(le,{onChange:H,current:y,showLessItems:!0,total:D,showTitle:!1})})]}),e.jsx(G,{active:q,setShow:S,isId:J,handleConfirmDelete:V})]})};et.propTypes={props:h.object};export{et as default};
