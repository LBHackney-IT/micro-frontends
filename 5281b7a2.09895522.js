(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(89)),a=["components"],c={id:"architecture",title:"Architecture"},l={unversionedId:"architecture",id:"architecture",isDocsHomePage:!1,title:"Architecture",description:"We use the single-spa framework for managing MFE's within Hackney. Single-SPA offers a wide variety of tools to build MFEs, of which we have mostly followed the recommended approach.",source:"@site/docs/architecture.md",slug:"/architecture",permalink:"/micro-frontends/architecture",editUrl:"https://github.com/LBHackney-IT/micro-frontends/edit/master/docs/architecture.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/micro-frontends/"},next:{title:"Benefits of MFE and example usages",permalink:"/micro-frontends/benefits"}},s=[{value:"Root Config",id:"root-config",children:[]},{value:"Applications",id:"applications",children:[]},{value:"Utility Modules",id:"utility-modules",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We use the ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa")," framework for managing MFE's within Hackney. Single-SPA offers a wide variety of tools to build MFEs, of which we have mostly followed the recommended approach."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"React & Typescript"),Object(i.b)("li",{parentName:"ol"},"Runtime composition via SystemJS (Import-maps)"),Object(i.b)("li",{parentName:"ol"},"Global UMD shared dependencies"),Object(i.b)("li",{parentName:"ol"},"Utility Module (common) for shared components / utilities"),Object(i.b)("li",{parentName:"ol"},"Route based (Vertical) splitting"),Object(i.b)("li",{parentName:"ol"},"Individual git repos and CICD pipelines")),Object(i.b)("h2",{id:"root-config"},"Root Config"),Object(i.b)("p",null,"The Root Config is the main entry point for the app and is responsible for the orchestration of the MFEs. It contains the import-map, which informs the app of the locations of each MFE, and what namespace to mount them in."),Object(i.b)("h2",{id:"applications"},"Applications"),Object(i.b)("p",null,"These are the individual React MFEs. Primarily hold the views and components required to generate full pages. An Application can contain it's own router and maintain sub-routes related to the MFE."),Object(i.b)("h2",{id:"utility-modules"},"Utility Modules"),Object(i.b)("p",null,"A utility module is very similar to an Application, except it does not have any specific views, and is intended to be available globally from the root config. Utility modules should provide access to shared code, such as utility methods and generic React components."))}u.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);