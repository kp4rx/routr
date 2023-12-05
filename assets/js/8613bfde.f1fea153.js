"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[5464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},s="Sending Call Events to NATs",l={unversionedId:"connect/sending-call-events-to-nats",id:"connect/sending-call-events-to-nats",title:"Sending Call Events to NATs",description:"Routr ships with a NATs publisher that can be used to send call events to a NATs server. Call events are a function of the EdgePort. To enable the NATs publisher, you will need to update your EdgePort service to set the environment variable NATSPUBLISHERENABLED to true as well as the environment variable NATSPUBLISHERURL to the URL of your NATs server. For example:",source:"@site/docs/connect/sending-call-events-to-nats.md",sourceDirName:"connect",slug:"/connect/sending-call-events-to-nats",permalink:"/docs/2.0.0/connect/sending-call-events-to-nats",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/docs/connect/sending-call-events-to-nats.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Securing the Server",permalink:"/docs/2.0.0/connect/securing-the-server"},next:{title:"Community",permalink:"/docs/2.0.0/community"}},c={},i=[],u={toc:i},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sending-call-events-to-nats"},"Sending Call Events to NATs"),(0,o.kt)("p",null,"Routr ships with a NATs publisher that can be used to send call events to a NATs server. Call events are a function of the EdgePort. To enable the NATs publisher, you will need to update your EdgePort service to set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"NATS_PUBLISHER_ENABLED")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," as well as the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"NATS_PUBLISHER_URL")," to the URL of your NATs server. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  routr:\n    image: fonoster/routr-one:latest\n    ports:\n      - 51908:51908\n      - 5060:5060/udp\n    environment:\n      - NATS_PUBLISHER_ENABLED=true\n      - NATS_PUBLISHER_URL=nats:4222\n')),(0,o.kt)("p",null,"Once you have enabled the NATs publisher, you can subscribe to the routr.call.started or routr.call.ended subjects to receive call events.\nAs of the writing of this book, only the routr.call.started and routr.call.ended subjects are supported. However, we plan to add more subjects in the future. Be sure to check in later to see if any more have been added."),(0,o.kt)("p",null,"To begin receiving call events, you can use the nats sub command line tool. To do this, first connect to your NATs server by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'nats context add nats \\\n  --server demo.nats.io:4222 \\\n  --description "nats events" \\\n  --select\n')),(0,o.kt)("p",null,"You should then see something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NATs context add",src:n(3064).Z,width:"880",height:"430"})),(0,o.kt)("p",null,"In the previous command, we connected to the demo.nats.io server, which is a public NATs server. You can use your own NATs server if you have one."),(0,o.kt)("p",null,"Then, you can subscribe to the routr.call.started subject by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nats sub routr.call.started\n")),(0,o.kt)("p",null,"After subscribing to the subject and making a call, you should see something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NATs call started",src:n(873).Z,width:"880",height:"430"})),(0,o.kt)("p",null,"Similarly, you can subscribe to the routr.call.ended subject to receive call-ended events. This should produce an output like shown in the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NATs call ended",src:n(5285).Z,width:"880",height:"430"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"NATS_PUBLISHER_SUBJECT")," environment variable to change the based subject name. For example, you can set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"myserver")," to receive call events in the ",(0,o.kt)("inlineCode",{parentName:"p"},"myserver.calls.started")," subject."))}p.isMDXComponent=!0},3064:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nats-context-add-nats-7fe6194a7f1fbc08702107ea126c85fd.png"},5285:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nats-sub-routr-call-ended-98b72fb917c4ed112eb7d2d11c7dcd56.png"},873:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nats-sub-routr-call-started-c75ef439e4a47b8697930de27b57552b.png"}}]);