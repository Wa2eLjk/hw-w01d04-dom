var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

var favoriteThings = [
  'Fast cars',
  'Muscles',
  'Sleeveless t-shirts',
  'Revving my engine',
  'Living my life a quarter mile at a time',
  'Staring people down'
]


// Random quote of the day generator
function randomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length)
  document.querySelector('#quote-of-the-day').textContent = '"' + quotes[randomIndex] + '"';
};

randomQuote();

// console.log('JS is connected');
// Part 1
var txtCont = document.querySelector('#main-title');
// console.log(txtCont);
function TxtChanger(txt){
      txt.innerHTML = 'Welcome to my homepage';
      // console.log(txt.innerHTML)
      
}
TxtChanger(txtCont);

// Part 2
var bdChanger = document.querySelector('body');
function bodyChanger(BodyBac){
  BodyBac.style.backgroundColor = 'red' ;
  
}
bodyChanger(bdChanger);
// Part 3
var spTitle = document.querySelectorAll('.special-title');
 console.log(spTitle);
function fSize (sTitles){
      sTitles.style.fontSize = '2rem' ;
      // console.log(txt.innerHTML)
}
fSize(spTitle);
// Part 4


// Part 5


// Part 6


// Part 7
