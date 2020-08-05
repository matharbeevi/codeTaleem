// JavaScript Document
cloneISIForQA();

function cloneISIForQA() {
	document.body.innerHTML += "<div id='clonedISIForQA'><a href='#' id='toggleISI'>CLICK TO TOGGLE ISI CONTENT</a><p>This ISI is exported directly from the HTML, it is identical to the docked ISI text in the scrolling window. Please take screenshots below the divider line.</p><div id='clonedISI'></div></div>";		
	document.getElementById('toggleISI').addEventListener('click', function(){
	var clonedISI = document.getElementById('clonedISI');
	var clonedISIForQA = document.getElementById('clonedISIForQA');
		if(!clonedISI.innerHTML.length) {
				var isiCont = document.getElementById('scrollableArea').cloneNode(true);
				isiCont.id = "clonedScrollableArea";
				clonedISI.appendChild(isiCont);								
		}
		else 
			clonedISI.innerHTML = "";
	});	
}