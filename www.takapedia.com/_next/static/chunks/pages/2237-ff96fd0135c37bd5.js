"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2237],{36316:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(91373);let o=(0,r.Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},41352:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(91373);let o=(0,r.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},47909:function(e,t,n){n.d(t,{z:function(){return a}});var r=n(85893);n(67294);var o=n(7189),i=n(6756);let a=e=>{let{type:t="button",className:n,replaceClassName:o=!1,children:a,...s}=e;return(0,r.jsx)("button",{className:o?n:(0,i.cn)("inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground duration-300 hover:bg-primary/75 disabled:cursor-not-allowed disabled:opacity-75",n),type:t,...s,children:a})};a.Link=e=>{let{href:t,className:n,children:a}=e;return(0,r.jsx)(o.r,{href:t,className:(0,i.cn)("inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground duration-300 hover:bg-primary/75",n),children:a})}},45667:function(e,t,n){n.d(t,{II:function(){return s},XZ:function(){return l},e6:function(){return u},qw:function(){return c}});var r=n(85893),o=n(86010),i=n(67294),a=n(77551);let s=i.forwardRef((e,t)=>{let{type:n="text",className:i,...a}=e;return(0,r.jsx)("div",{className:"flex flex-col items-start",children:(0,r.jsx)("input",{className:(0,o.Z)("relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75",i),type:n,ref:t,...a})})});s.displayName="Input";let l=i.forwardRef((e,t)=>{let{id:n,children:i,className:s,classNameLabel:l,...u}=e;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"checkbox",className:(0,o.Z)("h-4 w-4 cursor-pointer rounded border bg-background text-primary focus:ring-primary focus:ring-offset-background",s),ref:t,id:n,...u}),(0,r.jsx)(a._,{htmlFor:n,className:(0,o.Z)("ml-3 block select-none text-sm text-foreground",l),children:i})]})});l.displayName="Checkbox";let u=e=>(0,r.jsx)("input",{type:"range",className:"range-lg h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary",...e}),c=e=>{let{value:t,onChange:n,debounce:o=500,...a}=e,[l,u]=i.useState(t);return i.useEffect(()=>{u(t)},[t]),i.useEffect(()=>{let e=setTimeout(()=>{n(l)},o);return()=>clearTimeout(e)},[l]),(0,r.jsx)(s,{...a,value:l,className:"!rounded-md",onChange:e=>u(e.target.value)})}},77551:function(e,t,n){n.d(t,{_:function(){return i}});var r=n(85893),o=n(86010);n(67294);let i=e=>{let{htmlFor:t,value:n,className:i,children:a}=e;return(0,r.jsx)("label",{htmlFor:t,className:(0,o.Z)("block text-xs font-medium text-foreground",i),children:n||a})}},19697:function(e,t,n){n.d(t,{K:function(){return s}});var r=n(85893),o=n(10050),i=n(86010),a=n(28677);n(67294);let s=e=>{let{open:t,handleClose:n,message:s}=e,{t:l}=(0,a.$G)(["common"]);return(0,r.jsxs)("div",{className:(0,i.Z)(t?"animate-enter":"animate-leave","pointer-events-auto flex w-full max-w-md rounded-lg bg-background shadow-lg ring-1 ring-muted ring-opacity-5"),children:[(0,r.jsx)("div",{className:"w-0 flex-1 p-4",children:(0,r.jsxs)("div",{className:"flex items-start",children:[(0,r.jsx)("div",{className:"flex-shrink-0",children:(0,r.jsx)(o.Z,{className:"h-6 w-6 text-success","aria-hidden":"true"})}),(0,r.jsxs)("div",{className:"ml-3 flex-1",children:[(0,r.jsx)("p",{className:"text-sm font-medium text-foreground",children:l("common:successfull")}),(0,r.jsx)("p",{className:"mt-1 text-sm text-foreground/75",children:s})]})]})}),(0,r.jsx)("div",{className:"border-murky-100 flex border-l",children:(0,r.jsx)("button",{onClick:()=>n(),className:"flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-foreground hover:text-foreground/75 focus:outline-none",children:l("common:close")})})]})}},43484:function(e,t,n){n.d(t,{z:function(){return c}});var r=n(85893),o=n(88426),i=n(45139),a=n(36316),s=n(67294),l=n(6756);let u=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",success:"bg-success text-success-foreground hover:bg-success/90",info:"bg-info text-info-foreground hover:bg-info/90",outline:"border border-input bg-background hover:bg-accent/75 hover:text-accent-foreground","outline-destructive":"border border-destructive bg-background hover:bg-destructive/75 hover:text-destructive-foreground text-destructive",secondary:"border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10","icon-sm":"h-9 w-9","icon-xs":"h-8 w-8"},isLoading:{true:"opacity-75 pointer-events-none"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{var n;let{className:i,variant:s,size:c,asChild:d=!1,isLoading:f,disabled:m,children:v,...g}=e,x=d?o.g7:"button";return(0,r.jsx)(x,{className:(0,l.cn)(u({variant:s,size:c,isLoading:f,className:i})),disabled:null!==(n=m||f)&&void 0!==n&&n,ref:t,...g,children:f?(0,r.jsx)(a.Z,{className:"h-4 w-4 animate-spin"}):v})});c.displayName="Button"},8624:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(85893),o=n(65325),i=n(23278),a=n(31955),s=n(86501),l=n(67294),u=n(11163),c=n(19697);let d="/sign-in";function f(e,t,n){let f=n=>{let f=(0,u.useRouter)(),{query:m}=f,{profile:v,isLoading:g,setProfile:x,stopLoading:p}=(0,i.O)();return(l.useEffect(()=>{let e=()=>{let e=a.Z.get("bj-token");if(!e){v&&(a.Z.remove("bj-token"),x(void 0),f.push(d),s.Am.custom(e=>(0,r.jsx)(c.K,{open:e.visible,handleClose:()=>s.Am.dismiss(e.id),message:"You have successfully logged out"}))),p();return}let t=async()=>{try{let e=await o.h.get("/profile");x(e.data.data)}catch(e){a.Z.remove("bj-token")}finally{p()}};v||t()};return e(),window.addEventListener("focus",e),()=>{window.removeEventListener("focus",e)}},[v,f,x,p]),l.useEffect(()=>{g||(v?"auth"===t&&((null==m?void 0:m.redirect)?f.replace(m.redirect):f.push("/dashboard")):"auth"!==t&&"optional"!==t&&f.replace("".concat(d,"?redirect=").concat(f.asPath),"".concat(d)))},[v,g,m,f]),(g||!v)&&"auth"!==t&&"optional"!==t)?(0,r.jsxs)("div",{className:"fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-background text-foreground",children:[(0,r.jsxs)("svg",{className:"mb-4 h-7 w-7 animate-spin text-foreground",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),(0,r.jsx)("p",{children:"Loading..."})]}):(0,r.jsx)(e,{...n})};return f.Props={Layout:n},f}},82796:function(e,t,n){n.d(t,{Gn:function(){return l},QS:function(){return a},l8:function(){return s},pO:function(){return c},y8:function(){return u},zq:function(){return i}});var r=n(65325),o=n(48228);let i=e=>(0,o.D)({mutationKey:["sign-in"],mutationFn:async e=>{let{data:t}=await r.h.post("/sign-in",e);return t},...e}),a=e=>(0,o.D)({mutationKey:["sign-up"],mutationFn:async e=>{let{data:t}=await r.h.post("/sign-up",e);return t},...e}),s=e=>(0,o.D)({mutationKey:["token-confirmation"],mutationFn:async e=>{let{token:t,otp:n}=e,{data:o}=await r.h.post("/confirmation/".concat(t),{otp:n});return o.code},...e}),l=e=>(0,o.D)({mutationKey:["update-profile"],mutationFn:async e=>{let{data:t}=await r.h.post("/profile",e);return t},...e}),u=e=>(0,o.D)({mutationKey:["change-password"],mutationFn:async e=>{let{data:t}=await r.h.post("/reset-password",e);return t.data},...e}),c=e=>(0,o.D)({...e,mutationKey:["forgot-password"],mutationFn:async e=>{let{data:t}=await r.h.post("/forgot-password",e);return t}})},83821:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(85893),o=n(41352);n(67294);var i=n(7189),a=n(43484),s=n(6756);function l(e){var t,n,l,u,c,d,f,m,v,g;let{children:x,config:p}=e,h=!!(null==p?void 0:null===(n=p.content)||void 0===n?void 0:null===(t=n.auth)||void 0===t?void 0:t.color),b=!!((null==p?void 0:null===(c=p.content)||void 0===c?void 0:null===(u=c.auth)||void 0===u?void 0:null===(l=u.gradient)||void 0===l?void 0:l.from)||(null==p?void 0:null===(m=p.content)||void 0===m?void 0:null===(f=m.auth)||void 0===f?void 0:null===(d=f.gradient)||void 0===d?void 0:d.to)),y=!!(null==p?void 0:null===(g=p.content)||void 0===g?void 0:null===(v=g.auth)||void 0===v?void 0:v.image);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"absolute left-4 top-4 z-50",children:(0,r.jsx)(a.z,{type:"button",variant:"secondary",size:"icon-sm",asChild:!0,children:(0,r.jsx)(i.r,{href:"/",children:(0,r.jsx)(o.Z,{className:"h-5 w-5"})})})}),(0,r.jsxs)("div",{className:"relative flex min-h-dvh shrink-0 justify-center md:px-12 lg:px-0",children:[(0,r.jsx)("div",{className:"relative z-10 flex flex-1 flex-col justify-center bg-background/50 px-4 py-10 md:flex-none md:px-24",children:(0,r.jsx)("div",{className:"mx-auto w-full max-w-md sm:px-4 md:w-[400px] md:px-0",children:x})}),(0,r.jsx)("div",{className:"hidden sm:block lg:flex-1 xl:relative",children:(0,r.jsx)("div",{className:(0,s.cn)(["size-full bg-primary",h&&"bg-auth-background",b&&"bg-gradient-to-tr from-auth-gradient-from to-auth-gradient-to",y&&"bg-auth-image bg-cover bg-center"])})})]})]})}},23278:function(e,t,n){n.d(t,{O:function(){return o}});var r=n(64529);let o=(0,r.Ue)(e=>({profile:void 0,isLoading:!0,setProfile:t=>e(()=>({profile:t})),stopLoading:()=>e(()=>({isLoading:!1}))}))},10050:function(e,t,n){var r=n(67294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))});t.Z=o},464:function(e,t,n){n.d(t,{$:function(){return o}});var r=n(61688);let o=r.useSyncExternalStore},24798:function(e,t,n){n.d(t,{L:function(){return r}});function r(e,t){return"function"==typeof e?e(...t):!!e}},45139:function(e,t,n){n.d(t,{j:function(){return i}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},i=(e,t)=>n=>{var i;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:s}=t,l=Object.keys(a).map(e=>{let t=null==n?void 0:n[e],o=null==s?void 0:s[e];if(null===t)return null;let i=r(t)||r(o);return a[e][i]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...s,...u}[t]):({...s,...u})[t]===n})?[...e,n,r]:e},[]);return o(e,l,c,null==n?void 0:n.class,null==n?void 0:n.className)}}}]);