var url = window.location.href;
var hostname = window.location.hostname;
var website = "www.youtube.com";
var replaced = "img.youtube.com";
var split = url.split("=");
var videoID = split.pop();
if(hostname == website){
	var redir = "http://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg";
	window.open(redir, "Thumbnail for " + videoID, "width=1280, height=720");
}
else alert("Not " + website);


//A simple YouTube thumbnail grabber that displays the maximum resolution for the thumbnail in a popup
//Compatable in browser console as well as a bookmarklet
//Copyright July 27, 2019 Joseph Still
//thetechconspiracy@outlook.com
//Based on my "Explain this XKCD" bookmarklet