import{s as i,P as c,j as e,I as g,t as $,r as f,v as F,i as C,u as D,w as z,R as B}from"./index-4a6ea755.js";import{M as N}from"./ModalComponents-ab306ed9.js";import{f as I}from"./formatDate-791aee65.js";const P=t=>t.notices.items,S="/pet-app-frontend/assets/defaultPoster-d1161abc.jpeg",L=t=>t||S,M=t=>t.replace(/[.\-/\\\s]/g,"");function T(t){if(!t)return;const a=new Date,r=new Date(a.getFullYear(),a.getMonth(),a.getDate()),l=new Date(t),d=new Date(r.getFullYear(),l.getMonth(),l.getDate());let s;return s=r.getFullYear()-l.getFullYear(),r<d&&(s=s-1),s}const A=i.div`
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
`,E=i.div`
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
`,Y=i.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,W=i.div`
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
`,O=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,R=i.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`,U=i.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,q=i.div`
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
`,G=i.div`
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
`;i.p``;const V=i.div`
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
`,_=i.button`
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
`,H=i.a`
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
`;function k({active:t,setShow:a,card:r}){if(!r)return;const{imgUrl:l,name:d,birthday:s,breed:u,place:b,sex:h,email:p,phone:x,text:j,favorite:w}=r,y=()=>{a(!1)},v=()=>{},n=o=>o?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(g,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(g,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsx(e.Fragment,{children:e.jsx(N,{onClose:a,active:t,children:e.jsxs(A,{children:[e.jsx(E,{onClick:y,children:e.jsx(g,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(Y,{children:[e.jsxs(W,{children:[e.jsx("span",{children:"In good hands"}),e.jsx(O,{src:L(l),alt:"name image"})]}),e.jsxs(U,{children:[e.jsx(R,{children:"Cute dog looking for a home"}),e.jsx(q,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:d})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:I(s)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:u})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:b})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:h})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${p}`,children:p})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${x}`,children:M(x)})})]})]})})})]})]}),e.jsxs(G,{children:["Comments:",e.jsx("span",{children:j})]}),e.jsxs(V,{children:[e.jsx(_,{onClick:v,children:n(w)}),e.jsx(H,{href:`tel:${x}`,children:"Contact"})]})]})})})}k.propTypes={active:c.bool,setShow:c.func,card:c.object};const J=i.ul`
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
`,K=i.li`
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
`,Q=i.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,X=i.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,Z=i.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,ee=i.p`
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
`,te=i.div`
  display: block;
  
`,ie=i.button`
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
  fill: #CCE4FB;
  &:hover,
  focus {
    background-color: ${t=>t.theme.background.lightBlue};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
 &:hover >  svg {
    stroke: ${t=>t.theme.color.blue};
     fill: ${t=>t.theme.color.blue};
    //  box-shadow: ${t=>t.theme.color.blue} 0px 2px 8px 0px;
    }      
`,ne=i.ul`
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
`;const oe=i.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px
  padding-button: 0px 
  padding-right: 20px;
`,re=i.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`,se=i.button`
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
         
`;const ae=i.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,ce=i.li`
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
         
`,m=({iconName:t,width:a,height:r,stroke:l,fill:d,children:s})=>e.jsx(e.Fragment,{children:e.jsxs(ce,{children:[e.jsx("svg",{width:a||"24px",height:r||"24px",children:e.jsx("use",{href:`${$}#${t}`,stroke:l,fill:d})}),e.jsx(ae,{children:s})]})});m.propTypes={iconName:c.string.isRequired,width:c.string,height:c.string,stroke:c.string,fill:c.string,children:c.string};const le=()=>{const[t,a]=f.useState([]),[r,l]=f.useState(!0),[d,s]=f.useState(!1),[u,b]=f.useState(null),h=F(),p=C(P),x=D();f.useEffect(()=>{r&&(x(z()),l(!1))},[x,r]);const j=n=>{s(!0),b(n)},w=n=>{let o=n;return o.length>15&&(o=n.slice(0,15)+"..."),o},y=n=>{let o=n;return o.length>6&&(o=n.slice(0,4)+"..."),o},v=n=>{let o=n;return o.length>6&&(o=n.slice(0,4)+"..."),o};return f.useEffect(()=>{let n=[];h.pathname==="/notices/sell"?n=p.filter(o=>o.category==="sale"):h.pathname==="/notices/lost-found"?n=p.filter(o=>o.category==="lost/found"):h.pathname==="/notices/for-free"&&(n=p.filter(o=>o.category==="in good hands")),a(n)},[h.pathname,p]),e.jsxs(B,{children:[e.jsx(J,{children:t.map(n=>e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(X,{src:n.imgUrl,alt:"pet",loading:"lazy"}),e.jsxs(Z,{children:[e.jsx(ee,{children:n.category}),e.jsx(te,{children:e.jsx(ie,{"aria-label":"add to favorites",children:e.jsx(g,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF"})})})]}),e.jsxs(ne,{children:[e.jsx(m,{iconName:"icon-location",children:y(n.place)}),e.jsx(m,{iconName:"icon-clock",children:v(T(n.birthday)+" year")}),e.jsx(m,{iconName:n.sex==="female"?"icon-female":"icon-male",children:n.sex})]})]}),e.jsxs(oe,{children:[e.jsx(re,{children:w(n.title)}),e.jsxs(se,{onClick:()=>j(n),children:[e.jsx("span",{children:"Learn more"}),e.jsx(g,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})]})]})]},n._id))}),e.jsx(k,{active:d,setShow:s,card:u})]})};le.propTypes={props:c.object};export{le as default};
