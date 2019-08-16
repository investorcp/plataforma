function addScript(url) {
    var script = document.createElement('script')
    script.src = url
    script.type = 'text/javascript'
    document.getElementsByTagName('head')[0].appendChild(script)
}

function addCSS(url) {
    var css = document.createElement('link')
    css.rel='stylesheet'
    css.href = url
    document.getElementsByTagName('head')[0].appendChild(css)
}

addCSS('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css')
addCSS('https://cdnjs.cloudflare.com/ajax/libs/datepicker/0.6.5/datepicker.css')
addCSS('style.css')
addScript('https://unpkg.com/axios/dist/axios.min.js')
addScript('https://code.jquery.com/jquery-3.3.1.min.js')
addScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js')
addScript('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js')
addScript('https://kit.fontawesome.com/bdaea6cd67.js')
addScript('https://cdnjs.cloudflare.com/ajax/libs/datepicker/0.6.5/datepicker.js')
addScript('https://cdnjs.cloudflare.com/ajax/libs/inputmask/4.0.8/inputmask/bindings/inputmask.binding.min.js')

$("body").delegate("#newPropose", "click", function () {
    navegar("novaProposta")
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
    })
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