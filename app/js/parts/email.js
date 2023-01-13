// 06cc9a6d-ae50-4dfb-ac79-1ec7f4823816
const $btnSendMail = document.querySelector('#btnSendMail')
const $form = document.querySelector('#form')
const sendMail = (e) => {
	const $inputName = $form.querySelector('[name="name"]')
	const $inputEmail = $form.querySelector('[name="email"]')
	const $inputMsg = $form.querySelector('[name="message"]')

	const emailParams = {
		from_name: $inputName.value,
		reply_to: $inputEmail.value,
		message: $inputMsg.value,
	}

	e.preventDefault()

	if (FormValid.checkValid($form)) {
		$btnSendMail.classList.add('msg--sending')
		$btnSendMail.setAttribute('disabled', '')
		const removeDone = () => {
			$btnSendMail.classList.remove('msg')
			document.querySelector('.msg--done').removeEventListener('animationend', removeDone)
			$btnSendMail.classList.remove('msg--done')
		}

		// // таймаут для "отправки"
		// setTimeout(() => {
		//    $btnSendMail.classList.remove("msg--sending")
		//    $btnSendMail.removeAttribute("disabled")
		//    $btnSendMail.classList.add("msg")
		//    $btnSendMail.classList.add("msg--send")
		//    $btnSendMail.setAttribute("data-type", "ok")
		// }, 2000)

		emailjs.send('service_aq7mfsb', 'template_sty9rtw', emailParams).then(
			function (response) {
				$btnSendMail.classList.remove('msg--sending')
				$btnSendMail.removeAttribute('disabled')
				$btnSendMail.classList.add('msg')
				$btnSendMail.classList.add('msg--send')
				$btnSendMail.setAttribute('data-type', 'ok')
			},
			function (error) {
				$btnSendMail.classList.remove('msg--sending')
				$btnSendMail.removeAttribute('disabled')
				$btnSendMail.classList.add('msg')
				$btnSendMail.classList.add('msg--send')
				$btnSendMail.setAttribute('data-type', 'error')
				console.log('failed send email: ', error)
			}
		)
		// таймаут по которому показываем иконку
		setTimeout(() => {
			$btnSendMail.classList.remove('msg--send')
			$btnSendMail.removeAttribute('data-type')
			$btnSendMail.classList.add('msg--done')

			document.querySelector('.msg--done').addEventListener('animationend', removeDone)
			$form.reset()
		}, 3000)
	}
}

if ($btnSendMail) {
	if (typeof emailjs !== 'undefined') emailjs.init('2WyxNkrXZ5yfWQ-uh')
	$btnSendMail.addEventListener('click', (e) => sendMail(e))
}
