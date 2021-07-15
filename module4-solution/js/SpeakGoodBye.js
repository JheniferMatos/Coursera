(function (window) {
	var bye = {};

	var frase = "Good Bye";

  bye.say = function (nomes) {
	console.log(frase + " " + nomes);
  }
  window.bye = bye;
})
(window);