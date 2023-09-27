

let bar = document.getElementById('bar');
let nav = document.getElementById('nav');
let close = document.getElementById('close')


    bar.addEventListener('click', () => {
      nav.style.right=0;
    })


    close.addEventListener('click', () => {
       nav.style.right='-200px'
    })


