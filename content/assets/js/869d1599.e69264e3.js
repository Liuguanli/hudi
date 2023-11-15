"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[68646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6746:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(72389);function i(e){let{children:t,url:i}=e;return(0,r.Z)()&&(n.g.window.location.href=i),a.createElement("span",null,t,"or click ",a.createElement("a",{href:i},"here"))}},38873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(6746);const o={title:"Get started with Apache Hudi using AWS Glue by implementing key design concepts \u2013 Part 1",excerpt:"Get started with Apache Hudi using AWS Glue by implementing key design concepts \u2013 Part 1",authors:[{name:"Srinivas Kandi"},{name:"Ravi Itha"}],category:"blog",image:"/assets/images/blog/2023-10-17-Get-started-with-Apache-Hudi-using-AWS-Glue-by-implementing-key-design-concepts-Part-1.png",tags:["aws glue","apache hudi","how-to","amazon","design","aws glue","upserts","bulk insert","indexing"]},l=void 0,s={permalink:"/blog/2023/10/17/Get-started-with-Apache-Hudi-using-AWS-Glue-by-implementing-key-design-concepts-Part-1",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-10-17-Get-started-with-Apache-Hudi-using-AWS-Glue-by-implementing-key-design-concepts-Part-1.mdx",source:"@site/blog/2023-10-17-Get-started-with-Apache-Hudi-using-AWS-Glue-by-implementing-key-design-concepts-Part-1.mdx",title:"Get started with Apache Hudi using AWS Glue by implementing key design concepts \u2013 Part 1",description:"Redirecting... please wait!!",date:"2023-10-17T00:00:00.000Z",formattedDate:"October 17, 2023",tags:[{label:"aws glue",permalink:"/blog/tags/aws-glue"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"},{label:"how-to",permalink:"/blog/tags/how-to"},{label:"amazon",permalink:"/blog/tags/amazon"},{label:"design",permalink:"/blog/tags/design"},{label:"upserts",permalink:"/blog/tags/upserts"},{label:"bulk insert",permalink:"/blog/tags/bulk-insert"},{label:"indexing",permalink:"/blog/tags/indexing"}],readingTime:.045,truncated:!1,authors:[{name:"Srinivas Kandi"},{name:"Ravi Itha"}],prevItem:{title:"Load data incrementally from transactional data lakes to data warehouses",permalink:"/blog/2023/10/19/load-data-incrementally-from-transactional-data-lakes-to-data-warehouses"},nextItem:{title:"StarRocks query performance with Apache Hudi and Onehouse",permalink:"/blog/2023/10/11/starrocks-query-performance-with-apache-hudi-and-onehouse"}},c={authorsImageUrls:[void 0,void 0]},p=[],u={toc:p},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{url:"https://aws.amazon.com/blogs/big-data/part-1-get-started-with-apache-hudi-using-aws-glue-by-implementing-key-design-concepts/",mdxType:"Redirect"},"Redirecting... please wait!! "))}d.isMDXComponent=!0}}]);