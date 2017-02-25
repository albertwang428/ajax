function highlight(){
	var rows=document.getElementsByTagName("tr");
	for(var i=0;i<rows.length;i++){
		rows[i].onmouseover=function(){
			this.style.fontWeight="bold";
		}
		ows[i].onmouseout=function(){
			this.style.fontWeight="normal";
		}
	}
}
function addLoadEvent(newLoad){
	var oldload=window.onload;
	if(typeof oldload!="function")
	{
		window.onload=newLoad;
	}
	else window.onload=function(){
		oldload();
		newload();
	}
}

addLoadEvent(highlight);