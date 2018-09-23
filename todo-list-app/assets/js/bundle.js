!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/js",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const o={init:()=>{o.listaTarefas(),o.showAddTarefa(),o.addNewTarefa(),o.filterListConcluidos(),o.filterListPendentes(),o.filterListAll()},apiURL:e=>0!=e?`http://localhost/quero-ser-quality/todo-list-api/public/api/tarefas/${e}`:"http://localhost/quero-ser-quality/todo-list-api/public/api/tarefas",listaTarefas:()=>{fetch(o.apiURL(!1)).then(e=>{if(e.ok)return e.json().then(e=>{let t="";e.forEach(e=>{t+=`\n                                <div class="col" data-id="${e.id}" data-status="${"pendente"!=e.status?"1":"0"}">\n                                    <div class="content">\n                                        <header class="header">\n                                            <input class="status" type="checkbox"${"pendente"!=e.status?" checked":""}>\n                                            <h3 class="subtitle">${e.titulo}</h3>\n                                            <span class="remove"><i class="far fa-trash-alt"></i></span>\n                                        </header>\n                                        <div class="desc">\n                                            <span>${e.descricao}</span>\n                                        </div>\n                                    </div>\n                                </div>`}),document.querySelector(".listagem .row").innerHTML=t,o.showDescTarefa(),o.updateStatusTarefa(),o.deleteTarefa()})})},showAddTarefa:()=>{let e=document.querySelector(".add-tarefa"),t=document.querySelector("body");e.addEventListener("click",e=>{e.preventDefault(),t.classList.contains("show-add")?t.classList.remove("show-add"):t.className="show-add"})},showDescTarefa:()=>{let e=document.querySelectorAll(".listagem .subtitle"),t=document.querySelectorAll(".listagem .col");for(let n of e)n.addEventListener("click",e=>{let o=n.parentElement.parentElement.parentElement;if(o.classList.contains("show"))o.classList.remove("show");else{for(let e of t)e.classList.remove("show");o.className+=" show"}})},addNewTarefa:()=>{let e=document.querySelector(".nova-tarefa .form");e.addEventListener("submit",t=>{t.preventDefault();let n=document.querySelector("#titulo"),r=document.querySelector("#descricao"),a=document.querySelector(".nova-tarefa .msg");if(e.setAttribute("disabled","disabled"),""==n.value||""==r.value)a.innerHTML='<span class="alert alert-error text-center">Ops! todos o campos precisa ser preenchidos</span>',setTimeout(()=>{a.innerHTML="",e.removeAttribute("disabled")},6e3);else{let t=new Headers;t.append("Content-Type","application/json");let i={method:"POST",headers:t,body:JSON.stringify({titulo:n.value,descricao:r.value,status:"pendente"})};fetch(o.apiURL(!1),i).then(t=>{if(t.ok)return t.json().then(t=>{o.listaTarefas(),a.innerHTML='<span class="alert alert-success text-center">Tarefa inserida com sucesso.</span>',e.removeAttribute("disabled"),n.value="",r.value="",setTimeout(()=>{a.innerHTML="",document.querySelector("body").classList.remove("show-add")},1e3)})})}})},updateStatusTarefa:()=>{let e=document.querySelectorAll(".listagem .status");for(let t of e)t.addEventListener("change",e=>{let n=t.parentElement.parentElement.parentElement,r=n.getAttribute("data-status"),a=n.getAttribute("data-id");e.target.checked?n.setAttribute("data-status","1"):n.setAttribute("data-status","0");let i=new Headers;i.append("Content-Type","application/json");let s={method:"PUT",headers:i,body:JSON.stringify({status:"0"==r?"concluído":"pendente"})};fetch(o.apiURL(a),s)})},deleteTarefa:()=>{let e=document.querySelectorAll(".listagem .remove");for(let t of e)t.addEventListener("click",e=>{let n=t.parentElement.parentElement.parentElement,r=n.getAttribute("data-id");n.classList=n.classList+" remove-item";let a=new Headers;a.append("Content-Type","application/json");let i={method:"DELETE",headers:a,body:JSON.stringify({id:r})};fetch(o.apiURL(r),i).then(e=>{if(e.ok)return e.json().then(e=>{n.remove()})})})},filterListConcluidos:()=>{document.querySelector(".complete-tarefa").addEventListener("click",e=>{e.preventDefault();let t=document.querySelector(".listagem"),n=document.querySelectorAll('.listagem .col:not([data-status="1"]'),o=document.querySelectorAll(".listagem .col");t.classList=t.classList+" hide-session",setTimeout(()=>{t.classList.remove("hide-session"),o.forEach(e=>{e.classList.remove("hide")}),n.forEach(e=>{e.className=e.classList+" hide"})},800)})},filterListPendentes:()=>{document.querySelector(".active-tarefa").addEventListener("click",e=>{e.preventDefault();let t=document.querySelector(".listagem"),n=document.querySelectorAll('.listagem .col:not([data-status="0"]'),o=document.querySelectorAll(".listagem .col");t.classList=t.classList+" hide-session",setTimeout(()=>{t.classList.remove("hide-session"),o.forEach(e=>{e.classList.remove("hide")}),n.forEach(e=>{e.className=e.classList+" hide"})},800)})},filterListAll:()=>{document.querySelector(".all-tarefa").addEventListener("click",e=>{e.preventDefault();let t=document.querySelector(".listagem"),n=document.querySelectorAll(".listagem .col");t.classList=t.classList+" hide-session",setTimeout(()=>{t.classList.remove("hide-session"),n.forEach(e=>{e.classList.remove("hide")})},800)})}};o.init()},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"* { padding: 0; margin: 0; }\n\n*::before, *::after {\n    margin: 0;\n    padding: 0;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    outline: medium none !important;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n}\n\nbody{    \n    font-family: 'Open Sans', sans-serif;\n    overflow: hidden;\n    background-color: #eee;\n    color: #999;\n    font-size: 14px;\n} \n\nul { list-style: none; }\n\nbutton, label, .subtitle,\na, a:hover, a:focus, a:active, a:visited, a:focus:active, a:active:focus { \n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    outline: none; \n    text-decoration: none; \n    border: 0; \n    background-color: transparent;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\n.text-left { text-align: left; display: block; }\n.text-center { text-align: center; display: block; }\n.text-right { text-align: right; display: block; }\n\n.title { margin: 40px 0 20px; text-indent: 15px; font-weight: 300; font-size: 35px;  position: relative; }\n.title span { display: table; padding: 0 20px; background-color: #eee; margin: auto; position: relative; z-index: 1; }\n.title:before { \n    width: calc(100% - 30px); \n    height: 1px; \n    content: \"\";\n    background-color: #d7b61d; \n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.subtitle { font-weight: 400; font-size: 16px; }\n\n.container { width: 100%; max-width: 1400px; margin: auto; padding: 0 15px; }\n\n.row { \n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n.col {\n    padding: 15px;\n    flex-basis: 0;\n    flex-grow: 1;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n    transition: all .6s ease-in-out;\n}\n\n.hide { display: none; }\n.hide-session { transform: translateY(10%); opacity: 0; }\n.remove-item .content { position: relative; }\n.remove-item .content .header,\n.remove-item .content .desc { filter: blur(1px); }\n.remove-item .content:before {\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    display: block;\n    font-size: 14px;\n    line-height: 40px;\n    color: #d7b61d;\n    content: \"Aguarde...\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: rgba(255, 255, 255, 0.85);\n    z-index: 5;\n}\n\n.session { \n    width: calc(100% - 80px);\n    height: calc(100% - 99px);\n    position: absolute; \n    top: 0;\n    transition: all .4s ease;    \n}\n\n.header-in { height: 100px; }\n\n.form-group { margin-bottom: 10px; }\n.form-group label { color: #333; text-indent: 15px; display: block; margin-bottom: 3px; }\n.form-group .form-field { \n    width: 100%;\n    padding: 5px 15px; \n    font-size: 14px;\n    font-family: 'Open Sans', sans-serif; \n    font-weight: 300; \n    background-color: #eee;\n    border-radius: 5px;\n    border: 1.5px solid #666;\n}\n.form-group textarea.form-field { max-width: 100vw; }\n.button {\n    width: 100%;\n    height: 40px;\n    padding: 5px 15px;\n    background-color: #333;\n    color: #fff;\n    font-size: 14px;\n    font-family: 'Open Sans', sans-serif; \n    font-weight: 700; \n    border-radius: 5px;\n    border: 1.5px solid #333;\n    text-transform: uppercase;\n    transition: all .6s ease-in-out;\n}\n.button:hover { background-color: #d7b61d; border-color: #d7b61d; color: #333; font-size: 18px; }\n\n.form[disabled='disabled'] *[type='submit'],\n.form[disabled='disabled'] *[type='submit']:hover { background-color: #666; border-color: #666; color: #ddd; font-size: 14px; }\n\n.alert-error { color: #d7b61d; font-size: 300; }\n.alert-success { color: #4caf50; font-size: 300; }\n\n.listagem { top: 99px; }\n.listagem .col .content { width: 100%; height: 100%; border-radius: 5px; overflow: hidden; transition: all 0.4s ease-in-out; }\n.listagem .col .content header { height: 40px; display: flex; justify-content: space-between; align-items: center; background-color: #fefefe; padding: 0 5px; }\n.listagem .col .content header .subtitle { width: 100%; height: 100%; line-height: 40px; text-align: center; margin: 0; }\n.listagem .col .content header .remove { width: 20px; flex: 0 0 20px; transition: all .4s ease-in-out; }\n.listagem .col .content header .remove:hover { color: #d7b61d; font-size: 16px; }\n.listagem .col .content .desc { \n    padding: 15px;\n    width: 100%;\n    height: 100%; \n    max-height: 150px; \n    overflow-y: auto; \n    color: #333;\n    background-color: #dad9d9; \n    display: none;\n}\n.listagem .col .content .desc span { display: block; }\n.listagem .col.show { flex-grow: 0; }\n.listagem .col.show .content .desc { display: block; }\n.listagem .col.show .content header .subtitle { font-weight: 700; }\n.listagem .col[data-status=\"1\"] .content { opacity: 0.6; }\n.listagem .col[data-status=\"1\"] .content header .subtitle,\n.listagem .col[data-status=\"1\"] .content .desc span { text-decoration: line-through; }\n\n.menu {\n    width: 80px;\n    height: 100%;\n    background-color: #333;\n    position: fixed;\n    top: 0;\n    right: 0;\n    z-index: 20;\n}\n.menu .menu-in {\n    width: 100%;\n    height: 100%;\n    padding: 20px 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.menu .menu-in a { font-size: 40px; color: #d7b61d; display: flex; justify-content: center; margin-bottom: 20px; transition: all .4s ease-in-out; }\n.menu .menu-in a i { display: table; margin: auto auto 5px; }\n.menu .menu-in a span { display: block; font-size: 11px; color: #ddd; text-align: center; }\n.menu .menu-in .separetor { display: flex; justify-content: center; margin-bottom: 25px; transition: all .4s ease-in-out; }\n.menu .menu-in .add-tarefa { margin-bottom: 20px; }\n.menu .menu-in a:hover { color: #ccb962; }\n.show-add .menu .menu-in .add-tarefa { color: #cac3a5; }\n\n.nova-tarefa { \n    max-width: 300px; \n    height: 100%;\n    right: 80px; \n    transform: translateX(100%); \n    padding: 30px 0;\n    background-color: rgba(0, 0, 0, 0.5); \n    color: #eee;\n    visibility: hidden;\n    z-index: 10;\n}\n.nova-tarefa .subtitle { margin-bottom: 20px;font-weight: 700; }\n.nova-tarefa label { color: #eee; }\n.nova-tarefa .form-group textarea.form-field { min-width: 200px; max-width: calc(300px - 30px); min-height: 150px; max-height: 300px; }\nbody.show-add .nova-tarefa { visibility: visible; transform: translateX(0); }\nbody.show-add .listagem,\nbody.show-add .header-in { transform: translateX(-20%); filter: blur(1px); }\nbody.show-add .listagem:before,\nbody.show-add .header-in:before { \n    width: 100%; \n    height: 100%; \n    content: \"\";\n    position: absolute; \n    top: 0; \n    left: 0; \n    z-index: 10; \n    background-color: rgba(250, 250, 250, 0.3); \n}\n\n@media screen and (max-width: 991px) {\n    .col { flex: 0 0 50%; max-width: 50%; }\n}\n\n@media screen and (max-width: 768px) {\n    .session { width: 100%; overflow-y: auto; }\n    .session .row { padding-bottom: 100px; }\n    .title span { font-size: 20px; padding: 0 5px; }\n    .col { flex: 0 0 100%; max-width: 100%; }\n    .menu { width: 100%; height: 60px; top: auto; bottom: 0; }\n    .menu .menu-in { display: flex; justify-content: space-between; padding: 0 15px; }\n    .menu .menu-in a { font-size: 25px; margin: 10px auto; }\n    .menu .menu-in .separetor { display: none; }\n    .nova-tarefa { right: 0; background-color: rgba(20, 20, 20, 0.8); }\n}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(a).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var o={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),i=null,s=0,l=[],c=n(5);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(b(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(b(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(e,t){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):n.push(o[i]={id:i,parts:[s]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return h(t,e.attrs),f(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,o,r,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var l=s++;n=i||(i=m(t)),o=v.bind(null,n,l,!1),r=v.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),f(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(o=c(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),r=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){p(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=u(e,t);return d(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a];(s=o[i.id]).refs--,r.push(s)}e&&d(u(e,t),t);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function v(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(r=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);