numeral.locale('pt-br')
$(function() {
    addForm()
})

$("#acessarproposta").on("click", function() {
    window.open($("#acessarproposta").attr("link"))
})
$("#acessarpdf").on("click", function() {
    window.open($("#acessarpdf").attr("link"))
})

function addForm() {
    var d0 = $.cookie('clienteData')
    var d1 = JSON.parse(d0)
    var cliente = d1.dados
    window.dadosCliente = cliente
    $("#razaosocial").val(cliente[1])
    $("#nomefantasia").val(cliente[2])
    $("title").append(" - " + cliente[2])
    $("#cnpj").val(cliente[3])
    $("#nomecliente").val(cliente[4])
    $("#nomeavaliada, .nomeavaliada").val(cliente[5])
    $("#telefone").val(cliente[6])
    $("#email").val(cliente[7])
    $("#site").val(cliente[8])
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function camposReq() {
    $("[required]").each(function(x) {
        var abc = $($($("[required]")[x]).prev())
        $(abc).html($(abc).html() + "*")
    })
}

$(camposReq())


// Autocomplete Google Address
function initialize() {
    $(".endereco").each(function(x) {
        var input = $($(".endereco")[x])[0]
        new google.maps.places.Autocomplete(input);
    })
}
google.maps.event.addDomListener(window, 'load', initialize);

$(function() {
    $('.input-data').datepicker({
        format: 'dd/mm/yyyy'
    });
});

$(function() {
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth() + 1
    var ano = data.getFullYear()
    if (dia.toString().length != 2) {
        dia = "0" + dia.toString()
    }
    if (mes.toString().length != 2) {
        mes = "0" + mes.toString()
    }
    $('.hoje').val(dia + "/" + mes + "/" + ano)

    function codSeq(a) {
        var cid = a[0][0].toString()
        var seq = a[0][1].toString()
        var ano = a[0][2].toString()
        if (cid.length != 2) {
            cid = "0" + cid
        }
        while (seq.length != 4) {
            seq = "0" + seq
        }
        var data = cid + seq + ano
        $('#codigoproposta').val(data)
    }

    function failure() {
        alert("Não foi possível recuperar o código da proposta.")
    }

    var url = "https://script.google.com/macros/s/AKfycbx9wDkstPLn8aS06N4iMMuE6ItVEBG_ZEv4ayh-92jrEpCtA9A0/exec?key=123&user=ninguem&func=getProp"

    $.getJSON(url, function(data) {
        var dados = data.cod
        codSeq(dados)
    }).done(function() {}).fail(function() {
        failure(e)
    })
})

function erroNaProposta(e) {

    var url = "https://script.google.com/macros/s/AKfycbx9wDkstPLn8aS06N4iMMuE6ItVEBG_ZEv4ayh-92jrEpCtA9A0/exec?key=123&user=ninguem&func=erroSalvar&array1=" + e

    $.getJSON(url, function(data) {
        var message = `Um email foi enviado para o Setor de Tecnologia da Investor.\nPor favor, entre em contato para gerar a proposta.`
        console.log(message)
        alerta(message, true, 8)
    }).done(function() {}).fail(function() {
        console.error(e)
    })
}

function whichMon(a) {
    var m = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    var r = m[(a - 1)]
    return r
}

function getDataForm(id) {
    var form = $(id)[0]
    var n = form.length
    var array1 = [
        [],
        []
    ]
    var obj1 = {}

    for (i = 0; i < n; i++) {
        obj1[$(form[i]).attr("id")] = $(form[i]).val()
    }

    if (obj1["margemdelucro"]) {
        var ml = obj1["margemdelucro"]

        var m1 = ml.replace("%", "")
        ml0 = parseFloat(ml) / 100
        obj1["margemdelucro"] = ml0
    }

    var obj2 = JSON.stringify(obj1)

    return obj2
}

$(function() {
    $('#impostos').on("change", function() {
        let val = $('#impostos').val()
        let imp = $('#resultadoimposto')
        if (val == "com") {
            imp.html("Os honorários descritos acima são líquidos de PIS (0,65%), COFINS (3,0%) e ISS (5%). Portanto, a empresa contratante pagará à Investor o valor bruto dos serviços.")
        } else {
            imp.html("Os referidos honorários abrangem todos os tributos (impostos, taxas, emolumentos, contribuições fiscais e parafiscais).")
        }
    })
})