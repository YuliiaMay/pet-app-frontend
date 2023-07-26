import{s as a,a as j,e as H,j as e,P as F,I as v,f as W,d as $,i as P,R as I}from"./index-1a738a8c.js";import{u as L}from"./useDispatch-c7d0166c.js";const Y=t=>t.notices.items,B="/pet-app-frontend/assets/defaultPoster-d1161abc.jpeg",E=t=>t||B,O=t=>t.replace(/[.\-/\\\s]/g,"");var U=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,Z=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,J=/[^-+\dA-Z]/g;function G(t,r,o,d){if(arguments.length===1&&typeof t=="string"&&!/\d/.test(t)&&(r=t,t=void 0),t=t||t===0?t:new Date,t instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");r=String(C[r]||r||C.default);var l=r.slice(0,4);(l==="UTC:"||l==="GMT:")&&(r=r.slice(4),o=!0,l==="GMT:"&&(d=!0));var i=function(){return o?"getUTC":"get"},u=function(){return t[i()+"Date"]()},y=function(){return t[i()+"Day"]()},f=function(){return t[i()+"Month"]()},h=function(){return t[i()+"FullYear"]()},c=function(){return t[i()+"Hours"]()},g=function(){return t[i()+"Minutes"]()},b=function(){return t[i()+"Seconds"]()},s=function(){return t[i()+"Milliseconds"]()},p=function(){return o?0:t.getTimezoneOffset()},D=function(){return R(t)},M=function(){return q(t)},T={d:function(){return u()},dd:function(){return m(u())},ddd:function(){return x.dayNames[y()]},DDD:function(){return _({y:h(),m:f(),d:u(),_:i(),dayName:x.dayNames[y()],short:!0})},dddd:function(){return x.dayNames[y()+7]},DDDD:function(){return _({y:h(),m:f(),d:u(),_:i(),dayName:x.dayNames[y()+7]})},m:function(){return f()+1},mm:function(){return m(f()+1)},mmm:function(){return x.monthNames[f()]},mmmm:function(){return x.monthNames[f()+12]},yy:function(){return String(h()).slice(2)},yyyy:function(){return m(h(),4)},h:function(){return c()%12||12},hh:function(){return m(c()%12||12)},H:function(){return c()},HH:function(){return m(c())},M:function(){return g()},MM:function(){return m(g())},s:function(){return b()},ss:function(){return m(b())},l:function(){return m(s(),3)},L:function(){return m(Math.floor(s()/10))},t:function(){return c()<12?x.timeNames[0]:x.timeNames[1]},tt:function(){return c()<12?x.timeNames[2]:x.timeNames[3]},T:function(){return c()<12?x.timeNames[4]:x.timeNames[5]},TT:function(){return c()<12?x.timeNames[6]:x.timeNames[7]},Z:function(){return d?"GMT":o?"UTC":K(t)},o:function(){return(p()>0?"-":"+")+m(Math.floor(Math.abs(p())/60)*100+Math.abs(p())%60,4)},p:function(){return(p()>0?"-":"+")+m(Math.floor(Math.abs(p())/60),2)+":"+m(Math.floor(Math.abs(p())%60),2)},S:function(){return["th","st","nd","rd"][u()%10>3?0:(u()%100-u()%10!=10)*u()%10]},W:function(){return D()},WW:function(){return m(D())},N:function(){return M()}};return r.replace(U,function(n){return n in T?T[n]():n.slice(1,n.length-1)})}var C={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},x={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},m=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return String(r).padStart(o,"0")},_=function(r){var o=r.y,d=r.m,l=r.d,i=r._,u=r.dayName,y=r.short,f=y===void 0?!1:y,h=new Date,c=new Date;c.setDate(c[i+"Date"]()-1);var g=new Date;g.setDate(g[i+"Date"]()+1);var b=function(){return h[i+"Date"]()},s=function(){return h[i+"Month"]()},p=function(){return h[i+"FullYear"]()},D=function(){return c[i+"Date"]()},M=function(){return c[i+"Month"]()},T=function(){return c[i+"FullYear"]()},n=function(){return g[i+"Date"]()},z=function(){return g[i+"Month"]()},A=function(){return g[i+"FullYear"]()};return p()===o&&s()===d&&b()===l?f?"Tdy":"Today":T()===o&&M()===d&&D()===l?f?"Ysd":"Yesterday":A()===o&&z()===d&&n()===l?f?"Tmw":"Tomorrow":u},R=function(r){var o=new Date(r.getFullYear(),r.getMonth(),r.getDate());o.setDate(o.getDate()-(o.getDay()+6)%7+3);var d=new Date(o.getFullYear(),0,4);d.setDate(d.getDate()-(d.getDay()+6)%7+3);var l=o.getTimezoneOffset()-d.getTimezoneOffset();o.setHours(o.getHours()-l);var i=(o-d)/(864e5*7);return 1+Math.floor(i)},q=function(r){var o=r.getDay();return o===0&&(o=7),o},K=function(r){return(String(r).match(Z)||[""]).pop().replace(J,"").replace(/GMT\+0000/g,"UTC")};function V(t){if(!t)return;const r=new Date(t);return G(r,"dd.mm.yyyy")}function Q(t){if(!t)return;const r=new Date,o=new Date(r.getFullYear(),r.getMonth(),r.getDate()),d=new Date(t),l=new Date(o.getFullYear(),d.getMonth(),d.getDate());let i;return i=o.getFullYear()-d.getFullYear(),o<l&&(i=i-1),i}const X=a.div`
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
`,te=document.querySelector("#modal-root");function ne({active:t,onClose:r,children:o}){j.useEffect(()=>{const l=i=>{i.code==="Escape"&&r(!1)};window.addEventListener("keydown",l)},[r]);const d=l=>{l.currentTarget===l.target&&r(!1)};return H.createPortal(e.jsx(X,{className:t?"active":"",onClick:d,children:e.jsx(ee,{className:t?"active":"",children:o})}),te)}const re=a.div`
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
`;function S({active:t,setShow:r,card:o}){if(!o)return;const{imgUrl:d,name:l,birthday:i,breed:u,place:y,sex:f,email:h,phone:c,text:g,favorite:b}=o,s=()=>{r(!1)},p=()=>{},D=M=>M?e.jsxs(e.Fragment,{children:["Favorite",e.jsx(v,{iconName:"icon-heart-full",width:"24px",height:"24px",stroke:"#C5DFF6",fill:"#C5DFF6"})]}):e.jsxs(e.Fragment,{children:["Add to",e.jsx(v,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#ffffff",fill:"#ffffff"})]});return e.jsx(e.Fragment,{children:e.jsx(ne,{onClose:r,active:t,children:e.jsxs(re,{children:[e.jsx(ie,{onClick:s,children:e.jsx(v,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})}),e.jsxs(oe,{children:[e.jsxs(ae,{children:[e.jsx("span",{children:"In good hands"}),e.jsx(se,{src:E(d),alt:"name image"})]}),e.jsxs(ce,{children:[e.jsx(de,{children:"Cute dog looking for a home"}),e.jsx(le,{children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Name:"}),e.jsx("td",{children:e.jsx("span",{children:l})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Birthday:"}),e.jsx("td",{children:e.jsx("span",{children:V(i)})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Type:"}),e.jsx("td",{children:e.jsx("span",{children:u})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Place:"}),e.jsx("td",{children:e.jsx("span",{children:y})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"The sex:"}),e.jsx("td",{children:e.jsx("span",{children:f})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email:"}),e.jsx("td",{children:e.jsx("a",{href:`mailto:${h}`,children:h})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Phone:"}),e.jsx("td",{children:e.jsx("a",{href:`tel:${c}`,children:O(c)})})]})]})})})]})]}),e.jsxs(pe,{children:["Comments:",e.jsx("span",{children:g})]}),e.jsxs(fe,{children:[e.jsx(he,{onClick:p,children:D(b)}),e.jsx(ue,{href:`tel:${c}`,children:"Contact"})]})]})})})}S.propTypes={active:F.bool,setShow:F.func,card:F.object};const xe=a.ul`
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
        color: ${t=>t.theme.color.wight};
       & use {
        stroke: ${t=>t.theme.color.wight};
         fill: ${t=>t.theme.color.wight};
    }        
  }
`,ke=()=>{const[t,r]=j.useState([]),[o,d]=j.useState(!0),[l,i]=j.useState(!1),[u,y]=j.useState(null),f=W(),h=$(Y),c=L();j.useEffect(()=>{o&&(c(P()),d(!1))},[c,o]);const g=s=>{i(!0),y(s)},b=s=>{let p=s;return p.length>20&&(p=s.slice(0,20)+"..."),p};return j.useEffect(()=>{let s=[];f.pathname==="/notices/sell"?s=h.filter(p=>p.category==="sale"):f.pathname==="/notices/lost-found"?s=h.filter(p=>p.category==="lost/found"):f.pathname==="/notices/for-free"&&(s=h.filter(p=>p.category==="in good hands")),r(s)},[f.pathname,h]),e.jsxs(I,{children:[e.jsx(xe,{children:t.map(s=>e.jsxs(me,{children:[e.jsxs(ge,{children:[e.jsx(ye,{src:s.imgUrl,alt:"pet",loading:"lazy"}),e.jsxs(be,{children:[e.jsx(we,{children:s.category}),e.jsx(ve,{children:e.jsx(je,{"aria-label":"add to favorites",children:e.jsx(v,{iconName:"icon-heart",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})})})]}),e.jsxs(De,{children:[e.jsxs(k,{children:[e.jsx(v,{iconName:"icon-location",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(N,{children:s.place})]}),e.jsxs(k,{children:[e.jsx(v,{iconName:"icon-clock",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsxs(N,{children:[Q(s.birthday)," year"]})]}),e.jsxs(k,{children:[e.jsx(v,{iconName:s.sex==="female"?"icon-female":"icon-male",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"}),e.jsx(N,{children:s.sex})]})]})]}),e.jsxs(Me,{children:[e.jsx(Te,{children:b(s.title)}),e.jsxs(Fe,{onClick:()=>g(s),children:[e.jsx("span",{children:"Learn more"}),e.jsx(v,{iconName:"icon-pawprint",width:"24px",height:"24px",stroke:"#54ADFF",fill:"#54ADFF"})]})]})]},s._id))}),e.jsx(S,{active:l,setShow:i,card:u})]})};ke.propTypes={props:F.object};export{ke as default};
