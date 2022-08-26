function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.PhotoSwipe=e()}(this,(function(){"use strict";return function(t,e,i,n){var o={features:null,bind:function(t,e,i,n){var o=(n?"remove":"add")+"EventListener";e=e.split(" ");for(var r=0;r<e.length;r++)e[r]&&t[o](e[r],i,!1)},isArray:function(t){return t instanceof Array},createEl:function(t,e){var i=document.createElement(e||"div");return t&&(i.className=t),i},getScrollY:function(){var t=window.pageYOffset;return void 0!==t?t:document.documentElement.scrollTop},unbind:function(t,e,i){o.bind(t,e,i,!0)},removeClass:function(t,e){var i=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(i," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(t,e){o.hasClass(t,e)||(t.className+=(t.className?" ":"")+e)},hasClass:function(t,e){return t.className&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},getChildByClass:function(t,e){for(var i=t.firstChild;i;){if(o.hasClass(i,e))return i;i=i.nextSibling}},arraySearch:function(t,e,i){for(var n=t.length;n--;)if(t[n][i]===e)return n;return-1},extend:function(t,e,i){for(var n in e)if(e.hasOwnProperty(n)){if(i&&t.hasOwnProperty(n))continue;t[n]=e[n]}},easing:{sine:{out:function(t){return Math.sin(t*(Math.PI/2))},inOut:function(t){return-(Math.cos(Math.PI*t)-1)/2}},cubic:{out:function(t){return--t*t*t+1}}},detectFeatures:function(){if(o.features)return o.features;var t=o.createEl().style,e="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!i.pointerEvent){var n=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var r=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);r&&r.length>0&&(r=parseInt(r[1],10))>=1&&r<8&&(i.isOldIOSPhone=!0)}var s=n.match(/Android\s([0-9\.]*)/),a=s?s[1]:0;(a=parseFloat(a))>=1&&(a<4.4&&(i.isOldAndroid=!0),i.androidVersion=a),i.isMobileOpera=/opera mini|opera mobi/i.test(n)}for(var l,c,u=["transform","perspective","animationName"],d=["","webkit","Moz","ms","O"],f=0;f<4;f++){e=d[f];for(var h=0;h<3;h++)l=u[h],c=e+(e?l.charAt(0).toUpperCase()+l.slice(1):l),!i[l]&&c in t&&(i[l]=c);e&&!i.raf&&(e=e.toLowerCase(),i.raf=window[e+"RequestAnimationFrame"],i.raf&&(i.caf=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]))}if(!i.raf){var p=0;i.raf=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-p)),n=window.setTimeout((function(){t(e+i)}),i);return p=e+i,n},i.caf=function(t){clearTimeout(t)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,o.features=i,i}};o.detectFeatures(),o.features.oldIE&&(o.bind=function(t,e,i,n){e=e.split(" ");for(var o,r=(n?"detach":"attach")+"Event",s=function(){i.handleEvent.call(i)},a=0;a<e.length;a++)if(o=e[a])if("object"==typeof i&&i.handleEvent){if(n){if(!i["oldIE"+o])return!1}else i["oldIE"+o]=s;t[r]("on"+o,i["oldIE"+o])}else t[r]("on"+o,i)});var r=this,s={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(t){return"A"===t.tagName},getDoubleTapZoom:function(t,e){return t||e.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};o.extend(s,n);var a,l,c,u,d,f,h,p,m,g,v,y,b,x,w,S,E,C,z,D,k,P,A,_,T,M,I,L,N,O,F,U,R,j,W,H,V,q,B,Z,X,G,Y,K,$,J,Q,tt,et,it,nt,ot,rt,st,at,lt,ct={x:0,y:0},ut={x:0,y:0},dt={x:0,y:0},ft={},ht=0,pt={},mt={x:0,y:0},gt=0,vt=!0,yt=[],bt={},xt=!1,wt=function(t,e){o.extend(r,e.publicMethods),yt.push(t)},St=function(t){var e=We();return t>e-1?t-e:t<0?e+t:t},Et={},Ct=function(t,e){return Et[t]||(Et[t]=[]),Et[t].push(e)},zt=function(t){var e=Et[t];if(e){var i=Array.prototype.slice.call(arguments);i.shift();for(var n=0;n<e.length;n++)e[n].apply(r,i)}},Dt=function(){return(new Date).getTime()},kt=function(t){st=t,r.bg.style.opacity=t*s.bgOpacity},Pt=function(t,e,i,n,o){(!xt||o&&o!==r.currItem)&&(n/=o?o.fitRatio:r.currItem.fitRatio),t[P]=y+e+"px, "+i+"px"+b+" scale("+n+")"},At=function(t){et&&(t&&(g>r.currItem.fitRatio?xt||(Ke(r.currItem,!1,!0),xt=!0):xt&&(Ke(r.currItem),xt=!1)),Pt(et,dt.x,dt.y,g))},_t=function(t){t.container&&Pt(t.container.style,t.initialPosition.x,t.initialPosition.y,t.initialZoomLevel,t)},Tt=function(t,e){e[P]=y+t+"px, 0px"+b},Mt=function(t,e){if(!s.loop&&e){var i=u+(mt.x*ht-t)/mt.x,n=Math.round(t-ue.x);(i<0&&n>0||i>=We()-1&&n<0)&&(t=ue.x+n*s.mainScrollEndFriction)}ue.x=t,Tt(t,d)},It=function(t,e){var i=de[t]-pt[t];return ut[t]+ct[t]+i-i*(e/v)},Lt=function(t,e){t.x=e.x,t.y=e.y,e.id&&(t.id=e.id)},Nt=function(t){t.x=Math.round(t.x),t.y=Math.round(t.y)},Ot=null,Ft=function(){Ot&&(o.unbind(document,"mousemove",Ft),o.addClass(t,"pswp--has_mouse"),s.mouseUsed=!0,zt("mouseUsed")),Ot=setTimeout((function(){Ot=null}),100)},Ut=function(t,e){var i=Ze(r.currItem,ft,t);return e&&(tt=i),i},Rt=function(t){return t||(t=r.currItem),t.initialZoomLevel},jt=function(t){return t||(t=r.currItem),t.w>0?s.maxSpreadZoom:1},Wt=function(t,e,i,n){return n===r.currItem.initialZoomLevel?(i[t]=r.currItem.initialPosition[t],!0):(i[t]=It(t,n),i[t]>e.min[t]?(i[t]=e.min[t],!0):i[t]<e.max[t]&&(i[t]=e.max[t],!0))},Ht=function(t){var e="";s.escKey&&27===t.keyCode?e="close":s.arrowKeys&&(37===t.keyCode?e="prev":39===t.keyCode&&(e="next")),e&&(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey||(t.preventDefault?t.preventDefault():t.returnValue=!1,r[e]()))},Vt=function(t){t&&(G||X||it||V)&&(t.preventDefault(),t.stopPropagation())},qt=function(){r.setScrollOffset(0,o.getScrollY())},Bt={},Zt=0,Xt=function(t){Bt[t]&&(Bt[t].raf&&M(Bt[t].raf),Zt--,delete Bt[t])},Gt=function(t){Bt[t]&&Xt(t),Bt[t]||(Zt++,Bt[t]={})},Yt=function(){for(var t in Bt)Bt.hasOwnProperty(t)&&Xt(t)},Kt=function(t,e,i,n,o,r,s){var a,l=Dt();Gt(t);var c=function(){if(Bt[t]){if((a=Dt()-l)>=n)return Xt(t),r(i),void(s&&s());r((i-e)*o(a/n)+e),Bt[t].raf=T(c)}};c()},$t={shout:zt,listen:Ct,viewportSize:ft,options:s,isMainScrollAnimating:function(){return it},getZoomLevel:function(){return g},getCurrentIndex:function(){return u},isDragging:function(){return B},isZooming:function(){return J},setScrollOffset:function(t,e){pt.x=t,O=pt.y=e,zt("updateScrollOffset",pt)},applyZoomPan:function(t,e,i,n){dt.x=e,dt.y=i,g=t,At(n)},init:function(){if(!a&&!l){var i;r.framework=o,r.template=t,r.bg=o.getChildByClass(t,"pswp__bg"),I=t.className,a=!0,F=o.detectFeatures(),T=F.raf,M=F.caf,P=F.transform,N=F.oldIE,r.scrollWrap=o.getChildByClass(t,"pswp__scroll-wrap"),r.container=o.getChildByClass(r.scrollWrap,"pswp__container"),d=r.container.style,r.itemHolders=S=[{el:r.container.children[0],wrap:0,index:-1},{el:r.container.children[1],wrap:0,index:-1},{el:r.container.children[2],wrap:0,index:-1}],S[0].el.style.display=S[2].el.style.display="none",function(){if(P){var e=F.perspective&&!_;return y="translate"+(e?"3d(":"("),void(b=F.perspective?", 0px)":")")}P="left",o.addClass(t,"pswp--ie"),Tt=function(t,e){e.left=t+"px"},_t=function(t){var e=t.fitRatio>1?1:t.fitRatio,i=t.container.style,n=e*t.w,o=e*t.h;i.width=n+"px",i.height=o+"px",i.left=t.initialPosition.x+"px",i.top=t.initialPosition.y+"px"},At=function(){if(et){var t=et,e=r.currItem,i=e.fitRatio>1?1:e.fitRatio,n=i*e.w,o=i*e.h;t.width=n+"px",t.height=o+"px",t.left=dt.x+"px",t.top=dt.y+"px"}}}(),m={resize:r.updateSize,orientationchange:function(){clearTimeout(U),U=setTimeout((function(){ft.x!==r.scrollWrap.clientWidth&&r.updateSize()}),500)},scroll:qt,keydown:Ht,click:Vt};var n=F.isOldIOSPhone||F.isOldAndroid||F.isMobileOpera;for(F.animationName&&F.transform&&!n||(s.showAnimationDuration=s.hideAnimationDuration=0),i=0;i<yt.length;i++)r["init"+yt[i]]();if(e)(r.ui=new e(r,o)).init();zt("firstUpdate"),u=u||s.index||0,(isNaN(u)||u<0||u>=We())&&(u=0),r.currItem=je(u),(F.isOldIOSPhone||F.isOldAndroid)&&(vt=!1),t.setAttribute("aria-hidden","false"),s.modal&&(vt?t.style.position="fixed":(t.style.position="absolute",t.style.top=o.getScrollY()+"px")),void 0===O&&(zt("initialLayout"),O=L=o.getScrollY());var c="pswp--open ";for(s.mainClass&&(c+=s.mainClass+" "),s.showHideOpacity&&(c+="pswp--animate_opacity "),c+=_?"pswp--touch":"pswp--notouch",c+=F.animationName?" pswp--css_animation":"",c+=F.svg?" pswp--svg":"",o.addClass(t,c),r.updateSize(),f=-1,gt=null,i=0;i<3;i++)Tt((i+f)*mt.x,S[i].el.style);N||o.bind(r.scrollWrap,p,r),Ct("initialZoomInEnd",(function(){r.setContent(S[0],u-1),r.setContent(S[2],u+1),S[0].el.style.display=S[2].el.style.display="block",s.focus&&t.focus(),o.bind(document,"keydown",r),F.transform&&o.bind(r.scrollWrap,"click",r),s.mouseUsed||o.bind(document,"mousemove",Ft),o.bind(window,"resize scroll orientationchange",r),zt("bindEvents")})),r.setContent(S[1],u),r.updateCurrItem(),zt("afterInit"),vt||(x=setInterval((function(){Zt||B||J||g!==r.currItem.initialZoomLevel||r.updateSize()}),1e3)),o.addClass(t,"pswp--visible")}},close:function(){a&&(a=!1,l=!0,zt("close"),o.unbind(window,"resize scroll orientationchange",r),o.unbind(window,"scroll",m.scroll),o.unbind(document,"keydown",r),o.unbind(document,"mousemove",Ft),F.transform&&o.unbind(r.scrollWrap,"click",r),B&&o.unbind(window,h,r),clearTimeout(U),zt("unbindEvents"),He(r.currItem,null,!0,r.destroy))},destroy:function(){zt("destroy"),Oe&&clearTimeout(Oe),t.setAttribute("aria-hidden","true"),t.className=I,x&&clearInterval(x),o.unbind(r.scrollWrap,p,r),o.unbind(window,"scroll",r),pe(),Yt(),Et=null},panTo:function(t,e,i){i||(t>tt.min.x?t=tt.min.x:t<tt.max.x&&(t=tt.max.x),e>tt.min.y?e=tt.min.y:e<tt.max.y&&(e=tt.max.y)),dt.x=t,dt.y=e,At()},handleEvent:function(t){t=t||window.event,m[t.type]&&m[t.type](t)},goTo:function(t){var e=(t=St(t))-u;gt=e,u=t,r.currItem=je(u),ht-=e,Mt(mt.x*ht),Yt(),it=!1,r.updateCurrItem()},next:function(){r.goTo(u+1)},prev:function(){r.goTo(u-1)},updateCurrZoomItem:function(t){if(t&&zt("beforeChange",0),S[1].el.children.length){var e=S[1].el.children[0];et=o.hasClass(e,"pswp__zoom-wrap")?e.style:null}else et=null;tt=r.currItem.bounds,v=g=r.currItem.initialZoomLevel,dt.x=tt.center.x,dt.y=tt.center.y,t&&zt("afterChange")},invalidateCurrItems:function(){w=!0;for(var t=0;t<3;t++)S[t].item&&(S[t].item.needsUpdate=!0)},updateCurrItem:function(t){if(0!==gt){var e,i=Math.abs(gt);if(!(t&&i<2)){r.currItem=je(u),xt=!1,zt("beforeChange",gt),i>=3&&(f+=gt+(gt>0?-3:3),i=3);for(var n=0;n<i;n++)gt>0?(e=S.shift(),S[2]=e,f++,Tt((f+2)*mt.x,e.el.style),r.setContent(e,u-i+n+1+1)):(e=S.pop(),S.unshift(e),f--,Tt(f*mt.x,e.el.style),r.setContent(e,u+i-n-1-1));if(et&&1===Math.abs(gt)){var o=je(E);o.initialZoomLevel!==g&&(Ze(o,ft),Ke(o),_t(o))}gt=0,r.updateCurrZoomItem(),E=u,zt("afterChange")}}},updateSize:function(e){if(!vt&&s.modal){var i=o.getScrollY();if(O!==i&&(t.style.top=i+"px",O=i),!e&&bt.x===window.innerWidth&&bt.y===window.innerHeight)return;bt.x=window.innerWidth,bt.y=window.innerHeight,t.style.height=bt.y+"px"}if(ft.x=r.scrollWrap.clientWidth,ft.y=r.scrollWrap.clientHeight,qt(),mt.x=ft.x+Math.round(ft.x*s.spacing),mt.y=ft.y,Mt(mt.x*ht),zt("beforeResize"),void 0!==f){for(var n,a,l,c=0;c<3;c++)n=S[c],Tt((c+f)*mt.x,n.el.style),l=u+c-1,s.loop&&We()>2&&(l=St(l)),(a=je(l))&&(w||a.needsUpdate||!a.bounds)?(r.cleanSlide(a),r.setContent(n,l),1===c&&(r.currItem=a,r.updateCurrZoomItem(!0)),a.needsUpdate=!1):-1===n.index&&l>=0&&r.setContent(n,l),a&&a.container&&(Ze(a,ft),Ke(a),_t(a));w=!1}v=g=r.currItem.initialZoomLevel,(tt=r.currItem.bounds)&&(dt.x=tt.center.x,dt.y=tt.center.y,At(!0)),zt("resize")},zoomTo:function(t,e,i,n,r){e&&(v=g,de.x=Math.abs(e.x)-dt.x,de.y=Math.abs(e.y)-dt.y,Lt(ut,dt));var s=Ut(t,!1),a={};Wt("x",s,a,t),Wt("y",s,a,t);var l=g,c=dt.x,u=dt.y;Nt(a);var d=function(e){1===e?(g=t,dt.x=a.x,dt.y=a.y):(g=(t-l)*e+l,dt.x=(a.x-c)*e+c,dt.y=(a.y-u)*e+u),r&&r(e),At(1===e)};i?Kt("customZoomTo",0,1,i,n||o.easing.sine.inOut,d):d(1)}},Jt={},Qt={},te={},ee={},ie={},ne=[],oe={},re=[],se={},ae=0,le={x:0,y:0},ce=0,ue={x:0,y:0},de={x:0,y:0},fe={x:0,y:0},he=function(t,e){return se.x=Math.abs(t.x-e.x),se.y=Math.abs(t.y-e.y),Math.sqrt(se.x*se.x+se.y*se.y)},pe=function(){Y&&(M(Y),Y=null)},me=function(){B&&(Y=T(me),Ae())},ge=function(t,e){return!(!t||t===document)&&(!(t.getAttribute("class")&&t.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(e(t)?t:ge(t.parentNode,e)))},ve={},ye=function(t,e){return ve.prevent=!ge(t.target,s.isClickableElement),zt("preventDragEvent",t,e,ve),ve.prevent},be=function(t,e){return e.x=t.pageX,e.y=t.pageY,e.id=t.identifier,e},xe=function(t,e,i){i.x=.5*(t.x+e.x),i.y=.5*(t.y+e.y)},we=function(){var t=dt.y-r.currItem.initialPosition.y;return 1-Math.abs(t/(ft.y/2))},Se={},Ee={},Ce=[],ze=function(t){for(;Ce.length>0;)Ce.pop();return A?(lt=0,ne.forEach((function(t){0===lt?Ce[0]=t:1===lt&&(Ce[1]=t),lt++}))):t.type.indexOf("touch")>-1?t.touches&&t.touches.length>0&&(Ce[0]=be(t.touches[0],Se),t.touches.length>1&&(Ce[1]=be(t.touches[1],Ee))):(Se.x=t.pageX,Se.y=t.pageY,Se.id="",Ce[0]=Se),Ce},De=function(t,e){var i,n,o,a,l=dt[t]+e[t],c=e[t]>0,u=ue.x+e.x,d=ue.x-oe.x;if(i=l>tt.min[t]||l<tt.max[t]?s.panEndFriction:1,l=dt[t]+e[t]*i,(s.allowPanToNext||g===r.currItem.initialZoomLevel)&&(et?"h"!==nt||"x"!==t||X||(c?(l>tt.min[t]&&(i=s.panEndFriction,tt.min[t]-l,n=tt.min[t]-ut[t]),(n<=0||d<0)&&We()>1?(a=u,d<0&&u>oe.x&&(a=oe.x)):tt.min.x!==tt.max.x&&(o=l)):(l<tt.max[t]&&(i=s.panEndFriction,l-tt.max[t],n=ut[t]-tt.max[t]),(n<=0||d>0)&&We()>1?(a=u,d>0&&u<oe.x&&(a=oe.x)):tt.min.x!==tt.max.x&&(o=l))):a=u,"x"===t))return void 0!==a&&(Mt(a,!0),K=a!==oe.x),tt.min.x!==tt.max.x&&(void 0!==o?dt.x=o:K||(dt.x+=e.x*i)),void 0!==a;it||K||g>r.currItem.fitRatio&&(dt[t]+=e[t]*i)},ke=function(t){if(!("mousedown"===t.type&&t.button>0))if(Re)t.preventDefault();else if(!q||"mousedown"!==t.type){if(ye(t,!0)&&t.preventDefault(),zt("pointerDown"),A){var e=o.arraySearch(ne,t.pointerId,"id");e<0&&(e=ne.length),ne[e]={x:t.pageX,y:t.pageY,id:t.pointerId}}var i=ze(t),n=i.length;$=null,Yt(),B&&1!==n||(B=ot=!0,o.bind(window,h,r),H=at=rt=V=K=G=Z=X=!1,nt=null,zt("firstTouchStart",i),Lt(ut,dt),ct.x=ct.y=0,Lt(ee,i[0]),Lt(ie,ee),oe.x=mt.x*ht,re=[{x:ee.x,y:ee.y}],j=R=Dt(),Ut(g,!0),pe(),me()),!J&&n>1&&!it&&!K&&(v=g,X=!1,J=Z=!0,ct.y=ct.x=0,Lt(ut,dt),Lt(Jt,i[0]),Lt(Qt,i[1]),xe(Jt,Qt,fe),de.x=Math.abs(fe.x)-dt.x,de.y=Math.abs(fe.y)-dt.y,Q=he(Jt,Qt))}},Pe=function(t){if(t.preventDefault(),A){var e=o.arraySearch(ne,t.pointerId,"id");if(e>-1){var i=ne[e];i.x=t.pageX,i.y=t.pageY}}if(B){var n=ze(t);if(nt||G||J)$=n;else if(ue.x!==mt.x*ht)nt="h";else{var r=Math.abs(n[0].x-ee.x)-Math.abs(n[0].y-ee.y);Math.abs(r)>=10&&(nt=r>0?"h":"v",$=n)}}},Ae=function(){if($){var t=$.length;if(0!==t)if(Lt(Jt,$[0]),te.x=Jt.x-ee.x,te.y=Jt.y-ee.y,J&&t>1){if(ee.x=Jt.x,ee.y=Jt.y,!te.x&&!te.y&&function(t,e){return t.x===e.x&&t.y===e.y}($[1],Qt))return;Lt(Qt,$[1]),X||(X=!0,zt("zoomGestureStarted"));var e=he(Jt,Qt),i=Le(e);i>r.currItem.initialZoomLevel+r.currItem.initialZoomLevel/15&&(at=!0);var n=1,o=Rt(),a=jt();if(i<o)if(s.pinchToClose&&!at&&v<=r.currItem.initialZoomLevel){var l=1-(o-i)/(o/1.2);kt(l),zt("onPinchClose",l),rt=!0}else(n=(o-i)/o)>1&&(n=1),i=o-n*(o/3);else i>a&&((n=(i-a)/(6*o))>1&&(n=1),i=a+n*o);n<0&&(n=0),e,xe(Jt,Qt,le),ct.x+=le.x-fe.x,ct.y+=le.y-fe.y,Lt(fe,le),dt.x=It("x",i),dt.y=It("y",i),H=i>g,g=i,At()}else{if(!nt)return;if(ot&&(ot=!1,Math.abs(te.x)>=10&&(te.x-=$[0].x-ie.x),Math.abs(te.y)>=10&&(te.y-=$[0].y-ie.y)),ee.x=Jt.x,ee.y=Jt.y,0===te.x&&0===te.y)return;if("v"===nt&&s.closeOnVerticalDrag&&"fit"===s.scaleMode&&g===r.currItem.initialZoomLevel){ct.y+=te.y,dt.y+=te.y;var c=we();return V=!0,zt("onVerticalDrag",c),kt(c),void At()}!function(t,e,i){if(t-j>50){var n=re.length>2?re.shift():{};n.x=e,n.y=i,re.push(n),j=t}}(Dt(),Jt.x,Jt.y),G=!0,tt=r.currItem.bounds,De("x",te)||(De("y",te),Nt(dt),At())}}},_e=function(t){if(F.isOldAndroid){if(q&&"mouseup"===t.type)return;t.type.indexOf("touch")>-1&&(clearTimeout(q),q=setTimeout((function(){q=0}),600))}var e;if(zt("pointerUp"),ye(t,!1)&&t.preventDefault(),A){var i=o.arraySearch(ne,t.pointerId,"id");if(i>-1)if(e=ne.splice(i,1)[0],navigator.msPointerEnabled){e.type={4:"mouse",2:"touch",3:"pen"}[t.pointerType],e.type||(e.type=t.pointerType||"mouse")}else e.type=t.pointerType||"mouse"}var n,a=ze(t),l=a.length;if("mouseup"===t.type&&(l=0),2===l)return $=null,!0;1===l&&Lt(ie,a[0]),0!==l||nt||it||(e||("mouseup"===t.type?e={x:t.pageX,y:t.pageY,type:"mouse"}:t.changedTouches&&t.changedTouches[0]&&(e={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY,type:"touch"})),zt("touchRelease",t,e));var c=-1;if(0===l&&(B=!1,o.unbind(window,h,r),pe(),J?c=0:-1!==ce&&(c=Dt()-ce)),ce=1===l?Dt():-1,n=-1!==c&&c<150?"zoom":"swipe",J&&l<2&&(J=!1,1===l&&(n="zoomPointerUp"),zt("zoomGestureEnded")),$=null,G||X||it||V)if(Yt(),W||(W=Te()),W.calculateSwipeSpeed("x"),V){if(we()<s.verticalDragRange)r.close();else{var u=dt.y,d=st;Kt("verticalDrag",0,1,300,o.easing.cubic.out,(function(t){dt.y=(r.currItem.initialPosition.y-u)*t+u,kt((1-d)*t+d),At()})),zt("onVerticalDrag",1)}}else{if((K||it)&&0===l){if(Ie(n,W))return;n="zoomPointerUp"}it||("swipe"===n?!K&&g>r.currItem.fitRatio&&Me(W):Ne())}},Te=function(){var t,e,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(n){re.length>1?(t=Dt()-j+50,e=re[re.length-2][n]):(t=Dt()-R,e=ie[n]),i.lastFlickOffset[n]=ee[n]-e,i.lastFlickDist[n]=Math.abs(i.lastFlickOffset[n]),i.lastFlickDist[n]>20?i.lastFlickSpeed[n]=i.lastFlickOffset[n]/t:i.lastFlickSpeed[n]=0,Math.abs(i.lastFlickSpeed[n])<.1&&(i.lastFlickSpeed[n]=0),i.slowDownRatio[n]=.95,i.slowDownRatioReverse[n]=1-i.slowDownRatio[n],i.speedDecelerationRatio[n]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(dt[t]>tt.min[t]?i.backAnimDestination[t]=tt.min[t]:dt[t]<tt.max[t]&&(i.backAnimDestination[t]=tt.max[t]),void 0!==i.backAnimDestination[t]&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,Kt("bounceZoomPan"+t,dt[t],i.backAnimDestination[t],e||300,o.easing.sine.out,(function(e){dt[t]=e,At()})))))},calculateAnimOffset:function(t){i.backAnimStarted[t]||(i.speedDecelerationRatio[t]=i.speedDecelerationRatio[t]*(i.slowDownRatio[t]+i.slowDownRatioReverse[t]-i.slowDownRatioReverse[t]*i.timeDiff/10),i.speedDecelerationRatioAbs[t]=Math.abs(i.lastFlickSpeed[t]*i.speedDecelerationRatio[t]),i.distanceOffset[t]=i.lastFlickSpeed[t]*i.speedDecelerationRatio[t]*i.timeDiff,dt[t]+=i.distanceOffset[t])},panAnimLoop:function(){if(Bt.zoomPan&&(Bt.zoomPan.raf=T(i.panAnimLoop),i.now=Dt(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),At(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05))return dt.x=Math.round(dt.x),dt.y=Math.round(dt.y),At(),void Xt("zoomPan")}};return i},Me=function(t){if(t.calculateSwipeSpeed("y"),tt=r.currItem.bounds,t.backAnimDestination={},t.backAnimStarted={},Math.abs(t.lastFlickSpeed.x)<=.05&&Math.abs(t.lastFlickSpeed.y)<=.05)return t.speedDecelerationRatioAbs.x=t.speedDecelerationRatioAbs.y=0,t.calculateOverBoundsAnimOffset("x"),t.calculateOverBoundsAnimOffset("y"),!0;Gt("zoomPan"),t.lastNow=Dt(),t.panAnimLoop()},Ie=function(t,e){var i,n,a;if(it||(ae=u),"swipe"===t){var l=ee.x-ie.x,c=e.lastFlickDist.x<10;l>30&&(c||e.lastFlickOffset.x>20)?n=-1:l<-30&&(c||e.lastFlickOffset.x<-20)&&(n=1)}n&&((u+=n)<0?(u=s.loop?We()-1:0,a=!0):u>=We()&&(u=s.loop?0:We()-1,a=!0),a&&!s.loop||(gt+=n,ht-=n,i=!0));var d,f=mt.x*ht,h=Math.abs(f-ue.x);return i||f>ue.x==e.lastFlickSpeed.x>0?(d=Math.abs(e.lastFlickSpeed.x)>0?h/Math.abs(e.lastFlickSpeed.x):333,d=Math.min(d,400),d=Math.max(d,250)):d=333,ae===u&&(i=!1),it=!0,zt("mainScrollAnimStart"),Kt("mainScroll",ue.x,f,d,o.easing.cubic.out,Mt,(function(){Yt(),it=!1,ae=-1,(i||ae!==u)&&r.updateCurrItem(),zt("mainScrollAnimComplete")})),i&&r.updateCurrItem(!0),i},Le=function(t){return 1/Q*t*v},Ne=function(){var t=g,e=Rt(),i=jt();g<e?t=e:g>i&&(t=i);var n,s=st;return rt&&!H&&!at&&g<e?(r.close(),!0):(rt&&(n=function(t){kt((1-s)*t+s)}),r.zoomTo(t,0,200,o.easing.cubic.out,n),!0)};wt("Gestures",{publicMethods:{initGestures:function(){var t=function(t,e,i,n,o){C=t+e,z=t+i,D=t+n,k=o?t+o:""};(A=F.pointerEvent)&&F.touch&&(F.touch=!1),A?navigator.msPointerEnabled?t("MSPointer","Down","Move","Up","Cancel"):t("pointer","down","move","up","cancel"):F.touch?(t("touch","start","move","end","cancel"),_=!0):t("mouse","down","move","up"),h=z+" "+D+" "+k,p=C,A&&!_&&(_=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),r.likelyTouchDevice=_,m[C]=ke,m[z]=Pe,m[D]=_e,k&&(m[k]=m[D]),F.touch&&(p+=" mousedown",h+=" mousemove mouseup",m.mousedown=m[C],m.mousemove=m[z],m.mouseup=m[D]),_||(s.allowPanToNext=!1)}}});var Oe,Fe,Ue,Re,je,We,He=function(e,i,n,a){var l;Oe&&clearTimeout(Oe),Re=!0,Ue=!0,e.initialLayout?(l=e.initialLayout,e.initialLayout=null):l=s.getThumbBoundsFn&&s.getThumbBoundsFn(u);var d=n?s.hideAnimationDuration:s.showAnimationDuration,f=function(){Xt("initialZoom"),n?(r.template.removeAttribute("style"),r.bg.removeAttribute("style")):(kt(1),i&&(i.style.display="block"),o.addClass(t,"pswp--animated-in"),zt("initialZoom"+(n?"OutEnd":"InEnd"))),a&&a(),Re=!1};if(!d||!l||void 0===l.x)return zt("initialZoom"+(n?"Out":"In")),g=e.initialZoomLevel,Lt(dt,e.initialPosition),At(),t.style.opacity=n?0:1,kt(1),void(d?setTimeout((function(){f()}),d):f());var h,p;h=c,p=!r.currItem.src||r.currItem.loadError||s.showHideOpacity,e.miniImg&&(e.miniImg.style.webkitBackfaceVisibility="hidden"),n||(g=l.w/e.w,dt.x=l.x,dt.y=l.y-L,r[p?"template":"bg"].style.opacity=.001,At()),Gt("initialZoom"),n&&!h&&o.removeClass(t,"pswp--animated-in"),p&&(n?o[(h?"remove":"add")+"Class"](t,"pswp--animate_opacity"):setTimeout((function(){o.addClass(t,"pswp--animate_opacity")}),30)),Oe=setTimeout((function(){if(zt("initialZoom"+(n?"Out":"In")),n){var i=l.w/e.w,r={x:dt.x,y:dt.y},s=g,a=st,c=function(e){1===e?(g=i,dt.x=l.x,dt.y=l.y-O):(g=(i-s)*e+s,dt.x=(l.x-r.x)*e+r.x,dt.y=(l.y-O-r.y)*e+r.y),At(),p?t.style.opacity=1-e:kt(a-e*a)};h?Kt("initialZoom",0,1,d,o.easing.cubic.out,c,f):(c(1),Oe=setTimeout(f,d+20))}else g=e.initialZoomLevel,Lt(dt,e.initialPosition),At(),kt(1),p?t.style.opacity=1:kt(1),Oe=setTimeout(f,d+20)}),n?25:90)},Ve={},qe=[],Be={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Fe.length}},Ze=function(t,e,i){if(t.src&&!t.loadError){var n=!i;if(n&&(t.vGap||(t.vGap={top:0,bottom:0}),zt("parseVerticalMargin",t)),Ve.x=e.x,Ve.y=e.y-t.vGap.top-t.vGap.bottom,n){var o=Ve.x/t.w,r=Ve.y/t.h;t.fitRatio=o<r?o:r;var a=s.scaleMode;"orig"===a?i=1:"fit"===a?i=t.fitRatio:"zoom"===a&&(i=Math.max(t.initialZoomLevel||1,t.fitRatio)),i>1&&(i=1),t.initialZoomLevel=i,t.bounds||(t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}if(!i)return;return function(t,e,i){var n=t.bounds;n.center.x=Math.round((Ve.x-e)/2),n.center.y=Math.round((Ve.y-i)/2)+t.vGap.top,n.max.x=e>Ve.x?Math.round(Ve.x-e):n.center.x,n.max.y=i>Ve.y?Math.round(Ve.y-i)+t.vGap.top:n.center.y,n.min.x=e>Ve.x?0:n.center.x,n.min.y=i>Ve.y?t.vGap.top:n.center.y}(t,t.w*i,t.h*i),n&&i===t.initialZoomLevel&&(t.initialPosition=t.bounds.center),t.bounds}return t.w=t.h=0,t.initialZoomLevel=t.fitRatio=1,t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},t.initialPosition=t.bounds.center,t.bounds},Xe=function(t,e,i,n,o,s){e.loadError||n&&(e.imageAppended=!0,Ke(e,n,e===r.currItem&&xt),i.appendChild(n),s&&setTimeout((function(){e&&e.loaded&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null)}),500))},Ge=function(t){t.loading=!0,t.loaded=!1;var e=t.img=o.createEl("pswp__img","img"),i=function(){t.loading=!1,t.loaded=!0,t.loadComplete?t.loadComplete(t):t.img=null,e.onload=e.onerror=null,e=null};return e.onload=i,e.onerror=function(){t.loadError=!0,i()},e.src=t.src,e},Ye=function(t,e){if(t.src&&t.loadError&&t.container)return e&&(t.container.innerHTML=""),t.container.innerHTML=s.errorMsg.replace("%url%",t.src),!0},Ke=function(t,e,i){if(t.src){e||(e=t.container.lastChild);var n=i?t.w:Math.round(t.w*t.fitRatio),o=i?t.h:Math.round(t.h*t.fitRatio);t.placeholder&&!t.loaded&&(t.placeholder.style.width=n+"px",t.placeholder.style.height=o+"px"),e.style.width=n+"px",e.style.height=o+"px"}},$e=function(){if(qe.length){for(var t,e=0;e<qe.length;e++)(t=qe[e]).holder.index===t.index&&Xe(t.index,t.item,t.baseDiv,t.img,0,t.clearPlaceholder);qe=[]}};wt("Controller",{publicMethods:{lazyLoadItem:function(t){t=St(t);var e=je(t);e&&(!e.loaded&&!e.loading||w)&&(zt("gettingData",t,e),e.src&&Ge(e))},initController:function(){o.extend(s,Be,!0),r.items=Fe=i,je=r.getItemAt,We=s.getNumItemsFn,s.loop,We()<3&&(s.loop=!1),Ct("beforeChange",(function(t){var e,i=s.preload,n=null===t||t>=0,o=Math.min(i[0],We()),a=Math.min(i[1],We());for(e=1;e<=(n?a:o);e++)r.lazyLoadItem(u+e);for(e=1;e<=(n?o:a);e++)r.lazyLoadItem(u-e)})),Ct("initialLayout",(function(){r.currItem.initialLayout=s.getThumbBoundsFn&&s.getThumbBoundsFn(u)})),Ct("mainScrollAnimComplete",$e),Ct("initialZoomInEnd",$e),Ct("destroy",(function(){for(var t,e=0;e<Fe.length;e++)(t=Fe[e]).container&&(t.container=null),t.placeholder&&(t.placeholder=null),t.img&&(t.img=null),t.preloader&&(t.preloader=null),t.loadError&&(t.loaded=t.loadError=!1);qe=null}))},getItemAt:function(t){return t>=0&&(void 0!==Fe[t]&&Fe[t])},allowProgressiveImg:function(){return s.forceProgressiveLoading||!_||s.mouseUsed||screen.width>1200},setContent:function(t,e){s.loop&&(e=St(e));var i=r.getItemAt(t.index);i&&(i.container=null);var n,l=r.getItemAt(e);if(l){zt("gettingData",e,l),t.index=e,t.item=l;var c=l.container=o.createEl("pswp__zoom-wrap");if(!l.src&&l.html&&(l.html.tagName?c.appendChild(l.html):c.innerHTML=l.html),Ye(l),Ze(l,ft),!l.src||l.loadError||l.loaded)l.src&&!l.loadError&&((n=o.createEl("pswp__img","img")).style.opacity=1,n.src=l.src,Ke(l,n),Xe(0,l,c,n));else{if(l.loadComplete=function(i){if(a){if(t&&t.index===e){if(Ye(i,!0))return i.loadComplete=i.img=null,Ze(i,ft),_t(i),void(t.index===u&&r.updateCurrZoomItem());i.imageAppended?!Re&&i.placeholder&&(i.placeholder.style.display="none",i.placeholder=null):F.transform&&(it||Re)?qe.push({item:i,baseDiv:c,img:i.img,index:e,holder:t,clearPlaceholder:!0}):Xe(0,i,c,i.img,0,!0)}i.loadComplete=null,i.img=null,zt("imageLoadComplete",e,i)}},o.features.transform){var d="pswp__img pswp__img--placeholder";d+=l.msrc?"":" pswp__img--placeholder--blank";var f=o.createEl(d,l.msrc?"img":"");l.msrc&&(f.src=l.msrc),Ke(l,f),c.appendChild(f),l.placeholder=f}l.loading||Ge(l),r.allowProgressiveImg()&&(!Ue&&F.transform?qe.push({item:l,baseDiv:c,img:l.img,index:e,holder:t}):Xe(0,l,c,l.img,0,!0))}Ue||e!==u?_t(l):(et=c.style,He(l,n||l.img)),t.el.innerHTML="",t.el.appendChild(c)}else t.el.innerHTML=""},cleanSlide:function(t){t.img&&(t.img.onload=t.img.onerror=null),t.loaded=t.loading=t.img=t.imageAppended=!1}}});var Je,Qe,ti={},ei=function(t,e,i){var n=document.createEvent("CustomEvent"),o={origEvent:t,target:t.target,releasePoint:e,pointerType:i||"touch"};n.initCustomEvent("pswpTap",!0,!0,o),t.target.dispatchEvent(n)};wt("Tap",{publicMethods:{initTap:function(){Ct("firstTouchStart",r.onTapStart),Ct("touchRelease",r.onTapRelease),Ct("destroy",(function(){ti={},Je=null}))},onTapStart:function(t){t.length>1&&(clearTimeout(Je),Je=null)},onTapRelease:function(t,e){var i,n;if(e&&(!G&&!Z&&!Zt)){var r=e;if(Je&&(clearTimeout(Je),Je=null,i=r,n=ti,Math.abs(i.x-n.x)<25&&Math.abs(i.y-n.y)<25))return void zt("doubleTap",r);if("mouse"===e.type)return void ei(t,e,"mouse");if("BUTTON"===t.target.tagName.toUpperCase()||o.hasClass(t.target,"pswp__single-tap"))return void ei(t,e);Lt(ti,r),Je=setTimeout((function(){ei(t,e),Je=null}),300)}}}}),wt("DesktopZoom",{publicMethods:{initDesktopZoom:function(){N||(_?Ct("mouseUsed",(function(){r.setupDesktopZoom()})):r.setupDesktopZoom(!0))},setupDesktopZoom:function(e){Qe={};var i="wheel mousewheel DOMMouseScroll";Ct("bindEvents",(function(){o.bind(t,i,r.handleMouseWheel)})),Ct("unbindEvents",(function(){Qe&&o.unbind(t,i,r.handleMouseWheel)})),r.mouseZoomedIn=!1;var n,s=function(){r.mouseZoomedIn&&(o.removeClass(t,"pswp--zoomed-in"),r.mouseZoomedIn=!1),g<1?o.addClass(t,"pswp--zoom-allowed"):o.removeClass(t,"pswp--zoom-allowed"),a()},a=function(){n&&(o.removeClass(t,"pswp--dragging"),n=!1)};Ct("resize",s),Ct("afterChange",s),Ct("pointerDown",(function(){r.mouseZoomedIn&&(n=!0,o.addClass(t,"pswp--dragging"))})),Ct("pointerUp",a),e||s()},handleMouseWheel:function(t){if(g<=r.currItem.fitRatio)return s.modal&&(!s.closeOnScroll||Zt||B?t.preventDefault():P&&Math.abs(t.deltaY)>2&&(c=!0,r.close())),!0;if(t.stopPropagation(),Qe.x=0,"deltaX"in t)1===t.deltaMode?(Qe.x=18*t.deltaX,Qe.y=18*t.deltaY):(Qe.x=t.deltaX,Qe.y=t.deltaY);else if("wheelDelta"in t)t.wheelDeltaX&&(Qe.x=-.16*t.wheelDeltaX),t.wheelDeltaY?Qe.y=-.16*t.wheelDeltaY:Qe.y=-.16*t.wheelDelta;else{if(!("detail"in t))return;Qe.y=t.detail}Ut(g,!0);var e=dt.x-Qe.x,i=dt.y-Qe.y;(s.modal||e<=tt.min.x&&e>=tt.max.x&&i<=tt.min.y&&i>=tt.max.y)&&t.preventDefault(),r.panTo(e,i)},toggleDesktopZoom:function(e){e=e||{x:ft.x/2+pt.x,y:ft.y/2+pt.y};var i=s.getDoubleTapZoom(!0,r.currItem),n=g===i;r.mouseZoomedIn=!n,r.zoomTo(n?r.currItem.initialZoomLevel:i,e,333),o[(n?"remove":"add")+"Class"](t,"pswp--zoomed-in")}}}),o.extend(r,$t)}})),function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.PhotoSwipeUI_Default=e()}(this,(function(){"use strict";return function(t,e){var i,n,o,r,s,a,l,c,u,d,f,h,p,m,g,v,y,b,x=this,w=!1,S=!0,E=!0,C={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].innerHTML=t.title,!0):(e.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return t.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return t.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},z=function(t){if(v)return!0;t=t||window.event,g.timeToIdle&&g.mouseUsed&&!u&&N();for(var i,n,o=(t.target||t.srcElement).getAttribute("class")||"",r=0;r<R.length;r++)(i=R[r]).onTap&&o.indexOf("pswp__"+i.name)>-1&&(i.onTap(),n=!0);if(n){t.stopPropagation&&t.stopPropagation(),v=!0;var s=e.features.isOldAndroid?600:30;setTimeout((function(){v=!1}),s)}},D=function(){return!t.likelyTouchDevice||g.mouseUsed||screen.width>g.fitControlsWidth},k=function(t,i,n){e[(n?"add":"remove")+"Class"](t,"pswp__"+i)},P=function(){var t=1===g.getNumItemsFn();t!==m&&(k(n,"ui--one-slide",t),m=t)},A=function(){k(l,"share-modal--hidden",E)},_=function(){return(E=!E)?(e.removeClass(l,"pswp__share-modal--fade-in"),setTimeout((function(){E&&A()}),300)):(A(),setTimeout((function(){E||e.addClass(l,"pswp__share-modal--fade-in")}),30)),E||M(),!1},T=function(e){var i=(e=e||window.event).target||e.srcElement;return t.shout("shareLinkClick",e,i),!(!i.href||!i.hasAttribute("download")&&(window.open(i.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),E||_(),1))},M=function(){for(var t,e,i,n,o="",r=0;r<g.shareButtons.length;r++)t=g.shareButtons[r],e=g.getImageURLForShare(t),i=g.getPageURLForShare(t),n=g.getTextForShare(t),o+='<a href="'+t.url.replace("{{url}}",encodeURIComponent(i)).replace("{{image_url}}",encodeURIComponent(e)).replace("{{raw_image_url}}",e).replace("{{text}}",encodeURIComponent(n))+'" target="_blank" class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>",g.parseShareButtonOut&&(o=g.parseShareButtonOut(t,o));l.children[0].innerHTML=o,l.children[0].onclick=T},I=function(t){for(var i=0;i<g.closeElClasses.length;i++)if(e.hasClass(t,"pswp__"+g.closeElClasses[i]))return!0},L=0,N=function(){clearTimeout(b),L=0,u&&x.setIdle(!1)},O=function(t){var e=(t=t||window.event).relatedTarget||t.toElement;e&&"HTML"!==e.nodeName||(clearTimeout(b),b=setTimeout((function(){x.setIdle(!0)}),g.timeToIdleOutside))},F=function(t){h!==t&&(k(f,"preloader--active",!t),h=t)},U=function(t){var i=t.vGap;if(D()){var s=g.barsSize;if(g.captionEl&&"auto"===s.bottom)if(r||((r=e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")),n.insertBefore(r,o),e.addClass(n,"pswp__ui--fit")),g.addCaptionHTMLFn(t,r,!0)){var a=r.clientHeight;i.bottom=parseInt(a,10)||44}else i.bottom=s.top;else i.bottom="auto"===s.bottom?0:s.bottom;i.top=s.top}else i.top=i.bottom=0},R=[{name:"caption",option:"captionEl",onInit:function(t){o=t}},{name:"share-modal",option:"shareEl",onInit:function(t){l=t},onTap:function(){_()}},{name:"button--share",option:"shareEl",onInit:function(t){a=t},onTap:function(){_()}},{name:"button--zoom",option:"zoomEl",onTap:t.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(t){s=t}},{name:"button--close",option:"closeEl",onTap:t.close},{name:"button--arrow--left",option:"arrowEl",onTap:t.prev},{name:"button--arrow--right",option:"arrowEl",onTap:t.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){i.isFullscreen()?i.exit():i.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(t){f=t}}];x.init=function(){e.extend(t.options,C,!0),g=t.options,n=e.getChildByClass(t.scrollWrap,"pswp__ui"),d=t.listen,function(){var t;d("onVerticalDrag",(function(t){S&&t<.95?x.hideControls():!S&&t>=.95&&x.showControls()})),d("onPinchClose",(function(e){S&&e<.9?(x.hideControls(),t=!0):t&&!S&&e>.9&&x.showControls()})),d("zoomGestureEnded",(function(){(t=!1)&&!S&&x.showControls()}))}(),d("beforeChange",x.update),d("doubleTap",(function(e){var i=t.currItem.initialZoomLevel;t.getZoomLevel()!==i?t.zoomTo(i,e,333):t.zoomTo(g.getDoubleTapZoom(!1,t.currItem),e,333)})),d("preventDragEvent",(function(t,e,i){var n=t.target||t.srcElement;n&&n.getAttribute("class")&&t.type.indexOf("mouse")>-1&&(n.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(n.tagName))&&(i.prevent=!1)})),d("bindEvents",(function(){e.bind(n,"pswpTap click",z),e.bind(t.scrollWrap,"pswpTap",x.onGlobalTap),t.likelyTouchDevice||e.bind(t.scrollWrap,"mouseover",x.onMouseOver)})),d("unbindEvents",(function(){E||_(),y&&clearInterval(y),e.unbind(document,"mouseout",O),e.unbind(document,"mousemove",N),e.unbind(n,"pswpTap click",z),e.unbind(t.scrollWrap,"pswpTap",x.onGlobalTap),e.unbind(t.scrollWrap,"mouseover",x.onMouseOver),i&&(e.unbind(document,i.eventK,x.updateFullscreen),i.isFullscreen()&&(g.hideAnimationDuration=0,i.exit()),i=null)})),d("destroy",(function(){g.captionEl&&(r&&n.removeChild(r),e.removeClass(o,"pswp__caption--empty")),l&&(l.children[0].onclick=null),e.removeClass(n,"pswp__ui--over-close"),e.addClass(n,"pswp__ui--hidden"),x.setIdle(!1)})),g.showAnimationDuration||e.removeClass(n,"pswp__ui--hidden"),d("initialZoomIn",(function(){g.showAnimationDuration&&e.removeClass(n,"pswp__ui--hidden")})),d("initialZoomOut",(function(){e.addClass(n,"pswp__ui--hidden")})),d("parseVerticalMargin",U),function(){var t,i,o,r=function(n){if(n)for(var r=n.length,s=0;s<r;s++){t=n[s],i=t.className;for(var a=0;a<R.length;a++)o=R[a],i.indexOf("pswp__"+o.name)>-1&&(g[o.option]?(e.removeClass(t,"pswp__element--disabled"),o.onInit&&o.onInit(t)):e.addClass(t,"pswp__element--disabled"))}};r(n.children);var s=e.getChildByClass(n,"pswp__top-bar");s&&r(s.children)}(),g.shareEl&&a&&l&&(E=!0),P(),g.timeToIdle&&d("mouseUsed",(function(){e.bind(document,"mousemove",N),e.bind(document,"mouseout",O),y=setInterval((function(){2==++L&&x.setIdle(!0)}),g.timeToIdle/2)})),g.fullscreenEl&&!e.features.isOldAndroid&&(i||(i=x.getFullscreenAPI()),i?(e.bind(document,i.eventK,x.updateFullscreen),x.updateFullscreen(),e.addClass(t.template,"pswp--supports-fs")):e.removeClass(t.template,"pswp--supports-fs")),g.preloaderEl&&(F(!0),d("beforeChange",(function(){clearTimeout(p),p=setTimeout((function(){t.currItem&&t.currItem.loading?(!t.allowProgressiveImg()||t.currItem.img&&!t.currItem.img.naturalWidth)&&F(!1):F(!0)}),g.loadingIndicatorDelay)})),d("imageLoadComplete",(function(e,i){t.currItem===i&&F(!0)})))},x.setIdle=function(t){u=t,k(n,"ui--idle",t)},x.update=function(){S&&t.currItem?(x.updateIndexIndicator(),g.captionEl&&(g.addCaptionHTMLFn(t.currItem,o),k(o,"caption--empty",!t.currItem.title)),w=!0):w=!1,E||_(),P()},x.updateFullscreen=function(n){n&&setTimeout((function(){t.setScrollOffset(0,e.getScrollY())}),50),e[(i.isFullscreen()?"add":"remove")+"Class"](t.template,"pswp--fs")},x.updateIndexIndicator=function(){g.counterEl&&(s.innerHTML=t.getCurrentIndex()+1+g.indexIndicatorSep+g.getNumItemsFn())},x.onGlobalTap=function(i){var n=(i=i||window.event).target||i.srcElement;if(!v)if(i.detail&&"mouse"===i.detail.pointerType){if(I(n))return void t.close();e.hasClass(n,"pswp__img")&&(1===t.getZoomLevel()&&t.getZoomLevel()<=t.currItem.fitRatio?g.clickToCloseNonZoomable&&t.close():t.toggleDesktopZoom(i.detail.releasePoint))}else if(g.tapToToggleControls&&(S?x.hideControls():x.showControls()),g.tapToClose&&(e.hasClass(n,"pswp__img")||I(n)))return void t.close()},x.onMouseOver=function(t){var e=(t=t||window.event).target||t.srcElement;k(n,"ui--over-close",I(e))},x.hideControls=function(){e.addClass(n,"pswp__ui--hidden"),S=!1},x.showControls=function(){S=!0,w||x.update(),e.removeClass(n,"pswp__ui--hidden")},x.supportsFullscreen=function(){var t=document;return!!(t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen)},x.getFullscreenAPI=function(){var e,i=document.documentElement,n="fullscreenchange";return i.requestFullscreen?e={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:n}:i.mozRequestFullScreen?e={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+n}:i.webkitRequestFullscreen?e={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+n}:i.msRequestFullscreen&&(e={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),e&&(e.enter=function(){return c=g.closeOnScroll,g.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?t.template[this.enterK]():void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},e.exit=function(){return g.closeOnScroll=c,document[this.exitK]()},e.isFullscreen=function(){return document[this.elementK]}),e}}})),