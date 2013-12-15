define(function() {
    var prefix = 'Lorem ipsum dolor sit amet. ';

    // Random words used to dynamically generate latin words
    var lorem_words = [ 'aenean', 'aliquam', 'cras', 'cum', 'curabitur',
        'curae', 'donec', 'duis', 'etiam', 'fusce', 'in', 'integer',
        'interdum', 'lorem', 'maecenas', 'mauris', 'morbi', 'nam', 'nulla',
        'nullam', 'nunc', 'pellentesque', 'phasellus', 'praesent', 'proin',
        'quisque', 'sed', 'suspendisse', 'ut', 'vestibulum', 'vivamus', 'a',
        'ac', 'accumsan', 'adipiscing', 'aliquam', 'aliquet', 'amet', 'ante',
        'arcu', 'at', 'auctor', 'augue', 'bibendum', 'blandit', 'commodo',
        'condimentum', 'congue', 'consectetur', 'consequat', 'convallis',
        'cubilia', 'cursus', 'dapibus', 'diam', 'dictum', 'dictumst',
        'dignissim', 'dis', 'dolor', 'dui', 'egestas', 'eget', 'eleifend',
        'elementum', 'elit', 'enim', 'erat', 'eros', 'est', 'et', 'eu',
        'euismod', 'facilisi', 'facilisis', 'fames', 'faucibus', 'felis',
        'fermentum', 'feugiat', 'fringilla', 'gravida', 'habitant',
        'habitasse', 'hac', 'hendrerit', 'iaculis', 'id', 'imperdiet', 'in',
        'interdum', 'ipsum', 'justo', 'lacinia', 'lacus', 'laoreet', 'lectus',
        'leo', 'libero', 'ligula', 'lobortis', 'lorem', 'luctus', 'magna',
        'magnis', 'malesuada', 'massa', 'mattis', 'mauris', 'metus', 'mi',
        'molestie', 'mollis', 'montes', 'morbi', 'mus', 'nascetur', 'natoque',
        'nec', 'neque', 'netus', 'nibh', 'nisi', 'nisl', 'non', 'nulla',
        'nunc', 'odio', 'orci', 'ornare', 'parturient', 'pellentesque',
        'penatibus', 'pharetra', 'placerat', 'platea', 'porta', 'porttitor',
        'posuere', 'potenti', 'pretium', 'primis', 'pulvinar', 'purus', 'quam',
        'quis', 'rhoncus', 'ridiculus', 'risus', 'rutrum', 'sagittis',
        'sapien', 'scelerisque', 'sed', 'sem', 'semper', 'senectus', 'sit',
        'sociis', 'sodales', 'sollicitudin', 'suscipit', 'tellus', 'tempor',
        'tempus', 'tincidunt', 'tortor', 'tristique', 'turpis', 'ullamcorper',
        'ultrices', 'ultricies', 'urna', 'ut', 'varius', 'vehicula', 'vel',
        'velit', 'venenatis', 'vestibulum', 'vitae', 'viverra', 'volutpat',
        'vulputate'];

    var words = {'min': 3, 'max': 8};
    var sections = {'min': 2, 'max': 4};
    var sentences = {'min': 4, 'max': 6};

    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var getRandomNbWords = function() {
        return getRandom(words.min, words.max);
    };

    var getRandomNbSections = function() {
        return getRandom(sections.min, sections.max);
    };

    var getRandomNbSentences = function() {
        return getRandom(sentences.min, sentences.max);
    };

    var generateSection = function() {
        var nb_words = getRandomNbWords();
        var words = [];
        for (var i = 0 ; i < nb_words ; i++) {
            var word = lorem_words[Math.floor(Math.random() * lorem_words.length)];
            words.push(word);
        }

        return words.join(' ');
    };

    var generateSentence = function() {
        var nb_sections = getRandomNbSections();
        var sections = [];
        for (var i = 0 ; i < nb_sections ; i++) {
            var section = generateSection();
            sections.push(section);
        }

        var sentence = sections.join(', ') + '.';
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    };

    var generateParagraph = function() {
        var nb_sentences = getRandomNbSentences();
        var sentences = [];
        for (var i = 0 ; i < nb_sentences ; i++) {
            var sentence = generateSentence();
            sentences.push(sentence);
        }

        return sentences.join(' ');
    };

    return {

        /**
         * Generates an array of paragraphs.
         *
         * Returns an array of strings.
         */
        generateParagraphs: function(nb_paragraphs) {
            var paragraphs = [];

            for (var i = 0 ; i < nb_paragraphs ; i++) {
                var paragraph = generateParagraph();
                paragraphs.push(paragraph);
            }

            // Always start by "Lorem ipsum..."
            paragraphs[0] = prefix + paragraphs[0];

            return paragraphs;
        }
    };
});
