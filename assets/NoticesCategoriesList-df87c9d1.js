import{s as t,c as l,a,f as p,j as i,R as d,I as n,P as x}from"./index-e79e555f.js";import{u as h}from"./useDispatch-009b4134.js";const g=e=>e.notices.items,u=t.ul`
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
`,m=t.li`
    display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 24px;

  border-radius: 0 0 40px 40px;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: ${e=>e.theme.color.wight};

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px){
    width: 288px;
  }
`,f=t.div`
    height: 288px;
    display: block;
    position: relative;
    width: 100%;
`,b=t.img`
   height: 100%;
    width: 100%;
    object-fit: cover;
`,w=t.div`
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    left: 0;
    position: absolute;
    right: 12px;
    top: 12px;
`,j=t.p`
    align-items: center;
    background-color: ${e=>e.theme.background.lightBlue}
    border-radius: 0 16px 16px 0;
    color: ${e=>e.theme.color.main};
    display: flex;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    line-height: 19px;
    padding: 11px 17px;
    width: 126px;
    height: 32px;
`,y=t.div`
display: block;
`,k=t.button`
    align-items: center;
    background-color: ${e=>e.theme.background.lightBlue};
    border: none;
    border-radius: 50%;
    color: transparent;
    display: flex;
    height: 40px;
    justify-content: center;
    line-height: 0;
    margin: 0;
    padding: 0;
    width: 40px;
    &:hover, focus {
        // background-color: #3498db;
        transition: color 250ms cubic-bezier(0.215,0.61,0.355,1);
    }
`,v=t.ul`
    bottom: 12px;
    display: flex;
    justify-content: center;
    gap: 12px;
    left: 8px;
    list-style: none;
    position: absolute;
    right: 8px;
    padding: 0;
    @media screen and (min-width: 768px) {
    left: 24px;
    right: 24px;

    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`,s=t.li`
    cursor: pointer;
    align-items: center;
    background-color: ${e=>e.theme.background.lightBlue};
    border-radius: 16px;
    color: ${e=>e.theme.color.main};
    stroke: ${e=>e.theme.color.blue};
    display: flex;
    gap: 3px;
    justify-content: center;
    width: 81px;
    height: 28px;
    padding: 0 5px;

    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);

    &:hover,
    &:focus {
        background-color: ${e=>e.theme.background.accentBlue} 
        transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: ${e=>e.theme.color.wight}
    }
    &:hover > svg {
    stroke: ${e=>e.theme.color.wight}
    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
  }
`,r=t.span`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .04em;
    line-height: 16px;
    
`,F=t.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
    padding: 20px
`,D=t.p`
     display: flex;
     padding: 20px;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
   
`,$=t.button`
    align-items: center;
    background-color: transparent;
    border: 2px solid ${e=>e.theme.background.accentBlue};
    border-radius: 40px;
    color: #54adff;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    gap: 12px;
    height: 38px;
    justify-content: center;
    letter-spacing: 0.64px;
    margin: auto;
    padding: 8px 28px 8px 28px;
    position: relative;
    width: 248px;
   &:hover,
    &:focus  {
        border: transparent;
        background: linear-gradient(315deg, rgb(65, 158, 241) 0%, rgb(155, 208, 255) 100%);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: ${e=>e.theme.color.wight}
        
    }
     &:hover svg use,
     &:focus svg use {
    fill: ${e=>e.theme.color.wight}
    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
  }
`,z=()=>{const e=l(g),c=h();return a.useEffect(()=>{c(p())},[c]),i.jsx(d,{children:i.jsx(u,{children:e.map(o=>i.jsxs(m,{children:[i.jsxs(f,{children:[i.jsx(b,{src:o.imgUrl,alt:"pet",loading:"lazy"}),i.jsxs(w,{children:[i.jsx(j,{children:o.category}),i.jsx(y,{children:i.jsx(k,{"aria-label":"add to favorites",children:i.jsx(n,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})})]}),i.jsxs(v,{children:[i.jsxs(s,{children:[i.jsx(n,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),i.jsx(r,{children:o.place})]}),i.jsxs(s,{children:[i.jsx(n,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),i.jsx(r,{children:o.birthday})]}),i.jsxs(s,{children:[i.jsx(n,{iconName:o.sex==="Female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),i.jsx(r,{children:o.sex})]})]})]}),i.jsxs(F,{children:[i.jsx(D,{children:"Сute dog looking for a home"}),i.jsxs($,{children:[i.jsx("span",{children:"Learn more"}),i.jsx(n,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})]})]})]},o._id))})})};z.propTypes={props:x.object};export{z as default};
