import{s as n,P as p,j as e,I as l,f as k,i as T,r as o,N as E,d as V,b as X,u as Z,x as ee,y as te,e as ne,z as ie}from"./index-9ff8e6ae.js";import{f as oe,P as se,s as re}from"./index-b4a07f99.js";import{M}from"./ModalComponents-e0a26040.js";const ae="/pet-app-frontend/assets/defaultPoster-c04359c8.jpeg",W=t=>t||ae,ce=t=>t.replace(/[.\-/\\\s]/g,"");function de(t){if(!t)return;const i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()),r=new Date(t),x=new Date(s.getFullYear(),r.getMonth(),r.getDate());let d;return d=s.getFullYear()-r.getFullYear(),s<x&&(d=d-1),d}const le=t=>{let i=t;return i.length>6&&(i=t.slice(0,4)+"..."),i},pe=t=>t.notices.items,xe=t=>t.notices.own,he=t=>t.notices.isLoading,fe=n.div`
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
`,ge=n.div`
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
`,me=n.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,ue=n.div`
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
`,we=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,je=n.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,be=n.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,ye=n.div`
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
`,ke=n.div`
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
`;n.p``;const ve=n.div`
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
`,Fe=n.button`
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
`,Ce=n.a`
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
`;function Y({active:t,setShow:i,card:s}){if(!s)return;const{imgUrl:r,name:x,birthday:d,breed:g,place:f,sex:C,email:m,phone:u,text:D,favorite:$,title:z,category:A,price:v}=s,w=()=>{i(!1)},h=()=>{},a=j=>j?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(l,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsx(e.Fragment,{children:e.jsx(M,{onClose:i,active:t,children:e.jsxs(fe,{children:[e.jsx(ge,{onClick:w,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(me,{children:[e.jsxs(ue,{children:[e.jsx("span",{children:A}),e.jsx(we,{src:W(r),alt:"name image"})]}),e.jsxs(be,{children:[e.jsx(je,{children:z}),e.jsx(ye,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:x})})]}),!v<=0&&e.jsxs("tr",{children:[e.jsx("td",{children:"Price:"}),e.jsx("td",{children:e.jsxs("span",{children:[v," ₿"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:oe(d)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:g})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:f})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:C})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${m}`,children:m})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${u}`,children:ce(u)})})]})]})})})]})]}),e.jsxs(ke,{children:["Comments:",e.jsx("span",{children:D})]}),e.jsxs(ve,{children:[e.jsx(Fe,{onClick:h,children:a($)}),e.jsx(Ce,{href:`tel:${u}`,children:"Contact"})]})]})})})}Y.propTypes={active:p.bool,setShow:p.func,card:p.object};const N=n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,S=n.li`
  background: tomato;
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
`,De=n.li`
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
`,$e=n.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,ze=n.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,Ae=n.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,Ie=n.p`
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
`,Ne=n.div`
  display: block;
`,L=n.button`
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
`,Se=n.ul`
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
`,Me=n.ul`
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
`;n.li`
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
`;n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`;const Be=n.div`
  display: flex;
  flex-direction: column;
`,Pe=n.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
`,Le=n.button`
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
`;const Te=n.div`
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
`,_=({item:t,children:i,handleClickDelete:s})=>{const r=k(T),[x,d]=o.useState(!1),g=f=>{s(f)};return o.useEffect(()=>{if(r._id===t.owner){d(!0);return}},[t.owner,r]),e.jsxs(De,{children:[e.jsxs($e,{children:[e.jsx(ze,{src:W(t.imgUrl),alt:"pet",loading:"lazy"}),e.jsxs(Ae,{children:[e.jsx(Ie,{children:t.category}),e.jsxs(Ne,{children:[e.jsx(L,{"aria-label":"add to favorites",children:e.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),x?e.jsx(L,{"aria-label":"add to trash",onClick:()=>g(t._id),children:e.jsx(l,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}):""]})]}),e.jsxs(Se,{children:[e.jsxs(S,{children:[e.jsx(l,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsxs(N,{children:[" ",t.place]})]}),e.jsxs(S,{children:[e.jsx(l,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(N,{children:le(de(t.birthday)+" year")})]}),e.jsxs(S,{children:[e.jsx(l,{iconName:t.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(N,{children:t.sex})]})]})]}),e.jsxs(Be,{children:[e.jsx(Pe,{children:t.title}),i]})]})};_.propTypes={item:p.object,children:p.object,handleClickDelete:p.func};const R=n.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`,Ee=n.div`
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
`,We=n.div`
  display: flex;
  gap: 17px;
  margin-top: 48px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,Ye=n.button`
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
`,_e=n.button`
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
`,Re=n.div``,U=({active:t,setShow:i})=>{const s=()=>{i(!t)};return e.jsx(e.Fragment,{children:e.jsxs(M,{onClose:i,active:t,children:[e.jsx(R,{onClick:s,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Ee,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete"," ",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(We,{children:[e.jsx(Ye,{type:"button",onClick:s,children:"Cancel"}),e.jsxs(_e,{type:"button",children:["Yes",e.jsx(Re,{children:e.jsx(l,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};U.propTypes={active:p.bool,setShow:p.func};const Ue=n.div`
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
`,Ge=n.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,Oe=n(E)`
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
`,qe=n(E)`
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
`,G=({active:t,setShow:i})=>{const{isLoggedIn:s}=V(),r=()=>{i(!t)};return e.jsx(e.Fragment,{children:!s&&e.jsxs(M,{onClose:i,active:t,children:[e.jsx(R,{onClick:r,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Ue,{children:[e.jsx("h2",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),e.jsxs(Ge,{children:[e.jsxs(Oe,{to:"/login",children:["Log IN",e.jsx(l,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),e.jsx(qe,{to:"/register",children:"Registration"})]})]})]})})};G.propTypes={active:p.bool,setShow:p.func};const He=()=>{const[t,i]=o.useState(!1),[s,r]=o.useState(!1),[x,d]=o.useState(1),[g,f]=o.useState("sell"),[C,m]=o.useState(!1),[u,D]=o.useState(!1),[$,z]=o.useState(!1),[A,v]=o.useState(null),[w,h]=o.useState(null),a=X(),j=new URLSearchParams(a.search).get("search"),O=k(he),B=k(xe),{notices:F,length:q}=k(pe),P=k(T),b=Z(),[y,H]=o.useState(null);o.useEffect(()=>{b(ee({page:x,category:g,search:j})),y&&h(c=>c.filter(I=>I._id!==y))},[g,x,b,y,j]),o.useEffect(()=>{s&&(b(te({owner:P._id})),h(B),h(c=>c.filter(I=>I._id!==y)),r(!1))},[B,b,s,y,w,P._id]);const J=c=>{m(!0),v(c)},K=c=>{re(),d(c)};o.useMemo(()=>{a.pathname==="/notices/sell"?(f("sell"),h(F),i(!0)):a.pathname==="/notices/lost-found"?(f("lost/found"),h(F),i(!0)):a.pathname==="/notices/for-free"?(f("in good hands"),h(F)):a.pathname==="/notices/own"?r(!0):a.pathname==="/notices/favorite"&&console.log("favorite")},[a.pathname,F]),o.useMemo(()=>{a.pathname==="/notices/sell"||a.pathname==="/notices/lost-found"||a.pathname==="/notices/for-free"?(d(1),i(!0),r(!1)):a.pathname==="/notices/own"?(r(!0),d(1)):a.pathname==="/notices/favorite"&&console.log("!!!favorite!!!")},[a.pathname]),o.useEffect(()=>{d(1)},[j]);const Q=c=>{b(ie(c)),H(c),r(!0)};return e.jsxs(e.Fragment,{children:[O?e.jsx(ne,{}):e.jsxs(Me,{children:[w&&w.map(c=>e.jsx(_,{item:c,handleClickDelete:Q,children:e.jsxs(Le,{onClick:()=>J(c),children:[e.jsx("span",{children:"Learn more"}),e.jsx(l,{iconName:"icon-pawprint",fill:"#54ADFF"})]})},c._id)),e.jsx(Te,{children:e.jsx(se,{onChange:K,current:x,showLessItems:!0,total:q,showTitle:!1})})]}),e.jsx(Y,{active:C,setShow:m,card:A}),e.jsx(U,{active:$,setShow:z}),e.jsx(G,{active:u,setShow:D})]})};He.propTypes={props:p.object};export{He as default};
