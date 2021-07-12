function hover(str) {

    let split = str.split('');

    split.forEach(letter => {
        let span = document.createElement('span');
        span.innerHTML = letter;
        document.querySelector('.title').appendChild(span)

    });

    let spans = document.querySelectorAll('.title span');
    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            span.classList.add('hover');
        });
        span.addEventListener('mouseleave', () => {
            span.classList.remove('hover');
        })
    });
}
hover('EXPÉRIENCES');


function hover2(str) {

    let split = str.split(' ');

    split.forEach(letter => {
        let span = document.createElement('span');
        span.innerHTML = letter;
        document.querySelector('.title').appendChild(span);

    });

    let spans = document.querySelectorAll('.title span');
    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            span.classList.add('hover');
        });
        span.addEventListener('mouseleave', () => {
            span.classList.remove('hover');
        })
    });

}
hover2('ANTÉRIEURS');

$('.js-input').keyup(function () {
    if ($(this).val()) {
        $(this).addClass('not-empty');
    } else {
        $(this).removeClass('not-empty');
    }
});


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*    ALL NAVIGATION: menu btn, btn 2 states, icons for button     */
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*-------------------------------------------------------------*/
/*             jQuery .menu-toggle (CSS) btn onClick           */
/*-------------------------------------------------------------*/

$('.menu-toggle').click(function () {

    /*--------------------------------------------------------------*/
    /*open-close Navigation menu btn, 500 milliseconds to drop-close*/
    /*--------------------------------------------------------------*/
    $('.site-nav').toggleClass('site-nav-open', 500);

    /*-------------------------------------------------------------*/
    /* changes hamburger to red X for close button .open CSS       */
    /*-------------------------------------------------------------*/
    $(this).toggleClass('open');

})
