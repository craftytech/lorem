define(['d3'], function(d3) {

    return {
        /**
         * Displays paragraphs on ui
         *
         * Takes an array of paragraphs, and put them in <p> tags.
         */
        refresh: function(data) {
            var paragraphs = d3.select('#text').selectAll('p')
                .data(data);

            paragraphs.enter()
              .append('p');

            paragraphs.text(function (d) { return d; });

            paragraphs.exit().remove();
        }
    };
});
