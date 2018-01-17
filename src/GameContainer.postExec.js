const fs = require('fs');
const path = require('path');

const webview = document.querySelector('webview#touken');

webview.addEventListener('dom-ready', function () {
	fs.readFile(path.join(__dirname, 'GameContainer.inject.css'), 'utf8', (err, t) => {
		if (err) {
			console.error(err);
		} else {
			webview.insertCSS(t);
		}
	})
});

// webview.addEventListener("did-get-response-details", function(details) {
//     console.log(details);
// }); 