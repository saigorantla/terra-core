(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1061:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),i=n(848),o=n.n(i),l=function(e){var t=e.url;return r.a.createElement(o.a,{name:"terra-breakpoints",version:"2.24.0",url:t})}},1611:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(0))&&a.__esModule?a:{default:a},i=n(187);var o=(0,i.withActiveBreakpoint)((function(e){var t=e.activeBreakpoint;return r.default.createElement("div",null,r.default.createElement("p",null,"This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider."),r.default.createElement("p",null,"The active breakpoint is:"," ",t))})),l=function(){return r.default.createElement(i.ActiveBreakpointContext.Consumer,null,(function(e){return r.default.createElement("div",null,r.default.createElement("p",null,"This component interfaces with the ActiveBreakpointContext directly."),r.default.createElement("p",null,"The active breakpoint is:"," ",e))}))},c=function(){return r.default.createElement(i.ActiveBreakpointProvider,null,r.default.createElement(o,null),r.default.createElement("hr",null),r.default.createElement(l,null))};t.default=c},1612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(5)),i=o(n(1613));function o(e){return e&&e.__esModule?e:{default:e}}var l=r.default.bind(i.default),c=function(){return a.default.createElement("div",null,a.default.createElement("p",null,"This example uses Sass mixins to determine the active breakpoint."),a.default.createElement("p",{className:l("content")}))};t.default=c},1613:function(e,t,n){e.exports={content:"MixinsExample-module__content___14onp"}},2934:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(0),r=n.n(a),i=n(275),o=n(1061),l=n(1611),c=n.n(l);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function u(e){var t=e.components,n=p(e,["components"]);return Object(i.mdx)("wrapper",d({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { ActiveBreakpointProvider, withActiveBreakpoint, ActiveBreakpointContext } from 'terra-breakpoints';\n\nconst ActiveBreakpointConsumer1 = withActiveBreakpoint(({ activeBreakpoint }) => (\n  <div>\n    <p>This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider.</p>\n    <p>\n      The active breakpoint is:\n      {' '}\n      {activeBreakpoint}\n    </p>\n  </div>\n));\n\nconst ActiveBreakpointConsumer2 = () => (\n  <ActiveBreakpointContext.Consumer>\n    {\n      activeBreakpoint => (\n        <div>\n          <p>This component interfaces with the ActiveBreakpointContext directly.</p>\n          <p>\n            The active breakpoint is:\n            {' '}\n            {activeBreakpoint}\n          </p>\n        </div>\n      )\n    }\n  </ActiveBreakpointContext.Consumer>\n);\n\nconst ActiveBreakpointProviderExample = () => (\n  <ActiveBreakpointProvider>\n    <ActiveBreakpointConsumer1 />\n    <hr />\n    <ActiveBreakpointConsumer2 />\n  </ActiveBreakpointProvider>\n);\n\nexport default ActiveBreakpointProviderExample;\n\n")))}u.isMDXComponent=!0;var s=n(847),b=n.n(s),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(b.a,{title:t||"Active Breakpoint Provider Example",description:n,example:r.a.createElement(c.a,null),exampleSrc:r.a.createElement(u,null),isExpanded:a})},x=n(1612),v=n.n(x);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O={};function j(e){var t=e.components,n=h(e,["components"]);return Object(i.mdx)("wrapper",g({},O,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",g({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './MixinsExample.module.scss';\n\n/**\n  MixinsExample.module.scss\n\n  @import 'terra-breakpoints/mixins';\n\n  :local {\n    .content::after {\n      content: 'The active breakpoint is: tiny';\n\n      @include terra-mq-small-up {\n        content: 'The active breakpoint is: small';\n      }\n\n      @include terra-mq-medium-up {\n        content: 'The active breakpoint is: medium';\n      }\n\n      @include terra-mq-large-up {\n        content: 'The active breakpoint is: large';\n      }\n\n      @include terra-mq-huge-up {\n        content: 'The active breakpoint is: huge';\n      }\n\n      @include terra-mq-enormous-up {\n        content: 'The active breakpoint is: enormous';\n      }\n    }\n  }\n*/\n\nconst cx = classNames.bind(styles);\n\nconst MixinsExample = () => (\n  <div>\n    <p>This example uses Sass mixins to determine the active breakpoint.</p>\n    <p className={cx('content')} />\n  </div>\n);\n\nexport default MixinsExample;\n\n")))}j.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(b.a,{title:t||"Mixins Example",description:n,example:r.a.createElement(v.a,null),exampleSrc:r.a.createElement(j,null),isExpanded:a})};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function w(e){var t=e.components,n=_(e,["components"]);return Object(i.mdx)("wrapper",N({},y,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(o.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-breakpoints"},"Terra Breakpoints"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," contains components and utilities related to Terra's supported responsive breakpoints."),Object(i.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Install with ",Object(i.mdx)("a",N({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm install terra-breakpoints"))))),Object(i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",N({parentName:"tr"},{align:null}),"Peer Dependency"),Object(i.mdx)("th",N({parentName:"tr"},{align:null}),"Version"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"react"),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"^16.8.5")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"react-dom"),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"^16.8.5")))),Object(i.mdx)("h2",{id:"usage"},"Usage"),Object(i.mdx)("h3",{id:"breakpoints"},"Breakpoints"),Object(i.mdx)("p",null,"An object containing the named breakpoint values is the default export of the ",Object(i.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," package. These named breakpoints are defined as minimum values."),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",N({parentName:"tr"},{align:null}),"Breakpoint Name"),Object(i.mdx)("th",N({parentName:"tr"},{align:null}),"Minimum Value"),Object(i.mdx)("th",N({parentName:"tr"},{align:null}),"Media Query"),Object(i.mdx)("th",N({parentName:"tr"},{align:null}),"Description"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"tiny")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"0px"),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 0px)")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"Active from viewport width 0px and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"small")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"544px"),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 544px)")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"Active from viewport width 544px and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"medium")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"768px"),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 768px)")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"Active from viewport width 768px and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"large")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"992px"),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 992px)")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"Active from viewport width 992px and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"huge")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"1216px"),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1216px)")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"Active from viewport width 1216 and up")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"enormous")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"1440px"),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),Object(i.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1440px)")),Object(i.mdx)("td",N({parentName:"tr"},{align:null}),"Active from viewport width 1440px and up")))),Object(i.mdx)("p",null,"Utility functions are also provided to help determine what breakpoint is active for a given value."),Object(i.mdx)("h4",{id:"activebreakpointforsizewidthvalue"},Object(i.mdx)("inlineCode",{parentName:"h4"},"activeBreakpointForSize(widthValue)")),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"activeBreakpointForSize")," will return the closest active breakpoint that matches the given width value."),Object(i.mdx)("pre",null,Object(i.mdx)("code",N({parentName:"pre"},{className:"language-jsx"}),"import { activeBreakpointForSize } from 'terra-breakpoints';\n\nconsole.log(activeBreakpointForSize(300));  // 'tiny'\nconsole.log(activeBreakpointForSize(544));  // 'small'\nconsole.log(activeBreakpointForSize(800));  // 'medium'\nconsole.log(activeBreakpointForSize(1000)); // 'large'\nconsole.log(activeBreakpointForSize(1300)); // 'huge'\nconsole.log(activeBreakpointForSize(1500)); // 'enormous'\n")),Object(i.mdx)("h4",{id:"isbreakpointactiveforsizebreakpointname-widthvalue"},Object(i.mdx)("inlineCode",{parentName:"h4"},"isBreakpointActiveForSize(breakpointName, widthValue)")),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"isBreakpointActiveForSize")," will return a boolean value indicating whether or not the given breakpoint name is active for the width value."),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},"Note that since the breakpoints are defined as minimum values, a breakpoint will be determined to be active if the width value is larger than the defined minimum, even if the width value is included in a higher breakpoint's range.")),Object(i.mdx)("pre",null,Object(i.mdx)("code",N({parentName:"pre"},{className:"language-jsx"}),"import { isBreakpointActiveForSize } from 'terra-breakpoints';\n\nconsole.log(isBreakpointActiveForSize('tiny', 300));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 544));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 800));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 1000));     // true\n\nconsole.log(isBreakpointActiveForSize('medium', 300));    // false\nconsole.log(isBreakpointActiveForSize('medium', 544));    // false\nconsole.log(isBreakpointActiveForSize('medium', 800));    // true\nconsole.log(isBreakpointActiveForSize('medium', 1500));   // true\n\nconsole.log(isBreakpointActiveForSize('enormous', 300));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 544));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 800));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 1500)); // true\n")),Object(i.mdx)("h3",{id:"activebreakpointprovider"},"ActiveBreakpointProvider"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," also provides ",Object(i.mdx)("inlineCode",{parentName:"p"},"<ActiveBreakpointProvider>"),". a component that provides the current active breakpoint to child components using a Context-based API. This can be used to minimize the number of required resize event listeners and ensure consistency across the component hierarchy."),Object(i.mdx)("p",null,"A component generator called ",Object(i.mdx)("inlineCode",{parentName:"p"},"withActiveBreakpoint()")," is included to provide simple interfacing with the ActiveBreakpointProvider. However, the ActiveBreakpointContext can also be imported and used directly, if needed."),Object(i.mdx)("h3",{id:"media-queries"},"Media Queries"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"terra-breakpoints")," includes ",Object(i.mdx)("inlineCode",{parentName:"p"},"_media-queries.scss"),", which contains a set of Sass mixins that define media queries for the supported breakpoints."),Object(i.mdx)("pre",null,Object(i.mdx)("code",N({parentName:"pre"},{className:"language-scss"}),"@import '~terra-breakpoints/lib/media-queries';\n\n.example {\n  color: blue;\n\n  @include terra-mq-small-up {\n    color: red;\n  }\n\n  @include terra-mq-medium-up {\n    color: purple;\n  }\n\n  @include terra-mq-large-up {\n    color: green;\n  }\n\n  @include terra-mq-huge-up {\n    color: yellow;\n  }\n\n  @include terra-mq-enormous-up {\n    color: orange;\n  }\n}\n")),Object(i.mdx)("h2",{id:"component-features"},"Component Features"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",N({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features"}),"Cross-Browser Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",N({parentName:"li"},{href:"https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support"}),"Responsive Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",N({parentName:"li"},{href:"https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support"}),"Mobile Support"))),Object(i.mdx)("p",null,Object(i.mdx)("a",N({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-breakpoints"}),"View component source code")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(f,{mdxType:"ActiveBreakpointProviderExample"}),Object(i.mdx)(k,{mdxType:"MixinsExample"}))}w.isMDXComponent=!0},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(3)),i=l(n(5)),o=l(n(851));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=i.default.bind(o.default),f={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},x=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=d(t).call(this,e))||"object"!==c(r)&&"function"!=typeof r?p(a):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(p(n)),n.handleCodeToggle=n.handleCodeToggle.bind(p(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),u(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:b("header")},a.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:b("description")},e):null}}]),u(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,r=e.exampleSrc,i=e.title,o=e.description,l=this.state,c=l.isExpanded,d=l.isBackgroundTransparent;return a.default.createElement("div",{className:b("template")},t.renderHeader(i),a.default.createElement("div",{className:b("content",{"dynamic-content":d})},t.renderDescription(o),n),r&&a.default.createElement("div",{className:b("footer")},a.default.createElement("div",{className:b("button-container")},a.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:b("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:b("chevron-right")}))),c&&a.default.createElement("div",{className:b("code")},r)))}}]),t}(a.default.Component);x.propTypes=f,x.defaultProps={isExpanded:!1};var v=x;t.default=v},848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(3)),i=l(n(5)),o=l(n(849));function l(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(o.default),d={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},p=function(e){var t=e.name,n=e.url,r=e.version;return a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(r))))};p.propTypes=d;var m=p;t.default=m},849:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},851:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}}}]);
//# sourceMappingURL=134-e20ed31def2943a0f863.js.map