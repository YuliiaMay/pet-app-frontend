import{s as o,P as e,j as s,n as c}from"./index-d1279074.js";const f=o.li`
  width: 370px;
  height: 287px;
  padding: 16px 12px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  & > a > h2 {
    color: ${r=>r.theme.color.blue};
    text-align: center;
    margin-bottom: 16px;
  }

  & > a > p {
    font-size: 20px;
    font-weight: 700;
  }
`,x=o.div`
  display: flex;
  align-items: center;

  & > img {
    width: 146px;
    margin-right: 20px;
  }
`,k=o.div`
  display: flex;
  width: 206px;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: column;

  & > span {
    font-size: 16px;
    font-weight: 600;
  }

  & > span > p {
    font-size: 16px;
    font-weight: 400;
  }
`,g=({title:r,url:a,imageUrl:p,address:l,workDays:d,phone:t,email:i,addressUrl:n})=>s.jsxs(f,{children:[s.jsx("a",{href:a,children:s.jsx("h2",{children:r})}),s.jsxs(x,{children:[s.jsx("img",{src:p,alt:p}),s.jsxs(k,{children:[s.jsxs("span",{children:["Time : ",s.jsx("p",{children:"12-00"})]}),s.jsxs("span",{children:["Address:",s.jsx("p",{children:s.jsx("a",{href:n,children:l})})]}),s.jsxs("span",{children:["Email:",s.jsx("p",{children:i?s.jsx("a",{href:`mailto:${i}`,children:i}):"phone only"})]}),s.jsxs("span",{children:["Phone:",s.jsx("p",{children:t?s.jsx("a",{href:`tel:${t}`,children:t}):"email only"})]})]})]})]});g.propTypes={id:e.string.isRequired,title:e.string.isRequired,url:e.string.isRequired,imageUrl:e.string.isRequired,address:e.string.isRequired,workDays:e.string.isRequired,phone:e.string.isRequired,email:e.string.isRequired,addressUrl:e.string.isRequired};const w=o.div`
  & > h1 {
    display: flex;
    margin-top: 80px;
    margin-bottom: 60px;
    justify-content: center;
  }
`,j=o.ul`
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
`,u=[{title:"Притулок для бездомних тварин 'Сіріус'",url:"https://dogcat.com.ua",addressUrl:"https://goo.gl/maps/iq8NXEUf31EAQCzc6",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png",address:"Fedorivka, Kyiv Oblast, Ukraine, 07372",workDays:[{isOpen:!1},{isOpen:!1},{isOpen:!1},{isOpen:!1},{isOpen:!1},{isOpen:!0,from:"11:00",to:"16:00"},{isOpen:!0,from:"11:00",to:"16:00"}],phone:"+380931934069",email:null},{title:"Happy Paw",url:"https://happypaw.ua/ua",addressUrl:"https://goo.gl/maps/3RyzTYBvMr9WQWCC6",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_288.png",address:"Київ, вулиця Шота Руставелі, 44 (3-й поверх, офіс 7)",workDays:[{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"}],phone:"+380442900329",email:"hello@happypaw.ua"},{title:"Харківський міський притулок для тварин",url:"https://www.city.kharkov.ua/uk/news/-51132.html",addressUrl:"https://goo.gl/maps/gjMzx3ifaRgXSftP9",imageUrl:null,address:"м. Харків, вул. Квітки-Основ'яненка, 7, 2-й пов.",workDays:null,phone:"+380577607961",email:"press@citynet.kharkov.ua"},{title:"ЛКП “ЛЕВ”",url:"https://lkplev.com/",addressUrl:"https://goo.gl/maps/4xMfxtahHPfXeAYU8",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_289.png",address:"79024, м.Львів, вул. Промислова 56",workDays:null,phone:"+380685354545",email:null},{title:"Притулок для собак Велике серце",url:"https://pethelp.com.ua/interv_yu_z_zasnovnitseyu_pritulku_velike_sertse/",addressUrl:null,imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_286.png",address:null,workDays:null,phone:null,email:"pethelp.ukr@gmail.com"},{title:"Волонтерська організація БАРБОС",url:"https://uk-ua.facebook.com/NGO.Barbos/",addressUrl:"https://goo.gl/maps/pnzYL8t7jbG7j1SQ9",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_293.png",address:"м. Ужгород",workDays:null,phone:"+380664880480",email:null},{title:"Ветеринарний центр LicoVet",url:"https://lico.vet/",addressUrl:"https://goo.gl/maps/sub8u9TAAvLJRE9j9",imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_292.png",address:"вулиця Другетів, 77, Ужгород, Закарпатська область, 88003",workDays:[{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"},{isOpen:!0,from:"09:00",to:"20:00"}],phone:null,email:null},{title:"Purina",url:"https://www.purina.ua/",addressUrl:null,imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_290.png",address:null,workDays:null,phone:"+380800500950",email:"info@ua.nestle.com"},{title:"Whiskas",url:"https://www.whiskas.ua/",addressUrl:null,imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_285.png",address:null,phone:"+380800500155",email:null},{title:"Josera",url:"https://josera.ua/",addressUrl:null,imageUrl:"https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_291.png",address:null,workDays:[{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!0,from:"09:00",to:"17:00"},{isOpen:!1,from:"",to:""},{isOpen:!1,from:"",to:""}],phone:"+380800409060",email:"info@josera.ua"}],m=()=>{const r=c();return s.jsxs(w,{children:[s.jsx("h1",{children:"Our friends"}),u.length>0&&s.jsx(j,{children:u.map(({title:a,url:p,imageUrl:l,address:d,workDays:t,phone:i,email:n,addressUrl:h})=>s.jsx(g,{title:a,url:p,imageUrl:l,address:d,workDays:t,phone:i,email:n,addressUrl:h},r))})]})};m.propTypes={id:e.string.isRequired,title:e.string.isRequired,url:e.string.isRequired,imageUrl:e.string.isRequired,address:e.string.isRequired,workDays:e.string.isRequired,phone:e.string.isRequired,email:e.string.isRequired,addressUrl:e.string.isRequired};const O=()=>s.jsx(s.Fragment,{children:s.jsx(m,{})});export{O as default};
