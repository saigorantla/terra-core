(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{2255:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(867));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.default,{summaryId:"default-header-table",summary:"This table displays the default layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Default Header"},{id:"header-key-1",key:"key-1",children:"Default Header"}]}}),r.default.createElement(a.default,{summaryId:"chevron-header-table",summary:"This table displays the chevron layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",rowStyle:"disclose",hasChevrons:!0,headerData:{cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Chevron"},{id:"header-key-1",key:"key-1",children:"Selection Style Chevron"}]}}),r.default.createElement(a.default,{summaryId:"check-header-table",summary:"This table displays the checkmark layout of table header.",numberOfColumns:2,cellPaddingStyle:"standard",checkStyle:"toggle",headerData:{selectAllColumn:{checkLabel:"Column Title"},cells:[{id:"header-key-0",key:"key-0",children:"Selection Style Checkmark"},{id:"header-key-1",key:"key-1",children:"Selection Style Checkmark"}]}}))};n.default=l},2256:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(867));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.default,{summaryId:"example-check-cell",summary:"This table displaying a default check column.",rowStyle:"toggle",checkStyle:"icon",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title"},cells:[{id:"column-0",key:"key-0",children:"Default"}]}}),r.default.createElement(a.default,{summaryId:"empty-check-cell",summary:"This table displaying a selectable unchecked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"empty"},cells:[{id:"column-0",key:"key-0",children:"Selectable Unchecked"}]}}),r.default.createElement(a.default,{summaryId:"checked-check-cell",summary:"This table displaying a selectable checked column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"checked"},cells:[{id:"column-0",key:"key-0",children:"Selectable Checked"}]}}),r.default.createElement(a.default,{summaryId:"indeterminate-check-cell",summary:"This table displaying a selectable indeterminate column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkStatus:"indeterminate"},cells:[{id:"column-0",key:"key-0",children:"Selectable Indeterminate"}]}}),r.default.createElement(a.default,{summaryId:"disabled-check-cell",summary:"This table displaying a disabled check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},isDisabled:!0},cells:[{id:"column-0",key:"key-0",children:"Disabled"}]}}),r.default.createElement(a.default,{summaryId:"alignment-check-cell",summary:"This table displaying a vertically aligned check column.",checkStyle:"toggle",numberOfColumns:1,headerData:{selectAllColumn:{checkLabel:"Column Example Title",onCheckAction:function(){},checkAlignment:"1rem"},cells:[{id:"column-0",key:"key-0",children:"Vertical Alignment 1rem"}]}}))};n.default=l},2919:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return q}));var r=t(0),a=t.n(r),o=t(275),l=t(984),c=t(2255),u=t.n(c);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={};function p(e){var n=e.components,t=m(e,["components"]);return Object(o.mdx)("wrapper",d({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderRowExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"default-header-table\"\n      summary=\"This table displays the default layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Default Header' },\n          { id: 'header-key-1', key: 'key-1', children: 'Default Header' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"chevron-header-table\"\n      summary=\"This table displays the chevron layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      hasChevrons\n      headerData={{\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Chevron' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Chevron' },\n        ],\n      }}\n    />\n    <Table\n      summaryId=\"check-header-table\"\n      summary=\"This table displays the checkmark layout of table header.\"\n      numberOfColumns={2}\n      cellPaddingStyle=\"standard\"\n      checkStyle=\"toggle\"\n      headerData={{\n        selectAllColumn: {\n          checkLabel: 'Column Title',\n        },\n        cells: [\n          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Checkmark' },\n          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Checkmark' },\n        ],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderRowExample;\n\n")))}p.isMDXComponent=!0;var s=t(847),f=t.n(s),b=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:n||"Header Row Example",description:t,example:a.a.createElement(u.a,null),exampleSrc:a.a.createElement(p,null),isExpanded:r})},h=t(2256),y=t.n(h);function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var v={};function k(e){var n=e.components,t=x(e,["components"]);return Object(o.mdx)("wrapper",_({},v,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",_({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\n\nconst HeaderCheckMarkCellExample = () => (\n  <React.Fragment>\n    <Table\n      summaryId=\"example-check-cell\"\n      summary=\"This table displaying a default check column.\"\n      rowStyle=\"toggle\"\n      checkStyle=\"icon\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Default' }],\n      }}\n    />\n    <Table\n      summaryId=\"empty-check-cell\"\n      summary=\"This table displaying a selectable unchecked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'empty' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Unchecked' }],\n      }}\n    />\n    <Table\n      summaryId=\"checked-check-cell\"\n      summary=\"This table displaying a selectable checked column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'checked' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Checked' }],\n      }}\n    />\n    <Table\n      summaryId=\"indeterminate-check-cell\"\n      summary=\"This table displaying a selectable indeterminate column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'indeterminate' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Indeterminate' }],\n      }}\n    />\n    <Table\n      summaryId=\"disabled-check-cell\"\n      summary=\"This table displaying a disabled check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, isDisabled: true },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Disabled' }],\n      }}\n    />\n    <Table\n      summaryId=\"alignment-check-cell\"\n      summary=\"This table displaying a vertically aligned check column.\"\n      checkStyle=\"toggle\"\n      numberOfColumns={1}\n      headerData={{\n        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkAlignment: '1rem' },\n        cells: [{ id: 'column-0', key: 'key-0', children: 'Vertical Alignment 1rem' }],\n      }}\n    />\n  </React.Fragment>\n);\n\nexport default HeaderCheckMarkCellExample;\n\n")))}k.isMDXComponent=!0;var g=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:n||"Header Check Mark Cell Example",description:t,example:a.a.createElement(y.a,null),exampleSrc:a.a.createElement(k,null),isExpanded:r})},O=t(850),T=t.n(O);function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var D=function(){return Object(o.mdx)(T.a,{rows:[{name:"cells",type:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",j({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"arrayOf"),Object(o.mdx)("pre",null,Object(o.mdx)("code",j({parentName:"pre"},{className:"language-json"}),'{\n "name": "custom",\n "raw": "headerCellShape"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",j({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The cells to be displayed within the header."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",j({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",j({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback returning the html node for the header."))}return n.isMDXComponent=!0,n({})}},{name:"selectAllColumn",type:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",j({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=C(n,["components"]);return Object(o.mdx)("wrapper",j({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The select all column header's properties."))}return n.isMDXComponent=!0,n({})}}]})};function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function E(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var M=function(){return Object(o.mdx)(T.a,{rows:[{name:"id",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,'The id of the header cell for the row cells to set within their "headers" prop.'))}return n.isMDXComponent=!0,n({})}},{name:"key",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The react key to apply to the cell."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Content to be displayed for the column header."))}return n.isMDXComponent=!0,n({})}},{name:"isSortDesc",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the sort indicator is descending."))}return n.isMDXComponent=!0,n({})}},{name:"isSortActive",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the column is to be marked as a sorted column."))}return n.isMDXComponent=!0,n({})}},{name:"metaData",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return n.isMDXComponent=!0,n({})}},{name:"onCellAction",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onCellAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for actions or selections."))}return n.isMDXComponent=!0,n({})}},{name:"onSortAction",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSortAction(event, metaData)\nThe presence of this func will indicate that the cell can be interacted with for sorting."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function callback returning the html node for the header cell."))}return n.isMDXComponent=!0,n({})}},{name:"removeInner",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not the cell's inner containing element responsible for handling table's default padding is removed.\nThis is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding."))}return n.isMDXComponent=!0,n({})}},{name:"attrs",type:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=E(n,["components"]);return Object(o.mdx)("wrapper",w({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to be passed to the cell."))}return n.isMDXComponent=!0,n({})}}]})};function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function X(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var P=function(){return Object(o.mdx)(T.a,{rows:[{name:"checkStatus",type:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",S({parentName:"pre"},{className:"language-json"}),'[\n "empty",\n "checked",\n "indeterminate"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The status of the select all checkbox."))}return n.isMDXComponent=!0,n({})}},{name:"checkAlignment",type:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The alignment prop sets the bottom spacing of the check mar, standard units are valid. This is used when providing your own padding."))}return n.isMDXComponent=!0,n({})}},{name:"checkLabel",type:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The text label for the column header's interaction."))}return n.isMDXComponent=!0,n({})}},{name:"onCheckAction",type:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The function callback triggering when the checkbox within the column header has an interaction."))}return n.isMDXComponent=!0,n({})}},{name:"isDisabled",type:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=X(n,["components"]);return Object(o.mdx)("wrapper",S({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether or not interaction should be disabled."))}return n.isMDXComponent=!0,n({})}}]})};function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function A(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var N={};function q(e){var n=e.components,t=A(e,["components"]);return Object(o.mdx)("wrapper",L({},N,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-table---header"},"Terra Table - Header"),Object(o.mdx)("p",null,"The table's header is comprised of a cells and an optional selectAllColumn. The checkLabel should be provided if the table has toggle behavior."),Object(o.mdx)("h1",{id:"examples"},"Examples"),Object(o.mdx)(b,{mdxType:"HeaderRowExample"}),Object(o.mdx)(g,{mdxType:"HeaderCheckMarkCellExample"}),Object(o.mdx)("h2",{id:"table-header-props"},"Table Header Props"),Object(o.mdx)(D,{mdxType:"HeaderProps"}),Object(o.mdx)("h2",{id:"table-header-cell-props"},"Table Header Cell Props"),Object(o.mdx)(M,{mdxType:"HeaderCellProps"}),Object(o.mdx)("h2",{id:"table-select-all-column-props"},"Table Select All Column Props"),Object(o.mdx)(P,{mdxType:"SelectAllColumnProps"}))}q.isMDXComponent=!0},847:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(3)),o=c(t(5)),l=c(t(851));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=o.default.bind(l.default),b={example:a.default.element,exampleSrc:a.default.element,title:a.default.string,description:a.default.node,isExpanded:a.default.bool},h=function(e){function n(e){var t,r,a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(t=!(a=d(n).call(this,e))||"object"!==u(a)&&"function"!=typeof a?m(r):a).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(m(t)),t.handleCodeToggle=t.handleCodeToggle.bind(m(t)),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(n,e),p(n,null,[{key:"renderHeader",value:function(e){return e?r.default.createElement("div",{className:f("header")},r.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?r.default.createElement("div",{className:f("description")},e):null}}]),p(n,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,a=e.exampleSrc,o=e.title,l=e.description,c=this.state,u=c.isExpanded,d=c.isBackgroundTransparent;return r.default.createElement("div",{className:f("template")},n.renderHeader(o),r.default.createElement("div",{className:f("content",{"dynamic-content":d})},n.renderDescription(l),t),a&&r.default.createElement("div",{className:f("footer")},r.default.createElement("div",{className:f("button-container")},r.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:f("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:f("chevron-right")}))),u&&r.default.createElement("div",{className:f("code")},a)))}}]),n}(r.default.Component);h.propTypes=b,h.defaultProps={isExpanded:!1};var y=h;n.default=y},848:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(3)),o=c(t(5)),l=c(t(849));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),d={name:a.default.string.isRequired,url:a.default.string,version:a.default.string.isRequired},m=function(e){var n=e.name,t=e.url,a=e.version;return r.default.createElement("div",{className:u("badge-container")},r.default.createElement("a",{className:u("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},r.default.createElement("span",{className:u("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(a))))};m.propTypes=d;var i=m;n.default=i},849:function(e,n,t){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},850:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(0)),a=c(t(3)),o=c(t(5)),l=c(t(852));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(l.default),d={rows:a.default.arrayOf(a.default.shape({name:a.default.string,type:a.default.func,required:a.default.bool,defaultValue:a.default.string,description:a.default.func}))},m=function(e){var n=e.rows;return r.default.createElement("table",{className:u("table")},r.default.createElement("thead",null,r.default.createElement("tr",{className:u("tr")},r.default.createElement("th",{className:u("th")},"Prop Name"),r.default.createElement("th",{className:u("th")},"Type"),r.default.createElement("th",{className:u("th")},"Is Required"),r.default.createElement("th",{className:u("th")},"Default Value"),r.default.createElement("th",{className:u("th")},"Description"))),r.default.createElement("tbody",null,n.map((function(e){return r.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},r.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),r.default.createElement("td",{className:u(["td","props-td"])},e.type()),r.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),r.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),r.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};m.propTypes=d;var i=m;n.default=i},851:function(e,n,t){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},852:function(e,n,t){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},984:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),a=t.n(r),o=t(848),l=t.n(o),c=function(e){var n=e.url;return a.a.createElement(l.a,{name:"terra-table",version:"4.5.0",url:n})}}}]);
//# sourceMappingURL=131-70a94343b944d7973a1e.js.map