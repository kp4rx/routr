"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[8167],{4321:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(4848),r=t(8453);const o={},a="createAgent",i={id:"api/agents/create",title:"createAgent",description:"Creates a new Agent resource. The Domain must exist before creating the Agent.",source:"@site/versioned_docs/version-1.x.x/api/agents/create.md",sourceDirName:"api/agents",slug:"/api/agents/create",permalink:"/docs/1.x.x/api/agents/create",draft:!1,unlisted:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/api/agents/create.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"overview",permalink:"/docs/1.x.x/api/overview"},next:{title:"deleteAgent",permalink:"/docs/1.x.x/api/agents/delete"}},c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"createagent",children:"createAgent"}),"\n",(0,s.jsxs)(n.p,{children:["Creates a new Agent resource. The Domain must exist before creating the Agent.\nOtherwise, this method responds with a ",(0,s.jsx)(n.code,{children:"UNFULFILLED_DEPENDENCY_RESPONSE"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"URL"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/agents"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Method"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsx)(n.p,{children:"This method does not receive any parameters."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request body"})}),"\n",(0,s.jsxs)(n.p,{children:["A file containing an ",(0,s.jsx)(n.a,{href:"/docs/1.x.x/configuration/agents",children:"Agent"})," resource in ",(0,s.jsx)(n.code,{children:"json"})," format."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response"})}),"\n",(0,s.jsx)(n.p,{children:"If successful this method creates an Agent resource."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sample Call"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'POST /api/{apiversion}/agents\n{\n  "apiVersion": "v1beta1",\n  "kind": "Agent",\n  "metadata": {\n  \t"name": "John Doe"\n  },\n  "spec": {\n  \t"credentials": {\n  \t\t"username": "1001",\n  \t\t"secret": "1234"\n  \t},\n  \t"domains": [\n  \t\t"sip.local"\n  \t]\n  }\n}\n\nHTTP/1.1 201 Created\n{\n  "status": "201",\n  "message": "Created",\n  "data": "ag3f77f6"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(6540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);