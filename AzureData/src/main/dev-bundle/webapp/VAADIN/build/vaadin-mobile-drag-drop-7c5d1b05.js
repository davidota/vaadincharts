import{c as $,g as tt}from"./generated-flow-imports-1247fba6.js";import"./indexhtml-b802c514.js";var A={exports:{}};(function(x,E){(function(y,c){c(E)})($,function(y){var c="dnd-poly-",u=c+"drag-image",m=c+"snapback",v=c+"icon",g="dnd-poly-",T=g+"dragstart-pending",X=g+"dragstart-cancel",h=["none","copy","copyLink","copyMove","link","linkMove","move","all"],d=["none","copy","move","link"];function G(){var e={dragEvents:"ondragstart"in document.documentElement,draggable:"draggable"in document.documentElement,userAgentSupportingNativeDnD:void 0},t=!!window.chrome||/chrome/i.test(navigator.userAgent);return e.userAgentSupportingNativeDnD=!(/iPad|iPhone|iPod|Android/.test(navigator.userAgent)||t&&"ontouchstart"in document.documentElement),e}function U(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch{}return e}var L=U();function S(e){return e&&e.tagName}function D(e,t,r){r===void 0&&(r=!0),document.addEventListener(e,t,L?{passive:r}:!1)}function b(e,t){document.removeEventListener(e,t)}function O(e,t,r,a){a===void 0&&(a=!1);var o=L?{passive:!0,capture:a}:a;return e.addEventListener(t,r,o),{off:function(){e.removeEventListener(t,r,o)}}}function F(e,t){if(e.nodeType===1){for(var r=getComputedStyle(e),a=0;a<r.length;a++){var o=r[a];t.style.setProperty(o,r.getPropertyValue(o),r.getPropertyPriority(o))}if(t.style.pointerEvents="none",t.removeAttribute("id"),t.removeAttribute("class"),t.removeAttribute("draggable"),t.nodeName==="CANVAS"){var n=e,i=t,l=n.getContext("2d").getImageData(0,0,n.width,n.height);i.getContext("2d").putImageData(l,0,0)}}if(e.hasChildNodes())for(var a=0;a<e.childNodes.length;a++)F(e.childNodes[a],t.childNodes[a])}function Y(e){var t=e.cloneNode(!0);return F(e,t),t}function k(e){return e.length===0?0:e.reduce(function(t,r){return r+t},0)/e.length}function N(e,t){for(var r=0;r<e.changedTouches.length;r++){var a=e.changedTouches[r];if(a.identifier===t)return!0}return!1}function C(e,t,r){for(var a=[],o=[],n=0;n<t.touches.length;n++){var i=t.touches[n];a.push(i[e+"X"]),o.push(i[e+"Y"])}r.x=k(a),r.y=k(o)}var P=["","-webkit-"];function j(e){return P.map(function(t){var r=e.style[t+"transform"];return!r||r==="none"?"":r.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g,"")})}function I(e,t,r,a,o){o===void 0&&(o=!0);var n=t.x,i=t.y;a&&(n+=a.x,i+=a.y),o&&(n-=parseInt(e.offsetWidth,10)/2,i-=parseInt(e.offsetHeight,10)/2);for(var l="translate3d("+n+"px,"+i+"px, 0)",s=0;s<P.length;s++){var _=P[s]+"transform";e.style[_]=l+" "+r[s]}}function B(e,t,r,a){var o=getComputedStyle(e);if(o.visibility==="hidden"||o.display==="none"){console.log("dnd-poly: source node is not visible. skipping snapback transition."),a();return}t.classList.add(m);var n=getComputedStyle(t),i=parseFloat(n.transitionDuration);if(isNaN(i)||i===0){console.log("dnd-poly: no transition used - skipping snapback"),a();return}console.log("dnd-poly: starting dragimage snap back");var l=e.getBoundingClientRect(),s={x:l.left,y:l.top};s.x+=document.body.scrollLeft||document.documentElement.scrollLeft,s.y+=document.body.scrollTop||document.documentElement.scrollTop,s.x-=parseInt(o.marginLeft,10),s.y-=parseInt(o.marginTop,10);var _=parseFloat(n.transitionDelay),Z=Math.round((i+_)*1e3);I(t,s,r,void 0,!1),setTimeout(a,Z)}var z=function(){function e(t,r){this._dataStore=t,this._setDragImageHandler=r,this._dropEffect=d[0]}return Object.defineProperty(e.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(t){this._dataStore.mode!==0&&h.indexOf(t)>-1&&(this._dropEffect=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"types",{get:function(){if(this._dataStore.mode!==0)return Object.freeze(this._dataStore.types)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"effectAllowed",{get:function(){return this._dataStore.effectAllowed},set:function(t){this._dataStore.mode===2&&h.indexOf(t)>-1&&(this._dataStore.effectAllowed=t)},enumerable:!0,configurable:!0}),e.prototype.setData=function(t,r){if(this._dataStore.mode===2){if(t.indexOf(" ")>-1)throw new Error("illegal arg: type contains space");this._dataStore.data[t]=r,this._dataStore.types.indexOf(t)===-1&&this._dataStore.types.push(t)}},e.prototype.getData=function(t){if(this._dataStore.mode===1||this._dataStore.mode===2)return this._dataStore.data[t]||""},e.prototype.clearData=function(t){if(this._dataStore.mode===2){if(t&&this._dataStore.data[t]){delete this._dataStore.data[t];var r=this._dataStore.types.indexOf(t);r>-1&&this._dataStore.types.splice(r,1);return}this._dataStore.data={},this._dataStore.types=[]}},e.prototype.setDragImage=function(t,r,a){this._dataStore.mode===2&&this._setDragImageHandler(t,r,a)},e}();function W(e){var t=e.target;do if(t.draggable!==!1&&(t.draggable===!0||t.getAttribute&&t.getAttribute("draggable")==="true"))return t;while((t=t.parentNode)&&t!==document.body)}function R(e,t){return e?e===h[0]?d[0]:e.indexOf(h[1])===0||e===h[7]?d[1]:e.indexOf(h[4])===0?d[3]:e===h[6]?d[2]:d[1]:t.nodeType===3&&t.tagName==="A"?d[3]:d[1]}function K(e,t,r,a,o,n,i){i===void 0&&(i=null);var l=t.changedTouches[0],s=new Event(r,{bubbles:!0,cancelable:a});s.dataTransfer=n,s.relatedTarget=i,s.screenX=l.screenX,s.screenY=l.screenY,s.clientX=l.clientX,s.clientY=l.clientY,s.pageX=l.pageX,s.pageY=l.pageY;var _=e.getBoundingClientRect();return s.offsetX=s.clientX-_.left,s.offsetY=s.clientY-_.top,s}function f(e,t,r,a,o,n,i){n===void 0&&(n=!0),i===void 0&&(i=null),console.log("dnd-poly: dispatching "+e);var l=K(t,r,e,n,document.defaultView,o,i),s=!t.dispatchEvent(l);return a.mode=0,s}function M(e,t){if(!e||e===h[7])return t;if(t===d[1]){if(e.indexOf(d[1])===0)return d[1]}else if(t===d[3]){if(e.indexOf(d[3])===0||e.indexOf("Link")>-1)return d[3]}else if(t===d[2]&&(e.indexOf(d[2])===0||e.indexOf("Move")>-1))return d[2];return d[0]}var q=function(){function e(t,r,a,o){this._initialEvent=t,this._config=r,this._sourceNode=a,this._dragOperationEndedCb=o,this._dragOperationState=0,this._immediateUserSelection=null,this._currentDropTarget=null,console.log("dnd-poly: setting up potential drag operation.."),this._lastTouchEvent=t,this._initialTouch=t.changedTouches[0],this._touchMoveHandler=this._onTouchMove.bind(this),this._touchEndOrCancelHandler=this._onTouchEndOrCancel.bind(this),D("touchmove",this._touchMoveHandler,!1),D("touchend",this._touchEndOrCancelHandler,!1),D("touchcancel",this._touchEndOrCancelHandler,!1)}return e.prototype._setup=function(){var t=this;console.log("dnd-poly: starting drag and drop operation"),this._dragOperationState=1,this._currentDragOperation=d[0],this._dragDataStore={data:{},effectAllowed:void 0,mode:3,types:[]},this._currentHotspotCoordinates={x:null,y:null},this._dragImagePageCoordinates={x:null,y:null};var r=this._sourceNode;if(this._dataTransfer=new z(this._dragDataStore,function(i,l,s){r=i,(typeof l=="number"||typeof s=="number")&&(t._dragImageOffset={x:l||0,y:s||0})}),this._dragDataStore.mode=2,this._dataTransfer.dropEffect=d[0],f("dragstart",this._sourceNode,this._lastTouchEvent,this._dragDataStore,this._dataTransfer))return console.log("dnd-poly: dragstart cancelled"),this._dragOperationState=3,this._cleanup(),!1;C("page",this._lastTouchEvent,this._dragImagePageCoordinates);var a=this._config.dragImageSetup(r);if(this._dragImageTransforms=j(a),a.style.position="absolute",a.style.left="0px",a.style.top="0px",a.style.zIndex="999999",a.classList.add(u),a.classList.add(v),this._dragImage=a,!this._dragImageOffset)if(this._config.dragImageOffset)this._dragImageOffset={x:this._config.dragImageOffset.x,y:this._config.dragImageOffset.y};else if(this._config.dragImageCenterOnTouch){var o=getComputedStyle(r);this._dragImageOffset={x:0-parseInt(o.marginLeft,10),y:0-parseInt(o.marginTop,10)}}else{var n=r.getBoundingClientRect(),o=getComputedStyle(r);this._dragImageOffset={x:n.left-this._initialTouch.clientX-parseInt(o.marginLeft,10)+n.width/2,y:n.top-this._initialTouch.clientY-parseInt(o.marginTop,10)+n.height/2}}return I(this._dragImage,this._dragImagePageCoordinates,this._dragImageTransforms,this._dragImageOffset,this._config.dragImageCenterOnTouch),document.body.appendChild(this._dragImage),this._iterationIntervalId=window.setInterval(function(){if(t._iterationLock){console.log("dnd-poly: iteration skipped because previous iteration hast not yet finished.");return}t._iterationLock=!0,t._dragAndDropProcessModelIteration(),t._iterationLock=!1},this._config.iterationInterval),!0},e.prototype._cleanup=function(){console.log("dnd-poly: cleanup"),this._iterationIntervalId&&(clearInterval(this._iterationIntervalId),this._iterationIntervalId=null),b("touchmove",this._touchMoveHandler),b("touchend",this._touchEndOrCancelHandler),b("touchcancel",this._touchEndOrCancelHandler),this._dragImage&&(this._dragImage.parentNode.removeChild(this._dragImage),this._dragImage=null),this._dragOperationEndedCb(this._config,this._lastTouchEvent,this._dragOperationState)},e.prototype._onTouchMove=function(t){var r=this;if(N(t,this._initialTouch.identifier)!==!1){if(this._lastTouchEvent=t,this._dragOperationState===0){var a=void 0;if(this._config.dragStartConditionOverride)try{a=this._config.dragStartConditionOverride(t)}catch(n){console.error("dnd-poly: error in dragStartConditionOverride hook: "+n),a=!1}else a=t.touches.length===1;if(!a){this._cleanup();return}this._setup()===!0&&(this._initialEvent.preventDefault(),t.preventDefault());return}if(console.log("dnd-poly: moving draggable.."),t.preventDefault(),C("client",t,this._currentHotspotCoordinates),C("page",t,this._dragImagePageCoordinates),this._config.dragImageTranslateOverride)try{var o=!1;if(this._config.dragImageTranslateOverride(t,{x:this._currentHotspotCoordinates.x,y:this._currentHotspotCoordinates.y},this._immediateUserSelection,function(n,i){r._dragImage&&(o=!0,r._currentHotspotCoordinates.x+=n,r._currentHotspotCoordinates.y+=i,r._dragImagePageCoordinates.x+=n,r._dragImagePageCoordinates.y+=i,I(r._dragImage,r._dragImagePageCoordinates,r._dragImageTransforms,r._dragImageOffset,r._config.dragImageCenterOnTouch))}),o)return}catch(n){console.log("dnd-poly: error in dragImageTranslateOverride hook: "+n)}I(this._dragImage,this._dragImagePageCoordinates,this._dragImageTransforms,this._dragImageOffset,this._config.dragImageCenterOnTouch)}},e.prototype._onTouchEndOrCancel=function(t){if(N(t,this._initialTouch.identifier)!==!1){if(this._config.dragImageTranslateOverride)try{this._config.dragImageTranslateOverride(void 0,void 0,void 0,function(){})}catch(r){console.log("dnd-poly: error in dragImageTranslateOverride hook: "+r)}if(this._dragOperationState===0){this._cleanup();return}t.preventDefault(),this._dragOperationState=t.type==="touchcancel"?3:2}},e.prototype._dragAndDropProcessModelIteration=function(){var t=this,r=this._currentDragOperation;this._dragDataStore.mode=3,this._dataTransfer.dropEffect=d[0];var a=f("drag",this._sourceNode,this._lastTouchEvent,this._dragDataStore,this._dataTransfer);if(a&&(console.log("dnd-poly: drag event cancelled."),this._currentDragOperation=d[0]),a||this._dragOperationState===2||this._dragOperationState===3){var o=this._dragOperationEnded(this._dragOperationState);if(o){B(this._sourceNode,this._dragImage,this._dragImageTransforms,function(){t._finishDragOperation()});return}this._finishDragOperation();return}var n=this._config.elementFromPoint(this._currentHotspotCoordinates.x,this._currentHotspotCoordinates.y);console.log("dnd-poly: new immediate user selection is: "+n);var i=this._currentDropTarget;n!==this._immediateUserSelection&&n!==this._currentDropTarget&&(this._immediateUserSelection=n,this._currentDropTarget!==null&&(this._dragDataStore.mode=3,this._dataTransfer.dropEffect=d[0],f("dragexit",this._currentDropTarget,this._lastTouchEvent,this._dragDataStore,this._dataTransfer,!1)),this._immediateUserSelection===null?(this._currentDropTarget=this._immediateUserSelection,console.log("dnd-poly: current drop target changed to null")):(this._dragDataStore.mode=3,this._dataTransfer.dropEffect=R(this._dragDataStore.effectAllowed,this._sourceNode),f("dragenter",this._immediateUserSelection,this._lastTouchEvent,this._dragDataStore,this._dataTransfer)?(console.log("dnd-poly: dragenter default prevented"),this._currentDropTarget=this._immediateUserSelection,this._currentDragOperation=M(this._dataTransfer.effectAllowed,this._dataTransfer.dropEffect)):this._immediateUserSelection!==document.body&&(this._currentDropTarget=document.body))),i!==this._currentDropTarget&&S(i)&&(console.log("dnd-poly: current drop target changed."),this._dragDataStore.mode=3,this._dataTransfer.dropEffect=d[0],f("dragleave",i,this._lastTouchEvent,this._dragDataStore,this._dataTransfer,!1,this._currentDropTarget)),S(this._currentDropTarget)&&(this._dragDataStore.mode=3,this._dataTransfer.dropEffect=R(this._dragDataStore.effectAllowed,this._sourceNode),f("dragover",this._currentDropTarget,this._lastTouchEvent,this._dragDataStore,this._dataTransfer)===!1?(console.log("dnd-poly: dragover not prevented on possible drop-target."),this._currentDragOperation=d[0]):(console.log("dnd-poly: dragover prevented."),this._currentDragOperation=M(this._dataTransfer.effectAllowed,this._dataTransfer.dropEffect))),console.log("dnd-poly: d'n'd iteration ended. current drag operation: "+this._currentDragOperation),r!==this._currentDragOperation&&this._dragImage.classList.remove(c+r);var l=c+this._currentDragOperation;this._dragImage.classList.add(l)},e.prototype._dragOperationEnded=function(t){console.log("dnd-poly: drag operation end detected with "+this._currentDragOperation);var r=this._currentDragOperation===d[0]||this._currentDropTarget===null||t===3;return r?S(this._currentDropTarget)&&(this._dragDataStore.mode=3,this._dataTransfer.dropEffect=d[0],f("dragleave",this._currentDropTarget,this._lastTouchEvent,this._dragDataStore,this._dataTransfer,!1)):S(this._currentDropTarget)&&(this._dragDataStore.mode=1,this._dataTransfer.dropEffect=this._currentDragOperation,f("drop",this._currentDropTarget,this._lastTouchEvent,this._dragDataStore,this._dataTransfer)===!0?this._currentDragOperation=this._dataTransfer.dropEffect:this._currentDragOperation=d[0]),r},e.prototype._finishDragOperation=function(){console.log("dnd-poly: dragimage snap back transition ended"),this._dragDataStore.mode=3,this._dataTransfer.dropEffect=this._currentDragOperation,f("dragend",this._sourceNode,this._lastTouchEvent,this._dragDataStore,this._dataTransfer,!1),this._dragOperationState=2,this._cleanup()},e}(),p={iterationInterval:150,tryFindDraggableTarget:W,dragImageSetup:Y,elementFromPoint:function(e,t){return document.elementFromPoint(e,t)}},w;function H(e){if(console.log("dnd-poly: global touchstart"),w){console.log("dnd-poly: drag operation already active");return}var t=p.tryFindDraggableTarget(e);if(!t){console.log("dnd-poly: no draggable at touchstart coordinates");return}try{w=new q(e,p,t,V)}catch(r){throw V(p,e,3),r}}function J(e){console.log("dnd-poly: setup delayed dragstart..");var t=e.target,r=function(){console.log("dnd-poly: starting delayed drag.."),n.off(),i.off(),l.off(),s.off(),H(e)},a=function(_){console.log("dnd-poly: aborting delayed drag because of "+_.type),n.off(),i.off(),l.off(),s.off(),t&&t.dispatchEvent(new CustomEvent(X,{bubbles:!0,cancelable:!0})),clearTimeout(o)};t&&t.dispatchEvent(new CustomEvent(T,{bubbles:!0,cancelable:!0}));var o=window.setTimeout(r,p.holdToDrag),n=O(t,"touchend",a),i=O(t,"touchcancel",a),l=O(t,"touchmove",a),s=O(window,"scroll",a,!0)}function V(e,t,r){if(r===0&&(console.log("dnd-poly: Drag never started. Last event was "+t.type),e.defaultActionOverride))try{e.defaultActionOverride(t),t.defaultPrevented&&console.log("dnd-poly: defaultActionOverride has taken care of triggering the default action. preventing default on original event")}catch(a){console.log("dnd-poly: error in defaultActionOverride: "+a)}w=null}function Q(e){if(e&&Object.keys(e).forEach(function(r){p[r]=e[r]}),!p.forceApply){var t=G();if(t.userAgentSupportingNativeDnD&&t.draggable&&t.dragEvents)return!1}return console.log("dnd-poly: Applying mobile drag and drop polyfill."),p.holdToDrag?(console.log("dnd-poly: holdToDrag set to "+p.holdToDrag),D("touchstart",J,!1)):D("touchstart",H,!1),!0}y.polyfill=Q,Object.defineProperty(y,"__esModule",{value:!0})})})(A,A.exports);var et=A.exports;const rt=tt(et);(function(){window.Vaadin=window.Vaadin||{};function x(u){if(window.Vaadin.__mobilePolyfillTouchStartPath){const m=window.Vaadin.__mobilePolyfillTouchStartPath;for(const v of m){let g=v;do if(g.getAttribute&&g.getAttribute("draggable")==="true")return g;while((g=g.parentNode)&&g!==document.body)}}}function E(u,m){for(const v of this._path)if(v.elementFromPoint){let g=v.elementFromPoint(u,m);if(g){for(;g.shadowRoot;){const T=g.shadowRoot.elementFromPoint(u,m);if(g===T)return g;g=T}return g}}}function y(u){return this._path=u.composedPath(),!0}const c={tryFindDraggableTarget:x,dragStartConditionOverride:y,holdToDrag:300,forceApply:window.Vaadin.__forceApplyMobileDragDrop};window.ShadyDOM||(c.elementFromPoint=E),rt.polyfill(c)&&(document.addEventListener("touchstart",u=>{window.Vaadin.__mobilePolyfillTouchStartPath=u.composedPath()}),document.addEventListener("touchmove",u=>{delete window.Vaadin.__mobilePolyfillTouchStartPath}))})();
