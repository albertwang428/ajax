function cssmanger(tag,theclass){
	var headers=document.getElementsByTagName("tr");
	for(var i=0;i<headers.length;i++){
		addclass(headers[i],theclass);
	}
}
function addclass(element,value){
	if(!element.style){
		element.className=value;
	}
	var x=element.className;
	x+=" ";
	x+=value;
	element.className=x;
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

addLoadEvent(function(){
	cssmanger("th","intro");
})
