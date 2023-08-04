import{s as e,N as a,j as r,R as t,I as o}from"./index-c4b9f27e.js";import{b as s,a as i,c as p}from"./bg-mob@1x-38a1584a.js";const n="/pet-app-frontend/assets/error-desk-9c84cef6.png",d="/pet-app-frontend/assets/error-desk2-a7dba45b.png",c="/pet-app-frontend/assets/error-tab-e53d6a20.png",x="/pet-app-frontend/assets/error-tab2-e0c2401f.png",f="/pet-app-frontend/assets/error-mob-d3ab3fb4.png",g="/pet-app-frontend/assets/error-mob2-8584f464.png",m=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${s});

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${i});
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background-image: url(${p});
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
`,b=e.picture`
  display: inline-flex;
  margin: 0 auto;
`,u=e(a)`
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
`,k=()=>r.jsx(t,{children:r.jsxs(m,{children:[r.jsx(l,{children:" Ooops! This page is not found :("}),r.jsxs(b,{children:[r.jsx("source",{media:"(min-width: 1280px)",srcSet:`${n} 1x, ${d} 2x`,alt:"Error page"}),r.jsx("source",{media:"(min-width: 768px)",srcSet:`${c} 1x, ${x} 2x`,alt:"Error page"}),r.jsx("source",{media:"(min-width: 320px)",srcSet:`${f} 1x, ${g} 2x`,alt:"Error page"}),r.jsx("img",{src:n,alt:"Error page"})]}),r.jsxs(u,{to:"/main",children:["To main page",r.jsx(o,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]})]})});export{k as default};
