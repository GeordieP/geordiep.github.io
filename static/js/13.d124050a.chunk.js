(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),c=(r=u)&&r.__esModule?r:{default:r};var i=c.default.createContext({}),a=i.Provider,f=i.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return c.default.createElement(f,null,function(t){return c.default.createElement(e,o({components:n||t},r))})}};t.default=function(e){var t=e.components,n=e.children;return c.default.createElement(a,{value:t},n)}},12:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return r})},13:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},14:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",function(){return o})},15:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},16:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})},17:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}var u=n(15);function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(u.a)(e):t}n.d(t,"a",function(){return c})},18:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return o})},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return u(r).default}});var o=n(11);function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return u(o).default}})},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),i=(r=c)&&r.__esModule?r:{default:r},a=n(11);var f={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),u(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,u=void 0===r?{}:r,c=e.children,a=e.components,l=void 0===a?{}:a,s=e.Layout,p=e.layoutProps,d=l[n+"."+t]||l[t]||f[t]||t;return s?i.default.createElement(s,o({components:l},p),i.default.createElement(d,u,c)):i.default.createElement(d,u,c)}}]),t}();t.default=(0,a.withMDXComponents)(l)},335:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p}),n.d(t,"tableOfContents",function(){return d}),n.d(t,"frontMatter",function(){return y});var r=n(12),o=n(13),u=n(14),c=n(17),i=n(16),a=n(18),f=n(1),l=n.n(f),s=n(19),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).layout=null,n}return Object(a.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components;Object(r.a)(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",components:t},l.a.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"building-swift-shop---week-5-dec-16---dec-21-2019"}},"Building Swift Shop - Week 5 (Dec 16 - Dec 21, 2019)"),l.a.createElement(s.MDXTag,{name:"h4",components:t,props:{id:"dec-16-2019"}},"Dec 16, 2019"),l.a.createElement(s.MDXTag,{name:"p",components:t},"Almost no time to work on the project this week, only managed to refactor the new/edit product dialog to be slightly cleaner. The edit form\u2019s view model is now created as a property in the ProductPage view and passed down to the edit form during render. This allows ProductPage functions to call methods directly on the edit form model, meaning it can hide much of the logic and state for dealing with the dialog\u2019s new and edit modes."))}}]),t}(l.a.Component),d=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[]},y={}}}]);
//# sourceMappingURL=13.d124050a.chunk.js.map