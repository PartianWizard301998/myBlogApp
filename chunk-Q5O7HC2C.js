import{$a as m,$b as Z,Ab as K,Ka as p,La as k,O as j,P as D,Ra as z,Z as _,Za as w,_ as H,_a as E,ab as U,ac as q,bb as x,bc as $,cb as l,db as o,eb as S,ec as T,fa as y,fb as F,ga as C,gb as W,gc as G,ib as V,jb as b,kb as f,lb as M,mb as N,oa as A,sa as X,sb as a,zb as P}from"./chunk-SKGLYFGY.js";var h=typeof window<"u"&&window||{},Se=h.document,Ie=h.location,be=h.gc?()=>h.gc():()=>null,ye=h.performance?h.performance:null,Ce=h.Event,ke=h.MouseEvent,we=h.KeyboardEvent,Ee=h.EventTarget,Ve=h.History,Pe=h.Location,Te=h.EventListener;var v;function Q(){let r=h.document.createElement("span");r.innerText="testing bs version",r.classList.add("d-none"),r.classList.add("pl-1"),h.document.head.appendChild(r);let t=h.getComputedStyle(r).paddingLeft;return t&&parseFloat(t)?(h.document.head.removeChild(r),"bs4"):(h.document.head.removeChild(r),"bs5")}function re(){return v||(v=Q()),v==="bs4"}function le(){return v||(v=Q()),v==="bs5"}function J(){return{isBs4:re(),isBs5:le()}}var O=class{constructor(){this.length=0,this.asArray=[]}get(t){if(this.length===0||t<0||t>=this.length)return;let i=this.head;for(let e=0;e<t;e++)i=i?.next;return i?.value}add(t,i=this.length){if(i<0||i>this.length)throw new Error("Position is out of the list");let e={value:t,next:void 0,previous:void 0};if(this.length===0)this.head=e,this.tail=e,this.current=e;else if(i===0&&this.head)e.next=this.head,this.head.previous=e,this.head=e;else if(i===this.length&&this.tail)this.tail.next=e,e.previous=this.tail,this.tail=e;else{let s=this.getNode(i-1),n=s?.next;s&&n&&(s.next=e,n.previous=e,e.previous=s,e.next=n)}this.length++,this.createInternalArrayRepresentation()}remove(t=0){if(this.length===0||t<0||t>=this.length)throw new Error("Position is out of the list");if(t===0&&this.head)this.head=this.head.next,this.head?this.head.previous=void 0:this.tail=void 0;else if(t===this.length-1&&this.tail?.previous)this.tail=this.tail.previous,this.tail.next=void 0;else{let i=this.getNode(t);i?.next&&i.previous&&(i.next.previous=i.previous,i.previous.next=i.next)}this.length--,this.createInternalArrayRepresentation()}set(t,i){if(this.length===0||t<0||t>=this.length)throw new Error("Position is out of the list");let e=this.getNode(t);e&&(e.value=i,this.createInternalArrayRepresentation())}toArray(){return this.asArray}findAll(t){let i=this.head,e=[];if(!i)return e;for(let s=0;s<this.length;s++){if(!i)return e;t(i.value,s)&&e.push({index:s,value:i.value}),i=i.next}return e}push(...t){return t.forEach(i=>{this.add(i)}),this.length}pop(){if(this.length===0)return;let t=this.tail;return this.remove(this.length-1),t?.value}unshift(...t){return t.reverse(),t.forEach(i=>{this.add(i,0)}),this.length}shift(){if(this.length===0)return;let t=this.head?.value;return this.remove(),t}forEach(t){let i=this.head;for(let e=0;e<this.length;e++){if(!i)return;t(i.value,e),i=i.next}}indexOf(t){let i=this.head,e=-1;for(let s=0;s<this.length;s++){if(!i)return e;if(i.value===t){e=s;break}i=i.next}return e}some(t){let i=this.head,e=!1;for(;i&&!e;){if(t(i.value)){e=!0;break}i=i.next}return e}every(t){let i=this.head,e=!0;for(;i&&e;)t(i.value)||(e=!1),i=i.next;return e}toString(){return"[Linked List]"}find(t){let i=this.head;for(let e=0;e<this.length;e++){if(!i)return;if(t(i.value,e))return i.value;i=i.next}}findIndex(t){let i=this.head;for(let e=0;e<this.length;e++){if(!i)return-1;if(t(i.value,e))return e;i=i.next}return-1}getNode(t){if(this.length===0||t<0||t>=this.length)throw new Error("Position is out of the list");let i=this.head;for(let e=0;e<t;e++)i=i?.next;return i}createInternalArrayRepresentation(){let t=[],i=this.head;for(;i;)t.push(i.value),i=i.next;this.asArray=t}};var Oe=typeof console>"u"||!("warn"in console);var ee=["*"],oe=r=>({display:r});function ae(r,t){if(r&1){let i=V();l(0,"li",7),b("click",function(){let s=y(i).index,n=f(2);return C(n.selectSlide(s))}),o()}if(r&2){let i=t.$implicit;x("active",i.active===!0)}}function de(r,t){if(r&1&&(F(0),l(1,"ol",5),w(2,ae,1,2,"li",6),o(),W()),r&2){let i=f();p(2),m("ngForOf",i.indicatorsSlides())}}function he(r,t){if(r&1){let i=V();l(0,"button",9),b("click",function(){let s=y(i).index,n=f(2);return C(n.selectSlide(s))}),o()}if(r&2){let i=t.$implicit,e=t.index,s=f(2);x("active",i.active===!0),E("data-bs-target","#carousel"+s.currentId)("data-bs-slide-to",e)}}function ce(r,t){if(r&1&&(F(0),l(1,"div",5),w(2,he,1,4,"button",8),o(),W()),r&2){let i=f();p(2),m("ngForOf",i.indicatorsSlides())}}function ue(r,t){if(r&1){let i=V();l(0,"a",10),b("click",function(){y(i);let s=f();return C(s.previousSlide())}),S(1,"span",11),l(2,"span",12),a(3,"Previous"),o()()}if(r&2){let i=f();x("disabled",i.checkDisabledClass("prev")),E("data-bs-target","#carousel"+i.currentId)}}function fe(r,t){if(r&1){let i=V();l(0,"a",13),b("click",function(){y(i);let s=f();return C(s.nextSlide())}),S(1,"span",14),l(2,"span",12),a(3,"Next"),o()()}if(r&2){let i=f();x("disabled",i.checkDisabledClass("next")),E("data-bs-target","#carousel"+i.currentId)}}var me=(()=>{let t=class t{constructor(){this.interval=5e3,this.noPause=!1,this.noWrap=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();function ge(r,t){let i=r.length;for(;i--;)if(t(r[i],i,r))return i;return-1}function pe(r,t){let i=[],e=Math.ceil(r.length/t),s=0;for(;s<e;){let n=r.splice(0,s===e-1&&t<r.length?r.length:t);i.push(n),s++}return i}function ve(r){return typeof r=="number"||Object.prototype.toString.call(r)==="[object Number]"}var c=function(r){return r[r.UNKNOWN=0]="UNKNOWN",r[r.NEXT=1]="NEXT",r[r.PREV=2]="PREV",r}(c||{}),_e=1,B=(()=>{let t=class t{set activeSlide(e){this.multilist||(ve(e)&&(this.customActiveSlide=e),this._slides.length&&e!==this._currentActiveSlide&&this._select(e))}get activeSlide(){return this._currentActiveSlide||0}get interval(){return this._interval}set interval(e){this._interval=e,this.restartTimer()}get slides(){return this._slides.toArray()}get isFirstSlideVisible(){let e=this.getVisibleIndexes();return!e||e instanceof Array&&!e.length?!1:e.includes(0)}get isLastSlideVisible(){let e=this.getVisibleIndexes();return!e||e instanceof Array&&!e.length?!1:e.includes(this._slides.length-1)}get _bsVer(){return J()}constructor(e,s,n){this.ngZone=s,this.platformId=n,this.noWrap=!1,this.noPause=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1,this.isAnimated=!1,this.activeSlideChange=new A(!1),this.slideRangeChange=new A,this.startFromIndex=0,this._interval=5e3,this._slides=new O,this._currentVisibleSlidesIndex=0,this.isPlaying=!1,this.destroyed=!1,this.currentId=0,this.getActive=d=>d.active,this.makeSlidesConsistent=d=>{d.forEach((I,g)=>I.item.order=g)},Object.assign(this,e),this.currentId=_e++}ngAfterViewInit(){setTimeout(()=>{this.singleSlideOffset&&(this.indicatorsByChunk=!1),this.multilist&&(this._chunkedSlides=pe(this.mapSlidesAndIndexes(),this.itemsPerSlide),this.selectInitialSlides()),this.customActiveSlide&&!this.multilist&&this._select(this.customActiveSlide)},0)}ngOnDestroy(){this.destroyed=!0}addSlide(e){this._slides.add(e),this.multilist&&this._slides.length<=this.itemsPerSlide&&(e.active=!0),!this.multilist&&this.isAnimated&&(e.isAnimated=!0),!this.multilist&&this._slides.length===1&&(this._currentActiveSlide=void 0,this.customActiveSlide||(this.activeSlide=0),this.play()),this.multilist&&this._slides.length>this.itemsPerSlide&&this.play()}removeSlide(e){let s=this._slides.indexOf(e);if(this._currentActiveSlide===s){let n;this._slides.length>1&&(n=this.isLast(s)?this.noWrap?s-1:0:s),this._slides.remove(s),setTimeout(()=>{this._select(n)},0)}else{this._slides.remove(s);let n=this.getCurrentSlideIndex();setTimeout(()=>{this._currentActiveSlide=n,this.activeSlideChange.emit(this._currentActiveSlide)},0)}}nextSlideFromInterval(e=!1){this.move(c.NEXT,e)}nextSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(c.NEXT,e)}previousSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(c.PREV,e)}getFirstVisibleIndex(){return this.slides.findIndex(this.getActive)}getLastVisibleIndex(){return ge(this.slides,this.getActive)}move(e,s=!1){let n=this.getFirstVisibleIndex(),d=this.getLastVisibleIndex();this.noWrap&&(e===c.NEXT&&this.isLast(d)||e===c.PREV&&n===0)||(this.multilist?this.moveMultilist(e):this.activeSlide=this.findNextSlideIndex(e,s)||0)}keydownPress(e){if(e.keyCode===13||e.key==="Enter"||e.keyCode===32||e.key==="Space"){this.nextSlide(),e.preventDefault();return}if(e.keyCode===37||e.key==="LeftArrow"){this.previousSlide();return}if(e.keyCode===39||e.key==="RightArrow"){this.nextSlide();return}}onMouseLeave(){this.pauseOnFocus||this.play()}onMouseUp(){this.pauseOnFocus||this.play()}pauseFocusIn(){this.pauseOnFocus&&(this.isPlaying=!1,this.resetTimer())}pauseFocusOut(){this.play()}selectSlide(e){this.isPlaying&&this.restartTimer(),this.multilist?this.selectSlideRange(this.indicatorsByChunk?e*this.itemsPerSlide:e):this.activeSlide=this.indicatorsByChunk?e*this.itemsPerSlide:e}play(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())}pause(){this.noPause||(this.isPlaying=!1,this.resetTimer())}getCurrentSlideIndex(){return this._slides.findIndex(this.getActive)}isLast(e){return e+1>=this._slides.length}isFirst(e){return e===0}indicatorsSlides(){return this.slides.filter((e,s)=>!this.indicatorsByChunk||s%this.itemsPerSlide===0)}selectInitialSlides(){let e=this.startFromIndex<=this._slides.length?this.startFromIndex:0;if(this.hideSlides(),this.singleSlideOffset){if(this._slidesWithIndexes=this.mapSlidesAndIndexes(),this._slides.length-e<this.itemsPerSlide){let s=this._slidesWithIndexes.slice(0,e);this._slidesWithIndexes=[...this._slidesWithIndexes,...s].slice(s.length).slice(0,this.itemsPerSlide)}else this._slidesWithIndexes=this._slidesWithIndexes.slice(e,e+this.itemsPerSlide);this._slidesWithIndexes.forEach(s=>s.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}findNextSlideIndex(e,s){let n=0;if(!(!s&&this.isLast(this.activeSlide)&&e!==c.PREV&&this.noWrap)){switch(e){case c.NEXT:if(typeof this._currentActiveSlide>"u"){n=0;break}if(!this.isLast(this._currentActiveSlide)){n=this._currentActiveSlide+1;break}n=!s&&this.noWrap?this._currentActiveSlide:0;break;case c.PREV:if(typeof this._currentActiveSlide>"u"){n=0;break}if(this._currentActiveSlide>0){n=this._currentActiveSlide-1;break}if(!s&&this.noWrap){n=this._currentActiveSlide;break}n=this._slides.length-1;break;default:throw new Error("Unknown direction")}return n}}mapSlidesAndIndexes(){return this.slides.slice().map((e,s)=>({index:s,item:e}))}selectSlideRange(e){if(!this.isIndexInRange(e)){if(this.hideSlides(),!this.singleSlideOffset)this.selectRangeByNestedIndex(e);else{let s=this.isIndexOnTheEdges(e)?e:e-this.itemsPerSlide+1,n=this.isIndexOnTheEdges(e)?e+this.itemsPerSlide:e+1;this._slidesWithIndexes=this.mapSlidesAndIndexes().slice(s,n),this.makeSlidesConsistent(this._slidesWithIndexes),this._slidesWithIndexes.forEach(d=>d.item.active=!0)}this.slideRangeChange.emit(this.getVisibleIndexes())}}selectRangeByNestedIndex(e){if(!this._chunkedSlides)return;let s=this._chunkedSlides.map((n,d)=>({index:d,list:n})).find(n=>n.list.find(d=>d.index===e)!==void 0);s&&(this._currentVisibleSlidesIndex=s.index,this._chunkedSlides[s.index].forEach(n=>{n.item.active=!0}))}isIndexOnTheEdges(e){return e+1-this.itemsPerSlide<=0||e+this.itemsPerSlide<=this._slides.length}isIndexInRange(e){return this.singleSlideOffset&&this._slidesWithIndexes?this._slidesWithIndexes.map(n=>n.index).indexOf(e)>=0:e<=this.getLastVisibleIndex()&&e>=this.getFirstVisibleIndex()}hideSlides(){this.slides.forEach(e=>e.active=!1)}isVisibleSlideListLast(){return this._chunkedSlides?this._currentVisibleSlidesIndex===this._chunkedSlides.length-1:!1}isVisibleSlideListFirst(){return this._currentVisibleSlidesIndex===0}moveSliderByOneItem(e){let s,n,d,I;if(this.noWrap){s=this.getFirstVisibleIndex(),n=this.getLastVisibleIndex(),d=e===c.NEXT?s:n,I=e!==c.NEXT?s-1:this.isLast(n)?0:n+1;let u=this._slides.get(d);u&&(u.active=!1);let L=this._slides.get(I);L&&(L.active=!0);let R=this.mapSlidesAndIndexes().filter(ne=>ne.item.active);this.makeSlidesConsistent(R),this.singleSlideOffset&&(this._slidesWithIndexes=R),this.slideRangeChange.emit(this.getVisibleIndexes());return}if(!this._slidesWithIndexes||!this._slidesWithIndexes[0])return;let g;if(s=this._slidesWithIndexes[0].index,n=this._slidesWithIndexes[this._slidesWithIndexes.length-1].index,e===c.NEXT){this._slidesWithIndexes.shift(),g=this.isLast(n)?0:n+1;let u=this._slides.get(g);u&&this._slidesWithIndexes.push({index:g,item:u})}else{this._slidesWithIndexes.pop(),g=this.isFirst(s)?this._slides.length-1:s-1;let u=this._slides.get(g);u&&(this._slidesWithIndexes=[{index:g,item:u},...this._slidesWithIndexes])}this.hideSlides(),this._slidesWithIndexes.forEach(u=>u.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes),this.slideRangeChange.emit(this._slidesWithIndexes.map(u=>u.index))}moveMultilist(e){this.singleSlideOffset?this.moveSliderByOneItem(e):(this.hideSlides(),this.noWrap?this._currentVisibleSlidesIndex=e===c.NEXT?this._currentVisibleSlidesIndex+1:this._currentVisibleSlidesIndex-1:e===c.NEXT?this._currentVisibleSlidesIndex=this.isVisibleSlideListLast()?0:this._currentVisibleSlidesIndex+1:this.isVisibleSlideListFirst()?this._currentVisibleSlidesIndex=this._chunkedSlides?this._chunkedSlides.length-1:0:this._currentVisibleSlidesIndex=this._currentVisibleSlidesIndex-1,this._chunkedSlides&&this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(s=>s.item.active=!0),this.slideRangeChange.emit(this.getVisibleIndexes()))}getVisibleIndexes(){if(!this.singleSlideOffset&&this._chunkedSlides)return this._chunkedSlides[this._currentVisibleSlidesIndex].map(e=>e.index);if(this._slidesWithIndexes)return this._slidesWithIndexes.map(e=>e.index)}_select(e){if(isNaN(e)){this.pause();return}if(!this.multilist&&typeof this._currentActiveSlide<"u"){let n=this._slides.get(this._currentActiveSlide);typeof n<"u"&&(n.active=!1)}let s=this._slides.get(e);typeof s<"u"&&(this._currentActiveSlide=e,s.active=!0,this.activeSlide=e,this.activeSlideChange.emit(e))}restartTimer(){this.resetTimer();let e=+this.interval;!isNaN(e)&&e>0&&G(this.platformId)&&(this.currentInterval=this.ngZone.runOutsideAngular(()=>window.setInterval(()=>{let s=+this.interval;this.ngZone.run(()=>{this.isPlaying&&!isNaN(this.interval)&&s>0&&this.slides.length?this.nextSlideFromInterval():this.pause()})},e)))}get multilist(){return this.itemsPerSlide>1}resetTimer(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)}checkDisabledClass(e){return e==="prev"?this.activeSlide===0&&this.noWrap&&!this.multilist||this.isFirstSlideVisible&&this.noWrap&&this.multilist:this.isLast(this.activeSlide)&&this.noWrap&&!this.multilist||this.isLastSlideVisible&&this.noWrap&&this.multilist}};t.\u0275fac=function(s){return new(s||t)(k(me),k(z),k(X))},t.\u0275cmp=_({type:t,selectors:[["carousel"]],inputs:{noWrap:"noWrap",noPause:"noPause",showIndicators:"showIndicators",pauseOnFocus:"pauseOnFocus",indicatorsByChunk:"indicatorsByChunk",itemsPerSlide:"itemsPerSlide",singleSlideOffset:"singleSlideOffset",isAnimated:"isAnimated",activeSlide:"activeSlide",startFromIndex:"startFromIndex",interval:"interval"},outputs:{activeSlideChange:"activeSlideChange",slideRangeChange:"slideRangeChange"},ngContentSelectors:ee,decls:7,vars:8,consts:[["tabindex","0",1,"carousel","slide",3,"mouseenter","mouseleave","mouseup","keydown","focusin","focusout","id"],[4,"ngIf"],[1,"carousel-inner",3,"ngStyle"],["class","left carousel-control carousel-control-prev","href","javascript:void(0);","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],["class","right carousel-control carousel-control-next","href","javascript:void(0);","tabindex","0","role","button",3,"disabled","click",4,"ngIf"],[1,"carousel-indicators"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"],["type","button","aria-current","true",3,"active","click",4,"ngFor","ngForOf"],["type","button","aria-current","true",3,"click"],["href","javascript:void(0);","tabindex","0","role","button",1,"left","carousel-control","carousel-control-prev",3,"click"],["aria-hidden","true",1,"icon-prev","carousel-control-prev-icon"],[1,"sr-only","visually-hidden"],["href","javascript:void(0);","tabindex","0","role","button",1,"right","carousel-control","carousel-control-next",3,"click"],["aria-hidden","true",1,"icon-next","carousel-control-next-icon"]],template:function(s,n){s&1&&(M(),l(0,"div",0),b("mouseenter",function(){return n.pause()})("mouseleave",function(){return n.onMouseLeave()})("mouseup",function(){return n.onMouseUp()})("keydown",function(I){return n.keydownPress(I)})("focusin",function(){return n.pauseFocusIn()})("focusout",function(){return n.pauseFocusOut()}),w(1,de,3,1,"ng-container",1)(2,ce,3,1,"ng-container",1),l(3,"div",2),N(4),o(),w(5,ue,4,3,"a",3)(6,fe,4,3,"a",4),o()),s&2&&(m("id","carousel"+n.currentId),p(),m("ngIf",!n._bsVer.isBs5&&n.showIndicators&&n.slides.length>1),p(),m("ngIf",n._bsVer.isBs5&&n.showIndicators&&n.slides.length>1),p(),m("ngStyle",K(6,oe,n.multilist?"flex":"block")),p(2),m("ngIf",n.slides.length>1),p(),m("ngIf",n.slides.length>1))},dependencies:[Z,q,$],encapsulation:2});let r=t;return r})(),te=(()=>{let t=class t{constructor(e){this.active=!1,this.itemWidth="100%",this.order=0,this.isAnimated=!1,this.addClass=!0,this.multilist=!1,this.carousel=e}ngOnInit(){this.carousel.addSlide(this),this.itemWidth=`${100/this.carousel.itemsPerSlide}%`,this.multilist=this.carousel?.itemsPerSlide>1}ngOnDestroy(){this.carousel.removeSlide(this)}};t.\u0275fac=function(s){return new(s||t)(k(B))},t.\u0275cmp=_({type:t,selectors:[["slide"]],hostVars:15,hostBindings:function(s,n){s&2&&(E("aria-hidden",!n.active),U("width",n.itemWidth)("order",n.order),x("multilist-margin",n.multilist)("active",n.active)("carousel-animation",n.isAnimated)("item",n.addClass)("carousel-item",n.addClass))},inputs:{active:"active"},ngContentSelectors:ee,decls:2,vars:2,consts:[[1,"item"]],template:function(s,n){s&1&&(M(),l(0,"div",0),N(1),o()),s&2&&x("active",n.active)},styles:[".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}"]});let r=t;return r})(),ie=(()=>{let t=class t{static forRoot(){return{ngModule:t,providers:[]}}};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=H({type:t}),t.\u0275inj=D({imports:[T]});let r=t;return r})();var se=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=_({type:t,selectors:[["app-featured-content"]],standalone:!0,features:[P],decls:28,vars:0,consts:[[1,"container"],[1,"cookieCard"],[1,"cookieHeading"],[1,"cookieDescription"],["href","#"],[1,"acceptButton"],[1,"cookieCard","m-3"]],template:function(s,n){s&1&&(l(0,"div",0)(1,"div",1)(2,"p",2),a(3,"Science Friction"),o(),l(4,"p",3),a(5,"By using this website you automatically accept that we use cookies. "),l(6,"a",4),a(7,"What for?"),o()(),l(8,"button",5),a(9,"View Blogs"),o()(),l(10,"div",6)(11,"p",2),a(12,"Politics"),o(),l(13,"p",3),a(14,"By using this website you automatically accept that we use cookies. "),l(15,"a",4),a(16,"What for?"),o()(),l(17,"button",5),a(18,"View Blogs"),o()(),l(19,"div",1)(20,"p",2),a(21,"History"),o(),l(22,"p",3),a(23,"By using this website you automatically accept that we use cookies. "),l(24,"a",4),a(25,"What for?"),o()(),l(26,"button",5),a(27,"View Blogs"),o()()())},styles:['.container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.cookieCard[_ngcontent-%COMP%]{width:300px;height:200px;background:linear-gradient(to right,#8968ff,#af98ff);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:20px;padding:20px;position:relative;overflow:hidden}.cookieCard[_ngcontent-%COMP%]:before{width:150px;height:150px;content:"";background:linear-gradient(to right,#8e6eff,#d0c3ff);position:absolute;z-index:1;border-radius:50%;right:-25%;top:-25%}.cookieHeading[_ngcontent-%COMP%]{font-size:1.5em;font-weight:600;color:#f1f1f1;z-index:2}.cookieDescription[_ngcontent-%COMP%]{font-size:.9em;color:#f1f1f1;z-index:2}.cookieDescription[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f1f1f1}.acceptButton[_ngcontent-%COMP%]{padding:11px 20px;background-color:#7b57ff;transition-duration:.2s;border:none;color:#f1f1f1;cursor:pointer;font-weight:600;z-index:2}.acceptButton[_ngcontent-%COMP%]:hover{background-color:#714aff;transition-duration:.2s}']});let r=t;return r})();var qe=(()=>{let t=class t{ngOnInit(){}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=_({type:t,selectors:[["app-home"]],standalone:!0,features:[P],decls:19,vars:0,consts:[["src","../../../assets/food.jpg","alt","first slide",2,"display","block","width","100%"],[1,"carousel-caption","d-none","d-md-block"],["src","../../../assets/traveling.jpg","alt","third slide",2,"display","block","width","100%"],[1,"container","mt-3"]],template:function(s,n){s&1&&(l(0,"carousel")(1,"slide"),S(2,"img",0),l(3,"div",1)(4,"h2"),a(5,"Food Blogs"),o(),l(6,"h3"),a(7,"Nulla vitae elit libero, a pharetra augue mollis interdum."),o()()(),l(8,"slide"),S(9,"img",2),l(10,"div",1)(11,"h2"),a(12,"Travel Blogs"),o(),l(13,"h3"),a(14,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."),o()()()(),l(15,"div",3)(16,"h1"),a(17,"Featured Content"),o(),S(18,"app-featured-content"),o())},dependencies:[T,ie,te,B,se],styles:["h1[_ngcontent-%COMP%]{text-align:center;font-family:Arial,Helvetica,sans-serif;font-weight:700}carousel[_ngcontent-%COMP%]{height:420px}"]});let r=t;return r})();export{qe as a};