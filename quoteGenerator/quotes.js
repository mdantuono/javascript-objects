/*global $*/
var theQuote;
var theAuthor;
//Random number generator to choose a quote in the array.
var quote = [
    '"Fake quote :P" -Mike',
    '"Another one." -DJ Kaled',
    '“Don\'t cry because it\'s over, smile because it happened.” -Dr. Seuss',
    '“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.” - Marilyn Monroe',
    '“Be yourself; everyone else is already taken.” -Oscar Wilde',
    '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.” -Albert Einstein',
    '“So many books, so little time.” -Frank Zappa',
];

function getQuote() {
    var randomNum = Math.floor(Math.random()*7);
    document.getElementById('quote').innerHTML = quote[randomNum];
}

//Using an API to obtain quotes.
function showMe() {
    $.ajax ({
        method: 'GET',
        url: "https://talaikis.com/api/quotes/random/",
        success: function(data) {
            console.log('success', data);
            document.getElementById('quote').innerHTML = data.quote;
            document.getElementById('author').innerHTML = data.author;
            theQuote = data.quote;
            theAuthor = data.author;
        }
    });
}
//Tweet the quote and author name
$("#share-quote").on("click", function(event) {
    event.preventDefault();
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(theQuote + " -" + theAuthor));
});