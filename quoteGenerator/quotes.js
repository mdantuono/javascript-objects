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

// function getQuote() {
//     var randomNum = Math.floor(Math.random()*7);
//     document.getElementById('random_quote').innerHTML = quote[randomNum];
// }

//Using an API to obtain quotes.
// function getQuote() {
//     var quote = new XMLHttpRequest();
//         quote.open("GET", "https://talaikis.com/api/quotes/random/", false);
//         quote.send();
        
//         document.getElementById('random_quote').innerHTML = quote.responseText;
// }
$(function() {
    $.ajax ({
        type: 'GET',
        url: "https://talaikis.com/api/quotes/random/",
        success: function(data) {
            console.log('success', data);
        }
    });
});
// function tweetIt() {
//     document.getElementById('tweet')
// }

