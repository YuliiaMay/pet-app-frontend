import{s as n,P as f,j as e,r as s,b as m,f as w,u as b,g as j,R as y,e as S,c as v}from"./index-b1ba561b.js";import{f as N,P as C,s as P}from"./scrollToTop-665dbca3.js";import{S as T,a as z}from"./Cross-3d62d161.js";const L=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;n.h1`
  font-size: 24px;
  line-height: 1.375;
  margin: 0;
  padding: 40px 0 24px 0;

  @media (min-width: 768px) {
    font-size: 48px;
    padding: 80px 0 0 0;
  }
`;const k=t=>t.news.items,$=n.li`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  min-height: 578px;
  width: 280px;
  background-color: ${t=>t.theme.color.wight};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  }

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 0;
    width: 100%;
    height: 4px;
    width: 100%;

    transform: translateY(-100%);
    border-radius: 40px;
    background-image: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media (min-width: 768px) {
    width: calc((100% - 32px) / 2);

    &::before {
      height: 8px;
    }
  }
  @media (min-width: 1280px) {
    width: calc((100% - 32px * 2) / 3);
  }
`,I=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  object-fit: cover;
  max-height: 252px;
  flex-grow: 2;

  border-radius: 20px;
  overflow: hidden;
`,D=n.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 12px;
  row-gap: 16px;
  flex-grow: 1;

  font-size: 16px;
  line-height: 1.38;
`,R=n.h4`
  margin-bottom: 15px;
  display: block;

  font-weight: bold;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
`,q=n.p`
  line-height: 1.375;
`,B=n.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`,E=n.p`
  color: #888888;
`,F=n.a`
  font-weight: medium;
  color: ${t=>t.theme.color.blue};
  text-decoration: none;

  &:hover,
  :focus {
    color: ${t=>t.theme.color.yellow};
  }
`,g=({dataNews:t})=>{if(!t)return;const r=i=>{let o=i;return o.length>50&&(o=i.slice(0,80)+"..."),o};return e.jsx(e.Fragment,{children:t.map(i=>e.jsxs($,{children:[e.jsx(I,{children:e.jsx("img",{src:i.imgUrl,alt:i.title})}),e.jsxs(D,{children:[e.jsx(R,{children:i.title}),e.jsx(q,{children:r(i.text)}),e.jsxs(B,{children:[e.jsx(E,{children:N(i.date)}),e.jsx(F,{href:i.url,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})]},i._id))})};g.propTypes={dataNews:f.array};const Q=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 44px;
  margin-top: 44px;
  margin-bottom: 20px;
  align-items: center;
  flex-grow: 1;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 46px;
    margin-top: 80px;
  }
`,W=n.div`
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
`;function U(){const[t,r]=s.useState(!0),[i,o]=s.useState(1),a=m(),p=new URLSearchParams(a.search).get("query"),c=w(k),x=b();s.useMemo(()=>{x(j({page:i,search:p})),r(!1)},[i,x,p]);const l=d=>{o(d),P()};return s.useEffect(()=>{o(1)},[p]),e.jsxs(y,{children:[e.jsx(Q,{children:t?e.jsx(S,{}):e.jsx(g,{dataNews:c})}),e.jsx(W,{children:c.length<6||e.jsx(C,{onChange:l,current:i,showLessItems:!0,total:300,showTitle:!1})})]})}const _=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,A=n.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 280px;

  @media (min-width: 768px) {
    width: 608px;
  }
`,M=n.input`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.56px;
  padding: 14px 20px;
  border-radius: 20px;
  border: transparent;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: ${t=>t.theme.color.grey};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: transparent;
    box-shadow: ${t=>t.theme.color.blue} 0px 2px 8px 0px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.8px;
    padding: 10px 20px;
  }
`,Y=n.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  right: ${t=>t.position?"37px":"13px"};
  @media (min-width: 768px) {
    right: ${t=>t.position?"47px":"20px"};
  }
`,G=n.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,H=()=>{const[t,r]=s.useState(""),[i,o]=s.useState(""),a=m(),p=h=>{const u=h.currentTarget.value.toLowerCase();r(u)},c=h=>{h.preventDefault(),t.trim()!==""&&(l({query:t}),r(t))},[x,l]=v();x.get("query");const d=()=>{r(""),l(),o(a.pathname)};return s.useEffect(()=>{o(a.pathname),i!==a.pathname&&r("")},[a.pathname,i,l]),e.jsx(_,{children:e.jsxs(A,{onSubmit:c,children:[e.jsx(M,{type:"text",placeholder:"Search",value:t,autoComplete:"off",onChange:p}),e.jsx(Y,{type:"submit",position:t,onSubmit:c,children:e.jsx(T,{})}),t!==""&&e.jsx(G,{type:"button",onClick:d,children:e.jsx(z,{})})]})})},J=n.div`
  margin-top: 40px;
  margin-bottom: 23px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`,K=n.h2`
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
    font-weight: 700;
  }
`,O=()=>e.jsx(J,{children:e.jsx(K,{children:"News"})}),ee=()=>e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsx(O,{}),e.jsx(H,{}),e.jsx(U,{})]})});export{ee as default};
