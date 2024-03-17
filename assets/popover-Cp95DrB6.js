import{o as h,e as L,n as m,f as K,l as v,k as C,Z as B,S as _,T as P,U as k,v as S,g as x,V as F,F as H,_ as A,$ as j,d as z,b as R,u as U}from"./vue.esm-bundler-BBrDyPcD.js";import{D as r,O as Z,p as N,B as V,Z as E,C as M,U as q,s as W}from"./basecomponent.esm-emi5-qlX.js";import{B as G,R as J}from"./ripple.esm-BYo3grDy.js";import{s as Q}from"./baseicon.esm-DeQm_HZt.js";var X={},Y=G.extend({style:X});function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,o)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O(Object(n),!0).forEach(function(o){ee(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function ee(t,e,n){return e=te(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function te(t){var e=ne(t,"string");return y(e)=="symbol"?e:String(e)}function ne(t,e){if(y(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(y(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var oe=Y.extend("focustrap",{mounted:function(e,n){var o=n.value||{},s=o.disabled;s||(this.createHiddenFocusableElements(e,n),this.bind(e,n),this.autoElementFocus(e,n)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,n){var o=n.value||{},s=o.disabled;s&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,n){var o=this,s=n.value||{},i=s.onFocusIn,u=s.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(l){l.forEach(function(c){if(c.type==="childList"&&!e.contains(document.activeElement)){var d=function a(f){var p=r.isFocusableElement(f)?r.isFocusableElement(f,o.getComputedSelector(e.$_pfocustrap_focusableselector))?f:r.getFirstFocusableElement(e,o.getComputedSelector(e.$_pfocustrap_focusableselector)):r.getFirstFocusableElement(f);return Z.isNotEmpty(p)?p:f.nextSibling&&a(f.nextSibling)};r.focus(d(c.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(l){return i&&i(l)},e.$_pfocustrap_focusoutlistener=function(l){return u&&u(l)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:T(T({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,n){var o=n.value||{},s=o.autoFocusSelector,i=s===void 0?"":s,u=o.firstFocusableSelector,l=u===void 0?"":u,c=o.autoFocus,d=c===void 0?!1:c,a=r.getFirstFocusableElement(e,"[autofocus]".concat(this.getComputedSelector(i)));d&&!a&&(a=r.getFirstFocusableElement(e,this.getComputedSelector(l))),r.focus(a)},onFirstHiddenElementFocus:function(e){var n,o=e.currentTarget,s=e.relatedTarget,i=s===o.$_pfocustrap_lasthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(s))?r.getFirstFocusableElement(o.parentElement,this.getComputedSelector(o.$_pfocustrap_focusableselector)):o.$_pfocustrap_lasthiddenfocusableelement;r.focus(i)},onLastHiddenElementFocus:function(e){var n,o=e.currentTarget,s=e.relatedTarget,i=s===o.$_pfocustrap_firsthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(s))?r.getLastFocusableElement(o.parentElement,this.getComputedSelector(o.$_pfocustrap_focusableselector)):o.$_pfocustrap_firsthiddenfocusableelement;r.focus(i)},createHiddenFocusableElements:function(e,n){var o=this,s=n.value||{},i=s.tabIndex,u=i===void 0?0:i,l=s.firstFocusableSelector,c=l===void 0?"":l,d=s.lastFocusableSelector,a=d===void 0?"":d,f=function(w){return r.createElement("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:u,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:w==null?void 0:w.bind(o)})},p=f(this.onFirstHiddenElementFocus),b=f(this.onLastHiddenElementFocus);p.$_pfocustrap_lasthiddenfocusableelement=b,p.$_pfocustrap_focusableselector=c,p.setAttribute("data-pc-section","firstfocusableelement"),b.$_pfocustrap_firsthiddenfocusableelement=p,b.$_pfocustrap_focusableselector=a,b.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(p),e.append(b)}}}),$={name:"TimesIcon",extends:Q},ie=K("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),se=[ie];function re(t,e,n,o,s,i){return h(),L("svg",m({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),se,16)}$.render=re;var g=N(),D={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=r.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function ae(t,e,n,o,s,i){return i.inline?v(t.$slots,"default",{key:0}):s.mounted?(h(),C(B,{key:1,to:n.appendTo},[v(t.$slots,"default")],8,["to"])):_("",!0)}D.render=ae;var le={root:function(e){var n=e.instance;return["p-overlaypanel p-component",{"p-ripple-disabled":n.$primevue.config.ripple===!1}]},content:"p-overlaypanel-content",closeButton:"p-overlaypanel-close p-link",closeIcon:"p-overlaypanel-close-icon"},ce=V.extend({name:"overlaypanel",classes:le}),ue={name:"BaseOverlayPanel",extends:W,props:{dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!1},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},closeOnEscape:{type:Boolean,default:!0}},style:ce,provide:function(){return{$parentInstance:this}}},I={name:"OverlayPanel",extends:ue,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&E.clear(this.container),this.overlayEventListener&&(g.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,n){this.visible?this.hide():this.show(e,n)},show:function(e,n){this.visible=!0,this.eventTarget=e.currentTarget,this.target=n||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var n=this;this.container.setAttribute(this.attributeSelector,""),r.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&E.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(o){n.container.contains(o.target)&&(n.selfClick=!0)},this.focus(),g.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),g.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&E.clear(e)},alignOverlay:function(){r.absolutePosition(this.container,this.target,!1);var e=r.getOffset(this.container),n=r.getOffset(this.target),o=0;e.left<n.left&&(o=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft","".concat(o,"px")),e.top<n.top&&(this.container.setAttribute("data-p-overlaypanel-flipped","true"),!this.isUnstyled&&r.addClass(this.container,"p-overlaypanel-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),r.focus(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&r.isClient()&&(this.outsideClickListener=function(n){e.visible&&!e.selfClick&&!e.isTargetClicked(n)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new M(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!r.isTouchDevice()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",r.setAttribute(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var o in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(o,`) {
                            .p-overlaypanel[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[o],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){g.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{attributeSelector:function(){return q()},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:oe,ripple:J},components:{Portal:D,TimesIcon:$}},de=["aria-modal"],fe=["aria-label"];function pe(t,e,n,o,s,i){var u=P("Portal"),l=k("ripple"),c=k("focustrap");return h(),C(u,{appendTo:t.appendTo},{default:S(function(){return[x(j,m({name:"p-overlaypanel",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:S(function(){return[s.visible?F((h(),L("div",m({key:0,ref:i.containerRef,role:"dialog","aria-modal":s.visible,onClick:e[5]||(e[5]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),class:t.cx("root")},t.ptmi("root")),[t.$slots.container?v(t.$slots,"container",{key:0,onClose:i.hide,onKeydown:function(a){return i.onButtonKeydown(a)},closeCallback:i.hide,keydownCallback:function(a){return i.onButtonKeydown(a)}}):(h(),L(H,{key:1},[K("div",m({class:t.cx("content"),onClick:e[0]||(e[0]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onMousedown:e[1]||(e[1]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onContentKeydown&&i.onContentKeydown.apply(i,arguments)})},t.ptm("content")),[v(t.$slots,"default")],16),t.showCloseIcon?F((h(),L("button",m({key:0,class:t.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",autofocus:"",onClick:e[3]||(e[3]=function(){return i.hide&&i.hide.apply(i,arguments)}),onKeydown:e[4]||(e[4]=function(){return i.onButtonKeydown&&i.onButtonKeydown.apply(i,arguments)})},t.ptm("closeButton")),[v(t.$slots,"closeicon",{},function(){return[(h(),C(A(t.closeIcon?"span":"TimesIcon"),m({class:[t.cx("closeIcon"),t.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))]})],16,fe)),[[l]]):_("",!0)],64))],16,de)),[[c]]):_("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}I.render=pe;const he=z({__name:"popover",emits:["show","hide"],setup(t,{expose:e,emit:n}){const o=n,s=R();e({toggle:a=>{s.value.toggle(a)},show:a=>{s.value.show(a)},hide:a=>{s.value.hide(a)}});const c=()=>{o("show")},d=()=>{o("hide")};return(a,f)=>(h(),C(U(I),{ref_key:"op",ref:s,style:{padding:"0.45rem","box-shadow":"var(--popover-box-shadow)"},onHide:d,onShow:c},{default:S(()=>[v(a.$slots,"default")]),_:3},512))}});he.__docgenInfo={exportName:"default",displayName:"popover",description:"",tags:{},expose:[{name:"toggle"},{name:"show"},{name:"hide"}],events:[{name:"show"},{name:"hide"}],slots:[{name:"default"}],sourceFiles:["E:/Projects/Work/Seobot/Front/libs/seobot-ui/src/lib/popover/popover.vue"]};export{he as _,I as s};