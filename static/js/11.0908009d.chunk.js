(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),i=(o=a)&&o.__esModule?o:{default:o};var c=i.default.createContext({}),s=c.Provider,u=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["components"]);return i.default.createElement(u,null,function(t){return i.default.createElement(e,r({components:n||t},o))})}};t.default=function(e){var t=e.components,n=e.children;return i.default.createElement(s,{value:t},n)}},12:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",function(){return o})},13:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return o})},14:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",function(){return r})},15:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return o})},16:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return o})},17:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}var a=n(15);function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}n.d(t,"a",function(){return i})},18:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",function(){return r})},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(20);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(o).default}});var r=n(11);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(r).default}})},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=(o=i)&&o.__esModule?o:{default:o},s=n(11);var u={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,i=e.children,s=e.components,l=void 0===s?{}:s,p=e.Layout,f=e.layoutProps,m=l[n+"."+t]||l[t]||u[t]||t;return p?c.default.createElement(p,r({components:l},f),c.default.createElement(m,a,i)):c.default.createElement(m,a,i)}}]),t}();t.default=(0,s.withMDXComponents)(l)},332:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h}),n.d(t,"tableOfContents",function(){return d}),n.d(t,"frontMatter",function(){return b});var o=n(12),r=n(13),a=n(14),i=n(17),c=n(16),s=n(18),u=n(1),l=n.n(u),p=n(19),f=n(333),m=n.n(f),h=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).layout=null,n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components;Object(o.a)(e,["components"]);return l.a.createElement(p.MDXTag,{name:"wrapper",components:t},l.a.createElement(p.MDXTag,{name:"h1",components:t,props:{id:"building-swift-shop---week-3-dec-1---7-2019"}},"Building Swift Shop - Week 3 (Dec 1 \u2212 7, 2019)"),l.a.createElement(p.MDXTag,{name:"h4",components:t,props:{id:"dec-8-2019"}},"Dec 8, 2019"),l.a.createElement(p.MDXTag,{name:"p",components:t},"Another week with little progress (most of it in notebooks & Notion), lots of things going on with work."),l.a.createElement(p.MDXTag,{name:"p",components:t},"Several days ago I tried implementing the SwiftDux state for Lists, and though everything seemed to be right, I ran into a runtime error when performing actions on the list."),l.a.createElement(p.MDXTag,{name:"p",components:t},"Based on this error, and growing feelings that SwiftDux may not be the right choice, I decided to instead re-write the app\u2019s \u201cbackend\u201d (state and persistence, in this case) using ",l.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/groue/GRDB.swift"}},"GRDB"),", a SQLite-backed database library. The accompanying package ",l.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/groue/GRDBCombine"}},"GRDBCombine")," provides a nice way to get SwiftUI view reactivity for little extra effort."),l.a.createElement(p.MDXTag,{name:"p",components:t},"Implementing the state layer of Swift Shop with GRDB first requires the definition of SQL database entities, along with their GRDB ",l.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/groue/GRDB.swift#records"}},"Record")," counterparts. I\u2019m still working through it, but as of right now, things look like this:"),l.a.createElement("div",{align:"center"},l.a.createElement("a",{target:"GP_IMG",href:m.a},l.a.createElement("img",{src:m.a}))),l.a.createElement(p.MDXTag,{name:"p",components:t},"So far the records map directly to the database entities, with GRDB associations to navigate through relationships. The ",l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Request<T>")," type shown is actually a ",l.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"QueryInterfaceRequest<T>")," shortened for brevity."),l.a.createElement(p.MDXTag,{name:"p",components:t},"It\u2019s relatively simple, but all of the 3 main types (List, Product, Tag) are many-to-many relationships, which is proving to be difficult to express in GRDB as a first-time user of the package - especially handling nested associations e.g. producing a Product structure that contains its complete status for a given list, as well as all of its tags (which may be a bad idea anyways, we\u2019ll have to see)."),l.a.createElement(p.MDXTag,{name:"p",components:t},"That said, the GRDB docs are great; these pages have been particularly helpful so far:"),l.a.createElement(p.MDXTag,{name:"ul",components:t},l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/groue/GRDB.swift/blob/master/Documentation/AssociationsBasics.md"}},"Association Basics")),l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/groue/GRDB.swift/blob/master/Documentation/GoodPracticesForDesigningRecordTypes.md"}},"Good Practices for Designing Record Types")),l.a.createElement(p.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://groue.github.io/GRDB.swift/docs/4.6/index.html"}},"GRDB Reference"))))}}]),t}(l.a.Component),d=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[]},b={}},333:function(e,t,n){e.exports=n.p+"static/media/SwiftShop_wk3_diagram.8710d574.svg"}}]);
//# sourceMappingURL=11.0908009d.chunk.js.map