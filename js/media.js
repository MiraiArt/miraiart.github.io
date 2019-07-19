$(function () {
    $('.img-zoom-one').MA_imgZoom({
        button: {
            close: {
                name: '<i class="fas fa-times"></i>',
                class: 'bg-blue',
            }
        }
    });
    $('.img-zoom-group').MA_imgZoom({
        button: {
            arrowLeft: {
                name: '<i class="fas fa-arrow-left"></i>',
                class: 'bg-blue',
            },
            arrowRight: {
                name: '<i class="fas  fa-arrow-right"></i>',
                class: 'bg-blue',
            },
            close: {
                name: '<i class="fas fa-times"></i>',
                class: 'bg-blue',
            }
        }
    });
});

