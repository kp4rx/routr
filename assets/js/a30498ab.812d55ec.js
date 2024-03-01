"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[3857],{4036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=t(4848),r=t(8453);const i={},o="Agents",d={id:"configuration/agents",title:"Agents",description:"Agents represent SIP endpoints such as softphones, IP phones, or paging speakers.",source:"@site/versioned_docs/version-1.x.x/configuration/agents.md",sourceDirName:"configuration",slug:"/configuration/agents",permalink:"/docs/1.x.x/configuration/agents",draft:!1,unlisted:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/configuration/agents.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebUI",permalink:"/docs/1.x.x/administration/webconsole"},next:{title:"Domains",permalink:"/docs/1.x.x/configuration/domains"}},c={},a=[{value:"Agent Resource",id:"agent-resource",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"agents",children:"Agents"}),"\n",(0,s.jsx)(n.p,{children:"Agents represent SIP endpoints such as softphones, IP phones, or paging speakers.\nA Domain binds agents together. An Agent can belong to one or multiple Domains."}),"\n",(0,s.jsxs)(n.p,{children:["The Agents configuration can be provided using the file ",(0,s.jsx)(n.code,{children:"config/agents.yml"})," located at the root of your Routr installation."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"If using Redis this configuration gets stored in the database."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"agent-resource",children:"Agent Resource"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"apiVersion"}),(0,s.jsx)(n.td,{children:"Indicates the version of the resource (Not yet implemented)"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kind"}),(0,s.jsx)(n.td,{children:"Defines the type of resource"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"metadata.name"}),(0,s.jsx)(n.td,{children:"Friendly name for the SIP device"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"spec.privacy"}),(0,s.jsxs)(n.td,{children:["If set to ",(0,s.jsx)(n.code,{children:"Private"})," the server removes identifiable information for the requests. Defaults to ",(0,s.jsx)(n.code,{children:"None"})]}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"spec.credentials.username"}),(0,s.jsx)(n.td,{children:"Agent's credential username"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"spec.credentials.secret"}),(0,s.jsx)(n.td,{children:"Agent's credential secret"}),(0,s.jsx)(n.td,{children:"Yes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"spec.domains[*]"}),(0,s.jsx)(n.td,{children:"Context/s in which this Agent is allowed to communicate. FQDN is recommended"}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- apiVersion: v1beta1\n  kind: Agent\n  metadata:\n    name: John Doe\n  spec:\n    credentials:\n      username: john\n      secret: '1234'\n    domains: [sip.local]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);