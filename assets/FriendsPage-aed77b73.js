import{s as n,a as t,r as l,j as i,g as A,u as g,i as w}from"./index-941173e4.js";const f=n.li`
  width: 256px;
  padding: 16px 12px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  background-color: ${e=>e.theme.background.wight};

  @media screen and (min-width: 768px) {
    width: 312px;
  }

  @media screen and (min-width: 1280px) {
    width: 371px;
  }
`,u=n.div`
  display: grid;
  justify-content: center;
  align-items: center;

  & > a {
    display: inline-block;
    justify-content: center;
    color: ${e=>e.theme.color.blue};
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: ${e=>e.theme.color.yellow};
    }
  }
`,j=n.div`
  display: flex;
  align-items: center;

  & > img {
    width: 100px;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
      width: 124px;
      margin-right: 20px;
    }

    @media screen and (min-width: 1280px) {
      width: 146px;
    }
  }
`,y=n.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: column;

  & > span {
    font-size: 12px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }

  & > span > p {
    font-size: 12px;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }
`,c=n.a`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${e=>e.theme.color.blue};
  }
`,C="data:image/png;base64,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",U=n.div`
  position: relative;
  display: flex;
  align-items: center;
`,B=n.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-weight: 400;
  }
`,O=n.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & > span {
    font-weight: 400;
  }
`,b=n.ul`
  position: absolute;
  width: 90px;
  top: 100%;
  left: 0;
  padding: 8px;
  border: 1px solid #54adff;
  border-radius: 8px;
  background-color: ${e=>e.theme.background.wight};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  z-index: 1;

  @media screen and (min-width: 1280px) {
    width: 102px;
    padding: 12px;
  }

  & > li {
    display: flex;
    font-size: 10px;
    font-weight: 500;
    justify-content: flex-start;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (min-width: 1280px) {
      font-size: 12px;
      width: 102px;
    }
  }

  & > li > span {
    font-size: 10px;
    font-weight: 500;
    width: 15px;
    margin-right: 9px;

    @media screen and (min-width: 1280px) {
      font-size: 12px;
      margin-right: 12px;
    }
  }
`,h=({workDays:e})=>{const[s,x]=l.useState(!1),r=e[0],p=()=>{x(!s)},d=["MN","TU","WE","TH","FR","SA","SU"];return i.jsxs(U,{children:[r.from===""&&r.to===""?i.jsxs(B,{children:[i.jsx("p",{children:"Time:"}),i.jsx("span",{children:"day and night"})]}):i.jsxs(O,{onClick:p,style:{color:s?"#54ADFF":"#111111"},children:[i.jsx("p",{children:"Time:"}),i.jsxs("span",{children:[r.from," - ",r.to]})]}),s&&i.jsx(b,{children:e.map((o,a)=>i.jsxs("li",{children:[i.jsxs("span",{children:[" ",d[a]]})," ",o.from," - ",o.to]},a))})]})};h.propTypes={workDays:t.array.isRequired};const m=({title:e,url:s,imageUrl:x,address:r,workDays:p,phone:d,email:o,addressUrl:a})=>i.jsxs(f,{children:[i.jsx(u,{children:i.jsx("a",{href:s,target:"_blank",children:e})}),i.jsxs(j,{children:[i.jsx("img",{src:x||C,alt:x}),i.jsxs(y,{children:[i.jsx("span",{children:i.jsx(h,{workDays:p})}),i.jsxs("span",{children:["Address:",r===""?i.jsx("p",{children:"website only"}):i.jsx("p",{children:i.jsx(c,{href:a,children:r})})]}),i.jsxs("span",{children:["Email:",i.jsx("p",{children:o===""?i.jsx("p",{children:"phone or website only"}):i.jsx(c,{href:`mailto:${o}`,children:o})})]}),i.jsxs("span",{children:["Phone:",i.jsx("p",{children:d===""?i.jsx("p",{children:"email or website only"}):i.jsx(c,{href:`tel:${d}`,children:d})})]})]})]})]});m.propTypes={title:t.string.isRequired,url:t.string,imageUrl:t.string,address:t.string,workDays:t.array.isRequired,phone:t.string,email:t.string,addressUrl:t.string};const z=n.div`
  & > h1 {
    display: flex;
    font-size: 24px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 24px;
    justify-content: center;

    @media screen and (min-width: 768px) {
      font-size: 48px;
      margin-top: 80px;
      margin-bottom: 40px;
    }

    @media screen and (min-width: 1280px) {
      margin-bottom: 60px;
    }
  }
`,Y=n.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 75px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 69px;
    gap: 32px;
  }
`,v=e=>e.friends.friends,P=()=>{const e=A(v);return i.jsxs(z,{children:[i.jsx("h1",{children:"Our friends"}),e.length>0&&i.jsx(Y,{children:e.map(s=>i.jsx(m,{...s},s._id))})]})},I=()=>{const e=g();return l.useEffect(()=>{e(w())},[e]),i.jsx(P,{})};export{I as default};
