(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1097:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(848),l=n.n(o),c=function(e){var t=e.url;return a.a.createElement(l.a,{name:"terra-image",version:"3.25.0",url:t})}},2122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(184)),o=c(n(979)),l=c(n(2123));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"Default"),r.default.createElement(a.default,{src:o.default,alt:"default image"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Circle"),r.default.createElement(a.default,{src:o.default,alt:"circle image",variant:"circle"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Rounded"),r.default.createElement(a.default,{src:o.default,alt:"rounded image",variant:"rounded"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Thumbnail"),r.default.createElement(a.default,{src:o.default,alt:"thumbnail image",variant:"thumbnail"}),r.default.createElement("br",null),r.default.createElement("h2",null,"Fluid"),r.default.createElement(a.default,{src:l.default,alt:"fluid image",isFluid:!0}),r.default.createElement("br",null),r.default.createElement("h2",null,"Placeholder"),r.default.createElement("h3",null,"Invalid src prop (placeholder will show)"),r.default.createElement(a.default,{src:"/mock/failure/route",alt:"invalid src attribute image",placeholder:r.default.createElement(a.default,{src:l.default,alt:"placeholder image"})}),r.default.createElement("h3",null,"Valid src prop (src will show)"),r.default.createElement(a.default,{src:o.default,alt:"src image",placeholder:r.default.createElement(a.default,{src:l.default,alt:"placeholder image"})}))};t.default=u},2123:function(e,t,n){e.exports=n.p+"2d50003b6b587b1e3ce153b0e06feafa.png"},2124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(3)),o=p(n(5)),l=p(n(184)),c=p(n(2125)),u=p(n(2126)),i=p(n(2127));function p(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=o.default.bind(u.default),s={fit:a.default.string,variant:a.default.string},f=function(e){var t=d({},e);return r.default.createElement("div",{className:m("image-container")},r.default.createElement(l.default,{alt:"Toggle fit image",className:m("image"),src:i.default,fit:t.fit,variant:t.variant}))};f.propTypes=s;var b=(0,c.default)(f);t.default=b},2125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(b,t);var n,r,o,s,f=(n=b,function(){var e,t=m(n);if(d()){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return i(this,e)});function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=f.call(this,e)).handleOnSelect=t.handleOnSelect.bind(p(t)),t.state={fitType:"fill",variantType:"default"},t}return r=b,(o=[{key:"handleOnSelect",value:function(e){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.target.name,e.target.value))}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(e,l({fit:this.state.fitType,variant:this.state.variantType},this.props)),a.default.createElement("p",null,a.default.createElement("label",{htmlFor:"fitType"},"Select a Fit Type:")),a.default.createElement("select",{id:"fitType",name:"fitType",value:this.state.fitType,onChange:this.handleOnSelect},a.default.createElement("option",{value:"fill"},"fill"),a.default.createElement("option",{value:"cover"},"cover"),a.default.createElement("option",{value:"contain"},"contain"),a.default.createElement("option",{value:"scale-down"},"scale-down"),a.default.createElement("option",{value:"none"},"none")),a.default.createElement("p",null,a.default.createElement("label",{htmlFor:"variantType"},"Select a Variant Type:")),a.default.createElement("select",{id:"variantType",name:"variantType",value:this.state.variantType,onChange:this.handleOnSelect},a.default.createElement("option",{value:"default"},"default"),a.default.createElement("option",{value:"circle"},"circle"),a.default.createElement("option",{value:"rounded"},"rounded"),a.default.createElement("option",{value:"thumbnail"},"thumbnail")))}}])&&c(r.prototype,o),s&&c(r,s),b}(a.default.Component)};t.default=s},2126:function(e,t,n){e.exports={"image-container":"ImageFitTypes__image-container___2dH5k",image:"ImageFitTypes__image___FZ8ad"}},2127:function(e,t,n){e.exports=n.p+"40415849cc161edd3bafb6a6a5c973b2.jpg"},2925:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(0),a=n.n(r),o=n(275),l=n(1097),c=n(2122),u=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function m(e){var t=e.components,n=p(e,["components"]);return Object(o.mdx)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",i({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Image from \'terra-image\';\nimport placeholderPic150x150 from \'../../assets/150x150.jpg\';\nimport placeholderPic1000x200 from \'../../assets/1000x200.png\';\n\nconst ImageDefault = () => (\n  <div>\n    <h2>Default</h2>\n    <Image src={placeholderPic150x150} alt="default image" />\n    <br />\n    <h2>Circle</h2>\n    <Image src={placeholderPic150x150} alt="circle image" variant="circle" />\n    <br />\n    <h2>Rounded</h2>\n    <Image src={placeholderPic150x150} alt="rounded image" variant="rounded" />\n    <br />\n    <h2>Thumbnail</h2>\n    <Image src={placeholderPic150x150} alt="thumbnail image" variant="thumbnail" />\n    <br />\n    <h2>Fluid</h2>\n    <Image src={placeholderPic1000x200} alt="fluid image" isFluid />\n    <br />\n    <h2>Placeholder</h2>\n    <h3>Invalid src prop (placeholder will show)</h3>\n    {/* eslint-disable-next-line react/jsx-no-duplicate-props */}\n    <Image src="/mock/failure/route" alt="invalid src attribute image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n    <h3>Valid src prop (src will show)</h3>\n    <Image src={placeholderPic150x150} alt="src image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n  </div>\n);\n\nexport default ImageDefault;\n\n')))}m.isMDXComponent=!0;var s=n(847),f=n.n(s),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Image Default",description:n,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(m,null),isExpanded:r})},_=n(2124),g=n.n(_);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function x(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",h({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",h({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport Image from 'terra-image';\nimport FitTypesWrapper from 'terra-image/lib/terra-dev-site/doc/example/common/FitTypesWrapper';\nimport styles from './ImageFitTypes.scss';\nimport exampleImage from '../../assets/170x251.jpg';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = { fit: PropTypes.string, variant: PropTypes.string };\n\nconst ImageFitTypes = ({\n  ...props\n}) => (\n  <div className={cx('image-container')}>\n    <Image alt=\"Toggle fit image\" className={cx('image')} src={exampleImage} fit={props.fit} variant={props.variant} />\n  </div>\n);\n\nImageFitTypes.propTypes = propTypes;\nexport default FitTypesWrapper(ImageFitTypes);\n\n")))}x.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Image Fit Types",description:n,example:a.a.createElement(g.a,null),exampleSrc:a.a.createElement(x,null),isExpanded:r})},j=n(850),T=n.n(j);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N=function(){return Object(o.mdx)(T.a,{rows:[{name:"src",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The source string for the image which will be loaded and displayed."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",E({parentName:"pre"},{className:"language-json"}),'[\n "default",\n "rounded",\n "circle",\n "thumbnail"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'default'",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the style of the image from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"default"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"rounded"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"circle"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"thumbnail"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isFluid",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the fluid behavior of the image, which is ",Object(o.mdx)("inlineCode",{parentName:"p"},"nonfluid")," by default."))}return t.isMDXComponent=!0,t({})}},{name:"alt",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"' '",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The text content that specifies an alternative text for an image."))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A React element which will be displayed during loading and in case of src load failure."))}return t.isMDXComponent=!0,t({})}},{name:"height",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the height of the image."))}return t.isMDXComponent=!0,t({})}},{name:"width",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the width of the image."))}return t.isMDXComponent=!0,t({})}},{name:"onLoad",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when the image load is successful."))}return t.isMDXComponent=!0,t({})}},{name:"onError",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when the image load errors."))}return t.isMDXComponent=!0,t({})}},{name:"fit",type:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",E({parentName:"pre"},{className:"language-json"}),'[\n "cover",\n "scale-down",\n "fill",\n "contain",\n "none"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'fill'",description:function(){var e={};function t(t){var n=t.components,r=w(t,["components"]);return Object(o.mdx)("wrapper",E({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the ",Object(o.mdx)("inlineCode",{parentName:"p"},"object-fit")," style of the image from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"cover"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"contain"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"fill"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"scale-down"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"none"),"."))}return t.isMDXComponent=!0,t({})}}]})};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={};function C(e){var t=e.components,n=D(e,["components"]);return Object(o.mdx)("wrapper",P({},M,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-image"},"Terra Image"),Object(o.mdx)("p",null,"The terra-image component provides styling for visual imagery."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",P({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-image"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",P({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",P({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",P({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",P({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",P({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",P({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",P({parentName:"pre"},{className:"language-jsx"}),"import Image from 'terra-image';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("p",null,Object(o.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/master/packages/terra-image"}),"View component source code")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{mdxType:"ImageDefault"}),Object(o.mdx)(O,{mdxType:"ImageFit"}),Object(o.mdx)("h2",{id:"image-props"},"Image Props"),Object(o.mdx)(N,{mdxType:"ImagePropsTable"}))}C.isMDXComponent=!0},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(851));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(l.default),b={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},_=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=i(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?p(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(p(n)),n.handleCodeToggle=n.handleCodeToggle.bind(p(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,a=e.exampleSrc,o=e.title,l=e.description,c=this.state,u=c.isExpanded,i=c.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},t.renderHeader(o),r.default.createElement("div",{className:f("content",{"dynamic-content":i})},t.renderDescription(l),n),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),u&&r.default.createElement("div",{className:f("code")},a)))}}]),t}(r.default.Component);_.propTypes=b,_.defaultProps={isExpanded:!1};var g=_;t.default=g},848:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(849));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),i={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},p=function(e){var t=e.name,n=e.url,a=e.version;return r.default.createElement("div",{className:u("badge-container")},r.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},r.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(a))))};p.propTypes=i;var d=p;t.default=d},849:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},850:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(5)),l=c(n(852));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),i={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},p=function(e){var t=e.rows;return r.default.createElement("table",{className:u("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:u("tr")},r.default.createElement("th",{className:u("th")},"Prop Name"),r.default.createElement("th",{className:u("th")},"Type"),r.default.createElement("th",{className:u("th")},"Is Required"),r.default.createElement("th",{className:u("th")},"Default Value"),r.default.createElement("th",{className:u("th")},"Description"))),r.default.createElement("tbody",null,t.map((function(e){return r.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:u(["td","props-td"])},e.type()),r.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};p.propTypes=i;var d=p;t.default=d},851:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},852:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},979:function(e,t,n){e.exports=n.p+"87ec563ff16c288f58b0747d553762d6.jpg"}}]);
//# sourceMappingURL=89-3d816c201e087d945dbd.js.map