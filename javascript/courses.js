//navbar
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  })
})


$(function(){

		$("#cart-items").slideUp();
		$(".cart").on("click", function () {
		$("#cart-items").slideToggle();
		});

		$("#items-basket").text("(" + ($("#list-item").children().length) + ")");


		$(".item").on("click", function () {
      $("#cart-items").slideDown();
     setTimeout(function(){
        $("#cart-items").slideUp();
     }, 10000)
			//add items to basket
			$(this).each(function () {
				var name = $(this).children(".item-detail").children("h4").text();
				var remove = "<button class='remove'> X </button>";
				var cena = "<span class='eachPrice'>" + (parseFloat($(this).children(".item-detail").children(".prices").children(".price").text())) + "</span>";
				$("#list-item").append("<li>" + name + "&#09; - &#09;" + cena + "ZAR" + remove + "</li>");

				//number of items in basket
				$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
				$("#items-basket").text();

	        //calculate total price
	        var totalPrice = 0;
		        $(".eachPrice").each(function (){
		          var cenaEach = parseFloat($(this).text());
		          totalPrice+=cenaEach;
		        });
		        $("#total-price").text(totalPrice + "ZAR");
			});

			//remove items from basket
			$(".remove").on("click", function () {
				$(this).parent().remove();

		        var totalPrice = 0;
		        $(".eachPrice").each(function (){
		          var cenaEach = parseFloat($(this).text());
		          totalPrice+=cenaEach;
		        });
		        $("#total-price").text(totalPrice + "ZAR");
				$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
			});
		});
})
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
