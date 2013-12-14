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

define(['d3'], function(d3) {
    console.log(d3);

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non\
    risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies\
    sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,\
    semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,\
    enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis\
    arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque\
    congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum\
    augue. Praesent egestas leo in pede. Praesent blandit odio eu enim.\
    Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in\
    faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac\
    mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam\
    sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi.\
    Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius,\
    ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros\
    vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur\
    aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas.\
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non\
    mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam\
    faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat.\
    Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et\
    tristique ligula justo vitae magna. Aliquam convallis sollicitudin purus.\
    Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac\
    euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo.\
    Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet.\
    Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla\
    tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis\
    magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu\
    amet."
    var words = lorem.split(' ');

    var nb_paragraphs = 5;
    var nb_words = 25;



    function generateData(nb_paragraphs) {
        var data = [];

        for (var i = 0 ; i < nb_paragraphs ; i++) {
            var start = i * nb_words;
            data.push(words.slice(start, start + nb_words));
        }

        return data;
    }

    function update(data) {
        var paragraphs = d3.select('#text').selectAll('p')
            .data(data);

        paragraphs.enter()
          .append('p');

        paragraphs.text(function (d) { return d.join(' ') });

        paragraphs.exit().remove();
    }

    var input_p = document.getElementById('p');
    input_p.addEventListener('change', function onEditP(evt) {
        evt.preventDefault();
        nb_paragraphs  = parseInt(this.value);
        update(generateData(nb_paragraphs));
    });

    var input_w = document.getElementById('w');
    input_w.addEventListener('change', function onEditW(evt) {
        evt.preventDefault();
        nb_words  = parseInt(this.value);
        update(generateData(nb_paragraphs));
    });

    update(generateData(nb_paragraphs));
});
