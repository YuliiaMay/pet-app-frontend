import{s as n,a as d,r as i,e as b,f as E,j as e,I as f,u as Y,A as Z,c as ee,B as L,C as te,D as ne,i as ie,E as oe,F as se}from"./index-49ee36c7.js";import{f as re,P as ae,s as le}from"./index-a9e8edcb.js";import{M as W,C as ce,W as de,B as pe,a as he,Y as xe,D as fe}from"./ModalAttention-b2b2b7cf.js";import{M as U}from"./ModalComponents-db1c86ea.js";const ge="/pet-app-frontend/assets/defaultPoster-c04359c8.jpeg",R=t=>t||ge,ue=t=>t.replace(/[.\-/\\\s]/g,"");function me(t){if(!t)return;const o=new Date,r=new Date(o.getFullYear(),o.getMonth(),o.getDate()),a=new Date(t),l=new Date(r.getFullYear(),a.getMonth(),a.getDate());let p;return p=r.getFullYear()-a.getFullYear(),r<l&&(p=p-1),p}const je=t=>{if(!t)return;let o=t;return o.length>6&&(o=t.slice(0,4)+"..."),o},we=t=>{let o=t;return o.length>6&&(o=t.slice(0,4)+"..."),o},be=t=>{if(!t)return;let o=t;return o.length>15&&(o=t.slice(0,21)+"..."),o},Fe=t=>t.notices.items,G=t=>t.notices.favorite,ke=t=>t.notices.own,ve=t=>t.notices.isLoading,ye=n.div`
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
`,Ce=n.div`
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
`,De=n.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,$e=n.div`
  max-width: 240px;
  height: 240px;
  margin: 0 auto;
  overflow: hidden;

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
`,Ae=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Se=n.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,Be=n.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,Ie=n.div`
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
`,Ne=n.div`
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
`;n.p``;const ze=n.div`
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
`,Me=n.button`
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
`,Pe=n.a`
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
`;function O({card:t,active:o,setShow:r,isFavorites:a,handleFollowAdd:l,handleFollowDel:p}){const[D,F]=i.useState(!1),$=b(E),[u,m]=i.useState(a);if(!t)return;const k=()=>{r(!1)};if(!t)return;const{imgUrl:v,name:y,birthday:h,breed:s,place:j,sex:C,email:w,phone:g,comments:x,title:S,category:z,price:N}=t,B=A=>{if(!$.token){F(!0);return}u?p(A):l(A),m(!u)},M=A=>A?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(f,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(f,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsxs(e.Fragment,{children:[e.jsx(U,{onClose:r,active:o,children:e.jsxs(ye,{children:[e.jsx(Ce,{onClick:k,children:e.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(De,{children:[e.jsxs($e,{children:[e.jsx("span",{children:z}),e.jsx(Ae,{src:R(v),alt:"name image"})]}),e.jsxs(Be,{children:[e.jsx(Se,{children:S}),e.jsx(Ie,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:y})})]}),!N<=0&&e.jsxs("tr",{children:[e.jsx("td",{children:"Price:"}),e.jsx("td",{children:e.jsxs("span",{children:[N," ₿"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:re(h)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:s})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:j})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sex:"}),e.jsx("td",{children:e.jsx("span",{children:C})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${w}`,children:w})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${g}`,children:ue(g)})})]})]})})})]})]}),e.jsxs(Ne,{children:["Comments:",e.jsx("span",{children:x})]}),e.jsxs(ze,{children:[e.jsx(Me,{onClick:()=>B(t._id),children:M(u)}),e.jsx(Pe,{href:`tel:${g}`,children:"Contact"})]})]})}),e.jsx(e.Fragment,{children:e.jsx(W,{active:D,setShow:F})})]})}O.propTypes={active:d.bool,isFavorites:d.bool,setShow:d.func,card:d.object,handleFollowAdd:d.func,handleFollowDel:d.func};const P=n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,_=n.li`

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
`,_e=n.li`
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
`,Ee=n.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,Le=n.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,Te=n.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,Ye=n.p`
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
`,We=n.div`
  display: block;
`,T=n.button`
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
`,Ue=n.ul`
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
`,Re=n.ul`
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
    align-items: center;
    column-gap: 32px;
    row-gap: 24px;
    padding-left: 10px;
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
`;const Ge=n.div`
  display: flex;
  flex-direction: column;
`,Oe=n.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
`,qe=n.button`
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
`;const He=n.div`
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
`,q=({item:t,handleClickDelete:o,handleClickDeleteFavorite:r})=>{const a=b(E),l=b(G),[p,D]=i.useState(!1),[F,$]=i.useState(!1),[u,m]=i.useState(null),k=Y(),[v,y]=i.useState(!1),[h,s]=i.useState(!1);i.useEffect(()=>{s(!!(l!=null&&l.find(x=>x._id===t._id)))},[t._id]);const j=i.useCallback(x=>{if(!a.token){D(!0);return}s(!0),k(Z(x))},[k,a.token]),C=i.useCallback(x=>{s(!1),r(x)},[r]),w=x=>{o(x)};i.useEffect(()=>{if(a.token&&a._id===t.owner){y(!0);return}},[t.owner,a]);const g=x=>{m(x),$(!0)};return e.jsxs(_e,{children:[e.jsxs(Ee,{children:[e.jsx(Le,{src:R(t.imgUrl),alt:"pet",loading:"lazy"}),e.jsxs(Te,{children:[e.jsx(Ye,{children:t.category}),e.jsxs(We,{children:[e.jsx(T,{"aria-label":"add to favorites",children:h?e.jsx("div",{onClick:()=>C(t._id),children:e.jsx(f,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}):e.jsx("div",{onClick:()=>j(t._id),children:e.jsx(f,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#54ADFF"})})}),v?e.jsx(T,{"aria-label":"add to trash",onClick:()=>w(t._id),children:e.jsx(f,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}):""]})]}),e.jsxs(Ue,{children:[e.jsxs(_,{children:[e.jsx(f,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsxs(P,{children:[" ",je(t.place)]})]}),e.jsxs(_,{children:[e.jsx(f,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(P,{children:we(me(t.birthday)+" year")})]}),e.jsxs(_,{children:[e.jsx(f,{iconName:t.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(P,{children:t.sex})]})]})]}),e.jsxs(Ge,{children:[e.jsx(Oe,{children:be(t.title)}),e.jsxs(qe,{onClick:()=>g(t),children:[e.jsx("span",{children:"Learn more"}),e.jsx(f,{iconName:"icon-pawprint",fill:"#54ADFF"})]})]}),e.jsxs(e.Fragment,{children:[e.jsx(O,{active:F,setShow:$,card:u,isFavorites:h,handleFollowAdd:j,handleFollowDel:C}),e.jsx(W,{active:p,setShow:D})]})]})};q.propTypes={item:d.object,children:d.object,handleClickDelete:d.func,handleClickDeleteFavorite:d.func,isFavorite:d.bool};const H=({active:t,setShow:o,isId:r,handleConfirmDelete:a})=>{const l=()=>{o(!t)};return e.jsx(e.Fragment,{children:e.jsxs(U,{onClose:o,active:t,children:[e.jsx(ce,{onClick:l,children:e.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(de,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(pe,{children:[e.jsx(he,{type:"button",onClick:l,children:"Cancel"}),e.jsxs(xe,{type:"button",onClick:()=>a(r),children:["Yes",e.jsx(fe,{children:e.jsx(f,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};H.propTypes={active:d.bool,setShow:d.func,handleConfirmDelete:d.func,isId:d.string};const Je=()=>{const t=Y(),[o,r]=i.useState(!1),[a,l]=i.useState(!1),[p,D]=i.useState(null),[F,$]=i.useState(null),[u,m]=i.useState(1),[k,v]=i.useState("sell"),[y,h]=i.useState(null),s=ee(),j=new URLSearchParams(s.search).get("search"),C=b(ke),w=b(G),{notices:g,length:x}=b(Fe),S=b(E),z=b(ve),[N,B]=i.useState(!1);i.useEffect(()=>{t(L())},[]),i.useEffect(()=>{a&&(t(L()),h(w),h(c=>c.filter(I=>I._id!==p)),l(!1))},[t,w,a]),i.useEffect(()=>{t(te({page:u,category:k,search:j})),p&&h(c=>c.filter(I=>I._id!==p))},[k,u,t,p,j]),i.useEffect(()=>{o&&S._id&&(t(ne({owner:S._id})),h(C),r(!1))},[C,t,o,p,y,S._id]),i.useEffect(()=>{if(s.pathname==="/notices/sell")v("sell"),h(g);else if(s.pathname==="/notices/lost-found")v("lost/found"),h(g);else if(s.pathname==="/notices/for-free")v("in good hands"),h(g);else if(s.pathname==="/notices/own")r(!0);else if(s.pathname==="/notices/favorite"){if(l(!0),!F)return;l(!1),$(!1)}},[F,s.pathname,g]),i.useMemo(()=>{s.pathname==="/notices/sell"||s.pathname==="/notices/lost-found"||s.pathname==="/notices/for-free"?(m(1),r(!1)):s.pathname==="/notices/own"?(r(!0),m(1)):s.pathname==="/notices/favorite"&&r(!0)},[s.pathname]),i.useEffect(()=>{m(1)},[j]);const M=c=>{le(),m(c)},[A,J]=i.useState(null),K=c=>{B(!0),J(c)},Q=c=>{t(oe(c)),D(c),r(!0),B(!1)},V=c=>{l(!0),t(se(c)),s.pathname==="/notices/favorite"&&h(I=>I.filter(X=>X._id!==c)),l(!1)};return e.jsxs(e.Fragment,{children:[z&&w?e.jsx(ie,{}):e.jsxs(Re,{children:[y&&y.map(c=>e.jsx(q,{item:c,handleClickDelete:K,handleClickDeleteFavorite:V},c._id)),e.jsx(He,{children:e.jsx(ae,{onChange:M,current:u,showLessItems:!0,total:x,showTitle:!1})})]}),e.jsx(H,{active:N,setShow:B,isId:A,handleConfirmDelete:Q})]})};Je.propTypes={props:d.object};export{Je as default};
