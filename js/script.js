const slides = document.querySelectorAll(".slide")
var counter = 0;


slides.forEach(
    (slide, index)=>{
    slides.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    alert()
    slideImage()
}

const goNext = () => {
    counter++
    alert()
    slideImage()
}


const slideImage = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )   
}