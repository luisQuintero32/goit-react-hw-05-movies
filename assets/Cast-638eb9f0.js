import{b as o,r as i,j as s}from"./index-d345dd2c.js";import{c as h}from"./api-d8b78cbe.js";const d="_dark_1tlc3_1",p="_cast_1tlc3_4",_="_item_1tlc3_17",x="_link_1tlc3_28",g="_image_1tlc3_33",j="_character_1tlc3_41",t={dark:d,cast:p,item:_,link:x,image:g,character:j};function N(){const{movieId:e}=o(),[r,l]=i.useState([]);return i.useEffect(()=>{h(e).then(c=>{l(c.cast)})},[e]),s.jsx(s.Fragment,{children:r&&s.jsx("ul",{className:t.cast,children:r.map(({id:c,character:n,original_name:a,profile_path:m})=>s.jsx("li",{className:t.item,children:s.jsxs("a",{className:t.link,href:`https://www.google.com/search?q=${a.split(" ").join("+")}`,target:"_blank",rel:"noreferrer",children:[s.jsx("div",{className:t.image_wrapper,children:m?s.jsx("img",{src:`https://image.tmdb.org/t/p/w500${m}`,alt:a,className:t.image}):s.jsx("img",{src:"https://i.postimg.cc/HkkLYx1T/Recurso-4.png",alt:a,className:t.image})}),s.jsxs("div",{className:t.name_wrapper,children:[s.jsx("p",{className:t.name,children:a}),s.jsx("p",{className:t.character,children:n})]})]})},c))})})}export{N as default};