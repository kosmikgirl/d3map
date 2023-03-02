var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,a=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,i=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&a(e,n,t[n]);if(o)for(var n of o(t))f.call(t,n)&&a(e,n,t[n]);return e},c=(e,o)=>t(e,n(o))
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),u=new Map;class h{constructor(e,t){if(this._$cssResult$=!0,t!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=u.get(this.cssText);return s&&void 0===e&&(u.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const b=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new h(n,l)},d=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new h("string"==typeof e?e:e+"",l))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var p;const g=window.trustedTypes,m=g?g.emptyScript:"",v=window.reactiveElementPolyfillSupport,y={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(o){n=null}}return n}},w=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};class k extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const o=this._$Eh(n,t);void 0!==o&&(this._$Eu.set(o,n),e.push(o))})),e}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eh(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return n=t,o=this.constructor.elementStyles,s?n.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):o.forEach((e=>{const t=document.createElement("style"),o=window.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=e.cssText,n.appendChild(t)})),t;var n,o}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=_){var o,r;const f=this.constructor._$Eh(e,n);if(void 0!==f&&!0===n.reflect){const a=(null!==(r=null===(o=n.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==r?r:y.toAttribute)(t,n.type);this._$Ei=e,null==a?this.removeAttribute(f):this.setAttribute(f,a),this._$Ei=null}}_$AK(e,t){var n,o,r;const f=this.constructor,a=f._$Eu.get(e);if(void 0!==a&&this._$Ei!==a){const e=f.getPropertyOptions(a),i=e.converter,c=null!==(r=null!==(o=null===(n=i)||void 0===n?void 0:n.fromAttribute)&&void 0!==o?o:"function"==typeof i?i:null)&&void 0!==r?r:y.fromAttribute;this._$Ei=a,this[a]=c(t,e.type),this._$Ei=null}}requestUpdate(e,t,n){let o=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||w)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var S;k.finalized=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:k}),(null!==(p=globalThis.reactiveElementVersions)&&void 0!==p?p:globalThis.reactiveElementVersions=[]).push("1.2.1");const x=globalThis.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,$="?"+E,P=`<${$}>`,O=document,N=(e="")=>O.createComment(e),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,C=Array.isArray,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,R=/>/g,q=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,z=/"/g,L=/^(?:script|style|textarea)$/i,I=(V=1,(e,...t)=>({_$litType$:V,strings:e,values:t})),H=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),F=new WeakMap,B=O.createTreeWalker(O,129,null,!1);var V;class W{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,f=0;const a=e.length-1,i=this.parts,[c,s]=((e,t)=>{const n=e.length-1,o=[];let r,f=2===t?"<svg>":"",a=j;for(let c=0;c<n;c++){const t=e[c];let n,i,s=-1,l=0;for(;l<t.length&&(a.lastIndex=l,i=a.exec(t),null!==i);)l=a.lastIndex,a===j?"!--"===i[1]?a=T:void 0!==i[1]?a=R:void 0!==i[2]?(L.test(i[2])&&(r=RegExp("</"+i[2],"g")),a=q):void 0!==i[3]&&(a=q):a===q?">"===i[0]?(a=null!=r?r:j,s=-1):void 0===i[1]?s=-2:(s=a.lastIndex-i[2].length,n=i[1],a=void 0===i[3]?q:'"'===i[3]?z:U):a===z||a===U?a=q:a===T||a===R?a=j:(a=q,r=void 0);const u=a===q&&e[c+1].startsWith("/>")?" ":"";f+=a===j?t+P:s>=0?(o.push(n),t.slice(0,s)+"$lit$"+t.slice(s)+E+u):t+E+(-2===s?(o.push(void 0),c):u)}const i=f+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==A?A.createHTML(i):i,o]})(e,t);if(this.el=W.createElement(c,n),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=B.nextNode())&&i.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(E)){const n=s[f++];if(e.push(t),void 0!==n){const e=o.getAttribute(n.toLowerCase()+"$lit$").split(E),t=/([.?@])?(.*)/.exec(n);i.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?Q:"@"===t[1]?ee:J})}else i.push({type:6,index:r})}for(const t of e)o.removeAttribute(t)}if(L.test(o.tagName)){const e=o.textContent.split(E),t=e.length-1;if(t>0){o.textContent=x?x.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],N()),B.nextNode(),i.push({type:2,index:++r});o.append(e[t],N())}}}else if(8===o.nodeType)if(o.data===$)i.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(E,e+1));)i.push({type:7,index:r}),e+=E.length-1}r++}}static createElement(e,t){const n=O.createElement("template");return n.innerHTML=e,n}}function X(e,t,n=e,o){var r,f,a,i;if(t===H)return t;let c=void 0!==o?null===(r=n._$Cl)||void 0===r?void 0:r[o]:n._$Cu;const s=M(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==s&&(null===(f=null==c?void 0:c._$AO)||void 0===f||f.call(c,!1),void 0===s?c=void 0:(c=new s(e),c._$AT(e,n,o)),void 0!==o?(null!==(a=(i=n)._$Cl)&&void 0!==a?a:i._$Cl=[])[o]=c:n._$Cu=c),void 0!==c&&(t=X(e,c._$AS(e,t.values),c,o)),t}class K{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:o}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:O).importNode(n,!0);B.currentNode=r;let f=B.nextNode(),a=0,i=0,c=o[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new Y(f,f.nextSibling,this,e):1===c.type?t=new c.ctor(f,c.name,c.strings,this,e):6===c.type&&(t=new te(f,this,e)),this.v.push(t),c=o[++i]}a!==(null==c?void 0:c.index)&&(f=B.nextNode(),a++)}return r}m(e){let t=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Y{constructor(e,t,n,o){var r;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cg=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),M(e)?e===D||null==e||""===e?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==H&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return C(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==D&&M(this._$AH)?this._$AA.nextSibling.data=e:this.S(O.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=W.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.m(n);else{const e=new K(r,this),t=e.p(this.options);e.m(n),this.S(t),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new W(e)),t}A(e){C(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new Y(this.M(N()),this.M(N()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class J{constructor(e,t,n,o,r){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){const r=this.strings;let f=!1;if(void 0===r)e=X(this,e,t,0),f=!M(e)||e!==this._$AH&&e!==H,f&&(this._$AH=e);else{const o=e;let a,i;for(e=r[0],a=0;a<r.length-1;a++)i=X(this,o[n+a],t,a),i===H&&(i=this._$AH[a]),f||(f=!M(i)||i!==this._$AH[a]),i===D?e=D:e!==D&&(e+=(null!=i?i:"")+r[a+1]),this._$AH[a]=i}f&&!o&&this.k(e)}k(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Z extends J{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===D?void 0:e}}const G=x?x.emptyScript:"";class Q extends J{constructor(){super(...arguments),this.type=4}k(e){e&&e!==D?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class ee extends J{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=X(this,e,t,0))&&void 0!==n?n:D)===H)return;const o=this._$AH,r=e===D&&o!==D||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,f=e!==D&&(o===D||r);r&&this.element.removeEventListener(this.name,this,o),f&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ne=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var oe,re;null==ne||ne(W,Y),(null!==(S=globalThis.litHtmlVersions)&&void 0!==S?S:globalThis.litHtmlVersions=[]).push("2.1.2");class fe extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,n)=>{var o,r;const f=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:t;let a=f._$litPart$;if(void 0===a){const e=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;f._$litPart$=a=new Y(t.insertBefore(N(),e),e,void 0,null!=n?n:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return H}}fe.finalized=!0,fe._$litElement$=!0,null===(oe=globalThis.litElementHydrateSupport)||void 0===oe||oe.call(globalThis,{LitElement:fe});const ae=globalThis.litElementPolyfillSupport;null==ae||ae({LitElement:fe}),(null!==(re=globalThis.litElementVersions)&&void 0!==re?re:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie=e=>t=>{return"function"==typeof t?(n=e,o=t,window.customElements.define(n,o),o):((e,t)=>{const{kind:n,elements:o}=t;return{kind:n,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n,o},ce=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?c(i({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function se(e){return(t,n)=>{return void 0!==n?(o=e,r=n,void t.constructor.createProperty(r,o)):ce(e,t);var o,r}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le(e){return se(c(i({},e),{state:!0}))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ue(e,t){return(({finisher:e,descriptor:t})=>(n,o)=>{var r;if(void 0===o){const o=null!==(r=n.originalKey)&&void 0!==r?r:n.key,f=null!=t?{kind:"method",placement:"prototype",key:o,descriptor:t(n.key)}:c(i({},n),{key:o});return null!=e&&(f.finisher=function(t){e(t,o)}),f}{const r=n.constructor;void 0!==t&&Object.defineProperty(n,o,t(o)),null==e||e(r,o)}})({descriptor:n=>{const o={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;o.get=function(){var n,o;return void 0===this[t]&&(this[t]=null!==(o=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==o?o:null),this[t]}}return o}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he;null===(he=window.HTMLSlotElement)||void 0===he||he.prototype.assignedElements;
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const be=e=>t=>class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe((()=>this.stateChanged(e.getState()))),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}};function de(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function pe(e){return!!e&&!!e[tt]}function ge(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===nt}(e)||Array.isArray(e)||!!e[et]||!!e.constructor[et]||ke(e)||Se(e))}function me(e,t,n){void 0===n&&(n=!1),0===ve(e)?(n?Object.keys:ot)(e).forEach((function(o){n&&"symbol"==typeof o||t(o,e[o],e)})):e.forEach((function(n,o){return t(o,n,e)}))}function ve(e){var t=e[tt];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:ke(e)?2:Se(e)?3:0}function ye(e,t){return 2===ve(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function we(e,t,n){var o=ve(e);2===o?e.set(t,n):3===o?(e.delete(t),e.add(n)):e[t]=n}function _e(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function ke(e){return Je&&e instanceof Map}function Se(e){return Ze&&e instanceof Set}function xe(e){return e.o||e.t}function Ae(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=rt(e);delete t[tt];for(var n=ot(t),o=0;o<n.length;o++){var r=n[o],f=t[r];!1===f.writable&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(t[r]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[r]})}return Object.create(Object.getPrototypeOf(e),t)}function Ee(e,t){return void 0===t&&(t=!1),Pe(e)||pe(e)||!ge(e)||(ve(e)>1&&(e.set=e.add=e.clear=e.delete=$e),Object.freeze(e),t&&me(e,(function(e,t){return Ee(t,!0)}),!0)),e}function $e(){de(2)}function Pe(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function Oe(e){var t=ft[e];return t||de(18,e),t}function Ne(){return Ke}function Me(e,t){t&&(Oe("Patches"),e.u=[],e.s=[],e.v=t)}function Ce(e){je(e),e.p.forEach(Re),e.p=null}function je(e){e===Ke&&(Ke=e.l)}function Te(e){return Ke={p:[],l:Ke,h:e,m:!0,_:0}}function Re(e){var t=e[tt];0===t.i||1===t.i?t.j():t.O=!0}function qe(e,t){t._=t.p.length;var n=t.p[0],o=void 0!==e&&e!==n;return t.h.g||Oe("ES5").S(t,e,o),o?(n[tt].P&&(Ce(t),de(4)),ge(e)&&(e=Ue(t,e),t.l||Le(t,e)),t.u&&Oe("Patches").M(n[tt],e,t.u,t.s)):e=Ue(t,n,[]),Ce(t),t.u&&t.v(t.u,t.s),e!==Qe?e:void 0}function Ue(e,t,n){if(Pe(t))return t;var o=t[tt];if(!o)return me(t,(function(r,f){return ze(e,o,t,r,f,n)}),!0),t;if(o.A!==e)return t;if(!o.P)return Le(e,o.t,!0),o.t;if(!o.I){o.I=!0,o.A._--;var r=4===o.i||5===o.i?o.o=Ae(o.k):o.o;me(3===o.i?new Set(r):r,(function(t,f){return ze(e,o,r,t,f,n)})),Le(e,r,!1),n&&e.u&&Oe("Patches").R(o,n,e.u,e.s)}return o.o}function ze(e,t,n,o,r,f){if(pe(r)){var a=Ue(e,r,f&&t&&3!==t.i&&!ye(t.D,o)?f.concat(o):void 0);if(we(n,o,a),!pe(a))return;e.m=!1}if(ge(r)&&!Pe(r)){if(!e.h.F&&e._<1)return;Ue(e,r),t&&t.A.l||Le(e,r)}}function Le(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&Ee(t,n)}function Ie(e,t){var n=e[tt];return(n?xe(n):e)[t]}function He(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var o=Object.getOwnPropertyDescriptor(n,t);if(o)return o;n=Object.getPrototypeOf(n)}}function De(e){e.P||(e.P=!0,e.l&&De(e.l))}function Fe(e){e.o||(e.o=Ae(e.t))}function Be(e,t,n){var o=ke(t)?Oe("MapSet").N(t,n):Se(t)?Oe("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),o={i:n?1:0,A:t?t.A:Ne(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},r=o,f=at;n&&(r=[o],f=it);var a=Proxy.revocable(r,f),i=a.revoke,c=a.proxy;return o.k=c,o.j=i,c}(t,n):Oe("ES5").J(t,n);return(n?n.A:Ne()).p.push(o),o}function Ve(e){return pe(e)||de(22,e),function e(t){if(!ge(t))return t;var n,o=t[tt],r=ve(t);if(o){if(!o.P&&(o.i<4||!Oe("ES5").K(o)))return o.t;o.I=!0,n=We(t,r),o.I=!1}else n=We(t,r);return me(n,(function(t,r){o&&function(e,t){return 2===ve(e)?e.get(t):e[t]}(o.t,t)===r||we(n,t,e(r))})),3===r?new Set(n):n}(e)}function We(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ae(e)}var Xe,Ke,Ye="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),Je="undefined"!=typeof Map,Ze="undefined"!=typeof Set,Ge="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Qe=Ye?Symbol.for("immer-nothing"):((Xe={})["immer-nothing"]=!0,Xe),et=Ye?Symbol.for("immer-draftable"):"__$immer_draftable",tt=Ye?Symbol.for("immer-state"):"__$immer_state",nt=""+Object.prototype.constructor,ot="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,rt=Object.getOwnPropertyDescriptors||function(e){var t={};return ot(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},ft={},at={get:function(e,t){if(t===tt)return e;var n,o,r,f=xe(e);if(!ye(f,t))return n=e,(r=He(f,t))?"value"in r?r.value:null===(o=r.get)||void 0===o?void 0:o.call(n.k):void 0;var a=f[t];return e.I||!ge(a)?a:a===Ie(e.t,t)?(Fe(e),e.o[t]=Be(e.A.h,a,e)):a},has:function(e,t){return t in xe(e)},ownKeys:function(e){return Reflect.ownKeys(xe(e))},set:function(e,t,n){var o=He(xe(e),t);if(null==o?void 0:o.set)return o.set.call(e.k,n),!0;if(!e.P){var r=Ie(xe(e),t),f=null==r?void 0:r[tt];if(f&&f.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(_e(n,r)&&(void 0!==n||ye(e.t,t)))return!0;Fe(e),De(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==Ie(e.t,t)||t in e.t?(e.D[t]=!1,Fe(e),De(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=xe(e),o=Reflect.getOwnPropertyDescriptor(n,t);return o?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:o.enumerable,value:n[t]}:o},defineProperty:function(){de(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){de(12)}},it={};me(at,(function(e,t){it[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),it.deleteProperty=function(e,t){return at.deleteProperty.call(this,e[0],t)},it.set=function(e,t,n){return at.set.call(this,e[0],t,n,e[0])};var ct=function(){function e(e){var t=this;this.g=Ge,this.F=!0,this.produce=function(e,n,o){if("function"==typeof e&&"function"!=typeof n){var r=n;n=e;var f=t;return function(e){var t=this;void 0===e&&(e=r);for(var o=arguments.length,a=Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return f.produce(e,(function(e){var o;return(o=n).call.apply(o,[t,e].concat(a))}))}}var a;if("function"!=typeof n&&de(6),void 0!==o&&"function"!=typeof o&&de(7),ge(e)){var i=Te(t),c=Be(t,e,void 0),s=!0;try{a=n(c),s=!1}finally{s?Ce(i):je(i)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return Me(i,o),qe(e,i)}),(function(e){throw Ce(i),e})):(Me(i,o),qe(a,i))}if(!e||"object"!=typeof e){if((a=n(e))===Qe)return;return void 0===a&&(a=e),t.F&&Ee(a,!0),a}de(21,e)},this.produceWithPatches=function(e,n){return"function"==typeof e?function(n){for(var o=arguments.length,r=Array(o>1?o-1:0),f=1;f<o;f++)r[f-1]=arguments[f];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(r))}))}:[t.produce(e,n,(function(e,t){o=e,r=t})),o,r];var o,r},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){ge(e)||de(8),pe(e)&&(e=Ve(e));var t=Te(this),n=Be(this,e,void 0);return n[tt].C=!0,je(t),n},t.finishDraft=function(e,t){var n=(e&&e[tt]).A;return Me(n,t),qe(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!Ge&&de(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var o=t[n];if(0===o.path.length&&"replace"===o.op){e=o.value;break}}var r=Oe("Patches").$;return pe(e)?r(e,t):this.produce(e,(function(e){return r(e,t.slice(n+1))}))},e}(),st=new ct,lt=st.produce;function ut(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ht(Object(n),!0).forEach((function(t){ut(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function dt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}st.produceWithPatches.bind(st),st.setAutoFreeze.bind(st),st.setUseProxies.bind(st),st.applyPatches.bind(st),st.createDraft.bind(st),st.finishDraft.bind(st);var pt="function"==typeof Symbol&&Symbol.observable||"@@observable",gt=function(){return Math.random().toString(36).substring(7).split("").join(".")},mt={INIT:"@@redux/INIT"+gt(),REPLACE:"@@redux/REPLACE"+gt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+gt()}};function vt(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function yt(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(dt(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(dt(1));return n(yt)(e,t)}if("function"!=typeof e)throw new Error(dt(2));var r=e,f=t,a=[],i=a,c=!1;function s(){i===a&&(i=a.slice())}function l(){if(c)throw new Error(dt(3));return f}function u(e){if("function"!=typeof e)throw new Error(dt(4));if(c)throw new Error(dt(5));var t=!0;return s(),i.push(e),function(){if(t){if(c)throw new Error(dt(6));t=!1,s();var n=i.indexOf(e);i.splice(n,1),a=null}}}function h(e){if(!vt(e))throw new Error(dt(7));if(void 0===e.type)throw new Error(dt(8));if(c)throw new Error(dt(9));try{c=!0,f=r(f,e)}finally{c=!1}for(var t=a=i,n=0;n<t.length;n++){(0,t[n])()}return e}function b(e){if("function"!=typeof e)throw new Error(dt(10));r=e,h({type:mt.REPLACE})}function d(){var e,t=u;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(dt(11));function n(){e.next&&e.next(l())}return n(),{unsubscribe:t(n)}}})[pt]=function(){return this},e}return h({type:mt.INIT}),(o={dispatch:h,subscribe:u,getState:l,replaceReducer:b})[pt]=d,o}function wt(e){for(var t=Object.keys(e),n={},o=0;o<t.length;o++){var r=t[o];"function"==typeof e[r]&&(n[r]=e[r])}var f,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:mt.INIT}))throw new Error(dt(12));if(void 0===n(void 0,{type:mt.PROBE_UNKNOWN_ACTION()}))throw new Error(dt(13))}))}(n)}catch(i){f=i}return function(e,t){if(void 0===e&&(e={}),f)throw f;for(var o=!1,r={},i=0;i<a.length;i++){var c=a[i],s=n[c],l=e[c],u=s(l,t);if(void 0===u)throw t&&t.type,new Error(dt(14));r[c]=u,o=o||u!==l}return(o=o||a.length!==Object.keys(e).length)?r:e}}function _t(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function kt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),o=function(){throw new Error(dt(15))},r={getState:n.getState,dispatch:function(){return o.apply(void 0,arguments)}},f=t.map((function(e){return e(r)}));return o=_t.apply(void 0,f)(n.dispatch),bt(bt({},n),{},{dispatch:o})}}}function St(e){return function(t){var n=t.dispatch,o=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,o,e):t(r)}}}}var xt=St();xt.withExtraArgument=St;var At,Et=xt,$t=globalThis&&globalThis.__extends||(At=function(e,t){return(At=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}At(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});globalThis&&globalThis.__generator;var Pt=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,o=t.length,r=e.length;n<o;n++,r++)e[r]=t[n];return e},Ot=Object.defineProperty,Nt=Object.getOwnPropertySymbols,Mt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,jt=function(e,t,n){return t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Tt=function(e,t){for(var n in t||(t={}))Mt.call(t,n)&&jt(e,n,t[n]);if(Nt)for(var o=0,r=Nt(t);o<r.length;o++){n=r[o];Ct.call(t,n)&&jt(e,n,t[n])}return e},Rt="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?_t:_t.apply(null,arguments)};var qt=function(e){function t(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var r=e.apply(this,n)||this;return Object.setPrototypeOf(r,t.prototype),r}return $t(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,Pt([void 0],e[0].concat(this)))):new(t.bind.apply(t,Pt([void 0],e.concat(this))))},t}(Array);function Ut(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,n=void 0===t||t;e.immutableCheck,e.serializableCheck;var o=new qt;n&&("boolean"==typeof n?o.push(Et):o.push(Et.withExtraArgument(n.extraArgument)));return o}(e)}}function zt(e){var t,n=Ut(),o=e||{},r=o.reducer,f=void 0===r?void 0:r,a=o.middleware,i=void 0===a?n():a,c=o.devTools,s=void 0===c||c,l=o.preloadedState,u=void 0===l?void 0:l,h=o.enhancers,b=void 0===h?void 0:h;if("function"==typeof f)t=f;else{if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(f))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=wt(f)}var d=i;"function"==typeof d&&(d=d(n));var p=kt.apply(void 0,d),g=_t;s&&(g=Rt(Tt({trace:!1},"object"==typeof s&&s)));var m=[p];return Array.isArray(b)?m=Pt([p],b):"function"==typeof b&&(m=b(m)),yt(t,u,g.apply(void 0,m))}function Lt(e,t){function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var r=t.apply(void 0,n);if(!r)throw new Error("prepareAction did not return an object");return Tt(Tt({type:e,payload:r.payload},"meta"in r&&{meta:r.meta}),"error"in r&&{error:r.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}function It(e){var t,n={},o=[],r={addCase:function(e,t){var o="string"==typeof e?e:e.type;if(o in n)throw new Error("addCase cannot be called with two reducers for the same action type");return n[o]=t,r},addMatcher:function(e,t){return o.push({matcher:e,reducer:t}),r},addDefaultCase:function(e){return t=e,r}};return e(r),[n,o,t]}function Ht(e){var t=e.name,n=e.initialState;if(!t)throw new Error("`name` is a required option for createSlice");var o=e.reducers||{},r="function"==typeof e.extraReducers?It(e.extraReducers):[e.extraReducers],f=r[0],a=void 0===f?{}:f,i=r[1],c=void 0===i?[]:i,s=r[2],l=void 0===s?void 0:s,u=Object.keys(o),h={},b={},d={};u.forEach((function(e){var n,r,f=o[e],a=t+"/"+e;"reducer"in f?(n=f.reducer,r=f.prepare):n=f,h[e]=n,b[a]=n,d[e]=r?Lt(a,r):Lt(a)}));var p=function(e,t,n,o){void 0===n&&(n=[]);var r="function"==typeof t?It(t):[t,n,o],f=r[0],a=r[1],i=r[2],c=lt(e,(function(){}));return function(e,t){void 0===e&&(e=c);var n=Pt([f[t.type]],a.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===n.filter((function(e){return!!e})).length&&(n=[i]),n.reduce((function(e,n){if(n){var o;if(pe(e))return void 0===(o=n(e,t))?e:o;if(ge(e))return lt(e,(function(e){return n(e,t)}));if(void 0===(o=n(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return o}return e}),e)}}(n,Tt(Tt({},a),b),c,l);return{name:t,reducer:p,actions:d,caseReducers:h}}!function(){function e(e,t){var n=r[e];return n?n.enumerable=t:r[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[tt];return at.get(t,e)},set:function(t){var n=this[tt];at.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var r=e[t][tt];if(!r.P)switch(r.i){case 5:o(r)&&De(r);break;case 4:n(r)&&De(r)}}}function n(e){for(var t=e.t,n=e.k,o=ot(n),r=o.length-1;r>=0;r--){var f=o[r];if(f!==tt){var a=t[f];if(void 0===a&&!ye(t,f))return!0;var i=n[f],c=i&&i[tt];if(c?c.t!==a:!_e(i,a))return!0}}var s=!!t[tt];return o.length!==ot(t).length+(s?0:1)}function o(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!n||n.get)}var r={};!function(e,t){ft[e]||(ft[e]=t)}("ES5",{J:function(t,n){var o=Array.isArray(t),r=function(t,n){if(t){for(var o=Array(n.length),r=0;r<n.length;r++)Object.defineProperty(o,""+r,e(r,!0));return o}var f=rt(n);delete f[tt];for(var a=ot(f),i=0;i<a.length;i++){var c=a[i];f[c]=e(c,t||!!f[c].enumerable)}return Object.create(Object.getPrototypeOf(n),f)}(o,t),f={i:o?5:4,A:n?n.A:Ne(),P:!1,I:!1,D:{},l:n,t:t,k:r,o:null,O:!1,C:!1};return Object.defineProperty(r,tt,{value:f,writable:!0}),r},S:function(e,n,r){r?pe(n)&&n[tt].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[tt];if(n){var r=n.t,f=n.k,a=n.D,i=n.i;if(4===i)me(f,(function(t){t!==tt&&(void 0!==r[t]||ye(r,t)?a[t]||e(f[t]):(a[t]=!0,De(n)))})),me(r,(function(e){void 0!==f[e]||ye(f,e)||(a[e]=!1,De(n))}));else if(5===i){if(o(n)&&(De(n),a.length=!0),f.length<r.length)for(var c=f.length;c<r.length;c++)a[c]=!1;else for(var s=r.length;s<f.length;s++)a[s]=!0;for(var l=Math.min(f.length,r.length),u=0;u<l;u++)void 0===a[u]&&e(f[u])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):o(e)}})}();
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Dt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[o+1]),e[0])}),Ft=new Map,Bt=(e=>(t,...n)=>{var o;const r=n.length;let f,a;const i=[],c=[];let s,l=0,u=!1;for(;l<r;){for(s=t[l];l<r&&void 0!==(a=n[l],f=null===(o=a)||void 0===o?void 0:o._$litStatic$);)s+=f+t[++l],u=!0;c.push(a),i.push(s),l++}if(l===r&&i.push(t[r]),u){const e=i.join("$$lit$$");void 0===(t=Ft.get(e))&&(i.raw=i,Ft.set(e,t=i)),n=c}return e(t,...n)})(I);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Vt{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener("lit-localize-status",this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener("lit-localize-status",this.__litLocalizeEventHandler)}}const Wt=e=>e.addController(new Vt(e)),Xt=()=>e=>"function"==typeof e?Yt(e):Kt(e),Kt=({kind:e,elements:t})=>({kind:e,elements:t,finisher(e){e.addInitializer(Wt)}}),Yt=e=>(e.addInitializer(Wt),e);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Jt{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let As=0;As<256;As++)(As>>4&15).toString(16),(15&As).toString(16);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zt(e){window.dispatchEvent(new CustomEvent("lit-localize-status",{detail:e}))}let Gt,Qt,en,tn,nn="",on=new Jt;on.resolve();let rn=0;const fn=e=>(function(e){if(sn)throw new Error("lit-localize can only be configured once");sn=!0}(),nn=Qt=e.sourceLocale,en=new Set(e.targetLocales),en.add(e.sourceLocale),tn=e.loadLocale,{getLocale:an,setLocale:cn}),an=()=>nn,cn=e=>{if(e===(null!=Gt?Gt:nn))return on.promise;if(!en||!tn)throw new Error("Internal error");if(!en.has(e))throw new Error("Invalid locale code");rn++;const t=rn;Gt=e,on.settled&&(on=new Jt),Zt({status:"loading",loadingLocale:e});return(e===Qt?Promise.resolve({templates:void 0}):tn(e)).then((n=>{rn===t&&(nn=e,Gt=void 0,n.templates,Zt({status:"ready",readyLocale:e}),on.resolve())}),(n=>{rn===t&&(Zt({status:"error",errorLocale:e,errorMessage:n.toString()}),on.reject(n))})),on.promise};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let sn=!1;var ln=/([:*])(\w+)/g,un=/\*/g,hn=/\/\?/g;function bn(e){return void 0===e&&(e="/"),kn()?location.pathname+location.search+location.hash:e}function dn(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function pn(e){return"string"==typeof e}function gn(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function mn(e){var t=dn(e).split(/\?(.*)?$/);return[dn(t[0]),t.slice(1).join("")]}function vn(e){for(var t={},n=e.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(""!==r[0]){var f=decodeURIComponent(r[0]);t[f]?(Array.isArray(t[f])||(t[f]=[t[f]]),t[f].push(decodeURIComponent(r[1]||""))):t[f]=decodeURIComponent(r[1]||"")}}return t}function yn(e,t){var n,o=mn(dn(e.currentLocationPath)),r=o[0],f=o[1],a=""===f?null:vn(f),i=[];if(pn(t.path)){if(n="(?:/^|^)"+dn(t.path).replace(ln,(function(e,t,n){return i.push(n),"([^/]+)"})).replace(un,"?(?:.*)").replace(hn,"/?([^/]+|)")+"$",""===dn(t.path)&&""===dn(r))return{url:r,queryString:f,hashString:gn(e.to),route:t,data:null,params:a}}else n=t.path;var c=new RegExp(n,""),s=r.match(c);if(s){var l=pn(t.path)?function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce((function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e}),null):null}(s,i):s.groups?s.groups:s.slice(1);return{url:dn(r.replace(new RegExp("^"+e.instance.root),"")),queryString:f,hashString:gn(e.to),route:t,data:l,params:a}}return!1}function wn(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function _n(e,t){return void 0===e[t]||!0===e[t]}function kn(){return"undefined"!=typeof window}function Sn(e,t){return void 0===e&&(e=[]),void 0===t&&(t={}),e.filter((function(e){return e})).forEach((function(e){["before","after","already","leave"].forEach((function(n){e[n]&&(t[n]||(t[n]=[]),t[n].push(e[n]))}))})),t}function xn(e,t,n){var o=t||{},r=0;!function t(){e[r]?Array.isArray(e[r])?(e.splice.apply(e,[r,1].concat(e[r][0](o)?e[r][1]:e[r][2])),t()):e[r](o,(function(e){void 0===e||!0===e?(r+=1,t()):n&&n(o)})):n&&n(o)}()}function An(e,t){void 0===e.currentLocationPath&&(e.currentLocationPath=e.to=bn(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function En(e,t){for(var n=0;n<e.instance.routes.length;n++){var o=yn(e,e.instance.routes[n]);if(o&&(e.matches||(e.matches=[]),e.matches.push(o),"ONE"===e.resolveOptions.strategy))return void t()}t()}function $n(e,t){e.navigateOptions&&(void 0!==e.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==e.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function Pn(e,t){!0===e.navigateOptions.force?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}xn.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};var On=kn(),Nn=wn();function Mn(e,t){if(_n(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),o=On&&e.resolveOptions&&!0===e.resolveOptions.hash;Nn?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout((function(){if(!o){var t=location.hash;location.hash="",location.hash=t}e.instance.__freezeListening=!1}),1))):On&&(window.location.href=e.to)}t()}function Cn(e,t){var n=e.instance;n.lastResolved()?xn(n.lastResolved().map((function(t){return function(n,o){if(t.route.hooks&&t.route.hooks.leave){var r=!1,f=e.instance.matchLocation(t.route.path,e.currentLocationPath,!1);if("*"!==t.route.path)r=!f;else r=!(!!e.matches&&e.matches.find((function(e){return t.route.path===e.route.path})));_n(e.navigateOptions,"callHooks")&&r?xn(t.route.hooks.leave.map((function(t){return function(n,o){return t((function(t){!1===t?e.instance.__markAsClean(e):o()}),e.matches&&e.matches.length>0?1===e.matches.length?e.matches[0]:e.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return t()})):t()}function jn(e,t){_n(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var Tn=[function(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString)return n.forEach((function(t){t.route.hooks&&t.route.hooks.already&&_n(e.navigateOptions,"callHooks")&&t.route.hooks.already.forEach((function(t){return t(e.match)}))})),void t(!1);t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.before&&_n(e.navigateOptions,"callHooks")?xn(e.match.route.hooks.before.map((function(t){return function(n,o){return t((function(t){!1===t?e.instance.__markAsClean(e):o()}),e.match)}})).concat([function(){return t()}])):t()},function(e,t){_n(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.after&&_n(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach((function(t){return t(e.match)})),t()}],Rn=[Cn,function(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var o=mn(e.currentLocationPath),r=o[0],f=o[1],a=gn(e.to);n.path=dn(r);var i={url:n.path,queryString:f,hashString:a,data:null,route:n,params:""!==f?vn(f):null};e.matches=[i],e.match=i}t()},xn.if((function(e){return e.notFoundHandled}),Tn.concat([jn]),[function(e,t){e.resolveOptions&&!1!==e.resolveOptions.noMatchWarning&&void 0!==e.resolveOptions.noMatchWarning||console.warn('Navigo: "'+e.currentLocationPath+"\" didn't match any of the registered routes."),t()},function(e,t){e.instance._setCurrent(null),t()}])];function qn(){return qn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},qn.apply(this,arguments)}function Un(e,t){var n=0;Cn(e,(function o(){n!==e.matches.length?xn(Tn,qn({},e,{match:e.matches[n]}),(function(){n+=1,o()})):jn(e,t)}))}function zn(e){e.instance.__markAsClean(e)}function Ln(){return Ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ln.apply(this,arguments)}function In(e,t){var n,o=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:"[data-navigo]"},r=this,f="/",a=null,i=[],c=!1,s=wn(),l=kn();function u(e){return e.indexOf("#")>=0&&(e=!0===o.hash?e.split("#")[1]||"/":e.split("#")[0]),e}function h(e){return dn(f+"/"+dn(e))}function b(e,t,n,o){return e=pn(e)?h(e):e,{name:o||dn(String(e)),path:e,handler:t,hooks:Sn(n)}}function d(e,t){if(!r.__dirty){r.__dirty=!0,e=e?dn(f)+"/"+dn(e):void 0;var n={instance:r,to:e,currentLocationPath:e,navigateOptions:{},resolveOptions:Ln({},o,t)};return xn([An,En,xn.if((function(e){var t=e.matches;return t&&t.length>0}),Un,Rn)],n,zn),!!n.matches&&n.matches}r.__waiting.push((function(){return r.resolve(e,t)}))}function p(e,t){if(r.__dirty)r.__waiting.push((function(){return r.navigate(e,t)}));else{r.__dirty=!0,e=dn(f)+"/"+dn(e);var n={instance:r,to:e,navigateOptions:t||{},resolveOptions:t&&t.resolveOptions?t.resolveOptions:o,currentLocationPath:u(e)};xn([$n,Pn,En,xn.if((function(e){var t=e.matches;return t&&t.length>0}),Un,Rn),Mn,zn],n,zn)}}function g(){if(l)return function(){if(l)return[].slice.call(document.querySelectorAll(o.linksSelector||"[data-navigo]"));return[]}().forEach((function(e){"false"!==e.getAttribute("data-navigo")&&"_blank"!==e.getAttribute("target")?e.hasListenerAttached||(e.hasListenerAttached=!0,e.navigoHandler=function(t){if((t.ctrlKey||t.metaKey)&&"a"===t.target.tagName.toLowerCase())return!1;var n=e.getAttribute("href");if(null==n)return!1;if(n.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(n);n=o.pathname+o.search}catch(a){}var f=function(e){if(!e)return{};var t,n=e.split(","),o={};return n.forEach((function(e){var n=e.split(":").map((function(e){return e.replace(/(^ +| +$)/g,"")}));switch(n[0]){case"historyAPIMethod":o.historyAPIMethod=n[1];break;case"resolveOptionsStrategy":t||(t={}),t.strategy=n[1];break;case"resolveOptionsHash":t||(t={}),t.hash="true"===n[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[n[0]]="true"===n[1]}})),t&&(o.resolveOptions=t),o}(e.getAttribute("data-navigo-options"));c||(t.preventDefault(),t.stopPropagation(),r.navigate(dn(n),f))},e.addEventListener("click",e.navigoHandler)):e.hasListenerAttached&&e.removeEventListener("click",e.navigoHandler)})),r}function m(e,t,n){var o=i.find((function(t){return t.name===e})),r=null;if(o){if(r=o.path,t)for(var a in t)r=r.replace(":"+a,t[a]);r=r.match(/^\//)?r:"/"+r}return r&&n&&!n.includeRoot&&(r=r.replace(new RegExp("^/"+f),"")),r}function v(e){var t=mn(dn(e)),o=t[0],r=t[1],f=""===r?null:vn(r);return{url:o,queryString:r,hashString:gn(e),route:b(o,(function(){}),[n],o),data:null,params:f}}function y(e,t,n){return"string"==typeof t&&(t=w(t)),t?(t.hooks[e]||(t.hooks[e]=[]),t.hooks[e].push(n),function(){t.hooks[e]=t.hooks[e].filter((function(e){return e!==n}))}):(console.warn("Route doesn't exists: "+t),function(){})}function w(e){return"string"==typeof e?i.find((function(t){return t.name===h(e)})):i.find((function(t){return t.handler===e}))}e?f=dn(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=f,this.routes=i,this.destroyed=c,this.current=a,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(e){e.instance.__dirty=!1,e.instance.__waiting.length>0&&e.instance.__waiting.shift()()},this.on=function(e,t,o){var r=this;return"object"!=typeof e||e instanceof RegExp?("function"==typeof e&&(o=t,t=e,e=f),i.push(b(e,t,[n,o])),this):(Object.keys(e).forEach((function(t){if("function"==typeof e[t])r.on(t,e[t]);else{var o=e[t],f=o.uses,a=o.as,c=o.hooks;i.push(b(t,f,[n,c],a))}})),this)},this.off=function(e){return this.routes=i=i.filter((function(t){return pn(e)?dn(t.path)!==dn(e):"function"==typeof e?e!==t.handler:String(t.path)!==String(e)})),this},this.resolve=d,this.navigate=p,this.navigateByName=function(e,t,n){var o=m(e,t);return null!==o&&(p(o.replace(new RegExp("^/?"+f),""),n),!0)},this.destroy=function(){this.routes=i=[],s&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=c=!0},this.notFound=function(e,t){return r._notFoundRoute=b("*",e,[n,t],"__NOT_FOUND__"),this},this.updatePageLinks=g,this.link=function(e){return"/"+f+"/"+dn(e)},this.hooks=function(e){return n=e,this},this.extractGETParameters=function(e){return mn(u(e))},this.lastResolved=function(){return a},this.generate=m,this.getLinkPath=function(e){return e.getAttribute("href")},this.match=function(e){var t={instance:r,currentLocationPath:e,to:e,navigateOptions:{},resolveOptions:o};return En(t,(function(){})),!!t.matches&&t.matches},this.matchLocation=function(e,t,n){void 0===t||void 0!==n&&!n||(t=h(t));var o={instance:r,to:t,currentLocationPath:t};An(o,(function(){})),"string"==typeof e&&(e=void 0===n||n?h(e):e);var f=yn(o,{name:String(e),path:e,handler:function(){},hooks:{}});return f||!1},this.getCurrentLocation=function(){return v(dn(bn(f)).replace(new RegExp("^"+f),""))},this.addBeforeHook=y.bind(this,"before"),this.addAfterHook=y.bind(this,"after"),this.addAlreadyHook=y.bind(this,"already"),this.addLeaveHook=y.bind(this,"leave"),this.getRoute=w,this._pathToMatchObject=v,this._clean=dn,this._checkForAHash=u,this._setCurrent=function(e){return a=r.current=e},function(){s&&(this.__popstateListener=function(){r.__freezeListening||d()},window.addEventListener("popstate",this.__popstateListener))}.call(this),g.call(this)}function Hn(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Dn(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Fn(e){let t,n,o;function r(e,o,r=0,f=e.length){if(r<f){if(0!==t(o,o))return f;do{const t=r+f>>>1;n(e[t],o)<0?r=t+1:f=t}while(r<f)}return r}return 2!==e.length?(t=Hn,n=(t,n)=>Hn(e(t),n),o=(t,n)=>e(t)-n):(t=e===Hn||e===Dn?e:Bn,n=e,o=e),{left:r,center:function(e,t,n=0,f=e.length){const a=r(e,t,n,f-1);return a>n&&o(e[a-1],t)>-o(e[a],t)?a-1:a},right:function(e,o,r=0,f=e.length){if(r<f){if(0!==t(o,o))return f;do{const t=r+f>>>1;n(e[t],o)<=0?r=t+1:f=t}while(r<f)}return r}}}function Bn(){return 0}function Vn(e){return null===e?NaN:+e}const Wn=Fn(Hn).right;Fn(Vn).center;var Xn=Wn;class Kn{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let n=0;for(let o=0;o<this._n&&o<32;o++){const r=t[o],f=e+r,a=Math.abs(e)<Math.abs(r)?e-(f-r):r-(f-e);a&&(t[n++]=a),e=f}return t[n]=e,this._n=n+1,this}valueOf(){const e=this._partials;let t,n,o,r=this._n,f=0;if(r>0){for(f=e[--r];r>0&&(t=f,n=e[--r],f=t+n,o=n-(f-t),!o););r>0&&(o<0&&e[r-1]<0||o>0&&e[r-1]>0)&&(n=2*o,t=f+n,n==t-f&&(f=t))}return f}}var Yn=Math.sqrt(50),Jn=Math.sqrt(10),Zn=Math.sqrt(2);function Gn(e,t,n){var o=(t-e)/Math.max(0,n),r=Math.floor(Math.log(o)/Math.LN10),f=o/Math.pow(10,r);return r>=0?(f>=Yn?10:f>=Jn?5:f>=Zn?2:1)*Math.pow(10,r):-Math.pow(10,-r)/(f>=Yn?10:f>=Jn?5:f>=Zn?2:1)}function Qn(e,t){let n;if(void 0===t)for(const o of e)null!=o&&(n<o||void 0===n&&o>=o)&&(n=o);else{let o=-1;for(let r of e)null!=(r=t(r,++o,e))&&(n<r||void 0===n&&r>=r)&&(n=r)}return n}function eo(e,t){let n;if(void 0===t)for(const o of e)null!=o&&(n>o||void 0===n&&o>=o)&&(n=o);else{let o=-1;for(let r of e)null!=(r=t(r,++o,e))&&(n>r||void 0===n&&r>=r)&&(n=r)}return n}function to(e,t,n=Vn){if(o=e.length){if((t=+t)<=0||o<2)return+n(e[0],0,e);if(t>=1)return+n(e[o-1],o-1,e);var o,r=(o-1)*t,f=Math.floor(r),a=+n(e[f],f,e);return a+(+n(e[f+1],f+1,e)-a)*(r-f)}}function no(e){return Array.from(function*(e){for(const t of e)yield*t}(e))}function oo(e,t,n){e=+e,t=+t,n=(r=arguments.length)<2?(t=e,e=0,1):r<3?1:+n;for(var o=-1,r=0|Math.max(0,Math.ceil((t-e)/n)),f=new Array(r);++o<r;)f[o]=e+o*n;return f}function ro(e){return e}function fo(e){return"translate("+e+",0)"}function ao(e){return"translate(0,"+e+")"}function io(e){return t=>+e(t)}function co(e,t){return t=Math.max(0,e.bandwidth()-2*t)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function so(){return!this.__axis}function lo(e,t){var n=[],o=null,r=null,f=6,a=6,i=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,s=1===e||4===e?-1:1,l=4===e||2===e?"x":"y",u=1===e||3===e?fo:ao;function h(h){var b=null==o?t.ticks?t.ticks.apply(t,n):t.domain():o,d=null==r?t.tickFormat?t.tickFormat.apply(t,n):ro:r,p=Math.max(f,0)+i,g=t.range(),m=+g[0]+c,v=+g[g.length-1]+c,y=(t.bandwidth?co:io)(t.copy(),c),w=h.selection?h.selection():h,_=w.selectAll(".domain").data([null]),k=w.selectAll(".tick").data(b,t).order(),S=k.exit(),x=k.enter().append("g").attr("class","tick"),A=k.select("line"),E=k.select("text");_=_.merge(_.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(x),A=A.merge(x.append("line").attr("stroke","currentColor").attr(l+"2",s*f)),E=E.merge(x.append("text").attr("fill","currentColor").attr(l,s*p).attr("dy",1===e?"0em":3===e?"0.71em":"0.32em")),h!==w&&(_=_.transition(h),k=k.transition(h),A=A.transition(h),E=E.transition(h),S=S.transition(h).attr("opacity",1e-6).attr("transform",(function(e){return isFinite(e=y(e))?u(e+c):this.getAttribute("transform")})),x.attr("opacity",1e-6).attr("transform",(function(e){var t=this.parentNode.__axis;return u((t&&isFinite(t=t(e))?t:y(e))+c)}))),S.remove(),_.attr("d",4===e||2===e?a?"M"+s*a+","+m+"H"+c+"V"+v+"H"+s*a:"M"+c+","+m+"V"+v:a?"M"+m+","+s*a+"V"+c+"H"+v+"V"+s*a:"M"+m+","+c+"H"+v),k.attr("opacity",1).attr("transform",(function(e){return u(y(e)+c)})),A.attr(l+"2",s*f),E.attr(l,s*p).text(d),w.filter(so).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===e?"start":4===e?"end":"middle"),w.each((function(){this.__axis=y}))}return h.scale=function(e){return arguments.length?(t=e,h):t},h.ticks=function(){return n=Array.from(arguments),h},h.tickArguments=function(e){return arguments.length?(n=null==e?[]:Array.from(e),h):n.slice()},h.tickValues=function(e){return arguments.length?(o=null==e?null:Array.from(e),h):o&&o.slice()},h.tickFormat=function(e){return arguments.length?(r=e,h):r},h.tickSize=function(e){return arguments.length?(f=a=+e,h):f},h.tickSizeInner=function(e){return arguments.length?(f=+e,h):f},h.tickSizeOuter=function(e){return arguments.length?(a=+e,h):a},h.tickPadding=function(e){return arguments.length?(i=+e,h):i},h.offset=function(e){return arguments.length?(c=+e,h):c},h}function uo(e){return lo(4,e)}var ho={value:()=>{}};function bo(){for(var e,t=0,n=arguments.length,o={};t<n;++t){if(!(e=arguments[t]+"")||e in o||/[\s.]/.test(e))throw new Error("illegal type: "+e);o[e]=[]}return new po(o)}function po(e){this._=e}function go(e,t){return e.trim().split(/^|\s+/).map((function(e){var n="",o=e.indexOf(".");if(o>=0&&(n=e.slice(o+1),e=e.slice(0,o)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}}))}function mo(e,t){for(var n,o=0,r=e.length;o<r;++o)if((n=e[o]).name===t)return n.value}function vo(e,t,n){for(var o=0,r=e.length;o<r;++o)if(e[o].name===t){e[o]=ho,e=e.slice(0,o).concat(e.slice(o+1));break}return null!=n&&e.push({name:t,value:n}),e}function yo(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function wo(e,t){var n=Object.create(e.prototype);for(var o in t)n[o]=t[o];return n}function _o(){}po.prototype=bo.prototype={constructor:po,on:function(e,t){var n,o=this._,r=go(e+"",o),f=-1,a=r.length;if(!(arguments.length<2)){if(null!=t&&"function"!=typeof t)throw new Error("invalid callback: "+t);for(;++f<a;)if(n=(e=r[f]).type)o[n]=vo(o[n],e.name,t);else if(null==t)for(n in o)o[n]=vo(o[n],e.name,null);return this}for(;++f<a;)if((n=(e=r[f]).type)&&(n=mo(o[n],e.name)))return n},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new po(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var n,o,r=new Array(n),f=0;f<n;++f)r[f]=arguments[f+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(f=0,n=(o=this._[e]).length;f<n;++f)o[f].value.apply(t,r)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var o=this._[e],r=0,f=o.length;r<f;++r)o[r].value.apply(t,n)}};var ko=1/.7,So="\\s*([+-]?\\d+)\\s*",xo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ao="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Eo=/^#([0-9a-f]{3,8})$/,$o=new RegExp(`^rgb\\(${So},${So},${So}\\)$`),Po=new RegExp(`^rgb\\(${Ao},${Ao},${Ao}\\)$`),Oo=new RegExp(`^rgba\\(${So},${So},${So},${xo}\\)$`),No=new RegExp(`^rgba\\(${Ao},${Ao},${Ao},${xo}\\)$`),Mo=new RegExp(`^hsl\\(${xo},${Ao},${Ao}\\)$`),Co=new RegExp(`^hsla\\(${xo},${Ao},${Ao},${xo}\\)$`),jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function To(){return this.rgb().formatHex()}function Ro(){return this.rgb().formatRgb()}function qo(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Eo.exec(e))?(n=t[1].length,t=parseInt(t[1],16),6===n?Uo(t):3===n?new Ho(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===n?zo(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===n?zo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=$o.exec(e))?new Ho(t[1],t[2],t[3],1):(t=Po.exec(e))?new Ho(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=Oo.exec(e))?zo(t[1],t[2],t[3],t[4]):(t=No.exec(e))?zo(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=Mo.exec(e))?Xo(t[1],t[2]/100,t[3]/100,1):(t=Co.exec(e))?Xo(t[1],t[2]/100,t[3]/100,t[4]):jo.hasOwnProperty(e)?Uo(jo[e]):"transparent"===e?new Ho(NaN,NaN,NaN,0):null}function Uo(e){return new Ho(e>>16&255,e>>8&255,255&e,1)}function zo(e,t,n,o){return o<=0&&(e=t=n=NaN),new Ho(e,t,n,o)}function Lo(e){return e instanceof _o||(e=qo(e)),e?new Ho((e=e.rgb()).r,e.g,e.b,e.opacity):new Ho}function Io(e,t,n,o){return 1===arguments.length?Lo(e):new Ho(e,t,n,null==o?1:o)}function Ho(e,t,n,o){this.r=+e,this.g=+t,this.b=+n,this.opacity=+o}function Do(){return`#${Wo(this.r)}${Wo(this.g)}${Wo(this.b)}`}function Fo(){const e=Bo(this.opacity);return`${1===e?"rgb(":"rgba("}${Vo(this.r)}, ${Vo(this.g)}, ${Vo(this.b)}${1===e?")":`, ${e})`}`}function Bo(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Vo(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Wo(e){return((e=Vo(e))<16?"0":"")+e.toString(16)}function Xo(e,t,n,o){return o<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Yo(e,t,n,o)}function Ko(e){if(e instanceof Yo)return new Yo(e.h,e.s,e.l,e.opacity);if(e instanceof _o||(e=qo(e)),!e)return new Yo;if(e instanceof Yo)return e;var t=(e=e.rgb()).r/255,n=e.g/255,o=e.b/255,r=Math.min(t,n,o),f=Math.max(t,n,o),a=NaN,i=f-r,c=(f+r)/2;return i?(a=t===f?(n-o)/i+6*(n<o):n===f?(o-t)/i+2:(t-n)/i+4,i/=c<.5?f+r:2-f-r,a*=60):i=c>0&&c<1?0:a,new Yo(a,i,c,e.opacity)}function Yo(e,t,n,o){this.h=+e,this.s=+t,this.l=+n,this.opacity=+o}function Jo(e){return(e=(e||0)%360)<0?e+360:e}function Zo(e){return Math.max(0,Math.min(1,e||0))}function Go(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}yo(_o,qo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:To,formatHex:To,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Ko(this).formatHsl()},formatRgb:Ro,toString:Ro}),yo(Ho,Io,wo(_o,{brighter(e){return e=null==e?ko:Math.pow(ko,e),new Ho(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?.7:Math.pow(.7,e),new Ho(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ho(Vo(this.r),Vo(this.g),Vo(this.b),Bo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Do,formatHex:Do,formatHex8:function(){return`#${Wo(this.r)}${Wo(this.g)}${Wo(this.b)}${Wo(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Fo,toString:Fo})),yo(Yo,(function(e,t,n,o){return 1===arguments.length?Ko(e):new Yo(e,t,n,null==o?1:o)}),wo(_o,{brighter(e){return e=null==e?ko:Math.pow(ko,e),new Yo(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?.7:Math.pow(.7,e),new Yo(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*t,r=2*n-o;return new Ho(Go(e>=240?e-240:e+120,r,o),Go(e,r,o),Go(e<120?e+240:e-120,r,o),this.opacity)},clamp(){return new Yo(Jo(this.h),Zo(this.s),Zo(this.l),Bo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Bo(this.opacity);return`${1===e?"hsl(":"hsla("}${Jo(this.h)}, ${100*Zo(this.s)}%, ${100*Zo(this.l)}%${1===e?")":`, ${e})`}`}}));var Qo=e=>()=>e;function er(e){return 1==(e=+e)?tr:function(t,n){return n-t?function(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(o){return Math.pow(e+o*t,n)}}(t,n,e):Qo(isNaN(t)?n:t)}}function tr(e,t){var n=t-e;return n?function(e,t){return function(n){return e+n*t}}(e,n):Qo(isNaN(e)?t:e)}var nr=function e(t){var n=er(t);function o(e,t){var o=n((e=Io(e)).r,(t=Io(t)).r),r=n(e.g,t.g),f=n(e.b,t.b),a=tr(e.opacity,t.opacity);return function(t){return e.r=o(t),e.g=r(t),e.b=f(t),e.opacity=a(t),e+""}}return o.gamma=e,o}(1);function or(e,t){t||(t=[]);var n,o=e?Math.min(t.length,e.length):0,r=t.slice();return function(f){for(n=0;n<o;++n)r[n]=e[n]*(1-f)+t[n]*f;return r}}function rr(e,t){var n,o=t?t.length:0,r=e?Math.min(o,e.length):0,f=new Array(r),a=new Array(o);for(n=0;n<r;++n)f[n]=ur(e[n],t[n]);for(;n<o;++n)a[n]=t[n];return function(e){for(n=0;n<r;++n)a[n]=f[n](e);return a}}function fr(e,t){var n=new Date;return e=+e,t=+t,function(o){return n.setTime(e*(1-o)+t*o),n}}function ar(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function ir(e,t){var n,o={},r={};for(n in null!==e&&"object"==typeof e||(e={}),null!==t&&"object"==typeof t||(t={}),t)n in e?o[n]=ur(e[n],t[n]):r[n]=t[n];return function(e){for(n in o)r[n]=o[n](e);return r}}var cr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sr=new RegExp(cr.source,"g");function lr(e,t){var n,o,r,f=cr.lastIndex=sr.lastIndex=0,a=-1,i=[],c=[];for(e+="",t+="";(n=cr.exec(e))&&(o=sr.exec(t));)(r=o.index)>f&&(r=t.slice(f,r),i[a]?i[a]+=r:i[++a]=r),(n=n[0])===(o=o[0])?i[a]?i[a]+=o:i[++a]=o:(i[++a]=null,c.push({i:a,x:ar(n,o)})),f=sr.lastIndex;return f<t.length&&(r=t.slice(f),i[a]?i[a]+=r:i[++a]=r),i.length<2?c[0]?function(e){return function(t){return e(t)+""}}(c[0].x):function(e){return function(){return e}}(t):(t=c.length,function(e){for(var n,o=0;o<t;++o)i[(n=c[o]).i]=n.x(e);return i.join("")})}function ur(e,t){var n,o,r=typeof t;return null==t||"boolean"===r?Qo(t):("number"===r?ar:"string"===r?(n=qo(t))?(t=n,nr):lr:t instanceof qo?nr:t instanceof Date?fr:(o=t,!ArrayBuffer.isView(o)||o instanceof DataView?Array.isArray(t)?rr:"function"!=typeof t.valueOf&&"function"!=typeof t.toString||isNaN(t)?ir:ar:or))(e,t)}function hr(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var br="http://www.w3.org/1999/xhtml",dr={svg:"http://www.w3.org/2000/svg",xhtml:br,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function pr(e){var t=e+="",n=t.indexOf(":");return n>=0&&"xmlns"!==(t=e.slice(0,n))&&(e=e.slice(n+1)),dr.hasOwnProperty(t)?{space:dr[t],local:e}:e}function gr(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===br&&t.documentElement.namespaceURI===br?t.createElement(e):t.createElementNS(n,e)}}function mr(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function vr(e){var t=pr(e);return(t.local?mr:gr)(t)}function yr(){}function wr(e){return null==e?yr:function(){return this.querySelector(e)}}function _r(e){return null==e?[]:Array.isArray(e)?e:Array.from(e)}function kr(){return[]}function Sr(e){return function(t){return t.matches(e)}}var xr=Array.prototype.find;function Ar(){return this.firstElementChild}var Er=Array.prototype.filter;function $r(){return Array.from(this.children)}function Pr(e){return new Array(e.length)}function Or(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}function Nr(e){return function(){return e}}function Mr(e,t,n,o,r,f){for(var a,i=0,c=t.length,s=f.length;i<s;++i)(a=t[i])?(a.__data__=f[i],o[i]=a):n[i]=new Or(e,f[i]);for(;i<c;++i)(a=t[i])&&(r[i]=a)}function Cr(e,t,n,o,r,f,a){var i,c,s,l=new Map,u=t.length,h=f.length,b=new Array(u);for(i=0;i<u;++i)(c=t[i])&&(b[i]=s=a.call(c,c.__data__,i,t)+"",l.has(s)?r[i]=c:l.set(s,c));for(i=0;i<h;++i)s=a.call(e,f[i],i,f)+"",(c=l.get(s))?(o[i]=c,c.__data__=f[i],l.delete(s)):n[i]=new Or(e,f[i]);for(i=0;i<u;++i)(c=t[i])&&l.get(b[i])===c&&(r[i]=c)}function jr(e){return e.__data__}function Tr(e){return"object"==typeof e&&"length"in e?e:Array.from(e)}function Rr(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function qr(e){return function(){this.removeAttribute(e)}}function Ur(e){return function(){this.removeAttributeNS(e.space,e.local)}}function zr(e,t){return function(){this.setAttribute(e,t)}}function Lr(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Ir(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttribute(e):this.setAttribute(e,n)}}function Hr(e,t){return function(){var n=t.apply(this,arguments);null==n?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Dr(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Fr(e){return function(){this.style.removeProperty(e)}}function Br(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Vr(e,t,n){return function(){var o=t.apply(this,arguments);null==o?this.style.removeProperty(e):this.style.setProperty(e,o,n)}}function Wr(e,t){return e.style.getPropertyValue(t)||Dr(e).getComputedStyle(e,null).getPropertyValue(t)}function Xr(e){return function(){delete this[e]}}function Kr(e,t){return function(){this[e]=t}}function Yr(e,t){return function(){var n=t.apply(this,arguments);null==n?delete this[e]:this[e]=n}}function Jr(e){return e.trim().split(/^|\s+/)}function Zr(e){return e.classList||new Gr(e)}function Gr(e){this._node=e,this._names=Jr(e.getAttribute("class")||"")}function Qr(e,t){for(var n=Zr(e),o=-1,r=t.length;++o<r;)n.add(t[o])}function ef(e,t){for(var n=Zr(e),o=-1,r=t.length;++o<r;)n.remove(t[o])}function tf(e){return function(){Qr(this,e)}}function nf(e){return function(){ef(this,e)}}function of(e,t){return function(){(t.apply(this,arguments)?Qr:ef)(this,e)}}function rf(){this.textContent=""}function ff(e){return function(){this.textContent=e}}function af(e){return function(){var t=e.apply(this,arguments);this.textContent=null==t?"":t}}function cf(){this.innerHTML=""}function sf(e){return function(){this.innerHTML=e}}function lf(e){return function(){var t=e.apply(this,arguments);this.innerHTML=null==t?"":t}}function uf(){this.nextSibling&&this.parentNode.appendChild(this)}function hf(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function bf(){return null}function df(){var e=this.parentNode;e&&e.removeChild(this)}function pf(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function gf(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function mf(e){return e.trim().split(/^|\s+/).map((function(e){var t="",n=e.indexOf(".");return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}}))}function vf(e){return function(){var t=this.__on;if(t){for(var n,o=0,r=-1,f=t.length;o<f;++o)n=t[o],e.type&&n.type!==e.type||n.name!==e.name?t[++r]=n:this.removeEventListener(n.type,n.listener,n.options);++r?t.length=r:delete this.__on}}}function yf(e,t,n){return function(){var o,r=this.__on,f=function(e){return function(t){e.call(this,t,this.__data__)}}(t);if(r)for(var a=0,i=r.length;a<i;++a)if((o=r[a]).type===e.type&&o.name===e.name)return this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=f,o.options=n),void(o.value=t);this.addEventListener(e.type,f,n),o={type:e.type,name:e.name,value:t,listener:f,options:n},r?r.push(o):this.__on=[o]}}function wf(e,t,n){var o=Dr(e),r=o.CustomEvent;"function"==typeof r?r=new r(t,n):(r=o.document.createEvent("Event"),n?(r.initEvent(t,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(t,!1,!1)),e.dispatchEvent(r)}function _f(e,t){return function(){return wf(this,e,t)}}function kf(e,t){return function(){return wf(this,e,t.apply(this,arguments))}}Or.prototype={constructor:Or,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}},Gr.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};var Sf=[null];function xf(e,t){this._groups=e,this._parents=t}function Af(e){return"string"==typeof e?new xf([[document.querySelector(e)]],[document.documentElement]):new xf([[e]],Sf)}function Ef(e,t){if(e=function(e){let t;for(;t=e.sourceEvent;)e=t;return e}(e),void 0===t&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var o=n.createSVGPoint();return o.x=e.clientX,o.y=e.clientY,[(o=o.matrixTransform(t.getScreenCTM().inverse())).x,o.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[e.clientX-r.left-t.clientLeft,e.clientY-r.top-t.clientTop]}}return[e.pageX,e.pageY]}xf.prototype={constructor:xf,select:function(e){"function"!=typeof e&&(e=wr(e));for(var t=this._groups,n=t.length,o=new Array(n),r=0;r<n;++r)for(var f,a,i=t[r],c=i.length,s=o[r]=new Array(c),l=0;l<c;++l)(f=i[l])&&(a=e.call(f,f.__data__,l,i))&&("__data__"in f&&(a.__data__=f.__data__),s[l]=a);return new xf(o,this._parents)},selectAll:function(e){var t;"function"==typeof e?e=function(e){return function(){return _r(e.apply(this,arguments))}}(e):e=null==(t=e)?kr:function(){return this.querySelectorAll(t)};for(var n=this._groups,o=n.length,r=[],f=[],a=0;a<o;++a)for(var i,c=n[a],s=c.length,l=0;l<s;++l)(i=c[l])&&(r.push(e.call(i,i.__data__,l,c)),f.push(i));return new xf(r,f)},selectChild:function(e){return this.select(null==e?Ar:function(e){return function(){return xr.call(this.children,e)}}("function"==typeof e?e:Sr(e)))},selectChildren:function(e){return this.selectAll(null==e?$r:function(e){return function(){return Er.call(this.children,e)}}("function"==typeof e?e:Sr(e)))},filter:function(e){var t;"function"!=typeof e&&(t=e,e=function(){return this.matches(t)});for(var n=this._groups,o=n.length,r=new Array(o),f=0;f<o;++f)for(var a,i=n[f],c=i.length,s=r[f]=[],l=0;l<c;++l)(a=i[l])&&e.call(a,a.__data__,l,i)&&s.push(a);return new xf(r,this._parents)},data:function(e,t){if(!arguments.length)return Array.from(this,jr);var n=t?Cr:Mr,o=this._parents,r=this._groups;"function"!=typeof e&&(e=Nr(e));for(var f=r.length,a=new Array(f),i=new Array(f),c=new Array(f),s=0;s<f;++s){var l=o[s],u=r[s],h=u.length,b=Tr(e.call(l,l&&l.__data__,s,o)),d=b.length,p=i[s]=new Array(d),g=a[s]=new Array(d),m=c[s]=new Array(h);n(l,u,p,g,m,b,t);for(var v,y,w=0,_=0;w<d;++w)if(v=p[w]){for(w>=_&&(_=w+1);!(y=g[_])&&++_<d;);v._next=y||null}}return(a=new xf(a,o))._enter=i,a._exit=c,a},enter:function(){return new xf(this._enter||this._groups.map(Pr),this._parents)},exit:function(){return new xf(this._exit||this._groups.map(Pr),this._parents)},join:function(e,t,n){var o=this.enter(),r=this,f=this.exit();return"function"==typeof e?(o=e(o))&&(o=o.selection()):o=o.append(e+""),null!=t&&(r=t(r))&&(r=r.selection()),null==n?f.remove():n(f),o&&r?o.merge(r).order():r},merge:function(e){for(var t=e.selection?e.selection():e,n=this._groups,o=t._groups,r=n.length,f=o.length,a=Math.min(r,f),i=new Array(r),c=0;c<a;++c)for(var s,l=n[c],u=o[c],h=l.length,b=i[c]=new Array(h),d=0;d<h;++d)(s=l[d]||u[d])&&(b[d]=s);for(;c<r;++c)i[c]=n[c];return new xf(i,this._parents)},selection:function(){return this},order:function(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var o,r=e[t],f=r.length-1,a=r[f];--f>=0;)(o=r[f])&&(a&&4^o.compareDocumentPosition(a)&&a.parentNode.insertBefore(o,a),a=o);return this},sort:function(e){function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}e||(e=Rr);for(var n=this._groups,o=n.length,r=new Array(o),f=0;f<o;++f){for(var a,i=n[f],c=i.length,s=r[f]=new Array(c),l=0;l<c;++l)(a=i[l])&&(s[l]=a);s.sort(t)}return new xf(r,this._parents).order()},call:function(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o=e[t],r=0,f=o.length;r<f;++r){var a=o[r];if(a)return a}return null},size:function(){let e=0;for(const t of this)++e;return e},empty:function(){return!this.node()},each:function(e){for(var t=this._groups,n=0,o=t.length;n<o;++n)for(var r,f=t[n],a=0,i=f.length;a<i;++a)(r=f[a])&&e.call(r,r.__data__,a,f);return this},attr:function(e,t){var n=pr(e);if(arguments.length<2){var o=this.node();return n.local?o.getAttributeNS(n.space,n.local):o.getAttribute(n)}return this.each((null==t?n.local?Ur:qr:"function"==typeof t?n.local?Hr:Ir:n.local?Lr:zr)(n,t))},style:function(e,t,n){return arguments.length>1?this.each((null==t?Fr:"function"==typeof t?Vr:Br)(e,t,null==n?"":n)):Wr(this.node(),e)},property:function(e,t){return arguments.length>1?this.each((null==t?Xr:"function"==typeof t?Yr:Kr)(e,t)):this.node()[e]},classed:function(e,t){var n=Jr(e+"");if(arguments.length<2){for(var o=Zr(this.node()),r=-1,f=n.length;++r<f;)if(!o.contains(n[r]))return!1;return!0}return this.each(("function"==typeof t?of:t?tf:nf)(n,t))},text:function(e){return arguments.length?this.each(null==e?rf:("function"==typeof e?af:ff)(e)):this.node().textContent},html:function(e){return arguments.length?this.each(null==e?cf:("function"==typeof e?lf:sf)(e)):this.node().innerHTML},raise:function(){return this.each(uf)},lower:function(){return this.each(hf)},append:function(e){var t="function"==typeof e?e:vr(e);return this.select((function(){return this.appendChild(t.apply(this,arguments))}))},insert:function(e,t){var n="function"==typeof e?e:vr(e),o=null==t?bf:"function"==typeof t?t:wr(t);return this.select((function(){return this.insertBefore(n.apply(this,arguments),o.apply(this,arguments)||null)}))},remove:function(){return this.each(df)},clone:function(e){return this.select(e?gf:pf)},datum:function(e){return arguments.length?this.property("__data__",e):this.node().__data__},on:function(e,t,n){var o,r,f=mf(e+""),a=f.length;if(!(arguments.length<2)){for(i=t?yf:vf,o=0;o<a;++o)this.each(i(f[o],t,n));return this}var i=this.node().__on;if(i)for(var c,s=0,l=i.length;s<l;++s)for(o=0,c=i[s];o<a;++o)if((r=f[o]).type===c.type&&r.name===c.name)return c.value},dispatch:function(e,t){return this.each(("function"==typeof t?kf:_f)(e,t))},[Symbol.iterator]:function*(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var o,r=e[t],f=0,a=r.length;f<a;++f)(o=r[f])&&(yield o)}};const $f={passive:!1},Pf={capture:!0,passive:!1};function Of(e){e.stopImmediatePropagation()}function Nf(e){e.preventDefault(),e.stopImmediatePropagation()}var Mf=e=>()=>e;function Cf(e,{sourceEvent:t,subject:n,target:o,identifier:r,active:f,x:a,y:i,dx:c,dy:s,dispatch:l}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:f,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:i,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:s,enumerable:!0,configurable:!0},_:{value:l}})}function jf(e){return!e.ctrlKey&&!e.button}function Tf(){return this.parentNode}function Rf(e,t){return null==t?{x:e.x,y:e.y}:t}function qf(){return navigator.maxTouchPoints||"ontouchstart"in this}function Uf(){var e,t,n,o,r=jf,f=Tf,a=Rf,i=qf,c={},s=bo("start","drag","end"),l=0,u=0;function h(e){e.on("mousedown.drag",b).filter(i).on("touchstart.drag",g).on("touchmove.drag",m,$f).on("touchend.drag touchcancel.drag",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function b(a,i){if(!o&&r.call(this,a,i)){var c,s,l,u=y(this,f.call(this,a,i),a,i,"mouse");if(u)Af(a.view).on("mousemove.drag",d,Pf).on("mouseup.drag",p,Pf),c=a.view,s=c.document.documentElement,l=Af(c).on("dragstart.drag",Nf,Pf),"onselectstart"in s?l.on("selectstart.drag",Nf,Pf):(s.__noselect=s.style.MozUserSelect,s.style.MozUserSelect="none"),Of(a),n=!1,e=a.clientX,t=a.clientY,u("start",a)}}function d(o){if(Nf(o),!n){var r=o.clientX-e,f=o.clientY-t;n=r*r+f*f>u}c.mouse("drag",o)}function p(e){var t,o,r,f;Af(e.view).on("mousemove.drag mouseup.drag",null),t=e.view,o=n,r=t.document.documentElement,f=Af(t).on("dragstart.drag",null),o&&(f.on("click.drag",Nf,Pf),setTimeout((function(){f.on("click.drag",null)}),0)),"onselectstart"in r?f.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,delete r.__noselect),Nf(e),c.mouse("end",e)}function g(e,t){if(r.call(this,e,t)){var n,o,a=e.changedTouches,i=f.call(this,e,t),c=a.length;for(n=0;n<c;++n)(o=y(this,i,e,t,a[n].identifier,a[n]))&&(Of(e),o("start",e,a[n]))}}function m(e){var t,n,o=e.changedTouches,r=o.length;for(t=0;t<r;++t)(n=c[o[t].identifier])&&(Nf(e),n("drag",e,o[t]))}function v(e){var t,n,r=e.changedTouches,f=r.length;for(o&&clearTimeout(o),o=setTimeout((function(){o=null}),500),t=0;t<f;++t)(n=c[r[t].identifier])&&(Of(e),n("end",e,r[t]))}function y(e,t,n,o,r,f){var i,u,b,d=s.copy(),p=Ef(f||n,t);if(null!=(b=a.call(e,new Cf("beforestart",{sourceEvent:n,target:h,identifier:r,active:l,x:p[0],y:p[1],dx:0,dy:0,dispatch:d}),o)))return i=b.x-p[0]||0,u=b.y-p[1]||0,function n(f,a,s){var g,m=p;switch(f){case"start":c[r]=n,g=l++;break;case"end":delete c[r],--l;case"drag":p=Ef(s||a,t),g=l}d.call(f,e,new Cf(f,{sourceEvent:a,subject:b,target:h,identifier:r,active:g,x:p[0]+i,y:p[1]+u,dx:p[0]-m[0],dy:p[1]-m[1],dispatch:d}),o)}}return h.filter=function(e){return arguments.length?(r="function"==typeof e?e:Mf(!!e),h):r},h.container=function(e){return arguments.length?(f="function"==typeof e?e:Mf(e),h):f},h.subject=function(e){return arguments.length?(a="function"==typeof e?e:Mf(e),h):a},h.touchable=function(e){return arguments.length?(i="function"==typeof e?e:Mf(!!e),h):i},h.on=function(){var e=s.on.apply(s,arguments);return e===s?h:e},h.clickDistance=function(e){return arguments.length?(u=(e=+e)*e,h):Math.sqrt(u)},h}Cf.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};var zf={},Lf={};function If(e){return new Function("d","return {"+e.map((function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'})).join(",")+"}")}function Hf(e){var t=Object.create(null),n=[];return e.forEach((function(e){for(var o in e)o in t||n.push(t[o]=o)})),n}function Df(e,t){var n=e+"",o=n.length;return o<t?new Array(t-o+1).join(0)+n:n}function Ff(e){var t,n=e.getUTCHours(),o=e.getUTCMinutes(),r=e.getUTCSeconds(),f=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":((t=e.getUTCFullYear())<0?"-"+Df(-t,6):t>9999?"+"+Df(t,6):Df(t,4))+"-"+Df(e.getUTCMonth()+1,2)+"-"+Df(e.getUTCDate(),2)+(f?"T"+Df(n,2)+":"+Df(o,2)+":"+Df(r,2)+"."+Df(f,3)+"Z":r?"T"+Df(n,2)+":"+Df(o,2)+":"+Df(r,2)+"Z":o||n?"T"+Df(n,2)+":"+Df(o,2)+"Z":"")}var Bf=function(e){var t=new RegExp('["'+e+"\n\r]"),n=e.charCodeAt(0);function o(e,t){var o,r=[],f=e.length,a=0,i=0,c=f<=0,s=!1;function l(){if(c)return Lf;if(s)return s=!1,zf;var t,o,r=a;if(34===e.charCodeAt(r)){for(;a++<f&&34!==e.charCodeAt(a)||34===e.charCodeAt(++a););return(t=a)>=f?c=!0:10===(o=e.charCodeAt(a++))?s=!0:13===o&&(s=!0,10===e.charCodeAt(a)&&++a),e.slice(r+1,t-1).replace(/""/g,'"')}for(;a<f;){if(10===(o=e.charCodeAt(t=a++)))s=!0;else if(13===o)s=!0,10===e.charCodeAt(a)&&++a;else if(o!==n)continue;return e.slice(r,t)}return c=!0,e.slice(r,f)}for(10===e.charCodeAt(f-1)&&--f,13===e.charCodeAt(f-1)&&--f;(o=l())!==Lf;){for(var u=[];o!==zf&&o!==Lf;)u.push(o),o=l();t&&null==(u=t(u,i++))||r.push(u)}return r}function r(t,n){return t.map((function(t){return n.map((function(e){return a(t[e])})).join(e)}))}function f(t){return t.map(a).join(e)}function a(e){return null==e?"":e instanceof Date?Ff(e):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:function(e,t){var n,r,f=o(e,(function(e,o){if(n)return n(e,o-1);r=e,n=t?function(e,t){var n=If(e);return function(o,r){return t(n(o),r,e)}}(e,t):If(e)}));return f.columns=r||[],f},parseRows:o,format:function(t,n){return null==n&&(n=Hf(t)),[n.map(a).join(e)].concat(r(t,n)).join("\n")},formatBody:function(e,t){return null==t&&(t=Hf(e)),r(e,t).join("\n")},formatRows:function(e){return e.map(f).join("\n")},formatRow:f,formatValue:a}}("\t"),Vf=Bf.parse;function Wf(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function Xf(e,t){return fetch(e,t).then(Wf)}var Kf,Yf=(Kf=Vf,function(e,t,n){return 2===arguments.length&&"function"==typeof t&&(n=t,t=void 0),Xf(e,t).then((function(e){return Kf(e,n)}))});function Jf(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);if(204!==e.status&&205!==e.status)return e.json()}function Zf(e,t){return fetch(e,t).then(Jf)}function Gf(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,o=e.slice(0,n);return[o.length>1?o[0]+o.slice(2):o,+e.slice(n+1)]}function Qf(e){return(e=Gf(Math.abs(e)))?e[1]:NaN}var ea,ta=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function na(e){if(!(t=ta.exec(e)))throw new Error("invalid format: "+e);var t;return new oa({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function oa(e){this.fill=void 0===e.fill?" ":e.fill+"",this.align=void 0===e.align?">":e.align+"",this.sign=void 0===e.sign?"-":e.sign+"",this.symbol=void 0===e.symbol?"":e.symbol+"",this.zero=!!e.zero,this.width=void 0===e.width?void 0:+e.width,this.comma=!!e.comma,this.precision=void 0===e.precision?void 0:+e.precision,this.trim=!!e.trim,this.type=void 0===e.type?"":e.type+""}function ra(e,t){var n=Gf(e,t);if(!n)return e+"";var o=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+o:o.length>r+1?o.slice(0,r+1)+"."+o.slice(r+1):o+new Array(r-o.length+2).join("0")}na.prototype=oa.prototype,oa.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var fa={"%":(e,t)=>(100*e).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:function(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)},e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>ra(100*e,t),r:ra,s:function(e,t){var n=Gf(e,t);if(!n)return e+"";var o=n[0],r=n[1],f=r-(ea=3*Math.max(-8,Math.min(8,Math.floor(r/3))))+1,a=o.length;return f===a?o:f>a?o+new Array(f-a+1).join("0"):f>0?o.slice(0,f)+"."+o.slice(f):"0."+new Array(1-f).join("0")+Gf(e,Math.max(0,t+f-1))[0]},X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function aa(e){return e}var ia,ca,sa,la=Array.prototype.map,ua=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function ha(e){var t,n,o=void 0===e.grouping||void 0===e.thousands?aa:(t=la.call(e.grouping,Number),n=e.thousands+"",function(e,o){for(var r=e.length,f=[],a=0,i=t[0],c=0;r>0&&i>0&&(c+i+1>o&&(i=Math.max(1,o-c)),f.push(e.substring(r-=i,r+i)),!((c+=i+1)>o));)i=t[a=(a+1)%t.length];return f.reverse().join(n)}),r=void 0===e.currency?"":e.currency[0]+"",f=void 0===e.currency?"":e.currency[1]+"",a=void 0===e.decimal?".":e.decimal+"",i=void 0===e.numerals?aa:function(e){return function(t){return t.replace(/[0-9]/g,(function(t){return e[+t]}))}}(la.call(e.numerals,String)),c=void 0===e.percent?"%":e.percent+"",s=void 0===e.minus?"−":e.minus+"",l=void 0===e.nan?"NaN":e.nan+"";function u(e){var t=(e=na(e)).fill,n=e.align,u=e.sign,h=e.symbol,b=e.zero,d=e.width,p=e.comma,g=e.precision,m=e.trim,v=e.type;"n"===v?(p=!0,v="g"):fa[v]||(void 0===g&&(g=12),m=!0,v="g"),(b||"0"===t&&"="===n)&&(b=!0,t="0",n="=");var y="$"===h?r:"#"===h&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",w="$"===h?f:/[%p]/.test(v)?c:"",_=fa[v],k=/[defgprs%]/.test(v);function S(e){var r,f,c,h=y,S=w;if("c"===v)S=_(e)+S,e="";else{var x=(e=+e)<0||1/e<0;if(e=isNaN(e)?l:_(Math.abs(e),g),m&&(e=function(e){e:for(var t,n=e.length,o=1,r=-1;o<n;++o)switch(e[o]){case".":r=t=o;break;case"0":0===r&&(r=o),t=o;break;default:if(!+e[o])break e;r>0&&(r=0)}return r>0?e.slice(0,r)+e.slice(t+1):e}(e)),x&&0==+e&&"+"!==u&&(x=!1),h=(x?"("===u?u:s:"-"===u||"("===u?"":u)+h,S=("s"===v?ua[8+ea/3]:"")+S+(x&&"("===u?")":""),k)for(r=-1,f=e.length;++r<f;)if(48>(c=e.charCodeAt(r))||c>57){S=(46===c?a+e.slice(r+1):e.slice(r))+S,e=e.slice(0,r);break}}p&&!b&&(e=o(e,1/0));var A=h.length+e.length+S.length,E=A<d?new Array(d-A+1).join(t):"";switch(p&&b&&(e=o(E+e,E.length?d-S.length:1/0),E=""),n){case"<":e=h+e+S+E;break;case"=":e=h+E+e+S;break;case"^":e=E.slice(0,A=E.length>>1)+h+e+S+E.slice(A);break;default:e=E+h+e+S}return i(e)}return g=void 0===g?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),S.toString=function(){return e+""},S}return{format:u,formatPrefix:function(e,t){var n=u(((e=na(e)).type="f",e)),o=3*Math.max(-8,Math.min(8,Math.floor(Qf(t)/3))),r=Math.pow(10,-o),f=ua[8+o/3];return function(e){return n(r*e)+f}}}}ia=ha({thousands:",",grouping:[3],currency:["$",""]}),ca=ia.format,sa=ia.formatPrefix;var ba=1e-6,da=Math.PI,pa=da/2,ga=da/4,ma=2*da,va=180/da,ya=da/180,wa=Math.abs,_a=Math.atan,ka=Math.atan2,Sa=Math.cos,xa=Math.ceil,Aa=Math.sin,Ea=Math.sign||function(e){return e>0?1:e<0?-1:0},$a=Math.sqrt;function Pa(e){return e>1?pa:e<-1?-pa:Math.asin(e)}function Oa(){}function Na(e,t){e&&Ca.hasOwnProperty(e.type)&&Ca[e.type](e,t)}var Ma={Feature:function(e,t){Na(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,o=-1,r=n.length;++o<r;)Na(n[o].geometry,t)}},Ca={Sphere:function(e,t){t.sphere()},Point:function(e,t){e=e.coordinates,t.point(e[0],e[1],e[2])},MultiPoint:function(e,t){for(var n=e.coordinates,o=-1,r=n.length;++o<r;)e=n[o],t.point(e[0],e[1],e[2])},LineString:function(e,t){ja(e.coordinates,t,0)},MultiLineString:function(e,t){for(var n=e.coordinates,o=-1,r=n.length;++o<r;)ja(n[o],t,0)},Polygon:function(e,t){Ta(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,o=-1,r=n.length;++o<r;)Ta(n[o],t)},GeometryCollection:function(e,t){for(var n=e.geometries,o=-1,r=n.length;++o<r;)Na(n[o],t)}};function ja(e,t,n){var o,r=-1,f=e.length-n;for(t.lineStart();++r<f;)o=e[r],t.point(o[0],o[1],o[2]);t.lineEnd()}function Ta(e,t){var n=-1,o=e.length;for(t.polygonStart();++n<o;)ja(e[n],t,1);t.polygonEnd()}function Ra(e,t){e&&Ma.hasOwnProperty(e.type)?Ma[e.type](e,t):Na(e,t)}function qa(e){return[ka(e[1],e[0]),Pa(e[2])]}function Ua(e){var t=e[0],n=e[1],o=Sa(n);return[o*Sa(t),o*Aa(t),Aa(n)]}function za(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function La(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Ia(e,t){e[0]+=t[0],e[1]+=t[1],e[2]+=t[2]}function Ha(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function Da(e){var t=$a(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]/=t,e[1]/=t,e[2]/=t}function Fa(e,t){function n(n,o){return n=e(n,o),t(n[0],n[1])}return e.invert&&t.invert&&(n.invert=function(n,o){return(n=t.invert(n,o))&&e.invert(n[0],n[1])}),n}function Ba(e,t){return[wa(e)>da?e+Math.round(-e/ma)*ma:e,t]}function Va(e){return function(t,n){return[(t+=e)>da?t-ma:t<-da?t+ma:t,n]}}function Wa(e){var t=Va(e);return t.invert=Va(-e),t}function Xa(e,t){var n=Sa(e),o=Aa(e),r=Sa(t),f=Aa(t);function a(e,t){var a=Sa(t),i=Sa(e)*a,c=Aa(e)*a,s=Aa(t),l=s*n+i*o;return[ka(c*r-l*f,i*n-s*o),Pa(l*r+c*f)]}return a.invert=function(e,t){var a=Sa(t),i=Sa(e)*a,c=Aa(e)*a,s=Aa(t),l=s*r-c*f;return[ka(c*r+s*f,i*n+l*o),Pa(l*n-i*o)]},a}function Ka(e,t){(t=Ua(t))[0]-=e,Da(t);var n,o=(n=-t[1])>1?0:n<-1?da:Math.acos(n);return((-t[2]<0?-o:o)+ma-ba)%ma}function Ya(){var e,t=[];return{point:function(t,n,o){e.push([t,n,o])},lineStart:function(){t.push(e=[])},lineEnd:Oa,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function Ja(e,t){return wa(e[0]-t[0])<ba&&wa(e[1]-t[1])<ba}function Za(e,t,n,o){this.x=e,this.z=t,this.o=n,this.e=o,this.v=!1,this.n=this.p=null}function Ga(e,t,n,o,r){var f,a,i=[],c=[];if(e.forEach((function(e){if(!((t=e.length-1)<=0)){var t,n,o=e[0],a=e[t];if(Ja(o,a)){if(!o[2]&&!a[2]){for(r.lineStart(),f=0;f<t;++f)r.point((o=e[f])[0],o[1]);return void r.lineEnd()}a[0]+=2e-6}i.push(n=new Za(o,e,null,!0)),c.push(n.o=new Za(o,null,n,!1)),i.push(n=new Za(a,e,null,!1)),c.push(n.o=new Za(a,null,n,!0))}})),i.length){for(c.sort(t),Qa(i),Qa(c),f=0,a=c.length;f<a;++f)c[f].e=n=!n;for(var s,l,u=i[0];;){for(var h=u,b=!0;h.v;)if((h=h.n)===u)return;s=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(b)for(f=0,a=s.length;f<a;++f)r.point((l=s[f])[0],l[1]);else o(h.x,h.n.x,1,r);h=h.n}else{if(b)for(s=h.p.z,f=s.length-1;f>=0;--f)r.point((l=s[f])[0],l[1]);else o(h.x,h.p.x,-1,r);h=h.p}s=(h=h.o).z,b=!b}while(!h.v);r.lineEnd()}}}function Qa(e){if(t=e.length){for(var t,n,o=0,r=e[0];++o<t;)r.n=n=e[o],n.p=r,r=n;r.n=n=e[0],n.p=r}}function ei(e){return wa(e[0])<=da?e[0]:Ea(e[0])*((wa(e[0])+da)%ma-da)}function ti(e,t,n,o){return function(r){var f,a,i,c=t(r),s=Ya(),l=t(s),u=!1,h={point:b,lineStart:p,lineEnd:g,polygonStart:function(){h.point=m,h.lineStart=v,h.lineEnd=y,a=[],f=[]},polygonEnd:function(){h.point=b,h.lineStart=p,h.lineEnd=g,a=no(a);var e=function(e,t){var n=ei(t),o=t[1],r=Aa(o),f=[Aa(n),-Sa(n),0],a=0,i=0,c=new Kn;1===r?o=pa+ba:-1===r&&(o=-pa-ba);for(var s=0,l=e.length;s<l;++s)if(h=(u=e[s]).length)for(var u,h,b=u[h-1],d=ei(b),p=b[1]/2+ga,g=Aa(p),m=Sa(p),v=0;v<h;++v,d=w,g=k,m=S,b=y){var y=u[v],w=ei(y),_=y[1]/2+ga,k=Aa(_),S=Sa(_),x=w-d,A=x>=0?1:-1,E=A*x,$=E>da,P=g*k;if(c.add(ka(P*A*Aa(E),m*S+P*Sa(E))),a+=$?x+A*ma:x,$^d>=n^w>=n){var O=La(Ua(b),Ua(y));Da(O);var N=La(f,O);Da(N);var M=($^x>=0?-1:1)*Pa(N[2]);(o>M||o===M&&(O[0]||O[1]))&&(i+=$^x>=0?1:-1)}}return(a<-ba||a<ba&&c<-1e-12)^1&i}(f,o);a.length?(u||(r.polygonStart(),u=!0),Ga(a,oi,e,n,r)):e&&(u||(r.polygonStart(),u=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),u&&(r.polygonEnd(),u=!1),a=f=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function b(t,n){e(t,n)&&r.point(t,n)}function d(e,t){c.point(e,t)}function p(){h.point=d,c.lineStart()}function g(){h.point=b,c.lineEnd()}function m(e,t){i.push([e,t]),l.point(e,t)}function v(){l.lineStart(),i=[]}function y(){m(i[0][0],i[0][1]),l.lineEnd();var e,t,n,o,c=l.clean(),h=s.result(),b=h.length;if(i.pop(),f.push(i),i=null,b)if(1&c){if((t=(n=h[0]).length-1)>0){for(u||(r.polygonStart(),u=!0),r.lineStart(),e=0;e<t;++e)r.point((o=n[e])[0],o[1]);r.lineEnd()}}else b>1&&2&c&&h.push(h.pop().concat(h.shift())),a.push(h.filter(ni))}return h}}function ni(e){return e.length>1}function oi(e,t){return((e=e.x)[0]<0?e[1]-pa-ba:pa-e[1])-((t=t.x)[0]<0?t[1]-pa-ba:pa-t[1])}Ba.invert=Ba;var ri=ti((function(){return!0}),(function(e){var t,n=NaN,o=NaN,r=NaN;return{lineStart:function(){e.lineStart(),t=1},point:function(f,a){var i=f>0?da:-da,c=wa(f-n);wa(c-da)<ba?(e.point(n,o=(o+a)/2>0?pa:-pa),e.point(r,o),e.lineEnd(),e.lineStart(),e.point(i,o),e.point(f,o),t=0):r!==i&&c>=da&&(wa(n-r)<ba&&(n-=r*ba),wa(f-i)<ba&&(f-=i*ba),o=function(e,t,n,o){var r,f,a=Aa(e-n);return wa(a)>ba?_a((Aa(t)*(f=Sa(o))*Aa(n)-Aa(o)*(r=Sa(t))*Aa(e))/(r*f*a)):(t+o)/2}(n,o,f,a),e.point(r,o),e.lineEnd(),e.lineStart(),e.point(i,o),t=0),e.point(n=f,o=a),r=i},lineEnd:function(){e.lineEnd(),n=o=NaN},clean:function(){return 2-t}}}),(function(e,t,n,o){var r;if(null==e)r=n*pa,o.point(-da,r),o.point(0,r),o.point(da,r),o.point(da,0),o.point(da,-r),o.point(0,-r),o.point(-da,-r),o.point(-da,0),o.point(-da,r);else if(wa(e[0]-t[0])>ba){var f=e[0]<t[0]?da:-da;r=n*f/2,o.point(-f,r),o.point(0,r),o.point(f,r)}else o.point(t[0],t[1])}),[-da,-pa]);function fi(e){var t=Sa(e),n=6*ya,o=t>0,r=wa(t)>ba;function f(e,n){return Sa(e)*Sa(n)>t}function a(e,n,o){var r=[1,0,0],f=La(Ua(e),Ua(n)),a=za(f,f),i=f[0],c=a-i*i;if(!c)return!o&&e;var s=t*a/c,l=-t*i/c,u=La(r,f),h=Ha(r,s);Ia(h,Ha(f,l));var b=u,d=za(h,b),p=za(b,b),g=d*d-p*(za(h,h)-1);if(!(g<0)){var m=$a(g),v=Ha(b,(-d-m)/p);if(Ia(v,h),v=qa(v),!o)return v;var y,w=e[0],_=n[0],k=e[1],S=n[1];_<w&&(y=w,w=_,_=y);var x=_-w,A=wa(x-da)<ba;if(!A&&S<k&&(y=k,k=S,S=y),A||x<ba?A?k+S>0^v[1]<(wa(v[0]-w)<ba?k:S):k<=v[1]&&v[1]<=S:x>da^(w<=v[0]&&v[0]<=_)){var E=Ha(b,(-d+m)/p);return Ia(E,h),[v,qa(E)]}}}function i(t,n){var r=o?e:da-e,f=0;return t<-r?f|=1:t>r&&(f|=2),n<-r?f|=4:n>r&&(f|=8),f}return ti(f,(function(e){var t,n,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(u,h){var b,d=[u,h],p=f(u,h),g=o?p?0:i(u,h):p?i(u+(u<0?da:-da),h):0;if(!t&&(s=c=p)&&e.lineStart(),p!==c&&(!(b=a(t,d))||Ja(t,b)||Ja(d,b))&&(d[2]=1),p!==c)l=0,p?(e.lineStart(),b=a(d,t),e.point(b[0],b[1])):(b=a(t,d),e.point(b[0],b[1],2),e.lineEnd()),t=b;else if(r&&t&&o^p){var m;g&n||!(m=a(d,t,!0))||(l=0,o?(e.lineStart(),e.point(m[0][0],m[0][1]),e.point(m[1][0],m[1][1]),e.lineEnd()):(e.point(m[1][0],m[1][1]),e.lineEnd(),e.lineStart(),e.point(m[0][0],m[0][1],3)))}!p||t&&Ja(t,d)||e.point(d[0],d[1]),t=d,c=p,n=g},lineEnd:function(){c&&e.lineEnd(),t=null},clean:function(){return l|(s&&c)<<1}}}),(function(t,o,r,f){!function(e,t,n,o,r,f){if(n){var a=Sa(t),i=Aa(t),c=o*n;null==r?(r=t+o*ma,f=t-c/2):(r=Ka(a,r),f=Ka(a,f),(o>0?r<f:r>f)&&(r+=o*ma));for(var s,l=r;o>0?l>f:l<f;l-=c)s=qa([a,-i*Sa(l),-i*Aa(l)]),e.point(s[0],s[1])}}(f,e,n,r,t,o)}),o?[0,-e]:[-da,e-da])}function ai(e,t,n,o){function r(r,f){return e<=r&&r<=n&&t<=f&&f<=o}function f(r,f,i,s){var l=0,u=0;if(null==r||(l=a(r,i))!==(u=a(f,i))||c(r,f)<0^i>0)do{s.point(0===l||3===l?e:n,l>1?o:t)}while((l=(l+i+4)%4)!==u);else s.point(f[0],f[1])}function a(o,r){return wa(o[0]-e)<ba?r>0?0:3:wa(o[0]-n)<ba?r>0?2:1:wa(o[1]-t)<ba?r>0?1:0:r>0?3:2}function i(e,t){return c(e.x,t.x)}function c(e,t){var n=a(e,1),o=a(t,1);return n!==o?n-o:0===n?t[1]-e[1]:1===n?e[0]-t[0]:2===n?e[1]-t[1]:t[0]-e[0]}return function(a){var c,s,l,u,h,b,d,p,g,m,v,y=a,w=Ya(),_={point:k,lineStart:function(){_.point=S,s&&s.push(l=[]);m=!0,g=!1,d=p=NaN},lineEnd:function(){c&&(S(u,h),b&&g&&w.rejoin(),c.push(w.result()));_.point=k,g&&y.lineEnd()},polygonStart:function(){y=w,c=[],s=[],v=!0},polygonEnd:function(){var t=function(){for(var t=0,n=0,r=s.length;n<r;++n)for(var f,a,i=s[n],c=1,l=i.length,u=i[0],h=u[0],b=u[1];c<l;++c)f=h,a=b,h=(u=i[c])[0],b=u[1],a<=o?b>o&&(h-f)*(o-a)>(b-a)*(e-f)&&++t:b<=o&&(h-f)*(o-a)<(b-a)*(e-f)&&--t;return t}(),n=v&&t,r=(c=no(c)).length;(n||r)&&(a.polygonStart(),n&&(a.lineStart(),f(null,null,1,a),a.lineEnd()),r&&Ga(c,i,t,f,a),a.polygonEnd());y=a,c=s=l=null}};function k(e,t){r(e,t)&&y.point(e,t)}function S(f,a){var i=r(f,a);if(s&&l.push([f,a]),m)u=f,h=a,b=i,m=!1,i&&(y.lineStart(),y.point(f,a));else if(i&&g)y.point(f,a);else{var c=[d=Math.max(-1e9,Math.min(1e9,d)),p=Math.max(-1e9,Math.min(1e9,p))],w=[f=Math.max(-1e9,Math.min(1e9,f)),a=Math.max(-1e9,Math.min(1e9,a))];!function(e,t,n,o,r,f){var a,i=e[0],c=e[1],s=0,l=1,u=t[0]-i,h=t[1]-c;if(a=n-i,u||!(a>0)){if(a/=u,u<0){if(a<s)return;a<l&&(l=a)}else if(u>0){if(a>l)return;a>s&&(s=a)}if(a=r-i,u||!(a<0)){if(a/=u,u<0){if(a>l)return;a>s&&(s=a)}else if(u>0){if(a<s)return;a<l&&(l=a)}if(a=o-c,h||!(a>0)){if(a/=h,h<0){if(a<s)return;a<l&&(l=a)}else if(h>0){if(a>l)return;a>s&&(s=a)}if(a=f-c,h||!(a<0)){if(a/=h,h<0){if(a>l)return;a>s&&(s=a)}else if(h>0){if(a<s)return;a<l&&(l=a)}return s>0&&(e[0]=i+s*u,e[1]=c+s*h),l<1&&(t[0]=i+l*u,t[1]=c+l*h),!0}}}}}(c,w,e,t,n,o)?i&&(y.lineStart(),y.point(f,a),v=!1):(g||(y.lineStart(),y.point(c[0],c[1])),y.point(w[0],w[1]),i||y.lineEnd(),v=!1)}d=f,p=a,g=i}return _}}function ii(e,t,n){var o=oo(e,t-ba,n).concat(t);return function(e){return o.map((function(t){return[e,t]}))}}function ci(e,t,n){var o=oo(e,t-ba,n).concat(t);return function(e){return o.map((function(t){return[t,e]}))}}function si(){var e,t,n,o,r,f,a,i,c,s,l,u,h=10,b=h,d=90,p=360,g=2.5;function m(){return{type:"MultiLineString",coordinates:v()}}function v(){return oo(xa(o/d)*d,n,d).map(l).concat(oo(xa(i/p)*p,a,p).map(u)).concat(oo(xa(t/h)*h,e,h).filter((function(e){return wa(e%d)>ba})).map(c)).concat(oo(xa(f/b)*b,r,b).filter((function(e){return wa(e%p)>ba})).map(s))}return m.lines=function(){return v().map((function(e){return{type:"LineString",coordinates:e}}))},m.outline=function(){return{type:"Polygon",coordinates:[l(o).concat(u(a).slice(1),l(n).reverse().slice(1),u(i).reverse().slice(1))]}},m.extent=function(e){return arguments.length?m.extentMajor(e).extentMinor(e):m.extentMinor()},m.extentMajor=function(e){return arguments.length?(o=+e[0][0],n=+e[1][0],i=+e[0][1],a=+e[1][1],o>n&&(e=o,o=n,n=e),i>a&&(e=i,i=a,a=e),m.precision(g)):[[o,i],[n,a]]},m.extentMinor=function(n){return arguments.length?(t=+n[0][0],e=+n[1][0],f=+n[0][1],r=+n[1][1],t>e&&(n=t,t=e,e=n),f>r&&(n=f,f=r,r=n),m.precision(g)):[[t,f],[e,r]]},m.step=function(e){return arguments.length?m.stepMajor(e).stepMinor(e):m.stepMinor()},m.stepMajor=function(e){return arguments.length?(d=+e[0],p=+e[1],m):[d,p]},m.stepMinor=function(e){return arguments.length?(h=+e[0],b=+e[1],m):[h,b]},m.precision=function(h){return arguments.length?(g=+h,c=ii(f,r,90),s=ci(t,e,g),l=ii(i,a,90),u=ci(o,n,g),m):g},m.extentMajor([[-180,-89.999999],[180,89.999999]]).extentMinor([[-180,-80.000001],[180,80.000001]])}var li,ui,hi,bi,di=e=>e,pi=new Kn,gi=new Kn,mi={point:Oa,lineStart:Oa,lineEnd:Oa,polygonStart:function(){mi.lineStart=vi,mi.lineEnd=_i},polygonEnd:function(){mi.lineStart=mi.lineEnd=mi.point=Oa,pi.add(wa(gi)),gi=new Kn},result:function(){var e=pi/2;return pi=new Kn,e}};function vi(){mi.point=yi}function yi(e,t){mi.point=wi,li=hi=e,ui=bi=t}function wi(e,t){gi.add(bi*e-hi*t),hi=e,bi=t}function _i(){wi(li,ui)}var ki=mi,Si=1/0,xi=Si,Ai=-Si,Ei=Ai;var $i,Pi,Oi,Ni,Mi={point:function(e,t){e<Si&&(Si=e);e>Ai&&(Ai=e);t<xi&&(xi=t);t>Ei&&(Ei=t)},lineStart:Oa,lineEnd:Oa,polygonStart:Oa,polygonEnd:Oa,result:function(){var e=[[Si,xi],[Ai,Ei]];return Ai=Ei=-(xi=Si=1/0),e}},Ci=0,ji=0,Ti=0,Ri=0,qi=0,Ui=0,zi=0,Li=0,Ii=0,Hi={point:Di,lineStart:Fi,lineEnd:Wi,polygonStart:function(){Hi.lineStart=Xi,Hi.lineEnd=Ki},polygonEnd:function(){Hi.point=Di,Hi.lineStart=Fi,Hi.lineEnd=Wi},result:function(){var e=Ii?[zi/Ii,Li/Ii]:Ui?[Ri/Ui,qi/Ui]:Ti?[Ci/Ti,ji/Ti]:[NaN,NaN];return Ci=ji=Ti=Ri=qi=Ui=zi=Li=Ii=0,e}};function Di(e,t){Ci+=e,ji+=t,++Ti}function Fi(){Hi.point=Bi}function Bi(e,t){Hi.point=Vi,Di(Oi=e,Ni=t)}function Vi(e,t){var n=e-Oi,o=t-Ni,r=$a(n*n+o*o);Ri+=r*(Oi+e)/2,qi+=r*(Ni+t)/2,Ui+=r,Di(Oi=e,Ni=t)}function Wi(){Hi.point=Di}function Xi(){Hi.point=Yi}function Ki(){Ji($i,Pi)}function Yi(e,t){Hi.point=Ji,Di($i=Oi=e,Pi=Ni=t)}function Ji(e,t){var n=e-Oi,o=t-Ni,r=$a(n*n+o*o);Ri+=r*(Oi+e)/2,qi+=r*(Ni+t)/2,Ui+=r,zi+=(r=Ni*e-Oi*t)*(Oi+e),Li+=r*(Ni+t),Ii+=3*r,Di(Oi=e,Ni=t)}var Zi=Hi;function Gi(e){this._context=e}Gi.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(e,t){switch(this._point){case 0:this._context.moveTo(e,t),this._point=1;break;case 1:this._context.lineTo(e,t);break;default:this._context.moveTo(e+this._radius,t),this._context.arc(e,t,this._radius,0,ma)}},result:Oa};var Qi,ec,tc,nc,oc,rc=new Kn,fc={point:Oa,lineStart:function(){fc.point=ac},lineEnd:function(){Qi&&ic(ec,tc),fc.point=Oa},polygonStart:function(){Qi=!0},polygonEnd:function(){Qi=null},result:function(){var e=+rc;return rc=new Kn,e}};function ac(e,t){fc.point=ic,ec=nc=e,tc=oc=t}function ic(e,t){nc-=e,oc-=t,rc.add($a(nc*nc+oc*oc)),nc=e,oc=t}var cc=fc;function sc(){this._string=[]}function lc(e){return"m0,"+e+"a"+e+","+e+" 0 1,1 0,"+-2*e+"a"+e+","+e+" 0 1,1 0,"+2*e+"z"}function uc(e,t){var n,o,r=4.5;function f(e){return e&&("function"==typeof r&&o.pointRadius(+r.apply(this,arguments)),Ra(e,n(o))),o.result()}return f.area=function(e){return Ra(e,n(ki)),ki.result()},f.measure=function(e){return Ra(e,n(cc)),cc.result()},f.bounds=function(e){return Ra(e,n(Mi)),Mi.result()},f.centroid=function(e){return Ra(e,n(Zi)),Zi.result()},f.projection=function(t){return arguments.length?(n=null==t?(e=null,di):(e=t).stream,f):e},f.context=function(e){return arguments.length?(o=null==e?(t=null,new sc):new Gi(t=e),"function"!=typeof r&&o.pointRadius(r),f):t},f.pointRadius=function(e){return arguments.length?(r="function"==typeof e?e:(o.pointRadius(+e),+e),f):r},f.projection(e).context(t)}function hc(e){return function(t){var n=new bc;for(var o in e)n[o]=e[o];return n.stream=t,n}}function bc(){}function dc(e,t,n){var o=e.clipExtent&&e.clipExtent();return e.scale(150).translate([0,0]),null!=o&&e.clipExtent(null),Ra(n,e.stream(Mi)),t(Mi.result()),null!=o&&e.clipExtent(o),e}function pc(e,t,n){return dc(e,(function(n){var o=t[1][0]-t[0][0],r=t[1][1]-t[0][1],f=Math.min(o/(n[1][0]-n[0][0]),r/(n[1][1]-n[0][1])),a=+t[0][0]+(o-f*(n[1][0]+n[0][0]))/2,i=+t[0][1]+(r-f*(n[1][1]+n[0][1]))/2;e.scale(150*f).translate([a,i])}),n)}sc.prototype={_radius:4.5,_circle:lc(4.5),pointRadius:function(e){return(e=+e)!==this._radius&&(this._radius=e,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(e,t){switch(this._point){case 0:this._string.push("M",e,",",t),this._point=1;break;case 1:this._string.push("L",e,",",t);break;default:null==this._circle&&(this._circle=lc(this._radius)),this._string.push("M",e,",",t,this._circle)}},result:function(){if(this._string.length){var e=this._string.join("");return this._string=[],e}return null}},bc.prototype={constructor:bc,point:function(e,t){this.stream.point(e,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var gc=Sa(30*ya);function mc(e,t){return+t?function(e,t){function n(o,r,f,a,i,c,s,l,u,h,b,d,p,g){var m=s-o,v=l-r,y=m*m+v*v;if(y>4*t&&p--){var w=a+h,_=i+b,k=c+d,S=$a(w*w+_*_+k*k),x=Pa(k/=S),A=wa(wa(k)-1)<ba||wa(f-u)<ba?(f+u)/2:ka(_,w),E=e(A,x),$=E[0],P=E[1],O=$-o,N=P-r,M=v*O-m*N;(M*M/y>t||wa((m*O+v*N)/y-.5)>.3||a*h+i*b+c*d<gc)&&(n(o,r,f,a,i,c,$,P,A,w/=S,_/=S,k,p,g),g.point($,P),n($,P,A,w,_,k,s,l,u,h,b,d,p,g))}}return function(t){var o,r,f,a,i,c,s,l,u,h,b,d,p={point:g,lineStart:m,lineEnd:y,polygonStart:function(){t.polygonStart(),p.lineStart=w},polygonEnd:function(){t.polygonEnd(),p.lineStart=m}};function g(n,o){n=e(n,o),t.point(n[0],n[1])}function m(){l=NaN,p.point=v,t.lineStart()}function v(o,r){var f=Ua([o,r]),a=e(o,r);n(l,u,s,h,b,d,l=a[0],u=a[1],s=o,h=f[0],b=f[1],d=f[2],16,t),t.point(l,u)}function y(){p.point=g,t.lineEnd()}function w(){m(),p.point=_,p.lineEnd=k}function _(e,t){v(o=e,t),r=l,f=u,a=h,i=b,c=d,p.point=v}function k(){n(l,u,s,h,b,d,r,f,o,a,i,c,16,t),p.lineEnd=y,y()}return p}}(e,t):function(e){return hc({point:function(t,n){t=e(t,n),this.stream.point(t[0],t[1])}})}(e)}var vc,yc=hc({point:function(e,t){this.stream.point(e*ya,t*ya)}});function wc(e,t,n,o,r,f){if(!f)return function(e,t,n,o,r){function f(f,a){return[t+e*(f*=o),n-e*(a*=r)]}return f.invert=function(f,a){return[(f-t)/e*o,(n-a)/e*r]},f}(e,t,n,o,r);var a=Sa(f),i=Aa(f),c=a*e,s=i*e,l=a/e,u=i/e,h=(i*n-a*t)/e,b=(i*t+a*n)/e;function d(e,f){return[c*(e*=o)-s*(f*=r)+t,n-s*e-c*f]}return d.invert=function(e,t){return[o*(l*e-u*t+h),r*(b-u*e-l*t)]},d}function _c(e){return function(e){var t,n,o,r,f,a,i,c,s,l,u=150,h=480,b=250,d=0,p=0,g=0,m=0,v=0,y=0,w=1,_=1,k=null,S=ri,x=null,A=di,E=.5;function $(e){return c(e[0]*ya,e[1]*ya)}function P(e){return(e=c.invert(e[0],e[1]))&&[e[0]*va,e[1]*va]}function O(){var e=wc(u,0,0,w,_,y).apply(null,t(d,p)),o=wc(u,h-e[0],b-e[1],w,_,y);return n=function(e,t,n){return(e%=ma)?t||n?Fa(Wa(e),Xa(t,n)):Wa(e):t||n?Xa(t,n):Ba}(g,m,v),i=Fa(t,o),c=Fa(n,i),a=mc(i,E),N()}function N(){return s=l=null,$}return $.stream=function(e){return s&&l===e?s:s=yc(function(e){return hc({point:function(t,n){var o=e(t,n);return this.stream.point(o[0],o[1])}})}(n)(S(a(A(l=e)))))},$.preclip=function(e){return arguments.length?(S=e,k=void 0,N()):S},$.postclip=function(e){return arguments.length?(A=e,x=o=r=f=null,N()):A},$.clipAngle=function(e){return arguments.length?(S=+e?fi(k=e*ya):(k=null,ri),N()):k*va},$.clipExtent=function(e){return arguments.length?(A=null==e?(x=o=r=f=null,di):ai(x=+e[0][0],o=+e[0][1],r=+e[1][0],f=+e[1][1]),N()):null==x?null:[[x,o],[r,f]]},$.scale=function(e){return arguments.length?(u=+e,O()):u},$.translate=function(e){return arguments.length?(h=+e[0],b=+e[1],O()):[h,b]},$.center=function(e){return arguments.length?(d=e[0]%360*ya,p=e[1]%360*ya,O()):[d*va,p*va]},$.rotate=function(e){return arguments.length?(g=e[0]%360*ya,m=e[1]%360*ya,v=e.length>2?e[2]%360*ya:0,O()):[g*va,m*va,v*va]},$.angle=function(e){return arguments.length?(y=e%360*ya,O()):y*va},$.reflectX=function(e){return arguments.length?(w=e?-1:1,O()):w<0},$.reflectY=function(e){return arguments.length?(_=e?-1:1,O()):_<0},$.precision=function(e){return arguments.length?(a=mc(i,E=e*e),N()):$a(E)},$.fitExtent=function(e,t){return pc($,e,t)},$.fitSize=function(e,t){return function(e,t,n){return pc(e,[[0,0],t],n)}($,e,t)},$.fitWidth=function(e,t){return function(e,t,n){return dc(e,(function(n){var o=+t,r=o/(n[1][0]-n[0][0]),f=(o-r*(n[1][0]+n[0][0]))/2,a=-r*n[0][1];e.scale(150*r).translate([f,a])}),n)}($,e,t)},$.fitHeight=function(e,t){return function(e,t,n){return dc(e,(function(n){var o=+t,r=o/(n[1][1]-n[0][1]),f=-r*n[0][0],a=(o-r*(n[1][1]+n[0][1]))/2;e.scale(150*r).translate([f,a])}),n)}($,e,t)},function(){return t=e.apply(this,arguments),$.invert=t.invert&&P,O()}}((function(){return e}))()}function kc(e,t){return[Sa(t)*Aa(e),Aa(t)]}function Sc(){return _c(kc).scale(249.5).clipAngle(90.000001)}function xc(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e)}return this}function Ac(e){return+e}kc.invert=(vc=Pa,function(e,t){var n=$a(e*e+t*t),o=vc(n),r=Aa(o),f=Sa(o);return[ka(e*r,n*f),Pa(n&&t*r/n)]});var Ec=[0,1];function $c(e){return e}function Pc(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:(n=isNaN(t)?NaN:.5,function(){return n});var n}function Oc(e,t,n){var o=e[0],r=e[1],f=t[0],a=t[1];return r<o?(o=Pc(r,o),f=n(a,f)):(o=Pc(o,r),f=n(f,a)),function(e){return f(o(e))}}function Nc(e,t,n){var o=Math.min(e.length,t.length)-1,r=new Array(o),f=new Array(o),a=-1;for(e[o]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<o;)r[a]=Pc(e[a],e[a+1]),f[a]=n(t[a],t[a+1]);return function(t){var n=Xn(e,t,1,o)-1;return f[n](r[n](t))}}function Mc(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Cc(){var e,t,n,o,r,f,a=Ec,i=Ec,c=ur,s=$c;function l(){var e=Math.min(a.length,i.length);return s!==$c&&(s=function(e,t){var n;return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}(a[0],a[e-1])),o=e>2?Nc:Oc,r=f=null,u}function u(t){return null==t||isNaN(t=+t)?n:(r||(r=o(a.map(e),i,c)))(e(s(t)))}return u.invert=function(n){return s(t((f||(f=o(i,a.map(e),ar)))(n)))},u.domain=function(e){return arguments.length?(a=Array.from(e,Ac),l()):a.slice()},u.range=function(e){return arguments.length?(i=Array.from(e),l()):i.slice()},u.rangeRound=function(e){return i=Array.from(e),c=hr,l()},u.clamp=function(e){return arguments.length?(s=!!e||$c,l()):s!==$c},u.interpolate=function(e){return arguments.length?(c=e,l()):c},u.unknown=function(e){return arguments.length?(n=e,u):n},function(n,o){return e=n,t=o,l()}}function jc(){return Cc()($c,$c)}function Tc(e,t,n,o){var r,f=function(e,t,n){var o=Math.abs(t-e)/Math.max(0,n),r=Math.pow(10,Math.floor(Math.log(o)/Math.LN10)),f=o/r;return f>=Yn?r*=10:f>=Jn?r*=5:f>=Zn&&(r*=2),t<e?-r:r}(e,t,n);switch((o=na(null==o?",f":o)).type){case"s":var a=Math.max(Math.abs(e),Math.abs(t));return null!=o.precision||isNaN(r=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Qf(t)/3)))-Qf(Math.abs(e)))}(f,a))||(o.precision=r),sa(o,a);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(r=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Qf(t)-Qf(e))+1}(f,Math.max(Math.abs(e),Math.abs(t))))||(o.precision=r-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(r=function(e){return Math.max(0,-Qf(Math.abs(e)))}(f))||(o.precision=r-2*("%"===o.type))}return ca(o)}function Rc(e){var t=e.domain;return e.ticks=function(e){var n=t();return function(e,t,n){var o,r,f,a,i=-1;if(n=+n,(e=+e)==(t=+t)&&n>0)return[e];if((o=t<e)&&(r=e,e=t,t=r),0===(a=Gn(e,t,n))||!isFinite(a))return[];if(a>0){let n=Math.round(e/a),o=Math.round(t/a);for(n*a<e&&++n,o*a>t&&--o,f=new Array(r=o-n+1);++i<r;)f[i]=(n+i)*a}else{a=-a;let n=Math.round(e*a),o=Math.round(t*a);for(n/a<e&&++n,o/a>t&&--o,f=new Array(r=o-n+1);++i<r;)f[i]=(n+i)/a}return o&&f.reverse(),f}(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var o=t();return Tc(o[0],o[o.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10);var o,r,f=t(),a=0,i=f.length-1,c=f[a],s=f[i],l=10;for(s<c&&(r=c,c=s,s=r,r=a,a=i,i=r);l-- >0;){if((r=Gn(c,s,n))===o)return f[a]=c,f[i]=s,t(f);if(r>0)c=Math.floor(c/r)*r,s=Math.ceil(s/r)*r;else{if(!(r<0))break;c=Math.ceil(c*r)/r,s=Math.floor(s*r)/r}o=r}return e},e}function qc(){var e=jc();return e.copy=function(){return Mc(e,qc())},xc.apply(e,arguments),Rc(e)}function Uc(){var e,t=[],n=[],o=[];function r(){var e=0,r=Math.max(1,n.length);for(o=new Array(r-1);++e<r;)o[e-1]=to(t,e/r);return f}function f(t){return null==t||isNaN(t=+t)?e:n[Xn(o,t)]}return f.invertExtent=function(e){var r=n.indexOf(e);return r<0?[NaN,NaN]:[r>0?o[r-1]:t[0],r<o.length?o[r]:t[t.length-1]]},f.domain=function(e){if(!arguments.length)return t.slice();t=[];for(let n of e)null==n||isNaN(n=+n)||t.push(n);return t.sort(Hn),r()},f.range=function(e){return arguments.length?(n=Array.from(e),r()):n.slice()},f.unknown=function(t){return arguments.length?(e=t,f):e},f.quantiles=function(){return o.slice()},f.copy=function(){return Uc().domain(t).range(n).unknown(e)},xc.apply(f,arguments)}function zc(e,t,n){this.k=e,this.x=t,this.y=n}zc.prototype={constructor:zc,scale:function(e){return 1===e?this:new zc(this.k*e,this.x,this.y)},translate:function(e,t){return 0===e&0===t?this:new zc(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},new zc(1,0,0),zc.prototype;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Lc="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Ic=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},Hc=`{{lit-${String(Math.random()).slice(2)}}}`,Dc=`\x3c!--${Hc}--\x3e`,Fc=new RegExp(`${Hc}|${Dc}`);class Bc{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],r=document.createTreeWalker(t.content,133,null,!1);let f=0,a=-1,i=0;const{strings:c,values:{length:s}}=e;for(;i<s;){const e=r.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let o=0;for(let e=0;e<n;e++)Vc(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=c[i],n=Kc.exec(t)[2],o=n.toLowerCase()+"$lit$",r=e.getAttribute(o);e.removeAttribute(o);const f=r.split(Fc);this.parts.push({type:"attribute",index:a,name:n,strings:f}),i+=f.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Hc)>=0){const o=e.parentNode,r=t.split(Fc),f=r.length-1;for(let t=0;t<f;t++){let n,f=r[t];if(""===f)n=Xc();else{const e=Kc.exec(f);null!==e&&Vc(e[2],"$lit$")&&(f=f.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(f)}o.insertBefore(n,e),this.parts.push({type:"node",index:++a})}""===r[f]?(o.insertBefore(Xc(),e),n.push(e)):e.data=r[f],i+=f}}else if(8===e.nodeType)if(e.data===Hc){const t=e.parentNode;null!==e.previousSibling&&a!==f||(a++,t.insertBefore(Xc(),e)),f=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(n.push(e),a--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Hc,t+1));)this.parts.push({type:"node",index:-1}),i++}}else r.currentNode=o.pop()}for(const l of n)l.parentNode.removeChild(l)}}const Vc=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},Wc=e=>-1!==e.index,Xc=()=>document.createComment(""),Kc=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Yc(e,t){const{element:{content:n},parts:o}=e,r=document.createTreeWalker(n,133,null,!1);let f=Zc(o),a=o[f],i=-1,c=0;const s=[];let l=null;for(;r.nextNode();){i++;const e=r.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(s.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==a&&a.index===i;)a.index=null!==l?-1:a.index-c,f=Zc(o,f),a=o[f]}s.forEach((e=>e.parentNode.removeChild(e)))}const Jc=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},Zc=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(Wc(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Gc=new WeakMap,Qc={},es={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ts{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const n of this.__parts)void 0!==n&&n.commit()}_clone(){const e=Lc?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let r,f=0,a=0,i=o.nextNode();for(;f<n.length;)if(r=n[f],Wc(r)){for(;a<r.index;)a++,"TEMPLATE"===i.nodeName&&(t.push(i),o.currentNode=i.content),null===(i=o.nextNode())&&(o.currentNode=t.pop(),i=o.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(i.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(i,r.name,r.strings,this.options));f++}else this.__parts.push(void 0),f++;return Lc&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ns=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),os=` ${Hc} `;class rs{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Xc()),this.endNode=e.appendChild(Xc())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Xc()),e.__insert(this.endNode=Xc())}insertAfterPart(e){e.__insert(this.startNode=Xc()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;"function"==typeof(e=this.__pendingValue)&&Gc.has(e);){const e=this.__pendingValue;this.__pendingValue=Qc,e(this)}var e;const t=this.__pendingValue;t!==Qc&&((e=>null===e||!("object"==typeof e||"function"==typeof e))(t)?t!==this.value&&this.__commitText(t):t instanceof class{constructor(e,t,n,o){this.strings=e,this.values=t,this.type=n,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===e.indexOf("--\x3e",r+1);const f=Kc.exec(e);t+=null===f?e+(n?os:Dc):e.substr(0,f.index)+f[1]+f[2]+"$lit$"+f[3]+Hc}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==ns&&(t=ns.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]))(t)?this.__commitIterable(t):t===es?(this.value=es,this.clear()):this.__commitText(t))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof ts&&this.value.template===t)this.value.update(e.values);else{const n=new ts(t,e.processor,this.options),o=n._clone();n.update(e.values),this.__commitNode(o),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,o=0;for(const r of e)n=t[o],void 0===n&&(n=new rs(this.options),t.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(t[o-1])),n.setValue(r),n.commit(),o++;o<t.length&&(t.length=o,this.clear(n&&n.endNode))}clear(e=this.startNode){Ic(this.startNode.parentNode,e.nextSibling,this.endNode)}}let fs=!1;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function as(e){let t=is.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},is.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(Hc);return n=t.keyString.get(o),void 0===n&&(n=new Bc(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}(()=>{try{const e={get capture(){return fs=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();const is=new Map,cs=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1")
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const ss=(e,t)=>`${e}--${t}`;let ls=!0;void 0===window.ShadyCSS?ls=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ls=!1);const us=e=>t=>{const n=ss(t.type,e);let o=is.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},is.set(n,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const f=t.strings.join(Hc);if(r=o.keyString.get(f),void 0===r){const n=t.getTemplateElement();ls&&window.ShadyCSS.prepareTemplateDom(n,e),r=new Bc(t,n),o.keyString.set(f,r)}return o.stringsArray.set(t.strings,r),r},hs=["html","svg"],bs=new Set,ds=(e,t,n)=>{bs.add(e);const o=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:f}=r;if(0===f)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let s=0;s<f;s++){const e=r[s];e.parentNode.removeChild(e),a.textContent+=e.textContent}(e=>{hs.forEach((t=>{const n=is.get(ss(t,e));void 0!==n&&n.keyString.forEach((e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{n.add(e)})),Yc(e,n)}))}))})(e);const i=o.content;n?function(e,t,n=null){const{element:{content:o},parts:r}=e;if(null==n)return void o.appendChild(t);const f=document.createTreeWalker(o,133,null,!1);let a=Zc(r),i=0,c=-1;for(;f.nextNode();)for(c++,f.currentNode===n&&(i=Jc(t),n.parentNode.insertBefore(t,n));-1!==a&&r[a].index===c;){if(i>0){for(;-1!==a;)r[a].index+=i,a=Zc(r,a);return}a=Zc(r,a)}}(n,a,i.firstChild):i.insertBefore(a,i.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const c=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){i.insertBefore(a,i.firstChild);const e=new Set;e.add(a),Yc(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ps={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},gs=(e,t)=>t!==e&&(t==t||e==e),ms={attribute:!0,type:String,converter:ps,reflect:!1,hasChanged:gs};class vs extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,n)=>{const o=this._attributeNameForProperty(n,t);void 0!==o&&(this._attributeToPropertyMap.set(o,n),e.push(o))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=ms){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,n,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdateInternal(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ms}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=gs){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,o=t.converter||ps,r="function"==typeof o?o:o.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,o=t.converter;return(o&&o.toAttribute||ps.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=ms){const o=this.constructor,r=o._attributeNameForProperty(e,n);if(void 0!==r){const e=o._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,o=n._attributeToPropertyMap.get(e);if(void 0!==o){const e=n.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let o=!0;if(void 0!==e){const r=this.constructor;n=n||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(n){throw e=!1,this._markUpdated(),n}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}vs.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ys=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ws=Symbol();class _s{constructor(e,t){if(t!==ws)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ys?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ks={};class Ss extends vs{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight(((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e)),n),n=t(e,new Set),o=[];n.forEach((e=>o.unshift(e))),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!ys){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new _s(String(t),ws)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ys?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ks&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ks}}Ss.finalized=!0,Ss.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const o=n.scopeName,r=cs.has(t),f=ls&&11===t.nodeType&&!!t.host,a=f&&!bs.has(o),i=a?document.createDocumentFragment():t;if(((e,t,n)=>{let o=cs.get(t);void 0===o&&(Ic(t,t.firstChild),cs.set(t,o=new rs(Object.assign({templateFactory:as},n))),o.appendInto(t)),o.setValue(e),o.commit()})(e,i,Object.assign({templateFactory:us(o)},n)),a){const e=cs.get(i);cs.delete(i);const n=e.value instanceof ts?e.value.template:void 0;ds(o,i,n),Ic(t,t.firstChild),t.appendChild(i),cs.set(t,e)}!r&&f&&window.ShadyCSS.styleElement(t.host)},Ss.shadowRootOptions={mode:"open"};var xs=((e,...t)=>{const n=t.reduce(((t,n,o)=>t+(e=>{if(e instanceof _s)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[o+1]),e[0]);return new _s(n,ws)})`
  /*!
 * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
  .fa,
  .fas,
  .far,
  .fal,
  .fad,
  .fab {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }

  .fa-lg {
    font-size: 1.33333em;
    line-height: 0.75em;
    vertical-align: -0.0667em;
  }

  .fa-xs {
    font-size: 0.75em;
  }

  .fa-sm {
    font-size: 0.875em;
  }

  .fa-1x {
    font-size: 1em;
  }

  .fa-2x {
    font-size: 2em;
  }

  .fa-3x {
    font-size: 3em;
  }

  .fa-4x {
    font-size: 4em;
  }

  .fa-5x {
    font-size: 5em;
  }

  .fa-6x {
    font-size: 6em;
  }

  .fa-7x {
    font-size: 7em;
  }

  .fa-8x {
    font-size: 8em;
  }

  .fa-9x {
    font-size: 9em;
  }

  .fa-10x {
    font-size: 10em;
  }

  .fa-fw {
    text-align: center;
    width: 1.25em;
  }

  .fa-ul {
    list-style-type: none;
    margin-left: 2.5em;
    padding-left: 0;
  }
  .fa-ul > li {
    position: relative;
  }

  .fa-li {
    left: -2em;
    position: absolute;
    text-align: center;
    width: 2em;
    line-height: inherit;
  }

  .fa-border {
    border: solid 0.08em #eee;
    border-radius: 0.1em;
    padding: 0.2em 0.25em 0.15em;
  }

  .fa-pull-left {
    float: left;
  }

  .fa-pull-right {
    float: right;
  }

  .fa.fa-pull-left,
  .fas.fa-pull-left,
  .far.fa-pull-left,
  .fal.fa-pull-left,
  .fab.fa-pull-left {
    margin-right: 0.3em;
  }

  .fa.fa-pull-right,
  .fas.fa-pull-right,
  .far.fa-pull-right,
  .fal.fa-pull-right,
  .fab.fa-pull-right {
    margin-left: 0.3em;
  }

  .fa-spin {
    -webkit-animation: fa-spin 2s infinite linear;
    animation: fa-spin 2s infinite linear;
  }

  .fa-pulse {
    -webkit-animation: fa-spin 1s infinite steps(8);
    animation: fa-spin 1s infinite steps(8);
  }

  @-webkit-keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .fa-rotate-90 {
    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)';
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .fa-rotate-180 {
    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2)';
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .fa-rotate-270 {
    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)';
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  .fa-flip-horizontal {
    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)';
    -webkit-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }

  .fa-flip-vertical {
    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';
    -webkit-transform: scale(1, -1);
    transform: scale(1, -1);
  }

  .fa-flip-both,
  .fa-flip-horizontal.fa-flip-vertical {
    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';
    -webkit-transform: scale(-1, -1);
    transform: scale(-1, -1);
  }

  :root .fa-rotate-90,
  :root .fa-rotate-180,
  :root .fa-rotate-270,
  :root .fa-flip-horizontal,
  :root .fa-flip-vertical,
  :root .fa-flip-both {
    -webkit-filter: none;
    filter: none;
  }

  .fa-stack {
    display: inline-block;
    height: 2em;
    line-height: 2em;
    position: relative;
    vertical-align: middle;
    width: 2.5em;
  }

  .fa-stack-1x,
  .fa-stack-2x {
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
  }

  .fa-stack-1x {
    line-height: inherit;
  }

  .fa-stack-2x {
    font-size: 2em;
  }

  .fa-inverse {
    color: #fff;
  }

  /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
readers do not read off random characters that represent icons */
  .fa-500px:before {
    content: '\\f26e';
  }

  .fa-accessible-icon:before {
    content: '\\f368';
  }

  .fa-accusoft:before {
    content: '\\f369';
  }

  .fa-acquisitions-incorporated:before {
    content: '\\f6af';
  }

  .fa-ad:before {
    content: '\\f641';
  }

  .fa-address-book:before {
    content: '\\f2b9';
  }

  .fa-address-card:before {
    content: '\\f2bb';
  }

  .fa-adjust:before {
    content: '\\f042';
  }

  .fa-adn:before {
    content: '\\f170';
  }

  .fa-adobe:before {
    content: '\\f778';
  }

  .fa-adversal:before {
    content: '\\f36a';
  }

  .fa-affiliatetheme:before {
    content: '\\f36b';
  }

  .fa-air-freshener:before {
    content: '\\f5d0';
  }

  .fa-airbnb:before {
    content: '\\f834';
  }

  .fa-algolia:before {
    content: '\\f36c';
  }

  .fa-align-center:before {
    content: '\\f037';
  }

  .fa-align-justify:before {
    content: '\\f039';
  }

  .fa-align-left:before {
    content: '\\f036';
  }

  .fa-align-right:before {
    content: '\\f038';
  }

  .fa-alipay:before {
    content: '\\f642';
  }

  .fa-allergies:before {
    content: '\\f461';
  }

  .fa-amazon:before {
    content: '\\f270';
  }

  .fa-amazon-pay:before {
    content: '\\f42c';
  }

  .fa-ambulance:before {
    content: '\\f0f9';
  }

  .fa-american-sign-language-interpreting:before {
    content: '\\f2a3';
  }

  .fa-amilia:before {
    content: '\\f36d';
  }

  .fa-anchor:before {
    content: '\\f13d';
  }

  .fa-android:before {
    content: '\\f17b';
  }

  .fa-angellist:before {
    content: '\\f209';
  }

  .fa-angle-double-down:before {
    content: '\\f103';
  }

  .fa-angle-double-left:before {
    content: '\\f100';
  }

  .fa-angle-double-right:before {
    content: '\\f101';
  }

  .fa-angle-double-up:before {
    content: '\\f102';
  }

  .fa-angle-down:before {
    content: '\\f107';
  }

  .fa-angle-left:before {
    content: '\\f104';
  }

  .fa-angle-right:before {
    content: '\\f105';
  }

  .fa-angle-up:before {
    content: '\\f106';
  }

  .fa-angry:before {
    content: '\\f556';
  }

  .fa-angrycreative:before {
    content: '\\f36e';
  }

  .fa-angular:before {
    content: '\\f420';
  }

  .fa-ankh:before {
    content: '\\f644';
  }

  .fa-app-store:before {
    content: '\\f36f';
  }

  .fa-app-store-ios:before {
    content: '\\f370';
  }

  .fa-apper:before {
    content: '\\f371';
  }

  .fa-apple:before {
    content: '\\f179';
  }

  .fa-apple-alt:before {
    content: '\\f5d1';
  }

  .fa-apple-pay:before {
    content: '\\f415';
  }

  .fa-archive:before {
    content: '\\f187';
  }

  .fa-archway:before {
    content: '\\f557';
  }

  .fa-arrow-alt-circle-down:before {
    content: '\\f358';
  }

  .fa-arrow-alt-circle-left:before {
    content: '\\f359';
  }

  .fa-arrow-alt-circle-right:before {
    content: '\\f35a';
  }

  .fa-arrow-alt-circle-up:before {
    content: '\\f35b';
  }

  .fa-arrow-circle-down:before {
    content: '\\f0ab';
  }

  .fa-arrow-circle-left:before {
    content: '\\f0a8';
  }

  .fa-arrow-circle-right:before {
    content: '\\f0a9';
  }

  .fa-arrow-circle-up:before {
    content: '\\f0aa';
  }

  .fa-arrow-down:before {
    content: '\\f063';
  }

  .fa-arrow-left:before {
    content: '\\f060';
  }

  .fa-arrow-right:before {
    content: '\\f061';
  }

  .fa-arrow-up:before {
    content: '\\f062';
  }

  .fa-arrows-alt:before {
    content: '\\f0b2';
  }

  .fa-arrows-alt-h:before {
    content: '\\f337';
  }

  .fa-arrows-alt-v:before {
    content: '\\f338';
  }

  .fa-artstation:before {
    content: '\\f77a';
  }

  .fa-assistive-listening-systems:before {
    content: '\\f2a2';
  }

  .fa-asterisk:before {
    content: '\\f069';
  }

  .fa-asymmetrik:before {
    content: '\\f372';
  }

  .fa-at:before {
    content: '\\f1fa';
  }

  .fa-atlas:before {
    content: '\\f558';
  }

  .fa-atlassian:before {
    content: '\\f77b';
  }

  .fa-atom:before {
    content: '\\f5d2';
  }

  .fa-audible:before {
    content: '\\f373';
  }

  .fa-audio-description:before {
    content: '\\f29e';
  }

  .fa-autoprefixer:before {
    content: '\\f41c';
  }

  .fa-avianex:before {
    content: '\\f374';
  }

  .fa-aviato:before {
    content: '\\f421';
  }

  .fa-award:before {
    content: '\\f559';
  }

  .fa-aws:before {
    content: '\\f375';
  }

  .fa-baby:before {
    content: '\\f77c';
  }

  .fa-baby-carriage:before {
    content: '\\f77d';
  }

  .fa-backspace:before {
    content: '\\f55a';
  }

  .fa-backward:before {
    content: '\\f04a';
  }

  .fa-bacon:before {
    content: '\\f7e5';
  }

  .fa-balance-scale:before {
    content: '\\f24e';
  }

  .fa-balance-scale-left:before {
    content: '\\f515';
  }

  .fa-balance-scale-right:before {
    content: '\\f516';
  }

  .fa-ban:before {
    content: '\\f05e';
  }

  .fa-band-aid:before {
    content: '\\f462';
  }

  .fa-bandcamp:before {
    content: '\\f2d5';
  }

  .fa-barcode:before {
    content: '\\f02a';
  }

  .fa-bars:before {
    content: '\\f0c9';
  }

  .fa-baseball-ball:before {
    content: '\\f433';
  }

  .fa-basketball-ball:before {
    content: '\\f434';
  }

  .fa-bath:before {
    content: '\\f2cd';
  }

  .fa-battery-empty:before {
    content: '\\f244';
  }

  .fa-battery-full:before {
    content: '\\f240';
  }

  .fa-battery-half:before {
    content: '\\f242';
  }

  .fa-battery-quarter:before {
    content: '\\f243';
  }

  .fa-battery-three-quarters:before {
    content: '\\f241';
  }

  .fa-battle-net:before {
    content: '\\f835';
  }

  .fa-bed:before {
    content: '\\f236';
  }

  .fa-beer:before {
    content: '\\f0fc';
  }

  .fa-behance:before {
    content: '\\f1b4';
  }

  .fa-behance-square:before {
    content: '\\f1b5';
  }

  .fa-bell:before {
    content: '\\f0f3';
  }

  .fa-bell-slash:before {
    content: '\\f1f6';
  }

  .fa-bezier-curve:before {
    content: '\\f55b';
  }

  .fa-bible:before {
    content: '\\f647';
  }

  .fa-bicycle:before {
    content: '\\f206';
  }

  .fa-biking:before {
    content: '\\f84a';
  }

  .fa-bimobject:before {
    content: '\\f378';
  }

  .fa-binoculars:before {
    content: '\\f1e5';
  }

  .fa-biohazard:before {
    content: '\\f780';
  }

  .fa-birthday-cake:before {
    content: '\\f1fd';
  }

  .fa-bitbucket:before {
    content: '\\f171';
  }

  .fa-bitcoin:before {
    content: '\\f379';
  }

  .fa-bity:before {
    content: '\\f37a';
  }

  .fa-black-tie:before {
    content: '\\f27e';
  }

  .fa-blackberry:before {
    content: '\\f37b';
  }

  .fa-blender:before {
    content: '\\f517';
  }

  .fa-blender-phone:before {
    content: '\\f6b6';
  }

  .fa-blind:before {
    content: '\\f29d';
  }

  .fa-blog:before {
    content: '\\f781';
  }

  .fa-blogger:before {
    content: '\\f37c';
  }

  .fa-blogger-b:before {
    content: '\\f37d';
  }

  .fa-bluetooth:before {
    content: '\\f293';
  }

  .fa-bluetooth-b:before {
    content: '\\f294';
  }

  .fa-bold:before {
    content: '\\f032';
  }

  .fa-bolt:before {
    content: '\\f0e7';
  }

  .fa-bomb:before {
    content: '\\f1e2';
  }

  .fa-bone:before {
    content: '\\f5d7';
  }

  .fa-bong:before {
    content: '\\f55c';
  }

  .fa-book:before {
    content: '\\f02d';
  }

  .fa-book-dead:before {
    content: '\\f6b7';
  }

  .fa-book-medical:before {
    content: '\\f7e6';
  }

  .fa-book-open:before {
    content: '\\f518';
  }

  .fa-book-reader:before {
    content: '\\f5da';
  }

  .fa-bookmark:before {
    content: '\\f02e';
  }

  .fa-bootstrap:before {
    content: '\\f836';
  }

  .fa-border-all:before {
    content: '\\f84c';
  }

  .fa-border-none:before {
    content: '\\f850';
  }

  .fa-border-style:before {
    content: '\\f853';
  }

  .fa-bowling-ball:before {
    content: '\\f436';
  }

  .fa-box:before {
    content: '\\f466';
  }

  .fa-box-open:before {
    content: '\\f49e';
  }

  .fa-boxes:before {
    content: '\\f468';
  }

  .fa-braille:before {
    content: '\\f2a1';
  }

  .fa-brain:before {
    content: '\\f5dc';
  }

  .fa-bread-slice:before {
    content: '\\f7ec';
  }

  .fa-briefcase:before {
    content: '\\f0b1';
  }

  .fa-briefcase-medical:before {
    content: '\\f469';
  }

  .fa-broadcast-tower:before {
    content: '\\f519';
  }

  .fa-broom:before {
    content: '\\f51a';
  }

  .fa-brush:before {
    content: '\\f55d';
  }

  .fa-btc:before {
    content: '\\f15a';
  }

  .fa-buffer:before {
    content: '\\f837';
  }

  .fa-bug:before {
    content: '\\f188';
  }

  .fa-building:before {
    content: '\\f1ad';
  }

  .fa-bullhorn:before {
    content: '\\f0a1';
  }

  .fa-bullseye:before {
    content: '\\f140';
  }

  .fa-burn:before {
    content: '\\f46a';
  }

  .fa-buromobelexperte:before {
    content: '\\f37f';
  }

  .fa-bus:before {
    content: '\\f207';
  }

  .fa-bus-alt:before {
    content: '\\f55e';
  }

  .fa-business-time:before {
    content: '\\f64a';
  }

  .fa-buy-n-large:before {
    content: '\\f8a6';
  }

  .fa-buysellads:before {
    content: '\\f20d';
  }

  .fa-calculator:before {
    content: '\\f1ec';
  }

  .fa-calendar:before {
    content: '\\f133';
  }

  .fa-calendar-alt:before {
    content: '\\f073';
  }

  .fa-calendar-check:before {
    content: '\\f274';
  }

  .fa-calendar-day:before {
    content: '\\f783';
  }

  .fa-calendar-minus:before {
    content: '\\f272';
  }

  .fa-calendar-plus:before {
    content: '\\f271';
  }

  .fa-calendar-times:before {
    content: '\\f273';
  }

  .fa-calendar-week:before {
    content: '\\f784';
  }

  .fa-camera:before {
    content: '\\f030';
  }

  .fa-camera-retro:before {
    content: '\\f083';
  }

  .fa-campground:before {
    content: '\\f6bb';
  }

  .fa-canadian-maple-leaf:before {
    content: '\\f785';
  }

  .fa-candy-cane:before {
    content: '\\f786';
  }

  .fa-cannabis:before {
    content: '\\f55f';
  }

  .fa-capsules:before {
    content: '\\f46b';
  }

  .fa-car:before {
    content: '\\f1b9';
  }

  .fa-car-alt:before {
    content: '\\f5de';
  }

  .fa-car-battery:before {
    content: '\\f5df';
  }

  .fa-car-crash:before {
    content: '\\f5e1';
  }

  .fa-car-side:before {
    content: '\\f5e4';
  }

  .fa-caret-down:before {
    content: '\\f0d7';
  }

  .fa-caret-left:before {
    content: '\\f0d9';
  }

  .fa-caret-right:before {
    content: '\\f0da';
  }

  .fa-caret-square-down:before {
    content: '\\f150';
  }

  .fa-caret-square-left:before {
    content: '\\f191';
  }

  .fa-caret-square-right:before {
    content: '\\f152';
  }

  .fa-caret-square-up:before {
    content: '\\f151';
  }

  .fa-caret-up:before {
    content: '\\f0d8';
  }

  .fa-carrot:before {
    content: '\\f787';
  }

  .fa-cart-arrow-down:before {
    content: '\\f218';
  }

  .fa-cart-plus:before {
    content: '\\f217';
  }

  .fa-cash-register:before {
    content: '\\f788';
  }

  .fa-cat:before {
    content: '\\f6be';
  }

  .fa-cc-amazon-pay:before {
    content: '\\f42d';
  }

  .fa-cc-amex:before {
    content: '\\f1f3';
  }

  .fa-cc-apple-pay:before {
    content: '\\f416';
  }

  .fa-cc-diners-club:before {
    content: '\\f24c';
  }

  .fa-cc-discover:before {
    content: '\\f1f2';
  }

  .fa-cc-jcb:before {
    content: '\\f24b';
  }

  .fa-cc-mastercard:before {
    content: '\\f1f1';
  }

  .fa-cc-paypal:before {
    content: '\\f1f4';
  }

  .fa-cc-stripe:before {
    content: '\\f1f5';
  }

  .fa-cc-visa:before {
    content: '\\f1f0';
  }

  .fa-centercode:before {
    content: '\\f380';
  }

  .fa-centos:before {
    content: '\\f789';
  }

  .fa-certificate:before {
    content: '\\f0a3';
  }

  .fa-chair:before {
    content: '\\f6c0';
  }

  .fa-chalkboard:before {
    content: '\\f51b';
  }

  .fa-chalkboard-teacher:before {
    content: '\\f51c';
  }

  .fa-charging-station:before {
    content: '\\f5e7';
  }

  .fa-chart-area:before {
    content: '\\f1fe';
  }

  .fa-chart-bar:before {
    content: '\\f080';
  }

  .fa-chart-line:before {
    content: '\\f201';
  }

  .fa-chart-pie:before {
    content: '\\f200';
  }

  .fa-check:before {
    content: '\\f00c';
  }

  .fa-check-circle:before {
    content: '\\f058';
  }

  .fa-check-double:before {
    content: '\\f560';
  }

  .fa-check-square:before {
    content: '\\f14a';
  }

  .fa-cheese:before {
    content: '\\f7ef';
  }

  .fa-chess:before {
    content: '\\f439';
  }

  .fa-chess-bishop:before {
    content: '\\f43a';
  }

  .fa-chess-board:before {
    content: '\\f43c';
  }

  .fa-chess-king:before {
    content: '\\f43f';
  }

  .fa-chess-knight:before {
    content: '\\f441';
  }

  .fa-chess-pawn:before {
    content: '\\f443';
  }

  .fa-chess-queen:before {
    content: '\\f445';
  }

  .fa-chess-rook:before {
    content: '\\f447';
  }

  .fa-chevron-circle-down:before {
    content: '\\f13a';
  }

  .fa-chevron-circle-left:before {
    content: '\\f137';
  }

  .fa-chevron-circle-right:before {
    content: '\\f138';
  }

  .fa-chevron-circle-up:before {
    content: '\\f139';
  }

  .fa-chevron-down:before {
    content: '\\f078';
  }

  .fa-chevron-left:before {
    content: '\\f053';
  }

  .fa-chevron-right:before {
    content: '\\f054';
  }

  .fa-chevron-up:before {
    content: '\\f077';
  }

  .fa-child:before {
    content: '\\f1ae';
  }

  .fa-chrome:before {
    content: '\\f268';
  }

  .fa-chromecast:before {
    content: '\\f838';
  }

  .fa-church:before {
    content: '\\f51d';
  }

  .fa-circle:before {
    content: '\\f111';
  }

  .fa-circle-notch:before {
    content: '\\f1ce';
  }

  .fa-city:before {
    content: '\\f64f';
  }

  .fa-clinic-medical:before {
    content: '\\f7f2';
  }

  .fa-clipboard:before {
    content: '\\f328';
  }

  .fa-clipboard-check:before {
    content: '\\f46c';
  }

  .fa-clipboard-list:before {
    content: '\\f46d';
  }

  .fa-clock:before {
    content: '\\f017';
  }

  .fa-clone:before {
    content: '\\f24d';
  }

  .fa-closed-captioning:before {
    content: '\\f20a';
  }

  .fa-cloud:before {
    content: '\\f0c2';
  }

  .fa-cloud-download-alt:before {
    content: '\\f381';
  }

  .fa-cloud-meatball:before {
    content: '\\f73b';
  }

  .fa-cloud-moon:before {
    content: '\\f6c3';
  }

  .fa-cloud-moon-rain:before {
    content: '\\f73c';
  }

  .fa-cloud-rain:before {
    content: '\\f73d';
  }

  .fa-cloud-showers-heavy:before {
    content: '\\f740';
  }

  .fa-cloud-sun:before {
    content: '\\f6c4';
  }

  .fa-cloud-sun-rain:before {
    content: '\\f743';
  }

  .fa-cloud-upload-alt:before {
    content: '\\f382';
  }

  .fa-cloudscale:before {
    content: '\\f383';
  }

  .fa-cloudsmith:before {
    content: '\\f384';
  }

  .fa-cloudversify:before {
    content: '\\f385';
  }

  .fa-cocktail:before {
    content: '\\f561';
  }

  .fa-code:before {
    content: '\\f121';
  }

  .fa-code-branch:before {
    content: '\\f126';
  }

  .fa-codepen:before {
    content: '\\f1cb';
  }

  .fa-codiepie:before {
    content: '\\f284';
  }

  .fa-coffee:before {
    content: '\\f0f4';
  }

  .fa-cog:before {
    content: '\\f013';
  }

  .fa-cogs:before {
    content: '\\f085';
  }

  .fa-coins:before {
    content: '\\f51e';
  }

  .fa-columns:before {
    content: '\\f0db';
  }

  .fa-comment:before {
    content: '\\f075';
  }

  .fa-comment-alt:before {
    content: '\\f27a';
  }

  .fa-comment-dollar:before {
    content: '\\f651';
  }

  .fa-comment-dots:before {
    content: '\\f4ad';
  }

  .fa-comment-medical:before {
    content: '\\f7f5';
  }

  .fa-comment-slash:before {
    content: '\\f4b3';
  }

  .fa-comments:before {
    content: '\\f086';
  }

  .fa-comments-dollar:before {
    content: '\\f653';
  }

  .fa-compact-disc:before {
    content: '\\f51f';
  }

  .fa-compass:before {
    content: '\\f14e';
  }

  .fa-compress:before {
    content: '\\f066';
  }

  .fa-compress-arrows-alt:before {
    content: '\\f78c';
  }

  .fa-concierge-bell:before {
    content: '\\f562';
  }

  .fa-confluence:before {
    content: '\\f78d';
  }

  .fa-connectdevelop:before {
    content: '\\f20e';
  }

  .fa-contao:before {
    content: '\\f26d';
  }

  .fa-cookie:before {
    content: '\\f563';
  }

  .fa-cookie-bite:before {
    content: '\\f564';
  }

  .fa-copy:before {
    content: '\\f0c5';
  }

  .fa-copyright:before {
    content: '\\f1f9';
  }

  .fa-cotton-bureau:before {
    content: '\\f89e';
  }

  .fa-couch:before {
    content: '\\f4b8';
  }

  .fa-cpanel:before {
    content: '\\f388';
  }

  .fa-creative-commons:before {
    content: '\\f25e';
  }

  .fa-creative-commons-by:before {
    content: '\\f4e7';
  }

  .fa-creative-commons-nc:before {
    content: '\\f4e8';
  }

  .fa-creative-commons-nc-eu:before {
    content: '\\f4e9';
  }

  .fa-creative-commons-nc-jp:before {
    content: '\\f4ea';
  }

  .fa-creative-commons-nd:before {
    content: '\\f4eb';
  }

  .fa-creative-commons-pd:before {
    content: '\\f4ec';
  }

  .fa-creative-commons-pd-alt:before {
    content: '\\f4ed';
  }

  .fa-creative-commons-remix:before {
    content: '\\f4ee';
  }

  .fa-creative-commons-sa:before {
    content: '\\f4ef';
  }

  .fa-creative-commons-sampling:before {
    content: '\\f4f0';
  }

  .fa-creative-commons-sampling-plus:before {
    content: '\\f4f1';
  }

  .fa-creative-commons-share:before {
    content: '\\f4f2';
  }

  .fa-creative-commons-zero:before {
    content: '\\f4f3';
  }

  .fa-credit-card:before {
    content: '\\f09d';
  }

  .fa-critical-role:before {
    content: '\\f6c9';
  }

  .fa-crop:before {
    content: '\\f125';
  }

  .fa-crop-alt:before {
    content: '\\f565';
  }

  .fa-cross:before {
    content: '\\f654';
  }

  .fa-crosshairs:before {
    content: '\\f05b';
  }

  .fa-crow:before {
    content: '\\f520';
  }

  .fa-crown:before {
    content: '\\f521';
  }

  .fa-crutch:before {
    content: '\\f7f7';
  }

  .fa-css3:before {
    content: '\\f13c';
  }

  .fa-css3-alt:before {
    content: '\\f38b';
  }

  .fa-cube:before {
    content: '\\f1b2';
  }

  .fa-cubes:before {
    content: '\\f1b3';
  }

  .fa-cut:before {
    content: '\\f0c4';
  }

  .fa-cuttlefish:before {
    content: '\\f38c';
  }

  .fa-d-and-d:before {
    content: '\\f38d';
  }

  .fa-d-and-d-beyond:before {
    content: '\\f6ca';
  }

  .fa-dashcube:before {
    content: '\\f210';
  }

  .fa-database:before {
    content: '\\f1c0';
  }

  .fa-deaf:before {
    content: '\\f2a4';
  }

  .fa-delicious:before {
    content: '\\f1a5';
  }

  .fa-democrat:before {
    content: '\\f747';
  }

  .fa-deploydog:before {
    content: '\\f38e';
  }

  .fa-deskpro:before {
    content: '\\f38f';
  }

  .fa-desktop:before {
    content: '\\f108';
  }

  .fa-dev:before {
    content: '\\f6cc';
  }

  .fa-deviantart:before {
    content: '\\f1bd';
  }

  .fa-dharmachakra:before {
    content: '\\f655';
  }

  .fa-dhl:before {
    content: '\\f790';
  }

  .fa-diagnoses:before {
    content: '\\f470';
  }

  .fa-diaspora:before {
    content: '\\f791';
  }

  .fa-dice:before {
    content: '\\f522';
  }

  .fa-dice-d20:before {
    content: '\\f6cf';
  }

  .fa-dice-d6:before {
    content: '\\f6d1';
  }

  .fa-dice-five:before {
    content: '\\f523';
  }

  .fa-dice-four:before {
    content: '\\f524';
  }

  .fa-dice-one:before {
    content: '\\f525';
  }

  .fa-dice-six:before {
    content: '\\f526';
  }

  .fa-dice-three:before {
    content: '\\f527';
  }

  .fa-dice-two:before {
    content: '\\f528';
  }

  .fa-digg:before {
    content: '\\f1a6';
  }

  .fa-digital-ocean:before {
    content: '\\f391';
  }

  .fa-digital-tachograph:before {
    content: '\\f566';
  }

  .fa-directions:before {
    content: '\\f5eb';
  }

  .fa-discord:before {
    content: '\\f392';
  }

  .fa-discourse:before {
    content: '\\f393';
  }

  .fa-divide:before {
    content: '\\f529';
  }

  .fa-dizzy:before {
    content: '\\f567';
  }

  .fa-dna:before {
    content: '\\f471';
  }

  .fa-dochub:before {
    content: '\\f394';
  }

  .fa-docker:before {
    content: '\\f395';
  }

  .fa-dog:before {
    content: '\\f6d3';
  }

  .fa-dollar-sign:before {
    content: '\\f155';
  }

  .fa-dolly:before {
    content: '\\f472';
  }

  .fa-dolly-flatbed:before {
    content: '\\f474';
  }

  .fa-donate:before {
    content: '\\f4b9';
  }

  .fa-door-closed:before {
    content: '\\f52a';
  }

  .fa-door-open:before {
    content: '\\f52b';
  }

  .fa-dot-circle:before {
    content: '\\f192';
  }

  .fa-dove:before {
    content: '\\f4ba';
  }

  .fa-download:before {
    content: '\\f019';
  }

  .fa-draft2digital:before {
    content: '\\f396';
  }

  .fa-drafting-compass:before {
    content: '\\f568';
  }

  .fa-dragon:before {
    content: '\\f6d5';
  }

  .fa-draw-polygon:before {
    content: '\\f5ee';
  }

  .fa-dribbble:before {
    content: '\\f17d';
  }

  .fa-dribbble-square:before {
    content: '\\f397';
  }

  .fa-dropbox:before {
    content: '\\f16b';
  }

  .fa-drum:before {
    content: '\\f569';
  }

  .fa-drum-steelpan:before {
    content: '\\f56a';
  }

  .fa-drumstick-bite:before {
    content: '\\f6d7';
  }

  .fa-drupal:before {
    content: '\\f1a9';
  }

  .fa-dumbbell:before {
    content: '\\f44b';
  }

  .fa-dumpster:before {
    content: '\\f793';
  }

  .fa-dumpster-fire:before {
    content: '\\f794';
  }

  .fa-dungeon:before {
    content: '\\f6d9';
  }

  .fa-dyalog:before {
    content: '\\f399';
  }

  .fa-earlybirds:before {
    content: '\\f39a';
  }

  .fa-ebay:before {
    content: '\\f4f4';
  }

  .fa-edge:before {
    content: '\\f282';
  }

  .fa-edit:before {
    content: '\\f044';
  }

  .fa-egg:before {
    content: '\\f7fb';
  }

  .fa-eject:before {
    content: '\\f052';
  }

  .fa-elementor:before {
    content: '\\f430';
  }

  .fa-ellipsis-h:before {
    content: '\\f141';
  }

  .fa-ellipsis-v:before {
    content: '\\f142';
  }

  .fa-ello:before {
    content: '\\f5f1';
  }

  .fa-ember:before {
    content: '\\f423';
  }

  .fa-empire:before {
    content: '\\f1d1';
  }

  .fa-envelope:before {
    content: '\\f0e0';
  }

  .fa-envelope-open:before {
    content: '\\f2b6';
  }

  .fa-envelope-open-text:before {
    content: '\\f658';
  }

  .fa-envelope-square:before {
    content: '\\f199';
  }

  .fa-envira:before {
    content: '\\f299';
  }

  .fa-equals:before {
    content: '\\f52c';
  }

  .fa-eraser:before {
    content: '\\f12d';
  }

  .fa-erlang:before {
    content: '\\f39d';
  }

  .fa-ethereum:before {
    content: '\\f42e';
  }

  .fa-ethernet:before {
    content: '\\f796';
  }

  .fa-etsy:before {
    content: '\\f2d7';
  }

  .fa-euro-sign:before {
    content: '\\f153';
  }

  .fa-evernote:before {
    content: '\\f839';
  }

  .fa-exchange-alt:before {
    content: '\\f362';
  }

  .fa-exclamation:before {
    content: '\\f12a';
  }

  .fa-exclamation-circle:before {
    content: '\\f06a';
  }

  .fa-exclamation-triangle:before {
    content: '\\f071';
  }

  .fa-expand:before {
    content: '\\f065';
  }

  .fa-expand-arrows-alt:before {
    content: '\\f31e';
  }

  .fa-expeditedssl:before {
    content: '\\f23e';
  }

  .fa-external-link-alt:before {
    content: '\\f35d';
  }

  .fa-external-link-square-alt:before {
    content: '\\f360';
  }

  .fa-eye:before {
    content: '\\f06e';
  }

  .fa-eye-dropper:before {
    content: '\\f1fb';
  }

  .fa-eye-slash:before {
    content: '\\f070';
  }

  .fa-facebook:before {
    content: '\\f09a';
  }

  .fa-facebook-f:before {
    content: '\\f39e';
  }

  .fa-facebook-messenger:before {
    content: '\\f39f';
  }

  .fa-facebook-square:before {
    content: '\\f082';
  }

  .fa-fan:before {
    content: '\\f863';
  }

  .fa-fantasy-flight-games:before {
    content: '\\f6dc';
  }

  .fa-fast-backward:before {
    content: '\\f049';
  }

  .fa-fast-forward:before {
    content: '\\f050';
  }

  .fa-fax:before {
    content: '\\f1ac';
  }

  .fa-feather:before {
    content: '\\f52d';
  }

  .fa-feather-alt:before {
    content: '\\f56b';
  }

  .fa-fedex:before {
    content: '\\f797';
  }

  .fa-fedora:before {
    content: '\\f798';
  }

  .fa-female:before {
    content: '\\f182';
  }

  .fa-fighter-jet:before {
    content: '\\f0fb';
  }

  .fa-figma:before {
    content: '\\f799';
  }

  .fa-file:before {
    content: '\\f15b';
  }

  .fa-file-alt:before {
    content: '\\f15c';
  }

  .fa-file-archive:before {
    content: '\\f1c6';
  }

  .fa-file-audio:before {
    content: '\\f1c7';
  }

  .fa-file-code:before {
    content: '\\f1c9';
  }

  .fa-file-contract:before {
    content: '\\f56c';
  }

  .fa-file-csv:before {
    content: '\\f6dd';
  }

  .fa-file-download:before {
    content: '\\f56d';
  }

  .fa-file-excel:before {
    content: '\\f1c3';
  }

  .fa-file-export:before {
    content: '\\f56e';
  }

  .fa-file-image:before {
    content: '\\f1c5';
  }

  .fa-file-import:before {
    content: '\\f56f';
  }

  .fa-file-invoice:before {
    content: '\\f570';
  }

  .fa-file-invoice-dollar:before {
    content: '\\f571';
  }

  .fa-file-medical:before {
    content: '\\f477';
  }

  .fa-file-medical-alt:before {
    content: '\\f478';
  }

  .fa-file-pdf:before {
    content: '\\f1c1';
  }

  .fa-file-powerpoint:before {
    content: '\\f1c4';
  }

  .fa-file-prescription:before {
    content: '\\f572';
  }

  .fa-file-signature:before {
    content: '\\f573';
  }

  .fa-file-upload:before {
    content: '\\f574';
  }

  .fa-file-video:before {
    content: '\\f1c8';
  }

  .fa-file-word:before {
    content: '\\f1c2';
  }

  .fa-fill:before {
    content: '\\f575';
  }

  .fa-fill-drip:before {
    content: '\\f576';
  }

  .fa-film:before {
    content: '\\f008';
  }

  .fa-filter:before {
    content: '\\f0b0';
  }

  .fa-fingerprint:before {
    content: '\\f577';
  }

  .fa-fire:before {
    content: '\\f06d';
  }

  .fa-fire-alt:before {
    content: '\\f7e4';
  }

  .fa-fire-extinguisher:before {
    content: '\\f134';
  }

  .fa-firefox:before {
    content: '\\f269';
  }

  .fa-first-aid:before {
    content: '\\f479';
  }

  .fa-first-order:before {
    content: '\\f2b0';
  }

  .fa-first-order-alt:before {
    content: '\\f50a';
  }

  .fa-firstdraft:before {
    content: '\\f3a1';
  }

  .fa-fish:before {
    content: '\\f578';
  }

  .fa-fist-raised:before {
    content: '\\f6de';
  }

  .fa-flag:before {
    content: '\\f024';
  }

  .fa-flag-checkered:before {
    content: '\\f11e';
  }

  .fa-flag-usa:before {
    content: '\\f74d';
  }

  .fa-flask:before {
    content: '\\f0c3';
  }

  .fa-flickr:before {
    content: '\\f16e';
  }

  .fa-flipboard:before {
    content: '\\f44d';
  }

  .fa-flushed:before {
    content: '\\f579';
  }

  .fa-fly:before {
    content: '\\f417';
  }

  .fa-folder:before {
    content: '\\f07b';
  }

  .fa-folder-minus:before {
    content: '\\f65d';
  }

  .fa-folder-open:before {
    content: '\\f07c';
  }

  .fa-folder-plus:before {
    content: '\\f65e';
  }

  .fa-font:before {
    content: '\\f031';
  }

  .fa-font-awesome:before {
    content: '\\f2b4';
  }

  .fa-font-awesome-alt:before {
    content: '\\f35c';
  }

  .fa-font-awesome-flag:before {
    content: '\\f425';
  }

  .fa-font-awesome-logo-full:before {
    content: '\\f4e6';
  }

  .fa-fonticons:before {
    content: '\\f280';
  }

  .fa-fonticons-fi:before {
    content: '\\f3a2';
  }

  .fa-football-ball:before {
    content: '\\f44e';
  }

  .fa-fort-awesome:before {
    content: '\\f286';
  }

  .fa-fort-awesome-alt:before {
    content: '\\f3a3';
  }

  .fa-forumbee:before {
    content: '\\f211';
  }

  .fa-forward:before {
    content: '\\f04e';
  }

  .fa-foursquare:before {
    content: '\\f180';
  }

  .fa-free-code-camp:before {
    content: '\\f2c5';
  }

  .fa-freebsd:before {
    content: '\\f3a4';
  }

  .fa-frog:before {
    content: '\\f52e';
  }

  .fa-frown:before {
    content: '\\f119';
  }

  .fa-frown-open:before {
    content: '\\f57a';
  }

  .fa-fulcrum:before {
    content: '\\f50b';
  }

  .fa-funnel-dollar:before {
    content: '\\f662';
  }

  .fa-futbol:before {
    content: '\\f1e3';
  }

  .fa-galactic-republic:before {
    content: '\\f50c';
  }

  .fa-galactic-senate:before {
    content: '\\f50d';
  }

  .fa-gamepad:before {
    content: '\\f11b';
  }

  .fa-gas-pump:before {
    content: '\\f52f';
  }

  .fa-gavel:before {
    content: '\\f0e3';
  }

  .fa-gem:before {
    content: '\\f3a5';
  }

  .fa-genderless:before {
    content: '\\f22d';
  }

  .fa-get-pocket:before {
    content: '\\f265';
  }

  .fa-gg:before {
    content: '\\f260';
  }

  .fa-gg-circle:before {
    content: '\\f261';
  }

  .fa-ghost:before {
    content: '\\f6e2';
  }

  .fa-gift:before {
    content: '\\f06b';
  }

  .fa-gifts:before {
    content: '\\f79c';
  }

  .fa-git:before {
    content: '\\f1d3';
  }

  .fa-git-alt:before {
    content: '\\f841';
  }

  .fa-git-square:before {
    content: '\\f1d2';
  }

  .fa-github:before {
    content: '\\f09b';
  }

  .fa-github-alt:before {
    content: '\\f113';
  }

  .fa-github-square:before {
    content: '\\f092';
  }

  .fa-gitkraken:before {
    content: '\\f3a6';
  }

  .fa-gitlab:before {
    content: '\\f296';
  }

  .fa-gitter:before {
    content: '\\f426';
  }

  .fa-glass-cheers:before {
    content: '\\f79f';
  }

  .fa-glass-martini:before {
    content: '\\f000';
  }

  .fa-glass-martini-alt:before {
    content: '\\f57b';
  }

  .fa-glass-whiskey:before {
    content: '\\f7a0';
  }

  .fa-glasses:before {
    content: '\\f530';
  }

  .fa-glide:before {
    content: '\\f2a5';
  }

  .fa-glide-g:before {
    content: '\\f2a6';
  }

  .fa-globe:before {
    content: '\\f0ac';
  }

  .fa-globe-africa:before {
    content: '\\f57c';
  }

  .fa-globe-americas:before {
    content: '\\f57d';
  }

  .fa-globe-asia:before {
    content: '\\f57e';
  }

  .fa-globe-europe:before {
    content: '\\f7a2';
  }

  .fa-gofore:before {
    content: '\\f3a7';
  }

  .fa-golf-ball:before {
    content: '\\f450';
  }

  .fa-goodreads:before {
    content: '\\f3a8';
  }

  .fa-goodreads-g:before {
    content: '\\f3a9';
  }

  .fa-google:before {
    content: '\\f1a0';
  }

  .fa-google-drive:before {
    content: '\\f3aa';
  }

  .fa-google-play:before {
    content: '\\f3ab';
  }

  .fa-google-plus:before {
    content: '\\f2b3';
  }

  .fa-google-plus-g:before {
    content: '\\f0d5';
  }

  .fa-google-plus-square:before {
    content: '\\f0d4';
  }

  .fa-google-wallet:before {
    content: '\\f1ee';
  }

  .fa-gopuram:before {
    content: '\\f664';
  }

  .fa-graduation-cap:before {
    content: '\\f19d';
  }

  .fa-gratipay:before {
    content: '\\f184';
  }

  .fa-grav:before {
    content: '\\f2d6';
  }

  .fa-greater-than:before {
    content: '\\f531';
  }

  .fa-greater-than-equal:before {
    content: '\\f532';
  }

  .fa-grimace:before {
    content: '\\f57f';
  }

  .fa-grin:before {
    content: '\\f580';
  }

  .fa-grin-alt:before {
    content: '\\f581';
  }

  .fa-grin-beam:before {
    content: '\\f582';
  }

  .fa-grin-beam-sweat:before {
    content: '\\f583';
  }

  .fa-grin-hearts:before {
    content: '\\f584';
  }

  .fa-grin-squint:before {
    content: '\\f585';
  }

  .fa-grin-squint-tears:before {
    content: '\\f586';
  }

  .fa-grin-stars:before {
    content: '\\f587';
  }

  .fa-grin-tears:before {
    content: '\\f588';
  }

  .fa-grin-tongue:before {
    content: '\\f589';
  }

  .fa-grin-tongue-squint:before {
    content: '\\f58a';
  }

  .fa-grin-tongue-wink:before {
    content: '\\f58b';
  }

  .fa-grin-wink:before {
    content: '\\f58c';
  }

  .fa-grip-horizontal:before {
    content: '\\f58d';
  }

  .fa-grip-lines:before {
    content: '\\f7a4';
  }

  .fa-grip-lines-vertical:before {
    content: '\\f7a5';
  }

  .fa-grip-vertical:before {
    content: '\\f58e';
  }

  .fa-gripfire:before {
    content: '\\f3ac';
  }

  .fa-grunt:before {
    content: '\\f3ad';
  }

  .fa-guitar:before {
    content: '\\f7a6';
  }

  .fa-gulp:before {
    content: '\\f3ae';
  }

  .fa-h-square:before {
    content: '\\f0fd';
  }

  .fa-hacker-news:before {
    content: '\\f1d4';
  }

  .fa-hacker-news-square:before {
    content: '\\f3af';
  }

  .fa-hackerrank:before {
    content: '\\f5f7';
  }

  .fa-hamburger:before {
    content: '\\f805';
  }

  .fa-hammer:before {
    content: '\\f6e3';
  }

  .fa-hamsa:before {
    content: '\\f665';
  }

  .fa-hand-holding:before {
    content: '\\f4bd';
  }

  .fa-hand-holding-heart:before {
    content: '\\f4be';
  }

  .fa-hand-holding-usd:before {
    content: '\\f4c0';
  }

  .fa-hand-lizard:before {
    content: '\\f258';
  }

  .fa-hand-middle-finger:before {
    content: '\\f806';
  }

  .fa-hand-paper:before {
    content: '\\f256';
  }

  .fa-hand-peace:before {
    content: '\\f25b';
  }

  .fa-hand-point-down:before {
    content: '\\f0a7';
  }

  .fa-hand-point-left:before {
    content: '\\f0a5';
  }

  .fa-hand-point-right:before {
    content: '\\f0a4';
  }

  .fa-hand-point-up:before {
    content: '\\f0a6';
  }

  .fa-hand-pointer:before {
    content: '\\f25a';
  }

  .fa-hand-rock:before {
    content: '\\f255';
  }

  .fa-hand-scissors:before {
    content: '\\f257';
  }

  .fa-hand-spock:before {
    content: '\\f259';
  }

  .fa-hands:before {
    content: '\\f4c2';
  }

  .fa-hands-helping:before {
    content: '\\f4c4';
  }

  .fa-handshake:before {
    content: '\\f2b5';
  }

  .fa-hanukiah:before {
    content: '\\f6e6';
  }

  .fa-hard-hat:before {
    content: '\\f807';
  }

  .fa-hashtag:before {
    content: '\\f292';
  }

  .fa-hat-cowboy:before {
    content: '\\f8c0';
  }

  .fa-hat-cowboy-side:before {
    content: '\\f8c1';
  }

  .fa-hat-wizard:before {
    content: '\\f6e8';
  }

  .fa-haykal:before {
    content: '\\f666';
  }

  .fa-hdd:before {
    content: '\\f0a0';
  }

  .fa-heading:before {
    content: '\\f1dc';
  }

  .fa-headphones:before {
    content: '\\f025';
  }

  .fa-headphones-alt:before {
    content: '\\f58f';
  }

  .fa-headset:before {
    content: '\\f590';
  }

  .fa-heart:before {
    content: '\\f004';
  }

  .fa-heart-broken:before {
    content: '\\f7a9';
  }

  .fa-heartbeat:before {
    content: '\\f21e';
  }

  .fa-helicopter:before {
    content: '\\f533';
  }

  .fa-highlighter:before {
    content: '\\f591';
  }

  .fa-hiking:before {
    content: '\\f6ec';
  }

  .fa-hippo:before {
    content: '\\f6ed';
  }

  .fa-hips:before {
    content: '\\f452';
  }

  .fa-hire-a-helper:before {
    content: '\\f3b0';
  }

  .fa-history:before {
    content: '\\f1da';
  }

  .fa-hockey-puck:before {
    content: '\\f453';
  }

  .fa-holly-berry:before {
    content: '\\f7aa';
  }

  .fa-home:before {
    content: '\\f015';
  }

  .fa-hooli:before {
    content: '\\f427';
  }

  .fa-hornbill:before {
    content: '\\f592';
  }

  .fa-horse:before {
    content: '\\f6f0';
  }

  .fa-horse-head:before {
    content: '\\f7ab';
  }

  .fa-hospital:before {
    content: '\\f0f8';
  }

  .fa-hospital-alt:before {
    content: '\\f47d';
  }

  .fa-hospital-symbol:before {
    content: '\\f47e';
  }

  .fa-hot-tub:before {
    content: '\\f593';
  }

  .fa-hotdog:before {
    content: '\\f80f';
  }

  .fa-hotel:before {
    content: '\\f594';
  }

  .fa-hotjar:before {
    content: '\\f3b1';
  }

  .fa-hourglass:before {
    content: '\\f254';
  }

  .fa-hourglass-end:before {
    content: '\\f253';
  }

  .fa-hourglass-half:before {
    content: '\\f252';
  }

  .fa-hourglass-start:before {
    content: '\\f251';
  }

  .fa-house-damage:before {
    content: '\\f6f1';
  }

  .fa-houzz:before {
    content: '\\f27c';
  }

  .fa-hryvnia:before {
    content: '\\f6f2';
  }

  .fa-html5:before {
    content: '\\f13b';
  }

  .fa-hubspot:before {
    content: '\\f3b2';
  }

  .fa-i-cursor:before {
    content: '\\f246';
  }

  .fa-ice-cream:before {
    content: '\\f810';
  }

  .fa-icicles:before {
    content: '\\f7ad';
  }

  .fa-icons:before {
    content: '\\f86d';
  }

  .fa-id-badge:before {
    content: '\\f2c1';
  }

  .fa-id-card:before {
    content: '\\f2c2';
  }

  .fa-id-card-alt:before {
    content: '\\f47f';
  }

  .fa-igloo:before {
    content: '\\f7ae';
  }

  .fa-image:before {
    content: '\\f03e';
  }

  .fa-images:before {
    content: '\\f302';
  }

  .fa-imdb:before {
    content: '\\f2d8';
  }

  .fa-inbox:before {
    content: '\\f01c';
  }

  .fa-indent:before {
    content: '\\f03c';
  }

  .fa-industry:before {
    content: '\\f275';
  }

  .fa-infinity:before {
    content: '\\f534';
  }

  .fa-info:before {
    content: '\\f129';
  }

  .fa-info-circle:before {
    content: '\\f05a';
  }

  .fa-instagram:before {
    content: '\\f16d';
  }

  .fa-intercom:before {
    content: '\\f7af';
  }

  .fa-internet-explorer:before {
    content: '\\f26b';
  }

  .fa-invision:before {
    content: '\\f7b0';
  }

  .fa-ioxhost:before {
    content: '\\f208';
  }

  .fa-italic:before {
    content: '\\f033';
  }

  .fa-itch-io:before {
    content: '\\f83a';
  }

  .fa-itunes:before {
    content: '\\f3b4';
  }

  .fa-itunes-note:before {
    content: '\\f3b5';
  }

  .fa-java:before {
    content: '\\f4e4';
  }

  .fa-jedi:before {
    content: '\\f669';
  }

  .fa-jedi-order:before {
    content: '\\f50e';
  }

  .fa-jenkins:before {
    content: '\\f3b6';
  }

  .fa-jira:before {
    content: '\\f7b1';
  }

  .fa-joget:before {
    content: '\\f3b7';
  }

  .fa-joint:before {
    content: '\\f595';
  }

  .fa-joomla:before {
    content: '\\f1aa';
  }

  .fa-journal-whills:before {
    content: '\\f66a';
  }

  .fa-js:before {
    content: '\\f3b8';
  }

  .fa-js-square:before {
    content: '\\f3b9';
  }

  .fa-jsfiddle:before {
    content: '\\f1cc';
  }

  .fa-kaaba:before {
    content: '\\f66b';
  }

  .fa-kaggle:before {
    content: '\\f5fa';
  }

  .fa-key:before {
    content: '\\f084';
  }

  .fa-keybase:before {
    content: '\\f4f5';
  }

  .fa-keyboard:before {
    content: '\\f11c';
  }

  .fa-keycdn:before {
    content: '\\f3ba';
  }

  .fa-khanda:before {
    content: '\\f66d';
  }

  .fa-kickstarter:before {
    content: '\\f3bb';
  }

  .fa-kickstarter-k:before {
    content: '\\f3bc';
  }

  .fa-kiss:before {
    content: '\\f596';
  }

  .fa-kiss-beam:before {
    content: '\\f597';
  }

  .fa-kiss-wink-heart:before {
    content: '\\f598';
  }

  .fa-kiwi-bird:before {
    content: '\\f535';
  }

  .fa-korvue:before {
    content: '\\f42f';
  }

  .fa-landmark:before {
    content: '\\f66f';
  }

  .fa-language:before {
    content: '\\f1ab';
  }

  .fa-laptop:before {
    content: '\\f109';
  }

  .fa-laptop-code:before {
    content: '\\f5fc';
  }

  .fa-laptop-medical:before {
    content: '\\f812';
  }

  .fa-laravel:before {
    content: '\\f3bd';
  }

  .fa-lastfm:before {
    content: '\\f202';
  }

  .fa-lastfm-square:before {
    content: '\\f203';
  }

  .fa-laugh:before {
    content: '\\f599';
  }

  .fa-laugh-beam:before {
    content: '\\f59a';
  }

  .fa-laugh-squint:before {
    content: '\\f59b';
  }

  .fa-laugh-wink:before {
    content: '\\f59c';
  }

  .fa-layer-group:before {
    content: '\\f5fd';
  }

  .fa-leaf:before {
    content: '\\f06c';
  }

  .fa-leanpub:before {
    content: '\\f212';
  }

  .fa-lemon:before {
    content: '\\f094';
  }

  .fa-less:before {
    content: '\\f41d';
  }

  .fa-less-than:before {
    content: '\\f536';
  }

  .fa-less-than-equal:before {
    content: '\\f537';
  }

  .fa-level-down-alt:before {
    content: '\\f3be';
  }

  .fa-level-up-alt:before {
    content: '\\f3bf';
  }

  .fa-life-ring:before {
    content: '\\f1cd';
  }

  .fa-lightbulb:before {
    content: '\\f0eb';
  }

  .fa-line:before {
    content: '\\f3c0';
  }

  .fa-link:before {
    content: '\\f0c1';
  }

  .fa-linkedin:before {
    content: '\\f08c';
  }

  .fa-linkedin-in:before {
    content: '\\f0e1';
  }

  .fa-linode:before {
    content: '\\f2b8';
  }

  .fa-linux:before {
    content: '\\f17c';
  }

  .fa-lira-sign:before {
    content: '\\f195';
  }

  .fa-list:before {
    content: '\\f03a';
  }

  .fa-list-alt:before {
    content: '\\f022';
  }

  .fa-list-ol:before {
    content: '\\f0cb';
  }

  .fa-list-ul:before {
    content: '\\f0ca';
  }

  .fa-location-arrow:before {
    content: '\\f124';
  }

  .fa-lock:before {
    content: '\\f023';
  }

  .fa-lock-open:before {
    content: '\\f3c1';
  }

  .fa-long-arrow-alt-down:before {
    content: '\\f309';
  }

  .fa-long-arrow-alt-left:before {
    content: '\\f30a';
  }

  .fa-long-arrow-alt-right:before {
    content: '\\f30b';
  }

  .fa-long-arrow-alt-up:before {
    content: '\\f30c';
  }

  .fa-low-vision:before {
    content: '\\f2a8';
  }

  .fa-luggage-cart:before {
    content: '\\f59d';
  }

  .fa-lyft:before {
    content: '\\f3c3';
  }

  .fa-magento:before {
    content: '\\f3c4';
  }

  .fa-magic:before {
    content: '\\f0d0';
  }

  .fa-magnet:before {
    content: '\\f076';
  }

  .fa-mail-bulk:before {
    content: '\\f674';
  }

  .fa-mailchimp:before {
    content: '\\f59e';
  }

  .fa-male:before {
    content: '\\f183';
  }

  .fa-mandalorian:before {
    content: '\\f50f';
  }

  .fa-map:before {
    content: '\\f279';
  }

  .fa-map-marked:before {
    content: '\\f59f';
  }

  .fa-map-marked-alt:before {
    content: '\\f5a0';
  }

  .fa-map-marker:before {
    content: '\\f041';
  }

  .fa-map-marker-alt:before {
    content: '\\f3c5';
  }

  .fa-map-pin:before {
    content: '\\f276';
  }

  .fa-map-signs:before {
    content: '\\f277';
  }

  .fa-markdown:before {
    content: '\\f60f';
  }

  .fa-marker:before {
    content: '\\f5a1';
  }

  .fa-mars:before {
    content: '\\f222';
  }

  .fa-mars-double:before {
    content: '\\f227';
  }

  .fa-mars-stroke:before {
    content: '\\f229';
  }

  .fa-mars-stroke-h:before {
    content: '\\f22b';
  }

  .fa-mars-stroke-v:before {
    content: '\\f22a';
  }

  .fa-mask:before {
    content: '\\f6fa';
  }

  .fa-mastodon:before {
    content: '\\f4f6';
  }

  .fa-maxcdn:before {
    content: '\\f136';
  }

  .fa-mdb:before {
    content: '\\f8ca';
  }

  .fa-medal:before {
    content: '\\f5a2';
  }

  .fa-medapps:before {
    content: '\\f3c6';
  }

  .fa-medium:before {
    content: '\\f23a';
  }

  .fa-medium-m:before {
    content: '\\f3c7';
  }

  .fa-medkit:before {
    content: '\\f0fa';
  }

  .fa-medrt:before {
    content: '\\f3c8';
  }

  .fa-meetup:before {
    content: '\\f2e0';
  }

  .fa-megaport:before {
    content: '\\f5a3';
  }

  .fa-meh:before {
    content: '\\f11a';
  }

  .fa-meh-blank:before {
    content: '\\f5a4';
  }

  .fa-meh-rolling-eyes:before {
    content: '\\f5a5';
  }

  .fa-memory:before {
    content: '\\f538';
  }

  .fa-mendeley:before {
    content: '\\f7b3';
  }

  .fa-menorah:before {
    content: '\\f676';
  }

  .fa-mercury:before {
    content: '\\f223';
  }

  .fa-meteor:before {
    content: '\\f753';
  }

  .fa-microchip:before {
    content: '\\f2db';
  }

  .fa-microphone:before {
    content: '\\f130';
  }

  .fa-microphone-alt:before {
    content: '\\f3c9';
  }

  .fa-microphone-alt-slash:before {
    content: '\\f539';
  }

  .fa-microphone-slash:before {
    content: '\\f131';
  }

  .fa-microscope:before {
    content: '\\f610';
  }

  .fa-microsoft:before {
    content: '\\f3ca';
  }

  .fa-minus:before {
    content: '\\f068';
  }

  .fa-minus-circle:before {
    content: '\\f056';
  }

  .fa-minus-square:before {
    content: '\\f146';
  }

  .fa-mitten:before {
    content: '\\f7b5';
  }

  .fa-mix:before {
    content: '\\f3cb';
  }

  .fa-mixcloud:before {
    content: '\\f289';
  }

  .fa-mizuni:before {
    content: '\\f3cc';
  }

  .fa-mobile:before {
    content: '\\f10b';
  }

  .fa-mobile-alt:before {
    content: '\\f3cd';
  }

  .fa-modx:before {
    content: '\\f285';
  }

  .fa-monero:before {
    content: '\\f3d0';
  }

  .fa-money-bill:before {
    content: '\\f0d6';
  }

  .fa-money-bill-alt:before {
    content: '\\f3d1';
  }

  .fa-money-bill-wave:before {
    content: '\\f53a';
  }

  .fa-money-bill-wave-alt:before {
    content: '\\f53b';
  }

  .fa-money-check:before {
    content: '\\f53c';
  }

  .fa-money-check-alt:before {
    content: '\\f53d';
  }

  .fa-monument:before {
    content: '\\f5a6';
  }

  .fa-moon:before {
    content: '\\f186';
  }

  .fa-mortar-pestle:before {
    content: '\\f5a7';
  }

  .fa-mosque:before {
    content: '\\f678';
  }

  .fa-motorcycle:before {
    content: '\\f21c';
  }

  .fa-mountain:before {
    content: '\\f6fc';
  }

  .fa-mouse:before {
    content: '\\f8cc';
  }

  .fa-mouse-pointer:before {
    content: '\\f245';
  }

  .fa-mug-hot:before {
    content: '\\f7b6';
  }

  .fa-music:before {
    content: '\\f001';
  }

  .fa-napster:before {
    content: '\\f3d2';
  }

  .fa-neos:before {
    content: '\\f612';
  }

  .fa-network-wired:before {
    content: '\\f6ff';
  }

  .fa-neuter:before {
    content: '\\f22c';
  }

  .fa-newspaper:before {
    content: '\\f1ea';
  }

  .fa-nimblr:before {
    content: '\\f5a8';
  }

  .fa-node:before {
    content: '\\f419';
  }

  .fa-node-js:before {
    content: '\\f3d3';
  }

  .fa-not-equal:before {
    content: '\\f53e';
  }

  .fa-notes-medical:before {
    content: '\\f481';
  }

  .fa-npm:before {
    content: '\\f3d4';
  }

  .fa-ns8:before {
    content: '\\f3d5';
  }

  .fa-nutritionix:before {
    content: '\\f3d6';
  }

  .fa-object-group:before {
    content: '\\f247';
  }

  .fa-object-ungroup:before {
    content: '\\f248';
  }

  .fa-odnoklassniki:before {
    content: '\\f263';
  }

  .fa-odnoklassniki-square:before {
    content: '\\f264';
  }

  .fa-oil-can:before {
    content: '\\f613';
  }

  .fa-old-republic:before {
    content: '\\f510';
  }

  .fa-om:before {
    content: '\\f679';
  }

  .fa-opencart:before {
    content: '\\f23d';
  }

  .fa-openid:before {
    content: '\\f19b';
  }

  .fa-opera:before {
    content: '\\f26a';
  }

  .fa-optin-monster:before {
    content: '\\f23c';
  }

  .fa-orcid:before {
    content: '\\f8d2';
  }

  .fa-osi:before {
    content: '\\f41a';
  }

  .fa-otter:before {
    content: '\\f700';
  }

  .fa-outdent:before {
    content: '\\f03b';
  }

  .fa-page4:before {
    content: '\\f3d7';
  }

  .fa-pagelines:before {
    content: '\\f18c';
  }

  .fa-pager:before {
    content: '\\f815';
  }

  .fa-paint-brush:before {
    content: '\\f1fc';
  }

  .fa-paint-roller:before {
    content: '\\f5aa';
  }

  .fa-palette:before {
    content: '\\f53f';
  }

  .fa-palfed:before {
    content: '\\f3d8';
  }

  .fa-pallet:before {
    content: '\\f482';
  }

  .fa-paper-plane:before {
    content: '\\f1d8';
  }

  .fa-paperclip:before {
    content: '\\f0c6';
  }

  .fa-parachute-box:before {
    content: '\\f4cd';
  }

  .fa-paragraph:before {
    content: '\\f1dd';
  }

  .fa-parking:before {
    content: '\\f540';
  }

  .fa-passport:before {
    content: '\\f5ab';
  }

  .fa-pastafarianism:before {
    content: '\\f67b';
  }

  .fa-paste:before {
    content: '\\f0ea';
  }

  .fa-patreon:before {
    content: '\\f3d9';
  }

  .fa-pause:before {
    content: '\\f04c';
  }

  .fa-pause-circle:before {
    content: '\\f28b';
  }

  .fa-paw:before {
    content: '\\f1b0';
  }

  .fa-paypal:before {
    content: '\\f1ed';
  }

  .fa-peace:before {
    content: '\\f67c';
  }

  .fa-pen:before {
    content: '\\f304';
  }

  .fa-pen-alt:before {
    content: '\\f305';
  }

  .fa-pen-fancy:before {
    content: '\\f5ac';
  }

  .fa-pen-nib:before {
    content: '\\f5ad';
  }

  .fa-pen-square:before {
    content: '\\f14b';
  }

  .fa-pencil-alt:before {
    content: '\\f303';
  }

  .fa-pencil-ruler:before {
    content: '\\f5ae';
  }

  .fa-penny-arcade:before {
    content: '\\f704';
  }

  .fa-people-carry:before {
    content: '\\f4ce';
  }

  .fa-pepper-hot:before {
    content: '\\f816';
  }

  .fa-percent:before {
    content: '\\f295';
  }

  .fa-percentage:before {
    content: '\\f541';
  }

  .fa-periscope:before {
    content: '\\f3da';
  }

  .fa-person-booth:before {
    content: '\\f756';
  }

  .fa-phabricator:before {
    content: '\\f3db';
  }

  .fa-phoenix-framework:before {
    content: '\\f3dc';
  }

  .fa-phoenix-squadron:before {
    content: '\\f511';
  }

  .fa-phone:before {
    content: '\\f095';
  }

  .fa-phone-alt:before {
    content: '\\f879';
  }

  .fa-phone-slash:before {
    content: '\\f3dd';
  }

  .fa-phone-square:before {
    content: '\\f098';
  }

  .fa-phone-square-alt:before {
    content: '\\f87b';
  }

  .fa-phone-volume:before {
    content: '\\f2a0';
  }

  .fa-photo-video:before {
    content: '\\f87c';
  }

  .fa-php:before {
    content: '\\f457';
  }

  .fa-pied-piper:before {
    content: '\\f2ae';
  }

  .fa-pied-piper-alt:before {
    content: '\\f1a8';
  }

  .fa-pied-piper-hat:before {
    content: '\\f4e5';
  }

  .fa-pied-piper-pp:before {
    content: '\\f1a7';
  }

  .fa-piggy-bank:before {
    content: '\\f4d3';
  }

  .fa-pills:before {
    content: '\\f484';
  }

  .fa-pinterest:before {
    content: '\\f0d2';
  }

  .fa-pinterest-p:before {
    content: '\\f231';
  }

  .fa-pinterest-square:before {
    content: '\\f0d3';
  }

  .fa-pizza-slice:before {
    content: '\\f818';
  }

  .fa-place-of-worship:before {
    content: '\\f67f';
  }

  .fa-plane:before {
    content: '\\f072';
  }

  .fa-plane-arrival:before {
    content: '\\f5af';
  }

  .fa-plane-departure:before {
    content: '\\f5b0';
  }

  .fa-play:before {
    content: '\\f04b';
  }

  .fa-play-circle:before {
    content: '\\f144';
  }

  .fa-playstation:before {
    content: '\\f3df';
  }

  .fa-plug:before {
    content: '\\f1e6';
  }

  .fa-plus:before {
    content: '\\f067';
  }

  .fa-plus-circle:before {
    content: '\\f055';
  }

  .fa-plus-square:before {
    content: '\\f0fe';
  }

  .fa-podcast:before {
    content: '\\f2ce';
  }

  .fa-poll:before {
    content: '\\f681';
  }

  .fa-poll-h:before {
    content: '\\f682';
  }

  .fa-poo:before {
    content: '\\f2fe';
  }

  .fa-poo-storm:before {
    content: '\\f75a';
  }

  .fa-poop:before {
    content: '\\f619';
  }

  .fa-portrait:before {
    content: '\\f3e0';
  }

  .fa-pound-sign:before {
    content: '\\f154';
  }

  .fa-power-off:before {
    content: '\\f011';
  }

  .fa-pray:before {
    content: '\\f683';
  }

  .fa-praying-hands:before {
    content: '\\f684';
  }

  .fa-prescription:before {
    content: '\\f5b1';
  }

  .fa-prescription-bottle:before {
    content: '\\f485';
  }

  .fa-prescription-bottle-alt:before {
    content: '\\f486';
  }

  .fa-print:before {
    content: '\\f02f';
  }

  .fa-procedures:before {
    content: '\\f487';
  }

  .fa-product-hunt:before {
    content: '\\f288';
  }

  .fa-project-diagram:before {
    content: '\\f542';
  }

  .fa-pushed:before {
    content: '\\f3e1';
  }

  .fa-puzzle-piece:before {
    content: '\\f12e';
  }

  .fa-python:before {
    content: '\\f3e2';
  }

  .fa-qq:before {
    content: '\\f1d6';
  }

  .fa-qrcode:before {
    content: '\\f029';
  }

  .fa-question:before {
    content: '\\f128';
  }

  .fa-question-circle:before {
    content: '\\f059';
  }

  .fa-quidditch:before {
    content: '\\f458';
  }

  .fa-quinscape:before {
    content: '\\f459';
  }

  .fa-quora:before {
    content: '\\f2c4';
  }

  .fa-quote-left:before {
    content: '\\f10d';
  }

  .fa-quote-right:before {
    content: '\\f10e';
  }

  .fa-quran:before {
    content: '\\f687';
  }

  .fa-r-project:before {
    content: '\\f4f7';
  }

  .fa-radiation:before {
    content: '\\f7b9';
  }

  .fa-radiation-alt:before {
    content: '\\f7ba';
  }

  .fa-rainbow:before {
    content: '\\f75b';
  }

  .fa-random:before {
    content: '\\f074';
  }

  .fa-raspberry-pi:before {
    content: '\\f7bb';
  }

  .fa-ravelry:before {
    content: '\\f2d9';
  }

  .fa-react:before {
    content: '\\f41b';
  }

  .fa-reacteurope:before {
    content: '\\f75d';
  }

  .fa-readme:before {
    content: '\\f4d5';
  }

  .fa-rebel:before {
    content: '\\f1d0';
  }

  .fa-receipt:before {
    content: '\\f543';
  }

  .fa-record-vinyl:before {
    content: '\\f8d9';
  }

  .fa-recycle:before {
    content: '\\f1b8';
  }

  .fa-red-river:before {
    content: '\\f3e3';
  }

  .fa-reddit:before {
    content: '\\f1a1';
  }

  .fa-reddit-alien:before {
    content: '\\f281';
  }

  .fa-reddit-square:before {
    content: '\\f1a2';
  }

  .fa-redhat:before {
    content: '\\f7bc';
  }

  .fa-redo:before {
    content: '\\f01e';
  }

  .fa-redo-alt:before {
    content: '\\f2f9';
  }

  .fa-registered:before {
    content: '\\f25d';
  }

  .fa-remove-format:before {
    content: '\\f87d';
  }

  .fa-renren:before {
    content: '\\f18b';
  }

  .fa-reply:before {
    content: '\\f3e5';
  }

  .fa-reply-all:before {
    content: '\\f122';
  }

  .fa-replyd:before {
    content: '\\f3e6';
  }

  .fa-republican:before {
    content: '\\f75e';
  }

  .fa-researchgate:before {
    content: '\\f4f8';
  }

  .fa-resolving:before {
    content: '\\f3e7';
  }

  .fa-restroom:before {
    content: '\\f7bd';
  }

  .fa-retweet:before {
    content: '\\f079';
  }

  .fa-rev:before {
    content: '\\f5b2';
  }

  .fa-ribbon:before {
    content: '\\f4d6';
  }

  .fa-ring:before {
    content: '\\f70b';
  }

  .fa-road:before {
    content: '\\f018';
  }

  .fa-robot:before {
    content: '\\f544';
  }

  .fa-rocket:before {
    content: '\\f135';
  }

  .fa-rocketchat:before {
    content: '\\f3e8';
  }

  .fa-rockrms:before {
    content: '\\f3e9';
  }

  .fa-route:before {
    content: '\\f4d7';
  }

  .fa-rss:before {
    content: '\\f09e';
  }

  .fa-rss-square:before {
    content: '\\f143';
  }

  .fa-ruble-sign:before {
    content: '\\f158';
  }

  .fa-ruler:before {
    content: '\\f545';
  }

  .fa-ruler-combined:before {
    content: '\\f546';
  }

  .fa-ruler-horizontal:before {
    content: '\\f547';
  }

  .fa-ruler-vertical:before {
    content: '\\f548';
  }

  .fa-running:before {
    content: '\\f70c';
  }

  .fa-rupee-sign:before {
    content: '\\f156';
  }

  .fa-sad-cry:before {
    content: '\\f5b3';
  }

  .fa-sad-tear:before {
    content: '\\f5b4';
  }

  .fa-safari:before {
    content: '\\f267';
  }

  .fa-salesforce:before {
    content: '\\f83b';
  }

  .fa-sass:before {
    content: '\\f41e';
  }

  .fa-satellite:before {
    content: '\\f7bf';
  }

  .fa-satellite-dish:before {
    content: '\\f7c0';
  }

  .fa-save:before {
    content: '\\f0c7';
  }

  .fa-schlix:before {
    content: '\\f3ea';
  }

  .fa-school:before {
    content: '\\f549';
  }

  .fa-screwdriver:before {
    content: '\\f54a';
  }

  .fa-scribd:before {
    content: '\\f28a';
  }

  .fa-scroll:before {
    content: '\\f70e';
  }

  .fa-sd-card:before {
    content: '\\f7c2';
  }

  .fa-search:before {
    content: '\\f002';
  }

  .fa-search-dollar:before {
    content: '\\f688';
  }

  .fa-search-location:before {
    content: '\\f689';
  }

  .fa-search-minus:before {
    content: '\\f010';
  }

  .fa-search-plus:before {
    content: '\\f00e';
  }

  .fa-searchengin:before {
    content: '\\f3eb';
  }

  .fa-seedling:before {
    content: '\\f4d8';
  }

  .fa-sellcast:before {
    content: '\\f2da';
  }

  .fa-sellsy:before {
    content: '\\f213';
  }

  .fa-server:before {
    content: '\\f233';
  }

  .fa-servicestack:before {
    content: '\\f3ec';
  }

  .fa-shapes:before {
    content: '\\f61f';
  }

  .fa-share:before {
    content: '\\f064';
  }

  .fa-share-alt:before {
    content: '\\f1e0';
  }

  .fa-share-alt-square:before {
    content: '\\f1e1';
  }

  .fa-share-square:before {
    content: '\\f14d';
  }

  .fa-shekel-sign:before {
    content: '\\f20b';
  }

  .fa-shield-alt:before {
    content: '\\f3ed';
  }

  .fa-ship:before {
    content: '\\f21a';
  }

  .fa-shipping-fast:before {
    content: '\\f48b';
  }

  .fa-shirtsinbulk:before {
    content: '\\f214';
  }

  .fa-shoe-prints:before {
    content: '\\f54b';
  }

  .fa-shopping-bag:before {
    content: '\\f290';
  }

  .fa-shopping-basket:before {
    content: '\\f291';
  }

  .fa-shopping-cart:before {
    content: '\\f07a';
  }

  .fa-shopware:before {
    content: '\\f5b5';
  }

  .fa-shower:before {
    content: '\\f2cc';
  }

  .fa-shuttle-van:before {
    content: '\\f5b6';
  }

  .fa-sign:before {
    content: '\\f4d9';
  }

  .fa-sign-in-alt:before {
    content: '\\f2f6';
  }

  .fa-sign-language:before {
    content: '\\f2a7';
  }

  .fa-sign-out-alt:before {
    content: '\\f2f5';
  }

  .fa-signal:before {
    content: '\\f012';
  }

  .fa-signature:before {
    content: '\\f5b7';
  }

  .fa-sim-card:before {
    content: '\\f7c4';
  }

  .fa-simplybuilt:before {
    content: '\\f215';
  }

  .fa-sistrix:before {
    content: '\\f3ee';
  }

  .fa-sitemap:before {
    content: '\\f0e8';
  }

  .fa-sith:before {
    content: '\\f512';
  }

  .fa-skating:before {
    content: '\\f7c5';
  }

  .fa-sketch:before {
    content: '\\f7c6';
  }

  .fa-skiing:before {
    content: '\\f7c9';
  }

  .fa-skiing-nordic:before {
    content: '\\f7ca';
  }

  .fa-skull:before {
    content: '\\f54c';
  }

  .fa-skull-crossbones:before {
    content: '\\f714';
  }

  .fa-skyatlas:before {
    content: '\\f216';
  }

  .fa-skype:before {
    content: '\\f17e';
  }

  .fa-slack:before {
    content: '\\f198';
  }

  .fa-slack-hash:before {
    content: '\\f3ef';
  }

  .fa-slash:before {
    content: '\\f715';
  }

  .fa-sleigh:before {
    content: '\\f7cc';
  }

  .fa-sliders-h:before {
    content: '\\f1de';
  }

  .fa-slideshare:before {
    content: '\\f1e7';
  }

  .fa-smile:before {
    content: '\\f118';
  }

  .fa-smile-beam:before {
    content: '\\f5b8';
  }

  .fa-smile-wink:before {
    content: '\\f4da';
  }

  .fa-smog:before {
    content: '\\f75f';
  }

  .fa-smoking:before {
    content: '\\f48d';
  }

  .fa-smoking-ban:before {
    content: '\\f54d';
  }

  .fa-sms:before {
    content: '\\f7cd';
  }

  .fa-snapchat:before {
    content: '\\f2ab';
  }

  .fa-snapchat-ghost:before {
    content: '\\f2ac';
  }

  .fa-snapchat-square:before {
    content: '\\f2ad';
  }

  .fa-snowboarding:before {
    content: '\\f7ce';
  }

  .fa-snowflake:before {
    content: '\\f2dc';
  }

  .fa-snowman:before {
    content: '\\f7d0';
  }

  .fa-snowplow:before {
    content: '\\f7d2';
  }

  .fa-socks:before {
    content: '\\f696';
  }

  .fa-solar-panel:before {
    content: '\\f5ba';
  }

  .fa-sort:before {
    content: '\\f0dc';
  }

  .fa-sort-alpha-down:before {
    content: '\\f15d';
  }

  .fa-sort-alpha-down-alt:before {
    content: '\\f881';
  }

  .fa-sort-alpha-up:before {
    content: '\\f15e';
  }

  .fa-sort-alpha-up-alt:before {
    content: '\\f882';
  }

  .fa-sort-amount-down:before {
    content: '\\f160';
  }

  .fa-sort-amount-down-alt:before {
    content: '\\f884';
  }

  .fa-sort-amount-up:before {
    content: '\\f161';
  }

  .fa-sort-amount-up-alt:before {
    content: '\\f885';
  }

  .fa-sort-down:before {
    content: '\\f0dd';
  }

  .fa-sort-numeric-down:before {
    content: '\\f162';
  }

  .fa-sort-numeric-down-alt:before {
    content: '\\f886';
  }

  .fa-sort-numeric-up:before {
    content: '\\f163';
  }

  .fa-sort-numeric-up-alt:before {
    content: '\\f887';
  }

  .fa-sort-up:before {
    content: '\\f0de';
  }

  .fa-soundcloud:before {
    content: '\\f1be';
  }

  .fa-sourcetree:before {
    content: '\\f7d3';
  }

  .fa-spa:before {
    content: '\\f5bb';
  }

  .fa-space-shuttle:before {
    content: '\\f197';
  }

  .fa-speakap:before {
    content: '\\f3f3';
  }

  .fa-speaker-deck:before {
    content: '\\f83c';
  }

  .fa-spell-check:before {
    content: '\\f891';
  }

  .fa-spider:before {
    content: '\\f717';
  }

  .fa-spinner:before {
    content: '\\f110';
  }

  .fa-splotch:before {
    content: '\\f5bc';
  }

  .fa-spotify:before {
    content: '\\f1bc';
  }

  .fa-spray-can:before {
    content: '\\f5bd';
  }

  .fa-square:before {
    content: '\\f0c8';
  }

  .fa-square-full:before {
    content: '\\f45c';
  }

  .fa-square-root-alt:before {
    content: '\\f698';
  }

  .fa-squarespace:before {
    content: '\\f5be';
  }

  .fa-stack-exchange:before {
    content: '\\f18d';
  }

  .fa-stack-overflow:before {
    content: '\\f16c';
  }

  .fa-stackpath:before {
    content: '\\f842';
  }

  .fa-stamp:before {
    content: '\\f5bf';
  }

  .fa-star:before {
    content: '\\f005';
  }

  .fa-star-and-crescent:before {
    content: '\\f699';
  }

  .fa-star-half:before {
    content: '\\f089';
  }

  .fa-star-half-alt:before {
    content: '\\f5c0';
  }

  .fa-star-of-david:before {
    content: '\\f69a';
  }

  .fa-star-of-life:before {
    content: '\\f621';
  }

  .fa-staylinked:before {
    content: '\\f3f5';
  }

  .fa-steam:before {
    content: '\\f1b6';
  }

  .fa-steam-square:before {
    content: '\\f1b7';
  }

  .fa-steam-symbol:before {
    content: '\\f3f6';
  }

  .fa-step-backward:before {
    content: '\\f048';
  }

  .fa-step-forward:before {
    content: '\\f051';
  }

  .fa-stethoscope:before {
    content: '\\f0f1';
  }

  .fa-sticker-mule:before {
    content: '\\f3f7';
  }

  .fa-sticky-note:before {
    content: '\\f249';
  }

  .fa-stop:before {
    content: '\\f04d';
  }

  .fa-stop-circle:before {
    content: '\\f28d';
  }

  .fa-stopwatch:before {
    content: '\\f2f2';
  }

  .fa-store:before {
    content: '\\f54e';
  }

  .fa-store-alt:before {
    content: '\\f54f';
  }

  .fa-strava:before {
    content: '\\f428';
  }

  .fa-stream:before {
    content: '\\f550';
  }

  .fa-street-view:before {
    content: '\\f21d';
  }

  .fa-strikethrough:before {
    content: '\\f0cc';
  }

  .fa-stripe:before {
    content: '\\f429';
  }

  .fa-stripe-s:before {
    content: '\\f42a';
  }

  .fa-stroopwafel:before {
    content: '\\f551';
  }

  .fa-studiovinari:before {
    content: '\\f3f8';
  }

  .fa-stumbleupon:before {
    content: '\\f1a4';
  }

  .fa-stumbleupon-circle:before {
    content: '\\f1a3';
  }

  .fa-subscript:before {
    content: '\\f12c';
  }

  .fa-subway:before {
    content: '\\f239';
  }

  .fa-suitcase:before {
    content: '\\f0f2';
  }

  .fa-suitcase-rolling:before {
    content: '\\f5c1';
  }

  .fa-sun:before {
    content: '\\f185';
  }

  .fa-superpowers:before {
    content: '\\f2dd';
  }

  .fa-superscript:before {
    content: '\\f12b';
  }

  .fa-supple:before {
    content: '\\f3f9';
  }

  .fa-surprise:before {
    content: '\\f5c2';
  }

  .fa-suse:before {
    content: '\\f7d6';
  }

  .fa-swatchbook:before {
    content: '\\f5c3';
  }

  .fa-swift:before {
    content: '\\f8e1';
  }

  .fa-swimmer:before {
    content: '\\f5c4';
  }

  .fa-swimming-pool:before {
    content: '\\f5c5';
  }

  .fa-symfony:before {
    content: '\\f83d';
  }

  .fa-synagogue:before {
    content: '\\f69b';
  }

  .fa-sync:before {
    content: '\\f021';
  }

  .fa-sync-alt:before {
    content: '\\f2f1';
  }

  .fa-syringe:before {
    content: '\\f48e';
  }

  .fa-table:before {
    content: '\\f0ce';
  }

  .fa-table-tennis:before {
    content: '\\f45d';
  }

  .fa-tablet:before {
    content: '\\f10a';
  }

  .fa-tablet-alt:before {
    content: '\\f3fa';
  }

  .fa-tablets:before {
    content: '\\f490';
  }

  .fa-tachometer-alt:before {
    content: '\\f3fd';
  }

  .fa-tag:before {
    content: '\\f02b';
  }

  .fa-tags:before {
    content: '\\f02c';
  }

  .fa-tape:before {
    content: '\\f4db';
  }

  .fa-tasks:before {
    content: '\\f0ae';
  }

  .fa-taxi:before {
    content: '\\f1ba';
  }

  .fa-teamspeak:before {
    content: '\\f4f9';
  }

  .fa-teeth:before {
    content: '\\f62e';
  }

  .fa-teeth-open:before {
    content: '\\f62f';
  }

  .fa-telegram:before {
    content: '\\f2c6';
  }

  .fa-telegram-plane:before {
    content: '\\f3fe';
  }

  .fa-temperature-high:before {
    content: '\\f769';
  }

  .fa-temperature-low:before {
    content: '\\f76b';
  }

  .fa-tencent-weibo:before {
    content: '\\f1d5';
  }

  .fa-tenge:before {
    content: '\\f7d7';
  }

  .fa-terminal:before {
    content: '\\f120';
  }

  .fa-text-height:before {
    content: '\\f034';
  }

  .fa-text-width:before {
    content: '\\f035';
  }

  .fa-th:before {
    content: '\\f00a';
  }

  .fa-th-large:before {
    content: '\\f009';
  }

  .fa-th-list:before {
    content: '\\f00b';
  }

  .fa-the-red-yeti:before {
    content: '\\f69d';
  }

  .fa-theater-masks:before {
    content: '\\f630';
  }

  .fa-themeco:before {
    content: '\\f5c6';
  }

  .fa-themeisle:before {
    content: '\\f2b2';
  }

  .fa-thermometer:before {
    content: '\\f491';
  }

  .fa-thermometer-empty:before {
    content: '\\f2cb';
  }

  .fa-thermometer-full:before {
    content: '\\f2c7';
  }

  .fa-thermometer-half:before {
    content: '\\f2c9';
  }

  .fa-thermometer-quarter:before {
    content: '\\f2ca';
  }

  .fa-thermometer-three-quarters:before {
    content: '\\f2c8';
  }

  .fa-think-peaks:before {
    content: '\\f731';
  }

  .fa-thumbs-down:before {
    content: '\\f165';
  }

  .fa-thumbs-up:before {
    content: '\\f164';
  }

  .fa-thumbtack:before {
    content: '\\f08d';
  }

  .fa-ticket-alt:before {
    content: '\\f3ff';
  }

  .fa-times:before {
    content: '\\f00d';
  }

  .fa-times-circle:before {
    content: '\\f057';
  }

  .fa-tint:before {
    content: '\\f043';
  }

  .fa-tint-slash:before {
    content: '\\f5c7';
  }

  .fa-tired:before {
    content: '\\f5c8';
  }

  .fa-toggle-off:before {
    content: '\\f204';
  }

  .fa-toggle-on:before {
    content: '\\f205';
  }

  .fa-toilet:before {
    content: '\\f7d8';
  }

  .fa-toilet-paper:before {
    content: '\\f71e';
  }

  .fa-toolbox:before {
    content: '\\f552';
  }

  .fa-tools:before {
    content: '\\f7d9';
  }

  .fa-tooth:before {
    content: '\\f5c9';
  }

  .fa-torah:before {
    content: '\\f6a0';
  }

  .fa-torii-gate:before {
    content: '\\f6a1';
  }

  .fa-tractor:before {
    content: '\\f722';
  }

  .fa-trade-federation:before {
    content: '\\f513';
  }

  .fa-trademark:before {
    content: '\\f25c';
  }

  .fa-traffic-light:before {
    content: '\\f637';
  }

  .fa-train:before {
    content: '\\f238';
  }

  .fa-tram:before {
    content: '\\f7da';
  }

  .fa-transgender:before {
    content: '\\f224';
  }

  .fa-transgender-alt:before {
    content: '\\f225';
  }

  .fa-trash:before {
    content: '\\f1f8';
  }

  .fa-trash-alt:before {
    content: '\\f2ed';
  }

  .fa-trash-restore:before {
    content: '\\f829';
  }

  .fa-trash-restore-alt:before {
    content: '\\f82a';
  }

  .fa-tree:before {
    content: '\\f1bb';
  }

  .fa-trello:before {
    content: '\\f181';
  }

  .fa-tripadvisor:before {
    content: '\\f262';
  }

  .fa-trophy:before {
    content: '\\f091';
  }

  .fa-truck:before {
    content: '\\f0d1';
  }

  .fa-truck-loading:before {
    content: '\\f4de';
  }

  .fa-truck-monster:before {
    content: '\\f63b';
  }

  .fa-truck-moving:before {
    content: '\\f4df';
  }

  .fa-truck-pickup:before {
    content: '\\f63c';
  }

  .fa-tshirt:before {
    content: '\\f553';
  }

  .fa-tty:before {
    content: '\\f1e4';
  }

  .fa-tumblr:before {
    content: '\\f173';
  }

  .fa-tumblr-square:before {
    content: '\\f174';
  }

  .fa-tv:before {
    content: '\\f26c';
  }

  .fa-twitch:before {
    content: '\\f1e8';
  }

  .fa-twitter:before {
    content: '\\f099';
  }

  .fa-twitter-square:before {
    content: '\\f081';
  }

  .fa-typo3:before {
    content: '\\f42b';
  }

  .fa-uber:before {
    content: '\\f402';
  }

  .fa-ubuntu:before {
    content: '\\f7df';
  }

  .fa-uikit:before {
    content: '\\f403';
  }

  .fa-umbraco:before {
    content: '\\f8e8';
  }

  .fa-umbrella:before {
    content: '\\f0e9';
  }

  .fa-umbrella-beach:before {
    content: '\\f5ca';
  }

  .fa-underline:before {
    content: '\\f0cd';
  }

  .fa-undo:before {
    content: '\\f0e2';
  }

  .fa-undo-alt:before {
    content: '\\f2ea';
  }

  .fa-uniregistry:before {
    content: '\\f404';
  }

  .fa-universal-access:before {
    content: '\\f29a';
  }

  .fa-university:before {
    content: '\\f19c';
  }

  .fa-unlink:before {
    content: '\\f127';
  }

  .fa-unlock:before {
    content: '\\f09c';
  }

  .fa-unlock-alt:before {
    content: '\\f13e';
  }

  .fa-untappd:before {
    content: '\\f405';
  }

  .fa-upload:before {
    content: '\\f093';
  }

  .fa-ups:before {
    content: '\\f7e0';
  }

  .fa-usb:before {
    content: '\\f287';
  }

  .fa-user:before {
    content: '\\f007';
  }

  .fa-user-alt:before {
    content: '\\f406';
  }

  .fa-user-alt-slash:before {
    content: '\\f4fa';
  }

  .fa-user-astronaut:before {
    content: '\\f4fb';
  }

  .fa-user-check:before {
    content: '\\f4fc';
  }

  .fa-user-circle:before {
    content: '\\f2bd';
  }

  .fa-user-clock:before {
    content: '\\f4fd';
  }

  .fa-user-cog:before {
    content: '\\f4fe';
  }

  .fa-user-edit:before {
    content: '\\f4ff';
  }

  .fa-user-friends:before {
    content: '\\f500';
  }

  .fa-user-graduate:before {
    content: '\\f501';
  }

  .fa-user-injured:before {
    content: '\\f728';
  }

  .fa-user-lock:before {
    content: '\\f502';
  }

  .fa-user-md:before {
    content: '\\f0f0';
  }

  .fa-user-minus:before {
    content: '\\f503';
  }

  .fa-user-ninja:before {
    content: '\\f504';
  }

  .fa-user-nurse:before {
    content: '\\f82f';
  }

  .fa-user-plus:before {
    content: '\\f234';
  }

  .fa-user-secret:before {
    content: '\\f21b';
  }

  .fa-user-shield:before {
    content: '\\f505';
  }

  .fa-user-slash:before {
    content: '\\f506';
  }

  .fa-user-tag:before {
    content: '\\f507';
  }

  .fa-user-tie:before {
    content: '\\f508';
  }

  .fa-user-times:before {
    content: '\\f235';
  }

  .fa-users:before {
    content: '\\f0c0';
  }

  .fa-users-cog:before {
    content: '\\f509';
  }

  .fa-usps:before {
    content: '\\f7e1';
  }

  .fa-ussunnah:before {
    content: '\\f407';
  }

  .fa-utensil-spoon:before {
    content: '\\f2e5';
  }

  .fa-utensils:before {
    content: '\\f2e7';
  }

  .fa-vaadin:before {
    content: '\\f408';
  }

  .fa-vector-square:before {
    content: '\\f5cb';
  }

  .fa-venus:before {
    content: '\\f221';
  }

  .fa-venus-double:before {
    content: '\\f226';
  }

  .fa-venus-mars:before {
    content: '\\f228';
  }

  .fa-viacoin:before {
    content: '\\f237';
  }

  .fa-viadeo:before {
    content: '\\f2a9';
  }

  .fa-viadeo-square:before {
    content: '\\f2aa';
  }

  .fa-vial:before {
    content: '\\f492';
  }

  .fa-vials:before {
    content: '\\f493';
  }

  .fa-viber:before {
    content: '\\f409';
  }

  .fa-video:before {
    content: '\\f03d';
  }

  .fa-video-slash:before {
    content: '\\f4e2';
  }

  .fa-vihara:before {
    content: '\\f6a7';
  }

  .fa-vimeo:before {
    content: '\\f40a';
  }

  .fa-vimeo-square:before {
    content: '\\f194';
  }

  .fa-vimeo-v:before {
    content: '\\f27d';
  }

  .fa-vine:before {
    content: '\\f1ca';
  }

  .fa-vk:before {
    content: '\\f189';
  }

  .fa-vnv:before {
    content: '\\f40b';
  }

  .fa-voicemail:before {
    content: '\\f897';
  }

  .fa-volleyball-ball:before {
    content: '\\f45f';
  }

  .fa-volume-down:before {
    content: '\\f027';
  }

  .fa-volume-mute:before {
    content: '\\f6a9';
  }

  .fa-volume-off:before {
    content: '\\f026';
  }

  .fa-volume-up:before {
    content: '\\f028';
  }

  .fa-vote-yea:before {
    content: '\\f772';
  }

  .fa-vr-cardboard:before {
    content: '\\f729';
  }

  .fa-vuejs:before {
    content: '\\f41f';
  }

  .fa-walking:before {
    content: '\\f554';
  }

  .fa-wallet:before {
    content: '\\f555';
  }

  .fa-warehouse:before {
    content: '\\f494';
  }

  .fa-water:before {
    content: '\\f773';
  }

  .fa-wave-square:before {
    content: '\\f83e';
  }

  .fa-waze:before {
    content: '\\f83f';
  }

  .fa-weebly:before {
    content: '\\f5cc';
  }

  .fa-weibo:before {
    content: '\\f18a';
  }

  .fa-weight:before {
    content: '\\f496';
  }

  .fa-weight-hanging:before {
    content: '\\f5cd';
  }

  .fa-weixin:before {
    content: '\\f1d7';
  }

  .fa-whatsapp:before {
    content: '\\f232';
  }

  .fa-whatsapp-square:before {
    content: '\\f40c';
  }

  .fa-wheelchair:before {
    content: '\\f193';
  }

  .fa-whmcs:before {
    content: '\\f40d';
  }

  .fa-wifi:before {
    content: '\\f1eb';
  }

  .fa-wikipedia-w:before {
    content: '\\f266';
  }

  .fa-wind:before {
    content: '\\f72e';
  }

  .fa-window-close:before {
    content: '\\f410';
  }

  .fa-window-maximize:before {
    content: '\\f2d0';
  }

  .fa-window-minimize:before {
    content: '\\f2d1';
  }

  .fa-window-restore:before {
    content: '\\f2d2';
  }

  .fa-windows:before {
    content: '\\f17a';
  }

  .fa-wine-bottle:before {
    content: '\\f72f';
  }

  .fa-wine-glass:before {
    content: '\\f4e3';
  }

  .fa-wine-glass-alt:before {
    content: '\\f5ce';
  }

  .fa-wix:before {
    content: '\\f5cf';
  }

  .fa-wizards-of-the-coast:before {
    content: '\\f730';
  }

  .fa-wolf-pack-battalion:before {
    content: '\\f514';
  }

  .fa-won-sign:before {
    content: '\\f159';
  }

  .fa-wordpress:before {
    content: '\\f19a';
  }

  .fa-wordpress-simple:before {
    content: '\\f411';
  }

  .fa-wpbeginner:before {
    content: '\\f297';
  }

  .fa-wpexplorer:before {
    content: '\\f2de';
  }

  .fa-wpforms:before {
    content: '\\f298';
  }

  .fa-wpressr:before {
    content: '\\f3e4';
  }

  .fa-wrench:before {
    content: '\\f0ad';
  }

  .fa-x-ray:before {
    content: '\\f497';
  }

  .fa-xbox:before {
    content: '\\f412';
  }

  .fa-xing:before {
    content: '\\f168';
  }

  .fa-xing-square:before {
    content: '\\f169';
  }

  .fa-y-combinator:before {
    content: '\\f23b';
  }

  .fa-yahoo:before {
    content: '\\f19e';
  }

  .fa-yammer:before {
    content: '\\f840';
  }

  .fa-yandex:before {
    content: '\\f413';
  }

  .fa-yandex-international:before {
    content: '\\f414';
  }

  .fa-yarn:before {
    content: '\\f7e3';
  }

  .fa-yelp:before {
    content: '\\f1e9';
  }

  .fa-yen-sign:before {
    content: '\\f157';
  }

  .fa-yin-yang:before {
    content: '\\f6ad';
  }

  .fa-yoast:before {
    content: '\\f2b1';
  }

  .fa-youtube:before {
    content: '\\f167';
  }

  .fa-youtube-square:before {
    content: '\\f431';
  }

  .fa-zhihu:before {
    content: '\\f63f';
  }

  .sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .sr-only-focusable:active,
  .sr-only-focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
  }


  .fab {
    font-family: 'Font Awesome 5 Brands';
  }


  .far {
    font-family: 'Font Awesome 5 Free';
    font-weight: 400;
  }


  .fa,
  .fas {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }
`;export{I as $,be as A,xs as F,In as N,zt as a,fn as b,Ht as c,uc as d,se as e,Af as f,si as g,Yf as h,ue as i,Zf as j,Qn as k,Xt as l,eo as m,ie as n,Sc as o,oo as p,Uc as q,b as r,fe as s,le as t,qc as u,uo as v,Uf as w,D as x,Dt as y,Bt as z};
