import{s as n,r as c,C as d,j as o}from"./index-113dc99f.js";const p=n.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
  /* top: -112px; */

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
    min-height: 354px;
    border-radius: 40px;
    padding: 32px 32px 24px 32px;

    /* justify-content: space-between; */
  }
`,x=document.querySelector("#modal-root");function m({active:a,onClose:e,children:s}){c.useEffect(()=>{const t=i=>{i.code==="Escape"&&e(!1)};window.addEventListener("keydown",t)},[e]);const r=t=>{t.currentTarget===t.target&&e(!1)};return d.createPortal(o.jsx(p,{className:a?"active":"",onClick:r,children:o.jsx(l,{className:a?"active":"",children:s})}),x)}export{m as M};
