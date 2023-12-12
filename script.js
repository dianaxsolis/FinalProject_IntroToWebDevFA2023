// WEBCAM SCRIPT

var video = document.querySelector ("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices.getUserMedia({video: true})
		.then (function (stream) {
			video.srcObject = stream;
		})
		.catch(function (err0r) {
			console.log ("Something went wrong!");
		});
}

AOS.init();

// SLIDESHOW SCRIPT

let slideIndex = 0;
displayImages();

function displayImages() {
	let i;
	const x = document.getElementsByClassName ("slides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	slideIndex++;

	if (slideIndex > x.length) {
		slideIndex = 1;
	}

	x[slideIndex-1].style.display = "block";
	setTimeout (displayImages, 2000);
}