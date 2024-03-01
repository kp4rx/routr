"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[6346],{9866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=n(4848),s=n(8453);const c={},i="Remote Access",r={id:"administration/cli/remote-access",title:"Remote Access",description:"By default, Routr installs a certificate that only allows for connections using the localhost or 127.0.0.1. To use rctl tool from a remote host, you must generate a certificate that accepts connections to the desired domain name or IP and then update the spec.restService section of the config.yml.",source:"@site/versioned_docs/version-1.x.x/administration/cli/remote-access.md",sourceDirName:"administration/cli",slug:"/administration/cli/remote-access",permalink:"/docs/1.x.x/administration/cli/remote-access",draft:!1,unlisted:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/administration/cli/remote-access.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/1.x.x/administration/cli/installation"},next:{title:"WebUI",permalink:"/docs/1.x.x/administration/webconsole"}},a={},l=[];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"remote-access",children:"Remote Access"}),"\n",(0,o.jsxs)(t.p,{children:["By default, Routr installs a certificate that only allows for connections using the ",(0,o.jsx)(t.code,{children:"localhost"})," or ",(0,o.jsx)(t.code,{children:"127.0.0.1"}),". To use ",(0,o.jsx)(t.code,{children:"rctl"})," tool from a remote host, you must generate a certificate that accepts connections to the desired domain name or IP and then update the ",(0,o.jsx)(t.code,{children:"spec.restService"})," section of the ",(0,o.jsx)(t.code,{children:"config.yml"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Here is an example using a self-signed certificate(usually enough)."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'keytool -genkey -keyalg RSA \\\n-noprompt \\\n-alias routr \\\n-keystore api-cert.jks \\\n-storepass changeit \\\n-keypass changeit \\\n-validity 365 \\\n-keysize 2048 \\\n-dname "CN=domain.com, OU=OSS, O=Your Company Inc, L=Sanford, ST=NC, C=US" \\\n-ext SAN=dns:your.domain.com,dns:localhost,ip:127.0.0.1\n'})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Remember to place the certificate in the ",(0,o.jsx)(t.code,{children:"etc/certs"})," folder"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(6540);const s={},c=o.createContext(s);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);