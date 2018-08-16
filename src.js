/* Copyright (c) 2016 Tobias Buschor https://goo.gl/gl0mbf | MIT License https://goo.gl/HgajeK */

!function(){ 'use strict';

var listeners = [],
    root = document.documentElement,
    Observer;

c1.onElement = function(selector, connectedCallback/*, disconnectedCallback*/) {
    var listener = {
        selector: selector,
        //connectedCallback: connectedCallback,
        connectedCallback: function(el){ // neu, ok?
			requestAnimationFrame(function(){
				connectedCallback(el);
			});
		},
        //disconnectedCallback: disconnectedCallback,
        elements: new WeakMap(), // WeakSet would be better, but no support in ie11
    };

    var els = root.querySelectorAll(listener.selector), i=0, el;
    while (el = els[i++]) {
        if (!listener.elements.set) {
            console.warn('no weakmap? listener.elements.set: '+(listener.elements.set)+' | listener.elements: '+listener.elements);
        }
        listener.elements.set(el,true);
        listener.connectedCallback.call(el, el);
    }

    listeners.push(listener);
    if (!Observer) {
        Observer = new MutationObserver(checkMutations);
        Observer.observe(root, {
            childList: true,
            subtree: true
        });
    }
    checkListener(listener);
};
function checkListener(listener, target) {
    var i=0, el, els = [];
    target && target.matches(listener.selector) && els.push(target);
    if (loaded) { // ok? check inside node on innerHTML - only when loaded
        Array.prototype.push.apply(els, (target||root).querySelectorAll(listener.selector));
    }
    while (el = els[i++]) {
        if (listener.elements.has(el)) continue;
        listener.elements.set(el,true);
        listener.connectedCallback.call(el, el);
    }
}
function checkListeners(inside) {
    var i=0, listener;
    while (listener = listeners[i++]) checkListener(listener, inside);
}
function checkMutations(mutations) {
    var j=0, i, mutation, nodes, target;
    while (mutation = mutations[j++]) {
        nodes = mutation.addedNodes, i=0;
        while (target=nodes[i++]) target.nodeType === 1 && checkListeners(target);
    }
}

var loaded = false;
document.addEventListener('DOMContentLoaded',function(){
    loaded = true;
});

}();



!function(){ 'use strict';

var listener = function(){
    this.removeEventListener('load',listener);
    this.removeEventListener('error',listener);
  	this.src = this.c1RealSrc;
};
function render(el){
    if (el.complete) return;
    var sizes = el.getAttribute('intrinsicsize').split('x');
    var width = sizes[0];
    var height = sizes[1];
    if (!ratio) return;
    if (el.c1RealSrc) return;
    el.c1RealSrc = el.src;
    el.addEventListener('load',listener);
    el.addEventListener('error',listener); // not working in ie 11, bad browser
    el.src = 'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="'+width+'" height="'+height+'" style="background:rgba(200,200,200,.1);"></svg>');
}
c1_onElement('img[intrinsicsize]',render);

}();


