$("body").delegate("#newPropose", "click", function () {
    navegar("novaProposta")
})

$(function(){
    var url = window.location.href
    var htt = url.split(":")
    var ht0 = (htt[1]).split(".")
    if(htt[0]=="http"&&ht0[0]=="//plataforma"){
        var u0 = url.replace("http","https")
        window.location.href = u0
    }
})


function addFun() {
    $("body").delegate(".nav-link, .acc-link", "click", function (event) {
        var btn = $(event.target).attr("icp-link")
        window.open(btn, "_self")
    })
}

$("#proposta").on("click", function () {
    $.get("src/components/proposta/proposta.html", function (data) {
        $("#body").html(data)
    })
})

$(function () {
    $.get("navbar.html", function (data) {
        $("#nav").html(data)
        addFun()
    }).fail(function(){
        $.get("../navbar.html", function (data) {
            $("#nav").html(data)
            addFun()
        })
    })
})

$(function () {
    
})

$(function () {
    $('.input-data').datepicker({
        format: 'dd/mm/yyyy'
    });
});

$(function () {
    let data = new Date()
    let ano = data.getFullYear() - 1
    let lAno = ano - 2
    let frase = lAno + " à " + ano
    $('.ultimos3anos').val(frase)
});


(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
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
        ordinal: function (number) {
            return 'º';
        },
        currency: {
            symbol: 'R$'
        }
    });
}));