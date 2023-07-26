import{s,e as c,f as x,P as h,j as e,a,u as g,R as f}from"./index-c8bc82c5.js";import{f as m}from"./formatDate-791aee65.js";const w=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,u=s.h1`
  font-size: 24px;
  line-height: 1.375;
  margin: 0;
  padding: 40px 0 24px 0;

  @media (min-width: 768px) {
    font-size: 48px;
    padding: 80px 0 0 0;
  }
`,b=s.ul`
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
`;c.defaults.baseURL="https://pets-zywq.onrender.com/api";const j=x("news/getall",async(i,n)=>{try{return(await c.get("/news/getall")).data}catch(t){return n.rejectWithValue(t.message)}}),y=s.li`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  min-height: 578px;
  width: 280px;
  background-color: ${i=>i.theme.color.wight};
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
`,N=s.div`
  display: flex;
  align-items: center;
  width: 100%;
  object-fit: cover;
  max-height: 252px;
  flex-grow: 2;

  border-radius: 20px;
  overflow: hidden;
`,v=s.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 12px;
  row-gap: 16px;
  flex-grow: 1;

  font-size: 16px;
  line-height: 1.38;
`,D=s.h4`
  margin-bottom: 15px;
  display: block;

  font-weight: bold;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
`,T=s.p`
  line-height: 1.375;
`,k=s.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`,z=s.p`
  color: #888888;
`,R=s.a`
  font-weight: medium;
  color: ${i=>i.theme.color.blue};
  text-decoration: none;

  &:hover,
  :focus {
    color: ${i=>i.theme.color.yellow};
  }
`,p=({dataNews:i})=>{const n=t=>{let r=t;return r.length>50&&(r=t.slice(0,80)+"..."),r};return e.jsx(e.Fragment,{children:i.map(t=>e.jsxs(y,{children:[e.jsx(N,{children:e.jsx("img",{src:t.imgUrl,alt:t.title})}),e.jsxs(v,{children:[e.jsx(D,{children:t.title}),e.jsx(T,{children:n(t.text)}),e.jsxs(k,{children:[e.jsx(z,{children:m(t.date)}),e.jsx(R,{href:t.url,target:"_blank",rel:"noreferrer",children:"Read more"})]})]})]},t._id))})};p.propTypes={dataNews:h.array};function F(){const[i,n]=a.useState([]),[t,r]=a.useState(!0),l=g();a.useEffect(()=>(t&&(async()=>{try{const o=await l(j());n(o.payload)}catch(o){console.log(o.message)}r(!1)})(),()=>{r(!1)}),[l,t]);const d=i.slice(0,20);return e.jsx(f,{children:e.jsx(b,{children:e.jsx(p,{dataNews:d})})})}const I=()=>e.jsx(e.Fragment,{children:e.jsxs(w,{children:[e.jsx(u,{children:"News"}),e.jsx(F,{})]})});export{I as default};
