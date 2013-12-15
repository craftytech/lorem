var generator = generator || {};
var ui = ui || {};

(function(generator, ui) {
    "use strict";

    var nb_paragraphs = 5;
    var p_size = 1.0;

    function showParagraphs() {
        var paragraphs = generator.generateParagraphs(nb_paragraphs, p_size);
        ui.refresh(paragraphs);
    }
    showParagraphs();

    var input_p = document.getElementById('p');
    input_p.addEventListener('change', function onEditP(evt) {
        evt.preventDefault();
        nb_paragraphs  = parseInt(this.value, 10);
        showParagraphs();
    });

    var radio_w = document.getElementById('w').getElementsByTagName('input');
    var onEditW = function(evt) {
        evt.preventDefault();
        p_size  = parseFloat(this.value, 10);
        showParagraphs();
    };
    for (var i = 0 ; i < radio_w.length ; i++) {
        radio_w[i].addEventListener('change', onEditW);
    }
})(generator, ui);
