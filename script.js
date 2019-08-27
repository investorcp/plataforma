$(function() {
    var check = $.cookie('logado');
    if (check != "true") {
        window.location.replace("http://plataforma.grupoinvestor.com/login.html");
    }
});

$("body").delegate("#newPropose", "click", function() {
    navegar("novaProposta")
})

$(function() {
    var url = window.location.href
    var htt = url.split(":")
    var ht0 = (htt[1]).split(".")
    if (htt[0] == "http" && ht0[0] == "//plataforma") {
        var u0 = url.replace("http", "https")
        window.location.href = u0
    }
})

function hideAlert(event) {
    $($(event.target).parent(".alerta")).fadeOut(500)
    return false
}

function alerta(texto, bad, sec) {

    var sec0 = 3000
    if (sec) { sec0 = sec * 1000 }

    var txt = `<div class="alerta"><div class="texto">${texto}</div> <spam class="dispensar" onclick="return hideAlert(event)">Dispensar</spam></div>`
    var al = $(txt)
    $("body").append(al)
    var time = setTimeout(function() {
        $(al).fadeOut(500)
        $("body").remove(al)
    }, sec0)
    $(al).on("click", function() {
        clearTimeout(time)
        time = setTimeout(function() {
            $(al).fadeOut(500)
            $("body").remove(al)
        }, sec0)
    })
    if (bad) {
        $(".alerta").css("background-color", "rgba(226, 66, 66, 0.8)")
        $(".alerta").css("border-color", "rgba(226, 66, 66, 1)")
    }
}

function addFun() {
    $("body").delegate(".nav-link, .acc-link", "click", function(event) {
        var btn = $(event.target).attr("icp-link")
        window.open(btn, "_self")
    })
}

$("#proposta").on("click", function() {
    $.get("src/components/proposta/proposta.html", function(data) {
        $("#body").html(data)
    })
})

$(function() {
    $.get("navbar.html", function(data) {
        $("#nav").html(data)
        addFun()
    }).fail(function() {
        $.get("../navbar.html", function(data) {
            $("#nav").html(data)
            addFun()
        })
    })
})

$(function() {
    $('.reais').on("change", function() {
        $('.reais').each(function(x) {
            if ($('.reais')[x].value != "") {
                $('.reais')[x].value = numeral($('.reais')[x].value).format('$0,0.00')
            }
        })
    })
})


$(function() {

})

$(function() {
    $('.input-data').datepicker({
        format: 'dd/mm/yyyy'
    });
});

$(function() {
    let data = new Date()
    let ano = data.getFullYear() - 1
    let lAno = ano - 2
    let frase = lAno + " à " + ano
    $('.ultimos3anos').val(frase)
});


(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function(numeral) {
    numeral.register('locale', 'pt-br', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mil',
            million: 'milhões',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            return 'º';
        },
        currency: {
            symbol: 'R$'
        }
    });
}));

function logout() {
    $.removeCookie('logado');
    $.removeCookie('nome');
    $.removeCookie('setor');
    $.removeCookie('cargo');
    location.reload();
}



function nomeuser() {
    $(".nomeUsuario").each(function(x) {
        $($(".nomeUsuario")[x]).html($.cookie('nome'))
    })
}

function preenchidoUs() {
    var bu = true
    $(".nomeUsuario").each(function(x) {
        bu = bu && ($($(".nomeUsuario")[x]).html() != "")
        console.log("dentro de preen " + bu)
    })
    return bu
}
$(function() {
    var time = setInterval(() => {
        nomeuser()
        console.log("aaa")
        console.log($.cookie('nome'))
    }, 100);
    if (preenchidoUs()) {
        clearInterval(time)
    }
})