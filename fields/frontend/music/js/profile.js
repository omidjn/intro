function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
var players = document.getElementsByClassName('player');

function playAudio(e) {
    var music = players[e].querySelector('audio')
    var button = players[e].children[0]
    var cur = players[e].children[2]
    var durs = players[e].children[4]
    var input = players[e].children[3]
    input.max = music.duration;
    // document.write()
    if (button.querySelector('i').classList.contains('fa-play')) {
        music.play();
        button.querySelector('i').classList.remove('fa-play');
        button.querySelector('i').classList.add('fa-pause');
        const dur = new Date(music.duration * 1000).toISOString().substr(11, 8);
        durs.innerHTML = dur;
    } else if (button.querySelector('i').classList.contains('fa-pause')) {
        music.pause();
        button.querySelector('i').classList.remove('fa-pause');
        button.querySelector('i').classList.add('fa-play');
    }
    var intervalID = window.setInterval(myCallback, 500);

    function myCallback() {
        input.value = music.currentTime;
        const curr = new Date(music.currentTime * 1000).toISOString().substr(11, 8);
        cur.innerHTML = curr;
    }
}

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}