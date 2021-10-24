// Slide in on scroll Animation Service 1 (left to right)
window.addEventListener('scroll', () => {
  let  content = document.getElementById('service-1').querySelector('.img-container');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('slide-in-left')
  } else {
    content.classList.remove('slide-in-left')
  }
});

// Slide in on scroll Animation Service 1 (right to left)
window.addEventListener('scroll', () => {
  let  content = document.getElementById('service-1').querySelector('.text-container');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('slide-in-right')
  } else {
    content.classList.remove('slide-in-right')
  }
});


// ==================================

// Slide in on scroll Animation About Us (left to right)
window.addEventListener('scroll', () => {
  let  content = document.getElementById('about-us').querySelector('.container-left');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('slide-in-right')
  } else {
    content.classList.remove('slide-in-right')
  }
});

// Slide in on scroll Animation About us (right to left)
window.addEventListener('scroll', () => {
  let  content = document.getElementById('about-us').querySelector('.container-right');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('slide-in-left')
  } else {
    content.classList.remove('slide-in-left')
  }
});


//=================================
// Slide in on scroll Animation Service 2 (bottom to top)
window.addEventListener('scroll', () => {
  let  content = document.getElementById('service-2').querySelector('.top-container');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('slide-in-bottom')
  } else {
    content.classList.remove('slide-in-bottom')
  }
});

window.addEventListener('scroll', () => {
  let  content = document.getElementById('service-2').querySelector('.bottom-container');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('slide-in-bottom')
  } else {
    content.classList.remove('slide-in-bottom')
  }
});



// GALLERY ZOOM IN ANIMATION
window.addEventListener('scroll', () => {
  let  content = document.getElementById('gallery').querySelector('.container');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('zoom-in')
  } else {
    content.classList.remove('zoom-in')
  }
});


// MAKE APPOINTMENT ANIMATION

window.addEventListener('scroll', () => {
  let  content = document.getElementById('appointment').querySelector('.container-left');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('slide-in-left')
  } else {
    content.classList.remove('slide-in-left')
  }
});


window.addEventListener('scroll', () => {
  let  content = document.getElementById('appointment').querySelector('.container-right');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('slide-in-right')
  } else {
    content.classList.remove('slide-in-right')
  }
});