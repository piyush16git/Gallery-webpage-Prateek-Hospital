document.querySelectorAll('.gallery img').forEach((pic) => {
  pic.onclick = () => {
    document.querySelector('.popup-img').style.display = 'inline'
    document.querySelector('.popup-img img').src = pic.getAttribute('src')
  }
})

document.querySelector('.popup-img span').onclick = () => {
  document.querySelector('.popup-img').style.display = 'none'
}

function doctors() {
  document.getElementById('doctors').style.display = 'block'
  document.getElementById('management').style.display = 'none'
  document.getElementById('services').style.display = 'none'
  document.getElementById('e1').style.display = 'none'
  document.getElementById('e2').style.display = 'none'
  document.getElementById('e3').style.display = 'none'
}

function management() {
  document.getElementById('doctors').style.display = 'none'
  document.getElementById('management').style.display = 'block'
  document.getElementById('services').style.display = 'none'
  document.getElementById('e1').style.display = 'none'
  document.getElementById('e2').style.display = 'none'
  document.getElementById('e3').style.display = 'none'
}

function services() {
  document.getElementById('doctors').style.display = 'none'
  document.getElementById('management').style.display = 'none'
  document.getElementById('services').style.display = 'block'
  document.getElementById('e1').style.display = 'none'
  document.getElementById('e2').style.display = 'none'
  document.getElementById('e3').style.display = 'none'
}

function e1() {
  document.getElementById('doctors').style.display = 'none'
  document.getElementById('management').style.display = 'none'
  document.getElementById('services').style.display = 'none'
  document.getElementById('e1').style.display = 'block'
  document.getElementById('e2').style.display = 'none'
  document.getElementById('e3').style.display = 'none'
}

function e2() {
  document.getElementById('doctors').style.display = 'none'
  document.getElementById('management').style.display = 'none'
  document.getElementById('services').style.display = 'none'
  document.getElementById('e1').style.display = 'none'
  document.getElementById('e2').style.display = 'block'
  document.getElementById('e3').style.display = 'none'
}

function e3() {
  document.getElementById('doctors').style.display = 'none'
  document.getElementById('management').style.display = 'none'
  document.getElementById('services').style.display = 'none'
  document.getElementById('e1').style.display = 'none'
  document.getElementById('e2').style.display = 'none'
  document.getElementById('e3').style.display = 'block'
}

// Automatic Slide Show

let slideIndex = 0
showSlides()

function showSlides() {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
  setTimeout(showSlides, 2000) // Change image every 2 seconds
}