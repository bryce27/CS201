$(document).ready(function() {
	$('#myCarousel1').carousel({
	interval: 13000
	})

	$('#myCarousel2').carousel({
	interval: 13000
	})
    
    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
    
    
});

