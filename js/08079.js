/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-canvas-cssfilters-csstransforms-csstransforms3d-fullscreen-geolocation-hashchange-history-inlinesvg-localstorage-objectfit-sessionstorage-svg-svgclippaths-touchevents-video-videoautoplay-addtest-domprefixes-hasevent-mq-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,A,t){function n(e){var A=F.className,t=Modernizr._config.classPrefix||"";if(C&&(A=A.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");A=A.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(A+=" "+t+e.join(" "+t),C?F.className.baseVal=A:F.className=A)}function o(e,A){return typeof e===A}function r(){var e,A,t,n,r,a,i;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],A=w[l],A.name&&(e.push(A.name.toLowerCase()),A.options&&A.options.aliases&&A.options.aliases.length))for(t=0;t<A.options.aliases.length;t++)e.push(A.options.aliases[t].toLowerCase());for(n=o(A.fn,"function")?A.fn():A.fn,r=0;r<e.length;r++)a=e[r],i=a.split("."),1===i.length?Modernizr[i[0]]=n:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=n),E.push((n?"":"no-")+i.join("-"))}}function a(e,A){if("object"==typeof e)for(var t in e)x(e,t)&&a(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;A="function"==typeof A?A():A,1==o.length?Modernizr[o[0]]=A:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=A),n([(A&&0!=A?"":"no-")+o.join("-")]),Modernizr._trigger(e,A)}return Modernizr}function i(){return"function"!=typeof A.createElement?A.createElement(arguments[0]):C?A.createElementNS.call(A,"http://www.w3.org/2000/svg",arguments[0]):A.createElement.apply(A,arguments)}function l(){var e=A.body;return e||(e=i(C?"svg":"body"),e.fake=!0),e}function s(e,t,n,o){var r,a,s,c,u="modernizr",d=i("div"),f=l();if(parseInt(n,10))for(;n--;)s=i("div"),s.id=o?o[n]:u+(n+1),d.appendChild(s);return r=i("style"),r.type="text/css",r.id="s"+u,(f.fake?f:d).appendChild(r),f.appendChild(d),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(A.createTextNode(e)),d.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",c=F.style.overflow,F.style.overflow="hidden",F.appendChild(f)),a=t(d,e),f.fake?(f.parentNode.removeChild(f),F.style.overflow=c,F.offsetHeight):d.parentNode.removeChild(d),!!a}function c(e,A){return!!~(""+e).indexOf(A)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,A,t){return A+t.toUpperCase()}).replace(/^-/,"")}function d(e,A){return function(){return e.apply(A,arguments)}}function f(e,A,t){var n;for(var r in e)if(e[r]in A)return t===!1?e[r]:(n=A[e[r]],o(n,"function")?d(n,t||A):n);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,A){return"-"+A.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(A,t,n){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,A,t);var r=e.console;if(null!==o)n&&(o=o.getPropertyValue(n));else if(r){var a=r.error?"error":"log";r[a].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&A.currentStyle&&A.currentStyle[n];return o}function m(A,n){var o=A.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(A[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+p(A[o])+":"+n+")");return r=r.join(" or "),s("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return t}function g(e,A,n,r){function a(){s&&(delete N.style,delete N.modElem)}if(r=o(r,"undefined")?!1:r,!o(n,"undefined")){var l=m(e,n);if(!o(l,"undefined"))return l}for(var s,d,f,p,h,g=["modernizr","tspan","samp"];!N.style&&g.length;)s=!0,N.modElem=i(g.shift()),N.style=N.modElem.style;for(f=e.length,d=0;f>d;d++)if(p=e[d],h=N.style[p],c(p,"-")&&(p=u(p)),N.style[p]!==t){if(r||o(n,"undefined"))return a(),"pfx"==A?p:!0;try{N.style[p]=n}catch(v){}if(N.style[p]!=h)return a(),"pfx"==A?p:!0}return a(),!1}function v(e,A,t,n,r){var a=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+Y.join(a+" ")+a).split(" ");return o(A,"string")||o(A,"undefined")?g(i,A,n,r):(i=(e+" "+S.join(a+" ")+a).split(" "),f(i,A,t))}function y(e,A,n){return v(e,t,t,A,n)}var E=[],w=[],T={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,A){var t=this;setTimeout(function(){A(t[e])},0)},addTest:function(e,A,t){w.push({name:e,fn:A,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var A=navigator.userAgent;return-1===A.indexOf("Android 2.")&&-1===A.indexOf("Android 4.0")||-1===A.indexOf("Mobile Safari")||-1!==A.indexOf("Chrome")||-1!==A.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("svg",!!A.createElementNS&&!!A.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(A){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(A){return!1}});var R=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=R;var F=A.documentElement,C="svg"===F.nodeName.toLowerCase();C||!function(e,A){function t(e,A){var t=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return t.innerHTML="x<style>"+A+"</style>",n.insertBefore(t.lastChild,n.firstChild)}function n(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,A){var t=y.elements;"string"!=typeof t&&(t=t.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=t+" "+e,s(A)}function r(e){var A=v[e[m]];return A||(A={},g++,e[m]=g,v[g]=A),A}function a(e,t,n){if(t||(t=A),u)return t.createElement(e);n||(n=r(t));var o;return o=n.cache[e]?n.cache[e].cloneNode():h.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:n.frag.appendChild(o)}function i(e,t){if(e||(e=A),u)return e.createDocumentFragment();t=t||r(e);for(var o=t.frag.cloneNode(),a=0,i=n(),l=i.length;l>a;a++)o.createElement(i[a]);return o}function l(e,A){A.cache||(A.cache={},A.createElem=e.createElement,A.createFrag=e.createDocumentFragment,A.frag=A.createFrag()),e.createElement=function(t){return y.shivMethods?a(t,e,A):A.createElem(t)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return A.createElem(e),A.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,A.frag)}function s(e){e||(e=A);var n=r(e);return!y.shivCSS||c||n.hasCSS||(n.hasCSS=!!t(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||l(e,n),e}var c,u,d="3.7.3",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=A.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){A.createElement("a");var e=A.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){c=!0,u=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i,addElements:o};e.html5=y,s(A),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,A);var B="Moz O ms Webkit",S=T._config.usePrefixes?B.toLowerCase().split(" "):[];T._domPrefixes=S;var x;!function(){var e={}.hasOwnProperty;x=o(e,"undefined")||o(e.call,"undefined")?function(e,A){return A in e&&o(e.constructor.prototype[A],"undefined")}:function(A,t){return e.call(A,t)}}(),T._l={},T.on=function(e,A){this._l[e]||(this._l[e]=[]),this._l[e].push(A),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},T._trigger=function(e,A){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,n;for(e=0;e<t.length;e++)(n=t[e])(A)},0),delete this._l[e]}},Modernizr._q.push(function(){T.addTest=a});var G=function(){function e(e,A){var o;return e?(A&&"string"!=typeof A||(A=i(A||"div")),e="on"+e,o=e in A,!o&&n&&(A.setAttribute||(A=i("div")),A.setAttribute(e,""),o="function"==typeof A[e],A[e]!==t&&(A[e]=t),A.removeAttribute(e)),o):!1}var n=!("onblur"in A.documentElement);return e}();T.hasEvent=G,Modernizr.addTest("hashchange",function(){return G("hashchange",e)===!1?!1:A.documentMode===t||A.documentMode>7}),Modernizr.addTest("audio",function(){var e=i("audio"),A=!1;try{A=!!e.canPlayType,A&&(A=new Boolean(A),A.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),A.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),A.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),A.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),A.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return A}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=i("video"),A=!1;try{A=!!e.canPlayType,A&&(A=new Boolean(A),A.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),A.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),A.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),A.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),A.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return A}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addAsyncTest(function(){function e(i){o++,clearTimeout(A);var l=i&&"playing"===i.type||0!==r.currentTime;return!l&&n>o?void(A=setTimeout(e,t)):(r.removeEventListener("playing",e,!1),a("videoautoplay",l),void(r.parentNode&&r.parentNode.removeChild(r)))}var A,t=200,n=5,o=0,r=i("video"),l=r.style;if(!(Modernizr.video&&"autoplay"in r))return void a("videoautoplay",!1);l.position="absolute",l.height=0,l.width=0;try{if(Modernizr.video.ogg)r.src="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A";else{if(!Modernizr.video.h264)return void a("videoautoplay",!1);r.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(s){return void a("videoautoplay",!1)}r.setAttribute("autoplay",""),l.cssText="display:none",F.appendChild(r),setTimeout(function(){r.addEventListener("playing",e,!1),A=setTimeout(e,t)},0)});var b="CSS"in e&&"supports"in e.CSS,M="supportsCSS"in e;Modernizr.addTest("supports",b||M);var Q={}.toString;Modernizr.addTest("svgclippaths",function(){return!!A.createElementNS&&/SVGClipPath/.test(Q.call(A.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var P=function(){var A=e.matchMedia||e.msMatchMedia;return A?function(e){var t=A(e);return t&&t.matches||!1}:function(A){var t=!1;return s("@media "+A+" { #modernizr { position: absolute; } }",function(A){t="absolute"==(e.getComputedStyle?e.getComputedStyle(A,null):A.currentStyle).position}),t}}();T.mq=P;var Z=T.testStyles=s;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&A instanceof DocumentTouch)t=!0;else{var n=["@media (",R.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");Z(n,function(e){t=9===e.offsetTop})}return t});var Y=T._config.usePrefixes?B.split(" "):[];T._cssomPrefixes=Y;var U=function(A){var n,o=R.length,r=e.CSSRule;if("undefined"==typeof r)return t;if(!A)return!1;if(A=A.replace(/^@/,""),n=A.replace(/-/g,"_").toUpperCase()+"_RULE",n in r)return"@"+A;for(var a=0;o>a;a++){var i=R[a],l=i.toUpperCase()+"_"+n;if(l in r)return"@-"+i.toLowerCase()+"-"+A}return!1};T.atRule=U;var V={elem:i("modernizr")};Modernizr._q.push(function(){delete V.elem});var N={style:V.elem.style};Modernizr._q.unshift(function(){delete N.style});T.testProp=function(e,A,n){return g([e],t,A,n)};T.testAllProps=v,T.testAllProps=y,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=i("a");return e.style.cssText=R.join("filter:blur(2px); "),!!e.style.length&&(A.documentMode===t||A.documentMode>9)}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)});var I=T.prefixed=function(e,A,t){return 0===e.indexOf("@")?U(e):(-1!=e.indexOf("-")&&(e=u(e)),A?v(e,A,t):v(e,"pfx"))};Modernizr.addTest("fullscreen",!(!I("exitFullscreen",A,!1)&&!I("cancelFullScreen",A,!1))),Modernizr.addTest("objectfit",!!I("objectFit"),{aliases:["object-fit"]}),r(),n(E),delete T.addTest,delete T.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);