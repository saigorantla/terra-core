(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{1214:function(t,e,n){t.exports={"content-wrapper":"AlertTestCommon__content-wrapper___2JY5r"}},2436:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(0)),o=u(n(53)),a=u(n(5)),l=u(n(890)),i=u(n(1214));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=a.default.bind(i.default),h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(c,t);var e,n,a,i,u=(e=c,function(){var t,n=b(e);if(m()){var r=b(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return d(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this,t)).state={actionButtonClickCount:0},e.actionFunc=e.actionFunc.bind(p(e)),e}return n=c,(a=[{key:"actionFunc",value:function(){var t=this.state;t.actionButtonClickCount+=1,this.setState(t)}},{key:"render",value:function(){var t="This is a warning. It is configured with a custom Action button.";return r.default.createElement("div",{className:y("content-wrapper")},r.default.createElement("div",{dir:"ltr"},r.default.createElement("h3",null,"Basic Alert of type warning with action button in a small container (500px wide) that will cause the action button section of the alert to render below the message instead of beside it."),r.default.createElement("br",null),r.default.createElement("code",null,'<Alert type="warning" action={<Button text="Action" size="medium" variant="emphasis" onClick={this.actionFunc} />} >',r.default.createElement("br",null),"  ",t,".",r.default.createElement("br",null),"</Alert>")),r.default.createElement("br",null),r.default.createElement(l.default,{type:"warning",action:r.default.createElement(o.default,{text:"Action",variant:"emphasis",onClick:this.actionFunc})},t),r.default.createElement("br",null),r.default.createElement("p",null,"Action button has been clicked",this.state.actionButtonClickCount," ","times."),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("div",{dir:"ltr"},r.default.createElement("h3",null,"Basic Alert of type info in a small container (500px wide) which should be rendered the same as in wide container"),r.default.createElement("br",null),r.default.createElement("code",null,'<Alert type="info" >',"This is an information alert","</Alert>")),r.default.createElement("br",null),r.default.createElement(l.default,{type:"info"},"This is an information alert"))}}])&&f(n.prototype,a),i&&f(n,i),c}(r.default.Component);e.default=h}}]);
//# sourceMappingURL=475-d2cbddc91b636dcddc36.js.map