document.getElementById("skin").addEventListener("click",function(){
	var bg = document.getElementById("content-wrapper");
	bg.style.backgroundColor = "#FFD9EC";
	document.cookie = "backgroundColor=#FFD9EC"

	var border = document.getElementById("body-menu");
	border.style.borderColor = "#FFD9EC";
	document.cookie = "borderColor=#FFD9EC"

	var index = document.getElementById("index");
	index.style.backgroundColor = "#FFD9EC";
	document.cookie = "backgroundColor=#FFD9EC";

	localStorage.theme = "#FFD9EC";
})

window.onload = function(){
	var theme = localStorage.theme ||"";
	if (theme) {
		var bg = document.getElementById("content-wrapper");
		bg.style.backgroundColor = "#FFD9EC";

		var border = document.getElementById("body-menu");
		border.style.borderColor = "#FFD9EC";

		var index = document.getElementById("index");
		index.style.backgroundColor = "#FFD9EC";
	}
}