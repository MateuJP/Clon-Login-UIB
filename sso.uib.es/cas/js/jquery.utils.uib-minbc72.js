var uniqID={counter:0,get:function(prefix){if(!prefix){prefix="uniqid"}var id=prefix+""+uniqID.counter++;if(jQuery("#"+id).length==0){return id}else{return uniqID.get()}}};var currentScript=document.currentScript||(function(){return document.querySelector('script[src$="jquery.utils.uib.js"],script[src$="jquery.utils.uib-min.js"]')})();var dirScript=currentScript.getAttribute("src");var nameScript=dirScript.split("/").pop();dirScript=dirScript.replace("/"+nameScript,"");var callBackFunctions=new Array();function callBackGlobal(){for(var i=0;i<callBackFunctions.length;i++){callBackFunctions[i]()}}function loadScriptAdd(url,callback){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src=url;script.async=true;var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;callback();script.onload=script.onreadystatechange=null;head.removeChild(script)}};head.appendChild(script)}jQuery.cachedScript=function(url,options){options=$.extend(options||{},{dataType:"script",cache:true,url:url});return jQuery.ajax(options)};function scrollTopButton(textTop,textClose){var scroll_timer;var scrollTopdisplayed=false;var scrollClose=false;var controlVisibility=function(){window.clearTimeout(scroll_timer);scroll_timer=window.setTimeout(function(){if(($(window).scrollTop()<=$(document.body).children(0).position().top)){scrollTopdisplayed=false;$("#scroll_to_top").fadeOut(500)}else{if(scrollTopdisplayed==false&&!scrollClose){scrollTopdisplayed=true;$("#scroll_to_top").stop(true,true).show().on("click touch",function(){$("#scroll_to_top").fadeOut(500)})}}},200)};$(window).scroll(controlVisibility);$(window).bind("resizeEndcontrolVisibility",controlVisibility);$(window).resize(function(){if(this.resizeTOcontrolVisibility){clearTimeout(this.resizeTOcontrolVisibility)}this.resizeTOcontrolVisibility=setTimeout(function(){$(this).trigger("resizeEndcontrolVisibility")},150)});$("body").append('<div id="scroll_to_top"><a class="link" href="#top"><span class="fa fa-chevron-circle-up"></span>'+textTop+'</a><a class="closes" id="closescroll" href="#closescroll" title="'+textClose+'"><span class="fa fa-times-circle"></span></a></div>');$("#scroll_to_top a.link").on("click touch",function(){$("html, body").animate({scrollTop:0},"slow")});$("#scroll_to_top a.close").on("click touch",function(){scrollClose=true;scrollTopdisplayed=false;$("#scroll_to_top").fadeOut(500)});if(!scrollTopdisplayed){$("#scroll_to_top").fadeOut(500)}}jQuery.cookie=function(name,value,options){if(typeof value!="undefined"){options=options||{};if(value===null){value="";options.expires=-1}var expires="";if(options.expires&&(typeof options.expires=="number"||options.expires.toUTCString)){var date;if(typeof options.expires=="number"){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires="; expires="+date.toUTCString()}var path=options.path?"; path="+options.path:"";var domain=options.domain?"; domain="+options.domain:"";var secure=options.secure?"; secure":"";document.cookie=[name,"=",encodeURIComponent(value),expires,path,domain,secure].join("")}else{var cookieValue=null;if(document.cookie&&document.cookie!=""){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+"=")){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};var textResizer=$(function(){var cookieNameFontSizeUIB="FontSizeUIB";var textElement=$("#uib_grid_body");var resetFontValue=textElement.css("font-size");var fontSizeCookie=jQuery.cookie(cookieNameFontSizeUIB);if(fontSizeCookie){textElement.css("font-size",fontSizeCookie+"px")}function changeSize(element,size){var current=parseInt(fontSizeCookie);var newSize;if(current!==""){current=parseInt(element.css("font-size"))}if((size==="decrease")&&(current>12)){newSize=current-2}else{if((size==="increase")&&(current<32)){newSize=current+2}else{if(size==="reset"){newSize=parseInt(resetFontValue)}}}element.css("font-size",newSize+"px");$.cookie(cookieNameFontSizeUIB,newSize,{path:"/",expires:365,domain:".uib.es"});$.cookie(cookieNameFontSizeUIB,newSize,{path:"/",expires:365,domain:".uib.cat"});$.cookie(cookieNameFontSizeUIB,newSize,{path:"/",expires:365,domain:".uib.eu"});return newSize}$("#decreaseFont").on("click touch",function(e){changeSize(textElement,"decrease");e.preventDefault()});$("#increaseFont").on("click touch",function(e){changeSize(textElement,"increase");e.preventDefault()});$("#resetFont").on("click touch",function(e){$.cookie(cookieNameFontSizeUIB,resetFontValue,{path:"/",expires:-1,domain:".uib.es"});$.cookie(cookieNameFontSizeUIB,resetFontValue,{path:"/",expires:-1,domain:".uib.cat"});$.cookie(cookieNameFontSizeUIB,resetFontValue,{path:"/",expires:-1,domain:".uib.eu"});textElement.css("font-size","");e.preventDefault()})});var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-13062120-7"]);_gaq.push(["_setDomainName","none"]);_gaq.push(["_setAllowLinker",true]);_gaq.push(["_trackPageview"]);function setGoogleAnalytics(){var ga=document.createElement("script");ga.type="text/javascript";ga.async=true;ga.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ga,s)}(function($){$.fn.rwdImageMaps=function(){var $img=this;var rwdImageMap=function(){$img.each(function(){if(typeof($(this).attr("usemap"))=="undefined"){return}var that=this,$that=$(that);$("<img />").load(function(){var attrW="width",attrH="height",w=$that.attr(attrW),h=$that.attr(attrH);if(!w||!h){var temp=new Image();temp.src=$that.attr("src");if(!w){w=temp.width}if(!h){h=temp.height}}var wPercent=$that.width()/100,hPercent=$that.height()/100,map=$that.attr("usemap").replace("#",""),c="coords";$('map[name="'+map+'"]').find("area").each(function(){var $this=$(this);if(!$this.data(c)){$this.data(c,$this.attr(c))}var coords=$this.data(c).split(","),coordsPercent=new Array(coords.length);for(var i=0;i<coordsPercent.length;++i){if(i%2===0){coordsPercent[i]=parseInt(((coords[i]/w)*100)*wPercent)}else{coordsPercent[i]=parseInt(((coords[i]/h)*100)*hPercent)}}$this.attr(c,coordsPercent.toString())})}).attr("src",$that.attr("src"))})};$(window).resize(rwdImageMap).trigger("resize");return this}})(jQuery);(function(root,factory){if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{if(typeof exports!=="undefined"){factory(exports)}else{factory((root.dragscroll={}))}}}(this,function(exports){var _window=window;var _document=document;var mousemove="mousemove";var mouseup="mouseup";var mousedown="mousedown";var EventListener="EventListener";var addEventListener="add"+EventListener;var removeEventListener="remove"+EventListener;var newScrollX,newScrollY;var dragged=[];var reset=function(i,el){for(i=0;i<dragged.length;){el=dragged[i++];el=el.container||el;el[removeEventListener](mousedown,el.md,0);_window[removeEventListener](mouseup,el.mu,0);_window[removeEventListener](mousemove,el.mm,0)}dragged=[].slice.call(_document.getElementsByClassName("dragscroll"));for(i=0;i<dragged.length;){(function(el,lastClientX,lastClientY,pushed,scroller,cont){(cont=el.container||el)[addEventListener](mousedown,cont.md=function(e){if(!el.hasAttribute("nochilddrag")||_document.elementFromPoint(e.pageX,e.pageY)==cont){pushed=1;lastClientX=e.clientX;lastClientY=e.clientY;e.preventDefault()}},0);_window[addEventListener](mouseup,cont.mu=function(){pushed=0},0);_window[addEventListener](mousemove,cont.mm=function(e){if(pushed){(scroller=el.scroller||el).scrollLeft-=newScrollX=(-lastClientX+(lastClientX=e.clientX));scroller.scrollTop-=newScrollY=(-lastClientY+(lastClientY=e.clientY));if(el==_document.body){(scroller=_document.documentElement).scrollLeft-=newScrollX;scroller.scrollTop-=newScrollY}}},0)})(dragged[i++])}};if(_document.readyState=="complete"){reset()}else{_window[addEventListener]("load",reset,0)}exports.reset=reset}));function getMarginToTop(selector){var scrollTop=$(window).scrollTop(),elementOffset=$(selector).offset().top;return(elementOffset-scrollTop)}var utilsuib={isInViewport:function(element,detectPartial){element=$(element);detectPartial=(!!detectPartial);var viewport=$(window),vpWidth=viewport.width(),vpHeight=viewport.height(),vpTop=viewport.scrollTop(),vpBottom=vpTop+vpHeight,vpLeft=viewport.scrollLeft(),vpRight=vpLeft+vpWidth,elementOffset=element.offset(),elementTopArea=elementOffset.top+((detectPartial)?element.height():0),elementBottomArea=elementOffset.top+((detectPartial)?0:element.height()),elementLeftArea=elementOffset.left+((detectPartial)?element.width():0),elementRightArea=elementOffset.left+((detectPartial)?0:element.width());return((elementBottomArea<=vpBottom)&&(elementTopArea>=vpTop))&&((elementRightArea<=vpRight)&&(elementLeftArea>=vpLeft))},restaPixelsMenu:function(topPixels){var stickyMenu=$("#uib_header_options.is_stuck");if(stickyMenu.length>0&&utilsuib.isStickyCookieEnabled()){topPixels-=100;if(topPixels<0){topPixels=0}}topPixels=Math.round(topPixels);return topPixels},posiciona:function(nodeSelector,isAcordion){var node=$(nodeSelector).get(0);if(node!=null||typeof node!="undefined"){var elementHeader=$(node).parent();if(!isAcordion){elementHeader=$(node);var topPixels=$(elementHeader).offset().top;topPixels=utilsuib.restaPixelsMenu(topPixels);var initTopPixels=topPixels;if(!utilsuib.isInViewport(elementHeader)){$("html,body").stop().animate({scrollTop:topPixels},100);topPixels=utilsuib.restaPixelsMenu(initTopPixels);if(initTopPixels!=topPixels){$("html,body").stop().animate({scrollTop:topPixels},10)}}}else{if($(nodeSelector).hasClass("ui-accordion-header")){elementHeader=$(nodeSelector)}if(elementHeader!=null){var acordioX=elementHeader.parents(".ui-accordion").get(0);if(acordioX){$(acordioX).accordion("option","animate",false);$(acordioX).accordion("option","activate",function(event,ui){var topPixels=$(ui.newHeader).offset().top;topPixels=utilsuib.restaPixelsMenu(topPixels);var initTopPixels=topPixels;if(!utilsuib.isInViewport(ui.newHeader)){$("html,body").stop().animate({scrollTop:topPixels},100);topPixels=utilsuib.restaPixelsMenu(initTopPixels);if(initTopPixels!=topPixels){$("html,body").stop().animate({scrollTop:topPixels},10)}}$(this).accordion("option","animate",200)})}if(elementHeader.attr("aria-expanded")!="true"){elementHeader.click();var topPixels=$(elementHeader).offset().top;topPixels=utilsuib.restaPixelsMenu(topPixels);if(!utilsuib.isInViewport(elementHeader)){var initTopPixels=topPixels;$("html,body").stop().animate({scrollTop:topPixels},100);topPixels=utilsuib.restaPixelsMenu(initTopPixels);if(initTopPixels!=topPixels){$("html,body").stop().animate({scrollTop:topPixels},10)}}}$(nodeSelector).focus()}}}},cookieStickyUIBName:"StickyUIB",stickyCookie:false,isStickyCookieEnabled:function(){var stickyCookie=jQuery.cookie(this.cookieStickyUIBName);if(stickyCookie!=null&&stickyCookie=="disabled"){return false}else{return true}},toggleStickyButton:function(){$("#stickyUIB button i").toggleClass("fa-thumb-tack fa-dot-circle-o")},initSticky:function(){if(!this.isStickyCookieEnabled()){this.toggleStickyButton()}$("#stickyUIB button").on("click touch",function(){if(utilsuib.isStickyCookieEnabled()){jQuery.cookie("StickyUIB","disabled",{path:"/",expires:365,domain:".uib.cat"});jQuery.cookie("StickyUIB","disabled",{path:"/",expires:365,domain:".uib.es"});jQuery.cookie("StickyUIB","disabled",{path:"/",expires:365,domain:".uib.eu"});utilsuib.stickyCookie=false;toggleStickyButton()}else{jQuery.cookie("StickyUIB","enabled",{path:"/",expires:365,domain:".uib.cat"});jQuery.cookie("StickyUIB","enabled",{path:"/",expires:365,domain:".uib.es"});jQuery.cookie("StickyUIB","enabled",{path:"/",expires:365,domain:".uib.eu"});utilsuib.stickyCookie=true;utilsuib.toggleStickyButton()}utilsuib.seguirBarra()})},headingTopId:"uib_header_options",initialMarginTop:(parseInt($("#uib_grid_main,#uib_grid").css("margin-top"),10)),isScrollingWorking:false,seguirBarra:function(){if(!this.isScrollingWorking){this.isScrollingWorking=true;var windowpos=$(window).scrollTop();var verticalSpace=0;var s=$("#"+utilsuib.headingTopId);if(s.length>0){verticalSpace=parseInt(s.css("height"),10)}if(s&&!utilsuib.isStickyCookieEnabled()){if(s.hasClass("is_stuck")){s.toggleClass("is_stuck");$("#uib_grid_main,#uib_grid").css("margin-top",this.initialMarginTop)}}else{if(windowpos>(verticalSpace+this.initialMarginTop)){if(!s.hasClass("is_stuck")){s.toggleClass("is_stuck");$("#uib_grid_main,#uib_grid").css("margin-top",verticalSpace+this.initialMarginTop)}}else{if(s.hasClass("is_stuck")){s.toggleClass("is_stuck");$("#uib_grid_main,#uib_grid").css("margin-top",this.initialMarginTop)}}}this.isScrollingWorking=false}}};function handleWindowScrollBar(){var body=document.querySelector("body");if(window.innerWidth>body.clientWidth+5){if(!$("body").hasClass("has-scrollbar")){body.classList.add("has-scrollbar")}body.setAttribute("style","--scroll-bar: "+(window.innerWidth-body.clientWidth)+"px")}else{body.classList.remove("has-scrollbar")}}$(function(){handleWindowScrollBar();function isMobile(){var check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){check=true}})(navigator.userAgent||navigator.vendor||window.opera);return check}var root=document.documentElement;var isTouchDevice=(isMobile()||("ontouchstart" in window)||((window.navigator.msPointerEnabled)&&(navigator.msMaxTouchPoints)));if(isTouchDevice){root.className+=" touchdevice"}else{root.className+=" notouchdevice"}var entradeMenuNavTop=$(".navtop ol");$(".navtop > ol> li > label").on("touchend",function(){var forElement=$(this).attr("for");$("#"+forElement).prop("checked",!$(this).prop("checked"))});entradeMenuNavTop.find(" li > a, li > span ").each(function(){if(isTouchDevice){$(this)[0].flagClick=false}else{$(this)[0].flagClick=true}});entradeMenuNavTop.find(" li > .openclose ").change(function(e){var actualCheck=$(this);if(actualCheck.prop("checked")){entradeMenuNavTop.find("li > .openclose ").each(function(){if($(this).attr("id")!=actualCheck.attr("id")){$(this).prop("checked",false)}})}});entradeMenuNavTop.find("li > a, li > span ").on("click",function(e){if(!$(this)[0].flagClick){var actual=$(this);entradeMenuNavTop.find("li > a, li > span ").each(function(){$(this)[0].flagClick=false;if($(this)[0]!=actual[0]){$(this).siblings(".openclose").prop("checked",false)}});$(this).siblings(".openclose").prop("checked",!$(this).prop("checked"));$(this)[0].flagClick=true;e.preventDefault();return false}return $(this)[0].flagClick});var elementsImatgeMapejats=$("#uib_grid_content img[usemap]");if(elementsImatgeMapejats.length>0){elementsImatgeMapejats.rwdImageMaps();var resizeListener=function(){$(window).one("resize",function(){elementsImatgeMapejats.rwdImageMaps();handleWindowScrollBar();setTimeout(resizeListener,200)})};resizeListener()}$("table.tablemobile").each(function(index,table){var headers=$(table).find("tr:first th");if(headers.length>0){$(table).find("tr td").each(function(indexTd,td){$(td).attr("data-th",$(headers[indexTd%$(headers).length]).text().replace(/\r?\n|\r/,"").trim());if((indexTd%$(headers).length==0)&&(indexTd>0)){$(td).addClass("rowseparator")}})}});utilsuib.initSticky();var isMenuMobileVisible=true||$("#menu-seccions").is(":visible");var progressBar=$("#progress-bar");$(window).scroll(function(){if(isMenuMobileVisible){utilsuib.seguirBarra()}if(typeof(progressBar)!="undefined"){var scroll=$(window).scrollTop();dh=$(document).height();wh=$(window).height();scrollPercent=(scroll/(dh-wh))*100;progressBar.css("width",scrollPercent+"%")}});if(isMenuMobileVisible){utilsuib.seguirBarra()}$(window).on("load",function(){var hash=document.location.hash;if(hash){var node=$("#cid"+(hash).replace(/^#cid/,"").replace(/^#/,""));if(typeof(node)=="undefined"){node=$(hash)}if(!node.length){node=$(".ui-accordion #"+hash.replace(/^#/,"").replace(".","\\."));if(typeof(node)=="undefined"){node=$(".ui-accordion"+hash)}}if(node.length){utilsuib.posiciona($(node),true)}else{$(".ui-accordion").on("accordioncreate",function(event,ui){utilsuib.posiciona(".ui-accordion #"+hash,true)});if($(".ui-accordion "+hash).length==0){utilsuib.posiciona(hash,false)}}}});$("a[target='_blank']").removeAttr("target");$(window).bind("resizeEndMenuVertical",function(){var navSeccio=$("#navegacio-seccio.menu-vertical");if(navSeccio.length&&$(window).width()>=768){navSeccio.toggleClass("menu-vertical visible-tablet visible-desktop").fadeIn()}});$(window).resize(function(){if(this.resizeTOMenuVertical){clearTimeout(this.resizeTOMenuVertical)}this.resizeTOMenuVertical=setTimeout(function(){$(this).trigger("resizeEndMenuVertical")},100)});$("#menu-navigation").on("click touch",function(){$(this).find("i").toggleClass("fa-minus fa-plus");$("#navegacio-seccio").toggleClass("menu-vertical visible-tablet visible-desktop").fadeIn()});$("#menu-mobile").on("keydown",function(e){if(e.keyCode==13){this.click();e.preventDefault();$(".menu-border li:first-child  a:first-child").focus()}});$("#menu-mobile").on("click touch",function(event){var menuBarParent=$("#uib_header_tools .menubar");var menuBarOl=$("#menu-bar");var menuNavtop=$("#uib_header_tools .navtop");var isOpenMenu=$(this).hasClass("menu-border");if(true||$(window).width()<768){if(isOpenMenu){menuBarOl.prependTo(menuBarParent)}else{menuBarOl.find("[tabindex]").removeAttr("tabindex");if(menuNavtop.length==0){menuNavtop=$("<nav class='navtop hidden-phone rs_skip  rs_preserve'></nav>");$("#uib_header_tools").append(menuNavtop)}menuBarOl.appendTo(menuNavtop)}}$(this).toggleClass("menu-border");menuNavtop.toggleClass("hidden-phone");if(!menuNavtop.is(":hidden")){menuNavtop.slideDown("slow")}menuNavtop.toggleClass("menu-border")});function controlMenuNavTop(){var navtopSelected=$("#uib_header_options:not(.is_stuck)").find(".menu-border");if(navtopSelected.length&&$(window).width()>=768){navtopSelected.toggleClass("hidden-phone",true);navtopSelected.removeClass("menu-border");var menuBarOl=$("#menu-bar");var menuBarParent=$("#uib_header_tools .menubar");menuBarOl.prependTo(menuBarParent)}}$(window).bind("resizeEndNavTop",function(){controlMenuNavTop()});$(window).resize(function(){if(this.resizeTONavTop){clearTimeout(this.resizeTONavTop)}this.resizeTONavTop=setTimeout(function(){$(this).trigger("resizeEndNavTop")},200)});$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll==0){controlMenuNavTop()}});document.getElementById("btn-header-search").addEventListener("click",function(event){document.getElementsByClassName("searchTools")[0].classList.add("show");document.getElementById("q").focus()});document.getElementById("btn-close-search").addEventListener("click",function(event){document.getElementsByClassName("searchTools")[0].classList.remove("show")});function tocifyControl(){if($(window).width()>979){if(!$("#tocify").hasClass("is_stuck_menu")){$("#tocify").stick_in_parent({parent:"#content-zone,#content-zone-estudis .wrap-estudis",sticky_class:"is_stuck_menu",bottoming:true,offset_top:80})}}else{$("#tocify").trigger("sticky_kit:detach")}}$(function(){tocifyControl();$(window).bind("resizeEndtocify",function(){tocifyControl()});$(window).resize(function(){if(this.resizeTOtocify){clearTimeout(this.resizeTOtocify)}this.resizeTOtocify=setTimeout(function(){$(this).trigger("resizeEndtocify")},500)})})});function ViewerNetflix(node){var _data={selectorGrid:node,_portletVisor:null,_portletGrid:null,_setVisibilityLeftRight:function(){if(this._portletGrid.scrollLeft==0){this._elL.style.display="none"}else{this._elL.style.display="block"}if(this._portletGrid.clientWidth+this._portletGrid.scrollLeft<this._portletGrid.scrollWidth){this._elR.style.display="block"}else{this._elR.style.display="none"}},_createFragment:function(){var _constHtmlControls='<div class="visorControls"><div class="left-controls" role="button" aria-label="See Previous"><i class="fas fa-chevron-left" aria-hidden="true"></i></div><div class="right-controls" role="button" aria-label="See next"><i class="fas fa-chevron-right" aria-hidden="true"></i></div></div>';var frag=document.createDocumentFragment(),temp=document.createElement("div");temp.innerHTML=_constHtmlControls;while(temp.firstChild){frag.appendChild(temp.firstChild)}return frag},_move:function(elem,value,isLeft,structure){var left=0;var pixels=5;while(left<value){left+=pixels;if(isLeft){elem.scrollLeft+=pixels}else{elem.scrollLeft-=pixels}if(left>=value){structure._setVisibilityLeftRight()}}},_calcDelta:function(elem){var portletGrid=elem;var delta=Math.trunc(portletGrid.clientWidth);var fillGrid=portletGrid.getElementsByClassName("Grid-cell")[0];if(typeof fillGrid!=="undefined"){var widthCell=fillGrid.getBoundingClientRect().width;delta=2*widthCell}return delta},_createControls:function(){var vGrid=_data.selectorGrid;vGrid.classList.remove("row-fluid");var parentGrid=vGrid.parentElement;var visorHor=document.createElement("div");visorHor.classList.add("visorHoritzontal");parentGrid.appendChild(visorHor);var newViewer=this._createFragment();newViewer.appendChild(vGrid);visorHor.appendChild(newViewer);this._elL=parentGrid.querySelector("div.left-controls");this._elR=parentGrid.querySelector("div.right-controls");this._portletGrid=vGrid;this._portletVisor=parentGrid.querySelector(".visorHoritzontal");this._portletControls=parentGrid.querySelector(".visorControls");var portletGrid=this._portletGrid;var structure=this;var funCalcDelta=this._calcDelta;var funMove=this._move;this._elL.addEventListener("click",function(event){var delta=funCalcDelta(portletGrid);funMove(portletGrid,delta,false,structure);event.preventDefault()});this._elR.addEventListener("click",function(event){var delta=funCalcDelta(portletGrid);funMove(portletGrid,delta,true,structure);event.preventDefault()})},init:function(){this._createControls();this._setVisibilityLeftRight();return true}};_data.init()}$(function(){$("#navegacio-seccio .menulist > li > input.openclose").click(function(){$("#navegacio-seccio .menulist > li > input.openclose:checked:not([id="+$(this).attr("id")+"])").prop("checked",false)});var x=document.querySelectorAll(".uib-grid-noticies.Grid");for(var i=0;i<x.length;i++){ViewerNetflix(x[i])}});