!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}(self.webpackChunkion_tk_social_network=self.webpackChunkion_tk_social_network||[]).push([[1837],{51837:function(n,i,o){"use strict";o.r(i),o.d(i,{MessageDetailPageModule:function(){return z}});var a=o(61116),s=o(75425),r=o(6921),g=o(57476),c=o(39238),l=o(64762),p=o(31041),m=o(74249),u=o(61071),d=o(97425),f=o(9153),x=o(90343),v=o(18995),h=o(5118),C=o(43792),b=o(78194),M=o(29609),y=o(96859),_=o(33316),Z=o(85649),O=["appMessagesDetailFooter",""];function P(e,n){if(1&e){var t=_.EpF();_.TgZ(0,"ion-button",8),_.NdJ("mousedown",function(e){return _.CHM(t),_.oxw().sendMessage(e)}),_._UZ(1,"ion-icon",9),_.qZA()}}function k(e,n){1&e&&(_.TgZ(0,"ion-button"),_._UZ(1,"ion-icon",10),_.qZA())}var A=function(){var n=function(){function n(t){e(this,n),this.store=t,this.messageControl=new p.NI("",[p.kI.required])}return t(n,[{key:"sendMessage",value:function(e){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t,i=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t=this.store.selectSnapshot(function(e){return e.router.state.root.params.messageId}),n.next=4,(0,f.n)(this.store.dispatch(new h.b.Send(t,this.messageControl.value)));case 4:setTimeout(function(){i.messageControl.setValue(""),i.ionContent.scrollToBottom(0)});case 5:case"end":return n.stop()}},n,this)}))}},{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(e){return new(e||n)(_.Y36(u.yh))},n.\u0275cmp=_.Xpm({type:n,selectors:[["","appMessagesDetailFooter",""]],inputs:{ionContent:"ionContent"},attrs:O,decls:11,vars:6,consts:[[2,"height","auto"],["slot","start"],["slot","icon-only","name","add-circle-outline","color","primary"],["autoGrow","","rows","1","cols","10",1,"message-textarea",3,"placeholder","formControl"],["slot","end"],["slot","icon-only","name","happy-outline","color","primary"],[3,"mousedown",4,"ngIf"],[4,"ngIf"],[3,"mousedown"],["slot","icon-only","name","send-outline","color","primary"],["slot","icon-only","name","mic-outline","color","primary"]],template:function(e,n){1&e&&(_.TgZ(0,"ion-toolbar",0),_.TgZ(1,"ion-buttons",1),_.TgZ(2,"ion-button"),_._UZ(3,"ion-icon",2),_.qZA(),_.qZA(),_._UZ(4,"ion-textarea",3),_.ALo(5,"translate"),_.TgZ(6,"ion-buttons",4),_.TgZ(7,"ion-button"),_._UZ(8,"ion-icon",5),_.qZA(),_.YNc(9,P,2,0,"ion-button",6),_.YNc(10,k,2,0,"ion-button",7),_.qZA(),_.qZA()),2&e&&(_.xp6(4),_.Q6J("placeholder",_.lcZ(5,4,"message"))("formControl",n.messageControl),_.xp6(5),_.Q6J("ngIf",n.messageControl.valid),_.xp6(1),_.Q6J("ngIf",!n.messageControl.valid))},directives:[m.sr,m.Sm,m.YG,m.gu,m.g2,m.j9,p.JJ,p.oH,a.O5],pipes:[Z.X$],styles:[".message-textarea[_ngcontent-%COMP%]{max-height:100px;--background:var(--ion-color-light);border-radius:20px;--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:10px}"]}),n}(),w=o(12905),T=function(e){return{scrolling:e}},S=function(){var n=function(){function n(){e(this,n),this.isPageScrolling=!1,this.amCalendarGroup={sameDay:"[Today]",lastDay:"[Yesterday]",lastWeek:"[Last] dddd",sameElse:"DD-MM-YYYY"}}return t(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=_.Xpm({type:n,selectors:[["app-message-divider"]],inputs:{isPageScrolling:"isPageScrolling",createdAt:"createdAt"},decls:5,vars:9,consts:[["sticky","",1,"message-divider",3,"ngClass"]],template:function(e,n){1&e&&(_.TgZ(0,"ion-item-divider",0),_.TgZ(1,"ion-label"),_._uU(2),_.ALo(3,"amCalendar"),_.ALo(4,"amFromUtc"),_.qZA(),_.qZA()),2&e&&(_.Q6J("ngClass",_.VKq(7,T,n.isPageScrolling)),_.xp6(2),_.hij(" ",_.xi3(3,2,_.lcZ(4,5,n.createdAt),n.amCalendarGroup)," "))},directives:[m.rH,a.mk,m.Q$],pipes:[w.tp,w.fk],styles:[".message-divider[_ngcontent-%COMP%]{position:relative;--background:transparent;z-index:4;margin:auto;border-bottom:0;--padding-end:0px;--padding-start:0px;--inner-padding-end:0px;--ion-safe-area-left:0px;--ion-safe-area-right:0px}.message-divider.scrolling[_ngcontent-%COMP%]{position:sticky;top:10px}.message-divider[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px;font-weight:500;text-align:center;margin:8px auto 0;padding:8px 16px;border-radius:20px;background:#fff;background:var(--ion-background-color,#fff)}"]}),n}();function q(e,n){if(1&e&&(_.TgZ(0,"ion-avatar",5),_._UZ(1,"img",6),_.qZA()),2&e){var t=_.oxw();_.xp6(1),_.Q6J("src",t.userAvatar,_.LSH)}}var I=function(e){return{"user-msg-padding":e}},J=function(){var n=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=_.Xpm({type:n,selectors:[["app-user-message"]],inputs:{isLastMessage:"isLastMessage",isLastUserMessage:"isLastUserMessage",userAvatar:"userAvatar",message:"message",createdAt:"createdAt"},decls:7,vars:9,consts:[["lines","none",1,"message-user"],["slot","start","class","ion-align-self-end user-avatar",4,"ngIf"],[1,"message-container",3,"ngClass"],[1,"text",3,"innerHTML"],[1,"time"],["slot","start",1,"ion-align-self-end","user-avatar"],[3,"src"]],template:function(e,n){1&e&&(_.TgZ(0,"ion-item",0),_.YNc(1,q,2,1,"ion-avatar",1),_.TgZ(2,"div",2),_._UZ(3,"span",3),_.TgZ(4,"small",4),_._uU(5),_.ALo(6,"amDateFormat"),_.qZA(),_.qZA(),_.qZA()),2&e&&(_.xp6(1),_.Q6J("ngIf",n.isLastMessage),_.xp6(1),_.Q6J("ngClass",_.VKq(7,I,n.isLastUserMessage)),_.xp6(1),_.Q6J("innerHTML",n.message,_.oJD),_.xp6(2),_.Oqu(_.xi3(6,4,n.createdAt,"hh:mm")))},directives:[m.Ie,a.O5,a.mk,m.BJ],pipes:[w.Ek],styles:['.message-container[_ngcontent-%COMP%]{position:relative;border-radius:18px;padding:8px 12px;margin-top:12px;margin-left:0;margin-right:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;max-width:70%}.message-container.user-msg-padding[_ngcontent-%COMP%]{margin-left:33px}.message-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:400;font-size:14px;white-space:pre-wrap}.message-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:after{content:"";width:3.4em;height:12px;display:inline-block;vertical-align:top;visibility:hidden;font-size:11px}.message-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;padding:4px 8px 4px 4px;line-height:14px;pointer-events:auto;color:var(--ion-color-medium)}.message-user[_ngcontent-%COMP%]{--padding-start:8px;--padding-end:0px;--ion-safe-area-left:0px;--min-height:32px}.message-user[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{position:sticky;top:0;margin-right:0;-webkit-margin-end:8px;margin-inline-end:8px;width:26px;height:26px}.message-user[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{background:rgb(var(--ion-color-medium-rgb),.2)}']}),n}(),D=function(){var n=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=_.Xpm({type:n,selectors:[["app-my-message"]],inputs:{message:"message",createdAt:"createdAt"},decls:6,vars:5,consts:[["lines","none",1,"message-me"],["slot","end",1,"message-container"],[1,"text",3,"innerHTML"],[1,"time"]],template:function(e,n){1&e&&(_.TgZ(0,"ion-item",0),_.TgZ(1,"div",1),_._UZ(2,"span",2),_.TgZ(3,"small",3),_._uU(4),_.ALo(5,"amDateFormat"),_.qZA(),_.qZA(),_.qZA()),2&e&&(_.xp6(2),_.Q6J("innerHTML",n.message,_.oJD),_.xp6(2),_.Oqu(_.xi3(5,2,n.createdAt,"hh:mm")))},directives:[m.Ie],pipes:[w.Ek],styles:['.message-container[_ngcontent-%COMP%]{position:relative;border-radius:18px;padding:8px 12px;margin-top:12px;margin-left:0;margin-right:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;max-width:70%}.message-container.user-msg-padding[_ngcontent-%COMP%]{margin-left:33px}.message-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:400;font-size:14px;white-space:pre-wrap}.message-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:after{content:"";width:3.4em;height:12px;display:inline-block;vertical-align:top;visibility:hidden;font-size:11px}.message-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;padding:4px 8px 4px 4px;line-height:14px;pointer-events:auto;color:var(--ion-color-medium)}.message-me[_ngcontent-%COMP%]{--padding-start:8px;--padding-end:0px;--ion-safe-area-left:0px;--min-height:32px}.message-me[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{background:rgb(var(--ion-color-primary-rgb),.2)}']}),n}();function L(e,n){if(1&e&&(_.TgZ(0,"ion-item",12),_.TgZ(1,"ion-avatar",1),_._UZ(2,"img",13),_.qZA(),_.TgZ(3,"ion-label",14),_._uU(4),_.TgZ(5,"p",14),_._uU(6),_.ALo(7,"amTimeAgo"),_.qZA(),_.qZA(),_.qZA()),2&e){var t=n.ngIf;_.xp6(2),_.Q6J("src",t.avatar,_.LSH),_.xp6(2),_.AsE(" ",t.firstName," ",t.lastName," "),_.xp6(2),_.Oqu(_.lcZ(7,4,t.lastOnline))}}function U(e,n){if(1&e&&(_._UZ(0,"app-user-message",25),_.ALo(1,"async")),2&e){var t=_.oxw(),i=t.index,o=t.last,a=t.$implicit,s=_.oxw().$implicit,r=_.oxw();_.Q6J("isLastMessage","me"===(null==s.data[i+1]?null:s.data[i+1].type)||o)("isLastUserMessage","me"!==(null==s.data[i+1]?null:s.data[i+1].type)&&!o)("userAvatar",_.lcZ(1,5,r.messageDetail$).avatar)("message",a.message)("createdAt",a.createdAt)}}function Y(e,n){if(1&e&&_._UZ(0,"app-my-message",26),2&e){var t=_.oxw().$implicit;_.Q6J("message",t.message)("createdAt",t.createdAt)}}function Q(e,n){if(1&e){var t=_.EpF();_.TgZ(0,"ion-item-sliding",18,19),_.NdJ("ionDrag",function(e){_.CHM(t);var n=_.MAs(1);return _.oxw(2).messageDraged(e,n)}),_.YNc(2,U,2,7,"app-user-message",20),_.YNc(3,Y,1,2,"app-my-message",21),_.TgZ(4,"ion-item-options",22),_.TgZ(5,"ion-item-option",23),_._UZ(6,"ion-icon",24),_.qZA(),_.qZA(),_.qZA()}if(2&e){var i=n.$implicit;_.Q6J("id","message_"+i.id),_.xp6(2),_.Q6J("ngIf","user"===i.type),_.xp6(1),_.Q6J("ngIf","me"===i.type)}}function F(e,n){if(1&e&&(_.TgZ(0,"ion-item-group",15),_._UZ(1,"app-message-divider",16),_.YNc(2,Q,7,3,"ion-item-sliding",17),_.qZA()),2&e){var t=n.$implicit,i=_.oxw();_.xp6(1),_.Q6J("isPageScrolling",i.isPageScrolling)("createdAt",t.createdAt),_.xp6(1),_.Q6J("ngForOf",t.data)("ngForTrackBy",i.trackBy)}}var B,E,N=[{path:"",component:(B=function(){function n(t,i){e(this,n),this.store=t,this.navController=i,this.amCalendarGroup={sameDay:"[Today]",lastDay:"[Yesterday]",lastWeek:"[Last] dddd",sameElse:"DD-MM-YYYY"},this.isPageScrolling=!1,this.isAllowScroll=!0,this.messageControl=new p.NI("",[p.kI.required]),this.ionContentScrolling=new d.X(!1)}return t(n,[{key:"trackBy",value:function(e){return e}},{key:"openServicePage",value:function(e){this.navController.navigateForward(e.link)}},{key:"logScrollStart",value:function(){this.ionContentScrolling.next(!0)}},{key:"logScrolling",value:function(e){}},{key:"logScrollEnd",value:function(){this.ionContentScrolling.next(!1)}},{key:"messageDraged",value:function(e,n){1===e.detail.ratio&&n.closeOpened()}},{key:"sendMessage",value:function(e){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t,i=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t=this.store.selectSnapshot(function(e){return e.router.state.root.params.messageId}),n.next=4,(0,f.n)(this.store.dispatch(new h.b.Send(t,this.messageControl.value)));case 4:setTimeout(function(){i.messageControl.setValue(""),i.ionContent.scrollToBottom(0)});case 5:case"end":return n.stop()}},n,this)}))}},{key:"setupIonContentScrollingListner",value:function(){var e=this;this.ionContentScrolling.pipe((0,x.b)(function(n){n&&(e.isPageScrolling=n)}),(0,v.b)(1e3)).subscribe(function(n){return e.isPageScrolling=n})}},{key:"ngOnInit",value:function(){this.setupIonContentScrollingListner()}},{key:"ionViewWillEnter",value:function(){}},{key:"ionViewDidEnter",value:function(){var e=this;setTimeout(function(){return(0,l.mG)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.store.selectSnapshot(function(e){return e.router.state.root.params.messageId}),e.next=3,(0,f.n)(this.store.dispatch(new h.n.FetchMessageDetail(n)));case 3:return e.next=5,this.ionContent.scrollToBottom(0);case 5:case"end":return e.stop()}},e,this)}))})}},{key:"ionViewDidLeave",value:function(){}}]),n}(),B.\u0275fac=function(e){return new(e||B)(_.Y36(u.yh),_.Y36(m.SH))},B.\u0275cmp=_.Xpm({type:B,selectors:[["app-services"]],viewQuery:function(e,n){var t;1&e&&_.Gf(m.W2,5),2&e&&_.iGM(t=_.CRH())&&(n.ionContent=t.first)},decls:16,vars:13,consts:[[1,"ion-no-border",3,"translucent"],["slot","start"],["color","primary","defaultHref","/tabs/messages",3,"text"],["lines","none","style","--background: transparent",4,"ngIf"],["slot","end"],["color","primary"],["slot","icon-only","name","call-outline"],["slot","icon-only","name","videocam-outline"],[3,"fullscreen","scrollEvents","scrollY","ionScrollStart","ionScroll","ionScrollEnd"],["class","messages-item-group",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-border"],["appMessagesDetailFooter","",3,"ionContent"],["lines","none",2,"--background","transparent"],[3,"src"],[1,"ion-no-margin"],[1,"messages-item-group"],[3,"isPageScrolling","createdAt"],["class","message-item-sliding",3,"id","ionDrag",4,"ngFor","ngForOf","ngForTrackBy"],[1,"message-item-sliding",3,"id","ionDrag"],["slidingItem",""],[3,"isLastMessage","isLastUserMessage","userAvatar","message","createdAt",4,"ngIf"],[3,"message","createdAt",4,"ngIf"],["side","end",1,"no-border"],["disabled","",2,"--background","var(--ion-item-background)"],["slot","icon-only","name","arrow-undo-outline","color","primary"],[3,"isLastMessage","isLastUserMessage","userAvatar","message","createdAt"],[3,"message","createdAt"]],template:function(e,n){1&e&&(_.TgZ(0,"ion-header",0),_.TgZ(1,"ion-toolbar"),_.TgZ(2,"ion-buttons",1),_._UZ(3,"ion-back-button",2),_.qZA(),_.YNc(4,L,8,6,"ion-item",3),_.ALo(5,"async"),_.TgZ(6,"ion-buttons",4),_.TgZ(7,"ion-button",5),_._UZ(8,"ion-icon",6),_.qZA(),_.TgZ(9,"ion-button",5),_._UZ(10,"ion-icon",7),_.qZA(),_.qZA(),_.qZA(),_.qZA(),_.TgZ(11,"ion-content",8),_.NdJ("ionScrollStart",function(){return n.logScrollStart()})("ionScroll",function(e){return n.logScrolling(e)})("ionScrollEnd",function(){return n.logScrollEnd()}),_.YNc(12,F,3,4,"ion-item-group",9),_.ALo(13,"async"),_.qZA(),_.TgZ(14,"ion-footer",10),_._UZ(15,"div",11),_.qZA()),2&e&&(_.Q6J("translucent",!0),_.xp6(3),_.Q6J("text",""),_.xp6(1),_.Q6J("ngIf",_.lcZ(5,9,n.messageDetail$)),_.xp6(7),_.Q6J("fullscreen",!0)("scrollEvents",!0)("scrollY",n.isAllowScroll),_.xp6(1),_.Q6J("ngForOf",_.lcZ(13,11,n.messages$))("ngForTrackBy",n.trackBy),_.xp6(3),_.Q6J("ionContent",n.ionContent))},directives:[m.Gu,m.sr,m.Sm,m.oU,m.cs,a.O5,m.YG,m.gu,m.W2,a.sg,m.fr,A,m.Ie,m.BJ,m.Q$,m.Ub,S,m.td,m.IK,m.u8,J,D],pipes:[a.Ov,w.eG],styles:['.message-divider[_ngcontent-%COMP%]{position:relative;--background:transparent;z-index:4;margin:auto;border-bottom:0;--padding-end:0px;--padding-start:0px;--inner-padding-end:0px;--ion-safe-area-left:0px;--ion-safe-area-right:0px}.message-divider.scrolling[_ngcontent-%COMP%]{position:sticky;top:10px}.message-divider[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px;font-weight:500;text-align:center;margin:8px auto 0;padding:8px 16px;border-radius:20px;background:#fff;background:var(--ion-background-color,#fff)}.messages-item-group[_ngcontent-%COMP%]:last-child{margin-bottom:20px}.messages-item-group[_ngcontent-%COMP%]   .message-item-sliding[_ngcontent-%COMP%]:first-of-type   .message-container[_ngcontent-%COMP%]{margin-top:0}.messages-item-group[_ngcontent-%COMP%]   .message-me[_ngcontent-%COMP%]{--padding-start:8px;--padding-end:0px;--ion-safe-area-left:0px;--min-height:32px}.messages-item-group[_ngcontent-%COMP%]   .message-me[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{background:rgb(var(--ion-color-primary-rgb),.2)}.messages-item-group[_ngcontent-%COMP%]   .message-user[_ngcontent-%COMP%]{--padding-start:8px;--padding-end:0px;--ion-safe-area-left:0px;--min-height:32px}.messages-item-group[_ngcontent-%COMP%]   .message-user[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{position:sticky;top:0;margin-right:0;-webkit-margin-end:8px;margin-inline-end:8px;width:26px;height:26px}.messages-item-group[_ngcontent-%COMP%]   .message-user[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{background:rgb(var(--ion-color-medium-rgb),.2)}.messages-item-group[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{position:relative;border-radius:18px;padding:8px 12px;margin-top:12px;margin-left:0;margin-right:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;max-width:70%}.messages-item-group[_ngcontent-%COMP%]   .message-container.user-msg-padding[_ngcontent-%COMP%]{margin-left:33px}.messages-item-group[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:400;font-size:14px;white-space:pre-wrap}.messages-item-group[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:after{content:"";width:3.4em;height:12px;display:inline-block;vertical-align:top;visibility:hidden;font-size:11px}.messages-item-group[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;padding:4px 8px 4px 4px;line-height:14px;pointer-events:auto;color:var(--ion-color-medium)}.message-textarea[_ngcontent-%COMP%]{max-height:100px;--background:var(--ion-color-light);border-radius:20px;--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:10px}.item-options-ios.item-options-end[_ngcontent-%COMP%]{border-bottom-width:0}']}),(0,l.gn)([(0,u.Ph)((0,u.P1)([y.mf,C.uu],function(e,n){return e.listData[n.state.root.params.messageId]}))],B.prototype,"messageDetail$",void 0),(0,l.gn)([(0,u.Ph)((0,u.P1)([y.mf,C.uu],function(e,n){var t=e.listData[n.state.root.params.messageId];return t?(0,b.chain)(t.messages).groupBy(function(e){return M(e.createdAt).format("DD-MM-YYYY")}).map(function(e){return{createdAt:e[0].createdAt,data:e}}).value():[]}))],B.prototype,"messages$",void 0),B)}],H=function(){var n=function n(){e(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=_.oAB({type:n}),n.\u0275inj=_.cJS({imports:[[c.Bz.forChild(N)],c.Bz]}),n}(),z=((E=function n(){e(this,n)}).\u0275fac=function(e){return new(e||E)},E.\u0275mod=_.oAB({type:E}),E.\u0275inj=_.cJS({imports:[[a.ez,H,r.H,g.i,s.m]]}),E)}}])}();