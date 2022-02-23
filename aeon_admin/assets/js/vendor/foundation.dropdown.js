"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,o,s){return o&&e(t.prototype,o),s&&e(t,s),t}}();!function(e){var t=function(){function t(o,s){_classCallCheck(this,t),this.$element=o,this.options=e.extend({},t.defaults,this.$element.data(),s),this._init(),Foundation.registerPlugin(this,"Dropdown"),Foundation.Keyboard.register("Dropdown",{ENTER:"open",SPACE:"open",ESCAPE:"close",TAB:"tab_forward",SHIFT_TAB:"tab_backward"})}return _createClass(t,[{key:"_init",value:function(){var t=this.$element.attr("id");this.$anchor=e(e('[data-toggle="'+t+'"]').length?'[data-toggle="'+t+'"]':'[data-open="'+t+'"]'),this.$anchor.attr({"aria-controls":t,"data-is-focus":!1,"data-yeti-box":t,"aria-haspopup":!0,"aria-expanded":!1}),this.options.positionClass=this.getPositionClass(),this.counter=4,this.usedPositions=[],this.$element.attr({"aria-hidden":"true","data-yeti-box":t,"data-resize":t,"aria-labelledby":this.$anchor[0].id||Foundation.GetYoDigits(6,"dd-anchor")}),this._events()}},{key:"getPositionClass",value:function(){var e=this.$element[0].className.match(/(top|left|right|bottom)/g);e=e?e[0]:"";var t=/float-(\S+)/.exec(this.$anchor[0].className);t=t?t[1]:"";var o=t?t+" "+e:e;return o}},{key:"_reposition",value:function(e){this.usedPositions.push(e?e:"bottom"),!e&&this.usedPositions.indexOf("top")<0?this.$element.addClass("top"):"top"===e&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(e):"left"===e&&this.usedPositions.indexOf("right")<0?this.$element.removeClass(e).addClass("right"):"right"===e&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(e).addClass("left"):!e&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.$element.addClass("left"):"top"===e&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(e).addClass("left"):"left"===e&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(e):"right"===e&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(e):this.$element.removeClass(e),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){if("false"===this.$anchor.attr("aria-expanded"))return!1;var e=this.getPositionClass(),t=Foundation.Box.GetDimensions(this.$element),o=(Foundation.Box.GetDimensions(this.$anchor),"left"===e?"left":"right"===e?"left":"top"),s="top"===o?"height":"width";"height"===s?this.options.vOffset:this.options.hOffset;if(t.width>=t.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.$element))return this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:t.windowDims.width-2*this.options.hOffset,height:"auto"}),this.classChanged=!0,!1;for(this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,e,this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.$element,!1,!0)&&this.counter;)this._reposition(e),this._setPosition()}},{key:"_events",value:function(){var t=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.options.hover&&(this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){e('body[data-whatinput="mouse"]').is("*")&&(clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.open(),t.$anchor.data("hover",!0)},t.options.hoverDelay))}).on("mouseleave.zf.dropdown",function(){clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.close(),t.$anchor.data("hover",!1)},t.options.hoverDelay)}),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(t.timeout)}).on("mouseleave.zf.dropdown",function(){clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.close(),t.$anchor.data("hover",!1)},t.options.hoverDelay)})),this.$anchor.add(this.$element).on("keydown.zf.dropdown",function(o){var s=e(this),i=Foundation.Keyboard.findFocusable(t.$element);Foundation.Keyboard.handleKey(o,"Dropdown",{tab_forward:function(){t.$element.find(":focus").is(i.eq(-1))&&(t.options.trapFocus?(i.eq(0).focus(),o.preventDefault()):t.close())},tab_backward:function(){(t.$element.find(":focus").is(i.eq(0))||t.$element.is(":focus"))&&(t.options.trapFocus?(i.eq(-1).focus(),o.preventDefault()):t.close())},open:function(){s.is(t.$anchor)&&(t.open(),t.$element.attr("tabindex",-1).focus(),o.preventDefault())},close:function(){t.close(),t.$anchor.focus()}})})}},{key:"_addBodyHandler",value:function(){var t=e(document.body).not(this.$element),o=this;t.off("click.zf.dropdown").on("click.zf.dropdown",function(e){o.$anchor.is(e.target)||o.$anchor.find(e.target).length||o.$element.find(e.target).length||(o.close(),t.off("click.zf.dropdown"))})}},{key:"open",value:function(){if(this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchor.addClass("hover").attr({"aria-expanded":!0}),this._setPosition(),this.$element.addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var e=Foundation.Keyboard.findFocusable(this.$element);e.length&&e.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function(){if(!this.$element.hasClass("is-open"))return!1;if(this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchor.removeClass("hover").attr("aria-expanded",!1),this.classChanged){var e=this.getPositionClass();e&&this.$element.removeClass(e),this.$element.addClass(this.options.positionClass).css({height:"",width:""}),this.classChanged=!1,this.counter=4,this.usedPositions.length=0}this.$element.trigger("hide.zf.dropdown",[this.$element])}},{key:"toggle",value:function(){if(this.$element.hasClass("is-open")){if(this.$anchor.data("hover"))return;this.close()}else this.open()}},{key:"destroy",value:function(){this.$element.off(".zf.trigger").hide(),this.$anchor.off(".zf.dropdown"),Foundation.unregisterPlugin(this)}}]),t}();t.defaults={hoverDelay:250,hover:!1,hoverPane:!1,vOffset:1,hOffset:1,positionClass:"",trapFocus:!1,autoFocus:!1,closeOnClick:!1},Foundation.plugin(t,"Dropdown")}(jQuery);