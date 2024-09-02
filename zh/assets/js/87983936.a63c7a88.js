"use strict";(self.webpackChunknine_one_docs=self.webpackChunknine_one_docs||[]).push([[388],{9534:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const l={id:"i18n-assistant",title:"Nine One AI \u6982\u8ff0",sidebar_label:"\u6982\u8ff0",slug:"/i18n-assistant",hide_table_of_contents:!1},o=void 0,r={id:"nine-one-copilot/agents/i18n-assistant",title:"Nine One AI \u6982\u8ff0",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/nine-one-copilot/agents/i18n-assistant.md",sourceDirName:"nine-one-copilot/agents",slug:"/i18n-assistant",permalink:"/zh/docs/i18n-assistant",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"i18n-assistant",title:"Nine One AI \u6982\u8ff0",sidebar_label:"\u6982\u8ff0",slug:"/i18n-assistant",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/zh/docs/rag-introduction"},next:{title:"FAQ",permalink:"/zh/docs/faq"}},a={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u96c6\u6210API\u670d\u52a1",id:"\u96c6\u6210api\u670d\u52a1",level:3},{value:"\u684c\u9762\u8f6f\u4ef6\u670d\u52a1",id:"\u684c\u9762\u8f6f\u4ef6\u670d\u52a1",level:3}];function d(n){const e={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u6982\u8ff0",children:"1. \u6982\u8ff0"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u6570\u5b57\u5316\u548c\u667a\u80fd\u5316\u8fc5\u901f\u53d1\u5c55\u7684\u65f6\u4ee3\uff0c\u4eba\u5de5\u667a\u80fd\uff08AI\uff09\u6280\u672f\u5df2\u7ecf\u6210\u4e3a\u6211\u4eec\u65e5\u5e38\u751f\u6d3b\u548c\u5de5\u4f5c\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002\u4e3a\u4e86\u6ee1\u8db3\u4e2a\u4eba\u7528\u6237\u5bf9\u9ad8\u6548\u3001\u4e2a\u6027\u5316AI\u670d\u52a1\u7684\u9700\u6c42\uff0cNine One AI \u4e3a\u4e2a\u4eba\u7528\u6237\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4e24\u79cd\u6838\u5fc3\u670d\u52a1\uff1a"}),"\n",(0,t.jsx)(e.h3,{id:"\u96c6\u6210api\u670d\u52a1",children:"1.1. \u96c6\u6210API\u670d\u52a1"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u63d0\u4f9b\u4e00\u4e2a\u96c6\u6210\u7684API\u5e73\u53f0\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u5355\u4e00\u5165\u53e3\u8bbf\u95ee\u591a\u4e2a\u5927\u578b\u8bed\u8a00\u6a21\u578b\u63d0\u4f9b\u5546\u7684AI\u670d\u52a1\u3002\u8fd9\u79cd\u4e00\u7ad9\u5f0f\u670d\u52a1\u6781\u5927\u5730\u7b80\u5316\u4e86\u7528\u6237\u7684\u64cd\u4f5c\u6d41\u7a0b\uff0c\u63d0\u9ad8\u4e86\u5de5\u4f5c\u6548\u7387\u3002\u4ee5\u4e0b\u662f\u96c6\u6210API\u7684\u4e3b\u8981\u7279\u70b9\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7edf\u4e00\u63a5\u53e3\uff1a\u7528\u6237\u65e0\u9700\u5206\u522b\u5b66\u4e60\u4e0d\u540c\u63d0\u4f9b\u5546\u7684API\u63a5\u53e3\uff0c\u6211\u4eec\u63d0\u4f9b\u7edf\u4e00\u7684\u8bbf\u95ee\u65b9\u5f0f\uff0c\u4f7f\u5f97\u96c6\u6210\u548c\u8c03\u7528\u53d8\u5f97\u7b80\u5355\u5feb\u6377\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u591a\u6e90\u8bbf\u95ee\uff1a\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u5730\u8bbf\u95ee\u5305\u62ecOpenAI\u7684ChatGPT\u5728\u5185\u7684\u591a\u79cdAI\u670d\u52a1\uff0c\u4ee5\u53caMoonShot\u7b49\u5176\u4ed6\u63d0\u4f9b\u5546\u7684\u5927\u8bed\u8a00\u6a21\u578b\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u7075\u6d3b\u6027\uff1a\u65e0\u8bba\u7528\u6237\u9700\u8981\u6587\u672c\u751f\u6210\u3001\u8bed\u8a00\u7406\u89e3\u8fd8\u662f\u5176\u4ed6AI\u529f\u80fd\uff0c\u6211\u4eec\u7684API\u90fd\u80fd\u63d0\u4f9b\u76f8\u5e94\u7684\u652f\u6301\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u684c\u9762\u8f6f\u4ef6\u670d\u52a1",children:"1.2. \u684c\u9762\u8f6f\u4ef6\u670d\u52a1"}),"\n",(0,t.jsx)(e.p,{children:"\u9664\u4e86\u96c6\u6210API\u670d\u52a1\uff0cNine One AI \u5f00\u53d1\u4e86\u4e00\u6b3e\u684c\u9762\u8f6f\u4ef6-Nine One Copilot\uff0c\u65e8\u5728\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684\u672c\u5730\u5316AI\u4f53\u9a8c\u3002\u8fd9\u6b3e\u8f6f\u4ef6\u5177\u6709\u4ee5\u4e0b\u4f18\u52bf\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u591a\u6a21\u578b\u63a5\u5165\uff1a\u8f6f\u4ef6\u652f\u6301\u63a5\u5165\u591a\u5bb6AI\u670d\u52a1\u63d0\u4f9b\u5546\u7684\u5927\u8bed\u8a00\u6a21\u578b\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u4e2a\u4eba\u504f\u597d\u9009\u62e9\u4f7f\u7528\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"\u529f\u80fd\u96c6\u6210\uff1a\u9664\u4e86\u57fa\u672c\u7684\u6587\u672c\u5904\u7406\u529f\u80fd\uff0c\u8f6f\u4ef6\u8fd8\u96c6\u6210\u4e86Agent\u3001Retrieval-Augmented Generation (RAG)\u4ee5\u53ca\u667a\u80fd\u5bf9\u8bdd\u5de5\u5177\u5957\u4ef6\u7b49\u9ad8\u7ea7\u529f\u80fd\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"\u8de8\u5e73\u53f0: \u652f\u6301Windows \u548c Mac OS \u7cfb\u7edf\uff0c\u540e\u671f\u4e5f\u4f1a\u63d0\u4f9b\u652f\u6301Linux \u7684\u7248\u672c\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"\u4e2a\u6027\u5316\u4f53\u9a8c\uff1a\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u5b9a\u5236\u8f6f\u4ef6\u754c\u9762\u548c\u529f\u80fd\uff0c\u4eab\u53d7\u9ad8\u5ea6\u4e2a\u6027\u5316\u7684AI\u670d\u52a1\uff1b"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u8fd9\u4e24\u79cd\u670d\u52a1\uff0cNine One \u65e8\u5728\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a\u5168\u9762\u3001\u9ad8\u6548\u4e14\u4e2a\u6027\u5316\u7684AI\u89e3\u51b3\u65b9\u6848\uff0c\u65e0\u8bba\u662f\u5728\u529e\u516c\u81ea\u52a8\u5316\u3001\u5185\u5bb9\u521b\u4f5c\u8fd8\u662f\u65e5\u5e38\u751f\u6d3b\u8f85\u52a9\u65b9\u9762\uff0c\u90fd\u80fd\u53d1\u6325\u91cd\u8981\u4f5c\u7528\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>r});var t=i(6540);const s={},l=t.createContext(s);function o(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);