(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{2138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(78)),i=d(n(863)),r=d(n(5)),l=d(n(2139)),c=d(n(910));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=r.default.bind(c.default),_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(d,e);var t,n,r,c,s=(t=d,function(){var e,n=b(t);if(y()){var a=b(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f(this,e)});function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=s.call(this,e)).createSection=t.createSection.bind(h(t)),t.createSections=t.createSections.bind(h(t)),t.handleSectionSelection=t.handleSectionSelection.bind(h(t)),t.state={collapsedKeys:[]},t}return n=d,(r=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:o.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSection",value:function(e){return a.default.createElement(o.Section,{key:e.key,title:e.title,isCollapsed:this.state.collapsedKeys.indexOf(e.key)>=0,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},e.childItems.map((function(e){return t=e,a.default.createElement(o.Item,{key:t.key},a.default.createElement(i.default,{title:t.title,className:g("placeholder")}));var t})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return a.default.createElement(o.default,{role:"listbox"},this.createSections(l.default))}}])&&p(n.prototype,r),c&&p(n,c),d}(a.default.Component);t.default=_},2139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Item 0-0",key:"unique-0-0"},{title:"Item 0-1",key:"unique-0-1"},{title:"Item 0-2",key:"unique-0-2"}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Item 1-0",key:"unique-1-0"},{title:"Item 1-1",key:"unique1-1"},{title:"Item 1-2",key:"unique-1-2"}]}];t.default=a},2961:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(0),o=n.n(a),i=n(275),r=n(882),l=n(2138),c=n.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u={};function p(e){var t=e.components,n=d(e,["components"]);return Object(i.mdx)("wrapper",s({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport List, { Item, Section, Utils } from 'terra-list';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List role=\"listbox\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionList;\n\n")))}p.isMDXComponent=!0;var m=n(847),f=n.n(m),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.a.createElement(f.a,{title:t||"Section List",description:n,example:o.a.createElement(c.a,null),exampleSrc:o.a.createElement(p,null),isExpanded:a})};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g={};function _(e){var t=e.components,n=b(e,["components"]);return Object(i.mdx)("wrapper",y({},g,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(r.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-list---sections"},"Terra List - Sections"),Object(i.mdx)("p",null,"List sections are available in both static and collapsible varieties. A list section that is collapsed will remove its children items from the DOM. This improves performance and accessiblilty, but may remove potentional state associated to a mounted list item. If your list item content has additional state, it needs to be stored externally and reapplied when thawed for the next render that shows its section open. Since this render occurs at the same time that a collapsible section state changes, for additional optimization, collapsed sections do not necessarily need to be provided with child items."),Object(i.mdx)("h2",{id:"state-management"},"State Management"),Object(i.mdx)("p",null,"As section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern."),Object(i.mdx)("p",null,"First defaulting our state to an empty array in the constructor. "),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+   this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),Object(i.mdx)("p",null,"Next creating an event handler callback method to pass to the section's ",Object(i.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"onSelect")," callback will return the metaData prop passed to each section."),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n   constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n   }\n  \n+  handleSectionSelection(event, metaData) {\n\n+  }\n")),Object(i.mdx)("p",null,"As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"  handleSectionSelection(event, metaData) {\n+   event.preventDefault();\n  }\n")),Object(i.mdx)("p",null,"Terra List comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method ",Object(i.mdx)("inlineCode",{parentName:"p"},"updatedMulitSelectedKeys"),", which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state."),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n")),Object(i.mdx)("p",null,"Settting state will trigger another render. So in the render method we need to generate our sections with the updated ",Object(i.mdx)("inlineCode",{parentName:"p"},"isCollapsed")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n",Object(i.mdx)("a",y({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n")),Object(i.mdx)("p",null,"Next we need to set up our ",Object(i.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",Object(i.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),Object(i.mdx)("p",null,"For rendering the collapsible section we set ",Object(i.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," for all sections."),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),Object(i.mdx)("p",null,"Finally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use ",Object(i.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",Object(i.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up."),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+        {!isCollapsed && sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n")),Object(i.mdx)("p",null,"We can then implement the unpack of our data into our list items."),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+      <Placeholder />\n+    </Item>\n+  );\n   return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n  \n\n")),Object(i.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),Object(i.mdx)("pre",null,Object(i.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),'class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle="standard">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n')),Object(i.mdx)("p",null,"Using these steps we get the following example:"),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(h,{mdxType:"SectionList"}))}_.isMDXComponent=!0},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(3)),i=l(n(5)),r=l(n(851));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=i.default.bind(r.default),h={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},y=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=s(t).call(this,e))||"object"!==c(o)&&"function"!=typeof o?d(a):o).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(d(n)),n.handleCodeToggle=n.handleCodeToggle.bind(d(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),p(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:f("header")},a.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:f("description")},e):null}}]),p(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,o=e.exampleSrc,i=e.title,r=e.description,l=this.state,c=l.isExpanded,s=l.isBackgroundTransparent;return a.default.createElement("div",{className:f("template")},t.renderHeader(i),a.default.createElement("div",{className:f("content",{"dynamic-content":s})},t.renderDescription(r),n),o&&a.default.createElement("div",{className:f("footer")},a.default.createElement("div",{className:f("button-container")},a.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:f("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:f("chevron-right")}))),c&&a.default.createElement("div",{className:f("code")},o)))}}]),t}(a.default.Component);y.propTypes=h,y.defaultProps={isExpanded:!1};var b=y;t.default=b},848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(3)),i=l(n(5)),r=l(n(849));function l(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(r.default),s={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},d=function(e){var t=e.name,n=e.url,o=e.version;return a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(o))))};d.propTypes=s;var u=d;t.default=u},849:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},851:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},863:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(3)),i=l(n(5)),r=l(n(872));function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.default.bind(r.default),u={variant:o.default.oneOf(["light","dark"]),title:o.default.string},p=function(e){var t=e.variant,n=e.title,o=s(e,["variant","title"]),i=d(["placeholder",o.className]),r=d(["inner","is-".concat(t)]);return a.default.createElement("div",c({},o,{className:i}),a.default.createElement("div",{className:r},a.default.createElement("h2",null,n)))};p.propTypes=u,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},872:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},882:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),i=n(848),r=n.n(i),l=function(e){var t=e.url;return o.a.createElement(r.a,{name:"terra-list",version:"4.27.0",url:t})}},910:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=122-1bcc4b1d68858a16f07e.js.map