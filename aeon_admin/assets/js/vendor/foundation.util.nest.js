"use strict";!function(e){var a={Feather:function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zf";a.attr("role","menubar");var n=a.find("li").attr({role:"menuitem"}),i="is-"+t+"-submenu",u=i+"-item",s="is-"+t+"-submenu-parent";a.find("a:first").attr("tabindex",0),n.each(function(){var a=e(this),t=a.children("ul");t.length&&(a.addClass(s).attr({"aria-haspopup":!0,"aria-expanded":!1,"aria-label":a.children("a:first").text()}),t.addClass("submenu "+i).attr({"data-submenu":"","aria-hidden":!0,role:"menu"})),a.parent("[data-submenu]").length&&a.addClass("is-submenu-item "+u)})},Burn:function(e,a){var t=(e.find("li").removeAttr("tabindex"),"is-"+a+"-submenu"),n=t+"-item",i="is-"+a+"-submenu-parent";e.find(">li, .menu, .menu > li").removeClass(t+" "+n+" "+i+" is-submenu-item submenu is-active").removeAttr("data-submenu").css("display","")}};Foundation.Nest=a}(jQuery);