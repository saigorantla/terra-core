(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{2843:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(0)),a=o(n(857));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(m,t);var e,n,o,r,d=(e=m,function(){var t,n=h(e);if(f()){var i=h(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return u(this,t)});function m(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),(t=d.call(this)).state={isOpen:!1},t.handleOnClick=t.handleOnClick.bind(c(t)),t}return n=m,(o=[{key:"handleOnClick",value:function(){this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){var t=this.state.isOpen;return i.default.createElement("div",null,i.default.createElement("button",{type:"button",id:"trigger-toggle",onClick:this.handleOnClick,"aria-expanded":t,"aria-controls":"toggle"},"Animated Toggle"),i.default.createElement(a.default,{id:"toggle",isOpen:t,isAnimated:!0},i.default.createElement("p",null,"Lorem ipsum dolor sit amet,",i.default.createElement("a",{id:"link",href:"#test"},"consectetur")," ","adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"text-input"},"Text input"),i.default.createElement("input",{id:"text-input",className:"test",type:"text"})),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"select-field",defaultValue:"Option 01"},"Select field"),i.default.createElement("select",{id:"select-field"},i.default.createElement("option",null,"Option 01"),i.default.createElement("option",null,"Option 02"))),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"textarea"},"Textarea"),i.default.createElement("textarea",{id:"textarea",cols:"30",rows:"5",defaultValue:"Textarea text"})),i.default.createElement("br",null),i.default.createElement("div",null,i.default.createElement("button",{type:"button",id:"button"},"button"))))}}])&&l(n.prototype,o),r&&l(n,r),m}(i.default.Component);e.default=d},855:function(t,e,n){var i;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var o=typeof i;if("string"===o||"number"===o)t.push(i);else if(Array.isArray(i)&&i.length){var r=a.apply(null,i);r&&t.push(r)}else if("object"===o)for(var l in i)n.call(i,l)&&i[l]&&t.push(l)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(i=function(){return a}.apply(e,[]))||(t.exports=i)}()},856:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=u(n(0)),l=u(n(3)),s=u(n(855));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function d(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var a={},o=Object.keys(t),r=0;r<o.length;r++){var l=o[r];-1===n.indexOf(l)&&(a[l]=t[l])}return a}function m(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function p(t){return!isNaN(parseFloat(t))&&isFinite(t)}function g(t){return"string"==typeof t&&t.search("%")===t.length-1&&p(t.substr(0,t.length-1))}function y(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",o="visible";p(t.height)?(i=t.height<0||"0"===t.height?0:t.height,o="hidden"):g(t.height)&&(i="0%"===t.height?0:t.height,o="hidden"),n.animationStateClasses=a({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:o,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,a=this,o=this.props,r=o.delay,l=o.duration,u=o.height,f=o.onAnimationEnd,h=o.onAnimationStart;if(this.contentElement&&u!==t.height){var d;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=l+r,O=null,S={height:null,overflow:"hidden"},w="auto"===e.height;p(u)?(O=u<0||"0"===u?0:u,S.height=O):g(u)?(O="0%"===u?0:u,S.height=O):(O=b,S.height="auto",S.overflow=null),w&&(S.height=O,O=b);var E=(0,s.default)((c(d={},this.animationStateClasses.animating,!0),c(d,this.animationStateClasses.animatingUp,"auto"===t.height||u<t.height),c(d,this.animationStateClasses.animatingDown,"auto"===u||u>t.height),c(d,this.animationStateClasses.animatingToHeightZero,0===S.height),c(d,this.animationStateClasses.animatingToHeightAuto,"auto"===S.height),c(d,this.animationStateClasses.animatingToHeightSpecific,S.height>0),d)),C=this.getStaticStateClasses(S.height);this.setState({animationStateClasses:E,height:O,overflow:"hidden",shouldUseTransitions:!w}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),w?(S.shouldUseTransitions=!0,m(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(S),y(h,{newHeight:S.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:C,shouldUseTransitions:!1}),a.hideContent(S.height),y(f,{newHeight:S.height})}),v)):(y(h,{newHeight:O}),this.timeoutID=setTimeout((function(){S.animationStateClasses=C,S.shouldUseTransitions=!1,a.setState(S),"auto"!==u&&a.hideContent(O),y(f,{newHeight:O})}),v))}}},{key:"componentWillUnmount",value:function(){m(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,s.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,o=n.applyInlineTransitions,l=n.children,u=n.className,f=n.contentClassName,m=n.duration,p=n.easing,g=n.delay,y=n.style,b=this.state,v=b.height,O=b.overflow,S=b.animationStateClasses,w=b.shouldUseTransitions,E=a({},y,{height:v,overflow:O||y.overflow});w&&o&&(E.transition="height "+m+"ms "+p+" "+g+"ms",y.transition&&(E.transition=y.transition+", "+E.transition),E.WebkitTransition=E.transition);var C={};i&&(C.transition="opacity "+m+"ms "+p+" "+g+"ms",C.WebkitTransition=C.transition,0===v&&(C.opacity=0));var T=(0,s.default)((c(t={},S,!0),c(t,u,u),t));return r.default.createElement("div",a({},d.apply(void 0,[this.props].concat(h)),{"aria-hidden":0===v,className:T,style:E}),r.default.createElement("div",{className:f,style:C,ref:function(t){return e.contentElement=t}},l))}}]),e}(r.default.Component);b.propTypes={animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,duration:l.default.number,delay:l.default.number,easing:l.default.string,height:function(t,e,n){var a=t[e];return"number"==typeof a&&a>=0||g(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+("undefined"==typeof a?"undefined":i(a))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},857:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n(0)),a=s(n(3)),o=s(n(5)),r=s(n(856)),l=s(n(858));function s(t){return t&&t.__esModule?t:{default:t}}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var f=o.default.bind(l.default),h={children:a.default.node.isRequired,isAnimated:a.default.bool,isOpen:a.default.bool},d=function(t){var e,n=t.isAnimated,a=t.isOpen,o=t.children,l=c(t,["isAnimated","isOpen","children"]),s=a?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:s},o):a&&o,i.default.createElement("div",u({},l,{className:f("toggle",l.className),"aria-hidden":!a}),e)};d.propTypes=h,d.defaultProps={isAnimated:!1,isOpen:!1};var m=d;e.default=m},858:function(t,e,n){t.exports={toggle:"Toggle-module__toggle___3Y29L"}}}]);
//# sourceMappingURL=284-84e3dbe09004304b6817.js.map