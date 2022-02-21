/* Start Variables And Constant Section */

const headerSection = document.querySelector("header")

const navLinkElements = document.querySelectorAll("header .navbar .navbar-nav .nav-item .nav-link")

const brandElement = document.querySelector(".navbar .navbar-brand")

const navToggleIcon = document.querySelector(".navbar .fa-bars")

const carouselCaptionElements = document.querySelectorAll(".home .carousel .carousel-item .carousel-caption")

const nameElement = document.querySelector(".home .carousel .carousel-inner .carousel-item .carousel-caption h1")

const aboutSection = document.querySelector(".about")

/* End Variables Section */

/* Start Global Functions */

// Start TypeWriter Function

let i = 0

let text = "Hello I'am Anas Derk"

function typeWriter() {

    if (i < text.length) {

        nameElement.textContent += text.charAt(i)

        i++

        setTimeout(typeWriter, 75)

    } else {

        setTimeout(() => {

            i = 0

            nameElement.textContent = ""

            setTimeout(typeWriter, 75)
        
        }, 2000)

    }
}

typeWriter()

// ----------------------------------------------------------------

/* End Global Functions */

/* Start Header Section */

// Start headerBackgroundColorChange Function For header BackgroundColor Change On Scroll

window.onscroll = (e) => {

    if (this.scrollY > headerSection.clientHeight) {

        headerSection.style.backgroundColor = "#FFF"

        navLinkElements.forEach(navLink => {

            navLink.style.color = "#000"

            navLink.onmouseenter = function() {

                this.style.color = "#FFF"

            }

            navLink.onmouseleave = function() {

                this.style.color = "#000"

            }

        })

        brandElement.style.color = "#000"

        navToggleIcon.style.color = "#000"

    } else {

        headerSection.style.backgroundColor = "rgba(0,0,0,.2)"

        navLinkElements.forEach(navLink => {

            navLink.style.color = "#FFF"

            navLink.onmouseenter = function() {

                this.style.color = "#FFF"

            }

            navLink.onmouseleave = function() {

                this.style.color = "#FFF"

            }

        })

        brandElement.style.color = "#FFF"

        navToggleIcon.style.color = "#FFF"

    }

    if (this.scrollY >= aboutSection.offsetTop - 50) {

        headerSection.style.boxShadow = "1px 1px 10px #900c3f"

    } else {

        headerSection.style.boxShadow = "none"

    }

}

// ----------------------------------------------------------------

/* End Header Section */

/* Start Home Section */

// Start handling_carousel_caption_element_height Function

function handling_carousel_caption_element_height() {

    let carouselCaptionElementHeight = carouselCaptionElements[0].clientHeight

    carouselCaptionElements.forEach(carouselCaptionElement => {

        carouselCaptionElement.style.top = `calc(50% - ${carouselCaptionElementHeight}px / 2)`

    })

}

handling_carousel_caption_element_height()

// ----------------------------------------------------------------

/* End Home Section */