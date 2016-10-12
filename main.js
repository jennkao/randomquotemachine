$(document).ready(function generateQuote() {

	$(".showNewQuote").on("click", function() {
		$.getJSON("http://ron-swanson-quotes.herokuapp.com/v2/quotes", successHandler)
	});

	function successHandler(data) {
		var quote= "<h2 class='quoteText'>" + data[0] + "</h2>";
		var twitterNewHref = "https://twitter.com/intent/tweet?text=" + encodeURI(data[0]);
		$(".quote").html(quote);
		twttr.widgets.createShareButton(
  		'',
  		document.getElementById('twitter-share-button'),
  		{
    		text: data[0] + " #RonSwansonWordsOfWisdom"
  		}
		);
	}

	$(".showNewQuote").trigger("click");
});