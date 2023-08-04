import{s as n,r as c,Q as d,j as o}from"./index-61069971.js";const p=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(43, 43, 43, 0.6);
  transition: 0.4s all;
  opacity: 0;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`,l=n.div`
  background: #ffffff;
  border-radius: 20px;
  transform: scale(0.5);
  transition: 0.5s all;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  &.active {
    transform: scale(1);
  }
  @media screen and (min-width: 768px) {
    width: 608px;
    margin: 0 auto;
    border-radius: 40px;
    padding: 12px 40px 60px;
  }
`,x=document.querySelector("#modal-root");function m({active:a,onClose:e,children:r}){c.useEffect(()=>{const t=i=>{i.code==="Escape"&&e(!1)};window.addEventListener("keydown",t)},[e]);const s=t=>{t.currentTarget===t.target&&e(!1)};return d.createPortal(o.jsx(p,{className:a?"active":"",onClick:s,children:o.jsx(l,{className:a?"active":"",children:r})}),x)}export{m as M};
