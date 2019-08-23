$(function() {
	var check = $.cookie('logado');
	if (check!="true")
	{
		window.location.replace("http://plataforma.grupoinvestor.com/login.html");
		
	}	
});


function logout() {
	$.removeCookie('logado');
	$.removeCookie('nome');
	$.removeCookie('setor');
	$.removeCookie('cargo');
	location.reload();
}