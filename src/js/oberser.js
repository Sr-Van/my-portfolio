const observerdSection = document.querySelectorAll('.observed')

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    },
    { threshold: 0.2
    })
})

observerdSection.forEach(sect => {
    observer.observe(sect)
})
