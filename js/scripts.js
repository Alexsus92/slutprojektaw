(function($){

/* Responsive menu */

	// Vid klick på meny-ikonen i header
	$(".menu-icon").click(function(){
		// Toggla den responsiva menyn
		$(".responsive-menu").slideToggle();

		// Toggla meny- och stäng-ikonen
		$(this).children().toggle();
	});

		/* Gallery */

	//Vid klick på en bild  i sidospalten
	$(".sidebar > img").click(function() {

		// Spara ned värdet i src attributet i en variabel
		var source = $ (this).attr("src");

		// Ersätt värdet i src attributet för den stora bilden 
		// med det från den lilla bilden vi just klickat på
		$("#main").attr("src", source);
	});

		/* modal*/

	// Vid klick på knappen
	$("form .btn-primary").click(function(){
		// Visa den transparenta bakgrunden
		$("#fade").show();

		// Visa modalen
		$("#modal").show();
	});

	// Vid klick på den transparenta bakgrunden
	$("#fade").click(function(){
		// Göm modalen
		$("#modal").hide();

		// Göm den transparenta bakgrunden
		$(this).hide();
	})

})(jQuery);





	