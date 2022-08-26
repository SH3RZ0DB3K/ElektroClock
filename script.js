class SLIDER {
    constructor({
        id,
        pagination
    }) {
        this.slider = document.getElementById(id)
        this.prev = this.slider.querySelector('.slider__prev')
        this.next = this.slider.querySelector('.slider__next')
        this.sliderInner = this.slider.querySelector('.slider__inner')
        this.slides = [...this.sliderInner.children] // spreat


        this.activeSlide = 0

        this.next.addEventListener('click', () => {
            this.setActive(this.next)
        })
        this.prev.addEventListener('click', () => {
            this.setActive(this.prev)
        })



        if (pagination) {
            this.ind = this.slider.querySelector('.slider__points')


            for (let i = 0; i < this.slides.length; i++) {
                let source = this.slides[i].getAttribute('src'),
                    el = document.createElement('img');

                el.classList.add('.slider__points-ind')
                el.src = source

                i == 0 ? el.classList.add('active') : null

                this.ind.append(el)
            }
            this.indicators = [...this.ind.children]
            // pagination
            for (let a = 0; a < this.indicators.length; a++) {
                const ind = this.indicators[a];
                ind.addEventListener('click', () => {
                    for (let d = 0; d < this.slides.length; d++) {
                        this.slides[d].classList.remove('active')
                        this.indicators[d].classList.remove('active')
                    }
                    this.slides[a].classList.add('active')
                    this.indicators[a].classList.add('active')
                })
            }
            // end
        }
    }

    setActive(btn) {
        if (btn === this.next) {
            if (this.activeSlide < this.slides.length - 1) {
                this.activeSlide++
            } else {
                this.activeSlide = 0
            }
        } else if (btn === this.prev) {
            if (this.activeSlide > 0) {
                this.activeSlide--
            } else {
                this.activeSlide = this.slides.length - 1
            }
        }
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.remove('active')
            this.indicators[i].classList.remove('active')
        }
        this.slides[this.activeSlide].classList.add('active')
        this.indicators[this.activeSlide].classList.add('active')
    }

}

new SLIDER({
    id: "slider1",
    pagination: true
})