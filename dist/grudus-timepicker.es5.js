/*! grudus-timepicker v0.1.0 | (c) 2017-2017 
    grudus | Apache-2.0 license (see LICENSE) */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.Timepicker={})}(this,function(e){"use strict";function t(e){return new Promise(function(t){setTimeout(t,e)})}function i(e){document.getElementById(r.headerId).style.background=e.headerBackground,document.getElementById(r.headerId).style.color=e.headerColor,document.getElementById(r.wrapperId).style.background=e.wrapperBackground,document.getElementById(r.clockId).style.background=e.clockBackground,document.getElementById(r.handId).style.background=e.handColor,document.getElementById(r.dotId).style.background=e.handColor,document.getElementById(r.buttonsId).style.background=e.footerBackground,document.getElementById(r.submitId).style.color=e.submitColor,document.getElementById(r.cancelId).style.color=e.cancelColor,n(u.clockItem,e.clockItemColor),n(u.inner,e.clockItemInnerColor),n(u.outer,e.handColor,"borderColor")}function n(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"color",n=document.getElementsByClassName(e),s=!0,o=!1,c=void 0;try{for(var l,u=n[Symbol.iterator]();!(s=(l=u.next()).done);s=!0)l.value.style[i]=t}catch(e){o=!0,c=e}finally{try{!s&&u.return&&u.return()}finally{if(o)throw c}}}function s(e){if(e){if(e instanceof Date)return c(e);if(C.test(e.hours)&&I.test(e.minutes))return{hours:parseInt(e.hours),minutes:parseInt(e.minutes)};if(E.test(e))return o(e);throw new TypeError("INVALID FORMAT: {"+JSON.stringify(e)+"}.\n            Time must be a Date or 'hh:MM' string or object with 'hours' and 'minutes' fields")}return c(new Date)}function o(e){var t=E.exec(e);return{hours:parseInt(t[1]),minutes:parseInt(t[2])}}function c(e){return{hours:e.getHours(),minutes:e.getMinutes()}}var l="<section class='g-time-wrapper'>\n    <header class='g-head g-flex' id='g-head'>\n        <section class='g-head-content'>\n            <span class='g-current g-hour g-active g-pointer' id='g-hours'>21</span>\n            <span class='g-current'>:</span>\n            <span class='g-current g-minute g-pointer' id='g-minutes'>37</span>\n        </section>\n    </header>\n\n\n    <section class='g-clock-wrapper g-flex' id='g-clock-wrapper'>\n        <div class='g-clock' id='g-clock'>            <span class='g-middle-dot' id='g-middle-dot'></span>\n            <div class='g-hand-of-a-clock' id='g-hand-of-a-clock'></div>\n            <div class='g-clock g-clock-inner'></div>\n        </div>\n    </section>\n\n\n    <footer class='g-buttons g-flex' id='g-buttons'>\n        <button id='g-time-cancel' class='g-button g-cancel g-pointer'>CANCEL</button>\n        <button id='g-time-submit' class='g-button g-submit g-pointer'>OK</button>\n    </footer>\n\n</section>",u={clock:"g-clock",clockItem:"g-clock-item",inner:"g-clock-inner",outer:"g-clock-outer",item:"g-clock-item",hand:"g-hand-of-a-clock",fadeOut:"g-fade-out",selected:"g-selected",active:"g-active",submit:"g-submit",cancel:"g-cancel",hour:"g-hour",minute:"g-minute"},r={headerId:"g-head",hoursId:"g-hours",minutesId:"g-minutes",clockId:"g-clock",wrapperId:"g-clock-wrapper",dotId:"g-middle-dot",handId:"g-hand-of-a-clock",buttonsId:"g-buttons",submitId:"g-time-submit",cancelId:"g-time-cancel"},a={clockId:"grudus-clock",clockConfig:{onSubmit:function(){},onClose:function(){return document.body.removeChild(document.getElementById("grudus-clock"))},headerBackground:"#1976D2",headerColor:"#c7d6e1",headerSelected:"#ffffff",wrapperBackground:"#f0fff0",footerBackground:"#f0fff0",submitColor:"#1976D2",cancelColor:"#1976D2",clockBackground:"#CFD8DC",clockItemColor:"#212121",clockItemInnerColor:"#212121",handColor:"#1976D2"},FaceType:{HOURS:"hours",MINUTES:"minutes"}},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},h=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),m=function(){function e(t){d(this,e),this.options=t.options,this.time=t.time,this.onHourClicked=t.onHourClicked,this.onMinutesClicked=t.onMinutesClicked,this.initView()}return h(e,[{key:"initView",value:function(){var e=this;this.headerHours=document.getElementById(r.hoursId),this.headerHours.onclick=function(){e.toggleActiveToHours(),e.onHourClicked()},this.headerMinutes=document.getElementById(r.minutesId),this.headerMinutes.onclick=function(){e.toggleActiveToMinutes(),e.onMinutesClicked()},this.updateDisplayedTime(),this.toggleActiveToHours()}},{key:"toggleActiveToMinutes",value:function(){this.toggleActive(this.headerHours,this.headerMinutes)}},{key:"toggleActiveToHours",value:function(){this.toggleActive(this.headerMinutes,this.headerHours)}},{key:"toggleActive",value:function(e,t){e.style.color=this.options.headerColor,t.style.color=this.options.headerSelected}},{key:"updateDisplayedTime",value:function(){e.doUpdateDisplayedTime(this.headerHours,this.time.hours),e.doUpdateDisplayedTime(this.headerMinutes,this.time.minutes)}}],[{key:"doUpdateDisplayedTime",value:function(e,t){e.innerText=t<10?"0"+t:t}}]),e}(),f=function(){function e(t,i,n){d(this,e),this.displayed=["00","05","10","15","20","25","30","35","40","45","50","55"],this.options=t.options,this.type=a.FaceType.MINUTES,this.selected=void 0,this.items=t,this.minutes=i,this.updateMinutes=n}return h(e,[{key:"onEnter",value:function(){this.selected=this.findSelected(this.minutes),this.colorSelected(),this.updateMinutes(this.minutes,6*this.minutes)}},{key:"onLeave",value:function(){this.selected&&(this.removeSelected(),this.selected=void 0)}},{key:"selectTime",value:function(e){this.selected&&this.removeSelected();var t=Math.round(e/6)%60;this.selected=this.findSelected(t),this.colorSelected(),this.minutes=t,this.updateMinutes(this.minutes,e)}},{key:"findSelected",value:function(e){return e%5==0?this.items.clockItems[e/5]:this.items.outerClockItems[e]}},{key:"colorSelected",value:function(){this.isOuter()?this.selected.classList.add(u.selected):(this.selected.style.background=this.options.handColor,this.selected.style.color="whitesmoke")}},{key:"removeSelected",value:function(){this.isOuter()?this.selected.classList.remove(u.selected):(this.selected.style.background="transparent",this.selected.style.color=this.options.clockItemColor)}},{key:"isOuter",value:function(){return this.items.outerClockItems.indexOf(this.selected)>-1}}]),e}(),k=function(){function e(t,i,n){d(this,e),this.displayed=["12","1","2","3","4","5","6","7","8","9","10","11"],this.displayedInner=["00","13","14","15","16","17","18","19","20","21","22","23"],this.type=a.FaceType.MINUTES,this.selected=void 0,this.options=t.options,this.items=t,this.hours=i,this.updateHours=n}return h(e,[{key:"onEnter",value:function(){this.items.innerClockElem.style.display="block";var e=this.hours<13&&0!==this.hours,t=this.hours%12;this.selected=e?this.items.clockItems[t]:this.items.innerClockItems[t],this.colorSelected(),this.updateHours(this.hours,30*t,e?this.items.radius:this.items.radius-50)}},{key:"onLeave",value:function(){this.items.innerClockElem.style.display="none",this.selected&&(this.removeSelected(),this.selected=void 0)}},{key:"selectTime",value:function(e,t){this.selected&&this.removeSelected();var i=Math.round(e/30)%12;this.selected=(t===this.items.innerClockElem?this.items.innerClockItems:this.items.clockItems)[i],this.colorSelected(),this.hours=parseInt(this.selected.innerText);var n=30*Math.round(e/30);this.updateHours(this.hours,n,t===this.items.innerClockElem?this.items.radius-50:this.items.radius)}},{key:"colorSelected",value:function(){this.selected.style.background=this.options.handColor,this.selected.style.color="#ffffff"}},{key:"removeSelected",value:function(){this.selected.style.background="transparent",this.selected.style.color=this.options.clockItemColor}}]),e}();Promise.delay=function(e,i){return i||(i=e,e=function(){}),t(i).then(e)},Promise.prototype.delay=function(e,t){return this.then(function(){return Promise.delay(e,t)})};var g={toRadians:function(e){return e*(Math.PI/180)},toDegrees:function(e){return e*(180/Math.PI)},findMousePosition:function(e,t){var i=t.getBoundingClientRect();return{x:e.clientX-i.left,y:e.clientY-i.top}}},y=function(){function e(t,i){d(this,e),this.clockElem=t,this.innerClockElem=i,this.size={},this.middle={}}return h(e,[{key:"create",value:function(t,i,n,s){e.doCreate(t,this.clockElem,function(e){return e.classList.add(u.item)}),e.doCreate(i,this.innerClockElem,function(e,t){e.classList.add(u.item,u.inner),e.innerText=s.displayedInner[t]});for(var o=0;o<60;o++){var c=document.createElement("span");c.classList.add(u.outer),n.push(c),this.clockElem.appendChild(c)}}},{key:"calculateSize",value:function(t,i,n){this.size.width=this.clockElem.offsetWidth,this.size.height=this.clockElem.offsetHeight,this.middle.x=this.size.width/2,this.middle.y=this.size.height/2,this.itemsRadius=this.size.width/2-20;var s=this.innerClockElem.offsetWidth/2,o=this.innerClockElem.offsetHeight/2;e.doCalculateSize(this.middle.x,this.middle.y,this.itemsRadius,t),e.doCalculateSize(s,o,this.itemsRadius-40,i),e.doCalculateSize(this.middle.x,this.middle.y,this.itemsRadius,n)}}],[{key:"doCreate",value:function(e,t,i){for(var n=0;n<12;n++){var s=document.createElement("span");i(s,n),e.push(s),t.appendChild(s)}}},{key:"doCalculateSize",value:function(e,t,i,n){for(var s=360/n.length,o=0;o<n.length;o++){var c=g.toRadians(o*s),l=n[o],u=l.offsetWidth,r=l.offsetHeight;l.style.left=e+Math.sin(c)*i-u/2+"px",l.style.bottom=t+Math.cos(c)*i-r/2+"px"}}}]),e}(),p=function(){function e(t,i,n){d(this,e),this.options=t,this.time=i,this.onTimeUpdate=n,this.isMouseDown=!1,this.clockItems=[],this.innerClockItems=[],this.outerClockItems=[],this.size={},this.middle={},this.initViews(),this.initTimeFaces(i),this.createFace(),this.hoursFace.items.radius=this.itemsRadius,this.currentFace=this.hoursFace,this.changeDisplayed(this.currentFace.displayed)}return h(e,[{key:"initViews",value:function(){var e=this;this.clockElem=document.getElementsByClassName(u.clock)[0],this.innerClockElem=document.getElementsByClassName(u.inner+" "+u.clock)[0],this.handOfAClock=document.getElementsByClassName(u.hand)[0],this.clockElem.onmousedown=function(){return e.isMouseDown=!0},this.clockElem.onmouseup=function(){e.isMouseDown=!1,e.toggleToMinutes()},this.clockElem.onmousemove=function(){return e.selectTime(event,!1,e.clockElem)},this.clockElem.onclick=function(){return e.selectTime(event,!0,e.clockElem)},this.innerClockElem.onmousemove=function(){return e.selectTime(event,!1,e.innerClockElem)},this.innerClockElem.onclick=function(){return e.selectTime(event,!0,e.innerClockElem)}}},{key:"initTimeFaces",value:function(e){var t=this;this.minutesFace=new f({options:this.options,clockItems:this.clockItems,outerClockItems:this.outerClockItems},e.minutes,function(e,i){return t.updateMinutes(e,i)}),this.hoursFace=new k({options:this.options,innerClockItems:this.innerClockItems,clockItems:this.clockItems,innerClockElem:this.innerClockElem},e.hours,function(e,i,n){return t.updateHours(e,i,n)})}},{key:"onStart",value:function(){this.currentFace.onEnter()}},{key:"createFace",value:function(){var e=new y(this.clockElem,this.innerClockElem);e.create(this.clockItems,this.innerClockItems,this.outerClockItems,this.hoursFace),e.calculateSize(this.clockItems,this.innerClockItems,this.outerClockItems),this.size=e.size,this.middle=e.middle,this.itemsRadius=e.itemsRadius}},{key:"selectTime",value:function(e,t,i){if(t||this.isMouseDown){var n=g.findMousePosition(e,this.clockElem),s=n.x-this.middle.x,o=this.middle.y-n.y,c=90-g.toDegrees(Math.atan(o/s));s<0&&(c+=180),this.currentFace.selectTime(c,i),e.stopPropagation()}}},{key:"changeDisplayed",value:function(e){for(var t=0;t<this.clockItems.length;t++)this.clockItems[t].innerText=e[t]}},{key:"onEachClockElement",value:function(e){[].forEach.call(this.clockItems,function(t){return e(t)})}},{key:"updateMinutes",value:function(e,t){this.time.minutes=e,this.calculateHandOfTheClock(t,this.itemsRadius),this.onTimeUpdate(this.time,a.FaceType.MINUTES)}},{key:"updateHours",value:function(e,t,i){this.time.hours=e,this.calculateHandOfTheClock(t,i),this.onTimeUpdate(this.time,a.FaceType.HOURS)}},{key:"calculateHandOfTheClock",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.itemsRadius;this.handOfAClock.style.transform="rotate("+(e-90)+"deg)",this.handOfAClock.style.width=t+"px"}},{key:"toggleToHours",value:function(){this.minutesFace.onLeave(),this.toggleTime(this.hoursFace)}},{key:"toggleToMinutes",value:function(){this.hoursFace.onLeave(),this.toggleTime(this.minutesFace)}},{key:"toggleTime",value:function(e){var t=this;this.currentFace!==e&&(this.onEachClockElement(function(e){return e.classList.add(u.fadeOut)}),this.handOfAClock.classList.add(u.fadeOut),Promise.delay(function(){t.onEachClockElement(function(e){return e.classList.remove(u.fadeOut)}),t.handOfAClock.classList.remove(u.fadeOut),t.changeDisplayed(e.displayed),t.currentFace=e,t.onEachClockElement(function(e){return t.removeSelected(e)}),e.onEnter()},300))}},{key:"removeSelected",value:function(e){e.classList.remove(u.selected),e.style.background="transparent",e.style.color=this.options.clockItemColor}}]),e}(),v=function(){function e(t,i){d(this,e),this.options=t,this.initView(),this.time=i,this.initElements()}return h(e,[{key:"initView",value:function(){var e=this;this.submitButton=document.getElementById(r.submitId),this.submitButton.onclick=function(){var t=e.time;t.formatted=function(){return(t.hours<10?"0"+t.hours:t.hours)+":"+(t.minutes<10?"0"+t.minutes:t.minutes)},e.options.onSubmit(t),e.options.onClose()},this.cancelButton=document.getElementById(r.cancelId),this.cancelButton.onclick=function(){return e.options.onClose()}}},{key:"initElements",value:function(){var e=this;this.header=new m({options:this.options,time:this.time,onHourClicked:function(){return e.toggleToHours()},onMinutesClicked:function(){return e.toggleToMinutes()}}),this.clockFace=new p(this.options,this.time,function(t,i){return e.onTimeUpdate(t,i)})}},{key:"onStart",value:function(){this.clockFace.onStart()}},{key:"toggleToHours",value:function(){this.clockFace.toggleToHours()}},{key:"toggleToMinutes",value:function(){this.clockFace.toggleToMinutes()}},{key:"onTimeUpdate",value:function(e,t){this.time=e,this.header.time=e,this.header.updateDisplayedTime(),t===a.FaceType.MINUTES&&this.header.toggleActiveToMinutes()}}]),e}(),C=/^([0-1]?[0-9]|2[0-3])$/,I=/^([0-5]?[0-9])$/,E=/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;e.showPicker=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},a.clockConfig,e),n=s(t.time),o=document.createElement("div");o.id=a.clockId,o.innerHTML=l,document.body.appendChild(o);var c=new v(t,n);i(t),c.onStart()},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=grudus-timepicker.es5.js.map
