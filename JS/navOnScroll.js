const nav = document.querySelector('.nav');
const header = document.querySelector('header');


const options = {
 rootMargin: '15%'
}



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('changeColor')
            //we havent created this yet

        } else {
            nav.classList.add('changeColor')

        }
    })
}, options)

observer.observe(header)
