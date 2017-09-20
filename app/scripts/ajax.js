
window.onload = function(){
	var r = document.getElementById("cidade");
	document.getElementById("ajax").onclick = function(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
    	if (ajax.readyState == 4) {
    		alert('A Requisição chegou!');
    		var xml = ajax.responseXML;
    		var url = xml.getElementsByTagName("url")[0].firstChild.nodeValue;
    		r.appendChild(document.createTextNode(ajax.responseXML));
    	}
    }
  
    ajax.open("POST", "http://www.webservicex.net/cashflow.asmx?WSDL");
    ajax.send(null);
    return false;

	}
}