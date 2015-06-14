$(document).ready(function(){

	var sectionDetails = $('#section3').find('.section-details');
	var sectionImage = $('#section3').find('.section-image')
	swapSectionImage(sectionImage, sectionDetails);

	$(window).resize(function() {
		var sectionDetails = $('#section3').find('.section-details');
		var sectionImage = $('#section3').find('.section-image')
		swapSectionImage(sectionImage, sectionDetails);
	});

	$("#year").text( (new Date).getFullYear() );

});