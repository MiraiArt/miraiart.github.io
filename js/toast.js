$(function () {
    $('.btn-show-toast').on('click',()=>{
        $.MA_Toast({
            message: 'Do you want to go at home page ?',
            icon: '<i class="fas fa-exclamation-triangle"></i>',
            class: 'bg-blue',
            closeable: true,
            toastClose: {
                name: '<i class="fas fa-times"></i>',
            },
            toastBtn: {
                name: 'Go to homepage',
                href: 'index.html',
                action: function () {
                }
            }
        });
    });
});