"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[6846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},s="Overview",c={unversionedId:"connect/nodesdk/overview",id:"connect/nodesdk/overview",title:"Overview",description:"Node.js SDK is a library that you can use to manage your Routr Connect server. It is available as an npm package that allows you to create, read, update, and delete (CRUD) resources in your server.",source:"@site/docs/connect/nodesdk/overview.md",sourceDirName:"connect/nodesdk",slug:"/connect/nodesdk/overview",permalink:"/docs/2.0.0/connect/nodesdk/overview",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/docs/connect/nodesdk/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CTL",permalink:"/docs/2.0.0/connect/command-line/ctl"},next:{title:"SDK",permalink:"/docs/2.0.0/connect/nodesdk/sdk"}},l={},i=[],u={toc:i},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Node.js SDK is a library that you can use to manage your Routr Connect server. It is available as an npm package that allows you to create, read, update, and delete (CRUD) resources in your server."),(0,o.kt)("p",null,"This tool serves as an important component of the Routr Connect server. It is used by the command-line tool to manage your server and the Routr Connect API to manage the server."),(0,o.kt)("p",null,"The following example demonstrates how you can use the Node.js SDK to create a new Domain."),(0,o.kt)("p",null,"To begin using the Node.js SDK, first make sure you have Node and NPM installed. Then, start by creating a new project and installing the Routr Connect SDK."),(0,o.kt)("p",null,"Let\u2019s begin by creating a new project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-project \ncd my-project \nnpm init -y\n")),(0,o.kt)("p",null,'The previous command will create a new directory called "my-project" and initialize a new npm project using the default settings.\nNext, install the SDK width:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @routr/sdk\n")),(0,o.kt)("p",null,"The --save flag will add the SDK as a dependency to your project. Now, create a new file called index.js and add the following code: "),(0,o.kt)("p",null,"Filename: index.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const SDK = require("@routr/sdk");\nconst domains = new SDK.Domains();\n\nconst request = {\n  name: "Local domain",\n  domainUri: "sip.local",\n  accessControlListRef: "4671371b-ff5d-48b1-aabe-d3c5ca5317a3", \n  egressPolicies: [{\n    rule: ".*",\n    numberRef: "4671371b-ff5d-48b1-aabe-d3c5ca5317a3"\n  }],\n  extended: { "key": "value" } \n};\n\ndomains.createDomain(request)\n  .then(console.log)\n  .catch(console.error); // an error occurred\n')),(0,o.kt)("p",null,"In the example above, we assume that the ACL and Number already exist. However, if you need to create those resources, you can use the SDK to do so or use the command-line tool."),(0,o.kt)("p",null,"The extended field is available for you to add custom fields to your resources. This is useful when you want to add metadata to your resources (e.g., an external ID)"),(0,o.kt)("p",null,"Now, go ahead and run the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,o.kt)("p",null,"If everything executed properly, you should now have a new Domain created in your Routr Connect server. This is just a simple example of how to use the Node.js SDK. For complete documentation, please visit the npm page for @routr/sdk at ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@routr/sdk"},"https://www.npmjs.com/package/@routr/sdk"),". "),(0,o.kt)("p",null,"Also, If you prefer using a different language, you can use the gRPC API directly by leveraging the proto files available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fonoster/routr/tree/main/mods/common/src/connect/protos"},"https://github.com/fonoster/routr/tree/main/mods/common/src/connect/protos"),"."))}p.isMDXComponent=!0}}]);