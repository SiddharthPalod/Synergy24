import{r as n}from"./index-b7b05acc.js";import{l as i,L as u,c as m,a as l,g as f}from"./motion-75dfcdae.js";function y({children:r,features:e,strict:d=!1}){const[,c]=n.useState(!s(e)),t=n.useRef(void 0);if(!s(e)){const{renderer:o,...a}=e;t.current=o,i(a)}return n.useEffect(()=>{s(e)&&e().then(({renderer:o,...a})=>{i(a),t.current=o,c(!0)})},[]),n.createElement(u.Provider,{value:{renderer:t.current,strict:d}},r)}function s(r){return typeof r=="function"}const E={renderer:m,...l,...f};export{y as L,E as d};