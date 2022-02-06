var players = document.getElementsByClassName('player');

function playAudio(e) {
    var music = players[e].querySelector('audio')
    var button = players[e].children[0]
    var cur = players[e].children[2]
    var durs = players[e].children[4]
    var input = players[e].children[3]
    input.max = music.duration;
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
        if (!music.paused) {
            input.value = music.currentTime;
            const curr = new Date(music.currentTime * 1000).toISOString().substr(11, 8);
            cur.innerHTML = curr;
        }
    }
}

function readMore(a) {
    var dots = document.getElementsByClassName("dots")[a];
    var moreText = document.getElementsByClassName("more")[a];

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function like(n) {
    var but = document.getElementsByClassName('like')[n].children[0];
    var box = document.getElementsByClassName('like_box')[n];
    if (but.classList.contains('fa-heart-o')) {
        but.classList.remove('fa-heart-o')
        but.classList.add('fa-heart')
        box.children[0].innerHTML = parseInt(box.children[0].innerHTML) + 1;
    } else {
        but.classList.remove('fa-heart')
        but.classList.add('fa-heart-o')
        box.children[0].innerHTML = parseInt(box.children[0].innerHTML) - 1;
    }
}