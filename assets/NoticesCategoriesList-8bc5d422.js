import{s as n,a as c,r as i,e as b,f as E,j as e,I as f,u as W,A as te,c as ne,B as T,C as ie,D as oe,i as se,E as re,F as ae}from"./index-e64491a1.js";import{f as le,N as ce,P as de,s as he}from"./index-cc9e5c49.js";import{M as U,C as pe,W as xe,B as fe,a as ge,Y as ue,D as me}from"./ModalAttention-4e28cbdf.js";import{M as R}from"./ModalComponents-6d65fd77.js";const je="/pet-app-frontend/assets/defaultPoster-c04359c8.jpeg",q=t=>t||je,we=t=>t.replace(/[.\-/\\\s]/g,"");function be(t){if(!t)return;const o=new Date,r=new Date(o.getFullYear(),o.getMonth(),o.getDate()),a=new Date(t),l=new Date(r.getFullYear(),a.getMonth(),a.getDate());let p;return p=r.getFullYear()-a.getFullYear(),r<l&&(p=p-1),p}const Fe=t=>{if(!t)return;let o=t;return o.length>6&&(o=t.slice(0,4)+"..."),o},ke=t=>{let o=t;return o.length>6&&(o=t.slice(0,4)+"..."),o},ve=t=>{if(!t)return;let o=t;return o.length>15&&(o=t.slice(0,21)+"..."),o},ye=t=>t.notices.items,G=t=>t.notices.favorite,Ce=t=>t.notices.own,De=t=>t.notices.isLoading,$e=n.div`
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
`,Ae=n.div`
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
`,Se=n.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,Ie=n.div`
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
`,Ne=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Be=n.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`,ze=n.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,Me=n.div`
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
`,Pe=n.div`
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
`;n.p``;const Le=n.div`
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
`,_e=n.button`
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
`,Ee=n.a`
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
`;function O({card:t,active:o,setShow:r,isFavorites:a,handleFollowAdd:l,handleFollowDel:p}){const[D,F]=i.useState(!1),$=b(E),[u,m]=i.useState(a);if(!t)return;const k=()=>{r(!1)};if(!t)return;const{imgUrl:v,name:j,birthday:x,breed:s,place:w,sex:y,email:C,phone:g,comments:h,title:S,category:B,price:z}=t,I=A=>{if(!$.token){F(!0);return}u?p(A):l(A),m(!u)},M=A=>A?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(f,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(f,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClose:r,active:o,children:e.jsxs($e,{children:[e.jsx(Ae,{onClick:k,children:e.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Se,{children:[e.jsxs(Ie,{children:[e.jsx("span",{children:B}),e.jsx(Ne,{src:q(v),alt:"name image"})]}),e.jsxs(ze,{children:[e.jsx(Be,{children:S}),e.jsx(Me,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:j})})]}),!z<=0&&e.jsxs("tr",{children:[e.jsx("td",{children:"Price:"}),e.jsx("td",{children:e.jsxs("span",{children:[z," ₿"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:le(x)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:s})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:w})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sex:"}),e.jsx("td",{children:e.jsx("span",{children:y})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${C}`,children:C})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${g}`,children:we(g)})})]})]})})})]})]}),e.jsxs(Pe,{children:["Comments:",e.jsx("span",{children:h})]}),e.jsxs(Le,{children:[e.jsx(_e,{onClick:()=>I(t._id),children:M(u)}),e.jsx(Ee,{href:`tel:${g}`,children:"Contact"})]})]})}),e.jsx(e.Fragment,{children:e.jsx(U,{active:D,setShow:F})})]})}O.propTypes={active:c.bool,isFavorites:c.bool,setShow:c.func,card:c.object,handleFollowAdd:c.func,handleFollowDel:c.func};const L=n.span`
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
`,Te=n.li`
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
`,Ye=n.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,We=n.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,Ue=n.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,Re=n.p`
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
`,qe=n.div`
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
`,Ge=n.ul`
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
`,Oe=n.ul`
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
`;const He=n.div`
  display: flex;
  flex-direction: column;
`,Je=n.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  height: 80px;
`,Ke=n.button`
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
`;const Qe=n.div`
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
`,H=({item:t,handleClickDelete:o,handleClickDeleteFavorite:r})=>{const a=b(E),l=b(G),[p,D]=i.useState(!1),[F,$]=i.useState(!1),[u,m]=i.useState(null),k=W(),[v,j]=i.useState(!1),[x,s]=i.useState(!1);i.useEffect(()=>{s(!!(l!=null&&l.find(h=>h._id===t._id)))},[t._id]);const w=i.useCallback(h=>{if(!a.token){D(!0);return}s(!0),k(te(h))},[k,a.token]),y=i.useCallback(h=>{s(!1),r(h)},[r]),C=h=>{o(h)};i.useEffect(()=>{if(a.token&&a._id===t.owner){j(!0);return}},[t.owner,a]);const g=h=>{m(h),$(!0)};return e.jsxs(Te,{children:[e.jsxs(Ye,{children:[e.jsx(We,{src:q(t.imgUrl),alt:"pet",loading:"lazy"}),e.jsxs(Ue,{children:[e.jsx(Re,{children:t.category}),e.jsxs(qe,{children:[e.jsx(Y,{"aria-label":"add to favorites",children:x?e.jsx("div",{onClick:()=>y(t._id),children:e.jsx(f,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}):e.jsx("div",{onClick:()=>w(t._id),children:e.jsx(f,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#54ADFF"})})}),v?e.jsx(Y,{"aria-label":"add to trash",onClick:()=>C(t._id),children:e.jsx(f,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}):""]})]}),e.jsxs(Ge,{children:[e.jsxs(_,{children:[e.jsx(f,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsxs(L,{children:[" ",Fe(t.place)]})]}),e.jsxs(_,{children:[e.jsx(f,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(L,{children:ke(be(t.birthday)+" year")})]}),e.jsxs(_,{children:[e.jsx(f,{iconName:t.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx(L,{children:t.sex})]})]})]}),e.jsxs(He,{children:[e.jsx(Je,{children:ve(t.title)}),e.jsxs(Ke,{onClick:()=>g(t),children:[e.jsx("span",{children:"Learn more"}),e.jsx(f,{iconName:"icon-pawprint",fill:"#54ADFF"})]})]}),e.jsxs(e.Fragment,{children:[e.jsx(O,{active:F,setShow:$,card:u,isFavorites:x,handleFollowAdd:w,handleFollowDel:y}),e.jsx(U,{active:p,setShow:D})]})]})};H.propTypes={item:c.object,children:c.object,handleClickDelete:c.func,handleClickDeleteFavorite:c.func,isFavorite:c.bool};const J=({active:t,setShow:o,isId:r,handleConfirmDelete:a})=>{const l=()=>{o(!t)};return e.jsx(e.Fragment,{children:e.jsxs(R,{onClose:o,active:t,children:[e.jsx(pe,{onClick:l,children:e.jsx(f,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(xe,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(fe,{children:[e.jsx(ge,{type:"button",onClick:l,children:"Cancel"}),e.jsxs(ue,{type:"button",onClick:()=>a(r),children:["Yes",e.jsx(me,{children:e.jsx(f,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};J.propTypes={active:c.bool,setShow:c.func,handleConfirmDelete:c.func,isId:c.string};const Ve=()=>{const t=W(),[o,r]=i.useState(!1),[a,l]=i.useState(!1),[p,D]=i.useState(null),[F,$]=i.useState(null),[u,m]=i.useState(1),[k,v]=i.useState("sell"),[j,x]=i.useState(null),s=ne(),w=new URLSearchParams(s.search).get("search"),y=b(Ce),C=b(G),{notices:g,length:h}=b(ye),S=b(E),B=b(De),[z,I]=i.useState(!1),[M,A]=i.useState(null);i.useEffect(()=>{t(T())},[]),i.useEffect(()=>{a&&(t(T()),x(C),l(!1))},[t,C,a]),i.useEffect(()=>{t(ie({page:u,category:k,search:w})),A(h),p&&x(d=>d.filter(N=>N._id!==p))},[k,u,t,p,h,w]),i.useEffect(()=>{o&&S._id&&(t(oe({owner:S._id})),x(y),r(!1))},[y,t,o,p,j,S._id]),i.useEffect(()=>{if(s.pathname==="/notices/sell")v("sell"),x(g);else if(s.pathname==="/notices/lost-found")v("lost/found"),x(g);else if(s.pathname==="/notices/for-free")v("in good hands"),x(g);else if(s.pathname==="/notices/own")r(!0);else if(s.pathname==="/notices/favorite"){if(l(!0),!F)return;l(!1),$(!1)}},[F,s.pathname,g]),i.useMemo(()=>{s.pathname==="/notices/sell"||s.pathname==="/notices/lost-found"||s.pathname==="/notices/for-free"?(m(1),r(!1)):s.pathname==="/notices/own"?(r(!0),m(1)):s.pathname==="/notices/favorite"&&r(!0)},[s.pathname]),i.useEffect(()=>{m(1)},[w]);const K=d=>{he(),m(d)},[Q,V]=i.useState(null),X=d=>{I(!0),V(d)},Z=d=>{t(re(d)),D(d),r(!0),I(!1),x(N=>N.filter(P=>P._id!==d))},ee=d=>{l(!0),t(ae(d)),s.pathname==="/notices/favorite"&&x(N=>N.filter(P=>P._id!==d)),l(!1)};return e.jsxs(e.Fragment,{children:[B?e.jsx(se,{}):e.jsx(Oe,{children:j&&j.map(d=>e.jsx(H,{item:d,handleClickDelete:X,handleClickDeleteFavorite:ee},d._id))}),j?e.jsx(Qe,{children:!B&&e.jsx(de,{onChange:K,current:u,showLessItems:!0,total:M,showTitle:!1})}):e.jsx(e.Fragment,{children:e.jsx(ce,{text:"Nothing was found on your request."})}),e.jsx(J,{active:z,setShow:I,isId:Q,handleConfirmDelete:Z})]})};Ve.propTypes={props:c.object};export{Ve as default};
