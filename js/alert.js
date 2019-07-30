$(function () {
    $('.btn-show-alert').on('click', () => {
        $.MA_Alert({
            message: 'Le champs est invalide.<br>Veuillez entré une valeur .',
            title: '<i class="fas fa-exclamation-triangle"></i> Attention !',
            classContainer: 'dqz',
            classBackground: '',
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