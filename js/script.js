const hidden = document.querySelectorAll('.hidden')

window.addEventListener('scroll', ()=>{
    hidden.forEach((hidden, index) => {
        const boxTop = hidden.getBoundingClientRect().top;
        const boxBottom = hidden.getBoundingClientRect().bottom;

        if(boxTop < window.innerHeight && boxBottom >= 0){
            hidden.classList.add('visible')
        }
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const links = document.querySelectorAll('nav ul a');

    links.forEach((link) =>{
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            })
        })
    })
})