function swapSectionImage(imageDiv, detailsDiv) {
	var winWidth = window.innerWidth ;
	console.log(winWidth);
	var trackerDownSize;
	var trackerUpSize;
	if (winWidth < 992) {
		imageDiv.detach().insertAfter(detailsDiv);
		trackerDownSize = true;
		trackerUpSize = false;
	} else if (winWidth >= 992) {
		imageDiv.detach().insertBefore(detailsDiv);
		trackerUpSize = true;
		trackerDownSize = false;
	}
}