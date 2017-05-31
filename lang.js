$(function() {
    var defaultLang = "es";
    var languages = {
        "es": {
            HELLO_LABEL: "Hola Mundo!"
        },

        "en": {
            HELLO_LABEL: "Hello World"
        }
    };
    
    translate(defaultLang);

    function translate(lang) {
        $('[data-translate]').each(function() {
            $(this).text(languages[lang][$(this).data('translate')]);
        });
    }

    $('.lang').click(function(e) {
        e.preventDefault();
        var lang = $(this).data('lang');
        translate(lang);
    });
});
