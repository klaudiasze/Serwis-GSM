const search = document.querySelector('.search')
const li = document.querySelectorAll('li')
const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

document.addEventListener('DOMContentLoaded', function () {
	const navBar = document.querySelector('.navbar')
	const allNavLinks = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 300) {
			navBar.classList.add('shadow-bg')
		} else {
			navBar.classList.remove('shadow-bg')
		}
	}
	allNavLinks.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
	window.addEventListener('scroll', addShadow)

})

const searchEngine = e => {
	const text = e.target.value.toLowerCase()

	li.forEach(el => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
}

const handleNav = () => {
	nav.classList.toggle('nav--active')
	navBtnBars.classList.remove('black-bars-color')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
	handleNavItemsAnimation()
}
const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}



search.addEventListener('keyup', searchEngine)
handleCurrentYear()
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
