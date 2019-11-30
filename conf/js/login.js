function showModal(){
	let fra = document.getElementById("modal");
	let modal_list = fra.children;
	for(let i=0;i<modal_list.length;i++){
		modal_list[i].classList.remove("hide");
	}
}
function hideModal(){
	let fra = document.getElementById("modal");
	let modal_list = fra.children;
	for(let i=0;i<modal_list.length;i++){
		modal_list[i].classList.add("hide");
	}
}
function resetAll(){
	let tags = document.getElementsByClassName("inputbox");
	for(var i=0;i<tags.length;i++){
		tags[i].value = "";
	}
}
function log_in(){
	let usr = "julian";
	let pword = "123";
	let username = document.getElementById("user").value;
	let passwd = document.getElementById("pwd").value;
	if(username===usr && passwd===pword){
		window.open("bin/backpage.html")
	}else{
		document.getElementById("pwd").value = "";
		alert("用户名或密码错误！");
	}
}
