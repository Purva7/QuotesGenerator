var quotes = [ 'What Is Love? Love is the absence of judgement.', 'Push yourself because No one else is going to do it for you.', 'You are what you do, not what you say you will do.', 'Believe in yourself and be prepared to work hard.', 'Work hard have fun no drama.', 'Motivation will die .. Let discipline take its place.', 'It never get easier you get stronger.', 'A goal should scare you a little, & excite you A LOT.', 'Do it with passion or not at all', 'Passion changes everything.', 'If running is difficult run more.', 'People who shower first thing in the morning tend to be more creative, productive and more alert.'];

function newQuote() {
    //return Math.floor(Math.random() * 10);
    'use strict';
    var randomnum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomnum];
    
}

