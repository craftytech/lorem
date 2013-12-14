requirejs.config({
    baseUrl: './js',
    paths: {
        'd3': 'libs/d3'
    },
    shim: {
        d3: {
            exports: 'd3'
        }
    }
});

define(['lorem/generator', 'lorem/ui'], function(generator, ui) {

    var nb_paragraphs = 5;
    var nb_words = 25;

    function showParagraphs() {
        paragraphs = generator.generateParagraphs(nb_paragraphs, nb_words);
        ui.refresh(paragraphs);
    }
    showParagraphs();

    var input_p = document.getElementById('p');
    input_p.addEventListener('change', function onEditP(evt) {
        evt.preventDefault();
        nb_paragraphs  = parseInt(this.value);
        showParagraphs();
    });

    var input_w = document.getElementById('w');
    input_w.addEventListener('change', function onEditW(evt) {
        evt.preventDefault();
        nb_words  = parseInt(this.value);
        showParagraphs();
    });
});
