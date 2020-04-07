(window.webpackJsonp=window.webpackJsonp||[]).push([[624],{1224:function(e,n,o){"use strict";o.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\n// These props are used to test react-doc-gen, but they only need to be mocked\n/* eslint-disable react/no-unused-prop-types */\nconst propTypes = {\n  /**\n   * An example of type string markup.\n   * `This component contains a very long section of code in it's description column. This component contains a very long section of code in it's description column.`\n   */\n  string: PropTypes.string.isRequired,\n  /**\n   * An example of type number markup.\n   */\n  number: PropTypes.number,\n  /**\n   * An example of type boolean markup.\n   * ```This component contains a very long preformatted section in it's description column. This component contains a very long preformatted section in it's description column.```\n   */\n  bool: PropTypes.bool,\n  /**\n   * An example of type element markup.\n   */\n  element: PropTypes.element,\n  /**\n   * An example of type node markup.\n   */\n  node: PropTypes.node,\n  /**\n   * An example of type array markup.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  array: PropTypes.array,\n  /**\n   * A default example of type arrayOf markup.\n   */\n  arrayOfDefault: PropTypes.arrayOf(PropTypes.element),\n  /**\n   * An example of type arrayOf(shapes)  markup.\n   */\n  arrayOfShapes: PropTypes.arrayOf(PropTypes.shape({\n    stringProp: PropTypes.string,\n  })),\n  /**\n   * An example of type oneOfType markup with the option of a string, number or shape type.\n   */\n  oneOfType: PropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.number,\n    PropTypes.shape({\n      stringProp: PropTypes.string,\n    }),\n  ]),\n  /**\n   * An example of type shape markup.\n   */\n  shape: PropTypes.shape({\n    stringProp: PropTypes.string,\n    numberProp: PropTypes.number,\n  }),\n};\n/* eslint-enable react/no-unused-prop-types */\n\nconst MockComponent = props => (\n  React.createElement('span', JSON.stringify({ props }))\n);\n\nMockComponent.propTypes = propTypes;\n\nexport default MockComponent;\n"},2754:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var p=s(o(0)),r=s(o(940)),t=s(o(1224));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){return p.default.createElement("div",null,p.default.createElement(r.default,{id:"PropsTable",src:t.default,componentName:"Mock Component"}),p.default.createElement("p",{"data-terra-bottom-scroll-marker":!0},"Marker for scrolling during tests"))};n.default=a}}]);
//# sourceMappingURL=624-7f245029a2fc4e61d13d.js.map