(function () {
    var nomes = ["Yay", "John", "Kai", "Joe", "Jack", "Joel", "Michael", "Burbon", "Jazz", "Thom"];
    for (var nomes in nomes) {
       var letra = nomes[nomes].charAt(0).toLowerCase();
        if (letra === 'j') {
           bye.say(nomes[nomes]);
   } else {
            hello.say(nomes[nomes]);
   }
 }
 })();