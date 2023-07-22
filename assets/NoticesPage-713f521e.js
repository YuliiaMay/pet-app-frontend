import{R as i,s,r as x,j as a}from"./index-7219d2d4.js";var f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=i.createContext&&i.createContext(f),l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l.apply(this,arguments)},p=globalThis&&globalThis.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t};function m(e){return e&&e.map(function(r,t){return i.createElement(r.tag,l({key:t},r.attr),m(r.child))})}function b(e){return function(r){return i.createElement(y,l({attr:l({},e.attr)},r),m(e.child))}}function y(e){var r=function(t){var n=e.attr,o=e.size,u=e.title,g=p(e,["attr","size","title"]),h=o||t.size||"1em",c;return t.className&&(c=t.className),e.className&&(c=(c?c+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,g,{className:c,style:l(l({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&i.createElement("title",null,u),e.children)};return d!==void 0?i.createElement(d.Consumer,null,function(t){return r(t)}):r(f)}function v(e){return b({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(e)}const w=s.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-items: center;
`,S=s.h2`
  font-size: 48px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
`,j=s.form`
  display: flex;
  position: relative;
  align-items: center;
`,O=s.input`
  width: 608px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  /* box-shadow: ${e=>e.theme.border.shadow};
  color: ${e=>e.theme.color.yellow}; */
  &:focus {
    outline: none;
  }
`,z=s.button`
  position: absolute;
  right: 20px;
  border: none;
  background-color: inherit;
`;s.button`
  position: absolute;
  right: 20px;
  border: none;
  background-color: inherit;
`;const C=()=>{const[e,r]=x.useState(""),t=o=>{const u=o.currentTarget.value.toLowerCase();r(u)};console.log(e);const n=o=>{o.preventDefault(),e.trim()!==""&&r("")};return a.jsxs(w,{children:[a.jsx(S,{children:"Find your favorite pet"}),a.jsxs(j,{onSubmit:n,children:[a.jsx(O,{type:"text",placeholder:"Search",value:e,onChange:t}),a.jsx(z,{type:"submit",children:a.jsx(v,{color:"#54ADFF",size:24})})]})]})},E=s.section`
  display: flex;
`,_=()=>a.jsx(E,{children:a.jsx(C,{})});export{_ as default};
