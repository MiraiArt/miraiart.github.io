$(function () {
    $('.btn-show-alert').on('click', () => {
        $.MA_Alert({
            message: 'Please defined a value !',
            title: '<i class="fas fa-exclamation-triangle"></i> Error !',
            classHead: 'bg-purple',
            backgroundClose: false,
            closeIcon: '<i class="fas fa-times"></i>',
            closeBtn: true,
            buttons: {
                btnClose: {
                    class: 'bg-blue',
                    name: 'Remove',
                    action: function () {
                    }
                },
                btnRemove: {
                    class: 'bg-red',
                    action: function () {
                    }
                }
            }
        });
    });
});