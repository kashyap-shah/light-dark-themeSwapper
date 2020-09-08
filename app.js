const sunMooncontainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-button').addEventListener('click',() =>{
	document.body.classList.toggle('dark')

	const currentRotation = parseInt(getComputedStyle(sunMooncontainer).getPropertyValue('--rotation'))
	sunMooncontainer.style.setProperty('--rotation', currentRotation + 180)
})