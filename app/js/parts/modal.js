const humburgerBtn = document.querySelector('.hamburger')
const logo = document.querySelector('.header__logo')
const $header = document.querySelector('.header')
const mainNav = new ModalDK({
	selector: '.nav',
	openBtnsSelector: ['.hamburger'],
	collapseOnFocusOut: true,
	onOpen() {
		humburgerBtn.classList.add('is-active')
		humburgerBtn.setAttribute('aria-expanded', 'true')
		logo.classList.add('header__logo--active')
		$header.classList.add('header--nav-active')
	},
	onClose() {
		humburgerBtn.classList.remove('is-active')
		humburgerBtn.setAttribute('aria-expanded', 'false')
		logo.classList.remove('header__logo--active')
		$header.classList.remove('header--nav-active')
	},
})
