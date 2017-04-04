$(document).ready(function() {

    var
        toggleLanguage = $('.header__down-icon--js'),
        menuLanguageChoice = $('.header__language-choice-menu--js'),
        langugeDefault = $('.header__language-choice--default');
        languageChosenRu = $('.header__language-choice--ru');
        languageChosenUkr = $('.header__language-choice--ukr');
        languageChosenEng = $('.header__language-choice--eng');



    toggleLanguage.click(function() {
        menuLanguageChoice.show('slow');

        languageChosenRu.click(function() {
            $(langugeDefault).text('рус');
            menuLanguageChoice.hide('slow');
        });

        languageChosenUkr.click(function() {
            $(langugeDefault).text('укр');
            menuLanguageChoice.hide('slow');
            toggleLanguage.show('slow');
            langugeDefault.show('slow');

        });

        languageChosenEng.click(function() {
            $(langugeDefault).text('eng');
            menuLanguageChoice.hide('slow');
            toggleLanguage.show('slow');
            langugeDefault.show('slow');

        });


    });

});
