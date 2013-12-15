var generator = generator || {};
var ui = ui || {};

(function(generator, ui) {
    "use strict";

    var nb_paragraphs = 5;
    var nb_words = 25;

    function showParagraphs() {
        var paragraphs = generator.generateParagraphs(nb_paragraphs, nb_words);
        ui.refresh(paragraphs);
    }
    showParagraphs();

    var input_p = document.getElementById('p');
    input_p.addEventListener('change', function onEditP(evt) {
        evt.preventDefault();
        nb_paragraphs  = parseInt(this.value, 10);
        showParagraphs();
    });

    var input_w = document.getElementById('w');
    input_w.addEventListener('change', function onEditW(evt) {
        evt.preventDefault();
        nb_words  = parseInt(this.value, 10);
        showParagraphs();
    });
})(generator, ui);
