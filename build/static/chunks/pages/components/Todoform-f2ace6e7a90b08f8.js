(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[598],{2474:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Todoform",function(){return r(3743)}])},3743:function(n,t,r){"use strict";function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function a(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t),r.d(t,{default:function(){return u}});var o=r(5893),i=r(7294),u=function(){var n=(0,i.useState)(""),t=n[0],r=n[1],e=(0,i.useState)([]),u=e[0],c=e[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h1",{children:"WORKS TO BE DONE"}),(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),console.log(n.target.workname.value),c((function(t){return a(t).concat([n.target.workname.value])})),r("")},children:[(0,o.jsx)("input",{onChange:function(n){r(n.target.value)},className:"inputname",type:"text",name:"workname",value:t,placeholder:"Enter the Work"}),(0,o.jsx)("button",{id:"input-form-btn",children:(0,o.jsx)("i",{className:"fa-solid fa fa-plus"})})]})]}),(0,o.jsx)("div",{className:"container",children:u.map((function(n,t){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"task",children:[(0,o.jsx)("div",{className:"content",children:n}),(0,o.jsx)("div",{className:"btn",children:(0,o.jsx)("button",{id:"del",onClick:function(){return n=t,void c((function(t){return t.filter((function(t,r){return r!==n}))}));var n},children:(0,o.jsx)("i",{className:"fa-solid fa-trash-can fa fa-trash-o"})})})]})})}))})]})})}}},function(n){n.O(0,[774,888,179],(function(){return t=2474,n(n.s=t);var t}));var t=n.O();_N_E=t}]);