var deviceWidth = detectScreenWidth();

var isMobile = false;
if (deviceWidth <= 768) {
	isMobile = true;
}
setViewPort();


window.onorientationchange = function () {
	var orientation = window.orientation;
	switch (orientation) {
		case 0:
			window.location.reload();
			break;
		case 90:
			window.location.reload();
			break;
		case -90:
			window.location.reload();
			break;
	}
};

$(window).resize(function () {
	setViewPort();
});

function setViewPort() {
	var viewport = document.querySelector("meta[name=viewport]");
	if (isMobile) {
		viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
	} else if (!isMobile) {
		viewport.setAttribute("content", "width=960, user-scalable=no");
	}
}

function detectScreenWidth() {
	var orientation = window.orientation;
	var screenWidth = screen.width;

	if (orientation === 0 || orientation === 180) {
		orientation = 'portrait';
	}
	else if (orientation === 90 || orientation === -90) {
		orientation = 'landscape';
	}
	else {
		if (document.documentElement.clientWidth > document.documentElement.clientHeight) orientation = 'landscape';
		else orientation = 'portrait';
	}

	if (orientation === 'portrait') {
		if (screen.width > screen.height) screenWidth = screen.height;
	}
	else {
		// Landscape. Take larger of the two dimensions.
		if (screen.width < screen.height) screenWidth = screen.height;

	}
	return screenWidth;
}
