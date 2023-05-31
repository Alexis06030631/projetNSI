if(process.platform !== 'linux') {
	const { exec } = require('child_process');
	return exec('rsync --recursive --exclude=node_modules ./ pi@alexis.local:/home/pi/projetNSI/')
}