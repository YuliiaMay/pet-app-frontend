import{s as a,a as j,e as H,j as e,P as F,I as v,f as W,d as P,i as $,R as I}from"./index-8755cb88.js";import{u as L}from"./useDispatch-137ba32f.js";const Y=t=>t.notices.items,B="/pet-app-frontend/assets/defaultPoster-d1161abc.jpeg",E=t=>t||B,O=t=>t.replace(/[.\-/\\\s]/g,"");var U=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,Z=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,J=/[^-+\dA-Z]/g;function G(t,r,o,s){if(arguments.length===1&&typeof t=="string"&&!/\d/.test(t)&&(r=t,t=void 0),t=t||t===0?t:new Date,t instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");r=String(C[r]||r||C.default);var l=r.slice(0,4);(l==="UTC:"||l==="GMT:")&&(r=r.slice(4),o=!0,l==="GMT:"&&(s=!0));var i=function(){return o?"getUTC":"get"},h=function(){return t[i()+"Date"]()},y=function(){return t[i()+"Day"]()},p=function(){return t[i()+"Month"]()},f=function(){return t[i()+"FullYear"]()},c=function(){return t[i()+"Hours"]()},m=function(){return t[i()+"Minutes"]()},d=function(){return t[i()+"Seconds"]()},g=function(){return t[i()+"Milliseconds"]()},b=function(){return o?0:t.getTimezoneOffset()},D=function(){return R(t)},M=function(){return q(t)},T={d:function(){return h()},dd:function(){return x(h())},ddd:function(){return u.dayNames[y()]},DDD:function(){return _({y:f(),m:p(),d:h(),_:i(),dayName:u.dayNames[y()],short:!0})},dddd:function(){return u.dayNames[y()+7]},DDDD:function(){return _({y:f(),m:p(),d:h(),_:i(),dayName:u.dayNames[y()+7]})},m:function(){return p()+1},mm:function(){return x(p()+1)},mmm:function(){return u.monthNames[p()]},mmmm:function(){return u.monthNames[p()+12]},yy:function(){return String(f()).slice(2)},yyyy:function(){return x(f(),4)},h:function(){return c()%12||12},hh:function(){return x(c()%12||12)},H:function(){return c()},HH:function(){return x(c())},M:function(){return m()},MM:function(){return x(m())},s:function(){return d()},ss:function(){return x(d())},l:function(){return x(g(),3)},L:function(){return x(Math.floor(g()/10))},t:function(){return c()<12?u.timeNames[0]:u.timeNames[1]},tt:function(){return c()<12?u.timeNames[2]:u.timeNames[3]},T:function(){return c()<12?u.timeNames[4]:u.timeNames[5]},TT:function(){return c()<12?u.timeNames[6]:u.timeNames[7]},Z:function(){return s?"GMT":o?"UTC":K(t)},o:function(){return(b()>0?"-":"+")+x(Math.floor(Math.abs(b())/60)*100+Math.abs(b())%60,4)},p:function(){return(b()>0?"-":"+")+x(Math.floor(Math.abs(b())/60),2)+":"+x(Math.floor(Math.abs(b())%60),2)},S:function(){return["th","st","nd","rd"][h()%10>3?0:(h()%100-h()%10!=10)*h()%10]},W:function(){return D()},WW:function(){return x(D())},N:function(){return M()}};return r.replace(U,function(n){return n in T?T[n]():n.slice(1,n.length-1)})}var C={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},u={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},x=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return String(r).padStart(o,"0")},_=function(r){var o=r.y,s=r.m,l=r.d,i=r._,h=r.dayName,y=r.short,p=y===void 0?!1:y,f=new Date,c=new Date;c.setDate(c[i+"Date"]()-1);var m=new Date;m.setDate(m[i+"Date"]()+1);var d=function(){return f[i+"Date"]()},g=function(){return f[i+"Month"]()},b=function(){return f[i+"FullYear"]()},D=function(){return c[i+"Date"]()},M=function(){return c[i+"Month"]()},T=function(){return c[i+"FullYear"]()},n=function(){return m[i+"Date"]()},z=function(){return m[i+"Month"]()},A=function(){return m[i+"FullYear"]()};return b()===o&&g()===s&&d()===l?p?"Tdy":"Today":T()===o&&M()===s&&D()===l?p?"Ysd":"Yesterday":A()===o&&z()===s&&n()===l?p?"Tmw":"Tomorrow":h},R=function(r){var o=new Date(r.getFullYear(),r.getMonth(),r.getDate());o.setDate(o.getDate()-(o.getDay()+6)%7+3);var s=new Date(o.getFullYear(),0,4);s.setDate(s.getDate()-(s.getDay()+6)%7+3);var l=o.getTimezoneOffset()-s.getTimezoneOffset();o.setHours(o.getHours()-l);var i=(o-s)/(864e5*7);return 1+Math.floor(i)},q=function(r){var o=r.getDay();return o===0&&(o=7),o},K=function(r){return(String(r).match(Z)||[""]).pop().replace(J,"").replace(/GMT\+0000/g,"UTC")};function V(t){if(!t)return;const r=new Date(t);return G(r,"dd.mm.yyyy")}function Q(t){if(!t)return;const r=new Date,o=new Date(r.getFullYear(),r.getMonth(),r.getDate()),s=new Date(t),l=new Date(o.getFullYear(),s.getMonth(),s.getDate());let i;return i=o.getFullYear()-s.getFullYear(),o<l&&(i=i-1),i}const X=a.div`
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
`,ee=a.div`
  /* top: -112px; */
  border-radius: 40px;

  background: #ffffff;

  transform: scale(0.5);
  transition: 0.5s all;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  &.active {
    transform: scale(1);
  }
`,te=document.querySelector("#modal-root");function ne({active:t,onClose:r,children:o}){j.useEffect(()=>{const l=i=>{i.code==="Escape"&&r(!1)};window.addEventListener("keydown",l)},[r]);const s=l=>{l.currentTarget===l.target&&r(!1)};return H.createPortal(e.jsx(X,{className:t?"active":"",onClick:s,children:e.jsx(ee,{className:t?"active":"",children:o})}),te)}const re=a.div`
  width: 280px;

  display: flex;
  padding: 45px 20px 16px 20px;

  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 681px;
    min-height: 540px;

    padding: 32px 32px 24px 32px;

    justify-content: space-between;
  }
`,ie=a.div`
  width: 24px;
  height: 24px;

  position: absolute;

  right: 18px;
  top: 18px;

  transition: 0.5s;

  color: #54adff;
  cursor: pointer;
  use {
    padding: 10px;
  }
  :hover {
    use {
      fill: #3cd95b;
      stroke: #3cd95b;
    }
  }
  @media screen and (min-width: 768px) {
    right: 24px;
    top: 24px;
  }
`,oe=a.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;

    display: flex;
  }
`,ae=a.div`
  max-width: 240px;
  height: 240px;

  margin: 0 auto;

  overflow: hidden;
  /* object-fit: cover; */

  border-radius: 0px 0px 40px 40px;
  span {
    position: absolute;
    margin-top: 16px;
    padding: 11px;

    font-size: 14px;
    font-weight: 500;

    border-radius: 0px 20px 20px 0px;
    background: #cce4fb;
  }
  @media screen and (min-width: 768px) {
    max-width: 262px;
    height: 298px;

    margin: 0;
  }
`,se=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,de=a.h2`
  width: 230px;
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 28px;

  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`,ce=a.div`
  display: block;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,le=a.div`
  font-size: 16px;
  table {
    margin-bottom: 8px;
  }
  table,
  td,
  th {
    height: 25px;
    padding-right: 20px;
    font-weight: 600;
  }
  td {
    font-weight: 600;
  }
  span {
    font-weight: 200;
  }
  a {
    font-weight: 200;

    text-decoration-line: underline;

    color: #ffc107;
  }
  @media screen and (min-width: 768px) {
    th {
      height: 27px;
      padding-right: 50px;
      font-weight: 600;
    }
  }
`,pe=a.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.64px;
  margin-bottom: 10px;

  span {
    margin-left: 3px;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: auto;
  }
`;a.p``;const fe=a.div`
  display: flex;
  flex-direction: column-reverse;

  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    display: inline-flex;
    justify-content: end;

    flex-direction: row;
    align-items: center;

    gap: 17px;
  }
`,he=a.button`
  display: flex;

  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  font-size: 16px;

  letter-spacing: 0.64px;
  font-weight: 700;

  margin-top: 8px;
  padding: 8px 20px;

  color: #fef9f9;
  border-radius: 40px;
  background: #54adff;
  border: 2px solid #54adff;
  &:hover {
    background: #ffffff;
    border: 2px solid #54adff;

    color: #54adff;

    & use {
      stroke: #54adff;
      fill: #54adff;
    }
  }
  svg {
    margin-left: 8px;
  }

  @media screen and (min-width: 768px) {
    /* display: inline-flex; */
    /* justify-content: end; */
    /* padding: 8px 20px; */
    margin-top: 0;
  }
`,ue=a.a`
  height: 25px;
  display: flex;
  padding: 8px 30px;

  justify-content: center;
  align-items: center;
  border-radius: 40px;

  font-size: 16px;

  font-weight: 700;
  letter-spacing: 0.64px;

  color: #54adff;
  border: 2px solid #54adff;

  &:hover {
    border: 2px solid #54adff;
    background-color: #54adff;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    /* display: inline-flex;
    justify-content: end; */
  }
`;function S({active:t,setShow:r,card:o}){if(!o)return;const{imgUrl:s,name:l,birthday:i,breed:h,place:y,sex:p,email:f,phone:c,text:m,favorite:d}=o,g=()=>{r(!1)},b=()=>{},D=M=>M?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(v,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(v,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsx(e.Fragment,{children:e.jsx(ne,{onClose:r,active:t,children:e.jsxs(re,{children:[e.jsx(ie,{onClick:g,children:e.jsx(v,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(oe,{children:[e.jsxs(ae,{children:[e.jsx("span",{children:"In good hands"}),e.jsx(se,{src:E(s),alt:"name image"})]}),e.jsxs(ce,{children:[e.jsx(de,{children:"Cute dog looking for a home"}),e.jsx(le,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:l})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:V(i)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:h})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:y})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:p})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${f}`,children:f})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${c}`,children:O(c)})})]})]})})})]})]}),e.jsxs(pe,{children:["Comments:",e.jsx("span",{children:m})]}),e.jsxs(fe,{children:[e.jsx(he,{onClick:b,children:D(d)}),e.jsx(ue,{href:`tel:${c}`,children:"Contact"})]})]})})})}S.propTypes={active:F.bool,setShow:F.func,card:F.object};const xe=a.ul`
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
`,me=a.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 24px;

  border-radius: 0 0 40px 40px;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: ${t=>t.theme.color.wight};

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`,ge=a.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`,ye=a.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`,be=a.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`,we=a.p`
  align-items: center;
  background-color: ${t=>t.theme.background.lightBlue};
  border-radius: 0 16px 16px 0;
  color: ${t=>t.theme.color.main};
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  line-height: 19px;

  width: 126px;
  height: 32px;
`,ve=a.div`
  display: block;
`,je=a.button`
  align-items: center;
  background-color: ${t=>t.theme.background.lightBlue};
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
  &:hover,
  focus {
    // background-color: #3498db;
    transition: color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`,De=a.ul`
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
`,k=a.li`
    cursor: pointer;
    align-items: center;
    background-color: ${t=>t.theme.background.lightBlue};
    border-radius: 16px;
    color: ${t=>t.theme.color.main};
    stroke: ${t=>t.theme.color.blue};
    display: flex;
    gap: 3px;
    justify-content: center;
    width: 81px;
    height: 28px;
    padding: 0 5px;

    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);

    &:hover,
    &:focus {
        background-color: ${t=>t.theme.background.accentBlue} 
        transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
        color: ${t=>t.theme.color.wight}
    }
    &:hover > svg {
    stroke: ${t=>t.theme.color.wight}
    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
  }
`,N=a.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`,Me=a.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  padding: 20px;
`,Te=a.p`
  display: flex;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`,Fe=a.button`
    align-items: center;
    background-color: transparent;
    border: 2px solid ${t=>t.theme.background.accentBlue};
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
        color: ${t=>t.theme.color.wight}
        
    }
     &:hover svg use,
     &:focus svg use {
    fill: ${t=>t.theme.color.wight}
    transition: 250ms cubic-bezier(0.215,0.61,0.355,1);
  }
`,ke=()=>{const[t,r]=j.useState([]),[o,s]=j.useState(!0),[l,i]=j.useState(!1),[h,y]=j.useState(null),p=W(),f=P(Y),c=L();j.useEffect(()=>{o&&(c($()),s(!1))},[c,o]);const m=d=>{i(!0),y(d)};return j.useEffect(()=>{let d=[];p.pathname==="/notices/sell"?d=f.filter(g=>g.category==="sale"):p.pathname==="/notices/lost-found"?d=f.filter(g=>g.category==="lost/found"):p.pathname==="/notices/for-free"&&(d=f.filter(g=>g.category==="in good hands")),r(d)},[p.pathname,f]),e.jsxs(I,{children:[e.jsx(xe,{children:t.map(d=>e.jsxs(me,{children:[e.jsxs(ge,{children:[e.jsx(ye,{src:d.imgUrl,alt:"pet",loading:"lazy"}),e.jsxs(be,{children:[e.jsx(we,{children:d.category}),e.jsx(ve,{children:e.jsx(je,{"aria-label":"add to favorites",children:e.jsx(v,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})})]}),e.jsxs(De,{children:[e.jsxs(k,{children:[e.jsx(v,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(N,{children:d.place})]}),e.jsxs(k,{children:[e.jsx(v,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsxs(N,{children:[Q(d.birthday)," year"]})]}),e.jsxs(k,{children:[e.jsx(v,{iconName:d.sex==="Female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(N,{children:d.sex})]})]})]}),e.jsxs(Me,{children:[e.jsx(Te,{children:"Сute dog looking for a home"}),e.jsxs(Fe,{onClick:()=>m(d),children:[e.jsx("span",{children:"Learn more"}),e.jsx(v,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})]})]})]},d._id))}),e.jsx(S,{active:l,setShow:i,card:h})]})};ke.propTypes={props:F.object};export{ke as default};
