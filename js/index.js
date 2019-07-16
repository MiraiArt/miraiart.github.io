$('.search-page').on('input',(e) => {

    var _input = $(e.currentTarget);
    var inputValue = _input.val().toLowerCase();

    if (!inputValue){
        $('#frameworkSidenav .sidenav-body .sidenav-item').removeAttr('style');
        $('.search-container').remove();
        return;
    }

    if(!$('.search-container')[0]){
        var searchContainer = $('<div class="search-container"></div>');
        searchContainer.css('display', 'inline');

        $('#frameworkSidenav .sidenav-body .sidenav-menu').append(searchContainer);
        searchContainer.append($('#frameworkSidenav .searcheable').clone(true).removeClass('searcheable'));
        searchContainer.find('.sidenav-link').removeClass('sidenav-link').addClass('sidenav-submenu-link');

        $('#frameworkSidenav .sidenav-body .sidenav-item:not(.input-search-container)').removeAttr('style').css('display', 'none');
    }

    $('#frameworkSidenav .search-container li').filter(function () {
        $(this).toggle($(this).find('a').text().toLowerCase().indexOf(inputValue) > -1)
    });

});