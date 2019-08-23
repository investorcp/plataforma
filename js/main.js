
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;
		var usuario = $(input[0]).val();
		var senha = $(input[1]).val();
		var endlogin = 'https://script.google.com/macros/s/AKfycbwaw20aQLJAlPmcLV2IH9fo8HQvXBAzjRJ_3ORodHU5zLFiIYs/exec?usuario=' + usuario + '&senha=' + senha;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
		if(check==true) {
			$.getJSON(endlogin, function(data) {
				if(data['auth']==true) {
					//Cookies.set('logado', 'true');
					$.cookie('logado', "true");
					$.cookie('nome',data['nome']);
					$.cookie('setor',data['setor']);
					$.cookie('cargo',data['cargo']);
					//Redireciona para a pagina principal
					window.location.replace("https://plataforma.grupoinvestor.com/");
					
				} else {
					console.log("login invalido");
					$(".error").text("Login Inválido");
				}
			});			
		}
        return false;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
	
	
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('fa-eye');
            $(this).find('i').addClass('fa-eye-slash');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').removeClass('fa-eye-slash');
            $(this).find('i').addClass('fa-eye');
            showPass = 0;
        }
        
    });
    

})(jQuery);