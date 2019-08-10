
(function ($) {

    $.fn.MA_Sidenav = function (options) {

        var defaults = {
        
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'sidenav');
    };

    $.fn.MA_imgZoom = function (options) {

        if (typeof options === 'string') {

            var settings = options;

        } else {

            var defaults = {
                imgZoomContainerClass: '',
                imgZoomWidgetClass: '',
                imgZoomSliderClass: '',
                imgItemSlideClass: '',
                imgItemWrapperClass: '',
                imgItemDescriptionClass: '',
                button: {
                    arrowLeft: {
                        name: 'Prev',
                        class: 'bg-blue',
                    },
                    arrowRight: {
                        name: 'Next',
                        class: 'bg-blue',
                    },
                    close: {
                        name: 'Close',
                        class: 'bg-blue',
                    }
                }
            };

            var settings = $.extend({}, defaults, options);

        }


        initPlugin(this, settings, 'imgZoom');
    };

    $.fn.MA_tabs = function (options) {

        var defaults = {
            
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'tabs');
    };

    $.fn.MA_ScrollTop = function (options) {

        var defaults = {

        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'scrollTop');
    };

    $.MA_Toast = function (options) {

        var defaults = {
            message: '',
            class: '',
            icon: '',
            duration: 3000,
            transitionDuration: 500,
           /*  toastClose: {
                class: '',
                name: '',
            } */
           /* ,toastBtn: {
                href: '',
                class: '',
                name: '',
                action: function () { }
            } */ 
        };
        
        var settings = $.extend({}, defaults, options);
        initPlugin(null, settings, 'toast');
    };

    $.fn.MA_Modal = function (options) {

        if (typeof options === 'string'){

            var settings = options;

        }else{

            var defaults = {
                transitionDuration: 500,
            };
            var settings = $.extend({}, defaults, options);

        }
        
        initPlugin(this, settings, 'modal');
    };

    $.MA_Alert = function (options) {

        var defaults = {
            message: '',
            title: '',
            icon: '',
            classContainer: '',
            classBackground: '',
            classAlert: '',
            classHead: '',
            classBody: '',
            classFoot: '',
            transitionDuration: 500,
            backgroundClose: false,
            closeIcon: '<i class="fas fa-times" ></i>',
            closeBtn: false,
            buttons: {}
            /* buttons: {
                btnClose: {
                    href: 'fesfesfes.html',
                    class: '',
                    name: '',
                    action: function name() {

                    }
                }
            } */
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(null, settings, 'alert');
    };

    $.fn.MA_Checkbox = function (options) {

        var defaults = {
            
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'checkbox');
    };

    $.fn.MA_Radiobox = function (options) {

        var defaults = {

        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'radiobox');
    };

    $.fn.MA_Switch = function (options) {

        var defaults = {

        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'switch');
    };

    $.fn.MA_Select = function (options) {

        var defaults = {
            btnClass: '',
            inputClass: '',
            menuClass: '',
            search: false
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'select');
    };

    $.fn.MA_Tooltip = function (options) {

        var defaults = {
            transitionDuration: 500,
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'tooltip');
    };

    $.fn.MA_Accordion = function (options) {

        var defaults = {
            transitionDuration: 200,
            closeOtherItem: false
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'accordion');
    };

    $.fn.MA_InputCount = function (options) {

        var defaults = {
            maxLength: 200
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'inputCount');
    };

    $.fn.MA_InputFile = function (options) {

        var defaults = {
            onlyButton: false,
            btnClass: '',
            btnName: 'Choose file',
            inputClass: '',
            btnPosition: 'left'
        };

        var settings = $.extend({}, defaults, options);
        initPlugin(this, settings, 'inputFile');
    };

    $.fn.MA_Progress = function (options) {

        if (typeof options === 'string') {

            var settings = options;

        } else {

            var defaults = {
                transitionDuration: 500,
                startAt: '0%',
                endAt: '100%',
                hideAtEnd: true,
                onStart: function () { },
                onEnd: function () { }
            };

            var settings = $.extend({}, defaults, options);

        }

        initPlugin(this, settings, 'progress');
    };
    
    var initPlugin = (_allElements, settings, type) => {
        if (_allElements){
            return _allElements.each(function () {
                searchpluginMethod(this, settings, type);
            });
        }else{
            searchpluginMethod(null, settings, type);
        }
    };

    var searchpluginMethod = (_thisElem, settings, type) => {

        switch (type) {

            case 'sidenav':
                sidenavPlugin(_thisElem, settings);
                break;

            case 'imgZoom':

                imgZoomPlugin(_thisElem, settings);

                break;

            case 'tabs':
                tabsPlugin(_thisElem, settings);
                break; 

            case 'scrollTop':
                scrollTopPlugin(_thisElem, settings);
                break;

            case 'toast':
                toastPlugin(settings);
                break;
            
            case 'modal':
                modalPlugin(_thisElem, settings);
                break;

            case 'alert':
                alertPlugin(settings);
                break;

            case 'checkbox':
                checkboxPlugin(_thisElem, settings);
                break;

            case 'radiobox':
                radioboxPlugin(_thisElem, settings);
                break;
            
            case 'switch':
                switchPlugin(_thisElem, settings);
                break;
            
            case 'select':
                selectPlugin(_thisElem, settings);
                break;
            
            case 'tooltip':
                tooltipPlugin(_thisElem, settings);
                break;

            case 'accordion':
                accordionPlugin(_thisElem, settings);
                break;

            case 'inputCount':
                inputCountPlugin(_thisElem, settings);
                break;
            
            case 'inputFile':
                inputFilePlugin(_thisElem, settings);
                break;

            case 'progress':

                //Progress bar dataHtml
                if ($(_thisElem).attr('data-transitionDuration'))
                    settings.transitionDuration = parseInt($(_thisElem).attr('data-transitionDuration'));

                if ($(_thisElem).attr('data-startAt'))
                    settings.startAt = $(_thisElem).attr('data-startAt');

                if ($(_thisElem).attr('data-endAt'))
                    settings.endAt = $(_thisElem).attr('data-endAt');

                if ($(_thisElem).attr('data-hideAtEnd'))
                    settings.hideAtEnd = JSON.parse($(_thisElem).attr('data-hideAtEnd'));

                progressPlugin(_thisElem, settings);
                break;
        }

    };

    var sidenavPlugin = (_thisElem, settings) =>{

        //Sidenav event open / hide
        var sidenavBtnToggle = $('[data-target="sidenav"][data-href="#' + $(_thisElem).attr('id') + '"]');
        sidenavBtnToggle.on('click', (event) => { sidenavPluginBtnEvent(event.currentTarget, settings) });

        if($(_thisElem).hasClass('sidenav-fixed')){
            $('body').addClass('body-with-sidenav');
        }

        //Sidenav event menu
        $(_thisElem).find('.sidenav-body .sidenav-link').on('click', () => { sidenavPluginMenuToggleEvent(event.currentTarget, settings) })
    };

    var sidenavPluginBtnEvent = (_thisBtn, settings) => {

        var thisBtnSidenavTarget = $($(_thisBtn).attr('data-href'));
        var body = $('body');


        if (thisBtnSidenavTarget.hasClass('show')) {
            
            $('.sidenav-overlay[data-href="' + $(_thisBtn).attr('data-href') + '"]').remove();

            thisBtnSidenavTarget.animate({
                left: -400
            }, 450, function () {
                thisBtnSidenavTarget.removeClass('show');
                thisBtnSidenavTarget.removeAttr('css');
            });

        } else {

            var sidenavOverlayClassFixed = '';

            if (thisBtnSidenavTarget.hasClass('sidenav-fixed')) {
                sidenavOverlayClassFixed = 'sidenav-overlay-fixed';
            }

            var sidenavOverlay = $('<div class="sidenav-overlay ' + sidenavOverlayClassFixed + '" data-href="' + $(_thisBtn).attr('data-href') + '"></div>');

            body.append(sidenavOverlay);
            sidenavOverlay.on('click', () => { sidenavPluginBtnEvent(event.currentTarget, settings) });

            thisBtnSidenavTarget.animate({
                left: 0
            }, 450, function () {
                thisBtnSidenavTarget.addClass('show');
                thisBtnSidenavTarget.removeAttr('css');
            });

        }
        
    };

    var sidenavPluginMenuToggleEvent = (_thisBtn, settings) => {

        if ($(_thisBtn).hasClass('active')) {

            $(_thisBtn).removeClass('active');
            $(_thisBtn).next('.sidenav-submenu').slideUp(500, function () {
                $(_thisBtn).next('.sidenav-submenu').removeClass('active');
            });

        } else {

            $(_thisBtn).addClass('active');
            $(_thisBtn).next('.sidenav-submenu').slideDown(500, function () {
                $(_thisBtn).next('.sidenav-submenu').addClass('active');
            });
        }

    };



    var imgZoomPlugin = (_thisElem, settings) => {

        var imgLinked = $(_thisElem).attr('data-group');

        if (imgLinked) {
            var _imgElems = $('img[data-group="' + imgLinked + '"]');
        } else {
            var _imgElems = $(_thisElem);
        }
        
        if (typeof settings !== 'string') {

            $(_imgElems).each(function (index, element) {

                var _thisImg = $(this);
                var thisImgSettings = settings;

                //imgZoom dataHtml
                if (_thisImg.attr('data-imgZoomContainerClass'))
                    thisImgSettings.imgZoomContainerClass = _thisImg.attr('data-imgZoomContainerClass');

                if (_thisImg.attr('data-imgZoomWidgetClass'))
                    thisImgSettings.imgZoomWidgetClass = _thisImg.attr('data-imgZoomWidgetClass');

                if (_thisImg.attr('data-imgZoomSliderClass'))
                    thisImgSettings.imgZoomSliderClass = _thisImg.attr('data-imgZoomSliderClass');

                if (_thisImg.attr('data-imgItemSlideClass'))
                    thisImgSettings.imgItemSlideClass = _thisImg.attr('data-imgItemSlideClass');

                if (_thisImg.attr('data-imgItemWrapperClass'))
                    thisImgSettings.imgItemWrapperClass = _thisImg.attr('data-imgItemWrapperClass');

                if (_thisImg.attr('data-imgItemDescriptionClass'))
                    thisImgSettings.imgItemDescriptionClass = _thisImg.attr('data-imgItemDescriptionClass');


                _thisImg[0].settings = thisImgSettings;

                _thisImg.addClass('img-zoom');

                _thisImg.off('click.imgZoom')
                _thisImg.on('click.imgZoom', (event) => { imgZoomDisplayEvent(event.currentTarget, thisImgSettings, _imgElems) });
                 
            });

        } else {

            switch (settings) {
                case 'open':

                    $(_thisElem).trigger('click.imgZoom');

                    break;

                case 'close':
                    
                    if (typeof _thisElem.imgZoomContainer !== 'undefined'){

                        imgZoomCloseEvent(_thisElem.imgZoomContainer, _thisElem.settings, _imgElems);
                        
                    }

                    break;

                case 'destroy':

                    if (typeof _thisElem.imgZoomContainer !== 'undefined') {

                        imgZoomCloseEvent(_thisElem.imgZoomContainer, _thisElem.settings, _imgElems);

                    }
                    _imgElems.off('click.imgZoom');
                    _imgElems.removeClass('img-zoom');

                    break;
            }

        }

        

    };

    var imgZoomDisplayEvent = (_thisElem, settings, _imgElems) => {

        var body = $('body');
        var imgZoomContainer = $('<div class="img-zoom-container ' + settings.imgZoomContainerClass +'"></div>');
        var imgZoomWidget = $('<div class="img-zoom-widget ' + settings.imgZoomWidgetClass +'"></div>');
        var imgZoomSlider = $('<div class="img-zoom-slider ' + settings.imgZoomSliderClass +'"></div>');
        var btnClose = $('<a href="javascript:void(0);" class="btn img-zoom-close ' + settings.button.close.class + '">' + settings.button.close.name + '</a>');
        
        $(_imgElems).each(function (index, element) {
            $(this)[0].imgZoomContainer = imgZoomContainer;
        });

        imgZoomWidget.append(imgZoomSlider);
        imgZoomContainer.append(imgZoomWidget);
        imgZoomContainer.append(btnClose);
        var imgLenght = _imgElems.length;

        if (imgLenght > 1){

            var arrowLeft = $('<a href="javascript:void(0);" data-type="left" class="btn img-zoom-to-slide ' + settings.button.arrowLeft.class + '">' + settings.button.arrowLeft.name + '</a>');
            var arrowRight = $('<a href="javascript:void(0);" data-type="right" class="btn img-zoom-to-slide ' + settings.button.arrowRight.class + '">' + settings.button.arrowRight.name + '</a>');
            
            arrowLeft.on('click', () => { imgZoomToSlideEvent(event.currentTarget, settings) });
            arrowRight.on('click', () => { imgZoomToSlideEvent(event.currentTarget, settings) });
            
            imgZoomContainer.append(arrowLeft);
            imgZoomContainer.append(arrowRight);

        }

        
        body.append(imgZoomContainer);

        imgZoomContainer.animate({
                opacity: 1
            },
            450, function () {
        });

        _imgElems.each(function (index, element) {

            var classImgSlide = '';

            var imgSlide = $('<div class="img-zoom-slide ' + settings.imgItemSlideClass +'"></div>');

            if (_thisElem == element){
                imgSlide.css('opacity', 1);
                imgSlide.addClass('show');
            }
            
            
            var img = $('<img src="' + $(this).attr('src') + '"/>');
            var imgWrapper = $('<div class="img-zoom-img-wrapper ' + settings.imgItemWrapperClass +'"></div>')
            var imgDescription = $('<div class="img-zoom-description ' + settings.imgItemDescriptionClass +'"><p>' + $(this).attr('data-description') + '</p></div>');

            imgWrapper.append(img)
            imgSlide.append(imgWrapper);
            
            if ($(this).attr('data-description')){
                imgSlide.append(imgDescription);
            }

            imgZoomSlider.append(imgSlide);
        });

        btnClose.on('click', () => { imgZoomCloseEvent(event.currentTarget, settings, _imgElems) });

    };

    var imgZoomCloseEvent = (_thisElem, settings, _imgElems) => {

        if ($(_thisElem).hasClass('img-zoom-container')){
            var imgZoomContainer = $(_thisElem);
        }else{
            var imgZoomContainer = $(_thisElem).parents('.img-zoom-container');
        }
        
        imgZoomContainer.animate({
            opacity: 0
        },
        450, function () {
            imgZoomContainer.remove();
            $(_imgElems).each(function (index, element) {
                delete $(this)[0].imgZoomContainer;
            });
        });
    };

    var imgZoomToSlideEvent = (_thisElem, settings) => {
        var slideDirection = $(_thisElem).attr('data-type');
        var imgZoomContainer = $(_thisElem).parents('.img-zoom-container');
        var _allSlide = imgZoomContainer.find('.img-zoom-slide');
        var _slideShow = imgZoomContainer.find('.img-zoom-slide.show');
        var slideShowIndex = 0;
        var slideNewShowIndex = 0;
        var countSlide = (_allSlide.length - 1);
        
        _allSlide.each(function (index, element) {
            if (element == _slideShow[0]){
                slideShowIndex = index;
            }
        });

        if (slideDirection == 'left'){

            if (slideShowIndex == 0){
                slideNewShowIndex = countSlide;
            }else{
                slideNewShowIndex = slideShowIndex - 1;
            }

        }else{

            if (slideShowIndex == countSlide) {
                slideNewShowIndex = 0;
            } else{
                slideNewShowIndex = slideShowIndex + 1;
            }

        }

        _slideShow.animate({
            opacity: 0
        },
        500, function () {
            _slideShow.removeClass('show');
            $(_allSlide[slideNewShowIndex]).addClass('show');
            $(_allSlide[slideNewShowIndex]).animate({
                opacity: 1
            },
            500, function () {
            });
        });

    };

    var tabsPlugin = (_thisElem, settings) => {
        $(_thisElem).find('a:not(.disabled)').on('click', () => { tabsDisplayEvent(event.currentTarget, settings) });
    };

    var tabsDisplayEvent = (_thisElem, settings) => {
        var tabContentToshow = $($(_thisElem).attr('data-href'));
        var tabMenuOfThisElem = $(_thisElem).parents('.tab-menu');
        var tabBody = tabContentToshow.parents('.tab-body');
        
        //Remove and active btn
        tabMenuOfThisElem.find('a').removeClass('active');
        $(_thisElem).addClass('active');

        //Display menu and hide other
        tabBody.find('.tab-body-content').removeClass('show');
        tabContentToshow.addClass('show');
        
    };

    var scrollTopPlugin = (_thisElem, settings) => {

        if (!$(_thisElem).hasClass('btn-scroll-top'))
            $(_thisElem).addClass('btn-scroll-top');

        $(_thisElem).on('click', () => { scrollTopEvent(event.currentTarget, settings) });
        $('body').scroll(function () { scrollTopHideEvent(_thisElem, settings) });
        
    };

    var scrollTopEvent = (_thisElem, settings) => {

        $('html, body').animate({
            scrollTop: 0
        }, 500, function () {
        });

    };

    var scrollTopHideEvent = (_thisElem, settings) => {
        
        if ($('body').scrollTop() > 300) {
            $(_thisElem).addClass('show');
        } else {
            $(_thisElem).removeClass('show');
        }

    };

    var toastPlugin = (settings) => {

        var body = $('body');
        var toastContainer = $('#toastContainer');
        var toast = $('<div class="toast ' + settings.class + '"></div>');
        

        if (toastContainer.length == 0){
            toastContainer = $('<div id="toastContainer"></div>');
            body.append(toastContainer);
        }

        if (settings.icon !== '') {
            var toastIconCtn = $('<div class="toast-icon"></div>');
            toastIconCtn.append(settings.icon);
            toast.append(toastIconCtn);
        }

        if (settings.message !== ''){
            var toastMessage = $('<div class="toast-message"></div>');
            toastMessage.append(settings.message);
            toast.append(toastMessage);
        }
        
        if (settings.toastBtn !== undefined){

            var toastActionCtn = $('<div class="toast-action"></div>');
            var toastBtn = $('<a target="_blank" class="btn ' + (settings.toastBtn.class !== undefined ? settings.toastBtn.class : '') + '">' + (settings.toastBtn.name !== undefined ? settings.toastBtn.name : '') + '</a>');

            if (settings.toastBtn.href !== undefined)
                toastBtn.attr('href', settings.toastBtn.href);

            if (settings.toastBtn.action !== undefined)
                toastBtn.on('click', settings.toastBtn.action);

            toastActionCtn.append(toastBtn);
            toast.append(toastActionCtn);

        }
        
        

        toastContainer.append(toast);

        toast.animate({
            opacity: 1,
            marginTop: 30,
        }, settings.transitionDuration, function () {
                    
        });
        
        var timeoutToast = setTimeout(function () { 

            toastCloseEvent(toast, settings);

        }, settings.duration);


        if (settings.toastClose !== undefined) {

            var toastClose = $('<a class="toast-close ' + (settings.toastClose.class !== undefined ? settings.toastClose.class : '') + '">' + (settings.toastClose.name !== undefined ? settings.toastClose.name : '') + '</a>');
            toast.append(toastClose);
            toastClose.on('click', () => { toastCloseEvent(toast, settings, timeoutToast) });

        }

    };

    var toastCloseEvent = (toast, settings, timeoutToast = null) => {

        if (timeoutToast){
            clearTimeout(timeoutToast);
        }

        toast.animate({
            opacity: 0,
            marginTop: 20,
        }, settings.transitionDuration, function () {

            toast.remove();
            if ($('#toastContainer').children().length == 0)
                $('#toastContainer').remove();

        });

    }

    var modalPlugin = (_thisElem, settings) => {

        var modalBackground = $(_thisElem);
        var modalContainer = modalBackground.find('.modal-container');
        var modal = modalBackground.find('.modal');

        if (typeof settings !== 'string'){

            modalBackground[0].settings = settings;

            //Close modal

            modal.find('.modal-close').on('click', () => { modalCloseEvent(modalBackground, modalContainer, settings) });
            modalBackground.on('click', () => { modalBackgroundCloseEvent(_thisElem, event, settings) });

            //Open modal
            var modalBtnToggle = $('[data-target="modal"][data-href="#' + $(_thisElem).attr('id') + '"]');
            modalBtnToggle.on('click', () => { modalOpenEvent(modalBackground, modalContainer, settings) });

        }else{

            switch (settings) {
                case 'open':

                    modalOpenEvent(modalBackground, modalContainer, modalBackground[0].settings);

                    break;
            
                case 'close':

                    modalCloseEvent(modalBackground, modalContainer, modalBackground[0].settings);

                    break;
            }

            
        }
        
    };

    var modalCloseEvent = (modalBackground, modalContainer, settings) => {


        settings.beforeClose.call(modalBackground[0]);

        modalBackground.animate({
            opacity: 0,
        }, settings.transitionDuration, function () {
            modalBackground.removeClass('show');
            settings.afterClose.call(modalBackground[0]);
        });

        modalContainer.animate({
            marginTop: 30,
        }, settings.transitionDuration, function () {
        });

    };

    var modalBackgroundCloseEvent = (_thisElem, event, settings) => {
        var modalBackground = $(_thisElem);
        var modalContainer = modalBackground.find('.modal-container');
        
        if ($(event.target).hasClass('modal-background')) {

            modalCloseEvent(modalBackground, modalContainer, settings);
           
        }
    };

    var modalOpenEvent = (modalBackground, modalContainer, settings) => {

        settings.beforeOpen.call(modalBackground[0]);
        modalBackground.addClass('show');

        modalContainer.animate({
            marginTop: 50,
        }, settings.transitionDuration, function () {
        });

        modalBackground.animate({
            opacity: 1,
        }, settings.transitionDuration, function () {
            settings.afterOpen.call(modalBackground[0]);
        });

    };

    var alertPlugin = (settings) => {

        var body = $('body');
        var alertBackground = $('<div class="alert-background ' + settings.classBackground + '"></div>');

        if (settings.backgroundClose){
            alertBackground.on('click', function (event) { alertCloseEvent(this, alertBackground, settings, null, event) });
        }

        var alertContainer = $('<div class="alert-container ' + settings.classContainer + '"></div>');
        var alert = $('<div class="alert ' + settings.classAlert + '"></div>');

        var alertHead = $('<div class="alert-head ' + settings.classHead + '"></div>');
        var alertHeadTitle = $('<h4 class="alert-title">' + settings.title + '</h4>');

        alertHead.append(alertHeadTitle);

        if (settings.closeBtn){

            var alertClose = $('<a href="javascript:void(0);" class="alert-close">' + settings.closeIcon +'</a>');
            alertHead.append(alertClose);

            alertClose.on('click', function (event) { alertCloseEvent(this, alertBackground, settings) });

        }

        var alertBody = $('<div class="alert-body ' + settings.classBody + '">' + settings.message + '</div>');
        var alertFoot = $('<div class="alert-foot ' + settings.classFoot + '"></div>');

        $.each(settings.buttons, function (buttonName, buttonSettings) { 
            
            var alertBtn = $('<a target="_blank" class="btn ' + (buttonSettings.class !== undefined ? buttonSettings.class : '') + '">' + (buttonSettings.name !== undefined ? buttonSettings.name : buttonName) + '</a>');
            
            if (buttonSettings.href !== undefined)
                alertBtn.attr('href', buttonSettings.href);

            
            alertBtn.on('click', function () { alertCloseEvent(this, alertBackground, buttonSettings, (buttonSettings.action !== undefined ? buttonSettings.action : null)) });

            alertFoot.append(alertBtn);

        });


        alertBackground.append(alertContainer);
        alertContainer.append(alert);
        
        alert.append(alertHead);
        alert.append(alertBody);
        alert.append(alertFoot);


        body.append(alertBackground);

        alertBackground.animate({
            opacity: 1,
        }, settings.transitionDuration, function () {

        });

        alertContainer.animate({
            marginTop: 235,
        }, settings.transitionDuration, function () {

        });

    };

    var alertCloseEvent = (_thisElem, alertBackground, settings, otherEvent = null, event = null) => {

        var alertContainer = alertBackground.find('.alert-container');

        if (otherEvent){
            otherEvent.call(_thisElem);
        }

        if (event){
            if (!$(event.target).hasClass('alert-background')) {
                return;
            }
        }

        alertBackground.animate({
            opacity: 0,
        }, settings.transitionDuration, function () {

        });

        alertContainer.animate({
            marginTop: 215,
        }, settings.transitionDuration, function () {
            alertBackground.remove();
        });

    };

    var checkboxPlugin = (_thisElem, settings) => {

        var checkbox = $(_thisElem).clone(true);
        var label = $(_thisElem).parent('label');

        var checkboxContainer = $('<span class="checkbox-container' + (checkbox.prop('checked') ? ' checked' : '') +'"></span>');
        
        checkboxContainer.append(checkbox);
        checkboxContainer.addClass(checkbox.attr('class').replace('checkbox', '') + (checkbox.attr('disabled') !== undefined ? ' ' + checkbox.attr('disabled') : ''));

        checkbox.addClass('checkbox');

        $(_thisElem).replaceWith(checkboxContainer);

        checkbox.on('change', () => { checkboxToggleEvent(checkboxContainer, checkbox, (checkbox.prop('checked')? false : true), settings) });
        checkboxContainer.on('click', () => { checkboxToggleEvent(checkboxContainer, checkbox, checkbox.prop('checked'), settings) });
        
        if (label.length == 1){
            checkboxContainer.on('click', () => { checkboxToggleEvent(checkboxContainer, checkbox, checkbox.prop('checked'), settings) });
        }

    };

    var checkboxToggleEvent = (checkboxContainer, checkbox, checkboxStatus, settings) => {

        if (!checkboxContainer.hasClass('disabled')) {

            if (checkboxStatus){
                checkboxContainer.removeClass('checked');
                checkbox.prop('checked', false);
            }else{
                checkboxContainer.addClass('checked');
                checkbox.prop('checked', true);
            }

        }

    };

    var radioboxPlugin = (_thisElem, settings) => {

        var radiobox = $(_thisElem).clone(true);
        var label = $(_thisElem).parent('label');

        var radioboxContainer = $('<span class="radiobox-container' + (radiobox.prop('checked') ? ' checked' : '') + '"></span>');

        radioboxContainer.append(radiobox);
        radioboxContainer.addClass(radiobox.attr('class').replace('radiobox', '') + (radiobox.attr('disabled') !== undefined ? ' ' + radiobox.attr('disabled') : ''))

        radiobox.addClass('radiobox');

        $(_thisElem).replaceWith(radioboxContainer);

        radiobox.on('change', () => { radioboxToggleEvent(radioboxContainer, radiobox, (radiobox.prop('checked') ? false : true), settings) });
        radioboxContainer.on('click', () => { radioboxToggleEvent(radioboxContainer, radiobox, radiobox.prop('checked'), settings) });

        if (label.length == 1) {
            radioboxContainer.on('click', () => { radioboxToggleEvent(radioboxContainer, radiobox, radiobox.prop('checked'), settings) });
        }

    };

    var radioboxToggleEvent = (radioboxContainer, radiobox, radioboxStatus, settings) => {

        if (!radioboxContainer.hasClass('disabled')){

            $('.radiobox[name="' + radiobox.attr('name') + '"]').parents('.radiobox-container').removeClass('checked');
            
            radioboxContainer.addClass('checked');
            radiobox.prop('checked', true);

        }
    };

    var switchPlugin = (_thisElem, settings) => {

        var switchbox = $(_thisElem).clone(true);
        var label = $(_thisElem).parent('label');

        var switchContainer = $('<span class="switch-container' + (switchbox.prop('checked') ? ' active' : '') + '"></span>');

        switchContainer.append(switchbox);
        switchContainer.addClass(switchbox.attr('class').replace('switchbox', '') + (switchbox.attr('disabled') !== undefined ? ' ' + switchbox.attr('disabled') : ''));

        switchbox.addClass('switchbox');

        $(_thisElem).replaceWith(switchContainer);

        switchbox.on('change', () => { switchboxToggleEvent(switchContainer, switchbox, (switchbox.prop('checked') ? false : true), settings) });
        switchContainer.on('click', () => { switchboxToggleEvent(switchContainer, switchbox, switchbox.prop('checked'), settings) });

        if (label.length == 1) {
            switchContainer.on('click', () => { switchboxToggleEvent(switchContainer, switchbox, switchbox.prop('checked'), settings) });
        }
    };

    var switchboxToggleEvent = (switchboxContainer, switchbox, switchboxStatus, settings) => {

        if (!switchboxContainer.hasClass('disabled')) {

            if (switchboxStatus) {
                switchboxContainer.removeClass('active');
                switchbox.prop('checked', false);
            } else {
                switchboxContainer.addClass('active');
                switchbox.prop('checked', true);
            }

        }

    };

    var selectPlugin = (_thisElem, settings) => {

        var selectPluginContainer = $('<div class="select-container"></div>');
        var selectPluginButton = $('<a class="btn select-btn ' + settings.btnClass + '" href="javascript:void(0);"></a>');
        var selectPluginList = $('<div class="select-list"></div>');
        var selectPluginInput = $('<input class="input-field select-input ' + settings.inputClass + '"/>');
        var selectPluginMenu = $('<ul class="select-menu ' + settings.menuClass + '"></ul>');

        var selectedOptionName = '';

        var select = $(_thisElem).clone(true);

        select.addClass('select-hidden');

        selectPluginButton.on('click', () => { selectDropdownEvent(selectPluginList) });

        selectPluginContainer.append(select);
        selectPluginContainer.append(selectPluginButton);
        selectPluginContainer.append(selectPluginList);

        if (settings.search) {
            selectPluginList.append(selectPluginInput);
            selectPluginInput.on('keyup', () => { selectSearchEvent($(event.currentTarget), selectPluginContainer) });
        }

        
        selectPluginList.append(selectPluginMenu);

        

        select.find('option').each(function (index, element) {

            var selectPluginItem = $('<li class="select-item"></li>');
            var selectPluginLink = $('<a class="select-link ' + ( $(this).prop('selected')? 'active' : '' ) + '" href="javascript:void(0);" data-index="' + index + '" ' + ($(this).attr('value') !== undefined ? 'data-value="' + $(this).attr('value') + '"': '') + '>'+ $(this).text() +'</a>');

            if ($(this).prop('selected') || index == 0)
                selectedOptionName = $(this).text();
                
            selectPluginLink.on('click', () => { selectOptionEvent($(event.currentTarget), select, selectPluginContainer) });

            selectPluginItem.append(selectPluginLink);
            selectPluginMenu.append(selectPluginItem);
        });

        select.on('change', () => { selectOptionEvent(null, select, selectPluginContainer) });

        selectPluginButton.text(selectedOptionName);

        $(_thisElem).replaceWith(selectPluginContainer);

    };

    var selectDropdownEvent = (selectPluginList) => {

        if (!selectPluginList.hasClass('show')) {

            selectClose(selectPluginList[0]);

            selectPluginList.addClass('show');

            selectPluginList.animate({
                opacity: 1,
                marginTop: 0,
            }, 500, function () {

            });

        } else {
            selectClose();
        }

    };

    var selectOptionEvent = (option, select, selectPluginContainer) => {

        var optionIndex = (option !== null ? option.attr('data-index') : select.find('option:selected').index());
        
        //Select option
        $(select.find('option')[optionIndex]).prop('selected', true);
        selectPluginContainer.find('.select-item').find('.select-link').removeClass('active');
        $(selectPluginContainer.find('.select-item')[optionIndex]).find('.select-link').addClass('active');

        selectPluginContainer.find('.select-btn').text($(selectPluginContainer.find('.select-item')[optionIndex]).find('.select-link').text());
        
    };

    var selectSearchEvent = (inputSearch, selectPluginContainer) => {

        //Select input search
        var inputValue = inputSearch.val().toLowerCase();
        selectPluginContainer.find('.select-item').filter(function () {
            $(this).toggle($(this).find('.select-link').text().toLowerCase().indexOf(inputValue) > -1)
        });

    };
    
    var tooltipPlugin = (_thisElem, settings) => {
        $(_thisElem).on('mouseover', () => { tooltipMouseOverEvent($(event.currentTarget), event, settings) });
        $(_thisElem).on('mousemove', () => { tooltipMouseMoveEvent($(event.currentTarget), event, settings) });
        $(_thisElem).on('mouseout', () => { tooltipMouseOutEvent($(event.currentTarget), event, settings) });
    };

    var tooltipMouseOverEvent = (_thisElem, event, settings) => {

        var body = $('body');
        var tooltip = $('<div class="tooltip-msg">' + (_thisElem.attr('data-tooltip') ? _thisElem.attr('data-tooltip') : '') + '</div>');

        
        body.append(tooltip);


        var tooltipX = event.pageX - 8;
        var tooltipY = event.pageY + 15;

        tooltip.css({ top: tooltipY, left: tooltipX });

        tooltip.animate({
            opacity: 1,
        }, settings.transitionDuration, function () {

        });

    };

    var tooltipMouseMoveEvent = (_thisElem, event, settings) => {

        var tooltip = $('.tooltip-msg');

        var tooltipX = event.pageX - 8;
        var tooltipY = event.pageY + 15;

        tooltip.css({ top: tooltipY, left: tooltipX });

    };

    var tooltipMouseOutEvent = (_thisElem, event, settings) => {

        var tooltip = $('.tooltip-msg');

        tooltip.animate({
            opacity: 0,
        }, settings.transitionDuration, function () {
            tooltip.remove();
        });

    };

    var accordionPlugin = (_thisElem, settings) => {
        
        $(_thisElem).find('.accordion-head').on('click', () => { accordionToggleEvent($(event.currentTarget), settings) });

        //Display if active
        $(_thisElem).find('.accordion-item.active .accordion-body').each(function (index, element) {

            var paddingTop = parseInt($(this).css('padding-top'));
            var paddingBottom = parseInt($(this).css('padding-bottom'));

            $(this).css({
                display: 'block',
                paddingTop: paddingTop + 'px',
                paddingBottom: paddingBottom + 'px',
                height: 'auto'
            });

        });

    };

    var accordionToggleEvent = (_thisElem, settings) => {

        var accordion = _thisElem.parents('.accordion');
        var accordionItem = _thisElem.parent('.accordion-item');
        var accordionBody = _thisElem.parent('.accordion-item').find('.accordion-body');
        
        if (accordionItem.hasClass('active')){

            accordionBody.animate({
                paddingTop: 0,
                paddingBottom: 0,
                height: 0,
            }, settings.transitionDuration, function () {

                accordionBody.css('display', 'block');
                accordionBody.removeAttr('style');
                accordionItem.removeClass('active');

            });

        } else {
            

            var paddingTop = parseInt(accordionBody.css('padding-top'));
            var paddingBottom = parseInt(accordionBody.css('padding-bottom'));
            
            var baseHeight = accordionBody.height();
            accordionBody.css('height', 'auto');
            var autoHeight = accordionBody.height();
            accordionBody.css('height', baseHeight);

            accordionBody.css({
                display: 'block',
                paddingTop: 0,
                paddingBottom: 0
            });

            accordionBody.animate({
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                height: (autoHeight + paddingTop + paddingBottom),
            }, settings.transitionDuration, function () {
                accordionItem.addClass('active');
                accordionBody.css('height', 'auto');
            });
        }

        //Close all other accordion item
        if (settings.closeOtherItem){
            accordion.find('.accordion-item.active').each(function (index, element) {

                if (this != accordionItem[0]){

                    var thisAccordionItem = $(this);

                    $(this).find('.accordion-body').animate({
                        paddingTop: 0,
                        paddingBottom: 0,
                        height: 0,
                    }, settings.transitionDuration, function () {
                        
                        $(this).css('display', 'block');
                        $(this).removeAttr('style');
                        thisAccordionItem.removeClass('active');

                    });

                }

            });
        }

    };

    var inputCountPlugin = (_thisElem, settings) => {

        var inputContainer = $('<div class="input-count-container"></div>');
        var inputCounter = $('<span class="input-count-display">0 / ' + settings.maxLength + '</span>');
        var input = $(_thisElem).clone(true);

        inputContainer.append(input);
        inputContainer.append(inputCounter);

        $(_thisElem).replaceWith(inputContainer);
        
        input.on('input', () => { inputCountChangeEvent(input, settings) });

    };
    
    var inputCountChangeEvent = (_thisElem, settings) => {
        
        var inputContainer = _thisElem.parent('.input-count-container');
        var inputCounter = inputContainer.find('.input-count-display');

        if (_thisElem.val().length <= settings.maxLength){
            inputCounter.text(_thisElem.val().length + ' / ' + settings.maxLength);
        }else{
            inputCounter.text(settings.maxLength + ' / ' + settings.maxLength);
        }
        

        _thisElem.val(_thisElem.val().substring(0, settings.maxLength));

    };

    var inputFilePlugin = (_thisElem, settings) => {
        
        var inputFileContainer = $('<div class="input-file-container"></div>');
        var inputFile = $(_thisElem).clone(true);
        var inputShowName = $('<input class="input-field ' + settings.inputClass + '" disabled>');
        var inputButton = $('<button class="btn ' + settings.btnClass + '">' + settings.btnName + '</button>');
        var inputStick = $('<span class="input-file-stick">1</span>');

        if (settings.onlyButton){

            inputFileContainer.append(inputButton);
            inputButton.append(inputStick);
            inputFileContainer.append(inputFile);

        }else{

            inputFileContainer.append(inputFile);
            inputFileContainer.addClass('flex-group');

            if (settings.btnPosition == 'left') {
                inputFileContainer.append(inputShowName);
                inputFileContainer.prepend(inputButton);
            } else {
                inputFileContainer.append(inputButton);
                inputFileContainer.prepend(inputShowName);
            }

        }

        inputButton.on('click', function () { inputFile.trigger('click'); });
        inputFile.on('change', function () {
            inputStick.css('display','inline');
            inputShowName.val(inputFile[0].files[0].name);
        });
        
        $(_thisElem).replaceWith(inputFileContainer);

    };

    //MA_Progress
    var progressPlugin = (_thisElem, settings) => {

        if (typeof settings !== 'string') {

            //Set elem settings
            _thisElem.settings = settings;

            //Set progress start width
            $(_thisElem).find('.progress').css('width', settings.startAt);

            //Display progress
            $(_thisElem).removeClass('hide');

            //Call progess settings onStart
            settings.onStart.call(_thisElem);

            //Animate progess
            $(_thisElem).find('.progress').animate({
                width: settings.endAt
            }, settings.transitionDuration, function () {

                //Call progess settings onEnd
                settings.onEnd.call(_thisElem);

                //Hide progress if hideAtEnd set to true
                if (settings.hideAtEnd) {
                    $(_thisElem).addClass('hide');
                }

            });

        }
        
    };

})(jQuery);

var selectClose = (notThisSelect = null) => {

    //Close select
    var dropdownList = $('body').find('.select-list.show');

    dropdownList.each(function (index, element) {

        if (this != notThisSelect) {

            $(this).animate({
                opacity: 0,
                marginTop: -20,
            }, 500, function () {
                $(this).removeClass('show');
                $(this).find('input').val('');
                $(this).find('.select-item').removeAttr('style')
            });

        }

    });

};


var dropdownClose = (notThisDropdown = null) => {

    //Close dropdown
    var dropdownList = $('body').find('.dropdown-list.show');

    dropdownList.each(function (index, element) {

        if (this != notThisDropdown){

            $(this).animate({
                opacity: 0,
                marginTop: -20,
            }, 500, function () {
                $(this).removeClass('show');
            });

        }

    });

};

$(document).on('click', '.btn-dropdown', (event) => {

    var dropdownList = $(event.currentTarget).next('.dropdown-list');

    if (!dropdownList.hasClass('show')){
        
        //Close dropdown whitout this
        dropdownClose(dropdownList[0]);

        //Open dropdown
        dropdownList.addClass('show');

        dropdownList.animate({
            opacity: 1,
            marginTop: 0,
        }, 500, function () {

        });

    }else{
        //Close dropdown
        dropdownClose();
    }

});

$(window).on('click', (event) => {

    //Close dropdown on window click
    if (!$(event.target).hasClass('btn-dropdown')) {
        dropdownClose();
    }

    //Close select on window click
    if (!$(event.target).hasClass('select-btn') && !$(event.target).hasClass('select-input')) {
        selectClose();
    }

});

$('.MA-sidenav').MA_Sidenav();
$('.MA-imgZoom').MA_imgZoom();
$('.MA-tabs').MA_tabs();
$('.MA-scrollTop').MA_ScrollTop();
$('.MA-checkbox').MA_Checkbox();
$('.MA-radiobox').MA_Radiobox();
$('.MA-switch').MA_Switch();
$('.MAtooltip').MA_Tooltip();
$('.MA-accordion').MA_Accordion();
$('.MA-inputCount').MA_InputCount();
$('.MA-progress').MA_InputCount();