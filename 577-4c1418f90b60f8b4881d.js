(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{2324:function(e,t,a){e.exports={"weighted-text":"DefaultI18n-module__weighted-text___LPl8d","fallback-message":"DefaultI18n-module__fallback-message___19RNk"}},2696:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),l=i(a(3)),o=a(8),r=i(a(5)),c=i(a(311)),u=i(a(312)),s=i(a(2324));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=r.default.bind(s.default),v=["en","en-GB","pt","pt-GW","zu","zu-ZA"],_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,a,l,r,s=(t=i,function(){var e,a=b(t);if(y()){var n=b(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return h(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=s.call(this,e)).state={selectedLocale:"en",areTranslationsLoaded:!1,locale:e.locale,messages:{}},t.handleLocaleChange=t.handleLocaleChange.bind(m(t)),t}return a=i,(l=[{key:"componentDidMount",value:function(){(0,u.default)(this.props.locale,this.setState,this)}},{key:"handleLocaleChange",value:function(e){this.setState({selectedLocale:e.target.value}),(0,u.default)(e.target.value,this.setState,this)}},{key:"render",value:function(){return this.state.areTranslationsLoaded?n.default.createElement("div",null,n.default.createElement(c.default,{locale:this.state.locale,messages:this.state.messages},n.default.createElement("label",{htmlFor:"change-locale"}," Current locale: "),n.default.createElement("select",{id:"change-locale",onChange:this.handleLocaleChange,value:this.state.selectedLocale},v.map((function(e){return n.default.createElement("option",{key:e,value:e},e)}))),n.default.createElement("p",{id:"translated-message"},n.default.createElement("span",{className:g("weighted-text")}," Loaded locale message: "),n.default.createElement(o.FormattedMessage,{id:"Terra.ajax.error"})),this.state.selectedLocale.includes("zu")&&n.default.createElement("p",{className:g("fallback-message")},"Using the en locale as fallback."),"pt-GW"===this.state.selectedLocale&&n.default.createElement("p",{className:g("fallback-message")},"Using the pt locale as fallback."))):n.default.createElement("div",null)}}])&&d(a.prototype,l),r&&d(a,r),i}(n.default.Component);_.propTypes={locale:l.default.string},_.defaultProps={locale:"en"};t.default=function(){return n.default.createElement(_,null)}}}]);
//# sourceMappingURL=577-4c1418f90b60f8b4881d.js.map