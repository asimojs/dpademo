import{options as M,createContext as Q,h as F,render as W}from"preact";import{interfaceId as R,asm as v}from"@asimojs/asimo";import{component as b,componentId as N}from"@traxjs/trax-preact";import{useContext as Y}from"preact/hooks";import{trax as q}from"@traxjs/trax";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(u){if(u.ep)return;u.ep=!0;const i=r(u);fetch(u.href,i)}})();const ee="modulepreload",te=function(e){return"/"+e},T={},C=function(t,r,o){if(!r||r.length===0)return t();const u=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=te(i),i in T)return;T[i]=!0;const l=i.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!o)for(let c=u.length-1;c>=0;c--){const p=u[c];if(p.href===i&&(!l||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":ee,l||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),l)return new Promise((c,p)=>{s.addEventListener("load",c),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},k=R("asimo.doc.stores.NavService"),B=R("asimo.doc.stores.SearchService");var re=0;function d(e,t,r,o,u,i){var l,a,n={};for(a in t)a=="ref"?l=t[a]:n[a]=t[a];var s={type:e,props:n,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--re,__source:u,__self:i};if(typeof e=="function"&&(l=e.defaultProps))for(a in l)n[a]===void 0&&(n[a]=l[a]);return M.vnode&&M.vnode(s),s}const ne=b("SearchPanel",e=>d("div",{"data-id":N(),className:"search-panel  py-64",children:d("div",{className:"input-container flex justify-center",children:d(z,{className:"h-11 w-1/2 py-2.5"})})})),z=b("SearchPanel",e=>{let{className:t}=e;return t=t||"",d("div",{className:`${t} flex px-3 bg-neutral-200 rounded-full text-neutral-600
    cursor-pointer
    border border-neutral-200 hover:border-neutral-400`,onClick:r,children:[d("div",{className:"mx-1",children:d(se,{})}),d("div",{children:["Search: ",d("span",{className:"font-medium text-sky-700",children:" Homer Simpson "})]})]});async function r(){const o=await v.get(B);o==null||o.search({searchInput:"Homer Simpson"})}}),se=b("SearchIcon",()=>{let e=32;return d("svg",{width:e,height:e,viewBox:"0 0 24 24",version:"1.1","aria-hidden":"false",children:[d("desc",{lang:"en",children:"Magnifying glass"}),d("path",{className:"fill-current  stroke-0",d:"M13.07336,12.29053,10.14679,9.364a3.9711,3.9711,0,1,0-.78284.78284l2.92658,2.92657Zm-6.064-2.4516A2.82914,2.82914,0,1,1,9.8385,7.00934,2.83286,2.83286,0,0,1,7.00934,9.83893Z"})]})}),ae=b("NavBar",e=>{const{nav:t}=e;let r=!1;const o=t.data.mainView;return r=o.name==="search"&&o.panel==="results",d("div",{"data-id":N(),className:"navbar flex justify-center",children:d("div",{className:"input-container flex flex-grow p-3  max-w-screen-xl",children:[d("div",{className:"w-40 ml-2 text-lg cursor-pointer",onClick:t.home,title:"Dynamic Page Application Demo",children:[d("span",{className:"font-semibold",children:"dpa"})," demo"]}),d("div",{className:"flex-grow",children:r?d(z,{className:"h-8 w-1/2 py-1"}):""}),d("div",{className:"text-neutral-600 mr-2",children:d(ie,{})})]})})}),ie=b("GithubLogo",()=>d("a",{href:"https://github.com/asimojs/dpademo",target:"_blank","aria-valuetext":"Link to project's Github page",children:d("svg",{width:"28",height:"28",viewBox:"0 0 96 98",xmlns:"http://www.w3.org/2000/svg",children:d("path",{className:"fill-current","fill-rule":"evenodd","clip-rule":"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"})})})),H="__cC0",Z="__c";function oe(){return Y({[Z]:H})}let V=0;function le(){V++,V>1&&console.error("[utils.createGlobalContext] Global Context cannot be re-render and must be used at the application root");const e={mainCtxt:null,subCtxts:{}},t=Q(e);return e.mainCtxt=t,(!t||t[Z]!==H)&&console.error("[utils.createGlobalContext] New preact version detected - please update the utils library!"),r=>d(t.Provider,{value:e,children:r.children})}function ce(e,t){let r=oe();return r||(r={mainCtxt:null,subCtxts:{}},console.error("[UTILS] Global Context not found -> createGlobalContext() is required to use createContext()")),r.subCtxts[e.ns]=t,{Provider:o=>{const{value:u,children:i}=o;u!==void 0&&(r.subCtxts[e.ns]=o.value);const l=r.mainCtxt;return d(l.Provider,{value:r,children:i})}}}const ue=R("asimo.dpademo.views.Lml2JSX"),de=b("SearchResultsPanel",e=>{const{searchService:t,nav:r}=e,o=t.data.lastResult;if(o===null||o.type==="Error")return d("div",{children:"[Under construction]"});const u=o.results,i=o.lml2jsx,l=ce(ue,i);return d(l.Provider,{value:i,children:d("div",{"data-id":N(),className:"results-container flex justify-center text-sm",children:d("div",{className:"w-full max-w-screen-xl relative",children:[d("div",{className:"header bg-neutral-100 p-5 text-sm",children:d("div",{children:[" About ",d("b",{className:"font-bold",children:u.totalMatchCount})," results (",u.processingTime," seconds) "]})}),d("div",{className:"body flex pt-3 px-5",children:[d("div",{className:"main flex-grow me-5",children:fe(t)}),d("div",{className:"sidebar w-4/12",children:u.sidebar?d("div",{className:"text-neutral-700 border-l border-l-neutral-200 ps-5 pb-9",children:i(u.sidebar)}):""})]}),u.popover?d("div",{className:"popover absolute w-5/12 top-0 right-0",children:i(u.popover)}):""]})})})});function fe(e){const r=e.data.lastResult;return r===null?"":d("div",{className:"searchResults",lang:"en",children:[r.type==="Error"?d("div",{className:"Error",children:["Error: ",r.message]}):"",r.type==="SearchResults"?pe(r):""]})}function pe(e){return d("div",{className:"searchResults",lang:"en",children:d("div",{style:{width:657},className:"text-neutral-700",children:e.lml2jsx(e.results.main)})})}const me=b("MainLayout",e=>{const{nav:t}=e,r=t.data.mainView;let o="[...]";return r.name==="search"?r.panel==="results"?o=d(de,{searchService:r.$store,nav:t}):r.panel==="search"&&(o=d(ne,{nav:t})):r.name==="doc"&&(o="[ Under construction ]"),d("div",{"data-id":N(),className:"main-layout",style:{minWidth:"1024px"},children:[d(ae,{nav:t}),o]})});async function he(e){if(e.searchInput==="Homer Simpson"){const t=await C(()=>import("./homer-0d584979.js"),[]);return ve(t.default)}return{type:"Error",message:"Invalid query: "+e.searchInput}}function ve(e){return JSON.parse(JSON.stringify(e))}const K=R("asimo.doc.api.SearchAPI");v.registerService(K,()=>he);function ge(){return q.createStore("NavService",e=>{let t=null;const r=e.init({mainView:{name:"loading"}},{init:function*(o,u){u.maxComputeCount=1,t=yield v.get(B),o.mainView.name==="loading"&&(o.mainView={name:"search",panel:"search",$store:t})}});return{data:r,home(){r.mainView={name:"search",panel:"search",$store:t}}}})}v.registerService(k,ge);function S(e){if(Array.isArray(e)){if(e.length===0)return"fragment";const t=e[0];if(typeof t=="string"&&t.length>1){const r=t[0];if(r===$)return"element";if(r===J)return"component";if(r===U||r===ye)return"invalid"}return"fragment"}else if(typeof e=="string")return"text";return"invalid"}const $="#",J="*",U="@",ye="!",be="!",we=".",xe=/^(\#|\*|\!|\@)(\w+\:)?([\w\-]+)(\+[\w\-]+)?(\.[\.\w\-]+)*(\!.+)?$/;function j(e,t){if(e==null)return"";const r=S(e);if(r==="text")return a(e);if(r==="invalid")return n(`Invalid LML node: ${JSON.stringify(e)}`);const o=r==="fragment",u=e,i=u.length;if(i===0)return"";if(!o){const s=u[0].match(xe);if(s){const c=s[1],p=s[2],f=s[3],m=s[4],g=s[5],y=s[6],_=p?p.slice(0,-1):"",A=m?m.slice(1):"";let w;if(g){const x=g.split(we);w=[];for(const P of x)P!=""&&w.push(P)}let I=1,h;const E=u[I];E&&typeof E=="object"&&!Array.isArray(E)&&(h=E,I++,A&&(h.type=A),w&&(h.class&&typeof h.class=="string"?h.class=w.join(" ")+" "+h.class:h.class=w.join(" "))),!h&&(w||A)&&(h={},A&&(h.type=A),w&&(h.class=w.join(" "))),y&&(h||(h={}),h.key=y.slice(1));let O;if(i>I){O=[];for(let x=I;x<i;x++)O.push(j(u[x],t))}if(c===$||c===J||c===U){let x=c===$?"element":"component";c===U&&(x="decorator");const P={type:x,tagName:f,ns:_};return t.format(P,h,O)}else n(`Unsupported node prefix: ${c}`);return""}}const l=[];for(const s of u)if(typeof s=="string"||Array.isArray(s)){const c=j(s,t);if(c)if(Array.isArray(c))for(let p of c)l.push(p);else l.push(c)}else n(`Invalid LML node: ${JSON.stringify(s)}`);return l.length>0?l:"";function a(s){return t.format({type:"text",value:s})}function n(s){return t.error?(s.length>100&&(s=s.slice(0,100)+"..."),t.error(s)):console.error("[LML Scan Error] "+s),""}}const Se={allowedElements:new Set(["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","main","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rb","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","img"]),forbiddenElementAttributes:new Set(["style","srcset"]),forbidEventHandlers:!0,urlAttributes:new Set(["href","src","cite","action","profile","longdesc","usemap","formaction","icon","poster","background","codebase","data","classid","manifest"]),allowedUrlPrefixes:["/","./","http://","https://","mailto://","tel://","data:image/"]};function Ne(e,t,r,o,u){o=o||(a=>console.error("[lm2JSX Error] "+a));const i=u||Se;let l=null;if(i.allowedUrlPrefixes.length){const a=`^(${i.allowedUrlPrefixes.join("|")})`;l=new RegExp(a,"i")}return j(e,{format:(a,n,s)=>{const c=a.type;if(c==="text")return a.value;if(c==="element"||c==="component"){if(c==="element"){if(!i.allowedElements.has(a.tagName))return o(`Unauthorized element: ${a.tagName}`),"";if(n){for(const f of Object.getOwnPropertyNames(n))if(i.forbiddenElementAttributes.has(f))o(`Unauthorized element attribute: ${f}`),delete n[f];else if(i.forbidEventHandlers&&f.match(/^on/i))o(`Unauthorized event handler: ${f}`),delete n[f];else if(l&&i.urlAttributes.has(f)){const m=n[f];(typeof m!="string"||!m.match(l))&&(o(`Unauthorized URL: ${f}="${m}"`),delete n[f])}}}n&&n.class&&(n.className=n.class),n&&n.key&&(n.keyValue=n.key);let p=a.tagName;if(c==="component"){const f=r&&r(p,a.ns||"")||null;if(!f)return o("Invalid component: "+(a.ns?a.ns+":":"")+p),"";p=f}return s?t(p,n||null,...s):t(p,n||null)}return o("Unsupported node type: "+c),""},error:o})}function D(e,t){let r=S(e)==="fragment"?e:[e];const o=new Set;for(const l of t)l.node&&o.add(l.node);const u=new Map,i=o.size;if(i>0){let l=0;L(e,(a,n,s,c)=>(o.has(a)&&(l++,u.set(a,{node:n,parent:s,parentRef:c})),l<i),r,0)}for(const l of t){const a=l.action;let n=r,s=null,c="",p="";if(l.node){let f=u.get(l.node);if(f){if(s=f.parent,c=f.parentRef,n=f.node,p=l.path||"",p===""){const m=S(n);m!=="invalid"&&m!=="text"&&(a==="append"||a==="prepend")&&(p="children")}}else continue}if(p==="children"){if(n.length>1){let f=1;if(typeof n[f]!="string"&&!Array.isArray(n[f])&&f++,a==="delete")n.splice(f,n.length-f);else{const m=l.content,g=S(m);if(g!=="invalid"){const y=g==="fragment";a==="insertBefore"||a==="prepend"?y?n.splice.apply(n,[f,0,...m]):n.splice(f,0,m):a==="insertAfter"||a==="append"?y?n.push.apply(n,m):n.push(m):a==="replace"&&(y?n.splice.apply(n,[f,n.length-f,...m]):n.splice(f,n.length-f,m))}}}continue}else if(p){const f=p.split("/");if(Array.isArray(n)&&n.length>1)n=n[1];else continue;for(const m of f)s=n,c=m,n=s[c]}if(n)if(a==="delete")Array.isArray(s)?typeof c=="number"&&s.splice(c,1):s?s[c]=[]:r=[];else{const f=l.content,m=S(f);if(m!=="invalid"){const g=m==="fragment";if(a==="insertBefore"||a==="insertAfter"||a==="replace")if(Array.isArray(s)){if(typeof c=="number"){let y=c,_=0;a==="insertAfter"?y++:a==="replace"&&_++,g?s.splice.apply(s,[y,_,...f]):s.splice(y,_,f)}}else s?a==="insertBefore"?g?s[c]=[...f,n]:s[c]=[f,n]:a==="insertAfter"?g?s[c]=[n,...f]:s[c]=[n,f]:a==="replace"&&(s[c]=f):a==="replace"&&(r=g?f:[f]);else(a==="prepend"||a==="append")&&S(n)==="fragment"&&(a==="append"?g?n.push.apply(n,f):n.push(f):a==="prepend"&&(g?n.splice.apply(n,[0,0,...f]):n.splice(0,0,f)))}}}return r.length===1?r[0]:r}function L(e,t,r,o){if(!e)return!0;const u=S(e);if(Array.isArray(e)&&e.length){if(u==="component"||u==="element"){let i="";const l=e[0].indexOf(be);if(l>-1&&(i=e[0].slice(l+1)),i&&t(i,e,r,o)===!1)return!1;for(let a=1;e.length>a;a++)if(!L(e[a],t,e,a))return!1}else for(let i=0;e.length>i;i++)if(!L(e[i],t,e,i))return!1}else if(typeof e=="object"){for(const i of Object.getOwnPropertyNames(e))if(!L(e[i],t,e,i))return!1}return!0}async function _e(e){if(e.searchInput==="Homer Simpson"){const t=e.src.lastContentKey;if(t==="2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Qq7kBKAB6BAheEAA")return(await C(()=>import("./homer-more-2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Qq7kBKAB6BAheEAA-4a719544.js"),[])).default;if(t==="2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Qq7kBKAB6BAhAAAB")return(await C(()=>import("./homer-more-2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Qq7kBKAB6BAhAAAB-cb394a54.js"),[])).default;if(e.src.componentType==="ImgList")return(await C(()=>import("./homer-more-2ahUKEwjczO7Zgub-AhUZVKQEHZ62Du0Q_R16BAgkEAA1-fa4dd09d.js"),[])).default}return{type:"Error",message:"Invalid query: "+e.searchInput}}const X=R("asimo.doc.api.SearchMoreAPI");v.registerService(X,()=>_e);function Ae(){return q.createStore("SearchService",e=>{const t=e.init({query:{searchInput:""},lastResult:null}),r={};let o={};const u={data:t,async search(l,a=!0){const n=l||t.query,c=await(await v.get(K))(n);return c.type==="SearchResponse"?(await u.loadSearchResponse(c,n,a),!0):!1},async loadSearchResponse(l,a,n=!0){o={};try{await G(l.bundles,o),n&&await i()}catch(s){console.log("Module load error:",s)}t.lastResult={type:"SearchResults",query:{searchInput:a.searchInput},results:l,lml2jsx:s=>Ne(s,F,(c,p)=>{if(p){if(o&&o[p])return o[p][c]||null}else return r[c]||null;return null})}},async getMoreResults(l,a=!0){if(!t.lastResult||t.lastResult.type!=="SearchResults")return!1;const s=await(await v.get(X))(l);if(s.type==="SearchResponse"){try{await G(s.bundles,o),a&&await i()}catch(c){console.log("Module load error:",c)}if(s.mainUpdates){const c=t.lastResult.results;s.main?c.main=s.main:s.mainUpdates&&(c.main=D(c.main,s.mainUpdates))}if(s.popoverUpdates){const c=t.lastResult.results;c.popover||(c.popover=[]),c.popover=D(c.popover,s.popoverUpdates)}}return!0},registerBaseComponent(l,a){r[l]=a},closePopover(){const l=t.lastResult;l&&l.type==="SearchResults"&&l.results.popover&&(l.results.popover="")}};return u;async function i(){const l=await v.get(k);l.data.mainView={name:"search",panel:"results",$store:u}}})}const Ce=/^(\/)|(.\/)/i;async function G(e,t){if(e){const r=[],o=[];for(const n of Object.getOwnPropertyNames(e)){const s=e[n].ns;e[n].src.match(Ce)&&(r.push({name:n,ns:s,src:e[n].src}),o.push(s))}const u=await v.get.apply(v,o);let i=Array.isArray(u)?u:[u];const l=[],a=[];for(let n=0;i.length>n;n++)i[n]?r[n].module=i[n]:(a.push(n),l.push(C(()=>import(r[n].src),[])));if(a.length){const n=await Promise.all(l);for(let s=0;n.length>s;s++)r[a[s]].module=n[s].default}if(t)for(let n of r)t[n.name]=n.module}}v.registerService(B,Ae);const Re=b("Button",e=>{let{href:t,align:r,className:o,children:u}=e;r=r||"center",o=o||"";let i="justify-center";return r==="start"&&(i="justify-start pl-3"),d("div",{"data-id":N(),className:`btn flex ${o} h-12`,children:d("a",{href:t,className:`flex-grow flex bg-neutral-200 mt-2 rounded-full ${i} hover:bg-neutral-400 hover:text-white`,children:d("span",{"data-id":N(),className:"h-full pt-2.5 text-base overflow-hidden",children:u})})})}),Ie=b("Icon",e=>{let{type:t,size:r,className:o}=e;if(t=t||"magnifier",t==="magnifier"){r=r||22;const i=`inline-block relative ${o||"mx-2"}`;return d("svg",{width:r,height:r,viewBox:"0 0 18 18",version:"1.1","aria-hidden":"false",className:i,children:[d("desc",{lang:"en",children:"Magnifying glass"}),d("path",{className:"fill-current  stroke-0",d:"M13.07336,12.29053,10.14679,9.364a3.9711,3.9711,0,1,0-.78284.78284l2.92658,2.92657Zm-6.064-2.4516A2.82914,2.82914,0,1,1,9.8385,7.00934,2.83286,2.83286,0,0,1,7.00934,9.83893Z"})]})}r=r||18;const u=`inline-block relative ${o||"-top-0.5 mx-2"}`;return d("svg",{width:r,height:r,focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",className:u,children:d("path",{className:"fill-current",d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})}),Ee=b("Columns",e=>{let{className:t,children:r}=e;return t=t||"mt-4",d("div",{"data-id":N(),className:`columns ${t} columns-2`,children:d("div",{children:r})})});async function Pe(){const e=await v.get(k),t=await v.get(B);t.registerBaseComponent("btn",Re),t.registerBaseComponent("icon",Ie),t.registerBaseComponent("cols",Ee);const r=globalThis["init-state"];r&&r.dataType==="SearchResponse"&&await t.loadSearchResponse(r.data.response,r.data.query);const o=le();W(d(o,{children:d("div",{className:"mainapp",children:d(me,{nav:e})})}),document.getElementById("main"))}Pe();
