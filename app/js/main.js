$(document).ready(function() {

    var
        toggleLanguage = $('.header__down-icon--js'),
        menuLanguageChoice = $('.header__language-choice-menu'),
        menuLanguageChoiceToggle = 'header__toggle-menu--js',
        langugeDefault = $('.header__language-choice--default'),
        languageChosen = $('.header__language-choice'),
        toggleSearch = $('.header__search-icon'),
        toggleSearchHide = 'header__search-icon--hide',
        formSearch = $('.header__search-field');
        buttonSearch = $('.header__search-btn');
        buttonSearchShow = 'header__search-btn--show';


    toggleLanguage.click(function() {

        menuLanguageChoice.addClass(menuLanguageChoiceToggle);

        languageChosen.click(function(event) {
            langugeDefault.text($(event.target).attr('data-lang'));
            menuLanguageChoice.removeClass(menuLanguageChoiceToggle);
        });
    });

    toggleSearch.click(function() {
        formSearch.focus();
        toggleSearch.addClass(toggleSearchHide);
        buttonSearch.addClass(buttonSearchShow);

        formSearch.focusout(function() {
            buttonSearch.removeClass(buttonSearchShow);
            toggleSearch.removeClass(toggleSearchHide);
        });

    });
});
