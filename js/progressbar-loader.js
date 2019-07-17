var animateProgressBar = ()=>{
    $('.head-progress .progress-bar').MA_Progress({
        transitionDuration: 1000,
        startAt: '0%',
        endAt: '100%',
        onStart: function () { console.log(this) },
        onEnd: function () { console.log(this) },
        hideAtEnd: true
    });
};

$('.btn-toggle-head-progressbar').on('click', () => {
    animateProgressBar();
});

$('.btn-toggle-page-loader').on('click', () => {
    $('.page-loader').fadeIn();
    setTimeout(() => {
        $('.page-loader').fadeOut();
    }, 1000);
});
