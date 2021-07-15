(function (window) {
	var hello = {};
	
	var frase = "Hello";
	
  hello.say = function (nomes) {
	console.log(frase + " " + nomes);
  }
  window.hello = hello;
  })
  (window);
  