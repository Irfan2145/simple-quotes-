const quotes = [

  "Start before you feel ready.",

  "Small progress is still progress.",

  "Consistency beats motivation.",

  "Your future is built today.",

  "Keep learning. Keep building.",

  "Discipline creates success.",

  "Dream big. Start small."

];

const quoteText = document.getElementById("quote");

const newQuoteBtn = document.getElementById("newQuoteBtn");

const copyBtn = document.getElementById("copyBtn");


newQuoteBtn.addEventListener("click", function(){

  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteText.innerText = quotes[randomIndex];

});


copyBtn.addEventListener("click", function(){

  navigator.clipboard.writeText(quoteText.innerText);

  alert("Quote copied!");

});