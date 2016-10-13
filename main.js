$(document).ready(function generateQuote() {

	$(".showNewQuote").on("click", function() {
		$.getJSON("http://ron-swanson-quotes.herokuapp.com/v2/quotes", successHandler)
	});

	function successHandler(data) {
		var text = data[0]
		var quote= "<h2 class='quoteText'>" + text + "</h2>";
		$(".quote").html(quote);

		//twitter button is removed and re-created with the new quote 
		$('#twitter-share-button iframe').remove();
		twttr.widgets.createShareButton(
  		'',
  		document.getElementById('twitter-share-button'),
  		{
  			size: "large",
    		text: text + " #RonSwansonWordsOfWisdom", 
  		}
		);
		twttr.widgets.load();
	}

	$(".showNewQuote").trigger("click");
});