$(function() {
    var defaultLang = "es"; // Define default language
  
    $.getJSON('/lang.json', function( data ) { // Replace lang.json by your own url language json file.
        var languages = data;
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
});
