// On importe les bibliothèques
const {RGB_pimoroni} = require('5x5_rgb_pimoroni')
const GPIO = require('onoff').Gpio
const rgb = new RGB_pimoroni()
const {getWeather} = require('meteofrance_api')

// On définit le pin 17 comme étant un pin d'entrée pour le capteur de mouvement
const mouvementSensor = new GPIO(17, 'in', 'both')

// Pour éviter les erreurs, on arrête tout et on redémarre
rgb.Stop(true)
rgb.Stop(false)


rgb.validMark() // On affiche une croix sur la matrice pour indiquer que le programme est prêt
let TimeoutStop // On définit une variable pour le timeout d'arrêt des LEDs

getWeather("Toulouse").then((data) => {
	// On récupère les données météo de Toulouse et on garde la prévision la plus proche de maintenant
	const nowData = data.properties.forecast.sort((a, b) => Math.abs(new Date(a.time) - new Date()) - Math.abs(new Date(b.time) - new Date()))[0]

	// On affiche une animation en fonction de la météo
	if(nowData.weather_description.includes('Eclaircies')) {
		rgb.makeSun(255, 255, 0, 1, 500, 1)
	}else if(nowData.weather_description.includes('Averses')) {
		rgb.makeRain(0, 0, 255, 1, 150)
	}else {
		rgb.makeRain(0, 0, 255, 1, 300)
	}
})

// On écoute le capteur de mouvement
mouvementSensor.watch(function (err, value) {
	rgb.stopAnimations() // On arrête les animations en cours
	if(value){ // Si la valeur du capteur est à 1, le capteur a détecté un mouvement (et donc on allume les LEDs en blanc)
		clearTimeout(TimeoutStop)
		rgb.setColor(255, 255, 255, 1)
	}else {
		// Si la valeur du capteur est à 0, on met led par led les LEDs en rouge
		for (let h = 0; h < 5; h++) {
			for (let w = 0; w < 5; w++) {
				rgb.setColorLed(w, h, 255, 0, 0, 0.1)
			}
		}
		// Puis 5 secondes après, on éteint les LEDs
		TimeoutStop = setTimeout(() => {
			rgb.setColor(0, 0, 0)
		}, 2000)
	}
});