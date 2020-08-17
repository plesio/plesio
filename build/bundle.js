var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}function a(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function u(t,e,n,o,r,s,c){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(l){const r=a(e,n,o,c);t.p(r,l)}}function i(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(e){return e&&s(e.destroy)?e.destroy:t}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function h(){return g(" ")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:y(t,o,e[o])}let b;function w(t){b=t}function _(){if(!b)throw new Error("Function called outside component initialization");return b}function k(t,e){_().$$.context.set(t,e)}const C=[],E=[],O=[],A=[],T=Promise.resolve();let j=!1;function P(t){O.push(t)}let D=!1;const M=new Set;function S(){if(!D){D=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];w(e),N(e.$$)}for(C.length=0;E.length;)E.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];M.has(e)||(M.add(e),e())}O.length=0}while(C.length);for(;A.length;)A.pop()();j=!1,D=!1,M.clear()}}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const G=new Set;let L;function Y(t,e){t&&t.i&&(G.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),L.c.push(()=>{G.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function B(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=e[s];if(l){for(const t in c)t in l||(o[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[s]=l}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function J(t){t&&t.c()}function z(t,e,o){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(e,o),P(()=>{const e=l.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]}),u.forEach(P)}function F(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(C.push(t),j||(j=!0,T.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,n,s,c,l,a,u=[-1]){const i=b;w(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=s?s(e,d,(t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&H(e,t)),n}):[],f.update(),p=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach($)}else f.fragment&&f.fragment.c();n.intro&&Y(e.$$.fragment),z(e,n.target,n.anchor),S()}w(i)}class R{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let n,o,r,s,c;return{c(){n=m("div"),o=m("h2"),r=g(e[0]),s=h(),c=m("hr"),y(o,"class","plesioTitle"),y(c,"class","plesioTitle"),y(n,"class","plesioTitle")},m(t,e){p(t,n,e),f(n,o),f(o,r),f(n,s),f(n,c)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[0])},i:t,o:t,d(t){t&&$(n)}}}function I(t,e,n){let{title:o}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title)},[o]}class Q extends R{constructor(t){super(),K(this,t,I,V,c,{title:0})}}function U(e){let n,o,r,s;return{c(){n=m("div"),o=m("hr"),r=h(),s=m("p"),s.textContent=`© 2011 - ${e[0]} @Plesio_ | This page created with svelte.`,y(o,"class","copyright"),y(n,"class","copyright")},m(t,e){p(t,n,e),f(n,o),f(n,r),f(n,s)},p:t,i:t,o:t,d(t){t&&$(n)}}}function W(t){return[(new Date).getFullYear()]}class X extends R{constructor(t){super(),K(this,t,W,U,c,{})}}function Z(t,e=[]){const n=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture",...e];function o(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}return t=>{const e=[];for(let r=0;r<n.length;r++)e.push(x(t,n[r],o));return{destroy:()=>{for(let t=0;t<e.length;t++)e[t]()}}}}function tt(t,e){let n=Object.getOwnPropertyNames(t);const o={};for(let r=0;r<n.length;r++){const s=n[r],c=s.indexOf("$");-1!==c&&-1!==e.indexOf(s.substring(0,c+1))||-1===e.indexOf(s)&&(o[s]=t[s])}return o}function et(t,e){let n=[];if(e)for(let o=0;o<e.length;o++){const r=Array.isArray(e[o]),s=r?e[o][0]:e[o];r&&e[o].length>1?n.push(s(t,e[o][1])):n.push(s(t))}return{update(t){if((t&&t.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(t)for(let e=0;e<t.length;e++)if(n[e]&&"update"in n[e]){Array.isArray(t[e])&&t[e].length>1?n[e].update(t[e][1]):n[e].update()}},destroy(){for(let t=0;t<n.length;t++)n[t]&&"destroy"in n[t]&&n[t].destroy()}}}function nt(t){let n,o,c,a,i,f,g;const h=t[7].default,x=l(h,t,t[6],null);let y=[{class:o="\n    mdc-card\n    "+t[1]+"\n    "+("outlined"===t[2]?"mdc-card--outlined":"")+"\n    "+(t[3]?"smui-card--padded":"")+"\n  "},tt(t[5],["use","class","variant","padded"])],b={};for(let t=0;t<y.length;t+=1)b=e(b,y[t]);return{c(){n=m("div"),x&&x.c(),v(n,b)},m(e,o){p(e,n,o),x&&x.m(n,null),i=!0,f||(g=[d(c=et.call(null,n,t[0])),d(a=t[4].call(null,n))],f=!0)},p(t,[e]){x&&x.p&&64&e&&u(x,h,t,t[6],e,null,null),v(n,b=B(y,[(!i||14&e&&o!==(o="\n    mdc-card\n    "+t[1]+"\n    "+("outlined"===t[2]?"mdc-card--outlined":"")+"\n    "+(t[3]?"smui-card--padded":"")+"\n  "))&&{class:o},32&e&&tt(t[5],["use","class","variant","padded"])])),c&&s(c.update)&&1&e&&c.update.call(null,t[0])},i(t){i||(Y(x,t),i=!0)},o(t){q(x,t),i=!1},d(t){t&&$(n),x&&x.d(t),f=!1,r(g)}}}function ot(t,n,o){const r=Z(_());let{use:s=[]}=n,{class:c=""}=n,{variant:l="raised"}=n,{padded:a=!1}=n,{$$slots:u={},$$scope:d}=n;return t.$$set=t=>{o(5,n=e(e({},n),i(t))),"use"in t&&o(0,s=t.use),"class"in t&&o(1,c=t.class),"variant"in t&&o(2,l=t.variant),"padded"in t&&o(3,a=t.padded),"$$scope"in t&&o(6,d=t.$$scope)},n=i(n),[s,c,l,a,r,n,d,u]}class rt extends R{constructor(t){super(),K(this,t,ot,nt,c,{use:0,class:1,variant:2,padded:3})}}function st(t){let e;const n=t[7].default,o=l(n,t,t[8],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&256&e&&u(o,n,t,t[8],e,null,null)},i(t){e||(Y(o,t),e=!0)},o(t){q(o,t),e=!1},d(t){o&&o.d(t)}}}function ct(t){let n,o,s;const c=[{use:[t[4],...t[0]]},{class:t[3]+" "+t[1]},tt(t[5],["use","class","component","forwardEvents"])];var l=t[2];function a(t){let n={$$slots:{default:[st]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}return l&&(n=new l(a(t))),{c(){n&&J(n.$$.fragment),o=g("")},m(t,e){n&&z(n,t,e),p(t,o,e),s=!0},p(t,[e]){const s=59&e?B(c,[17&e&&{use:[t[4],...t[0]]},10&e&&{class:t[3]+" "+t[1]},32&e&&(u=tt(t[5],["use","class","component","forwardEvents"]),"object"==typeof u&&null!==u?u:{})]):{};var u;if(256&e&&(s.$$scope={dirty:e,ctx:t}),l!==(l=t[2])){if(n){L={r:0,c:[],p:L};const t=n;q(t.$$.fragment,1,0,()=>{F(t,1)}),L.r||r(L.c),L=L.p}l?(n=new l(a(t)),J(n.$$.fragment),Y(n.$$.fragment,1),z(n,o.parentNode,o)):n=null}else l&&n.$set(s)},i(t){s||(n&&Y(n.$$.fragment,t),s=!0)},o(t){n&&q(n.$$.fragment,t),s=!1},d(t){t&&$(o),n&&F(n,t)}}}const lt={component:null,smuiClass:null,contexts:{}};function at(t,n,o){let{use:r=[]}=n,{class:s=""}=n,{component:c=lt.component}=n,{forwardEvents:l=[]}=n;const a=lt.class,u=lt.contexts,d=Z(_(),l);for(let t in u)u.hasOwnProperty(t)&&k(t,u[t]);let{$$slots:f={},$$scope:p}=n;return t.$$set=t=>{o(5,n=e(e({},n),i(t))),"use"in t&&o(0,r=t.use),"class"in t&&o(1,s=t.class),"component"in t&&o(2,c=t.component),"forwardEvents"in t&&o(6,l=t.forwardEvents),"$$scope"in t&&o(8,p=t.$$scope)},n=i(n),[r,s,c,a,d,n,l,f,p]}class ut extends R{constructor(t){super(),K(this,t,at,ct,c,{use:0,class:1,component:2,forwardEvents:6})}}function it(t){function e(...e){return Object.assign(lt,t),new ut(...e)}return e.prototype=ut,ut.$$render&&(e.$$render=(...e)=>Object.assign(lt,t)&&ut.$$render(...e)),ut.render&&(e.render=(...e)=>Object.assign(lt,t)&&ut.render(...e)),e}function dt(t){let n,o,c,a,i,f;const g=t[4].default,h=l(g,t,t[3],null);let x=[tt(t[2],["use"])],y={};for(let t=0;t<x.length;t+=1)y=e(y,x[t]);return{c(){n=m("div"),h&&h.c(),v(n,y)},m(e,r){p(e,n,r),h&&h.m(n,null),a=!0,i||(f=[d(o=et.call(null,n,t[0])),d(c=t[1].call(null,n))],i=!0)},p(t,[e]){h&&h.p&&8&e&&u(h,g,t,t[3],e,null,null),v(n,y=B(x,[4&e&&tt(t[2],["use"])])),o&&s(o.update)&&1&e&&o.update.call(null,t[0])},i(t){a||(Y(h,t),a=!0)},o(t){q(h,t),a=!1},d(t){t&&$(n),h&&h.d(t),i=!1,r(f)}}}function ft(t,n,o){const r=Z(_());let{use:s=[]}=n,{$$slots:c={},$$scope:l}=n;return t.$$set=t=>{o(2,n=e(e({},n),i(t))),"use"in t&&o(0,s=t.use),"$$scope"in t&&o(3,l=t.$$scope)},n=i(n),[s,r,n,l,c]}class pt extends R{constructor(t){super(),K(this,t,ft,dt,c,{use:0})}}var $t=it({class:"smui-card__content",component:pt,contexts:{}});function mt(t){let e,n,o,r,s,c,l,a,u,i,d,f,g,x,y,v,b,w,_,k,C,E,O,A,T,j,P,D,M,S,N;return{c(){var t,p,$;e=m("caption"),e.textContent="Job",n=h(),o=m("p"),o.textContent="Programmer",r=h(),s=m("p"),s.textContent="(Java/Kotlin/TypeScript etc..)",c=h(),l=m("hr"),a=h(),u=m("caption"),u.textContent="Musician",i=h(),d=m("p"),d.textContent="Japanese Rock Composer",f=h(),g=m("p"),g.textContent="plays Guitar/Bass/Vocal/Drums...",x=h(),y=m("p"),y.textContent="Drums Arranger",v=h(),b=m("p"),b.textContent="Drums Programmer (on DTM)",w=h(),_=m("hr"),k=h(),C=m("caption"),C.textContent="Band",E=h(),O=m("p"),O.textContent="Sakura-Yukke Alternative(Guitar)",A=h(),T=m("p"),T.textContent="e.x.) Natsumeg(Drums).",j=h(),P=m("p"),P.textContent="e.x.) Sakura-Yukke(Drums)",D=h(),M=m("hr"),S=h(),N=m("p"),N.textContent="... and more ...",t="font-size",p="75%",s.style.setProperty(t,p,$?"important":"")},m(t,$){p(t,e,$),p(t,n,$),p(t,o,$),p(t,r,$),p(t,s,$),p(t,c,$),p(t,l,$),p(t,a,$),p(t,u,$),p(t,i,$),p(t,d,$),p(t,f,$),p(t,g,$),p(t,x,$),p(t,y,$),p(t,v,$),p(t,b,$),p(t,w,$),p(t,_,$),p(t,k,$),p(t,C,$),p(t,E,$),p(t,O,$),p(t,A,$),p(t,T,$),p(t,j,$),p(t,P,$),p(t,D,$),p(t,M,$),p(t,S,$),p(t,N,$)},d(t){t&&$(e),t&&$(n),t&&$(o),t&&$(r),t&&$(s),t&&$(c),t&&$(l),t&&$(a),t&&$(u),t&&$(i),t&&$(d),t&&$(f),t&&$(g),t&&$(x),t&&$(y),t&&$(v),t&&$(b),t&&$(w),t&&$(_),t&&$(k),t&&$(C),t&&$(E),t&&$(O),t&&$(A),t&&$(T),t&&$(j),t&&$(P),t&&$(D),t&&$(M),t&&$(S),t&&$(N)}}}function gt(t){let e,n;return e=new $t({props:{style:"color: white;",$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,o){z(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function ht(t){let e,n,o,r,s,c;return s=new rt({props:{style:"background-color: black; text-align: right",$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){e=m("div"),n=m("h4"),n.textContent="About Me",o=h(),r=m("div"),J(s.$$.fragment),y(n,"class","aboutme"),y(r,"class","aboutme card"),y(e,"class","aboutme")},m(t,l){p(t,e,l),f(e,n),f(e,o),f(e,r),z(s,r,null),c=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){c||(Y(s.$$.fragment,t),c=!0)},o(t){q(s.$$.fragment,t),c=!1},d(t){t&&$(e),F(s)}}}it({class:"mdc-card__media-content",component:pt,contexts:{}}),it({class:"mdc-card__action-buttons",component:pt,contexts:{}}),it({class:"mdc-card__action-icons",component:pt,contexts:{}});class xt extends R{constructor(t){super(),K(this,t,null,ht,c,{})}}function yt(t){let e,n,o,r,s;return{c(){e=m("p"),e.textContent="Mail : plesio.k.j @ (Gmail)",n=h(),o=m("p"),o.textContent="or qq.plesio @ (Gmail)",r=h(),s=m("p"),s.innerHTML='Twitter :\n          <a style="text-decoration: none;" href="https://twitter.com/plesio_">Plesio_</a>'},m(t,c){p(t,e,c),p(t,n,c),p(t,o,c),p(t,r,c),p(t,s,c)},d(t){t&&$(e),t&&$(n),t&&$(o),t&&$(r),t&&$(s)}}}function vt(t){let e,n;return e=new $t({props:{style:"color: white;",$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,o){z(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function bt(t){let e,n,o,r,s,c;return s=new rt({props:{style:"background-color: black; text-align: right",$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){e=m("div"),n=m("h4"),n.textContent="Contact",o=h(),r=m("div"),J(s.$$.fragment),y(n,"class","contact"),y(r,"class","contact card"),y(e,"class","contact")},m(t,l){p(t,e,l),f(e,n),f(e,o),f(e,r),z(s,r,null),c=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){c||(Y(s.$$.fragment,t),c=!0)},o(t){q(s.$$.fragment,t),c=!1},d(t){t&&$(e),F(s)}}}class wt extends R{constructor(t){super(),K(this,t,null,bt,c,{})}}function _t(t){let e;return{c(){e=m("p"),e.innerHTML='<a href="https://soundcloud.com/plesiosaurus/nmm" style="text-decoration: none;">SondCloud</a>\n          is here'},m(t,n){p(t,e,n)},d(t){t&&$(e)}}}function kt(t){let e,n;return e=new $t({props:{style:"color: white;",$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,o){z(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Ct(t){let e,n,o,r,s,c;return s=new rt({props:{style:"background-color: black; text-align: right",$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){e=m("div"),n=m("h4"),n.textContent="Song Sample",o=h(),r=m("div"),J(s.$$.fragment),y(n,"class","songsample"),y(r,"class","songsample card"),y(e,"class","songsample")},m(t,l){p(t,e,l),f(e,n),f(e,o),f(e,r),z(s,r,null),c=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){c||(Y(s.$$.fragment,t),c=!0)},o(t){q(s.$$.fragment,t),c=!1},d(t){t&&$(e),F(s)}}}class Et extends R{constructor(t){super(),K(this,t,null,Ct,c,{})}}function Ot(t){let e,n,o,r,s,c,l,a,u,i,d,g;return n=new Q({props:{title:t[0]}}),s=new xt({}),l=new wt({}),u=new Et({}),d=new X({}),{c(){e=m("main"),J(n.$$.fragment),o=h(),r=m("div"),J(s.$$.fragment),c=h(),J(l.$$.fragment),a=h(),J(u.$$.fragment),i=h(),J(d.$$.fragment),y(r,"class","mainContent")},m(t,$){p(t,e,$),z(n,e,null),f(e,o),f(e,r),z(s,r,null),f(r,c),z(l,r,null),f(r,a),z(u,r,null),f(e,i),z(d,e,null),g=!0},p(t,[e]){const o={};1&e&&(o.title=t[0]),n.$set(o)},i(t){g||(Y(n.$$.fragment,t),Y(s.$$.fragment,t),Y(l.$$.fragment,t),Y(u.$$.fragment,t),Y(d.$$.fragment,t),g=!0)},o(t){q(n.$$.fragment,t),q(s.$$.fragment,t),q(l.$$.fragment,t),q(u.$$.fragment,t),q(d.$$.fragment,t),g=!1},d(t){t&&$(e),F(n),F(s),F(l),F(u),F(d)}}}function At(t,e,n){let{title:o}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title)},[o]}return new class extends R{constructor(t){super(),K(this,t,At,Ot,c,{title:0})}}({target:document.body,props:{title:"@Plesio_"}})}();
//# sourceMappingURL=bundle.js.map
