import{s as e,N as n,j as r,R as t,I as o}from"./index-13f030ea.js";import{p as s,a as p,b as i}from"./bg-mob@1x-9dd97546.js";const a="/pet-app-frontend/assets/error-desk-9c84cef6.png",d="/pet-app-frontend/assets/error-desk2-a7dba45b.png",c="/pet-app-frontend/assets/error-tab-e53d6a20.png",x="/pet-app-frontend/assets/error-tab2-e0c2401f.png",f="/pet-app-frontend/assets/error-mob-d3ab3fb4.png",m="/pet-app-frontend/assets/error-mob2-8584f464.png",g=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${s});

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${p});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${i});
    background-repeat: no-repeat;
    background-position: cover;
  }
`,l=e.h2`
  font-size: 32px;
  text-align: center;
  margin-top: 71px;
  margin-bottom: 80px;
  @media screen and (max-width: 767px) {
    margin-top: 84px;
  }
`,u=e.picture`
  display: inline-flex;
  margin: 0 auto;
`,b=e(n)`
  color: #fef9f9;
  font-size: 16px;
  padding: 8px 0;
  width: 248px;
  font-weight: 700;
  letter-spacing: 0.64px;
  background-color: #54adff;
  border-radius: 40px;
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
`,j=()=>r.jsx(t,{children:r.jsxs(g,{children:[r.jsx(l,{children:" Ooops! This page is not found :("}),r.jsxs(u,{children:[r.jsx("source",{media:"(min-width: 1280px)",srcSet:`${a} 1x, ${d} 2x`,alt:"Error page"}),r.jsx("source",{media:"(min-width: 768px)",srcSet:`${c} 1x, ${x} 2x`,alt:"Error page"}),r.jsx("source",{media:"(min-width: 320px)",srcSet:`${f} 1x, ${m} 2x`,alt:"Error page"}),r.jsx("img",{src:a,alt:"Error page"})]}),r.jsxs(b,{to:"/main",children:["To main page",r.jsx(o,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})});export{j as default};
