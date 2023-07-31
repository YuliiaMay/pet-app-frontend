import{s as r,P as i,j as e,f as h,u as g,r as u,h as m}from"./index-13f030ea.js";const f=r.li`
  width: 370px;
  height: 287px;
  padding: 16px 12px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  & > a > h2 {
    color: ${s=>s.theme.color.blue};
    text-align: center;
    margin-bottom: 16px;
  }

  & > a > p {
    font-size: 20px;
    font-weight: 700;
  }
`,j=r.div`
  display: flex;
  align-items: center;

  & > img {
    width: 146px;
    margin-right: 20px;
  }
`,R=r.div`
  display: flex;
  width: 206px;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: column;

  & > span {
    font-size: 16px;
    font-weight: 600;
  }

  & > span > p {
    font-size: 16px;
    font-weight: 400;
  }
`,a=({title:s,url:n,imageUrl:l,address:x,workDays:t,phone:d,email:p,addressUrl:c})=>(console.log(t),e.jsxs(f,{children:[e.jsx("a",{href:n,children:e.jsx("h2",{children:s})}),e.jsxs(j,{children:[e.jsx("img",{src:l,alt:l}),e.jsxs(R,{children:[e.jsxs("span",{children:["Time :",t===null?e.jsx("p",{children:"day and night"}):t.map(b=>{})]}),e.jsxs("span",{children:["Address:",e.jsx("p",{children:e.jsx("a",{href:c,children:x})})]}),e.jsxs("span",{children:["Email:",e.jsx("p",{children:p?e.jsx("a",{href:`mailto:${p}`,children:p}):"phone only"})]}),e.jsxs("span",{children:["Phone:",e.jsx("p",{children:d?e.jsx("a",{href:`tel:${d}`,children:d}):"email only"})]})]})]})]}));a.propTypes={id:i.string.isRequired,title:i.string.isRequired,url:i.string.isRequired,imageUrl:i.string.isRequired,address:i.string.isRequired,workDays:i.string.isRequired,phone:i.string.isRequired,email:i.string.isRequired,addressUrl:i.string.isRequired};const q=r.div`
  & > h1 {
    display: flex;
    margin-top: 80px;
    margin-bottom: 60px;
    justify-content: center;
  }
`,w=r.ul`
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
`,y=s=>s.friends.friends,o=()=>{const s=h(y);return e.jsxs(q,{children:[e.jsx("h1",{children:"Our friends"}),s.length>0&&e.jsx(w,{children:s.map(n=>e.jsx(a,{...n},n._id))})]})};o.propTypes={id:i.string.isRequired,title:i.string.isRequired,url:i.string.isRequired,imageUrl:i.string.isRequired,address:i.string.isRequired,workDays:i.string.isRequired,phone:i.string.isRequired,email:i.string.isRequired,addressUrl:i.string.isRequired};const E=()=>{const s=g();return u.useEffect(()=>{s(m())},[s]),e.jsx(o,{})};export{E as default};
