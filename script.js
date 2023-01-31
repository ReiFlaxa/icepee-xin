    var i = 0;
var txt = 'Mau masak apa hari ini';
var speed = 100;


function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
