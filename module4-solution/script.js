(function (){
	var names = ["Yaakov", "John", "jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
	var first_Letter = names[i].charAt(0).toLowerCase;
	if(first_Letter ===  'j'){
		speakGoodBye.speak(names[i]);
	}
	else{
		speakHello.speak(names[i]);
	}
}
})();