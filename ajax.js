function getText()
{
	var request=new XMLHttpRequest();
	if(request){
	request.open("GET","example.txt",true);
	request.onreadystatechange=function()
	{
	if(request.readyState==4)
		{
		alert(request.responseText);

		var p=document.createElement("p");
		var txt=document.createTextNode(request.responseText);
		p.appendChild(txt);
		document.getElementById("ajax").innerHTML=request.responseText;
		//var ajax=document.getElementById("ajax");
		document.body.appendChild(p);
		}
	}
	request.send(null);
	}
	else{
		alert("Sorry,you are not permitted to use this shit!")
	}
}
window.onload=getText;