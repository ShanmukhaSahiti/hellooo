import{h as N,g as _,o as b,m as H,i as I,T as f,q as k,_ as p,r as h,k as W,b as z,t as U,v as S,j as e,d as Y,f as E,w as q,B as d,R as v,n as C,W as K}from"./index-9881edea.js";import{C as O}from"./Container-2b202781.js";import{B as J}from"./Button-e7896230.js";function Q(s){return _("MuiLink",s)}const X=N("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=X,R={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ee=s=>R[s]||s,oe=({theme:s,ownerState:o})=>{const n=ee(o.color),r=b(s,`palette.${n}`,!1)||o.color,t=b(s,`palette.${n}Channel`);return"vars"in s&&t?`rgba(${t} / 0.4)`:H(r,.4)},se=oe,ne=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],te=s=>{const{classes:o,component:n,focusVisible:r,underline:t}=s,i={root:["root",`underline${k(t)}`,n==="button"&&"button",r&&"focusVisible"]};return E(i,Q,o)},re=I(f,{name:"MuiLink",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:n}=s;return[o.root,o[`underline${k(n.underline)}`],n.component==="button"&&o.button]}})(({theme:s,ownerState:o})=>p({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&p({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:se({theme:s,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Z.focusVisible}`]:{outline:"auto"}})),ie=h.forwardRef(function(o,n){const r=W({props:o,name:"MuiLink"}),{className:t,color:i="primary",component:l="a",onBlur:u,onFocus:a,TypographyClasses:F,underline:L="always",variant:m="inherit",sx:x}=r,w=z(r,ne),{isFocusVisibleRef:y,onBlur:T,onFocus:V,ref:A}=U(),[M,g]=h.useState(!1),D=S(n,A),G=c=>{T(c),y.current===!1&&g(!1),u&&u(c)},P=c=>{V(c),y.current===!0&&g(!0),a&&a(c)},j=p({},r,{color:i,component:l,focusVisible:M,underline:L,variant:m}),$=te(j);return e.jsx(re,p({color:i,className:Y($.root,t),classes:F,component:l,onBlur:G,onFocus:P,ref:D,ownerState:j,variant:m,sx:[...Object.keys(R).includes(i)?[]:[{color:i}],...Array.isArray(x)?x:[x]]},w))}),le=ie,B=h.forwardRef(({disabledLink:s=!1,sx:o,...n},r)=>{const t=q(),i=t.palette.primary.light,l=t.palette.primary.main,u=t.palette.primary.dark,a=e.jsx(d,{ref:r,component:"div",sx:{width:40,height:40,display:"inline-flex",...o},...n,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"BG1",x1:"100%",x2:"50%",y1:"9.946%",y2:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:u}),e.jsx("stop",{offset:"100%",stopColor:l})]}),e.jsxs("linearGradient",{id:"BG2",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:i}),e.jsx("stop",{offset:"100%",stopColor:l})]}),e.jsxs("linearGradient",{id:"BG3",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:i}),e.jsx("stop",{offset:"100%",stopColor:l})]})]}),e.jsxs("g",{fill:l,fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:[e.jsx("path",{fill:"url(#BG1)",d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"}),e.jsx("path",{fill:"url(#BG2)",d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"}),e.jsx("path",{fill:"url(#BG3)",d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"})]})]})});return s?a:e.jsx(le,{component:v,href:"/",sx:{display:"contents"},children:a})});B.propTypes={disabledLink:C.bool,sx:C.object};function ae(){const s=e.jsx(d,{component:"header",sx:{top:0,left:0,width:1,lineHeight:0,position:"fixed",p:o=>({xs:o.spacing(3,3,0),sm:o.spacing(5,5,0)})},children:e.jsx(B,{})});return e.jsxs(e.Fragment,{children:[s,e.jsx(O,{children:e.jsxs(d,{sx:{py:12,maxWidth:480,mx:"auto",display:"flex",minHeight:"100vh",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center"},children:[e.jsx(f,{variant:"h3",sx:{mb:3},children:"Sorry, page not found!"}),e.jsx(f,{sx:{color:"text.secondary"},children:"Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."}),e.jsx(d,{component:"img",src:"/assets/illustrations/illustration_404.svg",sx:{mx:"auto",height:260,my:{xs:5,sm:10}}}),e.jsx(J,{href:"/",size:"large",variant:"contained",component:v,children:"Go to Home"})]})})]})}function pe(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx("title",{children:" 404 Page Not Found "})}),e.jsx(ae,{})]})}export{pe as default};
