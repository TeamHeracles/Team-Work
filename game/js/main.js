/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

'use strict';

//polyfill for array find
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

var Game = {
  game_wrap : $('#game-wrap'),
  forest : 'easy', // Forest map, according to game level
  mouse : {
    id : 'green-mouse',
    coords : [440, 320],
    moves: 0
  },
  level : 'easy',
  targets : [],

  init : function () {
    Game.game_wrap.load('intro.html');
    // Game.game_wrap.load('game.html', function(){
    //   Game.Canvas.init();
    // });
    Game.Controls.bind();
  }

}

Game.Canvas = {
  forest : '',
  cheese : '',
  timer  : '',
  mouse  : '',
  step   : 40,
  targets : [],
  remaining : 0,
  collected : 0,
  stuck : 0,
  moves : 0,
  score : 0,

  init : function () {
    Game.Canvas.remaining = 0;
    Game.Canvas.collected = 0;
    Game.Canvas.stuck = 0;
    Game.Canvas.score = 0;
    Game.Canvas.moves = 0;

    // Page content should be loaded before canvas elements can be selected in DOM
    Game.Canvas.targets = [];
    Game.Canvas.forest = document.getElementById('forest');
    Game.Canvas.cheese = document.getElementById('cheese');
    Game.Canvas.timer = document.getElementById('timer');
    Game.Canvas.mouse = document.getElementById('mouse');

    var ctx_forest = Game.Canvas.forest.getContext('2d'),
        ctx_cheese = Game.Canvas.cheese.getContext('2d'),
        ctx_mouse = Game.Canvas.mouse.getContext('2d');

    Game.Draw.Mouse(ctx_mouse, Game.mouse.coords, "down");

    Game.Canvas.setForest( Game.level, ctx_forest, Game.Canvas.step );

    Game.Canvas.setCheese( Game.level, ctx_cheese, Game.Canvas.step );

    Game.Timer.init( Game.Canvas.timer );

    Game.Canvas.remaining = Game.Canvas.targets.length;

    $('#remaining').text(Game.Canvas.remaining);
    $('#collected').text(Game.Canvas.collected);
    $('#stuck').text(Game.Canvas.stuck);
    $('#moves').text(Game.Canvas.moves);
    $('#score').text(Game.Canvas.score);
  }


  ,setForest : function ( level, ctx, step ) {
    var map = Game.Map[level];
    for (var row = 0; row < map.length; row++) {
      for (var col = 0; col < map[row].length; col++) {
        var cell = map[row][col];
        if (cell == 'g') {
          Game.Draw.Grass( ctx, col, row, step );
        }
        else if (cell == 'bl') {
          // Draw Blue tree
          Game.Draw.BlueTree( ctx, col, row, step );
        }
        else if (cell == 'gr') {
          // Draw Green tree
          Game.Draw.GreenTree( ctx, col, row, step );
        }
        else if (cell == 'na') {
          // Draw Naked tree
          Game.Draw.NakedTree( ctx, col, row, step );
        }
        else if (cell == 'or') {
          // Draw Orange tree
          Game.Draw.OrangeTree( ctx, col, row, step );
        }
        else if (cell == 'p') {
          // Draw Target Point
          //saves target position for calculating score
          currentTargetPosition = { 'row': row, 'col': col };
          Game.Canvas.targets.push(currentTargetPosition);

          Game.Draw.Target(ctx, col, row, step);
        }
      }
    }

  }


  ,setCheese : function ( level, ctx,  step ) {
    var map = Game.Map[level];

    for (var row = 0; row < map.length; row++) {
      for (var col = 0; col < map[row].length; col++) {
        var cell = map[row][col];
        if (cell == '1') {
          Game.Draw.Cheese( ctx, col, row, step );
        }
      }
    }

  }
}

Game.Controls = {
  // Add all event listeners
  bind : function () {
    $(window).on('load', function(){
      Game.Timer.timerBreak = false;
    });

    Game.game_wrap.on('click', '.btn', function(){
      var btn = $(this),
          game_screen = $(btn).attr('data-nav');

      Game.game_wrap.removeClass('active');
      Game.game_wrap.html('');

      setTimeout(function () {
        Game.Screen.load( game_screen );
      }, 500);
    });

    Game.game_wrap.on('click', '.btn-level', function(){
      var btn = $(this),
          level = $(btn).attr('data-level');
      Game.level = level;
    });

    Game.game_wrap.on('click', '.mouse-btn', function() {
      var mouse = $(this),
          mouse_id = $(mouse).find('.mouse').attr('id');

      $(mouse).addClass('active')
              .siblings().removeClass('active');
      Game.mouse.id = mouse_id;
    });

    // Add event listeners for arrow buttons
    $(window).on('keydown', function( e ){
      var forest = $('#forest');
      if ( !forest || forest.length < 1 ) {
        return;
      }
      Game.Controls.keyDown( e );
    });
  }


  ,keyDown: function (e) {
    var ctx_mouse = Game.Canvas.mouse.getContext('2d'),
        ctx_cheese = Game.Canvas.cheese.getContext('2d'),
        width = Game.Canvas.forest.width,
        height = Game.Canvas.forest.height,
        x = Game.mouse.coords[0],
        y = Game.mouse.coords[1],
        dx = Game.Canvas.step,
        dy = Game.Canvas.step,
        map = Game.Map[Game.level],
        keyCodeToDirs = {
                          "37": 2,
                          "38": 3,
                          "39": 0,
                          "40": 1
                        },
        dirsToMouseRotation = {
                          0: "right",
                          1: "down",
                          2: "left",
                          3: "up"
                        },
        notAllowedPositions = ["g", "x", "bl", "na", "or", "gr",1];
    const dirDeltas = [{
                        "x": +Game.Canvas.step,
                        "y": 0
                      }, {
                        "x": 0,
                        "y": Game.Canvas.step
                      }, {
                        "x": -Game.Canvas.step,
                        "y": 0
                      }, {
                        "x": 0,
                        "y": -Game.Canvas.step
                      }];

    if (!keyCodeToDirs.hasOwnProperty(e.keyCode)) {
      console.log("Wrong dir");
      return;
    }

    var dir = keyCodeToDirs[e.keyCode];
    var mouseNextX = x + dirDeltas[dir].x;
    var mouseNextY = y + dirDeltas[dir].y;

    if (mouseNextY < 0 || mouseNextY >= height || mouseNextX < 0 || mouseNextX >= width) return;

    var mapNextPosition = map[mouseNextY / Game.Canvas.step][mouseNextX / Game.Canvas.step];

    if ((notAllowedPositions.indexOf(mapNextPosition) == -1 ||
        (mapNextPosition == 1 &&
        (map[(mouseNextY + dirDeltas[dir].y) / Game.Canvas.step][(mouseNextX + dirDeltas[dir].x) / Game.Canvas.step]) == 0 ||
        map[(mouseNextY + dirDeltas[dir].y) / Game.Canvas.step][(mouseNextX + dirDeltas[dir].x) / Game.Canvas.step] == 'p'))) {

      //updates the position of the mouse
      ctx_mouse.clearRect(Game.mouse.coords[0], Game.mouse.coords[1], dx, dy);
      Game.mouse.coords[0] = mouseNextX;
      Game.mouse.coords[1] = mouseNextY;
      Game.Draw.Mouse(ctx_mouse, [Game.mouse.coords[0], Game.mouse.coords[1]], dirsToMouseRotation[dir]);

      //updates position of the cheese
      if (map[mouseNextY / Game.Canvas.step][mouseNextX / Game.Canvas.step] == 1) {
        //gives points when cheese is on target
        console.log("I'm here!!!!");

        function findTargetOfNextNext(target){
          return target.row == (mouseNextY + dirDeltas[dir].y) / Game.Canvas.step && target.col == (mouseNextX + dirDeltas[dir].x) / Game.Canvas.step
        }

        function findTagetOfNext(target){
          return target.row == mouseNextY / Game.Canvas.step &&
                 target.col == mouseNextX / Game.Canvas.step;
        }

        var indexOfTargetNextNext = Game.Canvas.targets.find(findTargetOfNextNext);
        var indexOfTargetNext = Game.Canvas.targets.find(findTagetOfNext)

        //adds score if cheese is on a target for the first time
        if (indexOfTargetNextNext != undefined && indexOfTargetNext == undefined){
          Game.Canvas.score += 10;
          Game.Canvas.remaining -= 1;
          Game.Canvas.collected += 1;

          $("#score").text(Game.Canvas.score);
          $("#remaining").text(Game.Canvas.remaining);
          $("#collected").text(Game.Canvas.collected);
        }

        if (indexOfTargetNextNext == undefined && indexOfTargetNext != undefined) {
          //removes scores if cheese leaves target
          Game.Canvas.score -= 10;
          Game.Canvas.remaining += 1;
          Game.Canvas.collected -= 1;

          $("#score").text(Game.Canvas.score);
          $("#remaining").text(Game.Canvas.remaining);
          $("#collected").text(Game.Canvas.collected);
        }

        //update cheese new location on map
        map[mouseNextY / Game.Canvas.step][mouseNextX / Game.Canvas.step] = 0;
        map[(mouseNextY + dirDeltas[dir].y) / Game.Canvas.step][(mouseNextX + dirDeltas[dir].x) / Game.Canvas.step] = 1;
        ctx_cheese.clearRect(Game.mouse.coords[0], Game.mouse.coords[1], dx, dy);
        Game.Canvas.setCheese(Game.level, ctx_cheese, Game.Canvas.step);
        //checks if it is on point and gives point to score
      }

      //counts the move
      Game.mouse.moves += 1;
      $('#moves').text(Game.mouse.moves);

      if (Game.Canvas.remaining == 0) {
        Game.Timer.timerBreak = false;
        alert('You made it!');
      }
    }

  }


}

Game.Draw = {

  Target : function ( ctx, x, y, size ) {
    // targets code
    ctx.save();
    ctx.translate(x*size,y*size);

    ctx.fillStyle = '#f69391';
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(40,0);
    ctx.lineTo(40,40);
    ctx.lineTo(0,40);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(0,0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.arc(20,20,5,0,6.283185307179586,true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  }

  ,Grass : function ( ctx, x, y, size ) {
    // grass code
    ctx.fillStyle = '#bab5a8';
    ctx.save();
    ctx.translate(x*size,y*size);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(size,0);
    ctx.lineTo(size,size);
    ctx.lineTo(0,size);
    ctx.closePath();

    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(0,0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(20.796,34.965);
    ctx.bezierCurveTo(8.944,35.212,-3.677,25.396,0.998,21.422);
    ctx.bezierCurveTo(3.814,19.029,7.402,28.874000000000002,10.581,27.966);
    ctx.bezierCurveTo(12.216,27.499,1.231,6.23,7.075,5.063);
    ctx.bezierCurveTo(11.524000000000001,4.173,10.502,22.168,12.917,23.291999999999998);
    ctx.bezierCurveTo(18.712,25.56,12.155,11.140999999999998,14.786999999999999,9.034999999999998);
    ctx.bezierCurveTo(18.293,6.229999999999999,18.230999999999998,15.411999999999999,18.244999999999997,17.564999999999998);
    ctx.bezierCurveTo(18.206999999999997,19.493,16.551999999999996,25.866999999999997,19.319,26.430999999999997);
    ctx.bezierCurveTo(23.101,27.241999999999997,22.108999999999998,22.912999999999997,21.866,20.810999999999996);
    ctx.bezierCurveTo(21.501,19.215999999999998,18.567,12.696999999999996,22.421,12.771999999999997);
    ctx.bezierCurveTo(25.311999999999998,12.827999999999996,24.293,25.737999999999996,26.101,24.635999999999996);
    ctx.bezierCurveTo(28.625,23.097999999999995,26.939999999999998,13.653999999999996,28.401,8.522999999999996);
    ctx.bezierCurveTo(29.179,5.788999999999996,32.117,6.951999999999996,32.306,8.825999999999997);
    ctx.bezierCurveTo(32.354,12.172999999999996,28.689999999999998,17.342,30.503999999999998,19.79);
    ctx.bezierCurveTo(32.934999999999995,23.069,33.373999999999995,12.082999999999998,37.851,15.227);
    ctx.bezierCurveTo(40.423,17.036,30.305999999999997,24.152,30.985,27.113);
    ctx.bezierCurveTo(31.718,30.31,34.563,23.894,37.245,23.04);
    ctx.bezierCurveTo(39.516,22.316,41.516,26.021,38.391999999999996,29.134999999999998);
    ctx.bezierCurveTo(34.639,32.633,26.804,34.84,20.796,34.965);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }

  ,BlueTree : function ( ctx, x, y, size ) {
    var stem = '#b89e6c',
        leaves = '#29abe2',
        head = '#008288';

    // Blue Tree code
    ctx.save();
    ctx.translate(x*size,y*size);

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(80,0);
    ctx.lineTo(80,80);
    ctx.lineTo(0,80);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(0,0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();
    ctx.save();

    ctx.fillStyle = head;
    ctx.beginPath();
    ctx.moveTo(30.864,54.698);
    ctx.bezierCurveTo(37.594,54.677,44.324,54.654,51.055,54.633);
    ctx.bezierCurveTo(55.971000000000004,54.617000000000004,61.414,54.401,64.959,50.992000000000004);
    ctx.bezierCurveTo(68.302,47.777,68.898,42.718,69.152,38.087);
    ctx.bezierCurveTo(69.556,30.712000000000003,69.59,23.316000000000003,69.253,15.937000000000005);
    ctx.bezierCurveTo(69.037,11.220000000000006,68.438,6.0080000000000044,64.912,2.8650000000000055);
    ctx.bezierCurveTo(60.682,-0.9079999999999946,54.27100000000001,-0.2539999999999947,49.162000000000006,0.8960000000000055);
    ctx.bezierCurveTo(49.25300000000001,0.9060000000000055,49.343,0.9160000000000055,49.43300000000001,0.9260000000000055);
    ctx.bezierCurveTo(46.90800000000001,1.6080000000000054,44.37800000000001,1.7370000000000054,41.781000000000006,1.6950000000000056);
    ctx.bezierCurveTo(38.74900000000001,1.6470000000000056,35.72500000000001,1.3840000000000057,32.694,1.3620000000000057);
    ctx.bezierCurveTo(26.875000000000004,1.3190000000000057,20.513000000000005,2.459000000000006,16.715000000000003,6.867000000000005);
    ctx.bezierCurveTo(13.662000000000003,10.409000000000006,12.889000000000003,15.346000000000004,12.637000000000004,20.015000000000004);
    ctx.bezierCurveTo(12.263000000000003,26.949000000000005,12.768000000000004,33.93000000000001,14.136000000000005,40.738);
    ctx.bezierCurveTo(15.079000000000004,45.433,16.760000000000005,50.492,20.883000000000003,52.929);
    ctx.bezierCurveTo(23.829,54.672,27.441,54.71,30.864,54.698);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = stem;
    ctx.beginPath();
    ctx.moveTo(58.65,14.859);
    ctx.bezierCurveTo(57.064,16.237,56.068,18.626,55.101,20.464);
    ctx.bezierCurveTo(54.124,22.317999999999998,53.22,24.209999999999997,52.385999999999996,26.131999999999998);
    ctx.bezierCurveTo(50.629999999999995,30.174999999999997,49.144,34.321999999999996,47.995,38.58);
    ctx.bezierCurveTo(47.263,41.303,46.647,44.074,46.172999999999995,46.869);
    ctx.bezierCurveTo(46.07999999999999,45.915,45.977999999999994,44.962,45.85099999999999,44.009);
    ctx.bezierCurveTo(45.47999999999999,41.217,44.995999999999995,38.461,44.29899999999999,35.731);
    ctx.bezierCurveTo(44.02799999999999,34.665,43.151999999999994,29.575000000000003,41.044999999999995,31.271);
    ctx.bezierCurveTo(40.144999999999996,31.997,40.46699999999999,33.047000000000004,40.605,34.051);
    ctx.bezierCurveTo(40.775,35.301,40.991,36.543,41.144,37.796);
    ctx.bezierCurveTo(41.455,40.314,41.748999999999995,42.832,41.914,45.364);
    ctx.bezierCurveTo(42.077,47.9,42.174,50.449,42.168,52.991);
    ctx.bezierCurveTo(42.167,53.345,42.153999999999996,53.703,42.141,54.062);
    ctx.bezierCurveTo(42.07,54.066,42,54.07,41.93,54.077);
    ctx.bezierCurveTo(41.928,54.065999999999995,41.926,54.056,41.923,54.045);
    ctx.bezierCurveTo(41.07,50.352000000000004,39.602000000000004,46.803000000000004,37.795,43.479);
    ctx.bezierCurveTo(37.581,43.083999999999996,36.904,43.352,37.059000000000005,43.791);
    ctx.bezierCurveTo(38.277,47.229,39.135000000000005,50.751,39.788000000000004,54.337999999999994);
    ctx.bezierCurveTo(39.648,54.358999999999995,39.508,54.38099999999999,39.36600000000001,54.407999999999994);
    ctx.bezierCurveTo(39.357000000000006,54.41,39.35000000000001,54.413,39.34100000000001,54.41499999999999);
    ctx.bezierCurveTo(38.86900000000001,53.16899999999999,38.348000000000006,51.93999999999999,37.76800000000001,50.74399999999999);
    ctx.bezierCurveTo(36.58500000000001,48.300999999999995,35.10200000000001,45.28399999999999,32.88700000000001,43.623999999999995);
    ctx.bezierCurveTo(31.928000000000008,42.904999999999994,30.948000000000008,44.089999999999996,31.092000000000006,45.004);
    ctx.bezierCurveTo(31.290000000000006,46.265,31.981000000000005,47.485,32.42600000000001,48.683);
    ctx.bezierCurveTo(32.89000000000001,49.924,33.41000000000001,51.146,33.86200000000001,52.392);
    ctx.bezierCurveTo(34.772000000000006,54.906000000000006,35.59600000000001,57.452000000000005,36.21500000000001,60.05200000000001);
    ctx.bezierCurveTo(36.82300000000001,62.61300000000001,37.32900000000001,65.191,37.58200000000001,67.81200000000001);
    ctx.bezierCurveTo(37.84100000000001,70.49200000000002,37.650000000000006,73.16400000000002,37.821000000000005,75.83300000000001);
    ctx.bezierCurveTo(37.837,76.07600000000001,37.883,76.31200000000001,37.955000000000005,76.53500000000001);
    ctx.bezierCurveTo(37.7,77.59800000000001,38.288000000000004,78.78800000000001,39.49,79.236);
    ctx.bezierCurveTo(42.077000000000005,80.20700000000001,45.048,80.316,47.615,79.23400000000001);
    ctx.bezierCurveTo(48.050000000000004,79.049,48.427,78.77900000000001,48.695,78.441);
    ctx.bezierCurveTo(49.013,78.491,49.357,78.343,49.429,77.974);
    ctx.bezierCurveTo(50.172000000000004,74.08,49.547000000000004,69.982,49.497,66.041);
    ctx.bezierCurveTo(49.442,61.849,49.636,57.649,50.115,53.483);
    ctx.bezierCurveTo(51.053000000000004,45.361999999999995,53.011,37.379,56.163000000000004,29.825999999999997);
    ctx.bezierCurveTo(57.042,27.72,58.022000000000006,25.654999999999998,59.081,23.631999999999998);
    ctx.bezierCurveTo(60.176,21.537,61.903000000000006,19.398999999999997,62.511,17.108999999999998);
    ctx.bezierCurveTo(63.127,14.776,60.346,13.389,58.65,14.859);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(37.335,9.938);
    ctx.bezierCurveTo(37.405,10.104000000000001,37.475,10.269,37.545,10.435);
    ctx.bezierCurveTo(37.675000000000004,10.677,37.854,10.872,38.081,11.019);
    ctx.bezierCurveTo(38.21,11.148,38.364000000000004,11.237,38.540000000000006,11.286);
    ctx.bezierCurveTo(38.788000000000004,11.417,39.05500000000001,11.475999999999999,39.342000000000006,11.466);
    ctx.bezierCurveTo(39.711000000000006,11.449,40.065000000000005,11.354,40.392,11.181999999999999);
    ctx.bezierCurveTo(40.635000000000005,11.050999999999998,40.829,10.871999999999998,40.976000000000006,10.645999999999999);
    ctx.bezierCurveTo(41.160000000000004,10.444999999999999,41.285000000000004,10.209,41.349000000000004,9.937999999999999);
    ctx.bezierCurveTo(41.36600000000001,9.815,41.38,9.693,41.400000000000006,9.569999999999999);
    ctx.bezierCurveTo(41.502,9.191999999999998,41.502,8.812999999999999,41.400000000000006,8.434999999999999);
    ctx.bezierCurveTo(41.29600000000001,8.072999999999999,41.11600000000001,7.758999999999999,40.851000000000006,7.4929999999999986);
    ctx.bezierCurveTo(40.434000000000005,7.108999999999998,39.918000000000006,6.8679999999999986,39.34,6.8679999999999986);
    ctx.bezierCurveTo(38.793000000000006,6.8679999999999986,38.217000000000006,7.105999999999998,37.830000000000005,7.4929999999999986);
    ctx.bezierCurveTo(37.566,7.758999999999999,37.382000000000005,8.072999999999999,37.281000000000006,8.434999999999999);
    ctx.bezierCurveTo(37.17900000000001,8.812999999999999,37.17900000000001,9.191999999999998,37.281000000000006,9.569999999999999);
    ctx.bezierCurveTo(37.301,9.693,37.318,9.816,37.335,9.938);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(35.433,17.024);
    ctx.bezierCurveTo(35.413,16.582,35.142,16.221,34.717999999999996,16.086000000000002);
    ctx.bezierCurveTo(34.70099999999999,16.081000000000003,34.684999999999995,16.075000000000003,34.668,16.070000000000004);
    ctx.bezierCurveTo(34.283,15.946000000000003,33.731,16.145000000000003,33.55,16.525000000000002);
    ctx.bezierCurveTo(33.488,16.654000000000003,33.428,16.776000000000003,33.407999999999994,16.92);
    ctx.bezierCurveTo(33.382999999999996,17.106,33.42099999999999,17.255000000000003,33.501999999999995,17.425);
    ctx.bezierCurveTo(33.517999999999994,17.458000000000002,33.53399999999999,17.491,33.54899999999999,17.525000000000002);
    ctx.bezierCurveTo(33.638999999999996,17.713,33.83899999999999,17.853,34.02199999999999,17.930000000000003);
    ctx.bezierCurveTo(34.218999999999994,18.013,34.45799999999999,18.047000000000004,34.666999999999994,17.980000000000004);
    ctx.bezierCurveTo(34.684999999999995,17.972000000000005,34.70099999999999,17.967000000000002,34.717999999999996,17.962000000000003);
    ctx.bezierCurveTo(35.112,17.836,35.452,17.46,35.433,17.024);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(42.016,24.123);
    ctx.bezierCurveTo(41.69,24.156000000000002,41.379999999999995,24.183,41.088,24.356);
    ctx.bezierCurveTo(40.783,24.538,40.604,24.810000000000002,40.44,25.109);
    ctx.bezierCurveTo(40.288999999999994,25.385,40.233999999999995,25.679000000000002,40.275999999999996,25.991000000000003);
    ctx.bezierCurveTo(40.315,26.281000000000002,40.434,26.581000000000003,40.656,26.785000000000004);
    ctx.bezierCurveTo(41.119,27.210000000000004,41.772999999999996,27.306000000000004,42.332,27.001000000000005);
    ctx.bezierCurveTo(42.629,26.838000000000005,42.912,26.665000000000006,43.085,26.352000000000004);
    ctx.bezierCurveTo(43.223,26.102000000000004,43.272,25.862000000000005,43.303000000000004,25.578000000000003);
    ctx.bezierCurveTo(43.309000000000005,25.527000000000005,43.315000000000005,25.476000000000003,43.319,25.425000000000004);
    ctx.bezierCurveTo(43.35,25.126000000000005,43.155,24.703000000000003,42.938,24.504000000000005);
    ctx.bezierCurveTo(42.697,24.285,42.354,24.088,42.016,24.123);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(31.845,19.478);
    ctx.bezierCurveTo(31.479,18.863000000000003,30.919,18.634,30.369,18.665000000000003);
    ctx.bezierCurveTo(29.818,18.633000000000003,29.256,18.861000000000004,28.889,19.478);
    ctx.bezierCurveTo(28.871,19.507,28.854,19.537000000000003,28.837,19.566000000000003);
    ctx.bezierCurveTo(28.148,20.725,29.032,22.233000000000004,30.367,22.233000000000004);
    ctx.bezierCurveTo(31.702,22.233000000000004,32.586,20.725000000000005,31.897000000000002,19.566000000000003);
    ctx.bezierCurveTo(31.88,19.537,31.863,19.507,31.845,19.478);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(31.131,10.113);
    ctx.bezierCurveTo(30.828,10.113,30.51,10.245,30.296,10.459);
    ctx.bezierCurveTo(30.09,10.664,29.937,11,29.95,11.295);
    ctx.bezierCurveTo(29.977999999999998,11.935,30.468999999999998,12.475999999999999,31.131,12.475999999999999);
    ctx.bezierCurveTo(31.434,12.475999999999999,31.752,12.344,31.966,12.129999999999999);
    ctx.bezierCurveTo(32.171,11.924999999999999,32.325,11.588999999999999,32.312,11.294999999999998);
    ctx.bezierCurveTo(32.284,10.654,31.793,10.113,31.131,10.113);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(21.135,28.857);
    ctx.bezierCurveTo(20.573,28.857,19.983,29.102,19.585,29.499);
    ctx.bezierCurveTo(19.371000000000002,29.697,19.220000000000002,29.933,19.132,30.203999999999997);
    ctx.bezierCurveTo(18.994,30.464999999999996,18.932000000000002,30.746999999999996,18.943,31.048999999999996);
    ctx.bezierCurveTo(18.968,31.615999999999996,19.155,32.202999999999996,19.585,32.598);
    ctx.bezierCurveTo(20.014,32.992,20.541,33.24,21.135,33.24);
    ctx.bezierCurveTo(21.697000000000003,33.24,22.287000000000003,32.995000000000005,22.685000000000002,32.598);
    ctx.bezierCurveTo(22.898000000000003,32.4,23.049000000000003,32.164,23.138,31.893);
    ctx.bezierCurveTo(23.275000000000002,31.632,23.338,31.351,23.326,31.049);
    ctx.bezierCurveTo(23.301000000000002,30.482,23.115000000000002,29.894,22.684,29.499);
    ctx.bezierCurveTo(22.255,29.106,21.729,28.857,21.135,28.857);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(30.868,31.863);
    ctx.bezierCurveTo(30.229999999999997,31.778,29.642,32.272999999999996,29.642,32.926);
    ctx.bezierCurveTo(29.642,33.529,30.137999999999998,33.982,30.724,34.008);
    ctx.bezierCurveTo(31.439,34.04,31.932,33.292,31.767,32.638000000000005);
    ctx.bezierCurveTo(31.659,32.208,31.293,31.92,30.868,31.863);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(24.639,9.157);
    ctx.bezierCurveTo(25.032999999999998,9.157,25.448,8.986,25.726,8.706);
    ctx.bezierCurveTo(25.993,8.439,26.194,8.001999999999999,26.176,7.619);
    ctx.bezierCurveTo(26.157999999999998,7.221,26.028,6.808,25.726,6.532);
    ctx.bezierCurveTo(25.425,6.256,25.055,6.081,24.639,6.081);
    ctx.bezierCurveTo(24.244,6.081,23.83,6.253,23.552,6.532);
    ctx.bezierCurveTo(23.285,6.799,23.084,7.237,23.101,7.619);
    ctx.bezierCurveTo(23.119,8.016,23.249,8.43,23.552,8.706);
    ctx.bezierCurveTo(23.852,8.982,24.222,9.157,24.639,9.157);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(35.062,7.513);
    ctx.bezierCurveTo(35.53,7.642,36.061,7.51,36.4,7.16);
    ctx.bezierCurveTo(36.412,7.148000000000001,36.423,7.136,36.434999999999995,7.123);
    ctx.bezierCurveTo(36.818,6.728,36.92999999999999,6.1450000000000005,36.715999999999994,5.639);
    ctx.bezierCurveTo(36.62199999999999,5.416,36.489,5.244,36.297999999999995,5.096);
    ctx.bezierCurveTo(36.083999999999996,4.93,35.754999999999995,4.768,35.474999999999994,4.804);
    ctx.bezierCurveTo(35.458999999999996,4.806,35.443,4.808,35.428,4.8100000000000005);
    ctx.bezierCurveTo(35.178999999999995,4.811000000000001,34.948,4.873,34.733,4.998);
    ctx.bezierCurveTo(34.525999999999996,5.12,34.361999999999995,5.285,34.239999999999995,5.492);
    ctx.bezierCurveTo(34.016,5.874,34.001,6.316,34.17099999999999,6.716);
    ctx.bezierCurveTo(34.335,7.106,34.646,7.399,35.062,7.513);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(41.161,21.239);
    ctx.bezierCurveTo(41.303000000000004,20.726,41.154,20.165,40.777,19.789);
    ctx.bezierCurveTo(40.402,19.413,39.839,19.265,39.328,19.406000000000002);
    ctx.bezierCurveTo(38.828,19.544000000000004,38.423,19.946,38.287000000000006,20.447000000000003);
    ctx.bezierCurveTo(38.266000000000005,20.523000000000003,38.24600000000001,20.598000000000003,38.22500000000001,20.674000000000003);
    ctx.bezierCurveTo(37.95400000000001,21.674000000000003,38.89300000000001,22.613000000000003,39.89300000000001,22.342000000000002);
    ctx.bezierCurveTo(39.96900000000001,22.321,40.04400000000001,22.3,40.120000000000005,22.28);
    ctx.bezierCurveTo(40.621,22.144,41.023,21.738,41.161,21.239);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(47.948,15.651);
    ctx.bezierCurveTo(47.714,15.251,47.396,14.933,46.996,14.697);
    ctx.bezierCurveTo(46.777,14.569999999999999,46.547000000000004,14.481,46.308,14.421);
    ctx.bezierCurveTo(46.314,14.392,46.32,14.363,46.327,14.334999999999999);
    ctx.bezierCurveTo(46.416,13.921,46.342999999999996,13.459,46.015,13.158999999999999);
    ctx.bezierCurveTo(45.779,12.941999999999998,45.488,12.805,45.161,12.805);
    ctx.bezierCurveTo(44.851,12.805,44.525,12.939,44.307,13.158999999999999);
    ctx.bezierCurveTo(43.989000000000004,13.476999999999999,43.905,13.905999999999999,43.996,14.334999999999999);
    ctx.bezierCurveTo(44.010000000000005,14.395,44.021,14.454999999999998,44.035000000000004,14.514999999999999);
    ctx.bezierCurveTo(44.051,14.586999999999998,44.094,14.649999999999999,44.129000000000005,14.716);
    ctx.bezierCurveTo(43.736000000000004,14.959999999999999,43.400000000000006,15.298,43.178000000000004,15.677);
    ctx.bezierCurveTo(42.68600000000001,16.519,42.68600000000001,17.589,43.178000000000004,18.431);
    ctx.bezierCurveTo(43.664,19.26,44.574000000000005,19.782,45.533,19.782);
    ctx.bezierCurveTo(46.525,19.782,47.363,19.25,47.888,18.431);
    ctx.bezierCurveTo(47.908,18.399,47.927,18.368000000000002,47.948,18.334);
    ctx.bezierCurveTo(48.455,17.542,48.414,16.445,47.948,15.651);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(24.742,23.801);
    ctx.bezierCurveTo(24.831,23.729,24.929000000000002,23.665,25.01,23.584);
    ctx.bezierCurveTo(25.352,23.265,25.593,22.89,25.735000000000003,22.454);
    ctx.bezierCurveTo(25.956000000000003,22.036,26.055000000000003,21.585,26.036,21.102);
    ctx.bezierCurveTo(25.996000000000002,20.195,25.698,19.253,25.01,18.621000000000002);
    ctx.bezierCurveTo(24.324,17.992,23.479000000000003,17.595000000000002,22.528000000000002,17.595000000000002);
    ctx.bezierCurveTo(21.629,17.595000000000002,20.684,17.986000000000004,20.048000000000002,18.621000000000002);
    ctx.bezierCurveTo(19.706000000000003,18.94,19.464000000000002,19.315,19.321,19.751);
    ctx.bezierCurveTo(19.102,20.169,19.003,20.62,19.019000000000002,21.102);
    ctx.bezierCurveTo(19.060000000000002,22.009,19.358,22.952,20.046000000000003,23.583);
    ctx.bezierCurveTo(20.647000000000002,24.131999999999998,21.372000000000003,24.488,22.178000000000004,24.573999999999998);
    ctx.bezierCurveTo(22.090000000000003,24.720999999999997,22.018000000000004,24.883999999999997,21.970000000000006,25.060999999999996);
    ctx.bezierCurveTo(21.934000000000005,25.189999999999998,21.901000000000007,25.316999999999997,21.865000000000006,25.444999999999997);
    ctx.bezierCurveTo(21.511000000000006,26.750999999999998,22.739000000000004,27.979999999999997,24.045000000000005,27.623999999999995);
    ctx.bezierCurveTo(24.173000000000005,27.590999999999994,24.300000000000004,27.554999999999996,24.429000000000006,27.520999999999994);
    ctx.bezierCurveTo(25.884000000000007,27.126999999999995,26.373000000000005,25.240999999999993,25.312000000000005,24.179999999999993);
    ctx.bezierCurveTo(25.141,24.011,24.945,23.894,24.742,23.801);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(18.747,23.578);
    ctx.bezierCurveTo(18.302,23.578,17.833,23.772,17.518,24.087);
    ctx.bezierCurveTo(17.216,24.387999999999998,16.989,24.883,17.009,25.316);
    ctx.bezierCurveTo(17.028,25.766,17.176000000000002,26.232,17.518,26.544999999999998);
    ctx.bezierCurveTo(17.858,26.857999999999997,18.276,27.054,18.747,27.054);
    ctx.bezierCurveTo(19.193,27.054,19.661,26.86,19.976,26.544999999999998);
    ctx.bezierCurveTo(20.276999999999997,26.244,20.503999999999998,25.749,20.485,25.316);
    ctx.bezierCurveTo(20.465,24.866,20.317999999999998,24.4,19.976,24.087);
    ctx.bezierCurveTo(19.636,23.775,19.218,23.578,18.747,23.578);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(26.131,35.866);
    ctx.bezierCurveTo(26.459,35.775999999999996,26.715,35.558,26.897,35.278);
    ctx.bezierCurveTo(27.084999999999997,34.987,27.101,34.619,27.026,34.291);
    ctx.bezierCurveTo(26.936,33.894999999999996,26.544999999999998,33.464999999999996,26.131,33.395999999999994);
    ctx.bezierCurveTo(25.825,33.34499999999999,25.586,33.33599999999999,25.298000000000002,33.45799999999999);
    ctx.bezierCurveTo(25.082,33.54899999999999,24.926000000000002,33.672999999999995,24.786,33.85499999999999);
    ctx.bezierCurveTo(24.321,34.45599999999999,24.483,35.34899999999999,25.145000000000003,35.73699999999999);
    ctx.bezierCurveTo(25.431,35.905,25.811,35.954,26.131,35.866);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(20.438,37.577);
    ctx.bezierCurveTo(20.028,37.577,19.598,37.754999999999995,19.308,38.045);
    ctx.bezierCurveTo(19.031,38.322,18.822,38.777,18.84,39.175000000000004);
    ctx.bezierCurveTo(18.858999999999998,39.588,18.994,40.017,19.308,40.30500000000001);
    ctx.bezierCurveTo(19.621,40.592000000000006,20.005,40.77300000000001,20.438,40.77300000000001);
    ctx.bezierCurveTo(20.848,40.77300000000001,21.278,40.59500000000001,21.567999999999998,40.30500000000001);
    ctx.bezierCurveTo(21.845,40.028000000000006,22.054,39.57300000000001,22.035999999999998,39.175000000000004);
    ctx.bezierCurveTo(22.017,38.76200000000001,21.881999999999998,38.333000000000006,21.567999999999998,38.045);
    ctx.bezierCurveTo(21.254,37.758,20.871,37.577,20.438,37.577);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(19.428,42.622);
    ctx.bezierCurveTo(18.934,42.622,18.461000000000002,43.057,18.483,43.566);
    ctx.bezierCurveTo(18.506,44.078,18.899,44.508,19.428,44.508);
    ctx.bezierCurveTo(19.922,44.508,20.395,44.073,20.372,43.566);
    ctx.bezierCurveTo(20.35,43.055,19.958,42.622,19.428,42.622);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(31.707,3.431);
    ctx.bezierCurveTo(31.337,3.2760000000000002,30.832,3.25,30.488,3.5);
    ctx.bezierCurveTo(30.473,3.51,30.459,3.521,30.445,3.532);
    ctx.bezierCurveTo(30.164,3.737,29.901,3.987,29.82,4.345);
    ctx.bezierCurveTo(29.751,4.649,29.767,4.942,29.888,5.231);
    ctx.bezierCurveTo(30.143,5.834,30.840000000000003,6.218,31.493000000000002,6.018);
    ctx.bezierCurveTo(31.51,6.013,31.526000000000003,6.008,31.543000000000003,6.003);
    ctx.bezierCurveTo(32.327000000000005,5.763,32.754000000000005,4.922000000000001,32.431000000000004,4.155);
    ctx.bezierCurveTo(32.286,3.813,32.049,3.576,31.707,3.431);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(56.534,7.804);
    ctx.bezierCurveTo(56.525,7.797000000000001,56.515,7.79,56.507999999999996,7.783);
    ctx.bezierCurveTo(56.373,7.679,56.23799999999999,7.575,56.10399999999999,7.471);
    ctx.bezierCurveTo(55.94599999999999,7.404,55.788999999999994,7.337,55.626999999999995,7.2700000000000005);
    ctx.bezierCurveTo(55.361,7.187,55.09799999999999,7.175000000000001,54.830999999999996,7.234000000000001);
    ctx.bezierCurveTo(54.65,7.234000000000001,54.482,7.280000000000001,54.327,7.370000000000001);
    ctx.bezierCurveTo(54.158,7.417000000000001,54.012,7.503000000000001,53.887,7.627000000000001);
    ctx.bezierCurveTo(53.739,7.715000000000001,53.618,7.835000000000001,53.53,7.985);
    ctx.bezierCurveTo(53.408,8.11,53.321,8.256,53.274,8.425);
    ctx.bezierCurveTo(53.149,8.662,53.09,8.919,53.102000000000004,9.194);
    ctx.bezierCurveTo(53.11900000000001,9.538,53.2,9.901000000000002,53.373000000000005,10.201);
    ctx.bezierCurveTo(53.477000000000004,10.336,53.581,10.471,53.68600000000001,10.605);
    ctx.bezierCurveTo(53.821000000000005,10.709,53.95700000000001,10.813,54.089000000000006,10.918000000000001);
    ctx.bezierCurveTo(54.248000000000005,10.985000000000001,54.407000000000004,11.052000000000001,54.56700000000001,11.119000000000002);
    ctx.bezierCurveTo(54.83400000000001,11.202000000000002,55.098000000000006,11.214000000000002,55.36200000000001,11.155000000000001);
    ctx.bezierCurveTo(55.54500000000001,11.155000000000001,55.71300000000001,11.109000000000002,55.86800000000001,11.019000000000002);
    ctx.bezierCurveTo(56.11400000000001,10.938000000000002,56.33000000000001,10.801000000000002,56.51100000000001,10.606000000000002);
    ctx.bezierCurveTo(56.52100000000001,10.599000000000002,56.53100000000001,10.592000000000002,56.53700000000001,10.585);
    ctx.bezierCurveTo(56.72700000000001,10.407,56.862000000000016,10.196000000000002,56.942000000000014,9.952000000000002);
    ctx.bezierCurveTo(57.06500000000001,9.718000000000002,57.12300000000001,9.466000000000001,57.110000000000014,9.195000000000002);
    ctx.bezierCurveTo(57.088,8.705,56.932,8.127,56.534,7.804);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(26.661,38.901);
    ctx.bezierCurveTo(26.345000000000002,38.715,25.990000000000002,38.74,25.672,38.901);
    ctx.bezierCurveTo(25.552,38.962,25.44,39.06,25.351,39.176);
    ctx.bezierCurveTo(25.174,39.313,25.049,39.526,25.058999999999997,39.747);
    ctx.bezierCurveTo(25.069,39.976,25.179,40.192,25.356999999999996,40.328);
    ctx.bezierCurveTo(25.444999999999997,40.439,25.552999999999997,40.535000000000004,25.670999999999996,40.594);
    ctx.bezierCurveTo(25.988999999999997,40.755,26.343999999999994,40.78,26.659999999999997,40.594);
    ctx.bezierCurveTo(26.957999999999995,40.419000000000004,27.144999999999996,40.093,27.144999999999996,39.747);
    ctx.bezierCurveTo(27.146,39.402,26.959,39.075,26.661,38.901);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(37.435,23.542);
    ctx.bezierCurveTo(36.961000000000006,23.265,36.377,23.274,35.903000000000006,23.542);
    ctx.bezierCurveTo(35.855000000000004,23.569000000000003,35.80700000000001,23.596,35.75900000000001,23.623);
    ctx.bezierCurveTo(34.83500000000001,24.145,34.83500000000001,25.559,35.75900000000001,26.081000000000003);
    ctx.bezierCurveTo(35.80700000000001,26.108000000000004,35.855000000000004,26.135,35.903000000000006,26.162000000000003);
    ctx.bezierCurveTo(36.377,26.430000000000003,36.961000000000006,26.439000000000004,37.435,26.162000000000003);
    ctx.bezierCurveTo(37.896,25.892000000000003,38.186,25.387000000000004,38.186,24.852000000000004);
    ctx.bezierCurveTo(38.186,24.317000000000004,37.896,23.813,37.435,23.542);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(42.016,6.758);
    ctx.bezierCurveTo(42.37,6.758,42.745,6.604,42.995,6.353);
    ctx.bezierCurveTo(43.233999999999995,6.1129999999999995,43.415,5.718999999999999,43.397999999999996,5.375);
    ctx.bezierCurveTo(43.366,4.625,42.791999999999994,3.992,42.01499999999999,3.992);
    ctx.bezierCurveTo(41.660999999999994,3.992,41.28699999999999,4.146,41.035999999999994,4.397);
    ctx.bezierCurveTo(40.797,4.6370000000000005,40.61599999999999,5.03,40.63099999999999,5.375);
    ctx.bezierCurveTo(40.666,6.124,41.24,6.758,42.016,6.758);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(16.354,15.783);
    ctx.bezierCurveTo(16.314999999999998,15.779,16.275,15.776,16.236,15.772);
    ctx.bezierCurveTo(14.873000000000001,15.643,14.870000000000001,18.022,16.236,17.893);
    ctx.bezierCurveTo(16.276,17.89,16.315,17.885,16.354,17.882);
    ctx.bezierCurveTo(17.702,17.755,17.705,15.911,16.354,15.783);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }

  ,GreenTree : function ( ctx, x, y, size ) {
    var stem = '#754e00',
        leaves = '#8cc63f';

    // Green Tree code
    ctx.save();
    ctx.translate(x*size,y*size);

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(80,0);
    ctx.lineTo(80,80);
    ctx.lineTo(0,80);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(0,0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(25.857,36.863);
    ctx.bezierCurveTo(24.988,33.519999999999996,23.304,29.851,19.976,28.925);
    ctx.bezierCurveTo(16.81,28.044,13.166,30.624000000000002,12.945,33.903);
    ctx.bezierCurveTo(11.953,39.638,11.883000000000001,43.323,12.364,49.123999999999995);
    ctx.bezierCurveTo(12.528,51.092999999999996,12.847000000000001,53.208999999999996,14.234000000000002,54.61599999999999);
    ctx.bezierCurveTo(15.643000000000002,56.04699999999999,17.796000000000003,56.382999999999996,19.793000000000003,56.58699999999999);
    ctx.bezierCurveTo(21.430000000000003,56.75499999999999,23.19,56.85899999999999,24.609,56.02599999999999);
    ctx.bezierCurveTo(26.791,54.74599999999999,27.278000000000002,51.83499999999999,27.326,49.30499999999999);
    ctx.bezierCurveTo(27.407,45.117,26.911,40.918,25.857,36.863);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(65.849,11.39);
    ctx.bezierCurveTo(64.63000000000001,6.696000000000001,62.265,1.5440000000000005,57.593,0.245000000000001);
    ctx.bezierCurveTo(53.148,-0.990999999999999,48.032000000000004,2.631000000000001,47.722,7.234000000000001);
    ctx.bezierCurveTo(46.329,15.287000000000003,46.231,20.459,46.907000000000004,28.604000000000003);
    ctx.bezierCurveTo(47.136,31.368000000000002,47.585,34.339000000000006,49.532000000000004,36.315000000000005);
    ctx.bezierCurveTo(51.511,38.32300000000001,54.532000000000004,38.795,57.337,39.08200000000001);
    ctx.bezierCurveTo(59.634,39.31700000000001,62.107,39.46500000000001,64.099,38.29500000000001);
    ctx.bezierCurveTo(67.162,36.49600000000001,67.846,32.409000000000006,67.91300000000001,28.85800000000001);
    ctx.bezierCurveTo(68.024,22.977,67.328,17.082,65.849,11.39);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(54.927,61.267);
    ctx.bezierCurveTo(54.447,60.157000000000004,53.473,58.95,51.457,58.688);
    ctx.bezierCurveTo(49.538000000000004,58.438,47.278,59.358000000000004,47.096000000000004,60.462);
    ctx.bezierCurveTo(46.407000000000004,62.401,46.31,63.64,46.519000000000005,65.58);
    ctx.bezierCurveTo(46.589000000000006,66.238,46.75300000000001,66.944,47.57900000000001,67.396);
    ctx.bezierCurveTo(48.418000000000006,67.856,49.72500000000001,67.937,50.940000000000005,67.976);
    ctx.bezierCurveTo(51.93600000000001,68.009,53.008,68.018,53.886,67.717);
    ctx.bezierCurveTo(55.236000000000004,67.255,55.575,66.271,55.641000000000005,65.42099999999999);
    ctx.bezierCurveTo(55.751,64.015,55.51,62.612,54.927,61.267);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(44.564,22.695);
    ctx.bezierCurveTo(43.519,18.674,41.494,14.261000000000001,37.492,13.148);
    ctx.bezierCurveTo(33.684,12.088,29.302,15.190999999999999,29.035999999999998,19.134999999999998);
    ctx.bezierCurveTo(27.842999999999996,26.032999999999998,27.758999999999997,30.464,28.337999999999997,37.44);
    ctx.bezierCurveTo(28.534,39.808,28.918999999999997,42.354,30.586,44.046);
    ctx.bezierCurveTo(32.281,45.766,34.869,46.17,37.272,46.416);
    ctx.bezierCurveTo(39.239999999999995,46.617,41.357,46.742999999999995,43.064,45.742);
    ctx.bezierCurveTo(45.688,44.201,46.275,40.699999999999996,46.333,37.658);
    ctx.bezierCurveTo(46.428,32.621,45.831,27.571,44.564,22.695);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = stem;
    ctx.beginPath();
    ctx.moveTo(59.379,36.531);
    ctx.bezierCurveTo(59.303999999999995,34.217,59.199999999999996,31.902,58.972,29.598);
    ctx.bezierCurveTo(58.870000000000005,28.573,58.779,27.546999999999997,58.636,26.526999999999997);
    ctx.bezierCurveTo(58.566,26.019,58.519000000000005,25.49,58.407000000000004,24.988999999999997);
    ctx.bezierCurveTo(58.254000000000005,24.294999999999998,57.881,23.728999999999996,57.783,23.025999999999996);
    ctx.bezierCurveTo(57.672000000000004,22.234999999999996,56.601,22.554999999999996,56.514,23.197999999999997);
    ctx.bezierCurveTo(56.449000000000005,23.688999999999997,56.035000000000004,24.439999999999998,55.924,24.988999999999997);
    ctx.bezierCurveTo(55.822,25.493,55.774,26.017999999999997,55.704,26.526999999999997);
    ctx.bezierCurveTo(55.59,27.371,55.513,28.215999999999998,55.433,29.064999999999998);
    ctx.bezierCurveTo(55.25,31.019999999999996,55.15,32.968999999999994,55.07,34.931);
    ctx.bezierCurveTo(54.989,36.885999999999996,54.962,38.842,54.915,40.797999999999995);
    ctx.bezierCurveTo(54.874,42.559,54.937,44.376999999999995,54.51,46.096999999999994);
    ctx.bezierCurveTo(53.823,48.858,51.614999999999995,50.74499999999999,49.024,51.739);
    ctx.bezierCurveTo(47.431,52.349,45.729,52.666999999999994,44.035000000000004,52.806999999999995);
    ctx.bezierCurveTo(42.606,52.92399999999999,40.916000000000004,52.715999999999994,39.42,52.91499999999999);
    ctx.bezierCurveTo(39.498000000000005,44.986999999999995,39.803000000000004,36.93199999999999,38.261,29.130999999999993);
    ctx.bezierCurveTo(38.061,28.121999999999993,36.484,28.159999999999993,36.259,29.130999999999993);
    ctx.bezierCurveTo(34.438,36.983999999999995,34.52,45.18199999999999,34.334,53.21399999999999);
    ctx.bezierCurveTo(34.262,56.285999999999994,34.163000000000004,59.36699999999999,34.077000000000005,62.44999999999999);
    ctx.bezierCurveTo(30.265000000000004,62.76099999999999,25.998000000000005,63.33699999999999,23.965000000000003,59.27899999999999);
    ctx.bezierCurveTo(22.324000000000005,56.00699999999999,23.105000000000004,51.41699999999999,20.463000000000005,48.62299999999999);
    ctx.bezierCurveTo(20.014000000000003,48.14799999999999,19.266000000000005,48.53399999999999,19.235000000000003,49.13199999999999);
    ctx.bezierCurveTo(19.179000000000002,50.25299999999999,19.337000000000003,51.40099999999999,19.365000000000002,52.526999999999994);
    ctx.bezierCurveTo(19.393,53.63999999999999,19.374000000000002,54.751999999999995,19.454,55.861999999999995);
    ctx.bezierCurveTo(19.621000000000002,58.169999999999995,19.926000000000002,60.614999999999995,21.191000000000003,62.611999999999995);
    ctx.bezierCurveTo(23.835,66.786,29.277,67.651,33.967,67.02499999999999);
    ctx.bezierCurveTo(33.933,68.704,33.91,70.38099999999999,33.903999999999996,72.05799999999999);
    ctx.bezierCurveTo(33.833,72.332,33.833999999999996,72.619,33.903999999999996,72.883);
    ctx.bezierCurveTo(33.903,74.443,33.913,76.00099999999999,33.949,77.557);
    ctx.bezierCurveTo(34.025,80.831,38.832,80.799,39.012,77.557);
    ctx.bezierCurveTo(39.096000000000004,76.035,39.156,74.508,39.205,72.982);
    ctx.bezierCurveTo(40.068,72.63,40.909,72.252,41.687,71.966);
    ctx.bezierCurveTo(43.604,71.265,45.599,70.696,47.388999999999996,69.695);
    ctx.bezierCurveTo(48.87799999999999,68.863,50.419,67.64099999999999,51.166999999999994,66.05999999999999);
    ctx.bezierCurveTo(51.632,65.076,52.04899999999999,63.16299999999999,51.202999999999996,62.29399999999999);
    ctx.bezierCurveTo(51.083999999999996,62.17199999999999,50.916999999999994,62.22399999999999,50.824999999999996,62.34299999999999);
    ctx.bezierCurveTo(50.437,62.84599999999999,50.418,63.48199999999999,50.108999999999995,64.04299999999999);
    ctx.bezierCurveTo(49.770999999999994,64.65799999999999,49.29599999999999,65.27999999999999,48.821,65.79799999999999);
    ctx.bezierCurveTo(47.671,67.04899999999999,46.064,67.70499999999998,44.477,68.20799999999998);
    ctx.bezierCurveTo(42.88999999999999,68.71099999999998,41.270999999999994,69.10999999999999,39.656,69.51299999999999);
    ctx.bezierCurveTo(39.537,69.54199999999999,39.415,69.571,39.292,69.59899999999999);
    ctx.bezierCurveTo(39.369,65.66399999999999,39.375,61.72399999999999,39.389,57.79099999999999);
    ctx.bezierCurveTo(40.181000000000004,57.85499999999999,41.007000000000005,57.78399999999999,41.771,57.761999999999986);
    ctx.bezierCurveTo(42.776,57.73299999999998,43.782000000000004,57.68099999999998,44.782000000000004,57.572999999999986);
    ctx.bezierCurveTo(46.797000000000004,57.353999999999985,48.798,57.009999999999984,50.68300000000001,56.249999999999986);
    ctx.bezierCurveTo(54.141000000000005,54.85499999999998,57.15200000000001,52.438999999999986,58.56300000000001,48.908999999999985);
    ctx.bezierCurveTo(60.101,45.067,59.51,40.562,59.379,36.531);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }

  ,NakedTree : function ( ctx, x, y, size ) {
    var stem = '#754e00';

    // Naked Tree code
    ctx.save();
    ctx.translate(x*size,y*size);

    ctx.fillStyle = stem;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(80,0);
    ctx.lineTo(80,80);
    ctx.lineTo(0,80);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(0,0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(44.494,60.703);
    ctx.lineTo(59.098,49.717);
    ctx.lineTo(44.047,54.643);
    ctx.lineTo(43.249,43.918);
    ctx.lineTo(54.115,35.768);
    ctx.lineTo(42.915,39.435);
    ctx.lineTo(42.127,28.818);
    ctx.lineTo(50.131,22.814);
    ctx.lineTo(41.88,25.516);
    ctx.lineTo(39.999,0.23);
    ctx.lineTo(38.119,25.514);
    ctx.lineTo(29.87,22.814);
    ctx.lineTo(37.873,28.818);
    ctx.lineTo(37.084,39.435);
    ctx.lineTo(25.884,35.768);
    ctx.lineTo(36.75,43.918);
    ctx.lineTo(35.952,54.643);
    ctx.lineTo(20.902,49.717);
    ctx.lineTo(35.504,60.703);
    ctx.lineTo(35.434,61.64);
    ctx.lineTo(34.963,67.647);
    ctx.lineTo(34.021,80);
    ctx.lineTo(45.978,80);
    ctx.lineTo(45.035,67.647);
    ctx.lineTo(44.564,61.472);
    ctx.lineTo(44.494,60.703);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }

  ,OrangeTree : function ( ctx, x, y, size ) {
    var stem = '#82776c',
        leaves = '#f15a24',
        head = '#f7931e';

    // Orange Tree code
    ctx.save();
    ctx.translate(x*size,y*size);

    ctx.fillStyle = stem;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(80,0);
    ctx.lineTo(80,80);
    ctx.lineTo(0,80);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(0,0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();
    ctx.save();

    ctx.fillStyle = head;
    ctx.beginPath();
    ctx.moveTo(1.561,37.44);
    ctx.bezierCurveTo(1.561,47.178,9.456,55.07299999999999,19.194,55.07299999999999);
    ctx.bezierCurveTo(22.965,55.07299999999999,26.456,53.88499999999999,29.322,51.86999999999999);
    ctx.bezierCurveTo(31.93,55.18099999999999,35.698,57.53099999999999,40.013999999999996,58.31199999999999);
    ctx.lineTo(40.117999999999995,56.57799999999999);
    ctx.lineTo(17.547999999999995,34.853999999999985);
    ctx.lineTo(41.05799999999999,50.66599999999998);
    ctx.lineTo(42.93899999999999,15.57599999999998);
    ctx.lineTo(44.81999999999999,50.66599999999998);
    ctx.lineTo(57.04599999999999,43.58199999999998);
    ctx.lineTo(45.76,56.578);
    ctx.lineTo(45.869,58.394000000000005);
    ctx.bezierCurveTo(47.601,58.12800000000001,49.251,57.611000000000004,50.778999999999996,56.87800000000001);
    ctx.bezierCurveTo(53.626,58.851000000000006,57.08,60.00900000000001,60.806,60.00900000000001);
    ctx.bezierCurveTo(70.544,60.00900000000001,78.439,52.11500000000001,78.439,42.37700000000001);
    ctx.bezierCurveTo(78.439,37.91100000000001,76.776,33.83500000000001,74.038,30.72900000000001);
    ctx.bezierCurveTo(74.444,29.59200000000001,74.678,28.37200000000001,74.678,27.09500000000001);
    ctx.bezierCurveTo(74.678,21.12200000000001,69.836,16.28100000000001,63.864,16.28100000000001);
    ctx.bezierCurveTo(62.791999999999994,16.28100000000001,61.759,16.44300000000001,60.781,16.73300000000001);
    ctx.bezierCurveTo(60.282,7.44,52.59,0.059,43.174,0.059);
    ctx.bezierCurveTo(33.435,0.059,25.541,7.953,25.541,17.692);
    ctx.bezierCurveTo(25.541,18.866,25.658,20.013,25.877,21.123);
    ctx.bezierCurveTo(23.814999999999998,20.278000000000002,21.56,19.808,19.192999999999998,19.808);
    ctx.bezierCurveTo(9.455,19.808,1.561,27.703,1.561,37.44);
    ctx.closePath();
    ctx.moveTo(28.772,28.415);
    ctx.bezierCurveTo(29.796999999999997,28.415,29.921999999999997,30.009,28.892,30.009);
    ctx.bezierCurveTo(27.866,30.009,27.742,28.415,28.772,28.415);
    ctx.closePath();
    ctx.moveTo(29.362,20.604);
    ctx.bezierCurveTo(28.337,20.604,28.212,19.009999999999998,29.243,19.009999999999998);
    ctx.bezierCurveTo(30.269,19.011,30.393,20.604,29.362,20.604);
    ctx.closePath();
    ctx.moveTo(32.191,10.356);
    ctx.bezierCurveTo(31.041000000000004,10.356,30.902,8.57,32.056000000000004,8.57);
    ctx.bezierCurveTo(33.207,8.57,33.346,10.356,32.191,10.356);
    ctx.closePath();
    ctx.moveTo(40.139,15.483);
    ctx.bezierCurveTo(39.521,16.184,38.244,15.988000000000001,37.966,15.052000000000001);
    ctx.bezierCurveTo(37.909,14.861,37.853,14.670000000000002,37.795,14.479000000000001);
    ctx.bezierCurveTo(37.608000000000004,13.850000000000001,38.147,12.996,38.884,13.216000000000001);
    ctx.bezierCurveTo(39.061,13.269000000000002,39.237,13.322000000000001,39.412,13.375000000000002);
    ctx.bezierCurveTo(39.863,13.511000000000001,40.227,13.751000000000001,40.388999999999996,14.218000000000002);
    ctx.bezierCurveTo(40.537,14.65,40.44,15.14,40.139,15.483);
    ctx.closePath();
    ctx.moveTo(45.36,17.921);
    ctx.bezierCurveTo(44.156,17.921,44.011,16.052,45.219,16.052);
    ctx.bezierCurveTo(46.422,16.052,46.568,17.921,45.36,17.921);
    ctx.closePath();
    ctx.moveTo(51.951,12.858);
    ctx.bezierCurveTo(50.606,12.858,50.444,10.769,51.794000000000004,10.769);
    ctx.bezierCurveTo(53.139,10.77,53.302,12.858,51.951,12.858);
    ctx.closePath();
    ctx.moveTo(53.361,22.249);
    ctx.bezierCurveTo(52.034,22.249,51.873,20.188,53.205999999999996,20.188);
    ctx.bezierCurveTo(54.533,20.188,54.693,22.249,53.361,22.249);
    ctx.closePath();
    ctx.moveTo(50.071,27.448);
    ctx.bezierCurveTo(48.71,27.448,48.544,25.333,49.912,25.333);
    ctx.bezierCurveTo(51.274,25.333,51.439,27.448,50.071,27.448);
    ctx.closePath();
    ctx.moveTo(62.313,30.946);
    ctx.bezierCurveTo(60.685,30.946,60.488,28.418000000000003,62.123000000000005,28.418000000000003);
    ctx.bezierCurveTo(63.749,28.418,63.947,30.946,62.313,30.946);
    ctx.closePath();
    ctx.moveTo(64.191,21.985);
    ctx.bezierCurveTo(62.598,21.985,62.406000000000006,19.512,64.005,19.512);
    ctx.bezierCurveTo(65.597,19.512,65.79,21.985,64.191,21.985);
    ctx.closePath();
    ctx.moveTo(70.301,26.646);
    ctx.bezierCurveTo(68.762,26.646,68.575,24.255000000000003,70.121,24.255000000000003);
    ctx.bezierCurveTo(71.66,24.255,71.847,26.646,70.301,26.646);
    ctx.closePath();
    ctx.moveTo(74.837,39.951);
    ctx.bezierCurveTo(76.146,39.951,76.305,41.985,74.989,41.985);
    ctx.bezierCurveTo(73.68,41.984,73.521,39.951,74.837,39.951);
    ctx.closePath();
    ctx.moveTo(70.368,50.942);
    ctx.bezierCurveTo(70.77199999999999,51.025,71.071,51.187,71.37299999999999,51.466);
    ctx.bezierCurveTo(71.79299999999999,51.853,71.85099999999998,52.509,71.466,52.945);
    ctx.bezierCurveTo(71.118,53.34,70.37599999999999,53.457,69.988,53.037);
    ctx.bezierCurveTo(69.71,52.736,69.489,52.47,69.403,52.06);
    ctx.bezierCurveTo(69.277,51.463,69.678,50.8,70.368,50.942);
    ctx.closePath();
    ctx.moveTo(69.66,35.664);
    ctx.bezierCurveTo(71.03999999999999,35.664,71.208,37.808,69.822,37.808);
    ctx.bezierCurveTo(68.442,37.807,68.274,35.664,69.66,35.664);
    ctx.closePath();
    ctx.moveTo(65.437,41.416);
    ctx.bezierCurveTo(66.675,41.416,66.825,43.339999999999996,65.582,43.339999999999996);
    ctx.bezierCurveTo(64.343,43.34,64.192,41.416,65.437,41.416);
    ctx.closePath();
    ctx.moveTo(61.199,52.619);
    ctx.bezierCurveTo(62.543,52.619,62.705999999999996,54.707,61.355,54.707);
    ctx.bezierCurveTo(60.011,54.707,59.848,52.619,61.199,52.619);
    ctx.closePath();
    ctx.moveTo(52.884,54.127);
    ctx.bezierCurveTo(51.681,54.127,51.535000000000004,52.258,52.743,52.258);
    ctx.bezierCurveTo(53.945,52.258,54.092,54.127,52.884,54.127);
    ctx.closePath();
    ctx.moveTo(56.54,37.279);
    ctx.bezierCurveTo(56.51,36.883,56.772999999999996,36.368,57.197,36.281000000000006);
    ctx.bezierCurveTo(57.343,36.251000000000005,57.49,36.220000000000006,57.635000000000005,36.190000000000005);
    ctx.bezierCurveTo(58.301,36.05200000000001,58.999,36.370000000000005,59.056000000000004,37.12500000000001);
    ctx.bezierCurveTo(59.108000000000004,37.80700000000001,58.468,38.40500000000001,57.787000000000006,38.263000000000005);
    ctx.lineTo(57.334,38.168000000000006);
    ctx.bezierCurveTo(56.905,38.077,56.573,37.723,56.54,37.279);
    ctx.closePath();
    ctx.moveTo(48.48,37.74);
    ctx.bezierCurveTo(50.212999999999994,37.74,50.422999999999995,40.433,48.681999999999995,40.433);
    ctx.bezierCurveTo(46.949,40.433,46.739,37.74,48.48,37.74);
    ctx.closePath();
    ctx.moveTo(42.555,7.796);
    ctx.bezierCurveTo(41.07,7.796,40.889,5.487,42.382,5.487);
    ctx.bezierCurveTo(43.867,5.488,44.048,7.796,42.555,7.796);
    ctx.closePath();
    ctx.moveTo(37.553,24.806);
    ctx.bezierCurveTo(37.632999999999996,25.022000000000002,37.653,25.262,37.584999999999994,25.498);
    ctx.bezierCurveTo(37.56499999999999,25.75,37.443999999999996,25.96,37.267999999999994,26.084);
    ctx.bezierCurveTo(36.99999999999999,26.413999999999998,36.632999999999996,26.655,36.157,26.566);
    ctx.bezierCurveTo(35.51199999999999,26.445,35.239999999999995,25.881999999999998,35.13999999999999,25.297);
    ctx.bezierCurveTo(35.032,24.666,35.651,24,36.285,24);
    ctx.lineTo(36.305,24);
    ctx.bezierCurveTo(36.52,24,36.735,24.027,36.927,24.126);
    ctx.bezierCurveTo(36.923,24.112000000000002,36.918,24.034000000000002,36.913,24.021);
    ctx.bezierCurveTo(36.915,24.022000000000002,36.919,24.04,36.922,24.042);
    ctx.bezierCurveTo(37.019999999999996,24.102,37.108,24.183,37.19,24.261000000000003);
    ctx.bezierCurveTo(37.359,24.403,37.491,24.596,37.553,24.806);
    ctx.closePath();
    ctx.moveTo(35.714,33.872);
    ctx.bezierCurveTo(35.708999999999996,33.864,35.705,33.857,35.701,33.849);
    ctx.bezierCurveTo(35.453,33.669999999999995,35.273,33.421,35.247,33.068999999999996);
    ctx.bezierCurveTo(35.201,32.464,35.669,31.922999999999995,36.272,31.875999999999994);
    ctx.bezierCurveTo(37.461999999999996,31.784999999999993,37.827,33.355,36.955999999999996,33.913999999999994);
    ctx.bezierCurveTo(36.644,34.276,35.965,34.364,35.714,33.872);
    ctx.closePath();
    ctx.moveTo(37.679,42.621);
    ctx.bezierCurveTo(39.183,42.621,39.365,44.956,37.855000000000004,44.956);
    ctx.bezierCurveTo(36.351,44.956,36.168,42.621,37.679,42.621);
    ctx.closePath();
    ctx.moveTo(32.022,34.448);
    ctx.bezierCurveTo(33.754999999999995,34.448,33.964999999999996,37.141,32.224,37.141);
    ctx.bezierCurveTo(30.492,37.142,30.281,34.448,32.022,34.448);
    ctx.closePath();
    ctx.moveTo(22.164,31.363);
    ctx.bezierCurveTo(23.632,31.363,23.810000000000002,33.643,22.336000000000002,33.643);
    ctx.bezierCurveTo(20.867,33.644,20.689,31.363,22.164,31.363);
    ctx.closePath();
    ctx.moveTo(31.117,51.373);
    ctx.bezierCurveTo(32.249,51.373,32.387,53.132,31.249000000000002,53.132);
    ctx.bezierCurveTo(30.117,53.132,29.98,51.373,31.117,51.373);
    ctx.closePath();
    ctx.moveTo(27.381,47.484);
    ctx.bezierCurveTo(28.071,47.484,28.155,48.556000000000004,27.462,48.556000000000004);
    ctx.bezierCurveTo(26.772,48.557,26.688,47.484,27.381,47.484);
    ctx.closePath();
    ctx.moveTo(21.846,47.959);
    ctx.bezierCurveTo(20.713,47.959,20.576,46.201,21.714,46.201);
    ctx.bezierCurveTo(22.845,46.201,22.982,47.959,21.846,47.959);
    ctx.closePath();
    ctx.moveTo(20.754,51.126);
    ctx.bezierCurveTo(22.205000000000002,51.126,22.380000000000003,53.379,20.924000000000003,53.379);
    ctx.bezierCurveTo(19.473,53.379,19.297,51.126,20.754,51.126);
    ctx.closePath();
    ctx.moveTo(13.88,27.641);
    ctx.bezierCurveTo(12.271,27.641,12.075000000000001,25.141,13.692,25.141);
    ctx.bezierCurveTo(15.302,25.141,15.496,27.641,13.88,27.641);
    ctx.closePath();
    ctx.moveTo(12.26,50.174);
    ctx.bezierCurveTo(12.419,49.322,13.371,48.701,14.201,49.11);
    ctx.bezierCurveTo(14.646,49.329,14.941,49.787,14.968,50.284);
    ctx.bezierCurveTo(15,50.929,14.53,51.504999999999995,13.874,51.554);
    ctx.bezierCurveTo(13.683,51.57,13.486,51.525,13.306000000000001,51.443000000000005);
    ctx.bezierCurveTo(12.654,51.455,12.141,50.806,12.26,50.174);
    ctx.closePath();
    ctx.moveTo(12.736,38.1);
    ctx.bezierCurveTo(13.867,38.014,14.606000000000002,39.197,14.157,40.197);
    ctx.bezierCurveTo(14.099,40.325,14.042,40.454,13.984,40.582);
    ctx.bezierCurveTo(13.802,40.986000000000004,13.375,41.258,12.94,41.291000000000004);
    ctx.bezierCurveTo(12.334,41.338,11.882,40.965,11.645999999999999,40.43900000000001);
    ctx.bezierCurveTo(11.584999999999999,40.30400000000001,11.524999999999999,40.168000000000006,11.463999999999999,40.03200000000001);
    ctx.bezierCurveTo(11.073,39.159,11.859,38.167,12.736,38.1);
    ctx.closePath();
    ctx.moveTo(9.483,32.98);
    ctx.bezierCurveTo(10.686,32.98,10.832,34.849,9.624,34.849);
    ctx.bezierCurveTo(8.422,34.849,8.275,32.98,9.483,32.98);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = stem;
    ctx.beginPath();
    ctx.moveTo(17.548,34.854);
    ctx.lineTo(41.058,50.666);
    ctx.lineTo(42.938,15.576);
    ctx.lineTo(44.819,50.666);
    ctx.lineTo(57.045,43.582);
    ctx.lineTo(45.76,56.578);
    ctx.lineTo(45.869,58.318);
    ctx.lineTo(47.171,80);
    ctx.lineTo(38.707,80);
    ctx.lineTo(40.014,58.236);
    ctx.lineTo(40.118,56.54);
    ctx.lineTo(17.548,34.854);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(64.191,21.985);
    ctx.bezierCurveTo(62.598,21.985,62.406000000000006,19.512,64.005,19.512);
    ctx.bezierCurveTo(65.597,19.512,65.79,21.985,64.191,21.985);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(70.301,26.646);
    ctx.bezierCurveTo(68.762,26.646,68.575,24.255000000000003,70.121,24.255000000000003);
    ctx.bezierCurveTo(71.66,24.255,71.847,26.646,70.301,26.646);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(62.313,30.946);
    ctx.bezierCurveTo(60.685,30.946,60.488,28.418000000000003,62.123000000000005,28.418000000000003);
    ctx.bezierCurveTo(63.749,28.418,63.947,30.946,62.313,30.946);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(69.66,35.664);
    ctx.bezierCurveTo(71.03999999999999,35.664,71.208,37.808,69.822,37.808);
    ctx.bezierCurveTo(68.442,37.807,68.274,35.664,69.66,35.664);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(74.837,39.951);
    ctx.bezierCurveTo(76.146,39.951,76.305,41.985,74.989,41.985);
    ctx.bezierCurveTo(73.68,41.984,73.521,39.951,74.837,39.951);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(70.368,50.942);
    ctx.bezierCurveTo(70.77199999999999,51.025,71.071,51.187,71.37299999999999,51.466);
    ctx.bezierCurveTo(71.79299999999999,51.853,71.85099999999998,52.509,71.466,52.945);
    ctx.bezierCurveTo(71.118,53.34,70.37599999999999,53.457,69.988,53.037);
    ctx.bezierCurveTo(69.71,52.736,69.489,52.47,69.403,52.06);
    ctx.bezierCurveTo(69.277,51.463,69.678,50.8,70.368,50.942);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(61.199,52.619);
    ctx.bezierCurveTo(62.543,52.619,62.705999999999996,54.707,61.355,54.707);
    ctx.bezierCurveTo(60.011,54.707,59.848,52.619,61.199,52.619);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(65.437,41.416);
    ctx.bezierCurveTo(66.675,41.416,66.825,43.339999999999996,65.582,43.339999999999996);
    ctx.bezierCurveTo(64.343,43.34,64.192,41.416,65.437,41.416);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(52.884,54.127);
    ctx.bezierCurveTo(51.681,54.127,51.535000000000004,52.258,52.743,52.258);
    ctx.bezierCurveTo(53.945,52.258,54.092,54.127,52.884,54.127);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(57.197,36.281);
    ctx.bezierCurveTo(57.343,36.251,57.49,36.22,57.635000000000005,36.19);
    ctx.bezierCurveTo(58.301,36.052,58.999,36.37,59.056000000000004,37.125);
    ctx.bezierCurveTo(59.108000000000004,37.807,58.468,38.405,57.787000000000006,38.263);
    ctx.lineTo(57.334,38.168);
    ctx.bezierCurveTo(56.904,38.077999999999996,56.572,37.724,56.539,37.28);
    ctx.bezierCurveTo(56.51,36.882,56.773,36.368,57.197,36.281);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(48.48,37.74);
    ctx.bezierCurveTo(50.212999999999994,37.74,50.422999999999995,40.433,48.681999999999995,40.433);
    ctx.bezierCurveTo(46.949,40.433,46.739,37.74,48.48,37.74);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(49.912,25.333);
    ctx.bezierCurveTo(51.274,25.333,51.439,27.448,50.071,27.448);
    ctx.bezierCurveTo(48.71,27.448,48.544,25.333,49.912,25.333);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(53.361,22.249);
    ctx.bezierCurveTo(52.034,22.249,51.873,20.188,53.205999999999996,20.188);
    ctx.bezierCurveTo(54.533,20.188,54.693,22.249,53.361,22.249);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(51.951,12.858);
    ctx.bezierCurveTo(50.606,12.858,50.444,10.769,51.794000000000004,10.769);
    ctx.bezierCurveTo(53.139,10.77,53.302,12.858,51.951,12.858);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(45.36,17.921);
    ctx.bezierCurveTo(44.156,17.921,44.011,16.052,45.219,16.052);
    ctx.bezierCurveTo(46.422,16.052,46.568,17.921,45.36,17.921);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(42.382,5.488);
    ctx.bezierCurveTo(43.867,5.488,44.047999999999995,7.797000000000001,42.555,7.797000000000001);
    ctx.bezierCurveTo(41.069,7.796,40.889,5.488,42.382,5.488);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(37.966,15.052);
    ctx.bezierCurveTo(37.909,14.860999999999999,37.853,14.67,37.795,14.479);
    ctx.bezierCurveTo(37.608000000000004,13.85,38.147,12.995999999999999,38.884,13.216);
    ctx.bezierCurveTo(39.061,13.269,39.237,13.322,39.412,13.375);
    ctx.bezierCurveTo(39.863,13.511,40.227,13.751,40.388999999999996,14.218);
    ctx.bezierCurveTo(40.537,14.65,40.440999999999995,15.139,40.138999999999996,15.483);
    ctx.bezierCurveTo(39.521,16.184,38.244,15.988,37.966,15.052);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(32.191,10.356);
    ctx.bezierCurveTo(31.041000000000004,10.356,30.902,8.57,32.056000000000004,8.57);
    ctx.bezierCurveTo(33.207,8.57,33.346,10.356,32.191,10.356);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(29.362,20.604);
    ctx.bezierCurveTo(28.337,20.604,28.212,19.009999999999998,29.243,19.009999999999998);
    ctx.bezierCurveTo(30.269,19.011,30.393,20.604,29.362,20.604);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(37.585,25.487);
    ctx.bezierCurveTo(37.565,25.738999999999997,37.444,25.936999999999998,37.268,26.061999999999998);
    ctx.bezierCurveTo(37,26.391999999999996,36.633,26.61,36.157000000000004,26.520999999999997);
    ctx.bezierCurveTo(35.512,26.4,35.24,25.883999999999997,35.14,25.298999999999996);
    ctx.bezierCurveTo(35.032,24.666,35.651,24,36.285,24);
    ctx.lineTo(36.305,24);
    ctx.bezierCurveTo(36.52,24,36.735,24.027,36.927,24.126);
    ctx.bezierCurveTo(36.923,24.112000000000002,36.918,24.082,36.913,24.067);
    ctx.bezierCurveTo(36.915,24.068,36.919,24.062,36.922,24.064);
    ctx.bezierCurveTo(37.019999999999996,24.124,37.108,24.193,37.19,24.271);
    ctx.bezierCurveTo(37.36,24.414,37.492,24.591,37.553,24.802);
    ctx.bezierCurveTo(37.633,25.019,37.652,25.25,37.585,25.487);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(37.679,42.621);
    ctx.bezierCurveTo(39.183,42.621,39.365,44.956,37.855000000000004,44.956);
    ctx.bezierCurveTo(36.351,44.956,36.168,42.621,37.679,42.621);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(32.022,34.448);
    ctx.bezierCurveTo(33.754999999999995,34.448,33.964999999999996,37.141,32.224,37.141);
    ctx.bezierCurveTo(30.492,37.142,30.281,34.448,32.022,34.448);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(35.714,33.872);
    ctx.bezierCurveTo(35.708999999999996,33.864,35.705,33.857,35.701,33.849);
    ctx.bezierCurveTo(35.453,33.669999999999995,35.273,33.421,35.247,33.068999999999996);
    ctx.bezierCurveTo(35.201,32.464,35.669,31.922999999999995,36.272,31.875999999999994);
    ctx.bezierCurveTo(37.461999999999996,31.784999999999993,37.827,33.355,36.955999999999996,33.913999999999994);
    ctx.bezierCurveTo(36.644,34.276,35.965,34.364,35.714,33.872);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(28.893,30.009);
    ctx.bezierCurveTo(27.867,30.009,27.743000000000002,28.415,28.773,28.415);
    ctx.bezierCurveTo(29.798,28.415,29.923,30.009,28.893,30.009);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(22.164,31.363);
    ctx.bezierCurveTo(23.632,31.363,23.810000000000002,33.643,22.336000000000002,33.643);
    ctx.bezierCurveTo(20.867,33.644,20.689,31.363,22.164,31.363);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(13.88,27.641);
    ctx.bezierCurveTo(12.271,27.641,12.075000000000001,25.141,13.692,25.141);
    ctx.bezierCurveTo(15.302,25.141,15.496,27.641,13.88,27.641);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(9.483,32.98);
    ctx.bezierCurveTo(10.686,32.98,10.832,34.849,9.624,34.849);
    ctx.bezierCurveTo(8.422,34.849,8.275,32.98,9.483,32.98);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(14.201,49.109);
    ctx.bezierCurveTo(14.646,49.328,14.941,49.786,14.968,50.283);
    ctx.bezierCurveTo(15,50.928000000000004,14.53,51.504000000000005,13.874,51.553000000000004);
    ctx.bezierCurveTo(13.683,51.569,13.486,51.524,13.306000000000001,51.44200000000001);
    ctx.bezierCurveTo(12.655000000000001,51.45600000000001,12.141000000000002,50.806000000000004,12.260000000000002,50.17400000000001);
    ctx.bezierCurveTo(12.419,49.322,13.371,48.701,14.201,49.109);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(12.736,38.1);
    ctx.bezierCurveTo(13.867,38.014,14.606000000000002,39.197,14.157,40.197);
    ctx.bezierCurveTo(14.099,40.325,14.042,40.454,13.984,40.582);
    ctx.bezierCurveTo(13.802,40.986000000000004,13.375,41.258,12.94,41.291000000000004);
    ctx.bezierCurveTo(12.334,41.338,11.882,40.965,11.645999999999999,40.43900000000001);
    ctx.bezierCurveTo(11.584999999999999,40.30400000000001,11.524999999999999,40.168000000000006,11.463999999999999,40.03200000000001);
    ctx.bezierCurveTo(11.073,39.159,11.859,38.167,12.736,38.1);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(21.714,46.201);
    ctx.bezierCurveTo(22.845,46.201,22.982999999999997,47.959,21.846,47.959);
    ctx.bezierCurveTo(20.713,47.959,20.576,46.201,21.714,46.201);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(20.754,51.126);
    ctx.bezierCurveTo(22.205000000000002,51.126,22.380000000000003,53.379,20.924000000000003,53.379);
    ctx.bezierCurveTo(19.473,53.379,19.297,51.126,20.754,51.126);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(27.381,47.484);
    ctx.bezierCurveTo(28.071,47.484,28.155,48.556000000000004,27.462,48.556000000000004);
    ctx.bezierCurveTo(26.772,48.557,26.688,47.484,27.381,47.484);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = leaves;
    ctx.beginPath();
    ctx.moveTo(31.117,51.373);
    ctx.bezierCurveTo(32.249,51.373,32.387,53.132,31.249000000000002,53.132);
    ctx.bezierCurveTo(30.117,53.132,29.98,51.373,31.117,51.373);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }

  ,Cheese : function ( ctx, x, y, size ) {
    // cheese code
    var cheese_color = '#dba100',
        cheese_top_color = '#f4c500';

    ctx.save();
    ctx.translate(x*size,y*size);

    ctx.fillStyle = cheese_top_color;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(size,0);
    ctx.lineTo(size,size);
    ctx.lineTo(0,size);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,0);
    ctx.translate(0,0);
    ctx.scale(1,1);
    ctx.translate(-30,-30);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.fillStyle = cheese_color;
    ctx.beginPath();
    ctx.moveTo(63.563,53.556);
    ctx.bezierCurveTo(63.563,53.455,63.574000000000005,53.357,63.589000000000006,53.26);
    ctx.bezierCurveTo(63.467000000000006,53.294999999999995,63.339000000000006,53.317,63.203,53.317);
    ctx.bezierCurveTo(62.564,53.317,62.047000000000004,52.906,62.047000000000004,52.399);
    ctx.bezierCurveTo(62.047000000000004,51.893,62.565000000000005,51.482,63.203,51.482);
    ctx.bezierCurveTo(63.695,51.482,64.11200000000001,51.727,64.28,52.069);
    ctx.bezierCurveTo(64.491,51.917,64.69800000000001,51.827000000000005,64.999,51.81);
    ctx.lineTo(64.999,43.95);
    ctx.bezierCurveTo(64.999,47.462,58.288,50.307,50.00899999999999,50.307);
    ctx.bezierCurveTo(41.730999999999995,50.307,35.019999999999996,47.366,35.019999999999996,43.855000000000004);
    ctx.bezierCurveTo(35.019999999999996,43.838,35.022999999999996,43.712,35.022999999999996,43.712);
    ctx.lineTo(35,43.712);
    ctx.lineTo(35,49.735);
    ctx.bezierCurveTo(35.027,49.733,35.052,49.726,35.08,49.726);
    ctx.bezierCurveTo(35.917,49.726,36.596,50.494,36.596,51.441);
    ctx.bezierCurveTo(36.596,52.389,35.916999999999994,53.157000000000004,35.08,53.157000000000004);
    ctx.bezierCurveTo(35.052,53.157000000000004,35.027,53.151,35,53.148);
    ctx.lineTo(35,56.011);
    ctx.lineTo(35.042,56.011);
    ctx.bezierCurveTo(35.042,59.611000000000004,41.749,62.406000000000006,50.021,62.406000000000006);
    ctx.bezierCurveTo(53.683,62.406000000000006,57.035000000000004,61.857000000000006,59.637,60.937000000000005);
    ctx.bezierCurveTo(59.5,60.79600000000001,59.414,60.617000000000004,59.414,60.414);
    ctx.bezierCurveTo(59.414,59.975,59.808,59.619,60.292,59.619);
    ctx.bezierCurveTo(60.742000000000004,59.619,61.107,59.926,61.159,60.322);
    ctx.bezierCurveTo(63.546,59.203,65,57.721,65,56.086);
    ctx.lineTo(65,55.301);
    ctx.bezierCurveTo(64.1,55.252,63.563,54.493,63.563,53.556);
    ctx.closePath();
    ctx.moveTo(39.707,58.98);
    ctx.bezierCurveTo(39.002,58.98,38.431,58.355,38.431,57.583999999999996);
    ctx.bezierCurveTo(38.431,56.812999999999995,39.003,56.18899999999999,39.707,56.18899999999999);
    ctx.bezierCurveTo(40.412,56.18899999999999,40.983000000000004,56.81199999999999,40.983000000000004,57.583999999999996);
    ctx.bezierCurveTo(40.983000000000004,58.356,40.413,58.98,39.707,58.98);
    ctx.closePath();
    ctx.moveTo(41.821,53.556);
    ctx.bezierCurveTo(41.358999999999995,53.556,40.983999999999995,53.163,40.983999999999995,52.678);
    ctx.bezierCurveTo(40.983999999999995,52.193999999999996,41.358999999999995,51.800999999999995,41.821,51.800999999999995);
    ctx.bezierCurveTo(42.284,51.800999999999995,42.659,52.193999999999996,42.659,52.678);
    ctx.bezierCurveTo(42.66,53.163,42.285,53.556,41.821,53.556);
    ctx.closePath();
    ctx.moveTo(50.359,60.098);
    ctx.bezierCurveTo(49.235,60.098,48.324,59.223,48.324,58.143);
    ctx.bezierCurveTo(48.324,57.063,49.235,56.188,50.358999999999995,56.188);
    ctx.bezierCurveTo(51.48299999999999,56.188,52.39399999999999,57.063,52.39399999999999,58.143);
    ctx.bezierCurveTo(52.39399999999999,59.223,51.482,60.098,50.359,60.098);
    ctx.closePath();
    ctx.moveTo(51.636,55.629);
    ctx.bezierCurveTo(51.217000000000006,55.629,50.877,55.326,50.877,54.951);
    ctx.bezierCurveTo(50.877,54.578,51.217000000000006,54.273,51.636,54.273);
    ctx.bezierCurveTo(52.054,54.273,52.394000000000005,54.578,52.394000000000005,54.951);
    ctx.bezierCurveTo(52.394,55.326,52.055,55.629,51.636,55.629);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = cheese_top_color;
    ctx.beginPath();
    ctx.moveTo(50.01,50.307);
    ctx.bezierCurveTo(58.289,50.307,65,47.462,65,43.95);
    ctx.bezierCurveTo(65,43.934000000000005,64.997,43.918000000000006,64.997,43.901);
    ctx.bezierCurveTo(64.934,40.413000000000004,58.25,37.593,50.01,37.593);
    ctx.bezierCurveTo(41.771,37.593,35.086,40.413000000000004,35.024,43.901);
    ctx.bezierCurveTo(35.024,43.918000000000006,35.021,43.934000000000005,35.021,43.95);
    ctx.bezierCurveTo(35.021,47.461,41.732,50.307,50.01,50.307);
    ctx.closePath();
    ctx.moveTo(60.731,42.505);
    ctx.bezierCurveTo(60.972,42.505,61.169000000000004,42.675000000000004,61.169000000000004,42.884);
    ctx.bezierCurveTo(61.169000000000004,43.093,60.972,43.263,60.731,43.263);
    ctx.bezierCurveTo(60.488,43.263,60.292,43.092999999999996,60.292,42.884);
    ctx.bezierCurveTo(60.292,42.675,60.488,42.505,60.731,42.505);
    ctx.closePath();
    ctx.moveTo(53.451,43.951);
    ctx.bezierCurveTo(54.453,43.951,55.265,44.717,55.265,45.662);
    ctx.bezierCurveTo(55.265,46.606,54.452,47.372,53.451,47.372);
    ctx.bezierCurveTo(52.447,47.372,51.636,46.606,51.636,45.662);
    ctx.bezierCurveTo(51.636,44.716,52.447,43.951,53.451,43.951);
    ctx.closePath();
    ctx.moveTo(47.646,41.747);
    ctx.bezierCurveTo(48.021,41.747,48.324,42.086,48.324,42.505);
    ctx.bezierCurveTo(48.324,42.92400000000001,48.019999999999996,43.263000000000005,47.646,43.263000000000005);
    ctx.bezierCurveTo(47.272000000000006,43.263000000000005,46.968,42.92400000000001,46.968,42.505);
    ctx.bezierCurveTo(46.968,42.086,47.271,41.747,47.646,41.747);
    ctx.closePath();
    ctx.moveTo(39.867,46.375);
    ctx.bezierCurveTo(40.483999999999995,46.375,40.983999999999995,46.821,40.983999999999995,47.372);
    ctx.bezierCurveTo(40.983999999999995,47.923,40.483999999999995,48.37,39.867,48.37);
    ctx.bezierCurveTo(39.25,48.37,38.75,47.922999999999995,38.75,47.372);
    ctx.bezierCurveTo(38.75,46.821000000000005,39.25,46.375,39.867,46.375);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }

  ,Mouse: function (ctx, coords, direction) {
    var x = coords[0],
        y = coords[1];

    var body_color, ears_color;

    if (Game.mouse.id == 'green-mouse') {
      body_color = '#92e8ad';
      ears_color = '#19bc3c';
    } else if (Game.mouse.id == 'blue-mouse') {
      body_color = '#c2fff9';
      ears_color = '#8acff9';
    } else if (Game.mouse.id == 'yellow-mouse') {
      body_color = '#fffa52';
      ears_color = '#efdf48';
    } else {
      body_color = '#d6b9d2';
      ears_color = '#ffffff';
    }

    // Pink
    // body_color = '#d6b9d2';
    // ears_color = '#ffffff';

    // Orange
    // body_color = '#fcbd4c';
    // ears_color = '#c49d30';

    ctx.save();
    Game.Draw.RotateMouse(x, y, direction, ctx);

    ctx.fillStyle = body_color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(40, 0);
    ctx.lineTo(40, 40);
    ctx.lineTo(0, 40);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0, 0);
    ctx.translate(0, 0);
    ctx.scale(1, 1);
    ctx.translate(9.415, 0);
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;
    ctx.save();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.fillStyle = ears_color;
    ctx.beginPath();
    ctx.moveTo(10.176, 0.215);
    ctx.bezierCurveTo(8.873, 1.6, 8.053, 3.29, 8.961, 5.134);
    ctx.bezierCurveTo(9.993, 7.231, 12.211, 8.816, 10.545, 11.234);
    ctx.bezierCurveTo(10.032, 11.978, 11.243, 12.675, 11.75, 11.939);
    ctx.bezierCurveTo(12.81, 10.402000000000001, 12.857, 8.898, 11.977, 7.272);
    ctx.bezierCurveTo(10.751000000000001, 5.007, 8.88, 3.628, 11.164, 1.2030000000000003);
    ctx.bezierCurveTo(11.778, 0.548, 10.793, -0.44, 10.176, 0.215);
    ctx.lineTo(10.176, 0.215);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
    ctx.save();

    ctx.fillStyle = ears_color;
    ctx.beginPath();
    ctx.moveTo(5.699, 29.068);
    ctx.bezierCurveTo(5.699, 26.336000000000002, 3.484, 24.121000000000002, 0.7509999999999994, 24.121000000000002);
    ctx.bezierCurveTo(0.49399999999999944, 24.121000000000002, 0.24699999999999944, 24.160000000000004, 0.0009999999999994458, 24.197000000000003);
    ctx.bezierCurveTo(0.5729999999999994, 27.051000000000002, 1.9519999999999995, 30.333000000000002, 3.5219999999999994, 33.167);
    ctx.bezierCurveTo(4.834, 32.275, 5.699, 30.773, 5.699, 29.068);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.fillStyle = ears_color;
    ctx.beginPath();
    ctx.moveTo(20.344, 24.122);
    ctx.bezierCurveTo(17.613, 24.122, 15.398000000000001, 26.337, 15.398000000000001, 29.067999999999998);
    ctx.bezierCurveTo(15.398000000000001, 30.796999999999997, 16.290000000000003, 32.315999999999995, 17.633000000000003, 33.199999999999996);
    ctx.bezierCurveTo(19.209000000000003, 30.360999999999997, 20.594, 27.069999999999997, 21.17, 24.205999999999996);
    ctx.bezierCurveTo(20.901, 24.16, 20.627, 24.122, 20.344, 24.122);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(10.586, 9.607);
    ctx.bezierCurveTo(5.264, 9.607, 0.9480000000000004, 15, 0.9480000000000004, 21.652);
    ctx.bezierCurveTo(0.9480000000000004, 22.437, 1.0540000000000005, 23.298000000000002, 1.2360000000000004, 24.197000000000003);
    ctx.bezierCurveTo(1.4820000000000004, 24.159000000000002, 1.7300000000000004, 24.121000000000002, 1.9870000000000005, 24.121000000000002);
    ctx.bezierCurveTo(4.718, 24.121000000000002, 6.9350000000000005, 26.336000000000002, 6.9350000000000005, 29.068);
    ctx.bezierCurveTo(6.9350000000000005, 30.773000000000003, 6.071000000000001, 32.275, 4.757000000000001, 33.168);
    ctx.bezierCurveTo(6.879, 36.994, 9.334, 40, 10.586, 40);
    ctx.bezierCurveTo(11.836, 40, 14.281, 37.012, 16.398, 33.2);
    ctx.bezierCurveTo(15.052, 32.314, 14.161999999999999, 30.797000000000004, 14.161999999999999, 29.068000000000005);
    ctx.bezierCurveTo(14.161999999999999, 26.337000000000003, 16.377, 24.122000000000007, 19.107, 24.122000000000007);
    ctx.bezierCurveTo(19.392, 24.122000000000007, 19.663999999999998, 24.16100000000001, 19.935, 24.206000000000007);
    ctx.bezierCurveTo(20.116999999999997, 23.305000000000007, 20.221999999999998, 22.441000000000006, 20.221999999999998, 21.652000000000008);
    ctx.bezierCurveTo(20.222, 15, 15.908, 9.607, 10.586, 9.607);
    ctx.closePath();
    ctx.moveTo(8.43, 35.441);
    ctx.bezierCurveTo(7.914, 35.441, 7.4959999999999996, 35.023, 7.4959999999999996, 34.506);
    ctx.bezierCurveTo(7.4959999999999996, 33.988, 7.914, 33.569, 8.43, 33.569);
    ctx.bezierCurveTo(8.947, 33.569, 9.366, 33.988, 9.366, 34.506);
    ctx.bezierCurveTo(9.365, 35.023, 8.946, 35.441, 8.43, 35.441);
    ctx.closePath();
    ctx.moveTo(12.509, 35.441);
    ctx.bezierCurveTo(11.993, 35.441, 11.573, 35.023, 11.573, 34.506);
    ctx.bezierCurveTo(11.573, 33.988, 11.993, 33.569, 12.509, 33.569);
    ctx.bezierCurveTo(13.027000000000001, 33.569, 13.445, 33.988, 13.445, 34.506);
    ctx.bezierCurveTo(13.445, 35.023, 13.027, 35.441, 12.509, 35.441);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.restore();
  }

  ,RotateMouse: function (x, y, direction, ctx) {
    switch (direction) {
      case "down": ctx.translate(x, y);
        break;
      case "left": ctx.translate(x + 40, y);
        ctx.rotate(90 * Math.PI / 180);
        break;
      case "up": ctx.translate(x + 40, y + 40);
        ctx.rotate(180 * Math.PI / 180);
        break;
      case "right":
        ctx.translate(x, y + 40);
        ctx.rotate(-90 * Math.PI / 180);
        break;
    }

  }

}

Game.Map = {
  // p = point
  // g = grass
  // x = occupied space
  // bl = blue tree
  // gr = green tree
  // na = naked tree
  // or = orange tree
  // 0 = empty space
  // 1 = cheese
  easy: [
    ['p',0,0,'g',0,0,0,0,'g','p','g',0,0,'g','p','g',0,0,0,0,0,0,0,'na','x'],
    ['p',0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,'x','x'],
    ['p',0,0,'gr','x',0,0,0,0,0,0,0,'or','x',0,0,0,0,0,0,'g','p',1,'p','g'],
    [0,0,0,'x','x',0,0,'na','x',0,0,0,'x','x',0,0,0,'g','g',0,'g','p',1,'p','g'],
    [0,0,0,0,0,0,0,'x','x',0,0,'gr','x',0,0,0,1,'p','g',0,0,0,1,0,0],
    [1,0,0,0,'gr','x',0,0,0,0,0,'x','x',0,0,0,0,'g','g',0,0,0,0,0,0],
    [0,0,0,0,'x','x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ['bl','x',0,0,0,0,'bl','x',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ['x','x',0,0,0,0,'x','x',0,1,0,0,0,0,1,0,0,'g',0,0,0,0,0,0,0],
    [0,'g','g','g',0,0,0,0,0,0,0,0,0,0,0,0,0,'g','g',0,1,'g',0,0,0],
    ['g',0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,'g','p',0,0,0,0,0,0],
    ['g',1,'g','g','g',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'g',1,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,'gr','x',0,0,0,'p','g',0,0,'p','g',0,0,0],
    [0,'p','p','g',1,0,0,0,0,0,1,'x','x',0,'g','g','g','g',0,'g','g','g',0,0,0],
    ['g','p','p','g',0,0,0,0,0,0,0,0,0,0,'g','p',0,1,0,1,'p','p',1,0,0],
  ],

  hard: [
    ['p','p','p','g','g','g','p','p',0,0,'g','g',0,0,0,0,'p','p','bl','x','p','gr','x',0,'p'],
    [0,0,0,0,'p','g',0,0,0,0,0,0,0,0,0,0,'p','p','x','x','p','x','x',0,'p'],
    ['g',0,0,0,0,0,1,1,1,0,'g',0,0,1,0,'bl','x','bl','x',0,0,1,0,0,0],
    [0,'g',0,1,1,1,0,0,0,0,'g','g',0,1,0,'x','x','x','x',1,1,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,'g','g',0,1,1,0,0,1,0,0,0,0,'g','or','x'],
    [0,0,1,0,'gr','x',0,0,0,0,'g','g',0,0,0,0,'na','na',0,'g',0,0,'g','x','x'],
    ['p',0,'g','g','x','x','or','x',0,0,0,'g','g',0,0,0,'x','x',0,'gr','x',0,0,0,'g'],
    ['p','g',0,0,0,0,'x','x','or','x',0,0,0,'g',0,0,0,0,0,'x','x','gr','x',0,'g'],
    ['p',0,0,1,0,0,0,0,'x','x',0,0,0,0,0,0,0,0,0,0,'g','x','x',0,'g'],
    ['g',0,0,0,'gr','x',0,0,0,0,0,1,0,0,'na',0,0,1,0,1,0,0,0,0,'g'],
    ['bl','x',0,'g','x','x',1,0,0,0,1,1,1,0,'x',0,0,0,1,0,0,0,0,0,'g'],
    ['x','x',0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,'g',0,0,0,'gr','x'],
    [0,0,0,'g',1,0,0,0,0,0,1,0,0,'bl','x',0,'g',0,0,0,0,1,0,'x','x'],
    [0,0,0,'g',0,0,'bl','x','p','p',0,0,0,'x','x',0,0,'g','g',0,0,0,0,0,'p'],
    ['g','p','p','p',0,0,'x','x','g','g','g',0,0,'p','p','p','p','g','g','g','g','g','p','p','p']
    ],

  expert: [
    ['p','g','g','g',0,0,0,0,0,0,'g','p','g','p','g',0,0,0,0,0,0,0,'g','p',0],
    ['p','p','p',0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,'or','x',1,0,0,'p'],
    [0,0,0,0,0,0,0,'na','x',0,0,0,0,0,'bl','x',0,0,0,'x','x',0,1,0,'g'],
    ['g','g',0,0,0,1,0,'x','x','g','g','g','g','g','x','x',0,0,0,0,0,0,1,0,'p'],
    [0,0,'gr','x',0,0,0,0,'g','p','p','p','p','p','g',0,0,0,0,0,1,'gr','x',0,'p'],
    [0,1,'x','x',0,0,0,'g','p',1,1,1,1,1,'p','g',0,0,0,0,0,'x','x',0,'p'],
    [0,0,1,0,0,1,0,'g','p',1,0,0,0,1,'p','g',0,0,'or','x',0,'g',0,1,'p'],
    [0,0,0,0,0,0,0,'g','p',1,0,1,0,1,'p','g',0,0,'x','x',1,'g',0,1,0],
    ['or','x',0,0,0,0,0,'g','p',1,0,0,0,1,'p','g',0,0,0,0,0,'g',0,0,1],
    ['x','x',1,0,0,0,0,'g','p',1,0,0,0,1,'p','g',0,0,0,0,0,'g',0,1,0],
    ['p',0,1,0,0,0,0,0,'g','p',1,1,1,'p','g',0,0,0,0,0,0,0,'p','p','p'],
    ['p',0,0,0,'na','x',0,0,0,'g',0,1,0,'g',0,0,0,0,0,0,0,0,'g','g','g'],
    ['g',0,1,0,'x','x',0,0,0,0,0,0,0,0,0,1,0,0,'bl','x',0,0,'p','p','g'],
    ['p',0,0,1,0,0,0,0,0,'gr','x',0,'gr','x',0,0,1,0,'x','x',0,0,'g','g','g'],
    [0,'p','g',0,0,0,0,0,0,'x','x','p','x','x',0,0,0,0,1,0,0,0,0,0,'p'],
  ]
  
}

Game.Score = {

  // Add scores method
  add : function (showScore) {
    var forest = document.getElementById("the-canvas"),
        ctx = forest.getContext("2d"),
        score = 0;

    ctx.font = "22px Verdana";
    ctx.fillStyle = "#F7931E";
    ctx.textAlign = "left";
    ctx.fillText("SCORE: " + parseInt(score), 489, 30);

  }

  // Remove scores method
  ,remove : function (clearScore) {
    if (keycode === restartCode && restartTimer > 0) {
      restartTimer = 0;
      gameOn = true;
      gamePaused = false;
      score = 0;
      initApp();
      run();
    }
  }

  // Double the scores on certain conditions
  ,double : function (doubleScore) {
    if(certainConditions){
      score= score* 2;
    }
  }

  // Print result
  ,print : function () {}


}

Game.Screen = {

  // Switch between game screens
  load : function ( game_screen ) {
    Game.game_wrap.addClass('active');

    switch (game_screen) {
      case 'mice':
        Game.game_wrap.load('mice.html');
        break;
      case 'levels':
        Game.game_wrap.load('levels.html');
        break;
      case 'scores':
        Game.game_wrap.load('highscores.html');
        break;
      case 'game':
        // Get forest map
        Game.forest = Game.Map[Game.level];
        //console.log( Game.forest );
        // TODO: Draw mouse at center position
        // TODO: Draw trees and grasses
        // TODO: Draw target points
        // TODO: Draw cheese on separate canvas
        Game.game_wrap.load('game.html', function(){
          Game.Canvas.init();
          // TODO: Display game Start button
          // TODO: Implement Timer and game Pause button
        });
        break;
      default:
        Game.game_wrap.load('intro.html');
        break;
    }
  }



  // TODO: Change game level on certain conditions
  ,change : function () {}


  // TODO: End game level on certain conditions
  ,end : function () {}


}

Game.Timer = {
  timerBreak: false,

  init : function ( timer ) {
    var ctx = timer.getContext('2d');
    var cWidth = timer.width;
    var cHeight = timer.height;
    var breakTimerFromOutside = false;
    var countTo = 50; // 300

    var min = Math.floor(countTo / 60);
    var sec = countTo - (min * 60);
    var counter = 0;
    var angle = 270;
    var inc = 360 / countTo;

    var refreshId = setInterval(function(){
      //======= reset timer
      // ctx.fillStyle="#786f5b";
      var gradient = ctx.createRadialGradient(130, 130, 5, 90, 90, 150);
      gradient.addColorStop(0, '#4f525e');
      gradient.addColorStop(1, '#333543');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, cWidth, cHeight);

      //========== base arc
      ctx.beginPath();
      ctx.strokeStyle = "#252424";
      ctx.lineWidth = 14;
      ctx.arc(cWidth / 2, cHeight / 2, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
      ctx.stroke();
      ctx.closePath();

      //========== dynamic arc
      ctx.beginPath();
      ctx.strokeStyle = "#df8209";
      ctx.lineWidth = 14;
      ctx.arc(cWidth / 2, cHeight / 2, 100, (Math.PI / 180) * 270, (Math.PI / 180) * angle, false);
      ctx.stroke();
      ctx.closePath();

      //======== inner shadow arc
      grad = ctx.createRadialGradient(cWidth / 2, cHeight / 2, 80, cWidth / 2, cHeight / 2, 115);

      grad.addColorStop(0.0, 'rgba(0,0,0,.4)');
      grad.addColorStop(0.5, 'rgba(0,0,0,0)');
      grad.addColorStop(1.0, 'rgba(0,0,0,0.4)');

      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 14;
      ctx.arc(cWidth / 2, cHeight / 2, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
      ctx.stroke();
      ctx.closePath();

      //======== bevel arc
      grad = ctx.createLinearGradient(cWidth / 2, 0, cWidth / 2, cHeight);
      grad.addColorStop(0.0, '#6c6f72');
      grad.addColorStop(0.5, '#252424');

      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.arc(cWidth / 2, cHeight / 2, 93, (Math.PI / 180) * 0, (Math.PI / 180) * 360, true);
      ctx.stroke();
      ctx.closePath();

      //====== emboss arc
      grad = ctx.createLinearGradient(cWidth / 2, 0, cWidth / 2, cHeight);
      grad.addColorStop(0.0, 'transparent');
      grad.addColorStop(0.98, '#6c6f72');

      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.arc(cWidth / 2, cHeight / 2, 107, (Math.PI / 180) * 0, (Math.PI / 180) * 360, true);
      ctx.stroke();
      ctx.closePath();

      //====== Labels
      var textColor = 'white';
      var textSize = "12";
      var fontFace = "helvetica, arial, sans-serif";

      ctx.fillStyle = textColor;
      ctx.font = textSize + "px " + fontFace;
      ctx.fillText('MIN', cWidth / 2 - 46, cHeight / 2 - 40);
      ctx.fillText('SEC', cWidth / 2 + 25, cHeight / 2 - 15);

      //====== Values
      ctx.fillStyle = '#65ae52';
      if (Game.Timer.timerBreak) {
        clearInterval(refreshId);
        return;
      }
      if (min == 0 && sec == 0) {
        var message = "Your time is up! Your score is " + $("#score").text();
        $('#popup .message').text( message );
        $('#popup').removeClass('hidden');

        clearInterval(refreshId);
        timerBreak = true;
        return;
      }
      if (min > 9) {
        ctx.font = '84px ' + fontFace;
        ctx.fillText('9', cWidth / 2 - 55, cHeight / 2 + 35);

        ctx.font = '24px ' + fontFace;
        ctx.fillText('+', cWidth / 2 - 72, cHeight / 2 - 5);
      }
      else {
        ctx.font = '84px ' + fontFace;
        ctx.fillText(min, cWidth / 2 - 60, cHeight / 2 + 35);
      }

      ctx.font = '50px ' + fontFace;
      if (sec < 10) {
        ctx.fillText('0' + sec, cWidth / 2 + 10, cHeight / 2 + 35);
      }
      else {
        ctx.fillText(sec, cWidth / 2 + 10, cHeight / 2 + 35);
      }


      if (sec <= 0 && counter < countTo) {
        angle += inc;
        counter++;
        min--;
        sec = 59;
      } else if (counter >= countTo) {
        sec = 0;
        min = 0;
      } else {
        angle += inc;
        counter++;
        sec--;
      }

    }, 1000);

  }


}
