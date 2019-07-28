var url=window.location.href;
var hostname= window.location.hostname;
var website = "www.reddit.com";
var replaced = "www.removeddit.com";
if(hostname == website){
	console.log("This is " + website);
	var redir = url.replace(website, replaced);
	window.location.href = redir;
}
else alert("Not " + website);