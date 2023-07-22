import{b as w,r as o,a as C,u as $,j as e,L as _,O as S}from"./index-0a1ab5c7.js";import{b as M}from"./api-d8b78cbe.js";import{g as B}from"./genres-names-2136eebc.js";const R="_dark_eytdv_1",D="_additional_eytdv_3",L="_buttonback_eytdv_21",O="_go_back_eytdv_34",E="_details_eytdv_37",G="_image_wrapper_eytdv_43",T="_title_wrapper_eytdv_54",F="_title_eytdv_54",H="_image_eytdv_43",I="_imagecont_eytdv_79",P="_info_eytdv_86",U="_info__item_eytdv_94",z="_info__value_eytdv_100",q="_tagother_eytdv_103",A="_genres_eytdv_107",J="_genres__item_eytdv_112",K="_overview_eytdv_116",Q="_tagline_eytdv_120",V="_tagCont_eytdv_124",W="_star_eytdv_132",X="_description_eytdv_167",s={dark:R,additional:D,buttonback:L,go_back:O,details:E,image_wrapper:G,title_wrapper:T,title:F,"title-decript":"_title-decript_eytdv_64",image:H,imagecont:I,info:P,info__item:U,info__value:z,tagother:q,genres:A,genres__item:J,overview:K,tagline:Q,tagCont:V,star:W,description:X},se=()=>{const{movieId:c}=w(),[a,u]=o.useState(""),[m,x]=o.useState(null),[j,N]=o.useState(""),{state:n}=C(),h=$();o.useEffect(()=>{if(n!=null&&n.from){const{pathname:t,search:r}=n.from;x(t),N(r)}},[n==null?void 0:n.from]),o.useEffect(()=>{M(c).then(t=>{p(t),u(t)})},[c]);function p(t){return f(B,t.genres),t}function f(t,r){let l=[];return t.map(i=>(r.includes(i.id)&&l.push(i.name),l))}function b(){if(m===null){h("/",{replace:!0});return}else h(`${m}${j}`)}function y(t){var r=t,l=r/60,i=Math.floor(l),k=(l-i)*60,d=Math.round(k);let v=i===1?`${i} hour `:`${i} hours `,g=d===1?`${d} minute`:`${d} minutes`;return i===0&&(v=""),d===0&&(g=""),v+g}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.buttonback,children:e.jsx("button",{onClick:b,className:s.go_back,children:"Go Back"})}),a&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:s.details,children:[e.jsxs("div",{className:s.description,children:[e.jsx("h1",{className:s.titleDecript,children:"Others"}),e.jsxs("ul",{className:s.info,children:[a.vote_average!==0?e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"User Score:"}),e.jsx("div",{className:s.tagCont,children:e.jsxs("span",{className:s.info__value,children:[e.jsx("span",{className:s.star,children:e.jsx("i",{className:"fa-sharp fa-regular fa-star"})})," ",a.vote_average]})})]}):e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"User Score:"})," ",e.jsx("div",{className:s.tagCont,children:e.jsxs("span",{className:s.info__value,children:[e.jsx("span",{className:s.star,children:e.jsx("i",{className:"fa fa-star-o"})})," --"]})})]}),a.budget!==0?e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"Budget: "}),e.jsx("div",{className:s.tagCont,children:e.jsxs("span",{className:s.info__value,children:["$",a.budget.toLocaleString()]})})]}):e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"Budget: "}),e.jsx("div",{className:s.tagCont,children:e.jsx("span",{className:s.info__value,children:"none"})})]}),a.revenue!==0?e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"Revenue:"})," ",e.jsx("div",{className:s.tagCont,children:e.jsxs("span",{className:s.info__value,children:["$",a.revenue.toLocaleString()]})})]}):e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"Revenue:"})," ",e.jsx("div",{className:s.tagCont,children:e.jsx("span",{className:s.info__value,children:"none"})})]}),a.runtime!==0?e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"Runtime:"}),e.jsxs("div",{className:s.tagCont,children:[" ",e.jsx("span",{className:s.info__value,children:y(a.runtime)})]})]}):e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"Runtime:"}),e.jsxs("div",{className:s.tagCont,children:[" ",e.jsx("span",{className:s.info__value,children:"none"})]})]}),e.jsxs("li",{className:s.info__item,children:[e.jsx("div",{className:s.tagother,children:"Genres: "})," ",e.jsx("ul",{className:s.genres,children:a.genres.length>0?a.genres.map(({id:t,name:r},l)=>e.jsx("div",{className:s.tagCont,children:""+r+","},t)):e.jsx("p",{className:s.genres__item,children:"Other"})})]})]})]}),e.jsxs("div",{className:s.image_wrapper,children:[e.jsxs("div",{className:s.imagecont,children:[a.poster_path?e.jsx("img",{src:`https://image.tmdb.org/t/p/w500${a.poster_path}`,alt:a.original_title,className:s.image}):e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:a.original_title,className:s.image}),e.jsx("h2",{className:s.title,children:a.original_title})]}),e.jsxs("div",{className:s.title_wrapper,children:[e.jsxs("div",{children:[e.jsx("h1",{className:s.titleDecript,children:"Sinopsis"}),e.jsx("p",{className:s.overview,children:a.overview})]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Movie Tagline"}),a.tagline!==""?e.jsxs("p",{className:s.tagline,children:['"',a.tagline,'"']}):""]})]})]})]}),e.jsxs("div",{className:s.additional,children:[e.jsx(_,{to:`/movies/${c}/cast`,className:s.additional__button,children:e.jsx("button",{children:"Cast"})}),e.jsx(_,{to:`/movies/${c}/reviews`,className:s.additional__button,children:e.jsx("button",{children:"Reviews"})}),e.jsx(_,{to:`/movies/${c}/videos`,className:s.additional__button,children:e.jsx("button",{children:"Trailer"})})]})]}),e.jsx(S,{})]})};export{se as default};