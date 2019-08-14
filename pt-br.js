// numeral.js locale configuration
// locale : portuguese brazil (pt-br)
// author : Ramiro Varandas Jr : https://github.com/ramirovjr

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    
}));
