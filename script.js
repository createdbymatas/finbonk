function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
setTimeout(() => {
    document.getElementById("createdByMatas").style.opacity = "1";
}, 100);
setTimeout(() => {
    if(document.getElementById("raide14").style.opacity != "0"){
        document.getElementById("badConnectionBg").style.bottom = "25px";
        document.getElementById("badConnectionI").style.animation = "connectionBlink 3s infinite";
    }
}, 10000);
function adjustPinnedBottom() {
    let bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.querySelector(".pinnedBottom").getBoundingClientRect(),
    kaire = elemRect.left - bodyRect.left;
    document.querySelector(".pinnedBottom").style.bottom = kaire + "px";
    document.querySelector(".langas").style.paddingBottom = (kaire + 75) + "px";
}
window.onresize = adjustPinnedBottom;

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = ()=>{
            if(xhr.status == 200 && xhr.status < 300){
                online();
            }
            else{
                offline();
            }
        }
        xhr.onerror = ()=>{
            offline();
        }
        xhr.send();
    }

    function online(){
        document.getElementById("noConnectionBg").style.bottom = "-100px";
        document.getElementById("noConnectionI").style.animation = "none";
    }
    function offline(){
        setTimeout(() => {
            document.getElementById("noConnectionBg").style.bottom = "25px";
            document.getElementById("noConnectionI").style.animation = "connectionBlink 3s infinite";
        }, 200);
    }

    setInterval(()=>{
        ajax();
    }, 100);

    function loaded(){
        adjustPinnedBottom();
        document.getElementById("pinnedBackgroundDaugiau").style.display = "block";
        setTimeout(() => {
            document.getElementById("raide14").style.opacity = "0";
            document.getElementById("badConnectionBg").style.bottom = "-100px";
            document.getElementById("badConnectionI").style.animation = "none";
            document.getElementById("rodomaDaugiau").style.bottom = "15px";
            document.getElementById("pinnedBackgroundDaugiau").style.opacity = "1";
            document.getElementById("pinnedBackgroundDaugiau").style.pointerEvents = "all";
        }, 300);
        setTimeout(() => {
            document.getElementById("raide13").style.opacity = "0";
            document.getElementById("badConnectionBg").style.bottom = "-100px";
            document.getElementById("badConnectionI").style.animation = "none";
        }, 400);
        setTimeout(() => {
            document.getElementById("raide12").style.opacity = "0";
        }, 500);
        setTimeout(() => {
            document.getElementById("raide11").style.opacity = "0";
        }, 600);
        setTimeout(() => {
            document.getElementById("raide10").style.opacity = "0";
        }, 700);
        setTimeout(() => {
            document.getElementById("raide9").style.opacity = "0";
        }, 800);
        setTimeout(() => {
            document.getElementById("raide8").style.opacity = "0";
        }, 900);
        setTimeout(() => {
            document.getElementById("raide7").style.opacity = "0";
        }, 1000);
        setTimeout(() => {
            document.getElementById("raide6").style.opacity = "0";
        }, 1100);
        setTimeout(() => {
            document.getElementById("raide5").style.opacity = "0";
        }, 1200);
        setTimeout(() => {
            document.getElementById("raide4").style.opacity = "0";
        }, 1300);
        setTimeout(() => {
            document.getElementById("raide3").style.opacity = "0";
            document.getElementById("rodomaDaugiau").style.bottom = "-100%";
            document.getElementById("pinnedBackgroundDaugiau").style.opacity = "0";
            document.getElementById("pinnedBackgroundDaugiau").style.pointerEvents = "none";
        }, 1400);
        setTimeout(() => {
            document.getElementById("raide2").style.opacity = "0";
        }, 1500);
        setTimeout(() => {
            document.getElementById("raide1").style.opacity = "0";
            document.getElementById("loading").style.transition = "0.3s";
        }, 1600);
        setTimeout(() => {
            document.getElementById("loading").style.opacity = "0";
            document.getElementById("createdByMatas").style.display = "none";
            document.querySelector(".langas").style.opacity = "1";
            document.getElementById("pinnedBackgroundDaugiau").style.display = "none";
        }, 1700);
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            adjustPinnedBottom;
        }, 2000);
    }
    
    loaded();
}

// išjungti right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// išjungti f12, ctrl+shift+i, ctrl+shift+j, ctrl+u (inspect tool)
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
){
    deny();
    return false; 
}
};

function deny(){
    sound.pause();
    soundPlayPauseIcon.classList.remove("fa-pause");
    soundPlayPauseIcon.classList.add("fa-play");
    sound.currentTime = 0;
    document.getElementById("currentTrackName").innerText = 'Garso takelio pavadinimas';
    document.getElementById("soundDuration").innerText = '0:00';

    document.getElementById("accessDenied").style.display = "flex";
    document.getElementById("uzdraustaRestart").style.animation = "prixClipFix 10s linear";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("accessDenied").style.transform = "scale(1)";
        document.getElementById("accessDenied").style.opacity = "1";
    }, 1);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 100);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 200);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 300);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 400);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 500);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 600);
    setTimeout(() => {
        location.replace("index.html");
    }, 10000);
}

// scroll'inimo animacijos, dark mode
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("infoSimtadienis").style.boxShadow = "0 0 10px #464646";
            document.getElementById("infoSimtadienis").style.width = "95%";
            document.getElementById("infoSimtadienis").style.top = "15px";
            document.getElementById("infoSimtadienis").style.left = "2.5%";
            document.getElementById("infoSimtadienis").style.left = "2.5%";
            document.getElementById("infoSimtadienis").style.borderRadius = "25px";
        }
        else{
            document.getElementById("infoSimtadienis").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoSimtadienis").style.width = "95%";
            document.getElementById("infoSimtadienis").style.top = "15px";
            document.getElementById("infoSimtadienis").style.left = "2.5%";
            document.getElementById("infoSimtadienis").style.left = "2.5%";
            document.getElementById("infoSimtadienis").style.borderRadius = "25px";
        }
    }
    else {
        document.getElementById("infoSimtadienis").style.boxShadow = "none";
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("infoSimtadienis").style.width = "100%";
            document.getElementById("infoSimtadienis").style.top = "0";
            document.getElementById("infoSimtadienis").style.left = "0";
            document.getElementById("infoSimtadienis").style.left = "0";
            document.getElementById("infoSimtadienis").style.borderRadius = "0";
        }
        else{
            document.getElementById("infoSimtadienis").style.width = "100%";
            document.getElementById("infoSimtadienis").style.top = "0";
            document.getElementById("infoSimtadienis").style.left = "0";
            document.getElementById("infoSimtadienis").style.left = "0";
            document.getElementById("infoSimtadienis").style.borderRadius = "0";
        }
    }
}



function openScript() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("scenarijusDocs").style.bottom = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function closeScript() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("scenarijusDocs").style.bottom = "-100%";
        document.querySelector(".langas").style.opacity = "1";
    }, 10);
}

function downloadScript() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.display = "flex";
        document.getElementById("atsisiunciamasScenarijus").style.display = "flex";
        document.getElementById("downloadScriptSpinnerDiv").style.animation = "spin2 0.65s linear infinite";
    }, 1);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.opacity = "1";
    }, 2);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.width = "100%";
        document.getElementById("atsisiunciamasScenarijusBg").style.height = "100%";
        document.getElementById("atsisiunciamasScenarijusBg").style.borderRadius = "0";
        document.getElementById("atsisiunciamasScenarijusBg").style.backgroundColor = "transparent";
        document.getElementById("atsisiunciamasScenarijusBg").style.top = "0";
        document.getElementById("atsisiunciamasScenarijusBg").style.right = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_script").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.opacity = "0";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.display = "none";
        document.getElementById("atsisiunciamasScenarijusBg").style.opacity = "0";
        document.getElementById("atsisiunciamasScenarijusBg").style.width = "30px";
        document.getElementById("atsisiunciamasScenarijusBg").style.height = "30px";
        document.getElementById("atsisiunciamasScenarijusBg").style.borderRadius = "25px";
        document.getElementById("atsisiunciamasScenarijusBg").style.top = "15px";
        document.getElementById("atsisiunciamasScenarijusBg").style.right = "60px";
        document.getElementById("pinnedBackground").style.opacity = "1";
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}

function daugiau() {
    document.getElementById("pinnedBackgroundDaugiau").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("rodomaDaugiau").style.bottom = "15px";
        document.getElementById("pinnedBackgroundDaugiau").style.opacity = "1";
        document.getElementById("pinnedBackgroundDaugiau").style.pointerEvents = "all";
    }, 10);
}
function uzdarytiDaugiau() {
    document.getElementById("rodomaDaugiau").style.bottom = "-100%";
    document.getElementById("pinnedBackgroundDaugiau").style.opacity = "0";
    document.getElementById("pinnedBackgroundDaugiau").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("pinnedBackgroundDaugiau").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 300);
}

function openExpenses() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("islaidosSheets").style.bottom = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function closeExpenses() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("islaidosSheets").style.bottom = "-100%";
        document.querySelector(".langas").style.opacity = "1";
    }, 10);
}

function reportError() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("klaidosPranesimas").style.bottom = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function cancelReportError() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("klaidosPranesimas").style.bottom = "-100%";
        document.querySelector(".langas").style.opacity = "1";
        document.getElementById('emptyField').style.display = "none";
    }, 10);
}

function sendError(){
    if(document.getElementById('pranesimas').value == ''){
        document.getElementById('emptyField').style.display = "block";
    }
    else{
        document.getElementById('emptyField').style.display = "none";
        document.getElementById('user').value =  document.getElementById('errorName').value;
        document.getElementById('message').value =  document.getElementById('pranesimas').value;
        document.getElementById('errorSend').style.opacity =  "0";
        setTimeout(() => {
            document.getElementById('errorSend').style.display =  "none";
            document.getElementById('errorSending').style.opacity =  "1";
        }, 300);

        setTimeout(() => {
            submitFormBtn.click();
        }, 1000);
    }
}



function openSoundTracks() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("soundManager").style.bottom = "0";
        document.getElementById("soundManagerNav").style.top = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function closeSoundTracks() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.querySelector(".langas").style.opacity = "1";
        document.getElementById("soundManager").style.bottom = "-100%";
        document.getElementById("soundManagerNav").style.top = "100%";
        document.getElementById("soundPlayer").style.bottom = '-100%';
        sound.pause();
        soundPlayPauseIcon.classList.remove("fa-pause");
        soundPlayPauseIcon.classList.add("fa-play");
        sound.currentTime = 0;
        document.getElementById("currentTrackName").innerText = 'Garso takelio pavadinimas';
        document.getElementById("soundDuration").innerText = '0:00';
        document.getElementById("soundManager").style.paddingBottom = '0';
    }, 10);
}

let progress = document.getElementById('playProgress');
let progressBg = document.getElementById('progressBg');
let sound = document.getElementById('sound');
let soundPlayPauseIcon = document.getElementById('soundPlayPauseIcon');

function playPause(){
    if(soundPlayPauseIcon.classList.contains("fa-pause")){
        sound.pause();
        soundPlayPauseIcon.classList.remove("fa-pause");
        soundPlayPauseIcon.classList.add("fa-play");
    }
    else{
        sound.play();
        soundPlayPauseIcon.classList.add("fa-pause");
        soundPlayPauseIcon.classList.remove("fa-play");
    }
}

sound.onended = function() {
    soundPlayPauseIcon.classList.remove("fa-pause");
    soundPlayPauseIcon.classList.add("fa-play");
}

sound.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progress.style.width = `${progressWidth}%`;

    let musicCurrentTime = document.getElementById("timePlayed");

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressBg.addEventListener("click", (e)=>{
    let progressWidthval = progressBg.clientWidth;
    let clickedOffSetX = e.offsetX;
    let soundDuration = sound.duration;

    sound.currentTime = (clickedOffSetX / progressWidthval) * soundDuration;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
});

function positionAudioDownloadBtn(){
    document.getElementById("atsisiunciamasAudioBg").style.transition = "none";
    let bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementById('downloadAudioBtn').getBoundingClientRect(),
    kaire = elemRect.left - bodyRect.left;
    document.getElementById("atsisiunciamasAudioBg").style.left = kaire + "px";
}

function playSound1(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/pradzia.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/pradzia.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'pradzia.mp3';
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'pradzia.mp3';
    document.getElementById("soundDuration").innerText = '0:27';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}
function playSound2(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/rap.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/rap.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'rap.mp3';
    positionAudioDownloadBtn()
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'rap.mp3';
    document.getElementById("soundDuration").innerText = '0:22';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}
function playSound3(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/burtai.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/burtai.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'burtai.mp3';
    positionAudioDownloadBtn()
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'burtai.mp3';
    document.getElementById("soundDuration").innerText = '0:47';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}
function playSound4(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/seseliai.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/seseliai.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'seseliai.mp3';
    positionAudioDownloadBtn()
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'seseliai.mp3';
    document.getElementById("soundDuration").innerText = '0:07';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}
function playSound5(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/sokis.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/sokis.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'sokis.mp3';
    positionAudioDownloadBtn()
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'sokis.mp3';
    document.getElementById("soundDuration").innerText = '02:21';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}

function downloadAudio() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.display = "flex";
        document.getElementById("atsisiunciamasAudio").style.display = "flex";
        document.getElementById("atsisiunciamasAudioBg").style.transition = "0.3s";
        document.getElementById("downloadAudioSpinnerDiv").style.animation = "spin2 0.65s linear infinite";
    }, 1);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.opacity = "1";
    }, 2);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.width = "100%";
        document.getElementById("atsisiunciamasAudioBg").style.height = "100%";
        document.getElementById("atsisiunciamasAudioBg").style.borderRadius = "0";
        document.getElementById("atsisiunciamasAudioBg").style.backgroundColor = "transparent";
        document.getElementById("atsisiunciamasAudioBg").style.bottom = "0";
        document.getElementById("atsisiunciamasAudioBg").style.left = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_audio").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.opacity = "0";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.display = "none";
        document.getElementById("atsisiunciamasAudioBg").style.opacity = "0";
        document.getElementById("atsisiunciamasAudioBg").style.width = "20px";
        document.getElementById("atsisiunciamasAudioBg").style.height = "20px";
        document.getElementById("atsisiunciamasAudioBg").style.borderRadius = "25px";
        document.getElementById("atsisiunciamasAudioBg").style.bottom = "65px";
        document.getElementById("atsisiunciamasAudioBg").style.left = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}




let inputas = "";
function keypadPress() {
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function pirmas() {
    inputas = inputas + 1;
    keypadPress();
}
function antras() {
    inputas = inputas + 2;
    keypadPress();
}
function trecias() {
    inputas = inputas + 3;
    keypadPress();
}
function ketvirtas() {
    inputas = inputas + 4;
    keypadPress();
}
function penktas() {
    inputas = inputas + 5;
    keypadPress();
}
function sestas() {
    inputas = inputas + 6;
    keypadPress();
}
function septintas() {
    inputas = inputas + 7;
    keypadPress();
}
function astuntas() {
    inputas = inputas + 8;
    keypadPress();
}
function devintas() {
    inputas = inputas + 9;
    keypadPress();
}
function nulinis() {
    inputas = inputas + 0;
    keypadPress();
}
function istrinti() {
    inputas = "";
    document.getElementById("kodas").value = '';
    document.getElementById("istrynimas").style.color = "transparent";
    document.getElementById("istrynimas").style.pointerEvents = "none";
    document.getElementById("taskelis1").style.backgroundColor = "transparent";
    document.getElementById("taskelis2").style.backgroundColor = "transparent";
    document.getElementById("taskelis3").style.backgroundColor = "transparent";
    document.getElementById("taskelis4").style.backgroundColor = "transparent";
    document.getElementById("taskelis5").style.backgroundColor = "transparent";
    document.getElementById("taskelis6").style.backgroundColor = "transparent";
}
function checkCommon() {
    document.getElementById("loading").style.display = "flex";
    document.getElementById("ivestiKoda").style.opacity = "0.3";
    document.getElementById("keypad").style.opacity = "0.3";
    document.getElementById("istrynimas").style.color = "transparent";
    document.getElementById("istrynimas").style.pointerEvents = "none";
}
function check(form)
{
    if(form.pin.value === "000000") { // simtadienis
        document.cookie = "simtadienis=true";
        checkCommon();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("simtadienis").style.display = "block";
            document.getElementById("errorName").value = 'Vardas Pavardė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("simtadienis").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else {
        checkCommon();
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-100px";
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
        }, 3600);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3700);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-100px";
        }, 3800);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3900);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "0";
            document.getElementById("loading").style.display = "none";
        }, 4000);
    }
}

simtadienis = getCookie("simtadienis");
if (simtadienis != "") {
    document.getElementById("simtadienis").style.display = "block";
    document.getElementById("simtadienis").style.paddingTop = "0";
    document.getElementById("infoSimtadienis").style.display = "flex";
    document.querySelector(".langas").style.opacity = "0";
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("simtadienis").style.display = "none";
    document.getElementById("simtadienis").style.paddingTop = "100vh";
    document.getElementById("infoSimtadienis").style.display = "none";
    if (simtadienis != "" && simtadienis != null) {
        document.getElementById("simtadienis").style.display = "none";
        document.getElementById("simtadienis").style.paddingTop = "100vh";
        document.getElementById("infoSimtadienis").style.display = "none";
    }
}

if (simtadienis != "") {
    document.getElementById("screen").style.top = "-100%";
    document.getElementById("screen").style.backgroundColor = "transparent";
    document.getElementById("display").style.top = "-100%";
    document.getElementById("errorName").value = 'Vardas Pavardė';
    setTimeout(() => {
        document.getElementById("body").style.overflowX = "hidden";
        document.getElementById("body").style.overflowY = "scroll";
    }, 2500);
}
else {
    document.getElementById("screen").style.top = "0";
    document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    document.getElementById("display").style.top = "0";
    document.getElementById("body").style.overflowX = "hidden";
    document.getElementById("body").style.overflowY = "hidden";
    if (simtadienis != "" && simtadienis != null) {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("body").style.overflowX = "hidden";
        document.getElementById("body").style.overflowY = "hidden";
    }
}

function closeSimtadienis() {
    document.cookie = "simtadienis=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("simtadienisUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("simtadienis").style.paddingTop = "100vh";
        document.getElementById("infoSimtadienis").style.display = "none";
    }, 10);
    setTimeout(() => {
        document.getElementById("simtadienisUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("simtadienis").style.display = "none";
        document.getElementById("infoSimtadienis").style.display = "none";
    }, 310);
}