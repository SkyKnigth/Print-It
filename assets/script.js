const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dotsContainer = document.querySelector(".dots")
console.log(dotsContainer);
const arrowLeft = document.querySelector(".arrow_left")
console.log(arrowLeft)
const arrowRight = document.querySelector(".arrow_right")
console.log(arrowRight)
const p = document.querySelector("#banner p")
console.log(p)
const image = document.querySelector(".banner-img")

let currentImageIndex = 0

function dotsCreation(){
	for(let i =0; i<slides.length;i++ ){
		const slideDot = document.createElement("span")
		slideDot.classList.add("dot")
		if(i===0){
			slideDot.classList.add("dot_selected") 
		}
		dotsContainer.appendChild(slideDot)
	}

}
dotsCreation()
const dots= document.querySelectorAll(".dot")
// evenement clic souris flêche

arrowLeft.addEventListener("click",function(event){
	console.log(event)
	showPreviousImage()
})

arrowRight.addEventListener("click",function(event){
	console.log(event)
	showNextImage()
})

function showImage(currentIndex){
	if (currentIndex < 0 || currentIndex>= slides.length) return
	console.log (dots)
	console.log(currentIndex)
	const src = "./assets/images/slideshow/"+ slides[currentIndex].image
	image.src=src

	p.innerHTML = slides[currentIndex].tagLine

	dots.forEach((dot, index) => {
		if (currentIndex === index) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

function showNextImage() {
	currentImageIndex = (currentImageIndex + 1) % slides.length;
	showImage(currentImageIndex);
}


function showPreviousImage() {
	console.log(currentImageIndex)
	currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length
	console.log(currentImageIndex)
	showImage(currentImageIndex);
	
}

