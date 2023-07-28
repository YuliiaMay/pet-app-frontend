import{s as o,e as d,f as g,P as m,j as e,r as c,u,R as f,d as w,b}from"./index-14ef67e0.js";import{f as y}from"./formatDate-791aee65.js";import{S as j,a as S}from"./Cross-5bcbc6c6.js";const v=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;o.h1`
  font-size: 24px;
  line-height: 1.375;
  margin: 0;
  padding: 40px 0 24px 0;

  @media (min-width: 768px) {
    font-size: 48px;
    padding: 80px 0 0 0;
  }
`;const N=o.ul`
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
`;d.defaults.baseURL="https://pets-zywq.onrender.com/api";const z=g("news/getall",async(t,r)=>{try{return(await d.get("/news/getall")).data}catch(i){return r.rejectWithValue(i.message)}}),k=o.li`
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
`,D=o.div`
  display: flex;
  align-items: center;
  width: 100%;
  object-fit: cover;
  max-height: 252px;
  flex-grow: 2;

  border-radius: 20px;
  overflow: hidden;
`,C=o.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 12px;
  row-gap: 16px;
  flex-grow: 1;

  font-size: 16px;
  line-height: 1.38;
`,L=o.h4`
  margin-bottom: 15px;
  display: block;

  font-weight: bold;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
`,T=o.p`
  line-height: 1.375;
`,$=o.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`,P=o.p`
  color: #888888;
`,I=o.a`
  font-weight: medium;
  color: ${t=>t.theme.color.blue};
  text-decoration: none;

  &:hover,
  :focus {
    color: ${t=>t.theme.color.yellow};
  }
`,h=({dataNews:t})=>{const r=i=>{let n=i;return n.length>50&&(n=i.slice(0,80)+"..."),n};return e.jsx(e.Fragment,{children:t.map(i=>e.jsxs(k,{children:[e.jsx(D,{children:e.jsx("img",{src:i.imgUrl,alt:i.title})}),e.jsxs(C,{children:[e.jsx(L,{children:i.title}),e.jsx(T,{children:r(i.text)}),e.jsxs($,{children:[e.jsx(P,{children:y(i.date)}),e.jsx(I,{href:i.url,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})]},i._id))})};h.propTypes={dataNews:m.array};function R(){const[t,r]=c.useState([]),[i,n]=c.useState(!0),p=u();c.useEffect(()=>{(async()=>{try{const s=await p(z());r(s.payload)}catch(s){console.log(s.message)}n(!1)})()},[p]);const a=t.slice(0,20);return e.jsx(f,{children:e.jsx(N,{children:i?e.jsx(w,{}):e.jsx(h,{dataNews:a})})})}const B=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 320px) {
    margin-top: 40px;
  }
`,F=o.h2`
  font-size: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`,Q=o.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 280px;

  @media (min-width: 768px) {
    width: 608px;
  }
`,W=o.input`
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
`,q=o.button`
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
`,E=o.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`,_=()=>{const[t,r]=c.useState(""),i=s=>{const l=s.currentTarget.value.toLowerCase();a({query:l}),r(l)},n=s=>{if(s.preventDefault(),t.trim()===""){a();return}r("")},[p,a]=b();p.get("query");const x=()=>{r(""),a()};return e.jsxs(B,{children:[e.jsx(F,{children:"News"}),e.jsxs(Q,{onSubmit:n,children:[e.jsx(W,{type:"text",placeholder:"Search",value:t,onChange:i}),e.jsx(q,{type:"submit",position:t,children:e.jsx(j,{})}),t!==""&&e.jsx(E,{type:"button",onClick:x,children:e.jsx(S,{})})]})]})},Y=()=>e.jsx(e.Fragment,{children:e.jsxs(v,{children:[e.jsx(_,{}),e.jsx(R,{})]})});export{Y as default};
