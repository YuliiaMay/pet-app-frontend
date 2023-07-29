import{s as i,f as h,g as m,P as u,j as e,r as l,u as w,R as f,e as b,c as y}from"./index-a8383fd6.js";import{f as j,P as S,s as v}from"./scrollToTop-327c7800.js";import{S as N,a as z}from"./Cross-5632a635.js";const P=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;i.h1`
  font-size: 24px;
  line-height: 1.375;
  margin: 0;
  padding: 40px 0 24px 0;

  @media (min-width: 768px) {
    font-size: 48px;
    padding: 80px 0 0 0;
  }
`;h.defaults.baseURL="https://pets-zywq.onrender.com/api";const T=m("news/getall",async(t,r)=>{const{page:n}=t;try{return(await h.get("/news/getall",{params:{page:n,limit:6}})).data}catch(o){return r.rejectWithValue(o.message)}}),C=i.li`
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
`,k=i.div`
  display: flex;
  align-items: center;
  width: 100%;
  object-fit: cover;
  max-height: 252px;
  flex-grow: 2;

  border-radius: 20px;
  overflow: hidden;
`,D=i.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 12px;
  row-gap: 16px;
  flex-grow: 1;

  font-size: 16px;
  line-height: 1.38;
`,L=i.h4`
  margin-bottom: 15px;
  display: block;

  font-weight: bold;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
`,$=i.p`
  line-height: 1.375;
`,I=i.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`,R=i.p`
  color: #888888;
`,W=i.a`
  font-weight: medium;
  color: ${t=>t.theme.color.blue};
  text-decoration: none;

  &:hover,
  :focus {
    color: ${t=>t.theme.color.yellow};
  }
`,g=({dataNews:t})=>{const r=n=>{let o=n;return o.length>50&&(o=n.slice(0,80)+"..."),o};return e.jsx(e.Fragment,{children:t.map(n=>e.jsxs(C,{children:[e.jsx(k,{children:e.jsx("img",{src:n.imgUrl,alt:n.title})}),e.jsxs(D,{children:[e.jsx(L,{children:n.title}),e.jsx($,{children:r(n.text)}),e.jsxs(I,{children:[e.jsx(R,{children:j(n.date)}),e.jsx(W,{href:n.url,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})]},n._id))})};g.propTypes={dataNews:u.array};const B=i.ul`
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
`,F=i.div`
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
`;function Q(){const[t,r]=l.useState([]),[n,o]=l.useState(!0),[s,a]=l.useState(1),x=w();l.useEffect(()=>{(async()=>{try{const d=await x(T({page:s}));r(d.payload)}catch(d){console.log(d.message)}o(!1)})()},[s,x]);const p=c=>{a(c),v()};return e.jsxs(f,{children:[e.jsx(B,{children:n?e.jsx(b,{}):e.jsx(g,{dataNews:t})}),e.jsx(F,{children:e.jsx(S,{onChange:p,current:s,showLessItems:!0,total:300,showTitle:!1})})]})}const q=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 320px) {
    margin-top: 40px;
  }
`,E=i.h2`
  font-size: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`,U=i.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 280px;

  @media (min-width: 768px) {
    width: 608px;
  }
`,_=i.input`
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
`,A=i.button`
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
`,V=i.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,Y=()=>{const[t,r]=l.useState(""),n=p=>{const c=p.currentTarget.value.toLowerCase();a({query:c}),r(c)},o=p=>{if(p.preventDefault(),t.trim()===""){a();return}r("")},[s,a]=y();s.get("query");const x=()=>{r(""),a()};return e.jsxs(q,{children:[e.jsx(E,{children:"News"}),e.jsxs(U,{onSubmit:o,children:[e.jsx(_,{type:"text",placeholder:"Search",value:t,onChange:n}),e.jsx(A,{type:"submit",position:t,children:e.jsx(N,{})}),t!==""&&e.jsx(V,{type:"button",onClick:x,children:e.jsx(z,{})})]})]})},K=()=>e.jsx(e.Fragment,{children:e.jsxs(P,{children:[e.jsx(Y,{}),e.jsx(Q,{})]})});export{K as default};
