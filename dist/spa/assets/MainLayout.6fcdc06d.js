import{Q as nt,R as te}from"./QBtn.4b52e00f.js";import{k as D,c as f,h as x,r as _,l as Ae,o as K,m as J,n as ze,p as re,g as W,q as Se,i as _e,t as P,u as ue,w as C,v as ot,x as j,y as it,z as ae,A as be,B as Ee,C as ye,D as xe,E as pe,G as lt,H as G,I as Re,J as rt,K as ne,a as ut,L as st,M as X,N as U,O as q,f as T,P as F}from"./index.b025626a.js";import{h as se,a as dt,b as Pe,c as ct}from"./render.e4f2134b.js";import{c as ft,u as vt,a as ht,b as mt,d as gt,e as bt,f as yt,g as pt,h as oe,i as wt,s as Ct,j as qt,k as St,l as xt,m as we,Q as Tt,n as Y,o as ie,p as le}from"./format.87bb3ffc.js";var zt=D({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>x("div",{class:i.value},se(o.default))}}),_t=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>x("div",{class:i.value,role:"toolbar"},se(o.default))}});function kt(){const e=_(!Ae.value);return e.value===!1&&K(()=>{e.value=!0}),{isHydrated:e}}const Fe=typeof ResizeObserver!="undefined",Me=Fe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Te=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let i=null,u,t={width:-1,height:-1};function a(d){d===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),u){const{offsetWidth:d,offsetHeight:r}=u;(d!==t.width||r!==t.height)&&(t={width:d,height:r},o("resize",t))}}const{proxy:h}=W();if(h.trigger=a,Fe===!0){let d;const r=l=>{u=h.$el.parentNode,u?(d=new ResizeObserver(a),d.observe(u),s()):l!==!0&&re(()=>{r(!0)})};return K(()=>{r()}),J(()=>{i!==null&&clearTimeout(i),d!==void 0&&(d.disconnect!==void 0?d.disconnect():u&&d.unobserve(u))}),ze}else{let l=function(){i!==null&&(clearTimeout(i),i=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,Se.passive),r=void 0)},w=function(){l(),u&&u.contentDocument&&(r=u.contentDocument.defaultView,r.addEventListener("resize",a,Se.passive),s())};const{isHydrated:d}=kt();let r;return K(()=>{re(()=>{u=h.$el,u&&w()})}),J(l),()=>{if(d.value===!0)return x("object",{class:"q--avoid-card-border",style:Me.style,tabindex:-1,type:"text/html",data:Me.url,"aria-hidden":"true",onLoad:w})}}}}),Lt=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=W(),t=_e(ue,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=_(parseInt(e.heightHint,10)),s=_(!0),h=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||u.platform.is.ios&&t.isContainer.value===!0),d=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return s.value===!0?a.value:0;const c=a.value-t.scroll.value.position;return c>0?c:0}),r=f(()=>e.modelValue!==!0||h.value===!0&&s.value!==!0),l=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),w=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=f(()=>{const c=t.rows.value.top,k={};return c[0]==="l"&&t.left.space===!0&&(k[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),c[2]==="r"&&t.right.space===!0&&(k[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function v(c,k){t.update("header",c,k)}function m(c,k){c.value!==k&&(c.value=k)}function B({height:c}){m(a,c),v("size",c)}function z(c){l.value===!0&&m(s,!0),i("focusin",c)}C(()=>e.modelValue,c=>{v("space",c),m(s,!0),t.animate()}),C(d,c=>{v("offset",c)}),C(()=>e.reveal,c=>{c===!1&&m(s,e.modelValue)}),C(s,c=>{t.animate(),i("reveal",c)}),C(t.scroll,c=>{e.reveal===!0&&m(s,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",d.value),J(()=>{t.instances.header===y&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const c=dt(o.default,[]);return e.elevated===!0&&c.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(x(Te,{debounce:0,onResize:B})),x("header",{class:w.value,style:p.value,onFocusin:z},c)}}});const ke={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},$t=Object.keys(ke);ke.all=!0;function Qe(e){const o={};for(const i of $t)e[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?ke:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Bt=["INPUT","TEXTAREA"];function De(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&Bt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Ce(e,o,i){const u=xe(e);let t,a=u.left-o.event.x,s=u.top-o.event.y,h=Math.abs(a),d=Math.abs(s);const r=o.direction;r.horizontal===!0&&r.vertical!==!0?t=a<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?t=s<0?"up":"down":r.up===!0&&s<0?(t="up",h>d&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.down===!0&&s>0?(t="down",h>d&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.left===!0&&a<0?(t="left",h<d&&(r.up===!0&&s<0?t="up":r.down===!0&&s>0&&(t="down"))):r.right===!0&&a>0&&(t="right",h<d&&(r.up===!0&&s<0?t="up":r.down===!0&&s>0&&(t="down")));let l=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,l=!0,t==="left"||t==="right"?(u.left-=a,h=0,a=0):(u.top-=s,d=0,s=0)}return{synthetic:l,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:u,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:h,y:d},offset:{x:a,y:s},delta:{x:u.left-o.event.lastX,y:u.top-o.event.lastY}}}}let Ot=0;var qe=ot({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&j.has.touch!==!0)return;function u(a,s){i.mouse===!0&&s===!0?lt(a):(i.stop===!0&&ye(a),i.prevent===!0&&Ee(a))}const t={uid:"qvtp_"+Ot++,handler:o,modifiers:i,direction:Qe(i),noop:ze,mouseStart(a){De(a,t)&&it(a)&&(ae(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(De(a,t)){const s=a.target;ae(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(j.is.firefox===!0&&be(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const r=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ee(r),a.cancelBubble===!0&&ye(r),Object.assign(r,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:r}}ye(a)}const{left:h,top:d}=xe(a);t.event={x:h,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:d}},move(a){if(t.event===void 0)return;const s=xe(a),h=s.left-t.event.x,d=s.top-t.event.y;if(h===0&&d===0)return;t.lastEvt=a;const r=t.event.mouse===!0,l=()=>{u(a,r);let v;i.preserveCursor!==!0&&i.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ft(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),r===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{B(),m()},50):B()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:v,synthetic:m}=Ce(a,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=m===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||r===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(a);return}const w=Math.abs(h),p=Math.abs(d);w!==p&&(t.direction.horizontal===!0&&w>p||t.direction.vertical===!0&&w<p||t.direction.up===!0&&w<p&&d<0||t.direction.down===!0&&w<p&&d>0||t.direction.left===!0&&w>p&&h<0||t.direction.right===!0&&w>p&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(pe(t,"temp"),j.is.firefox===!0&&be(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ce(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=Ce(a===void 0?t.lastEvt:a,t,!0),d=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";ae(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}j.has.touch===!0&&ae(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=Qe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),pe(o,"main"),pe(o,"temp"),j.is.firefox===!0&&be(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const He=150;var Et=D({name:"QDrawer",inheritAttrs:!1,props:{...vt,...ht,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...mt,"onLayout","miniState"],setup(e,{slots:o,emit:i,attrs:u}){const t=W(),{proxy:{$q:a}}=t,s=gt(e,a),{preventBodyScroll:h}=wt(),{registerTimeout:d,removeTimeout:r}=bt(),l=_e(ue,P);if(l===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,p=null,v;const m=_(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&m.value!==!0),z=f(()=>B.value===!0?e.miniWidth:e.width),y=_(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),c=f(()=>e.persistent!==!0&&(m.value===!0||We.value===!0));function k(n,g){if(H(),n!==!1&&l.animate(),O(0),m.value===!0){const L=l.instances[Z.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),M(1),l.isContainer.value!==!0&&h(!0)}else M(0),n!==!1&&he(!1);d(()=>{n!==!1&&he(!0),g!==!0&&i("show",n)},He)}function b(n,g){N(),n!==!1&&l.animate(),M(0),O(A.value*z.value),me(),g!==!0?d(()=>{i("hide",n)},He):r()}const{show:S,hide:$}=yt({showing:y,hideOnRouteChange:c,handleShow:k,handleHide:b}),{addToHistory:H,removeFromHistory:N}=pt(y,$,c),V={belowBreakpoint:m,hide:$},E=f(()=>e.side==="right"),A=f(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),Le=_(0),R=_(!1),de=_(!1),$e=_(z.value*A.value),Z=f(()=>E.value===!0?"left":"right"),ce=f(()=>y.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),fe=f(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(E.value?"R":"L")!==-1||a.platform.is.ios===!0&&l.isContainer.value===!0),I=f(()=>e.overlay===!1&&y.value===!0&&m.value===!1),We=f(()=>e.overlay===!0&&y.value===!0&&m.value===!1),Ne=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&R.value===!1?" hidden":"")),Ie=f(()=>({backgroundColor:`rgba(0,0,0,${Le.value*.4})`})),Be=f(()=>E.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),je=f(()=>E.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Xe=f(()=>{const n={};return l.header.space===!0&&Be.value===!1&&(fe.value===!0?n.top=`${l.header.offset}px`:l.header.space===!0&&(n.top=`${l.header.size}px`)),l.footer.space===!0&&je.value===!1&&(fe.value===!0?n.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(n.bottom=`${l.footer.size}px`)),n}),Ue=f(()=>{const n={width:`${z.value}px`,transform:`translateX(${$e.value}px)`};return m.value===!0?n:Object.assign(n,Xe.value)}),Ye=f(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=f(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(R.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(fe.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Be.value===!0?" q-drawer--top-padding":""))),Ke=f(()=>{const n=a.lang.rtl===!0?e.side:Z.value;return[[qe,tt,void 0,{[n]:!0,mouse:!0}]]}),Je=f(()=>{const n=a.lang.rtl===!0?Z.value:e.side;return[[qe,Oe,void 0,{[n]:!0,mouse:!0}]]}),Ze=f(()=>{const n=a.lang.rtl===!0?Z.value:e.side;return[[qe,Oe,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){at(m,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}C(m,n=>{n===!0?(w=y.value,y.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?(O(0),M(0),me()):S(!1))}),C(()=>e.side,(n,g)=>{l.instances[g]===V&&(l.instances[g]=void 0,l[g].space=!1,l[g].offset=0),l.instances[n]=V,l[n].size=z.value,l[n].space=I.value,l[n].offset=ce.value}),C(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),C(()=>e.behavior+e.breakpoint,ve),C(l.isContainer,n=>{y.value===!0&&h(n!==!0),n===!0&&ve()}),C(l.scrollbarWidth,()=>{O(y.value===!0?0:void 0)}),C(ce,n=>{Q("offset",n)}),C(I,n=>{i("onLayout",n),Q("space",n)}),C(E,()=>{O()}),C(z,n=>{O(),ge(e.miniToOverlay,n)}),C(()=>e.miniToOverlay,n=>{ge(n,z.value)}),C(()=>a.lang.rtl,()=>{O()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(et(),l.animate())}),C(B,n=>{i("miniState",n)});function O(n){n===void 0?re(()=>{n=y.value===!0?0:z.value,O(A.value*n)}):(l.isContainer.value===!0&&E.value===!0&&(m.value===!0||Math.abs(n)===z.value)&&(n+=A.value*l.scrollbarWidth.value),$e.value=n)}function M(n){Le.value=n}function he(n){const g=n===!0?"remove":l.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function et(){p!==null&&clearTimeout(p),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,p=setTimeout(()=>{p=null,de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function tt(n){if(y.value!==!1)return;const g=z.value,L=oe(n.distance.x,0,g);if(n.isFinal===!0){L>=Math.min(75,g)===!0?S():(l.animate(),M(0),O(A.value*g)),R.value=!1;return}O((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(g-L,0):Math.min(0,L-g)),M(oe(L/g,0,1)),n.isFirst===!0&&(R.value=!0)}function Oe(n){if(y.value!==!0)return;const g=z.value,L=n.direction===e.side,ee=(a.lang.rtl===!0?L!==!0:L)?oe(n.distance.x,0,g):0;if(n.isFinal===!0){Math.abs(ee)<Math.min(75,g)===!0?(l.animate(),M(1),O(0)):$(),R.value=!1;return}O(A.value*ee),M(oe(1-ee/g,0,1)),n.isFirst===!0&&(R.value=!0)}function me(){h(!1),he(!0)}function Q(n,g){l.update(e.side,n,g)}function at(n,g){n.value!==g&&(n.value=g)}function ge(n,g){Q("size",n===!0?e.miniWidth:g)}return l.instances[e.side]=V,ge(e.miniToOverlay,z.value),Q("space",I.value),Q("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),K(()=>{i("onLayout",I.value),i("miniState",B.value),w=e.showIfAbove===!0;const n=()=>{(y.value===!0?k:b)(!1,!0)};if(l.totalWidth.value!==0){re(n);return}v=C(l.totalWidth,()=>{v(),v=void 0,y.value===!1&&e.showIfAbove===!0&&m.value===!1?S(!1):n()})}),J(()=>{v!==void 0&&v(),p!==null&&(clearTimeout(p),p=null),y.value===!0&&me(),l.instances[e.side]===V&&(l.instances[e.side]=void 0,Q("size",0),Q("offset",0),Q("space",!1))}),()=>{const n=[];m.value===!0&&(e.noSwipeOpen===!1&&n.push(G(x("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ke.value)),n.push(Pe("div",{ref:"backdrop",class:Ne.value,style:Ie.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>Ze.value)));const g=B.value===!0&&o.mini!==void 0,L=[x("div",{...u,key:""+g,class:[Ye.value,u.class]},g===!0?o.mini():se(o.default))];return e.elevated===!0&&y.value===!0&&L.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Pe("aside",{ref:"content",class:Ge.value,style:Ue.value},L,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Je.value)),x("div",{class:"q-drawer-container"},n)}}}),Pt=D({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=W(),u=_e(ue,P);if(u===P)return console.error("QPageContainer needs to be child of QLayout"),P;Re(rt,!0);const t=f(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>x("div",{class:"q-page-container",style:t.value},se(o.default))}});const{passive:Ve}=Se,Mt=["both","horizontal","vertical"];var Qt=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Mt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Ct},emits:["scroll"],setup(e,{emit:o}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;C(()=>e.scrollTarget,()=>{d(),h()});function s(){u!==null&&u();const w=Math.max(0,St(t)),p=xt(t),v={top:w-i.position.top,left:p-i.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const m=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";i.position={top:w,left:p},i.directionChanged=i.direction!==m,i.delta=v,i.directionChanged===!0&&(i.direction=m,i.inflectionPoint=i.position),o("scroll",{...i})}function h(){t=qt(a,e.scrollTarget),t.addEventListener("scroll",r,Ve),r(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",r,Ve),t=void 0)}function r(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[p,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{v(p),u=null}}}const{proxy:l}=W();return C(()=>l.$q.lang.rtl,s),K(()=>{a=l.$el.parentNode,h()}),J(()=>{u!==null&&u(),d()}),Object.assign(l,{trigger:r,getPosition:()=>i}),ze}}),Dt=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=W(),t=_(null),a=_(u.screen.height),s=_(e.container===!0?0:u.screen.width),h=_({position:0,direction:"down",inflectionPoint:0}),d=_(0),r=_(Ae.value===!0?0:we()),l=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=f(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),p=f(()=>r.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),v=f(()=>r.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function m(b){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};h.value=S,e.onScroll!==void 0&&i("scroll",S)}}function B(b){const{height:S,width:$}=b;let H=!1;a.value!==S&&(H=!0,a.value=S,e.onScrollHeight!==void 0&&i("scrollHeight",S),y()),s.value!==$&&(H=!0,s.value=$),H===!0&&e.onResize!==void 0&&i("resize",b)}function z({height:b}){d.value!==b&&(d.value=b,y())}function y(){if(e.container===!0){const b=a.value>d.value?we():0;r.value!==b&&(r.value=b)}}let c=null;const k={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:d,scrollbarWidth:r,totalWidth:f(()=>s.value+r.value),rows:f(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:h,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,S,$){k[b][S]=$}};if(Re(ue,k),we()>0){let $=function(){b=null,S.classList.remove("hide-scrollbar")},H=function(){if(b===null){if(S.scrollHeight>u.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout($,300)},N=function(V){b!==null&&V==="remove"&&(clearTimeout(b),$()),window[`${V}EventListener`]("resize",H)},b=null;const S=document.body;C(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),ut(()=>{N("remove")})}return()=>{const b=ct(o.default,[x(Qt,{onScroll:m}),x(Te,{onResize:B})]),S=x("div",{class:l.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:t},[x(Te,{onResize:z}),x("div",{class:"absolute-full",style:p.value},[x("div",{class:"scroll",style:v.value},[S])])]):S}}});const Wt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const o=_(!1);function i(){o.value=!o.value}return(u,t)=>{const a=st("router-view");return X(),U(Dt,{view:"lHh Lpr lFf"},{default:q(()=>[T(Lt,{elevated:""},{default:q(()=>[T(_t,null,{default:q(()=>[T(nt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:i}),T(zt,null,{default:q(()=>[F(" Comparision ")]),_:1})]),_:1})]),_:1}),T(Et,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),"show-if-above":"",bordered:""},{default:q(()=>[T(Tt,null,{default:q(()=>[T(Y,{header:""},{default:q(()=>[F(" Essential Links ")]),_:1}),G((X(),U(ie,{clickable:"",to:"/quasar"},{default:q(()=>[T(le,null,{default:q(()=>[T(Y,null,{default:q(()=>[F(" Quasar ")]),_:1})]),_:1})]),_:1})),[[te]]),G((X(),U(ie,{clickable:"",to:"/grid"},{default:q(()=>[T(le,null,{default:q(()=>[T(Y,null,{default:q(()=>[F(" AG Grid ")]),_:1})]),_:1})]),_:1})),[[te]]),G((X(),U(ie,{clickable:"",to:"/grid2"},{default:q(()=>[T(le,null,{default:q(()=>[T(Y,null,{default:q(()=>[F(" AG Grid2 ")]),_:1})]),_:1})]),_:1})),[[te]]),G((X(),U(ie,{clickable:"",to:"/tabulator"},{default:q(()=>[T(le,null,{default:q(()=>[T(Y,null,{default:q(()=>[F(" Tabulator ")]),_:1})]),_:1})]),_:1})),[[te]])]),_:1})]),_:1},8,["modelValue"]),T(Pt,null,{default:q(()=>[T(a)]),_:1})]),_:1})}}});export{Wt as default};