(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8530],{31860:function(e,t,n){"use strict";n.d(t,{i:function(){return w}});var a=n(85893),r=n(72421),s=n(57349),o=n(89104),l=n(13658),i=n(36492),c=n(74094),d=n(27060),u=n(86010),m=n(30381),g=n.n(m),p=n(28677),h=n(53920),f=n(84105),x=n(67294),b=n(53106);let w=e=>{var t,n,m,w,y;let{id:j,filterComponent:k,showFilter:N=!0,showPagination:C=!0,fetchingOnMount:P=!0,showPageEntries:S=!0,columns:T,fetchData:R,limit:D=10,sort:E,dir:B=b.Nm.DESC,searchQuery:U,filterQuery:z,mapDownloadData:M,subscribeChannel:W,initialValue:_=[],hasRealtime:F}=e,[L,O]=x.useState(_),{t:H}=(0,p.$G)(["common"]),[V,I]=x.useState([]),[{pageIndex:Y,pageSize:q},A]=x.useState({pageIndex:0,pageSize:D}),Z={page:Y,limit:q,query:(null==U?void 0:U.value)?"".concat(U.key,":").concat(U.expression||"").concat(U.value):"",filter:(null==z?void 0:z.value)?z.value:"",sort:(null==V?void 0:null===(t=V[0])||void 0===t?void 0:t.id)||E,dir:(null==V?void 0:null===(n=V[0])||void 0===n?void 0:n.desc)!=null?(null==V?void 0:null===(m=V[0])||void 0===m?void 0:m.desc)?b.Nm.DESC:b.Nm.ASC:B},G=x.useMemo(()=>({pageIndex:Y,pageSize:q}),[Y,q]),X=(0,i.a)({queryKey:[j,Z],queryFn:()=>R?R(Z):Promise.resolve({data:L,pagination:{totalRows:0,totalPages:0}}),refetchOnWindowFocus:!1,enabled:P&&!F,retry:!1}),K=(0,c.b7)({data:L,columns:T,pageCount:null===(w=X.data)||void 0===w?void 0:w.pagination.totalPages,state:{pagination:G,sorting:V},onSortingChange:I,getSortedRowModel:(0,d.tj)(),onPaginationChange:A,getCoreRowModel:(0,d.sC)(),manualPagination:!0}),$=()=>{let e=L.map(e=>M?M(e):{...e});!function(e,t){let n=function(e){let t=Object.keys(e[0]),n=e.map(e=>t.map(t=>JSON.stringify(e[t])).join(","));return[t.join(","),...n].join("\n")}(e),a=new Blob([n],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(a,t);else{let e=document.createElement("a");if(void 0!==e.download){let n=URL.createObjectURL(a);e.setAttribute("href",n),e.setAttribute("download",t),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}}(e,"".concat(j,"-").concat(g()().format("DD-MM-YYYY_HH-mm-ss"),".csv"))},J=()=>{let e=L.map(e=>M?M(e):{...e}),t=f.P6.json_to_sheet(e),n=f.P6.book_new();f.P6.book_append_sheet(n,t,"Sheet1"),f.NC(n,"".concat(j,"-").concat(g()().format("DD-MM-YYYY_HH-mm-ss"),".xlsx")),console.log("XLSX file created successfully")};return x.useEffect(()=>{((null==z?void 0:z.value)||(null==U?void 0:U.value))&&X.refetch()},[null==z?void 0:z.value,null==U?void 0:U.value]),x.useEffect(()=>{var e,t;(null===(e=X.data)||void 0===e?void 0:e.data)!==L&&O((null===(t=X.data)||void 0===t?void 0:t.data)||L)},[X.data]),x.useEffect(()=>{_.length>0&&O(_)},[_]),x.useEffect(()=>{if(W&&F){let e=(0,h.io)(r.o,{autoConnect:!1,query:{room:"".concat(W,".create")}});null==e||e.connect();let t=(0,h.io)(r.o,{autoConnect:!1,query:{room:"".concat(W,".update")}});return null==t||t.connect(),null==e||e.on("".concat(W,".create"),e=>{O(t=>(t.unshift(e),t.length>10&&t.pop(),[...t]))}),null==t||t.on("".concat(W,".update"),e=>{O(t=>{let n=t.findIndex(t=>t.id===e.id);return n>0&&(t[n]=e),t.length>10&&t.pop(),[...t]})}),()=>{null==e||e.disconnect(),null==t||t.disconnect()}}},[W,F]),(0,a.jsxs)("div",{className:"space-y-4",children:[N&&k,(S||!!M)&&(0,a.jsxs)("div",{className:"flex items-center justify-end gap-x-4",children:[!!M&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{type:"button",onClick:()=>$(),disabled:K.getRowModel().rows.length<1,className:"hover:bg-murky-700 inline-flex w-full items-center justify-center rounded-md border bg-muted px-4 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-75 md:w-auto",children:"Download CSV"}),(0,a.jsx)("button",{type:"button",onClick:()=>J(),disabled:K.getRowModel().rows.length<1,className:"hover:bg-murky-700 inline-flex w-full items-center justify-center rounded-md border bg-muted px-4 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-75 md:w-auto",children:"Download XLSX"})]}),S&&(0,a.jsx)("select",{className:"hover:bg-murky-700 inline-flex w-full cursor-pointer items-center justify-center rounded-md border bg-muted py-2 text-xs ring-inset focus:ring-2 focus:ring-primary md:w-auto",value:K.getState().pagination.pageSize,onChange:e=>{K.setPageSize(Number(e.target.value))},children:[5,10,25,50,100].map(e=>(0,a.jsxs)("option",{value:e,children:[e," Entries"]},e))})]}),(0,a.jsx)("div",{className:"-mx-4 overflow-x-auto ring-1 ring-muted sm:mx-0 sm:rounded-lg",children:(0,a.jsxs)("table",{className:"min-w-full divide-y divide-muted",children:[(0,a.jsx)("thead",{children:K.getHeaderGroups().map(e=>(0,a.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,a.jsx)("th",{scope:"col",colSpan:e.colSpan,className:(0,u.Z)("table-cell whitespace-nowrap px-3 py-3.5 text-left text-xs font-semibold text-foreground","first:table-cell first:pl-4 sm:first:pl-6","first:pr-4 last:relative last:table-cell sm:last:pr-6","[&:nth-last-child(2)]:table-cell"),children:e.isPlaceholder?null:(0,a.jsxs)("div",{className:e.column.getCanSort()?"cursor-pointer select-none flex whitespace-nowrap items-center justify-between":"",onClick:e.column.getToggleSortingHandler(),children:[(0,c.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,a.jsx)(o.Z,{className:"h-4 w-4"}),desc:(0,a.jsx)(s.Z,{className:"h-4 w-4"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})},e.id)})},e.id))}),(0,a.jsxs)("tbody",{children:[X.isInitialLoading&&_.length<1?(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:K.getHeaderGroups().map(e=>e.headers.length)[0],className:"px-4 py-24 text-center sm:px-6",children:(0,a.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,a.jsxs)("svg",{className:"-ml-1 mr-3 h-5 w-5 animate-spin text-foreground",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Loading..."]})})}):K.getRowModel().rows.length<1&&(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{colSpan:K.getHeaderGroups().map(e=>e.headers.length)[0],className:"px-4 py-24 text-center sm:px-6",children:[(0,a.jsx)(l.Z,{className:"mx-auto h-12 w-12 text-foreground"}),(0,a.jsx)("h3",{className:"mt-2 font-semibold text-foreground",children:H("common:no-data")}),(0,a.jsx)("p",{className:"mt-1 text-sm text-secondary-foreground",children:H("common:no-data-description")})]})}),K.getRowModel().rows.map(e=>(0,a.jsx)("tr",{className:"even:bg-muted/50",children:e.getVisibleCells().map(e=>(0,a.jsx)("td",{className:(0,u.Z)("table-cell px-3 py-3.5 text-left text-xs font-medium text-foreground","first:table-cell first:pl-4 sm:first:pl-6","first:pr-4 last:relative last:table-cell sm:last:pr-6","[&:nth-last-child(2)]:table-cell"),children:(0,a.jsx)("div",{className:"whitespace-nowrap",children:(0,c.ie)(e.column.columnDef.cell,e.getContext())})},e.id))},e.id))]})]})}),C&&(0,a.jsx)(v,{pageIndex:K.getState().pagination.pageIndex,pageSize:K.getState().pagination.pageSize,setPage:e=>K.setPageIndex(e),totalRows:null===(y=X.data)||void 0===y?void 0:y.pagination.totalRows,previousPage:()=>K.previousPage(),nextPage:()=>K.nextPage(),disablePrev:!K.getCanPreviousPage(),disableNext:!K.getCanNextPage()})]})},v=e=>{let{pageIndex:t=1,pageSize:n=0,totalRows:r=0,...s}=e,o=x.useMemo(()=>Math.ceil(r/n),[r,n]),l=[];for(let e=0;e<(o>5?5:o);e++)l.push(e);let i=l.map(e=>{let n=0;return o>5&&(t>1&&(n=t-2),t>o-3&&(n=o-5)),e+n}),c=t*n+(r>0?1:0),d=n*(t+1),{t:m}=(0,p.$G)(["common"]);return(0,a.jsxs)("nav",{className:"flex items-center justify-between","aria-label":"Pagination",children:[(0,a.jsx)("div",{className:"hidden sm:block",children:(0,a.jsxs)("p",{className:"text-sm text-foreground",children:[m("common:showing")," ",(0,a.jsx)("span",{className:"font-medium",children:c})," ",m("common:to")," ",(0,a.jsx)("span",{className:"font-medium",children:r<d?r:d})," ",m("common:of")," ",(0,a.jsx)("span",{className:"font-medium",children:r})," ",m("common:results")]})}),(0,a.jsxs)("div",{className:"flex flex-1 justify-between sm:justify-end",children:[(0,a.jsx)("button",{type:"button",onClick:()=>s.previousPage(),disabled:s.disablePrev,className:"hover:bg-murky-700 relative inline-flex items-center  rounded-md bg-muted px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-transparent focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75",children:m("common:prev")}),(0,a.jsx)("div",{className:"flex items-center justify-center space-x-2",children:i.map(e=>(0,a.jsx)("button",{type:"button",onClick:()=>s.setPage(e),className:(0,u.Z)("relative ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold text-foreground ring-1 ring-inset ring-transparent focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75",t===e?"hover:bg-primary-400 bg-primary":"bg-murky-700 hover:bg-muted"),children:e+1},e))}),(0,a.jsx)("button",{type:"button",onClick:()=>s.nextPage(),disabled:s.disableNext,className:"hover:bg-murky-700 relative ml-3 inline-flex items-center  rounded-md bg-muted px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-transparent focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75",children:m("common:next")})]})]})}},72421:function(e,t,n){"use strict";n.d(t,{o:function(){return r}});var a=n(90210);let r=(0,a.OB)("NEXT_PUBLIC_SOCKET_URL")},53106:function(e,t,n){"use strict";n.d(t,{Nm:function(){return r}});var a,r,s=n(20299),o=n(4548),l=n(42187);(a=r||(r={}))[a.DESC=0]="DESC",a[a.ASC=1]="ASC";class i extends l.C{create(e){let t=globalThis.Object.create(this.messagePrototype);return void 0!==e&&(0,o.l)(this,t,e),t}internalBinaryRead(e,t,n,a){return null!=a?a:this.create()}internalBinaryWrite(e,t,n){let a=n.writeUnknownFields;return!1!==a&&(!0==a?s.z.onWrite:a)(this.typeName,e,t),t}constructor(){super("bangjeff.v1.Empty",[])}}new i;class c extends l.C{create(e){let t=globalThis.Object.create(this.messagePrototype);return t.error=!1,t.code=0,t.message="",void 0!==e&&(0,o.l)(this,t,e),t}internalBinaryRead(e,t,n,a){let r=null!=a?a:this.create(),o=e.pos+t;for(;e.pos<o;){let[t,a]=e.tag();switch(t){case 1:r.error=e.bool();break;case 2:r.code=e.uint32();break;case 3:r.message=e.string();break;default:let o=n.readUnknownField;if("throw"===o)throw new globalThis.Error("Unknown field ".concat(t," (wire type ").concat(a,") for ").concat(this.typeName));let l=e.skip(a);!1!==o&&(!0===o?s.z.onRead:o)(this.typeName,r,t,a,l)}}return r}internalBinaryWrite(e,t,n){!1!==e.error&&t.tag(1,s.TD.Varint).bool(e.error),0!==e.code&&t.tag(2,s.TD.Varint).uint32(e.code),""!==e.message&&t.tag(3,s.TD.LengthDelimited).string(e.message);let a=n.writeUnknownFields;return!1!==a&&(!0==a?s.z.onWrite:a)(this.typeName,e,t),t}constructor(){super("bangjeff.v1.ErrorResponse",[{no:1,name:"error",kind:"scalar",T:8},{no:2,name:"code",kind:"scalar",T:13},{no:3,name:"message",kind:"scalar",T:9}])}}new c;class d extends l.C{create(e){let t=globalThis.Object.create(this.messagePrototype);return t.column="",t.direction="",void 0!==e&&(0,o.l)(this,t,e),t}internalBinaryRead(e,t,n,a){let r=null!=a?a:this.create(),o=e.pos+t;for(;e.pos<o;){let[t,a]=e.tag();switch(t){case 1:r.column=e.string();break;case 2:r.direction=e.string();break;default:let o=n.readUnknownField;if("throw"===o)throw new globalThis.Error("Unknown field ".concat(t," (wire type ").concat(a,") for ").concat(this.typeName));let l=e.skip(a);!1!==o&&(!0===o?s.z.onRead:o)(this.typeName,r,t,a,l)}}return r}internalBinaryWrite(e,t,n){""!==e.column&&t.tag(1,s.TD.LengthDelimited).string(e.column),""!==e.direction&&t.tag(2,s.TD.LengthDelimited).string(e.direction);let a=n.writeUnknownFields;return!1!==a&&(!0==a?s.z.onWrite:a)(this.typeName,e,t),t}constructor(){super("bangjeff.v1.Sort",[{no:1,name:"column",kind:"scalar",T:9},{no:2,name:"direction",kind:"scalar",T:9}])}}new d;class u extends l.C{create(e){let t=globalThis.Object.create(this.messagePrototype);return t.limit=0,t.page=0,t.totalRows="0",t.totalPages=0,void 0!==e&&(0,o.l)(this,t,e),t}internalBinaryRead(e,t,n,a){let r=null!=a?a:this.create(),o=e.pos+t;for(;e.pos<o;){let[t,a]=e.tag();switch(t){case 1:r.limit=e.int32();break;case 2:r.page=e.int32();break;case 3:r.totalRows=e.int64().toString();break;case 4:r.totalPages=e.int32();break;default:let o=n.readUnknownField;if("throw"===o)throw new globalThis.Error("Unknown field ".concat(t," (wire type ").concat(a,") for ").concat(this.typeName));let l=e.skip(a);!1!==o&&(!0===o?s.z.onRead:o)(this.typeName,r,t,a,l)}}return r}internalBinaryWrite(e,t,n){0!==e.limit&&t.tag(1,s.TD.Varint).int32(e.limit),0!==e.page&&t.tag(2,s.TD.Varint).int32(e.page),"0"!==e.totalRows&&t.tag(3,s.TD.Varint).int64(e.totalRows),0!==e.totalPages&&t.tag(4,s.TD.Varint).int32(e.totalPages);let a=n.writeUnknownFields;return!1!==a&&(!0==a?s.z.onWrite:a)(this.typeName,e,t),t}constructor(){super("bangjeff.v1.PaginationResponse",[{no:1,name:"limit",kind:"scalar",T:5},{no:2,name:"page",kind:"scalar",T:5},{no:3,name:"totalRows",kind:"scalar",T:3},{no:4,name:"totalPages",kind:"scalar",T:5}])}}new u;class m extends l.C{create(e){let t=globalThis.Object.create(this.messagePrototype);return void 0!==e&&(0,o.l)(this,t,e),t}internalBinaryRead(e,t,n,a){return null!=a?a:this.create()}internalBinaryWrite(e,t,n){let a=n.writeUnknownFields;return!1!==a&&(!0==a?s.z.onWrite:a)(this.typeName,e,t),t}constructor(){super("bangjeff.v1.HealthCheckRequest",[])}}new m;class g extends l.C{create(e){let t=globalThis.Object.create(this.messagePrototype);return t.error=!1,t.code=0,t.message="",void 0!==e&&(0,o.l)(this,t,e),t}internalBinaryRead(e,t,n,a){let r=null!=a?a:this.create(),o=e.pos+t;for(;e.pos<o;){let[t,a]=e.tag();switch(t){case 1:r.error=e.bool();break;case 2:r.code=e.int32();break;case 3:r.message=e.string();break;default:let o=n.readUnknownField;if("throw"===o)throw new globalThis.Error("Unknown field ".concat(t," (wire type ").concat(a,") for ").concat(this.typeName));let l=e.skip(a);!1!==o&&(!0===o?s.z.onRead:o)(this.typeName,r,t,a,l)}}return r}internalBinaryWrite(e,t,n){!1!==e.error&&t.tag(1,s.TD.Varint).bool(e.error),0!==e.code&&t.tag(2,s.TD.Varint).int32(e.code),""!==e.message&&t.tag(3,s.TD.LengthDelimited).string(e.message);let a=n.writeUnknownFields;return!1!==a&&(!0==a?s.z.onWrite:a)(this.typeName,e,t),t}constructor(){super("bangjeff.v1.HealthCheckResponse",[{no:1,name:"error",kind:"scalar",T:8},{no:2,name:"code",kind:"scalar",T:5},{no:3,name:"message",kind:"scalar",T:9}])}}new g},20067:function(){},72061:function(){}}]);