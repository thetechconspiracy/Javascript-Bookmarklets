var url = window.location.href;
var hostname = window.location.hostname;
var website = "xkcd.com";
var replaced = "explainxkcd.com";
if(hostname == "xkcd.com"){
	console.log("This is " + website);
	var redir = url.replace(website, replaced);
	window.location.href = redir;
}
else alert("Not " + website);


//Takes an XKCD, and redirects to the explainxkcd.com page for the comic
//Copyright July 27, 2019 Joseph Still
//thetechconspiracy@outlook.com