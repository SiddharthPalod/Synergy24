import{r as o,j as e,u as d,L as m}from"./index-1b943a22.js";import{i as x,a as u,b as h}from"./event_image-c4599e66.js";import{m as i}from"./motion-4db11de1.js";import{L as f,d as p}from"./features-animation-0b8088ce.js";const j="/assets/card-texture-4b21d33e.svg",g=({data:t})=>{const[r,n]=o.useState(!1),a=()=>{n(s=>!s)};return e.jsx(i.div,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.5},onMouseEnter:a,onMouseLeave:a,className:"perspective-1000 w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem]",children:e.jsxs("div",{className:`relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d shadow-lg ${r?"rotate-y-180":""}`,children:[e.jsx("div",{className:"absolute w-full h-full bg-red-700 backface-hidden",children:e.jsx("img",{src:t.image,loading:"lazy",alt:"Event_Image_Not_Found",className:"object-contain"})}),e.jsxs("div",{className:"absolute w-full h-full bg-red-700 text-white rotate-y-180 backface-hidden flex flex-col justify-center text-left",children:[e.jsx("img",{src:j,alt:"Card Texture",className:"w-full h-full absolute -z-10"}),e.jsx("h1",{className:"md:text-2xl text-sm font-bold px-4",children:t.name}),e.jsxs("p",{className:"font-bold md:text-sm text-xs px-4",children:["Prize Pool: ",t.prize]}),e.jsx("p",{className:"md:text-xs text-[0.5rem] px-4",children:t.desc})]})]})})},c=({day:t,images:r})=>{const n=d(),a=(s,l)=>{n(`/event_day${s}/${l+1}`)};return e.jsxs("div",{className:"event h-full text-white",children:[e.jsxs(i.div,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.1},className:"font-bold text-4xl max-sm:text-2xl text-center py-4 md:py-8",children:["Day ",t]}),e.jsx(f,{features:p,children:e.jsx(i.div,{className:"flex justify-center items-center w-full h-full",children:e.jsx("div",{className:"grid grid-cols-3 max-[677px]:grid-cols-2 place-items-center gap-x-4 gap-y-8 md:gap-10 mb-20",children:r.map((s,l)=>e.jsx("div",{onDoubleClick:()=>a(t,l),children:e.jsx(g,{data:s},l)}))})})})]})},N=()=>e.jsxs("div",{children:[e.jsx(m,{className:"fixed text-white button-back-events z-50 top-0 left-0 text-xl md:text-4xl p-4 font-bold",to:"/",children:"< BACK"}),e.jsx(i.div,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.1},className:"w-full mt-4 text-white text-5xl md:text-7xl font-extrabold text-center tracking-wide",children:"Events"}),e.jsx(c,{day:1,images:x}),e.jsx(c,{day:2,images:u}),e.jsx(c,{day:3,images:h})]});export{N as default};
