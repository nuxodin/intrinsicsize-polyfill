/* Copyright (c) 2016 Tobias Buschor https://goo.gl/gl0mbf | MIT License https://goo.gl/HgajeK */
!function(){"use strict";var e,t=[],n=document.documentElement;function r(e,t){var r,s=0,o=[];for(t&&t.matches(e.selector)&&o.push(t),c&&Array.prototype.push.apply(o,(t||n).querySelectorAll(e.selector));r=o[s++];)e.elements.has(r)||(e.elements.set(r,!0),e.connectedCallback.call(r,r))}function s(e){for(var n,s=0;n=t[s++];)r(n,e)}function o(e){for(var t,n,r,o,c=0;n=e[c++];)for(r=n.addedNodes,t=0;o=r[t++];)1===o.nodeType&&s(o)}HTMLElement.prototype.matches||(HTMLElement.prototype.matches=HTMLElement.prototype.msMatchesSelector),window.c1_onElement=function(s,c){for(var l,i={selector:s,connectedCallback:function(e){requestAnimationFrame(function(){c(e)})},elements:new WeakMap},a=n.querySelectorAll(i.selector),m=0;l=a[m++];)i.elements.set||console.warn("no weakmap? listener.elements.set: "+i.elements.set+" | listener.elements: "+i.elements),i.elements.set(l,!0),i.connectedCallback.call(l,l);t.push(i),e||(e=new MutationObserver(o)).observe(n,{childList:!0,subtree:!0}),r(i)};var c=!1;document.addEventListener("DOMContentLoaded",function(){c=!0})}(),function(){"use strict";if(!("intrinsincsize"in HTMLImageElement.prototype)){var e=function(){this.removeEventListener("load",e),this.removeEventListener("error",e),this.src=this.c1RealSrc};c1_onElement("img[intrinsicsize]",function(t){if(!t.complete){var n=t.getAttribute("intrinsicsize").split("x"),r=n[0],s=n[1];t.c1RealSrc||(t.c1RealSrc=t.src,t.addEventListener("load",e),t.addEventListener("error",e),t.src="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="'+r+'" height="'+s+'" style="background:rgba(200,200,200,.1);"></svg>'))}})}}();
