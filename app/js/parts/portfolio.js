function initPortfolio(element, filePath) {
	return {
		changedData: null,
		readFile() {
			const rawFile = new XMLHttpRequest()
			rawFile.overrideMimeType('application/json')
			rawFile.open('GET', filePath, true)
			rawFile.onreadystatechange = () => {
				if (rawFile.readyState === 4 && rawFile.status == '200') {
					this.fileData = JSON.parse(rawFile.responseText)
					this.changedData = [...this.fileData]
					this.sortBy('createDate', 'new')
					this.printPorfolioItems(this.changedData)
				}
			}
			rawFile.send(null)
		},
		printPorfolioItems(data) {
			this.clearPorfolioList()
			data.forEach((el) => {
				this.addPortfolioItem(el)
			})
		},
		addPortfolioItem(el) {
			const protfolioDate = new Date(el.createDate)
			const clone = $template.content.cloneNode(true)
			const portfolioItem = clone.querySelector('.portfolio__item')
			const portfolioImg = portfolioItem.querySelector('.portfolio__img')
			const portfolioDate = portfolioItem.querySelector('.portfolio__date')
			const portfolioName = portfolioItem.querySelector('.portfolio__name')
			const portfolioContent = portfolioItem.querySelector('.portfolio__content')
			const portfolioMoreInfo = portfolioItem.querySelector('.portfolio__more-info')
			const portfolioLink = portfolioItem.querySelector('.portfolio__link')

			portfolioItem.setAttribute('data-create-date', el.createDate)
			portfolioItem.setAttribute('data-type', el.type)
			portfolioItem.setAttribute('role', 'listitem')

			portfolioName.setAttribute('data-lang', '')
			portfolioContent.setAttribute('data-lang', '')
			portfolioMoreInfo.setAttribute('data-lang', 'html')

			portfolioImg.src = el.img
			portfolioDate.setAttribute('datetime', el.createDate)
			portfolioDate.innerHTML = this.getDateToItem(protfolioDate)
			portfolioName.innerHTML = el.name
			portfolioContent.innerHTML = el.content
			portfolioMoreInfo.innerHTML = el.more_info
			portfolioLink.href = el.link

			portfolioItem.appendChild(portfolioImg)
			element.appendChild(portfolioItem)
		},
		getDateToItem(date) {
			let monthNames
			if (currentLang === 'en') monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
			else monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
			return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
		},
		clearPorfolioList() {
			element.innerHTML = ''
		},
		filterBy(field, value) {
			if (value === 'all') {
				this.changedData = [...this.fileData]
				return
			}
			this.changedData = this.fileData.filter((el) => el[field] === value)
		},
		sortBy(field, value) {
			switch (value) {
				case 'new':
					this.changedData = this.changedData.sort((a, b) => (a[field] < b[field] ? 1 : -1))
					break
				case 'old':
					this.changedData = this.changedData.sort((a, b) => (a[field] > b[field] ? 1 : -1))
					break
				default:
					this.changedData = this.shuffle(this.changedData)
			}
		},
		shuffle(array) {
			let currentIndex = array.length,
				randomIndex
			while (currentIndex != 0) {
				randomIndex = Math.floor(Math.random() * currentIndex)
				currentIndex--
				;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
			}
			return array
		},
	}
}

const $portfolioList = document.querySelector('.portfolio__list')
const $template = document.querySelector('#portfolioItemColne')

if ($portfolioList) {
	const myPortfolioList = initPortfolio($portfolioList, './files/portfolio/data.json')
	myPortfolioList.readFile()
	// костыль для firefox (не загружает перевод сам)
	if (currentLang !== 'ru')
		setTimeout(() => {
			setLang(currentLang)
		}, 1)

	// -----------------Сортировка портфолио-----------------
	const $selects = document.querySelectorAll('.options__select')
	if ($selects) {
		$selects.forEach(($select) => {
			$select.addEventListener('change', () => changeSelect($selects))
			$select.addEventListener('menuchange', () => changeSelect($selects))
		})
	}

	function changeSelect($selects) {
		const data = {}
		$selects.forEach((select) => {
			data[select.dataset.type] = { name: select.name, value: select.value }
		})
		myPortfolioList.filterBy(data.filter.name, data.filter.value)
		myPortfolioList.sortBy(data.sort.name, data.sort.value)
		myPortfolioList.printPorfolioItems(myPortfolioList.changedData)
		if (currentLang !== 'ru') setLang(currentLang)
	}
	// ------------------------------------------------------
}
