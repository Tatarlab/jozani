(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6242:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7462),a=n(3366),i=n(7294),o=n(512),l=n(8510),s=n(3026),d=n(7623),c=n(629),u=n(1977),p=n(5122);function getCardUtilityClass(e){return(0,p.ZP)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var g=n(5893);let h=["className","raised"],useUtilityClasses=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},getCardUtilityClass,t)},m=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),f=i.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiCard"}),{className:i,raised:l=!1}=n,s=(0,a.Z)(n,h),c=(0,r.Z)({},n,{raised:l}),u=useUtilityClasses(c);return(0,g.jsx)(m,(0,r.Z)({className:(0,o.Z)(u.root,i),elevation:l?8:void 0,ref:t,ownerState:c},s))});var v=f},629:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(3366),a=n(7462),i=n(7294),o=n(512),l=n(8510),s=n(8111),d=n(3026),styles_getOverlayAlpha=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),c=n(7623),u=n(1977),p=n(5122);function getPaperUtilityClass(e){return(0,p.ZP)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=n(5893);let h=["className","component","elevation","square","variant"],useUtilityClasses=e=>{let{square:t,elevation:n,variant:r,classes:a}=e,i={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,l.Z)(i,getPaperUtilityClass,a)},m=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",styles_getOverlayAlpha(t.elevation))}, ${(0,s.Fq)("#fff",styles_getOverlayAlpha(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))}),f=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiPaper"}),{className:i,component:l="div",elevation:s=1,square:d=!1,variant:u="elevation"}=n,p=(0,r.Z)(n,h),f=(0,a.Z)({},n,{component:l,elevation:s,square:d,variant:u}),v=useUtilityClasses(f);return(0,g.jsx)(m,(0,a.Z)({as:l,ownerState:f,className:(0,o.Z)(v.root,i),ref:t},p))});var v=f},5861:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(3366),a=n(7462),i=n(7294),o=n(512),l=n(9707),s=n(8510),d=n(3026),c=n(7623),u=n(8216),p=n(1977),g=n(5122);function getTypographyUtilityClass(e){return(0,g.ZP)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=n(5893);let m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],useUtilityClasses=e=>{let{align:t,gutterBottom:n,noWrap:r,paragraph:a,variant:i,classes:o}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,s.Z)(l,getTypographyUtilityClass,o)},f=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,a.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},transformDeprecatedColors=e=>x[e]||e,y=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiTypography"}),i=transformDeprecatedColors(n.color),s=(0,l.Z)((0,a.Z)({},n,{color:i})),{align:d="inherit",className:u,component:p,gutterBottom:g=!1,noWrap:x=!1,paragraph:y=!1,variant:b="body1",variantMapping:Z=v}=s,w=(0,r.Z)(s,m),j=(0,a.Z)({},s,{align:d,color:i,className:u,component:p,gutterBottom:g,noWrap:x,paragraph:y,variant:b,variantMapping:Z}),k=p||(y?"p":Z[b]||v[b])||"span",C=useUtilityClasses(j);return(0,h.jsx)(f,(0,a.Z)({as:k,ref:t,ownerState:j,className:(0,o.Z)(C.root,u)},w))});var b=y},9707:function(e,t,n){"use strict";n.d(t,{Z:function(){return extendSxProp}});var r=n(7462),a=n(3366),i=n(8027),o=n(4920);let l=["sx"],splitProps=e=>{var t,n;let r={systemProps:{},otherProps:{}},a=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:o.Z;return Object.keys(e).forEach(t=>{a[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]}),r};function extendSxProp(e){let t;let{sx:n}=e,o=(0,a.Z)(e,l),{systemProps:s,otherProps:d}=splitProps(o);return t=Array.isArray(n)?[s,...n]:"function"==typeof n?(...e)=>{let t=n(...e);return(0,i.P)(t)?(0,r.Z)({},s,t):s}:(0,r.Z)({},s,n),(0,r.Z)({},d,{sx:t})}},9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1430)}])},6169:function(e,t,n){"use strict";n.d(t,{Z:function(){return card_Card}});var r=n(5893),a=n(7294),i=n(2729),o=n(6242),l=n(7411),s=n(7658),d=n(5792);function _templateObject(){let e=(0,i._)(["\n  position: relative;\n  display: flex;\n  flex: ",";\n  flex-direction: column;\n  padding: 1.6rem;\n  margin: 1.6rem 0;\n  width: ",";\n  height: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 2.4rem;\n  color: ",";\n  box-shadow: 3px 2px 9px 1px ",";\n  overflow: visible;\n\n  &:before {\n    content: '';\n    display: ",";\n    position: absolute;\n    pointer-events: none;\n    background-image: linear-gradient(333deg, #ffc107, #ff2222, #8c18a0, #03a9f4);\n    mask-image: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px), linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);\n    -webkit-mask-position-x: 0%, 0%;\n    -webkit-mask-position-y: 0%, 0%;\n    mask-size: auto, auto;\n    mask-repeat: repeat, repeat;\n    mask-origin: content-box, border-box;\n    mask-clip: content-box, border-box;\n    mask-mode: match-source, match-source;\n    mask-composite: exclude;\n    animation-timeline: auto;\n    animation-range-start: normal;\n    animation-range-end: normal;\n    inset: 0px;\n    border-radius: 20px;\n    padding: 2px;\n    animation: 3s linear 0s infinite normal none running rotate;\n  }\n\n  @keyframes rotate {\n    100% {\n      filter: hue-rotate(-360deg);\n    }\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,i._)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: ",";\n  font-weight: ",";\n\n  @media screen and (max-width: ","px) {\n    padding: 1.6rem 1.6rem;\n\n    .ml-auto > button {\n      padding: 0 0.5rem;\n      width: 120px;\n    }\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,i._)(["\n  display: flex;\n  flex: 1;\n  padding: 1.6rem 0;\n  justify-content: inherit;\n\n  @media screen and (max-width: ","px) {\n    max-width: 100%;\n  }\n\n  @media screen and (max-width: ","px) {\n    flex-direction: column;\n  }\n"]);return _templateObject2=function(){return e},e}let c=(0,l.ZP)(o.Z).withConfig({componentId:"sc-57d6247e-0"})(_templateObject(),e=>{let{isFullHeight:t=!1}=e;return t?"1 0 100%":1},e=>{let{isFullWidth:t=!1}=e;return t?"100%":"auto"},e=>{let{isFullHeight:t=!1}=e;return t?"100%":"auto"},(0,s.MX)("grey",50),(0,s.MX)("grey",100),(0,s.MX)("black",100),(0,s.MX)("grey",100),e=>{let{isBranding:t=!1}=e;return t?"block":"none"}),u=l.ZP.div.withConfig({componentId:"sc-57d6247e-1"})(_templateObject1(),(0,s.MX)("font","h5"),(0,s.MX)("font","semi-bold"),d.j$.mobile),p=l.ZP.div.withConfig({componentId:"sc-57d6247e-2"})(_templateObject2(),d.j$.xs,d.j$.mobile-40),card_Card=e=>{let{isFullWidth:t=!1,isFullHeight:n=!1,isBranding:i=!1,title:o,children:l,footer:s,titleStyle:d,footerStyle:g,contentRef:h,...m}=e,f=(0,a.useMemo)(()=>o?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u,{style:d,children:o})}):null,[o,d]),v=(0,a.useMemo)(()=>o?(0,r.jsx)(p,{ref:h,style:{flexDirection:s?"column":"row"},children:l}):l,[h,l,o,s]);return console.log("isBranding",i),(0,r.jsxs)(c,{isBranding:i,...m,children:[f,v]})}},391:function(e,t,n){"use strict";n.d(t,{Z:function(){return typography}});var r=n(5893);n(7294);var a=n(2729),i=n(5861),o=n(7411);function _templateObject(){let e=(0,a._)([""]);return _templateObject=function(){return e},e}let l=(0,o.ZP)(i.Z).withConfig({componentId:"sc-a6895b97-0"})(_templateObject());var typography=e=>(0,r.jsx)(l,{...e})},1430:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),i=n(6169),o=n(391),l=n(7658),s=n(1696);t.default=()=>{let[e]=(0,a.useState)();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.Z,{style:{justifyContent:"center",background:"linear-gradient(106deg, #f09f6c, #ef6400);"},children:[(0,r.jsx)("a",{href:"/challenge/new",style:{position:"absolute",top:0,left:0,right:0,bottom:0}}),(0,r.jsx)("img",{src:"/assets/pay-challenge.png",style:{marginTop:"-15%",maxWidth:"100%",width:"80%"}}),(0,r.jsx)(o.Z,{variant:"h3",fontWeight:"bold",fontStyle:"italic",color:(0,l.MX)("white",100),children:"Challenge friend"})]}),(0,r.jsxs)(i.Z,{style:{background:"linear-gradient(106deg, #829cf3, #294dda);"},children:[(0,r.jsx)("a",{href:"/find-challenge",style:{position:"absolute",top:0,left:0,right:0,bottom:0}}),(0,r.jsx)("img",{src:"/assets/create-challenge.png",style:{marginLeft:"auto",maxWidth:"100%",width:"80%"}}),(0,r.jsx)(o.Z,{variant:"h3",fontWeight:"bold",fontStyle:"italic",color:(0,l.MX)("white",100),children:"Find a challenge"})]}),(0,r.jsxs)("div",{style:{margin:"5rem -1.6rem 0",padding:"5rem 1.6rem",background:(0,l.MX)("black",100)},children:[(0,r.jsxs)(o.Z,{variant:"h2",textAlign:"center",fontWeight:"bold",style:{marginBottom:"3rem",color:(0,l.MX)("white",80)},children:["Best way to engage"," ",(0,r.jsx)("i",{children:"funds"})]}),(0,r.jsxs)(o.Z,{variant:"h3",style:{lineHeight:1.1,"-webkit-text-fill-color":"transparent","-webkit-background-clip":"text",backgroundClip:"text",backgroundImage:"linear-gradient(270deg, rgba(255, 221, 221, 0.664) -11%, rgba(119, 175, 125, 0.85) 50%, rgba(89, 194, 99, 0.55) 100%)",letterSpacing:"-2px",overflow:"visible"},children:[(0,r.jsx)("strong",{style:{fontSize:"10rem"},children:"3%"}),(0,r.jsx)("div",{children:"cashback"})]}),(0,r.jsxs)(o.Z,{marginTop:2,variant:"h6",color:(0,l.MX)("yellow",600),children:["For each friend","'","s completed challenge"]})]}),(0,r.jsxs)("div",{style:{margin:"0 -1.6rem",padding:"5rem 1.6rem"},children:[(0,r.jsx)(o.Z,{variant:"h2",textAlign:"center",fontWeight:"bold",style:{marginBottom:"2rem"},children:"No more risks"}),(0,r.jsx)(o.Z,{variant:"h6",textAlign:"center",children:"Deposited funds are sent to friends or charities"})]}),(0,r.jsx)("div",{style:{padding:"1.6rem 0"},children:(0,r.jsx)(s.z,{isBranding:!0,fullWidth:!0,variant:"contained",size:"large",children:"Challenge Friend Now"})})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);