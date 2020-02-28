// Added elements to the DOM
// Used Immediately Invoked Function Expressions
(function() {
	var firstQuoteText = '"What really matters is not whether we have problems, but how we go through them. We must keep going on to make it through whatever we are facing."';

	var secondQuoteText = '"Stand for something or you will fall for anything. Today\'s mighty oak is yesterday\'s nut that held its ground."';

	var thirdQuoteText = '"I have learned over the years that when one\'s mind is made up, this diminishes fear: knowing what must be done does away with fear"';
		
	var quoteList = document.createElement('ul');
	quoteList.className = 'quote';
	
	document.getElementById('img-div').appendChild(quoteList);
	
	var quoteArray = [firstQuoteText, secondQuoteText, thirdQuoteText];
	quoteArray.forEach(showQuoteArray);

	function showQuoteArray(element) {
		var quoteElement = document.createElement('li');
		quoteElement.className = 'slide';

		quoteList.appendChild(quoteElement);

		quoteElement.innerHTML += element;
	}
	
}());

// To hide HTML element
var quoteDisplay = document.querySelector('p.quote');
quoteDisplay.style.display= "block";

if (quoteDisplay.style.display === "block") {
  var quoteSlides = document.querySelectorAll("li.slide");
  var i = 0;
  setInterval(myFunction, 30000);
} else {
  quoteDisplay.style.display = "block";
}

// To display an interactive quote slide
function myFunction() {
	  quoteDisplay.style.display = "none";
		quoteSlides[i].className = "slide";
		i = (i + 1)%quoteSlides.length;
		quoteSlides[i].className = "center";
}

