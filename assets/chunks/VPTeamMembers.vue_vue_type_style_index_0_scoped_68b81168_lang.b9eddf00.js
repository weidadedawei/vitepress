import{s as ne,i as d,k as M,l as q,m as oe,p as E,q as ae,v as se,f as A,x as ie,y as U,_ as B,o as h,c as V,b as X,h as I,w as ce,z as le,u as x,g as re,n as _e,A as de,B as ue,C as ve,F as ge,j as pe}from"./framework.a6941a15.js";const fe=JSON.parse('{"lang":"zh-CN","title":"YunLong","description":"\u5FAE\u670D\u52A1\u654F\u6377\u5F00\u53D1\u6846\u67B6","base":"/","head":[],"appearance":true,"themeConfig":{"nav":[{"text":"\u6307\u5357","link":"/guide/what-is-yunlong","activeMatch":"/guide/"},{"text":"\u914D\u7F6E","link":"/config/introduction","activeMatch":"/config/"},{"text":"0.0.1","items":[{"text":"\u66F4\u65B0\u65E5\u5FD7","link":"https://github.com/weidadedawei/yunlong/blob/main/CHANGELOG.md"},{"text":"\u8D21\u732E","link":"https://github.com/weidadedawei/yunlong/blob/main/contributing.md"}]}],"sidebar":{"/guide/":[{"text":"Introduction","collapsible":true,"items":[{"text":"\u4EC0\u4E48\u662F YunLong?","link":"/guide/what-is-yunlong"},{"text":"\u5F00\u53D1\u8BA1\u5212","link":"/guide/plan-gantt"},{"text":"\u5FEB\u901F\u5F00\u59CB","link":"/guide/getting-started"},{"text":"Configuration","link":"/guide/configuration"},{"text":"Deploying","link":"/guide/deploying"}]},{"text":"Writing","collapsible":true,"items":[{"text":"Markdown","link":"/guide/markdown"},{"text":"Asset Handling","link":"/guide/asset-handling"},{"text":"Frontmatter","link":"/guide/frontmatter"},{"text":"Using Vue in Markdown","link":"/guide/using-vue"},{"text":"API Reference","link":"/guide/api"}]},{"text":"Theme","collapsible":true,"items":[{"text":"Introduction","link":"/guide/theme-introduction"},{"text":"Nav","link":"/guide/theme-nav"},{"text":"Sidebar","link":"/guide/theme-sidebar"},{"text":"Prev Next Link","link":"/guide/theme-prev-next-link"},{"text":"Edit Link","link":"/guide/theme-edit-link"},{"text":"Last Updated","link":"/guide/theme-last-updated"},{"text":"Layout","link":"/guide/theme-layout"},{"text":"Home Page","link":"/guide/theme-home-page"},{"text":"Team Page","link":"/guide/theme-team-page"},{"text":"Badge","link":"/guide/theme-badge"},{"text":"Footer","link":"/guide/theme-footer"},{"text":"Search","link":"/guide/theme-search"},{"text":"Carbon Ads","link":"/guide/theme-carbon-ads"}]},{"text":"Migrations","collapsible":true,"items":[{"text":"Migration from VuePress","link":"/guide/migration-from-vuepress"},{"text":"Migration from VitePress 0.x","link":"/guide/migration-from-vitepress-0"}]}],"/config/":[{"text":"Config","items":[{"text":"Introduction","link":"/config/introduction"},{"text":"App Configs","link":"/config/app-configs"},{"text":"Theme Configs","link":"/config/theme-configs"},{"text":"Frontmatter Configs","link":"/config/frontmatter-configs"}]}]},"editLink":{"pattern":"https://github.com/weidadedawei/vitepress/edit/main/docs/:path","text":"Edit this page on GitHub"},"socialLinks":[{"icon":"github","link":"https://github.com/weidadedawei/yunlong"}],"footer":{"message":"Released under the MIT License.","copyright":"Copyright \xA9 2022-present YunLong <a href=\\"https://beian.miit.gov.cn/\\" target=\\"_blank\\">\u82CFICP\u590718064574\u53F7-1</a>"},"algolia":{"appId":"8J64VVRP8K","apiKey":"a18e2f4cc5665f6602c5631fd868adfd","indexName":"vitepress"},"carbonAds":{"code":"CEBDT27Y","placement":"vuejsorg"}},"locales":{},"langs":{},"scrollOffset":90,"cleanUrls":"disabled"}'),z=/^[a-z]+:/i,lt="vitepress-theme-appearance",g=typeof window<"u",J={relativePath:"",title:"404",description:"Not Found",headers:[],frontmatter:{sidebar:!1,layout:"page"},lastUpdated:0};function he(t,e){e.sort((n,o)=>{const a=o.split("/").length-n.split("/").length;return a!==0?a:o.length-n.length});for(const n of e)if(t.startsWith(n))return n}function j(t,e){const n=he(e,Object.keys(t));return n?t[n]:void 0}function me(t){const{locales:e}=t.themeConfig||{},n=t.locales;return e&&n?Object.keys(e).reduce((o,a)=>(o[a]={label:e[a].label,lang:n[a].lang},o),{}):{}}function ye(t,e){e=be(t,e);const n=j(t.locales||{},e),o=j(t.themeConfig.locales||{},e);return Object.assign({},t,n,{themeConfig:Object.assign({},t.themeConfig,o,{locales:{}}),lang:(n||t).lang,locales:{},langs:me(t)})}function we(t,e){var i;const n=e.title||t.title,o=(i=e.titleTemplate)!=null?i:t.titleTemplate;if(typeof o=="string"&&o.includes(":title"))return o.replace(/:title/g,n);const a=xe(t.title,o);return`${n}${a}`}function xe(t,e){return e===!1?"":e===!0||e===void 0?` | ${t}`:t===e?"":` | ${e}`}function be(t,e){if(!g)return e;const n=t.base,o=n.endsWith("/")?n.slice(0,-1):n;return e.slice(o.length)}function ke(t,e){const[n,o]=e;if(n!=="meta")return!1;const a=Object.entries(o)[0];return a==null?!1:t.some(([i,c])=>i===n&&c[a[0]]===a[1])}function rt(t,e){return[...t.filter(n=>!ke(e,n)),...e]}const Pe=/[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,Ve=/^[a-z]:/i;function O(t){const e=Ve.exec(t),n=e?e[0]:"";return n+t.slice(n.length).replace(Pe,"_").replace(/(^|\/)_+(?=[^/]*$)/,"$1")}function Se(t,e){return`${t}${e}`.replace(/\/+/g,"/")}function S(t){return z.test(t)?t:Se(P.value.base,t)}function _t(t){let e=t.replace(/\.html$/,"");if(e=decodeURIComponent(e),e.endsWith("/")&&(e+="index"),g){const n="/";e=O(e.slice(n.length).replace(/\//g,"_")||"index")+".md";const o=__VP_HASH_MAP__[e.toLowerCase()];e=`${n}assets/${e}.${o}.js`}else e=`./${O(e.slice(1).replace(/\//g,"_"))}.md.js`;return e}const Le=Symbol(),P=ne(fe);function dt(t){const e=d(()=>ye(P.value,t.path));return{site:e,theme:d(()=>e.value.themeConfig),page:d(()=>t.data),frontmatter:d(()=>t.data.frontmatter),lang:d(()=>e.value.lang),localePath:d(()=>{const{langs:n,lang:o}=e.value,a=Object.keys(n).find(i=>n[i].lang===o);return S(a||"/")}),title:d(()=>we(e.value,t.data)),description:d(()=>t.data.description||e.value.description),isDark:M(!1)}}function Ce(){const t=q(Le);if(!t)throw new Error("vitepress data not properly injected in app");return t}const Te=Symbol(),Y="http://a.com",Me=()=>({path:"/",component:null,data:J});function ut(t,e){const n=oe(Me()),o={route:n,go:a};async function a(s=g?location.href:"/"){var r,u;await((r=o.onBeforeRouteChange)==null?void 0:r.call(o,s));const l=new URL(s,Y);P.value.cleanUrls==="disabled"&&!l.pathname.endsWith("/")&&!l.pathname.endsWith(".html")&&(l.pathname+=".html",s=l.pathname+l.search+l.hash),g&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",s)),await c(s),await((u=o.onAfterRouteChanged)==null?void 0:u.call(o,s))}let i=null;async function c(s,l=0,r=!1){const u=new URL(s,Y),v=i=u.pathname;try{let p=await t(v);if(i===v){i=null;const{default:_,__pageData:R}=p;if(!_)throw new Error(`Invalid route component: ${_}`);n.path=g?v:S(v),n.component=E(_),n.data=E(R),g&&se(()=>{if(u.hash&&!l){let w=null;try{w=document.querySelector(decodeURIComponent(u.hash))}catch(m){console.warn(m)}if(w){G(w,u.hash);return}}window.scrollTo(0,l)})}}catch(p){if(!/fetch/.test(p.message)&&!/^\/404(\.html|\/)?$/.test(s)&&console.error(p),!r)try{const _=await fetch(P.value.base+"hashmap.json");window.__VP_HASH_MAP__=await _.json(),await c(s,l,!0);return}catch{}i===v&&(i=null,n.path=g?v:S(v),n.component=e?E(e):null,n.data=J)}}return g&&(window.addEventListener("click",s=>{if(s.target.closest("button"))return;const r=s.target.closest("a");if(r&&!r.closest(".vp-raw")&&!r.download){const{href:u,origin:v,pathname:p,hash:_,search:R,target:w}=r,m=window.location,D=p.match(/\.\w+$/);!s.ctrlKey&&!s.shiftKey&&!s.altKey&&!s.metaKey&&w!=="_blank"&&v===m.origin&&!(D&&D[0]!==".html")&&(s.preventDefault(),p===m.pathname&&R===m.search?_&&_!==m.hash&&(history.pushState(null,"",_),window.dispatchEvent(new Event("hashchange")),G(r,_,r.classList.contains("header-anchor"))):a(u))}},{capture:!0}),window.addEventListener("popstate",s=>{c(location.href,s.state&&s.state.scrollPosition||0)}),window.addEventListener("hashchange",s=>{s.preventDefault()})),o}function Ae(){const t=q(Te);if(!t)throw new Error("useRouter() is called without provider.");return t}function Be(){return Ae().route}function G(t,e,n=!1){let o=null;try{o=t.classList.contains("header-anchor")?t:document.querySelector(decodeURIComponent(e))}catch(a){console.warn(a)}if(o){let a=P.value.scrollOffset;typeof a=="string"&&(a=document.querySelector(a).getBoundingClientRect().bottom+24);const i=parseInt(window.getComputedStyle(o).paddingTop,10),c=window.scrollY+o.getBoundingClientRect().top-a+i;!n||Math.abs(c-window.scrollY)>window.innerHeight?window.scrollTo(0,c):window.scrollTo({left:0,top:c,behavior:"smooth"})}}const vt=A({name:"VitePressContent",props:{onContentUpdated:Function},setup(t){const e=Be();return ie(()=>{var n;(n=t.onContentUpdated)==null||n.call(t)}),()=>U("div",{style:{position:"relative"}},[e.component?U(e.component):null])}}),Z=/#.*$/,Re=/(index)?\.(md|html)$/,Ee=typeof window<"u",He=M(Ee?location.hash:"");function Ie(t){return z.test(t)}function gt(t,e){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(t,e):(t(),o=!0,setTimeout(()=>{o=!1},e))}}function pt(t,e,n=!1){if(e===void 0)return!1;if(t=W(`/${t}`),n)return new RegExp(e).test(t);if(W(e)!==t)return!1;const o=e.match(Z);return o?He.value===o[0]:!0}function ft(t){return/^\//.test(t)?t:`/${t}`}function W(t){return decodeURI(t).replace(Z,"").replace(Re,"")}function ze(t){if(Ie(t))return t;const{site:e}=Ce(),{pathname:n,search:o,hash:a}=new URL(t,"http://example.com"),i=n.endsWith("/")||n.endsWith(".html")?t:`${n.replace(/(\.md)?$/,e.value.cleanUrls==="disabled"?".html":"")}${o}${a}`;return S(i)}const Ne={},$e={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px"},Fe=X("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),De=X("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"},null,-1),Ue=[Fe,De];function je(t,e){return h(),V("svg",$e,Ue)}const Oe=B(Ne,[["render",je]]),Ye=A({__name:"VPLink",props:{href:null,noIcon:{type:Boolean}},setup(t){const e=t,n=d(()=>e.href&&z.test(e.href));return(o,a)=>(h(),I(de(t.href?"a":"span"),{class:_e(["VPLink",{link:t.href}]),href:t.href?x(ze)(t.href):void 0,target:x(n)?"_blank":void 0,rel:x(n)?"noreferrer":void 0},{default:ce(()=>[le(o.$slots,"default",{},void 0,!0),x(n)&&!t.noIcon?(h(),I(Oe,{key:0,class:"icon"})):re("",!0)]),_:3},8,["class","href","target","rel"]))}});const ht=B(Ye,[["__scopeId","data-v-666a4cc4"]]);const N=M();let Q=!1,H=0;function mt(t){const e=M(!1);if(typeof window<"u"){!Q&&Ge(),H++;const n=ue(N,o=>{var a,i,c;o===t.el.value||((a=t.el.value)==null?void 0:a.contains(o))?(e.value=!0,(i=t.onFocus)==null||i.call(t)):(e.value=!1,(c=t.onBlur)==null||c.call(t))});ve(()=>{n(),H--,H||We()})}return ae(e)}function Ge(){document.addEventListener("focusin",ee),Q=!0,N.value=document.activeElement}function We(){document.removeEventListener("focusin",ee)}function ee(){N.value=document.activeElement}const Ke={discord:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',facebook:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',instagram:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',slack:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',twitter:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',youtube:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'},qe=["href","innerHTML"],Xe=A({__name:"VPSocialLink",props:{icon:null,link:null},setup(t){const e=t,n=d(()=>typeof e.icon=="object"?e.icon.svg:Ke[e.icon]);return(o,a)=>(h(),V("a",{class:"VPSocialLink",href:t.link,target:"_blank",rel:"noopener",innerHTML:x(n)},null,8,qe))}});const Je=B(Xe,[["__scopeId","data-v-86be2d7e"]]),Ze={class:"VPSocialLinks"},Qe=A({__name:"VPSocialLinks",props:{links:null},setup(t){return(e,n)=>(h(),V("div",Ze,[(h(!0),V(ge,null,pe(t.links,({link:o,icon:a})=>(h(),I(Je,{key:o,icon:a,link:o},null,8,["icon","link"]))),128))]))}});const yt=B(Qe,[["__scopeId","data-v-9b9b2706"]]);function et(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var $=!1;if(typeof window<"u"){var K={get passive(){$=!0}};window.addEventListener("testPassive",null,K),window.removeEventListener("testPassive",null,K)}var L=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),y=[],C=!1,F=-1,b=void 0,f=void 0,k=void 0,te=function(e){return y.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},T=function(e){var n=e||window.event;return te(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},tt=function(e){if(k===void 0){var n=!!e&&e.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(n&&o>0){var a=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);k=document.body.style.paddingRight,document.body.style.paddingRight=a+o+"px"}}b===void 0&&(b=document.body.style.overflow,document.body.style.overflow="hidden")},nt=function(){k!==void 0&&(document.body.style.paddingRight=k,k=void 0),b!==void 0&&(document.body.style.overflow=b,b=void 0)},ot=function(){return window.requestAnimationFrame(function(){if(f===void 0){f={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,o=e.scrollX,a=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var i=a-window.innerHeight;i&&n>=a&&(document.body.style.top=-(n+i))})},300)}})},at=function(){if(f!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=f.position,document.body.style.top=f.top,document.body.style.left=f.left,window.scrollTo(n,e),f=void 0}},st=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},it=function(e,n){var o=e.targetTouches[0].clientY-F;return te(e.target)?!1:n&&n.scrollTop===0&&o>0||st(n)&&o<0?T(e):(e.stopPropagation(),!0)},wt=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!y.some(function(a){return a.targetElement===e})){var o={targetElement:e,options:n||{}};y=[].concat(et(y),[o]),L?ot():tt(n),L&&(e.ontouchstart=function(a){a.targetTouches.length===1&&(F=a.targetTouches[0].clientY)},e.ontouchmove=function(a){a.targetTouches.length===1&&it(a,e)},C||(document.addEventListener("touchmove",T,$?{passive:!1}:void 0),C=!0))}},xt=function(){L&&(y.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),C&&(document.removeEventListener("touchmove",T,$?{passive:!1}:void 0),C=!1),F=-1),L?at():nt(),y=[]};export{lt as A,vt as C,z as E,Te as R,ht as V,yt as a,Ce as b,mt as c,wt as d,ft as e,xt as f,we as g,g as h,pt as i,dt as j,Le as k,ut as l,rt as m,ze as n,Ae as o,_t as p,P as s,gt as t,Be as u,S as w};
