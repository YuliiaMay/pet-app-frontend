import{s as t,b as l,a as p,f as a,j as e,R as x,I as o,P as d}from"./index-ac0a176b.js";import{u as h}from"./useDispatch-82ea4742.js";const f=s=>s.notices.items,g=t.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  width: 100%;
  margin-bottom: 60px;

  gap: 24px; 
`,u=t.li`
    background-color: #fff;
    border-radius: 0 0 40px 40px;
    box-shadow: 3px 8px 14px rgba(136,198,253,.19);
    padding-bottom: 24px;
    width: 288px;
    height: 456px;
`,b=t.div`
    height: 288px;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
`,j=t.img`
    width: 288px;
    height: 288px;
    object-fit: cover;
`,m=t.div`
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    left: 0;
    position: absolute;
    right: 12px;
    top: 12px;
`,w=t.p`
    align-items: center;
    background-color: #cce4fb;
    border-radius: 0 16px 16px 0;
    color: #111;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
    line-height: 19px;
    padding: 11px 17px;
    width: 126px;
`,v=t.div`
`,y=t.button`
    align-items: center;
    background-color: #c5dff6;
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
`,F=t.ul`
    bottom: 12px;
    display: flex;
    justify-content: space-between;
    left: 8px;
    list-style: none;
    position: absolute;
    right: 8px;
`,n=t.li`
    cursor: pointer;
    align-items: center;
    background-color: #cce4fb;
    border-radius: 16px;
    color: #111;
    display: flex;
    gap: 3px;
    justify-content: center;
    width: 84px;
    &:hover, focus {
        background-color: #3498db;
        transition: background-color 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: #fff;
    }
`,r=t.span`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .04em;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // &:hover, focus {
    //     color: #fff;
    // }
`,k=t.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`,D=t.p`
    word-wrap: break-word;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    max-height: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 231px;
`,A=t.button`
    align-items: center;
    background-color: transparent;
    border: 2px solid #54adff;
    border-radius: 40px;
    color: #54adff;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    gap: 12px;
    height: 38px;
    justify-content: center;
    letter-spacing: .04em;
    line-height: 22px;
    margin: 0 auto;
    padding: 6px 28px;
    position: relative;
    width: 248px;
    &:hover, focus {
        background-color: #3498db;
        transition: background-color 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: #fff;
    }
`;t.span`
`;const z=()=>{const s=l(f),c=h();return p.useEffect(()=>{c(a())},[c]),e.jsx(x,{children:e.jsx(g,{children:s.map(i=>e.jsxs(u,{children:[e.jsxs(b,{children:[e.jsx(j,{src:i.imgUrl,alt:"pet",loading:"lazy"}),e.jsxs(m,{children:[e.jsx(w,{children:i.category}),e.jsx(v,{children:e.jsx(y,{"aria-label":"add to favorites",children:e.jsx(o,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})})]}),e.jsxs(F,{children:[e.jsxs(n,{children:[e.jsx(o,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(r,{children:i.place})]}),e.jsxs(n,{children:[e.jsx(o,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(r,{children:i.birthday})]}),e.jsxs(n,{children:[e.jsx(o,{iconName:i.sex==="Female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(r,{children:i.sex})]})]})]}),e.jsxs(k,{children:[e.jsx(D,{children:i.title}),e.jsxs(A,{children:[e.jsx("span",{children:"Learn more"}),e.jsx(o,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})]})]})]},i._id))})})};z.propTypes={props:d.object};export{z as default};
