import{s as n,a as f,r as i,j as t,c as m,e as w,u as b,k as j,R as y,i as S,d as N}from"./index-bbafbda1.js";import{f as v,N as C,P,s as T}from"./index-15ad64f9.js";import{S as k,a as z}from"./Cross-283406b2.js";const L=n.div`
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
`;const E=e=>e.news.items,I=(e,r)=>r?"https://loremflickr.com/640/360":e,$=e=>{let r=e;return r.length>50&&(r=e.slice(0,80)+"..."),r},F=n.li`
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
`,q=n.div`
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
`,B=n.p`
  line-height: 1.375;
`,Q=n.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`,U=n.p`
  color: #888888;
`,W=n.a`
  font-weight: medium;
  color: ${e=>e.theme.color.blue};
  text-decoration: none;

  &:hover,
  :focus {
    color: ${e=>e.theme.color.yellow};
  }
`,g=e=>{const[r,o]=i.useState(!1),s=()=>{o(!0)};return t.jsx(t.Fragment,{children:t.jsxs(F,{children:[t.jsx(q,{children:t.jsx("img",{onError:s,src:I(e.imgUrl,r),alt:e.title})}),t.jsxs(D,{children:[t.jsx(R,{children:e.title}),t.jsx(B,{children:$(e.text)}),t.jsxs(Q,{children:[t.jsx(U,{children:v(e.date)}),t.jsx(W,{href:e.url,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})]},e._id)})};g.propTypes={dataNews:f.array};const _=n.ul`
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
`,A=n.div`
  display: inline-flex;
  justify-content: center;

  align-items: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`;function Y(){const[e,r]=i.useState(!0),[o,s]=i.useState(1),a=m(),l=new URLSearchParams(a.search).get("query"),c=w(E),d=b();i.useEffect(()=>{d(j({page:o,search:l})),r(!1)},[o,d,l]);const x=p=>{s(p),T()};return i.useEffect(()=>{s(1)},[l]),t.jsxs(y,{children:[t.jsx(_,{children:e?t.jsx(S,{}):t.jsx(t.Fragment,{children:c?c.map(p=>t.jsx(g,{...p},p._id)):t.jsx(C,{text:"Nothing was found for your request."})})}),c&&t.jsx(A,{children:t.jsx(P,{onChange:x,current:o,showLessItems:!0,total:300,showTitle:!1})})]})}const G=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,H=n.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 280px;

  @media (min-width: 768px) {
    width: 608px;
  }
`,J=n.input`
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
`,K=n.button`
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
`,M=n.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,O=()=>{const[e,r]=i.useState(""),[o,s]=i.useState(""),a=m(),l=h=>{const u=h.currentTarget.value.toLowerCase();r(u)},c=h=>{h.preventDefault(),e.trim()!==""&&(x({query:e}),r(e))},[d,x]=N();d.get("query");const p=()=>{r(""),x(),s(a.pathname)};return i.useEffect(()=>{s(a.pathname),o!==a.pathname&&r("")},[a.pathname,o,x]),t.jsx(G,{children:t.jsxs(H,{onSubmit:c,children:[t.jsx(J,{type:"text",placeholder:"Search",value:e,autoComplete:"off",onChange:l}),t.jsx(K,{type:"submit",position:e,onSubmit:c,children:t.jsx(k,{})}),e!==""&&t.jsx(M,{type:"button",onClick:p,children:t.jsx(z,{})})]})})},V=n.div`
  margin-top: 40px;
  margin-bottom: 23px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`,X=n.h2`
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
    font-weight: 700;
  }
`,Z=()=>t.jsx(V,{children:t.jsx(X,{children:"News"})}),re=()=>t.jsx(t.Fragment,{children:t.jsxs(L,{children:[t.jsx(Z,{}),t.jsx(O,{}),t.jsx(Y,{})]})});export{re as default};
