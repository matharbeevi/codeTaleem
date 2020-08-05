// JavaScript Document

var init = function () {
	'use strict';

    if (navigator.appVersion.indexOf('Win')!=-1) {
            document.getElementById('container').classList.add('windows');
		}
    
        if (navigator.userAgent.indexOf('Trident')!=-1){
            /*document.getElementById('container').classList.add('ie');   */
        }
    
        if (window.navigator.userAgent.indexOf("Mac")!=-1){
			/*if (window.navigator.userAgent.indexOf("Firefox")!=-1){
				console.log("Mac + Firefox");
				document.getElementById('container').className += "macFir";
				//piLinkA.className += " piLinkMoxAlign";
			}*/
		}
    
	// VARIABLE DECLARATION
	var main_bg = document.getElementById('main_bg'),
		eyebrow = document.getElementById('eyebrow'),
		frame1_copy = document.getElementById('frame1_copy'),
		frame2_copy = document.getElementById('frame2_copy'),
		frame3_copy = document.getElementById('frame3_copy'),
		frame4_copy = document.getElementById('frame4_copy'),
		frame5_copy = document.getElementById('frame5_copy'),
		final_bg = document.getElementById('final_bg'),
		final_logo = document.getElementById('final_logo'),
		cta = document.getElementById('cta'),
		ctaPatch = document.getElementById('ctaPatch'),
		lastBg = document.getElementById('last_bg'),
		section2 = document.getElementById('section2'),
		expand = document.getElementById('expand'),
		piLink = document.getElementById('piLink'),
		cScrollbar;

	// ANIMATION
	setTimeout(function () {
		main_bg.setAttribute('class', "fadeIn");
		eyebrow.setAttribute('class', "fadeIn");
		frame1_copy.setAttribute('class', "fadeIn");
		section2.setAttribute('class', "fadeIn");
	}, 0);	
	setTimeout(function () {
		frame2_copy.setAttribute('class', "fadeIn");
		final_logo.setAttribute('class', "fadeIn0");
		cta.setAttribute('class', "fadeIn0");
		final_bg.setAttribute('class', "fadeIn0");
	}, 1500);
	//return;	
	setTimeout(function () {
		frame3_copy.setAttribute('class', "move_top fadeIn");
		final_bg.setAttribute('class', "fadeIn0 move_top");
		final_logo.setAttribute('class', "fadeIn0 move_top");
		cta.setAttribute('class', "fadeIn0 move_top");
		ctaPatch.setAttribute('class', "fadeIn");
	}, 2000);
	return;
	setTimeout(function () {
		frame3_copy.setAttribute('class', "fadeOut move_top");
	}, 7000);
	setTimeout(function () {		
		frame4_copy.setAttribute('class', "fadeIn");
	}, 7300);
	setTimeout(function () {		
		frame5_copy.setAttribute('class', "fadeIn");
	}, 9300);
    

	// EVENT LISTENER
	function createScrollBar() {
		var isDevice = false;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			isDevice = true;
		}
		cScrollbar = new IScroll(scrollableContent, {
			scrollbars: "custom",
			mouseWheel: !0,
			click: isDevice,
			interactiveScrollbars: !0,
			shrinkScrollbars: "scale"
		}), setTimeout(function () {
			cScrollbar.refresh()
		}, 300)
	}
//    document.getElementById('isiActionBtn').addEventListener('click',function(eve){
//            //console.log(eve.target.className.length);
//            if(!scrollableArea.className.length) {
//                scrollableArea.className = "expandContainer";
//                eve.target.innerHTML = '&minus; Collapse';
//                last_bg.setAttribute('class',"fadein");
//                section2.classList.add("expand");
//            }	else  {
//                last_bg.setAttribute('class',"fadeout");
//                scrollableArea.className = '';		
//                eve.target.innerHTML = '+ Expand';
//                section2.classList.remove("expand");
//            }
//            setTimeout(function() {
//                    cScrollbar.refresh();
//                }, 300);
//	   });

	createScrollBar();
};

window.onload = function () {
	init();
}