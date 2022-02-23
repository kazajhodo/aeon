"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}();!function(t){function i(t,i){return t/i}function e(t,i,e,s){return Math.abs(t.position()[i]+t[s]()/2-e)}var s=function(){function s(i,e){_classCallCheck(this,s),this.$element=i,this.options=t.extend({},s.defaults,this.$element.data(),e),this._init(),Foundation.registerPlugin(this,"Slider"),Foundation.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}return _createClass(s,[{key:"_init",value:function(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):t("#"+this.$handle.attr("aria-controls")),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var i=!1,e=this;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=t().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this._events(this.$handle),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=this.inputs.length>1?this.inputs.eq(1):t("#"+this.$handle2.attr("aria-controls")),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),i=!0,this._setHandlePos(this.$handle,this.options.initialStart,!0,function(){e._setHandlePos(e.$handle2,e.options.initialEnd,!0)}),this._setInitAttr(1),this._events(this.$handle2)),i||this._setHandlePos(this.$handle,this.options.initialStart,!0)}},{key:"_setHandlePos",value:function(t,e,s,n){if(!this.$element.hasClass(this.options.disabledClass)){e=parseFloat(e),e<this.options.start?e=this.options.start:e>this.options.end&&(e=this.options.end);var a=this.options.doubleSided;if(a)if(0===this.handles.index(t)){var o=parseFloat(this.$handle2.attr("aria-valuenow"));e=e>=o?o-this.options.step:e}else{var l=parseFloat(this.$handle.attr("aria-valuenow"));e=e<=l?l+this.options.step:e}this.options.vertical&&!s&&(e=this.options.end-e);var d=this,r=this.options.vertical,h=r?"height":"width",u=r?"top":"left",p=t[0].getBoundingClientRect()[h],f=this.$element[0].getBoundingClientRect()[h],c=i(e-this.options.start,this.options.end-this.options.start).toFixed(2),v=(f-p)*c,g=(100*i(v,f)).toFixed(this.options.decimal);e=parseFloat(e.toFixed(this.options.decimal));var _={};if(this._setValues(t,e),a){var m,$=0===this.handles.index(t),R=~~(100*i(p,f));if($)_[u]=g+"%",m=parseFloat(this.$handle2[0].style[u])-g+R,n&&"function"==typeof n&&n();else{var F=parseFloat(this.$handle[0].style[u]);m=g-(isNaN(F)?this.options.initialStart/((this.options.end-this.options.start)/100):F)+R}_["min-"+h]=m+"%"}this.$element.one("finished.zf.animate",function(){d.$element.trigger("moved.zf.slider",[t])});var b=this.$element.data("dragging")?1e3/60:this.options.moveTime;Foundation.Move(b,t,function(){t.css(u,g+"%"),d.options.doubleSided?d.$fill.css(_):d.$fill.css(h,100*c+"%")}),clearTimeout(d.timeout),d.timeout=setTimeout(function(){d.$element.trigger("changed.zf.slider",[t])},d.options.changedDelay)}}},{key:"_setInitAttr",value:function(t){var i=this.inputs.eq(t).attr("id")||Foundation.GetYoDigits(6,"slider");this.inputs.eq(t).attr({id:i,max:this.options.end,min:this.options.start,step:this.options.step}),this.handles.eq(t).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":0===t?this.options.initialStart:this.options.initialEnd,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}},{key:"_setValues",value:function(t,i){var e=this.options.doubleSided?this.handles.index(t):0;this.inputs.eq(e).val(i),t.attr("aria-valuenow",i)}},{key:"_handleEvent",value:function(s,n,a){var o,l;if(a)o=this._adjustValue(null,a),l=!0;else{s.preventDefault();var d=this,r=this.options.vertical,h=r?"height":"width",u=r?"top":"left",p=r?s.pageY:s.pageX,f=(this.$handle[0].getBoundingClientRect()[h]/2,this.$element[0].getBoundingClientRect()[h]),c=r?t(window).scrollTop():t(window).scrollLeft(),v=this.$element.offset()[u];s.clientY===s.pageY&&(p+=c);var g,_=p-v;g=_<0?0:_>f?f:_;var m=i(g,f);if(o=(this.options.end-this.options.start)*m+this.options.start,Foundation.rtl()&&!this.options.vertical&&(o=this.options.end-o),o=d._adjustValue(null,o),l=!1,!n){var $=e(this.$handle,u,g,h),R=e(this.$handle2,u,g,h);n=$<=R?this.$handle:this.$handle2}}this._setHandlePos(n,o,l)}},{key:"_adjustValue",value:function(t,i){var e,s,n,a,o=this.options.step,l=parseFloat(o/2);return e=t?parseFloat(t.attr("aria-valuenow")):i,s=e%o,n=e-s,a=n+o,0===s?e:e=e>=n+l?a:n}},{key:"_events",value:function(i){var e,s=this;if(this.inputs.off("change.zf.slider").on("change.zf.slider",function(i){var e=s.inputs.index(t(this));s._handleEvent(i,s.handles.eq(e),t(this).val())}),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(i){return!s.$element.data("dragging")&&void(t(i.target).is("[data-slider-handle]")||(s.options.doubleSided?s._handleEvent(i):s._handleEvent(i,s.$handle)))}),this.options.draggable){this.handles.addTouch();var n=t("body");i.off("mousedown.zf.slider").on("mousedown.zf.slider",function(a){i.addClass("is-dragging"),s.$fill.addClass("is-dragging"),s.$element.data("dragging",!0),e=t(a.currentTarget),n.on("mousemove.zf.slider",function(t){t.preventDefault(),s._handleEvent(t,e)}).on("mouseup.zf.slider",function(t){s._handleEvent(t,e),i.removeClass("is-dragging"),s.$fill.removeClass("is-dragging"),s.$element.data("dragging",!1),n.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(t){t.preventDefault()})}i.off("keydown.zf.slider").on("keydown.zf.slider",function(i){var e,n=t(this),a=s.options.doubleSided?s.handles.index(n):0,o=parseFloat(s.inputs.eq(a).val());Foundation.Keyboard.handleKey(i,"Slider",{decrease:function(){e=o-s.options.step},increase:function(){e=o+s.options.step},decrease_fast:function(){e=o-10*s.options.step},increase_fast:function(){e=o+10*s.options.step},handled:function(){i.preventDefault(),s._setHandlePos(n,e,!0)}})})}},{key:"destroy",value:function(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),Foundation.unregisterPlugin(this)}}]),s}();s.defaults={start:0,end:100,step:1,initialStart:0,initialEnd:100,binding:!1,clickSelect:!0,vertical:!1,draggable:!0,disabled:!1,doubleSided:!1,decimal:2,moveTime:200,disabledClass:"disabled",invertVertical:!1,changedDelay:500},Foundation.plugin(s,"Slider")}(jQuery);