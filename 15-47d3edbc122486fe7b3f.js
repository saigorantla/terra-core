(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1091:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(r(0)),o=u(r(3)),i=u(r(290)),n=u(r(277)),l=u(r(859));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d={inputId:o.default.string.isRequired,label:o.default.string.isRequired,defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,error:o.default.node,errorIcon:o.default.element,help:o.default.node,hideRequired:o.default.bool,inputAttrs:o.default.object,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLabelHidden:o.default.bool,labelAttrs:o.default.object,maxWidth:o.default.string,onChange:o.default.func,placeholder:o.default.string,required:o.default.bool,showOptional:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number])},f={defaultValue:void 0,disabled:!1,error:null,errorIcon:a.default.createElement(i.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,showOptional:!1,value:void 0},p=function(e){var t,r=e.defaultValue,o=e.disabled,i=e.error,u=e.errorIcon,d=e.help,f=e.hideRequired,p=e.inputAttrs,h=e.inputId,b=e.isIncomplete,v=e.isInline,m=e.isInvalid,y=e.isLabelHidden,g=e.label,O=e.labelAttrs,w=e.maxWidth,x=e.required,_=e.showOptional,I=e.onChange,j=e.placeholder,z=e.value,P=c(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","required","showOptional","onChange","placeholder","value"]);return d&&i&&m?t="".concat(h,"-error ").concat(h,"-help"):(d&&(t="".concat(h,"-help")),i&&m&&(t="".concat(h,"-error"))),a.default.createElement(n.default,s({},P,{label:g,labelAttrs:O,error:i,errorIcon:u,help:d,hideRequired:f,required:x,showOptional:_,isInvalid:m,isInline:v,isLabelHidden:y,htmlFor:h,maxWidth:w}),a.default.createElement(l.default,s({},p,{disabled:p.disabled||o,id:h,isIncomplete:b,onChange:I,placeholder:j||p.placeholder,value:z,defaultValue:r,"aria-describedby":t})))};p.propTypes=d,p.defaultProps=f;var h=p;t.default=h},859:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var a=l(r(0)),o=l(r(3)),i=l(r(5)),n=l(r(860));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=i.default.bind(n.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var O={small:2,medium:5,large:10},w={ariaLabel:o.default.string,defaultValue:o.default.string,disabled:o.default.bool,isAutoResizable:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,name:o.default.string,onChange:o.default.func,onFocus:o.default.func,placeholder:o.default.string,required:o.default.bool,rows:o.default.number,size:o.default.oneOf(["small","medium","large","full"]),value:o.default.string,refCallback:o.default.func,disableResize:o.default.bool},x={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,placeholder:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(l,e);var t,r,o,i,n=(t=l,function(){var e,r=y(t);if(m()){var a=y(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return b(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=n.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(v(t)),t.onFocus=t.onFocus.bind(v(t)),t}return r=l,(o=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||O[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,o=r.name,i=r.required,n=(r.onChange,r.onFocus,r.placeholder),l=r.isAutoResizable,u=r.isIncomplete,p=r.isInvalid,h=r.value,b=r.defaultValue,v=r.rows,m=r.size,y=r.ariaLabel,w=r.refCallback,x=r.disableResize,_=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},f(r,["name","required","onChange","onFocus","placeholder","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"])),I=g(["textarea",{"form-error":p},{"form-incomplete":u&&i&&!p},{"full-size":"full"===m},{resizable:l&&!this.isMobileDevice},{"no-resize":x},_.className]);_&&Object.prototype.hasOwnProperty.call(_,"aria-label")?e=y||_["aria-label"]:y&&(e=y),_["aria-label"]=e,i&&(_["aria-required"]="true");var j=v||O[m];return void 0!==h?_.value=h:_.defaultValue=b,a.default.createElement("textarea",s({},_,{ref:function(e){t.textarea=e,w&&w(e)},name:o,onFocus:this.onFocus,onChange:this.onChange,placeholder:n,required:i,rows:j,className:I}))}}])&&p(r.prototype,o),i&&p(r,i),l}(a.default.Component);_.propTypes=w,_.defaultProps=x,_.isTextarea=!0;var I=_;t.default=I},860:function(e,t,r){e.exports={textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf","no-resize":"Textarea-module__no-resize___1iAys",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI","form-incomplete":"Textarea-module__form-incomplete___30YTC"}}}]);
//# sourceMappingURL=15-47d3edbc122486fe7b3f.js.map