import{s as i,P as a,j as e,I as l,p as P,N as D,c as T,r as p,q as Y,i as W,u as E,t as R,R as O}from"./index-40b1425e.js";import{M as C}from"./ModalComponents-6de3ac72.js";import{f as U}from"./formatDate-791aee65.js";const q=t=>t.notices.items,G="/pet-app-frontend/assets/defaultPoster-d1161abc.jpeg",V=t=>t||G,_=t=>t.replace(/[.\-/\\\s]/g,"");function H(t){if(!t)return;const r=new Date,s=new Date(r.getFullYear(),r.getMonth(),r.getDate()),c=new Date(t),x=new Date(s.getFullYear(),c.getMonth(),c.getDate());let d;return d=s.getFullYear()-c.getFullYear(),s<x&&(d=d-1),d}const J=i.div`
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
`,X=i.div`
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
`,Z=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ee=i.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`,te=i.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,ie=i.div`
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
`,ne=i.div`
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
`;i.p``;const oe=i.div`
  display: flex;
  flex-direction: column-reverse;

  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    display: inline-flex;
    justify-content: end;

    flex-direction: row;
    align-items: center;

    gap: 17px;
  }
`,re=i.button`
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
`,se=i.a`
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
    /* display: inline-flex;
    justify-content: end; */
  }
`;function z({active:t,setShow:r,card:s}){if(!s)return;const{imgUrl:c,name:x,birthday:d,breed:j,place:u,sex:y,email:f,phone:m,text:k,favorite:h}=s,g=()=>{r(!1)},w=()=>{},v=F=>F?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(l,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsx(e.Fragment,{children:e.jsx(C,{onClose:r,active:t,children:e.jsxs(J,{children:[e.jsx(K,{onClick:g,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Q,{children:[e.jsxs(X,{children:[e.jsx("span",{children:"In good hands"}),e.jsx(Z,{src:V(c),alt:"name image"})]}),e.jsxs(te,{children:[e.jsx(ee,{children:"Cute dog looking for a home"}),e.jsx(ie,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:x})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:U(d)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:j})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:u})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:y})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${f}`,children:f})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${m}`,children:_(m)})})]})]})})})]})]}),e.jsxs(ne,{children:["Comments:",e.jsx("span",{children:k})]}),e.jsxs(oe,{children:[e.jsx(re,{onClick:w,children:v(h)}),e.jsx(se,{href:`tel:${m}`,children:"Contact"})]})]})})})}z.propTypes={active:a.bool,setShow:a.func,card:a.object};const ae=i.ul`
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
`,ce=i.li`
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
`,de=i.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,le=i.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,pe=i.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,xe=i.p`
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
`,he=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,$=i.button`
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
`,ge=i.ul`
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
`;i.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`;const fe=i.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px
  padding-button: 0px 
  padding-right: 20px;
`,me=i.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
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
`;const we=i.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,be=i.li`
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
         
`,b=({iconName:t,width:r,height:s,stroke:c,fill:x,children:d})=>e.jsx(e.Fragment,{children:e.jsxs(be,{children:[e.jsx("svg",{width:r||"24px",height:s||"24px",children:e.jsx("use",{href:`${P}#${t}`,stroke:c,fill:x})}),e.jsx(we,{children:d})]})});b.propTypes={iconName:a.string.isRequired,width:a.string,height:a.string,stroke:a.string,fill:a.string,children:a.string};const N=i.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`,je=i.div`
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
`,ye=i.div`
  display: flex;
  gap: 17px;
  margin-top: 48px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,ke=i.button`
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
`,ve=i.button`
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
`,Fe=i.div``,I=({active:t,setShow:r})=>{const s=()=>{r(!t)};return e.jsx(e.Fragment,{children:e.jsxs(C,{onClose:r,active:t,children:[e.jsx(N,{onClick:s,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(je,{children:[e.jsx("h2",{children:"Delete adverstiment?"}),e.jsxs("p",{children:["Are you sure you want to delete"," ",e.jsx("span",{children:"“Cute dog looking for a home”"}),"?",e.jsx("br",{}),"You can`t undo this action."]}),e.jsxs(ye,{children:[e.jsx(ke,{type:"button",onClick:s,children:"Cancel"}),e.jsxs(ve,{type:"button",children:["Yes",e.jsx(Fe,{children:e.jsx(l,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})})]})]})]})]})})};I.propTypes={active:a.bool,setShow:a.func};const Ce=i.div`
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
`,$e=i.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,De=i(D)`
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
`,ze=i(D)`
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
`,A=({active:t,setShow:r})=>{const{isLoggedIn:s}=T(),c=()=>{r(!t)};return e.jsx(e.Fragment,{children:!s&&e.jsxs(C,{onClose:r,active:t,children:[e.jsx(N,{onClick:c,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Ce,{children:[e.jsx("h2",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not have an account yet, you must register to access these features."}),e.jsxs($e,{children:[e.jsxs(De,{to:"/login",children:["Log IN",e.jsx(l,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]}),e.jsx(ze,{to:"/register",children:"Registration"})]})]})]})})};A.propTypes={active:a.bool,setShow:a.func};const Ne=()=>{const[t,r]=p.useState([]),[s,c]=p.useState(!0),[x,d]=p.useState(!1),[j,u]=p.useState(!1),[y,f]=p.useState(!1),[m,k]=p.useState(null),h=Y(),g=W(q),w=E();p.useEffect(()=>{s&&(w(R()),c(!1))},[w,s]);const v=n=>{d(!0),k(n)},F=()=>{f(!0)},B=()=>{u(!0)},M=n=>{let o=n;return o.length>15&&(o=n.slice(0,21)+"..."),o},S=n=>{let o=n;return o.length>6&&(o=n.slice(0,4)+"..."),o},L=n=>{let o=n;return o.length>6&&(o=n.slice(0,4)+"..."),o};return p.useEffect(()=>{let n=[];h.pathname==="/notices/sell"?n=g.filter(o=>o.category==="sale"):h.pathname==="/notices/lost-found"?n=g.filter(o=>o.category==="lost/found"):h.pathname==="/notices/for-free"&&(n=g.filter(o=>o.category==="in good hands")),r(n)},[h.pathname,g]),e.jsxs(O,{children:[e.jsx(ae,{children:t.map(n=>e.jsxs(ce,{children:[e.jsxs(de,{children:[e.jsx(le,{src:n.imgUrl,alt:"pet",loading:"lazy"}),e.jsxs(pe,{children:[e.jsx(xe,{children:n.category}),e.jsxs(he,{children:[e.jsx($,{"aria-label":"add to favorites",type:"button",onClick:()=>B(),children:e.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})}),e.jsx($,{type:"button",onClick:()=>F(),children:e.jsx(l,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})})]})]}),e.jsxs(ge,{children:[e.jsx(b,{iconName:"icon-location",children:S(n.place)}),e.jsx(b,{iconName:"icon-clock",children:L(H(n.birthday)+" year")}),e.jsx(b,{iconName:n.sex==="female"?"icon-female":"icon-male",children:n.sex})]})]}),e.jsxs(fe,{children:[e.jsx(me,{children:M(n.title)}),e.jsxs(ue,{onClick:()=>v(n),children:[e.jsx("span",{children:"Learn more"}),e.jsx(l,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})]})]})]},n._id))}),e.jsx(z,{active:x,setShow:d,card:m}),e.jsx(I,{active:y,setShow:f}),e.jsx(A,{active:j,setShow:u})]})};Ne.propTypes={props:a.object};export{Ne as default};
