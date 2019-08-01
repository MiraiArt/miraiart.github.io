$(function(){
    $('.input-count').MA_InputCount({
        maxLength: 150
    });

    $('.input-file-btn').MA_InputFile({
        btnName: '<i class="fas fa-folder"></i>  Choose a file',
        btnClass: 'bg-blue',
        onlyButton: true
    });

    $('.input-file').MA_InputFile({
        btnPosition: 'left',
        btnName: 'Choose a file',
        btnClass: 'bg-blue'
    });
});