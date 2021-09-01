    /*Resume Profil*/
    var i = 0;
    var txt = "Je m'appelle Pascal Kien";
    var speed = 60;
    /*---*/
    function typeWriter() {
        if (i < txt.length) {
        document.getElementById("text-resume").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
    }