/*Due to the long nature of this code, I have decided to "precompile" the bookmarklet.  This does not include comments (They break bookmarklets), or console.log() statements (To reduce size)
*******REMEMBER TO UPDATE AS THE CODE CHANGES*************************************

http://javascriptcompressor.com/

javascript:var url=window.location.href;var hostname=window.location.hostname;var website="www.youtube.com";var replaced="img.youtube.com";var split=url.split("=");if(hostname==website){if(split.length==1)alert("Not a video");if(split[1].includes("&")){var subSplit=split[1].split("&");if(subSplit[0].length==11){openThumb(subSplit[0])}}else if(split[1].length==11)openThumb(split[1]);else alert("Something is likely broken!")}else alert("Not "+website);function openThumb(videoID){var redir="http://img.youtube.com/vi/"+videoID+"/maxresdefault.jpg";window.open(redir,"Thumbnail for "+videoID,"width=1280, height=720")}


*/

var url = window.location.href;
var hostname = window.location.hostname;
var website = "www.youtube.com";
var replaced = "img.youtube.com";
var split = url.split("=");
//var videoID = split.pop();
if(hostname == website){
	if(split.length == 1)
		alert("Not a video");
	console.log(split[1]);
	//Check for "&"
	if(split[1].includes("&")){//Multipart String
		//The video ID always is in the second split, just after the hostname part, with embed/playlist information coming after it
		console.log("Contains &");
		//Split, and check for length
		var subSplit = split[1].split("&");
		//For YouTube, Video ID will always be in the first part of subSplit, and is 11 characters
		if(subSplit[0].length == 11){//Video ID found
			openThumb(subSplit[0]);
		}
	}else if(split[1].length == 11)//Video ID found
		openThumb(split[1]);
	else alert("Something is likely broken!");
}
else alert("Not " + website);

function openThumb(videoID){
	var redir = "http://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg";
	window.open(redir, "Thumbnail for " + videoID, "width=1280, height=720");
}


//A simple YouTube thumbnail grabber that displays the maximum resolution for the thumbnail in a popup
//Compatable in browser console as well as a bookmarklet
//Copyright July 27, 2019 Joseph Still
//thetechconspiracy@outlook.com

//July 29, 2019 UPDATE:
//	Fixed functionality in playlists & following embed/youtu.be links
//Based on my "Explain this XKCD" bookmarklet

