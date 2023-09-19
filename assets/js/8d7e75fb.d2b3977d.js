"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[1839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:n,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const i={id:"introduction",sidebar_label:"Introduction",hide_title:!0},a=void 0,u={unversionedId:"overview/introduction",id:"overview/introduction",title:"introduction",description:"Community banner",source:"@site/docs/overview/introduction.md",sourceDirName:"overview",slug:"/overview/introduction",permalink:"/docs/2.0.0/overview/introduction",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/docs/overview/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",sidebar_label:"Introduction",hide_title:!0},sidebar:"tutorialSidebar",next:{title:"Architecture",permalink:"/docs/2.0.0/overview/architecture"}},c={},s=[{value:"Welcome",id:"welcome",level:2},{value:"What is Routr?",id:"what-is-routr",level:2},{value:"Why Routr?",id:"why-routr",level:2},{value:"Who is Routr for?",id:"who-is-routr-for",level:2},{value:"What is the difference between Routr and other SIP servers?",id:"what-is-the-difference-between-routr-and-other-sip-servers",level:2}],l={toc:s},d="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Community banner",src:r(502).Z,width:"1600",height:"400"})),(0,n.kt)("h2",{id:"welcome"},"Welcome"),(0,n.kt)("p",null,"On behalf of the Routr team, welcome to this documentation, and thank you for your interest in the project. We are thrilled to have you here and are committed to assisting you in meeting your real-time communication needs."),(0,n.kt)("h2",{id:"what-is-routr"},"What is Routr?"),(0,n.kt)("p",null,"Routr is a lightweight SIP proxy, location server, registrar, and foundational element for your SIP infrastructure. Due to its modular design, you can enhance Routr's capabilities by integrating custom modules, which we call Processors and Middlewares. Our primary objective is to help you incorporate real-time communication into your application or service."),(0,n.kt)("h2",{id:"why-routr"},"Why Routr?"),(0,n.kt)("p",null,"At Fonoster Inc., we are building an open-source alternative to Twilio. We quickly realized the need for a SIP server to power our SIP infrastructure. We needed a SIP server that was easy to deploy in the cloud and easily integrated with our services. However, we noticed that the existing SIP servers in the market were either too complex or expensive to deploy. Because of this, we decided to build our own SIP server. We called it Routr."),(0,n.kt)("p",null,"We hope that by making Routr open-source, we can help companies and developers build their own SIP infrastructure. We also hope that by making Routr open-source, we can help the SIP community to grow."),(0,n.kt)("h2",{id:"who-is-routr-for"},"Who is Routr for?"),(0,n.kt)("p",null,"Routr is for anyone who wants to build a SIP infrastructure. It is for developers who want to add real-time communication to their applications. It is for companies that want to develop their own SIP infrastructure. It is for the SIP community."),(0,n.kt)("h2",{id:"what-is-the-difference-between-routr-and-other-sip-servers"},"What is the difference between Routr and other SIP servers?"),(0,n.kt)("p",null,"Routr goes beyond the SIP server functionality and could be considered a framework for SIP applications. Unlike other SIP servers, Routr stands out as a cloud-native application. Orchestrating Routr with Docker or Kubernetes is a breeze."),(0,n.kt)("p",null,"We also aspired to make Routr developer-friendly. We aim to provide tools for developers to extend every aspect of Routr's functionality."))}p.isMDXComponent=!0},502:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/community-8d918291304e0da9dc2ce1fa68832947.png"}}]);