$(document).ready(function() {

    var
        toggleLanguage = $('.header__down-icon--js'),
        menuLanguageChoice = $('.header__language-choice-menu'),
        menuLanguageChoiceToggle = 'header__toggle-menu--js',
        langugeDefault = $('.header__language-choice--default'),
        languageChosen = $('.header__language-choice'),
        toggleSearch = $('.header__search-icon'),
        formSearch = $('.header__search-field');


    toggleLanguage.click(function() {

        menuLanguageChoice.addClass(menuLanguageChoiceToggle);

        if (menuLanguageChoice.hasClass(menuLanguageChoiceToggle)) {

            languageChosen.click(function() {

                if ($(this).data('lang') === 'ru') {
                    langugeDefault.text('руc');

                } else if ($(this).data('lang') === 'eng') {
                    langugeDefault.text('eng');

                } else {
                    langugeDefault.text('укр');
                }

                menuLanguageChoice.removeClass(menuLanguageChoiceToggle);

            });

        }
    });

    toggleSearch.click(function() {

        formSearch.focus();

    });

});


