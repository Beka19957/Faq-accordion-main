const accordionBtns = document.querySelectorAll('.accordion_btn')

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        this. classList.toggle('active')

        const accordionDescription = this.nextElementSibling
        const plusIcon = this.querySelector('.plus_icon')
        const minusIcon = this.querySelector('.minus_icon')

        if(accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'


        }

    })
})
