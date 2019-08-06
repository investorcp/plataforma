   $("body").delegate("#newPropose", "click", function() {
       navegar("novaProposta")
   })

   $("body").delegate("#newClient", "click", function() {
       navegar("novoCliente")
   })

   $("#cliente").on("click", function() {
       $.get("src/components/Clientes/clientes.html", function(data) {
           $("#body").html(data)
       })
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