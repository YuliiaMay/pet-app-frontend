import{s as i,a as x,n as D,j as e,P as g,I as l,p as C,i as z,u as $,q as N,R as A}from"./index-b8a133f9.js";import{f as P}from"./formatDate-791aee65.js";const I=t=>t.notices.items,B="/pet-app-frontend/assets/defaultPoster-d1161abc.jpeg",S=t=>t||B,E=t=>t.replace(/[.\-/\\\s]/g,"");function L(t){if(!t)return;const o=new Date,r=new Date(o.getFullYear(),o.getMonth(),o.getDate()),d=new Date(t),c=new Date(r.getFullYear(),d.getMonth(),d.getDate());let s;return s=r.getFullYear()-d.getFullYear(),r<c&&(s=s-1),s}const M=i.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(43, 43, 43, 0.6);
  transition: 0.4s all;
  opacity: 0;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`,T=i.div`
  /* top: -112px; */
  border-radius: 40px;

  background: #ffffff;

  transform: scale(0.5);
  transition: 0.5s all;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  &.active {
    transform: scale(1);
  }
`,W=document.querySelector("#modal-root");function Y({active:t,onClose:o,children:r}){x.useEffect(()=>{const c=s=>{s.code==="Escape"&&o(!1)};window.addEventListener("keydown",c)},[o]);const d=c=>{c.currentTarget===c.target&&o(!1)};return D.createPortal(e.jsx(M,{className:t?"active":"",onClick:d,children:e.jsx(T,{className:t?"active":"",children:r})}),W)}const R=i.div`
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
`,O=i.div`
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
`,U=i.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,q=i.div`
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
`,G=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,K=i.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`,V=i.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,_=i.div`
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
`,H=i.div`
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
`;i.p``;const J=i.div`
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
`,Q=i.button`
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
`,X=i.a`
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
`;function v({active:t,setShow:o,card:r}){if(!r)return;const{imgUrl:d,name:c,birthday:s,breed:m,place:u,sex:h,email:p,phone:f,text:b,favorite:j}=r,n=()=>{o(!1)},a=()=>{},k=F=>F?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(l,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsx(e.Fragment,{children:e.jsx(Y,{onClose:o,active:t,children:e.jsxs(R,{children:[e.jsx(O,{onClick:n,children:e.jsx(l,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(U,{children:[e.jsxs(q,{children:[e.jsx("span",{children:"In good hands"}),e.jsx(G,{src:S(d),alt:"name image"})]}),e.jsxs(V,{children:[e.jsx(K,{children:"Cute dog looking for a home"}),e.jsx(_,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:c})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:P(s)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:m})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:u})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:h})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${p}`,children:p})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${f}`,children:E(f)})})]})]})})})]})]}),e.jsxs(H,{children:["Comments:",e.jsx("span",{children:b})]}),e.jsxs(J,{children:[e.jsx(Q,{onClick:a,children:k(j)}),e.jsx(X,{href:`tel:${f}`,children:"Contact"})]})]})})})}v.propTypes={active:g.bool,setShow:g.func,card:g.object};const Z=i.ul`
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
`,ee=i.li`
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
`,te=i.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,ie=i.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,ne=i.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,oe=i.p`
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
`,re=i.div`
  display: block;
`,se=i.button`
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
  &:hover,
  focus {
    // background-color: #3498db;
    transition: color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`,ae=i.ul`
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
`,w=i.li`
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
        background-color: ${t=>t.theme.background.accentBlue} 
        transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: ${t=>t.theme.color.wight}
    }
    &:hover > svg {
    stroke: ${t=>t.theme.color.wight}
    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
  }
`,y=i.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,ce=i.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  padding: 20px;
`,de=i.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`,le=i.button`
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
    &:focus  {
        border: transparent;
        background: linear-gradient(315deg, rgb(65, 158, 241) 0%, rgb(155, 208, 255) 100%);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: ${t=>t.theme.color.wight};
       & use {
        stroke: ${t=>t.theme.color.wight};
         fill: ${t=>t.theme.color.wight};
    }        
  }
`,pe=()=>{const[t,o]=x.useState([]),[r,d]=x.useState(!0),[c,s]=x.useState(!1),[m,u]=x.useState(null),h=C(),p=z(I),f=$();x.useEffect(()=>{r&&(f(N()),d(!1))},[f,r]);const b=n=>{s(!0),u(n)},j=n=>{let a=n;return a.length>20&&(a=n.slice(0,20)+"..."),a};return x.useEffect(()=>{let n=[];h.pathname==="/notices/sell"?n=p.filter(a=>a.category==="sale"):h.pathname==="/notices/lost-found"?n=p.filter(a=>a.category==="lost/found"):h.pathname==="/notices/for-free"&&(n=p.filter(a=>a.category==="in good hands")),o(n)},[h.pathname,p]),e.jsxs(A,{children:[e.jsx(Z,{children:t.map(n=>e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(ie,{src:n.imgUrl,alt:"pet",loading:"lazy"}),e.jsxs(ne,{children:[e.jsx(oe,{children:n.category}),e.jsx(re,{children:e.jsx(se,{"aria-label":"add to favorites",children:e.jsx(l,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})})]}),e.jsxs(ae,{children:[e.jsxs(w,{children:[e.jsx(l,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(y,{children:n.place})]}),e.jsxs(w,{children:[e.jsx(l,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsxs(y,{children:[L(n.birthday)," year"]})]}),e.jsxs(w,{children:[e.jsx(l,{iconName:n.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(y,{children:n.sex})]})]})]}),e.jsxs(ce,{children:[e.jsx(de,{children:j(n.title)}),e.jsxs(le,{onClick:()=>b(n),children:[e.jsx("span",{children:"Learn more"}),e.jsx(l,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})]})]})]},n._id))}),e.jsx(v,{active:c,setShow:s,card:m})]})};pe.propTypes={props:g.object};export{pe as default};
