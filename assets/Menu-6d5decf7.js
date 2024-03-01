import{r as o,ae as Qe,b as te,g as ne,h as V,x as He,m as Pe,j as K,_ as w,af as Ze,ag as et,ah as Fe,d as q,f as ve,ad as tt,i as Q,k as be,K as nt,ai as ot,H as Z,aj as rt,t as st,X as _e,M as ee,F as it,Y as at,V as lt}from"./index-c9f92dac.js";var a={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),ae=Symbol.for("react.context"),ct=Symbol.for("react.server_context"),le=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),ut=Symbol.for("react.offscreen"),Ke;Ke=Symbol.for("react.module.reference");function _(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xe:switch(e=e.type,e){case oe:case se:case re:case ce:case ue:return e;default:switch(e=e&&e.$$typeof,e){case ct:case ae:case le:case de:case fe:case ie:return e;default:return t}}case Ee:return t}}}a.ContextConsumer=ae;a.ContextProvider=ie;a.Element=xe;a.ForwardRef=le;a.Fragment=oe;a.Lazy=de;a.Memo=fe;a.Portal=Ee;a.Profiler=se;a.StrictMode=re;a.Suspense=ce;a.SuspenseList=ue;a.isAsyncMode=function(){return!1};a.isConcurrentMode=function(){return!1};a.isContextConsumer=function(e){return _(e)===ae};a.isContextProvider=function(e){return _(e)===ie};a.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xe};a.isForwardRef=function(e){return _(e)===le};a.isFragment=function(e){return _(e)===oe};a.isLazy=function(e){return _(e)===de};a.isMemo=function(e){return _(e)===fe};a.isPortal=function(e){return _(e)===Ee};a.isProfiler=function(e){return _(e)===se};a.isStrictMode=function(e){return _(e)===re};a.isSuspense=function(e){return _(e)===ce};a.isSuspenseList=function(e){return _(e)===ue};a.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oe||e===se||e===re||e===ce||e===ue||e===ut||typeof e=="object"&&e!==null&&(e.$$typeof===de||e.$$typeof===fe||e.$$typeof===ie||e.$$typeof===ae||e.$$typeof===le||e.$$typeof===Ke||e.getModuleId!==void 0)};a.typeOf=_;let ke=0;function ft(e){const[t,n]=o.useState(e),d=e||t;return o.useEffect(()=>{t==null&&(ke+=1,n(`mui-${ke}`))},[t]),d}const je=Qe["useId".toString()];function Bt(e){if(je!==void 0){const t=je();return e??t}return ft(e)}function Xt({controlled:e,default:t,name:n,state:d="value"}){const{current:l}=o.useRef(e!==void 0),[P,h]=o.useState(t),p=l?e:P,f=o.useCallback(v=>{l||h(v)},[]);return[p,f]}function Yt(e){return ne("MuiDivider",e)}const dt=te("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),qt=dt,pt=o.createContext(void 0),mt=pt;function Jt(){return o.useContext(mt)}function Qt({props:e,states:t,muiFormControl:n}){return t.reduce((d,l)=>(d[l]=e[l],n&&typeof e[l]>"u"&&(d[l]=n[l]),d),{})}const ht=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ye(e){return`scale(${e}, ${e**2})`}const gt={entering:{opacity:1,transform:ye(1)},entered:{opacity:1,transform:"none"}},me=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ue=o.forwardRef(function(t,n){const{addEndListener:d,appear:l=!0,children:P,easing:h,in:p,onEnter:f,onEntered:v,onEntering:R,onExit:x,onExited:k,onExiting:E,style:A,timeout:C="auto",TransitionComponent:b=Ze}=t,c=V(t,ht),O=o.useRef(),r=o.useRef(),s=He(),m=o.useRef(null),S=Pe(m,P.ref,n),i=u=>T=>{if(u){const $=m.current;T===void 0?u($):u($,T)}},D=i(R),F=i((u,T)=>{et(u);const{duration:$,delay:N,easing:g}=Fe({style:A,timeout:C,easing:h},{mode:"enter"});let L;C==="auto"?(L=s.transitions.getAutoHeightDuration(u.clientHeight),r.current=L):L=$,u.style.transition=[s.transitions.create("opacity",{duration:L,delay:N}),s.transitions.create("transform",{duration:me?L:L*.666,delay:N,easing:g})].join(","),f&&f(u,T)}),U=i(v),G=i(E),j=i(u=>{const{duration:T,delay:$,easing:N}=Fe({style:A,timeout:C,easing:h},{mode:"exit"});let g;C==="auto"?(g=s.transitions.getAutoHeightDuration(u.clientHeight),r.current=g):g=T,u.style.transition=[s.transitions.create("opacity",{duration:g,delay:$}),s.transitions.create("transform",{duration:me?g:g*.666,delay:me?$:$||g*.333,easing:N})].join(","),u.style.opacity=0,u.style.transform=ye(.75),x&&x(u)}),B=i(k),W=u=>{C==="auto"&&(O.current=setTimeout(u,r.current||0)),d&&d(m.current,u)};return o.useEffect(()=>()=>{clearTimeout(O.current)},[]),K.jsx(b,w({appear:l,in:p,nodeRef:m,onEnter:F,onEntered:U,onEntering:D,onExit:j,onExited:B,onExiting:G,addEndListener:W,timeout:C==="auto"?null:C},c,{children:(u,T)=>o.cloneElement(P,w({style:w({opacity:0,transform:ye(.75),visibility:u==="exited"&&!p?"hidden":void 0},gt[u],A,P.props.style),ref:S},T))}))});Ue.muiSupportAuto=!0;const yt=Ue;function Pt(e){return ne("MuiList",e)}const vt=te("MuiList",["root","padding","dense","subheader"]),Zt=vt,bt=["children","className","component","dense","disablePadding","subheader"],xt=e=>{const{classes:t,disablePadding:n,dense:d,subheader:l}=e;return be({root:["root",!n&&"padding",d&&"dense",l&&"subheader"]},Pt,t)},Et=q("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>w({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),St=o.forwardRef(function(t,n){const d=ve({props:t,name:"MuiList"}),{children:l,className:P,component:h="ul",dense:p=!1,disablePadding:f=!1,subheader:v}=d,R=V(d,bt),x=o.useMemo(()=>({dense:p}),[p]),k=w({},d,{component:h,dense:p,disablePadding:f}),E=xt(k);return K.jsx(tt.Provider,{value:x,children:K.jsxs(Et,w({as:h,className:Q(E.root,P),ref:n,ownerState:k},R,{children:[v,l]}))})}),wt=St,Ct=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function he(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function ze(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function We(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function J(e,t,n,d,l,P){let h=!1,p=l(e,t,t?n:!1);for(;p;){if(p===e.firstChild){if(h)return!1;h=!0}const f=d?!1:p.disabled||p.getAttribute("aria-disabled")==="true";if(!p.hasAttribute("tabindex")||!We(p,P)||f)p=l(e,p,n);else return p.focus(),!0}return!1}const Mt=o.forwardRef(function(t,n){const{actions:d,autoFocus:l=!1,autoFocusItem:P=!1,children:h,className:p,disabledItemsFocusable:f=!1,disableListWrap:v=!1,onKeyDown:R,variant:x="selectedMenu"}=t,k=V(t,Ct),E=o.useRef(null),A=o.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});nt(()=>{l&&E.current.focus()},[l]),o.useImperativeHandle(d,()=>({adjustStyleForScrollbar:(r,s)=>{const m=!E.current.style.width;if(r.clientHeight<E.current.clientHeight&&m){const S=`${ot(Z(r))}px`;E.current.style[s.direction==="rtl"?"paddingLeft":"paddingRight"]=S,E.current.style.width=`calc(100% + ${S})`}return E.current}}),[]);const C=r=>{const s=E.current,m=r.key,S=Z(s).activeElement;if(m==="ArrowDown")r.preventDefault(),J(s,S,v,f,he);else if(m==="ArrowUp")r.preventDefault(),J(s,S,v,f,ze);else if(m==="Home")r.preventDefault(),J(s,null,v,f,he);else if(m==="End")r.preventDefault(),J(s,null,v,f,ze);else if(m.length===1){const i=A.current,D=m.toLowerCase(),F=performance.now();i.keys.length>0&&(F-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&D!==i.keys[0]&&(i.repeating=!1)),i.lastTime=F,i.keys.push(D);const U=S&&!i.repeating&&We(S,i);i.previousKeyMatched&&(U||J(s,S,!1,f,he,i))?r.preventDefault():i.previousKeyMatched=!1}R&&R(r)},b=Pe(E,n);let c=-1;o.Children.forEach(h,(r,s)=>{if(!o.isValidElement(r)){c===s&&(c+=1,c>=h.length&&(c=-1));return}r.props.disabled||(x==="selectedMenu"&&r.props.selected||c===-1)&&(c=s),c===s&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(c+=1,c>=h.length&&(c=-1))});const O=o.Children.map(h,(r,s)=>{if(s===c){const m={};return P&&(m.autoFocus=!0),r.props.tabIndex===void 0&&x==="selectedMenu"&&(m.tabIndex=0),o.cloneElement(r,m)}return r});return K.jsx(wt,w({role:"menu",ref:b,className:p,onKeyDown:C,tabIndex:l?0:-1},k,{children:O}))}),Rt=Mt;function Tt(e){return ne("MuiPopover",e)}te("MuiPopover",["root","paper"]);const $t=["onEntering"],Lt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],It=["slotProps"];function Oe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Ae(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Ne(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ge(e){return typeof e=="function"?e():e}const Dt=e=>{const{classes:t}=e;return be({root:["root"],paper:["paper"]},Tt,t)},Ft=q(rt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ve=q(st,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),_t=o.forwardRef(function(t,n){var d,l,P;const h=ve({props:t,name:"MuiPopover"}),{action:p,anchorEl:f,anchorOrigin:v={vertical:"top",horizontal:"left"},anchorPosition:R,anchorReference:x="anchorEl",children:k,className:E,container:A,elevation:C=8,marginThreshold:b=16,open:c,PaperProps:O={},slots:r,slotProps:s,transformOrigin:m={vertical:"top",horizontal:"left"},TransitionComponent:S=yt,transitionDuration:i="auto",TransitionProps:{onEntering:D}={},disableScrollLock:F=!1}=h,U=V(h.TransitionProps,$t),G=V(h,Lt),j=(d=s==null?void 0:s.paper)!=null?d:O,B=o.useRef(),W=Pe(B,j.ref),u=w({},h,{anchorOrigin:v,anchorReference:x,elevation:C,marginThreshold:b,externalPaperSlotProps:j,transformOrigin:m,TransitionComponent:S,transitionDuration:i,TransitionProps:U}),T=Dt(u),$=o.useCallback(()=>{if(x==="anchorPosition")return R;const y=ge(f),I=(y&&y.nodeType===1?y:Z(B.current).body).getBoundingClientRect();return{top:I.top+Oe(I,v.vertical),left:I.left+Ae(I,v.horizontal)}},[f,v.horizontal,v.vertical,R,x]),N=o.useCallback(y=>({vertical:Oe(y,m.vertical),horizontal:Ae(y,m.horizontal)}),[m.horizontal,m.vertical]),g=o.useCallback(y=>{const M={width:y.offsetWidth,height:y.offsetHeight},I=N(M);if(x==="none")return{top:null,left:null,transformOrigin:Ne(I)};const Re=$();let X=Re.top-I.vertical,Y=Re.left-I.horizontal;const Te=X+M.height,$e=Y+M.width,Le=_e(ge(f)),Ie=Le.innerHeight-b,De=Le.innerWidth-b;if(b!==null&&X<b){const z=X-b;X-=z,I.vertical+=z}else if(b!==null&&Te>Ie){const z=Te-Ie;X-=z,I.vertical+=z}if(b!==null&&Y<b){const z=Y-b;Y-=z,I.horizontal+=z}else if($e>De){const z=$e-De;Y-=z,I.horizontal+=z}return{top:`${Math.round(X)}px`,left:`${Math.round(Y)}px`,transformOrigin:Ne(I)}},[f,x,$,N,b]),[L,Se]=o.useState(c),H=o.useCallback(()=>{const y=B.current;if(!y)return;const M=g(y);M.top!==null&&(y.style.top=M.top),M.left!==null&&(y.style.left=M.left),y.style.transformOrigin=M.transformOrigin,Se(!0)},[g]);o.useEffect(()=>(F&&window.addEventListener("scroll",H),()=>window.removeEventListener("scroll",H)),[f,F,H]);const Ge=(y,M)=>{D&&D(y,M),H()},Be=()=>{Se(!1)};o.useEffect(()=>{c&&H()}),o.useImperativeHandle(p,()=>c?{updatePosition:()=>{H()}}:null,[c,H]),o.useEffect(()=>{if(!c)return;const y=at(()=>{H()}),M=_e(f);return M.addEventListener("resize",y),()=>{y.clear(),M.removeEventListener("resize",y)}},[f,c,H]);let we=i;i==="auto"&&!S.muiSupportAuto&&(we=void 0);const Xe=A||(f?Z(ge(f)).body:void 0),pe=(l=r==null?void 0:r.root)!=null?l:Ft,Ce=(P=r==null?void 0:r.paper)!=null?P:Ve,Ye=ee({elementType:Ce,externalSlotProps:w({},j,{style:L?j.style:w({},j.style,{opacity:0})}),additionalProps:{elevation:C,ref:W},ownerState:u,className:Q(T.paper,j==null?void 0:j.className)}),Me=ee({elementType:pe,externalSlotProps:(s==null?void 0:s.root)||{},externalForwardedProps:G,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:Xe,open:c},ownerState:u,className:Q(T.root,E)}),{slotProps:qe}=Me,Je=V(Me,It);return K.jsx(pe,w({},Je,!it(pe)&&{slotProps:qe,disableScrollLock:F},{children:K.jsx(S,w({appear:!0,in:c,onEntering:Ge,onExited:Be,timeout:we},U,{children:K.jsx(Ce,w({},Ye,{children:k}))}))}))}),kt=_t;function jt(e){return ne("MuiMenu",e)}te("MuiMenu",["root","paper","list"]);const zt=["onEntering"],Ot=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],At={vertical:"top",horizontal:"right"},Nt={vertical:"top",horizontal:"left"},Ht=e=>{const{classes:t}=e;return be({root:["root"],paper:["paper"],list:["list"]},jt,t)},Kt=q(kt,{shouldForwardProp:e=>lt(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ut=q(Ve,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Wt=q(Rt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Vt=o.forwardRef(function(t,n){var d,l;const P=ve({props:t,name:"MuiMenu"}),{autoFocus:h=!0,children:p,className:f,disableAutoFocusItem:v=!1,MenuListProps:R={},onClose:x,open:k,PaperProps:E={},PopoverClasses:A,transitionDuration:C="auto",TransitionProps:{onEntering:b}={},variant:c="selectedMenu",slots:O={},slotProps:r={}}=P,s=V(P.TransitionProps,zt),m=V(P,Ot),S=He(),i=S.direction==="rtl",D=w({},P,{autoFocus:h,disableAutoFocusItem:v,MenuListProps:R,onEntering:b,PaperProps:E,transitionDuration:C,TransitionProps:s,variant:c}),F=Ht(D),U=h&&!v&&k,G=o.useRef(null),j=(g,L)=>{G.current&&G.current.adjustStyleForScrollbar(g,S),b&&b(g,L)},B=g=>{g.key==="Tab"&&(g.preventDefault(),x&&x(g,"tabKeyDown"))};let W=-1;o.Children.map(p,(g,L)=>{o.isValidElement(g)&&(g.props.disabled||(c==="selectedMenu"&&g.props.selected||W===-1)&&(W=L))});const u=(d=O.paper)!=null?d:Ut,T=(l=r.paper)!=null?l:E,$=ee({elementType:O.root,externalSlotProps:r.root,ownerState:D,className:[F.root,f]}),N=ee({elementType:u,externalSlotProps:T,ownerState:D,className:F.paper});return K.jsx(Kt,w({onClose:x,anchorOrigin:{vertical:"bottom",horizontal:i?"right":"left"},transformOrigin:i?At:Nt,slots:{paper:u,root:O.root},slotProps:{root:$,paper:N},open:k,ref:n,transitionDuration:C,TransitionProps:w({onEntering:j},s),ownerState:D},m,{classes:A,children:K.jsx(Wt,w({onKeyDown:B,actions:G,autoFocus:h&&(W===-1||v),autoFocusItem:U,variant:c},R,{className:Q(F.list,R.className),children:p}))}))}),en=Vt;export{mt as F,yt as G,en as M,kt as P,Xt as a,Jt as b,qt as d,Qt as f,Yt as g,Zt as l,Bt as u};
