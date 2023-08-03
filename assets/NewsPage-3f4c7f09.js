import{s as n,a as f,r as o,j as t,c as m,g as w,u as b,h as j,R as y,f as S,d as v}from"./index-4915f776.js";import{f as N,P as C,s as P}from"./index-2c7142c3.js";import{S as T,a as z}from"./Cross-15e56c67.js";const k=n.div`
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
`;const L=e=>e.news.items,E=(e,r)=>r?"https://loremflickr.com/640/360":e,I=e=>{let r=e;return r.length>50&&(r=e.slice(0,80)+"..."),r},$=n.li`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  min-height: 578px;
  width: 280px;
  background-color: ${e=>e.theme.color.wight};
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
`,D=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  object-fit: cover;
  max-height: 252px;
  flex-grow: 2;

  border-radius: 20px;
  overflow: hidden;
`,F=n.div`
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
`,Q=n.p`
  color: #888888;
`,U=n.a`
  font-weight: medium;
  color: ${e=>e.theme.color.blue};
  text-decoration: none;

  &:hover,
  :focus {
    color: ${e=>e.theme.color.yellow};
  }
`,g=e=>{const[r,i]=o.useState(!1);if(!e)return;const s=()=>{i(!0)};return t.jsx(t.Fragment,{children:t.jsxs($,{children:[t.jsx(D,{children:t.jsx("img",{onError:s,src:E(e.imgUrl,r),alt:e.title})}),t.jsxs(F,{children:[t.jsx(R,{children:e.title}),t.jsx(q,{children:I(e.text)}),t.jsxs(B,{children:[t.jsx(Q,{children:N(e.date)}),t.jsx(U,{href:e.url,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})]},e._id)})};g.propTypes={dataNews:f.array};const W=n.ul`
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
`,_=n.div`
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
`;function A(){const[e,r]=o.useState(!0),[i,s]=o.useState(1),a=m(),p=new URLSearchParams(a.search).get("query"),l=w(L),d=b();o.useEffect(()=>{d(j({page:i,search:p})),r(!1)},[i,d,p]);const x=c=>{s(c),P()};if(o.useEffect(()=>{s(1)},[p]),!!l)return t.jsxs(y,{children:[t.jsx(W,{children:e?t.jsx(S,{}):t.jsx(t.Fragment,{children:l.map(c=>t.jsx(g,{...c},c._id))})}),t.jsx(_,{children:t.jsx(C,{onChange:x,current:i,showLessItems:!0,total:300,showTitle:!1})})]})}const Y=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,G=n.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 280px;

  @media (min-width: 768px) {
    width: 608px;
  }
`,H=n.input`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.56px;
  padding: 14px 20px;
  border-radius: 20px;
  border: transparent;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: ${e=>e.theme.color.grey};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: transparent;
    box-shadow: ${e=>e.theme.color.blue} 0px 2px 8px 0px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.8px;
    padding: 10px 20px;
  }
`,J=n.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  right: ${e=>e.position?"37px":"13px"};
  @media (min-width: 768px) {
    right: ${e=>e.position?"47px":"20px"};
  }
`,K=n.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,M=()=>{const[e,r]=o.useState(""),[i,s]=o.useState(""),a=m(),p=h=>{const u=h.currentTarget.value.toLowerCase();r(u)},l=h=>{h.preventDefault(),e.trim()!==""&&(x({query:e}),r(e))},[d,x]=v();d.get("query");const c=()=>{r(""),x(),s(a.pathname)};return o.useEffect(()=>{s(a.pathname),i!==a.pathname&&r("")},[a.pathname,i,x]),t.jsx(Y,{children:t.jsxs(G,{onSubmit:l,children:[t.jsx(H,{type:"text",placeholder:"Search",value:e,autoComplete:"off",onChange:p}),t.jsx(J,{type:"submit",position:e,onSubmit:l,children:t.jsx(T,{})}),e!==""&&t.jsx(K,{type:"button",onClick:c,children:t.jsx(z,{})})]})})},O=n.div`
  margin-top: 40px;
  margin-bottom: 23px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`,V=n.h2`
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
    font-weight: 700;
  }
`,X=()=>t.jsx(O,{children:t.jsx(V,{children:"News"})}),ne=()=>t.jsx(t.Fragment,{children:t.jsxs(k,{children:[t.jsx(X,{}),t.jsx(M,{}),t.jsx(A,{})]})});export{ne as default};
