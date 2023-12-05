"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[6186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Glossary",s={unversionedId:"introduction/glossary",id:"version-1.x.x/introduction/glossary",title:"Glossary",description:"This following table features some essential concepts, including the different routing types implemented by the server.",source:"@site/versioned_docs/version-1.x.x/introduction/glossary.md",sourceDirName:"introduction",slug:"/introduction/glossary",permalink:"/docs/1.x.x/introduction/glossary",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/introduction/glossary.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/1.x.x/introduction/faq"},next:{title:"Media",permalink:"/docs/1.x.x/introduction/media"}},l={},u=[{value:"User",id:"user",level:3},{value:"Agent",id:"agent",level:3},{value:"Domain",id:"domain",level:3},{value:"Peer",id:"peer",level:3},{value:"Gateway",id:"gateway",level:3},{value:"Number",id:"number",level:3},{value:"Intra-Domain Routing (IDR)",id:"intra-domain-routing-idr",level:3},{value:"Domain Ingress Routing (DIR)",id:"domain-ingress-routing-dir",level:3},{value:"Domain Egress Routing (DER)",id:"domain-egress-routing-der",level:3},{value:"Peer Egress Routing (PER)",id:"peer-egress-routing-per",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("p",null,"This following table features some essential concepts, including the different routing types implemented by the server."),(0,o.kt)("h3",{id:"user"},"User"),(0,o.kt)("p",null,"Users perform administrative actions on the server.             "),(0,o.kt)("h3",{id:"agent"},"Agent"),(0,o.kt)("p",null,"Agents represent SIP endpoints such as softphones and IP phones, or paging speakers."),(0,o.kt)("h3",{id:"domain"},"Domain"),(0,o.kt)("p",null,"Enables the creation of isolated groups of Agents"),(0,o.kt)("h3",{id:"peer"},"Peer"),(0,o.kt)("p",null,"Similar to Agents but without Domain boundaries"),(0,o.kt)("h3",{id:"gateway"},"Gateway"),(0,o.kt)("p",null,"IP entity that allows call termination"),(0,o.kt)("h3",{id:"number"},"Number"),(0,o.kt)("p",null,"Routes and translate calls between the PSTN and Routr"),(0,o.kt)("h3",{id:"intra-domain-routing-idr"},"Intra-Domain Routing (IDR)"),(0,o.kt)("p",null,"Routing strategy for signaling within the same Domain"),(0,o.kt)("h3",{id:"domain-ingress-routing-dir"},"Domain Ingress Routing (DIR)"),(0,o.kt)("p",null,"Routing strategy used when an Agent or Peer must go outside the Domain using\na Gateway"),(0,o.kt)("h3",{id:"domain-egress-routing-der"},"Domain Egress Routing (DER)"),(0,o.kt)("p",null,"Calling from an Agent to the PSTN thru a Gateway"),(0,o.kt)("h3",{id:"peer-egress-routing-per"},"Peer Egress Routing (PER)"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("em",{parentName:"p"},"DER")," but applies only to Peers."))}p.isMDXComponent=!0}}]);