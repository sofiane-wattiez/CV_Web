function hoverlast(str){

    let split = str.split('');

    split.forEach(letter => {
        let span = document.createElement('span');
        span.innerHTML = letter;
        document.querySelector('.title').appendChild(span)

    });

   let spans = document.querySelectorAll('.title span');
   spans.forEach(span => {
       span.addEventListener('mouseover' , () => {
           span.classList.add('hover');
       });
       span.addEventListener('mouseleave' , () => {
           span.classList.remove('hover');
       })
   });
}
hoverlast('EXPÉRIENCES');


function hoverlast2(str){

    let split = str.split(' ');

    split.forEach(letter => {
        let span = document.createElement('span');
        span.innerHTML = letter;
        document.querySelector('.title').appendChild(span);

    });

let spans = document.querySelectorAll('.title span');
spans.forEach(span => {
    span.addEventListener('mouseover' , () => {
        span.classList.add('hover');
    });
    span.addEventListener('mouseleave' , () => {
        span.classList.remove('hover');
    })
});

}
hoverlast2('DÉVELOPPEMENT');