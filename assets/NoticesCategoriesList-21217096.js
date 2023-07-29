import{s as n,P as s,j as e,I as l,v as Y,N as I,d as E,r as p,b as R,h as O,u as U,w as q}from"./index-73a3c5b5.js";import{f as G,P as _,s as H}from"./index-7c6f2bda.js";import{M as D}from"./ModalComponents-8e521fe2.js";const J=t=>t.notices.items,K="/pet-app-frontend/assets/defaultPoster-d1161abc.jpeg",Q=t=>t||K,V=t=>t.replace(/[.\-/\\\s]/g,"");function X(t){if(!t)return;const o=new Date,r=new Date(o.getFullYear(),o.getMonth(),o.getDate()),a=new Date(t),x=new Date(r.getFullYear(),a.getMonth(),a.getDate());let c;return c=r.getFullYear()-a.getFullYear(),r<x&&(c=c-1),c}const Z=n.div`
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
`,ee=n.div`
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
`,te=n.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,ne=n.div`
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
`,ie=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,oe=n.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`,re=n.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,se=n.div`
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
`,ae=n.div`
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
`;n.p``;const ce=n.div`
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
`,de=n.button`
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
`,pe=n.a`
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
`;function N({active:t,setShow:o,card:r}){if(!r)return;const{imgUrl:a,name:x,birthday:c,breed:v,place:m,sex:k,email:u,phone:g,text:F,favorite:C,title:$,category:h}=r,f=()=>{o(!1)},w=()=>{},j=b=>b?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(l,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsx(e.Fragment,{children:e.jsx(D,{onClose:o,active:t,children:e.jsxs(Z,{children:[e.jsx(ee,{onClick:f,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(te,{children:[e.jsxs(ne,{children:[e.jsx("span",{children:h}),e.jsx(ie,{src:Q(a),alt:"name image"})]}),e.jsxs(re,{children:[e.jsx(oe,{children:$}),e.jsx(se,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:x})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:G(c)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:v})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:m})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:k})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${u}`,children:u})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${g}`,children:V(g)})})]})]})})})]})]}),e.jsxs(ae,{children:["Comments:",e.jsx("span",{children:F})]}),e.jsxs(ce,{children:[e.jsx(de,{onClick:w,children:j(C)}),e.jsx(pe,{href:`tel:${g}`,children:"Contact"})]})]})})})}N.propTypes={active:s.bool,setShow:s.func,card:s.object};const le=n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,xe=n.li`
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
         
`,y=({iconName:t,width:o,height:r,stroke:a,fill:x,children:c})=>e.jsx(e.Fragment,{children:e.jsxs(xe,{children:[e.jsx("svg",{width:o||"24px",height:r||"24px",children:e.jsx("use",{href:`${Y}#${t}`,stroke:a,fill:x})}),e.jsx(le,{children:c})]})});y.propTypes={iconName:s.string.isRequired,width:s.string,height:s.string,stroke:s.string,fill:s.string,children:s.string};const he=n.ul`
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
`,ge=n.li`
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
`,fe=n.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,me=n.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,ue=n.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,we=n.p`
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
`,je=n.div`
  display: block;
`,be=n.button`
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
`,ye=n.ul`
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
`;n.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`;const ve=n.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  /* padding-button: 0px; */
  padding-right: 20px;
`,ke=n.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`,Fe=n.button`
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
  margin: auto;
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
`;const Ce=n.div`
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
`,B=n.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`,$e=n.div`
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
`,De=n.div`
  display: flex;
  gap: 17px;
  margin-top: 48px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,ze=n.button`
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
`,Ie=n.button`
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
`,Ne=n.div``,M=({active:t,setShow:o})=>{const r=()=>{o(!t)};return e.jsx(e.Fragment,{children:e.jsxs(D,{onClose:o,active:t,children:[e.jsx(B,{onClick:r,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs($e,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete"," ",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(De,{children:[e.jsx(ze,{type:"button",onClick:r,children:"Cancel"}),e.jsxs(Ie,{type:"button",children:["Yes",e.jsx(Ne,{children:e.jsx(l,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};M.propTypes={active:s.bool,setShow:s.func};const Be=n.div`
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
`,Me=n.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,Pe=n(I)`
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
`,Ae=n(I)`
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
`,P=({active:t,setShow:o})=>{const{isLoggedIn:r}=E(),a=()=>{o(!t)};return e.jsx(e.Fragment,{children:!r&&e.jsxs(D,{onClose:o,active:t,children:[e.jsx(B,{onClick:a,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Be,{children:[e.jsx("h2",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),e.jsxs(Me,{children:[e.jsxs(Pe,{to:"/login",children:["Log IN",e.jsx(l,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),e.jsx(Ae,{to:"/register",children:"Registration"})]})]})]})})};P.propTypes={active:s.bool,setShow:s.func};const Se=()=>{const[t,o]=p.useState(!0),[r,a]=p.useState(1),[x,c]=p.useState("sale"),[v,m]=p.useState(!1),[k,u]=p.useState(!1),[g,F]=p.useState(!1),[C,$]=p.useState(null),h=R(),f=new URLSearchParams(h.search).get("search"),w=O(J),{notices:j,lenght:b}=w;console.log("notices",w);const z=U();p.useMemo(()=>{z(q({page:r,category:x,search:f})),o(!1)},[x,r,z,f]);const A=i=>{m(!0),$(i)},S=i=>{a(i),o(!0),H()},L=i=>{let d=i;return d.length>15&&(d=i.slice(0,21)+"..."),d},T=i=>{let d=i;return d.length>6&&(d=i.slice(0,4)+"..."),d},W=i=>{let d=i;return d.length>6&&(d=i.slice(0,4)+"..."),d};return p.useEffect(()=>{h.pathname==="/notices/sell"?(c("sale"),o(!0)):h.pathname==="/notices/lost-found"?(c("lost/found"),o(!0)):h.pathname==="/notices/for-free"&&(c("in good hands"),o(!0)),a(1)},[h.pathname]),p.useEffect(()=>{a(1)},[f]),e.jsxs(e.Fragment,{children:[e.jsx(he,{children:j&&j.map(i=>e.jsxs(ge,{children:[e.jsxs(fe,{children:[e.jsx(me,{src:i.imgUrl,alt:"pet",loading:"lazy"}),e.jsxs(ue,{children:[e.jsx(we,{children:i.category}),e.jsx(je,{children:e.jsx(be,{"aria-label":"add to favorites",children:e.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})})})]}),e.jsxs(ye,{children:[e.jsx(y,{iconName:"icon-location",children:T(i.place)}),e.jsx(y,{iconName:"icon-clock",children:W(X(i.birthday)+" year")}),e.jsx(y,{iconName:i.sex==="female"?"icon-female":"icon-male",children:i.sex})]})]}),e.jsxs(ve,{children:[e.jsx(ke,{children:L(i.title)}),e.jsxs(Fe,{onClick:()=>A(i),children:[e.jsx("span",{children:"Learn more"}),e.jsx(l,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})]})]})]},i._id))}),e.jsx(Ce,{children:b<=10||e.jsx(_,{onChange:S,current:r,showLessItems:!0,total:b,showTitle:!1})}),e.jsx(N,{active:v,setShow:m,card:C}),e.jsx(M,{active:g,setShow:F}),e.jsx(P,{active:k,setShow:u})]})};Se.propTypes={props:s.object};export{Se as default};
