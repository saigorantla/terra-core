(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{1203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(0)),a=m(n(3)),o=m(n(5)),i=n(8),l=m(n(876)),u=m(n(135)),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(19)),c=m(n(971)),p=n(981),d=m(n(982));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function m(e){return e&&e.__esModule?e:{default:e}}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=o.default.bind(c.default),j={onPageChange:a.default.func.isRequired,selectedPage:a.default.number.isRequired,totalCount:a.default.number.isRequired,itemCountPerPage:a.default.number.isRequired,intl:i.intlShape.isRequired},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,n,a,o,i=(t=c,function(){var e,n=O(t);if(P()){var r=O(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return v(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).handlePageChange=t.handlePageChange.bind(y(t)),t.defaultProgressivePaginator=t.defaultProgressivePaginator.bind(y(t)),t.reducedProgressivePaginator=t.reducedProgressivePaginator.bind(y(t)),t.setPaginator=t.setPaginator.bind(y(t)),t.state={showReducedPaginator:!1},t}return n=c,(a=[{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"handlePageChange",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==s.KEY_RETURN&&n.nativeEvent.keyCode!==s.KEY_SPACE||n.preventDefault(),t.props.onPageChange(e)}}},{key:"defaultProgressivePaginator",value:function(){var e=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),t=this.props,n=t.selectedPage,a=t.intl,o=1===n?1:n-1,i=n===e?e:n+1;return r.default.createElement("div",{className:x(["paginator","progressive"]),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,a.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:n,pageNumberTotal:e})),r.default.createElement("div",null,r.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:x(["nav-link",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:x(["nav-link","previous",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},r.default.createElement("span",{className:x("icon")}),a.formatMessage({id:"Terra.paginator.previous"})),r.default.createElement(d.default,{ariaDisabled:n===e,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:x(["nav-link","next",n===e?"is-disabled":null]),disabled:n===e,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},a.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:x("icon")})),r.default.createElement(d.default,{ariaDisabled:n===e,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:x(["nav-link",n===e?"is-disabled":null]),disabled:n===e,onClick:this.handlePageChange(e),onKeyDown:this.handlePageChange(e)},a.formatMessage({id:"Terra.paginator.last"}))))}},{key:"reducedProgressivePaginator",value:function(){var e=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),t=this.props,n=t.selectedPage,a=t.intl,o=1===n?1:n-1,i=n===e?e:n+1;return r.default.createElement("div",{className:x(["paginator"]),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,r.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:x(["nav-link",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:x(["nav-link","previous","icon-only",1===n?"is-disabled":null]),disabled:1===n,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},r.default.createElement(u.default,{text:a.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:x("icon")}))),r.default.createElement("div",null,a.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:n,pageNumberTotal:e})),r.default.createElement("div",null,r.default.createElement(d.default,{ariaDisabled:n===e,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:x(["nav-link","next","icon-only",n===e?"is-disabled":null]),disabled:n===e,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},r.default.createElement(u.default,{text:a.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:x("icon")})),r.default.createElement(d.default,{ariaDisabled:n===e,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:x(["nav-link",n===e?"is-disabled":null]),disabled:n===e,onClick:this.handlePageChange(e),onKeyDown:this.handlePageChange(e)},a.formatMessage({id:"Terra.paginator.last"}))))}},{key:"render",value:function(){return r.default.createElement(l.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&b(n.prototype,a),o&&b(n,o),c}(r.default.Component);C.propTypes=j;var w=(0,i.injectIntl)(C);t.default=w},2151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),a=s(n(946)),o=s(n(53)),i=s(n(1203)),l=s(n(5)),u=s(n(1553));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=l.default.bind(u.default),v=function(){return function(e,t){for(var n=[],a=0;a<t;a+=1)n.push(r.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,l,u,s=(t=c,function(){var e,n=b(t);if(g()){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=s.call(this,e)).state={content:v(),currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return n=c,(l=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:h("paginator-wrapper")},r.default.createElement(a.default,{header:r.default.createElement("h1",null,"Page",this.state.currentPage),footer:r.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10})},r.default.createElement("div",null,r.default.createElement(o.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),r.default.createElement(o.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),r.default.createElement(o.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&p(n.prototype,l),u&&p(n,u),c}(r.default.Component);t.default=y},2946:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(0),a=n.n(r),o=n(275),i=n(980),l=n(2151),u=n.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function d(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",s({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ControlledProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}d.isMDXComponent=!0;var f=n(847),m=n.n(f),g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:t||"Controlled Progressive Paginator Example",description:n,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:r})},b=n(850),h=n.n(b);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P=function(){return Object(o.mdx)(h.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=y(t,["components"]);return Object(o.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page."))}return t.isMDXComponent=!0,t({})}}]})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function C(e){var t=e.components,n=x(e,["components"]);return Object(o.mdx)("wrapper",O({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-controlled-progressive-paginator"},"Terra Controlled Progressive Paginator"),Object(o.mdx)("p",null,"Controlled version of the ",Object(o.mdx)("a",O({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-paginator/paginator/progressive-paginator"}),"Progressive Paginator")," for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",O({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),"import ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",O({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("p",null,Object(o.mdx)("a",O({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-paginator"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(g,{mdxType:"ControlledProgressivePaginatorExample"}),Object(o.mdx)("h2",{id:"controlled-progressive-paginator-props"},"Controlled Progressive Paginator Props"),Object(o.mdx)(P,{mdxType:"ControlledProgressivePaginatorPropsTable"}))}C.isMDXComponent=!0}}]);
//# sourceMappingURL=472-eae7d70968f32626a0a8.js.map