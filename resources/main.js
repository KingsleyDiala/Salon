



// Grab close and open id
const open = document.getElementById('open')
const close = document.getElementById('close')
const navLinks = document.getElementById('navigation')


navLinks.style.display = 'none'



// Toggle Menu Open
if (open) {
  open.addEventListener('click', () => {
    navLinks.style.display = 'block'
    close.style.display = 'block'
    open.style.display = 'none'
  })
}

// Toggle Menu close
if (close) {
  close.addEventListener('click', () => {
    navLinks.style.display = 'none'
    open.style.display = 'block'
    close.style.display = 'none'
  })
}



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.link')

function linkAction(){
  const navMenu = document.getElementById('navigation')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.style.display = 'none'
    close.style.display = 'none'
    open.style.display = 'block'
}
navLink.forEach(n => n.addEventListener('click', linkAction))