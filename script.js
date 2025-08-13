// Disable right-click
// document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
)
    return false;
};
function loadFunction() {
    setTimeout(() => {  
        document.getElementById("background").style.opacity = "0";
    }, 1000);
    setTimeout(() => {  
        document.getElementById("background").style.display = "none";
        document.getElementById("busyBottom").style.bottom = "-30px";
    }, 1300);
}
function run() {
    document.getElementById("logo").style.pointerEvents = "none";
    document.getElementById("logo").style.animation = "none";
    setTimeout(() => {  
        document.getElementById("check").style.color = "green";
        document.getElementById("check").style.borderColor = "green";
        document.getElementById("0").style.color = "white";
        document.getElementById("0").style.borderColor = "white";
        document.getElementById("x").style.color = "red";
        document.getElementById("x").style.borderColor = "red";
    }, 300);
    setTimeout(() => {  
        document.getElementById("7").style.color = "white";
        document.getElementById("7").style.borderColor = "white";
        document.getElementById("8").style.color = "white";
        document.getElementById("8").style.borderColor = "white";
        document.getElementById("9").style.color = "white";
        document.getElementById("9").style.borderColor = "white";
    }, 600);
    setTimeout(() => {  
        document.getElementById("4").style.color = "white";
        document.getElementById("4").style.borderColor = "white";
        document.getElementById("5").style.color = "white";
        document.getElementById("5").style.borderColor = "white";
        document.getElementById("6").style.color = "white";
        document.getElementById("6").style.borderColor = "white";
    }, 900);
    setTimeout(() => {  
        document.getElementById("1").style.color = "white";
        document.getElementById("1").style.borderColor = "white";
        document.getElementById("2").style.color = "white";
        document.getElementById("2").style.borderColor = "white";
        document.getElementById("3").style.color = "white";
        document.getElementById("3").style.borderColor = "white";
    }, 1200);
    setTimeout(() => {  
        document.getElementById("screen").style.backgroundColor = "white";
    }, 1500);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 1800);
    setTimeout(() => {  
        document.getElementById("logo").style.color = "white";
    }, 1900);
    setTimeout(() => {  
        document.getElementById("created").style.opacity = "1";
    }, 2100);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
    }, 2300);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 2800);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
    }, 3300);
    setTimeout(() => {
        document.getElementById("raide14").style.opacity = "0";
    }, 3700);
    setTimeout(() => {
        document.getElementById("raide13").style.opacity = "0";
        document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 3800);
    setTimeout(() => {
        document.getElementById("raide12").style.opacity = "0";
    }, 3900);
    setTimeout(() => {
        document.getElementById("raide11").style.opacity = "0";
    }, 4000);
    setTimeout(() => {
        document.getElementById("raide10").style.opacity = "0";
    }, 4100);
    setTimeout(() => {
        document.getElementById("raide9").style.opacity = "0";
    }, 4200);
    setTimeout(() => {
        document.getElementById("raide8").style.opacity = "0";
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
    }, 4300);
    setTimeout(() => {
        document.getElementById("raide7").style.opacity = "0";
    }, 4400);
    setTimeout(() => {
        document.getElementById("raide6").style.opacity = "0";
    }, 4500);
    setTimeout(() => {
        document.getElementById("raide5").style.opacity = "0";
    }, 4600);
    setTimeout(() => {
        document.getElementById("raide4").style.opacity = "0";
    }, 4700);
    setTimeout(() => {
        document.getElementById("raide3").style.opacity = "0";
        document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 4800);
    setTimeout(() => {
        document.getElementById("raide2").style.opacity = "0";
    }, 4900);
    setTimeout(() => {
        document.getElementById("raide1").style.opacity = "0";
    }, 5000);
    setTimeout(() => {  
        document.getElementById("loading").style.opacity = "1";
        document.getElementById("busyEN").style.opacity = "1";
        document.getElementById("created").style.opacity = "0";
        document.getElementById("1").style.color = "darkslategrey";
        document.getElementById("1").style.borderColor = "darkslategrey";
        document.getElementById("2").style.color = "darkslategrey";
        document.getElementById("2").style.borderColor = "darkslategrey";
        document.getElementById("3").style.color = "darkslategrey";
        document.getElementById("3").style.borderColor = "darkslategrey";
        document.getElementById("4").style.color = "darkslategrey";
        document.getElementById("4").style.borderColor = "darkslategrey";
        document.getElementById("5").style.color = "darkslategrey";
        document.getElementById("5").style.borderColor = "darkslategrey";
        document.getElementById("6").style.color = "darkslategrey";
        document.getElementById("6").style.borderColor = "darkslategrey";
        document.getElementById("7").style.color = "darkslategrey";
        document.getElementById("7").style.borderColor = "darkslategrey";
        document.getElementById("8").style.color = "darkslategrey";
        document.getElementById("8").style.borderColor = "darkslategrey";
        document.getElementById("9").style.color = "darkslategrey";
        document.getElementById("9").style.borderColor = "darkslategrey";
        document.getElementById("x").style.color = "darkslategrey";
        document.getElementById("x").style.borderColor = "darkslategrey";
        document.getElementById("0").style.color = "darkslategrey";
        document.getElementById("0").style.borderColor = "darkslategrey";
        document.getElementById("check").style.color = "darkslategrey";
        document.getElementById("check").style.borderColor = "darkslategrey";
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
    }, 5300);
    setTimeout(() => {  
        document.getElementById("signal").style.opacity = "1";
    }, 7000);
    setTimeout(() => {  
        document.getElementById("signal").style.opacity = "0";
    }, 7500);
    setTimeout(() => {  
        document.getElementById("signal").style.opacity = "1";
    }, 8000);
    setTimeout(() => {  
        document.getElementById("signal").style.opacity = "0";
    }, 8500);
    setTimeout(() => {  
        document.getElementById("signal").style.opacity = "1";
        document.getElementById("signal").style.color = "green";
        document.getElementById("bank").style.opacity = "1";
    }, 9000);
    setTimeout(() => {  
        document.getElementById("bank").style.opacity = "0";
    }, 9500);
    setTimeout(() => {  
        document.getElementById("bank").style.opacity = "1";
    }, 10000);
    setTimeout(() => {  
        document.getElementById("bank").style.opacity = "0";
    }, 10500);
    setTimeout(() => {  
        document.getElementById("busyEN").style.opacity = "0";
    }, 10925);
    setTimeout(() => {  
        document.getElementById("bank").style.opacity = "1";
        document.getElementById("connectedBank").style.opacity = "1";
        document.getElementById("bank").style.color = "green";
        document.getElementById("cloud").style.opacity = "1";
    }, 11000);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "1";
    }, 11075);
    setTimeout(() => {  
        document.getElementById("cloud").style.opacity = "0";
    }, 12000);
    setTimeout(() => {  
        document.getElementById("cloud").style.opacity = "1";
    }, 13000);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "0";
        document.getElementById("loading").style.opacity = "0";
    }, 13850);
    setTimeout(() => {
        document.getElementById("ready").style.opacity = "1";
        document.getElementById("cloud").style.opacity = "0";
        document.getElementById("contactless").style.opacity = "1";
    }, 14000);
    setTimeout(() => {
        document.getElementById("startAdvice").style.opacity = "1";
        document.getElementById("check").style.pointerEvents = "all";
        document.getElementById("check").style.color = "green";
        document.getElementById("check").style.borderColor = "green";
    }, 15000);
    setTimeout(() => {
        setInterval(function() {
            document.getElementById("cloud").style.opacity = "1";
            setTimeout(() => {  
                document.getElementById("cloud").style.opacity = "0";
            }, 1000);
            setTimeout(() => {  
                document.getElementById("cloud").style.opacity = "1";
            }, 2000);
            setTimeout(() => {
                document.getElementById("cloud").style.opacity = "0";
            }, 3000);
        }, 20 * 1000);
    }, 16000);
}



function startTransaction() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("check").style.borderColor = "darkslategrey";
    document.getElementById("check").style.transition = "none";
    document.getElementById("check").style.pointerEvents = "none";
    setTimeout(() => {  
        document.getElementById("check").style.borderColor = "green";
        document.getElementById("check").style.transition = "0.3s";
        document.getElementById("startAdvice").style.opacity = "0";
        document.getElementById("ready").style.opacity = "0";
    }, 100);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "1";
        document.getElementById("loading").style.opacity = "1";
        document.getElementById("check").style.borderColor = "darkslategrey";
        document.getElementById("check").style.color = "darkslategrey";
    }, 250);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "0";
        document.getElementById("loading").style.opacity = "0";
    }, 3250);
    setTimeout(() => {  
        document.getElementById("amount").style.opacity = "1";
        document.getElementById("amountInput").style.opacity = "1";
    }, 3400);
    setTimeout(() => {  
        document.getElementById("1").style.color = "white";
        document.getElementById("1").style.borderColor = "white";
        document.getElementById("2").style.color = "white";
        document.getElementById("2").style.borderColor = "white";
        document.getElementById("3").style.color = "white";
        document.getElementById("3").style.borderColor = "white";
        document.getElementById("4").style.color = "white";
        document.getElementById("4").style.borderColor = "white";
        document.getElementById("5").style.color = "white";
        document.getElementById("5").style.borderColor = "white";
        document.getElementById("6").style.color = "white";
        document.getElementById("6").style.borderColor = "white";
        document.getElementById("7").style.color = "white";
        document.getElementById("7").style.borderColor = "white";
        document.getElementById("8").style.color = "white";
        document.getElementById("8").style.borderColor = "white";
        document.getElementById("9").style.color = "white";
        document.getElementById("9").style.borderColor = "white";
        document.getElementById("x").style.color = "red";
        document.getElementById("x").style.borderColor = "red";
        document.getElementById("0").style.color = "white";
        document.getElementById("0").style.borderColor = "white";
    }, 4400);
    setTimeout(() => {  
        document.getElementById("amountCurrency").style.opacity = "1";
        document.getElementById("1").style.pointerEvents = "all";
        document.getElementById("2").style.pointerEvents = "all";
        document.getElementById("3").style.pointerEvents = "all";
        document.getElementById("4").style.pointerEvents = "all";
        document.getElementById("5").style.pointerEvents = "all";
        document.getElementById("6").style.pointerEvents = "all";
        document.getElementById("7").style.pointerEvents = "all";
        document.getElementById("8").style.pointerEvents = "all";
        document.getElementById("9").style.pointerEvents = "all";
        document.getElementById("0").style.pointerEvents = "all";
        document.getElementById("x").style.display = "none";
        document.getElementById("x2").style.display = "flex";
        document.getElementById("x2").style.borderColor = "red";
        document.getElementById("x2").style.color = "red";
        document.getElementById("check").style.pointerEvents = "all";
        document.getElementById("check").style.display = "none";
        document.getElementById("check2").style.display = "flex";
        document.getElementById("check2").style.pointerEvents = "none";
    }, 4700);
}
function openTransaction() {
            document.getElementById('repeat').muted = false;
            document.getElementById("repeat").play();

            document.getElementById('click').muted = false;
            document.getElementById("click").play();
            document.getElementById('click').currentTime = 0;
            document.getElementById("check2").style.borderColor = "darkslategrey";
            document.getElementById("check2").style.transition = "none";
            document.getElementById("check2").style.pointerEvents = "none";
            document.getElementById("1").style.pointerEvents = "none";
            document.getElementById("2").style.pointerEvents = "none";
            document.getElementById("3").style.pointerEvents = "none";
            document.getElementById("4").style.pointerEvents = "none";
            document.getElementById("5").style.pointerEvents = "none";
            document.getElementById("6").style.pointerEvents = "none";
            document.getElementById("7").style.pointerEvents = "none";
            document.getElementById("8").style.pointerEvents = "none";
            document.getElementById("9").style.pointerEvents = "none";
            document.getElementById("0").style.pointerEvents = "none";
            document.getElementById("x").style.display = "flex";
            document.getElementById("x").style.pointerEvents = "none";
            document.getElementById("x2").style.display = "none";
            setTimeout(() => {  
                document.getElementById("repeat").pause();
            }, 2);
            setTimeout(() => {  
                document.getElementById("check2").style.borderColor = "green";
                document.getElementById("check2").style.transition = "0.3s";
                document.getElementById("amountCurrency").style.opacity = "0";
                document.getElementById("amount").style.opacity = "0";
                document.getElementById("amountInput").style.opacity = "0";
            }, 100);
            setTimeout(() => {  
                document.getElementById("dirba").style.opacity = "1";
                document.getElementById("loading").style.opacity = "1";
                document.getElementById("1").style.color = "darkslategrey";
                document.getElementById("1").style.borderColor = "darkslategrey";
                document.getElementById("2").style.color = "darkslategrey";
                document.getElementById("2").style.borderColor = "darkslategrey";
                document.getElementById("3").style.color = "darkslategrey";
                document.getElementById("3").style.borderColor = "darkslategrey";
                document.getElementById("4").style.color = "darkslategrey";
                document.getElementById("4").style.borderColor = "darkslategrey";
                document.getElementById("5").style.color = "darkslategrey";
                document.getElementById("5").style.borderColor = "darkslategrey";
                document.getElementById("6").style.color = "darkslategrey";
                document.getElementById("6").style.borderColor = "darkslategrey";
                document.getElementById("7").style.color = "darkslategrey";
                document.getElementById("7").style.borderColor = "darkslategrey";
                document.getElementById("8").style.color = "darkslategrey";
                document.getElementById("8").style.borderColor = "darkslategrey";
                document.getElementById("9").style.color = "darkslategrey";
                document.getElementById("9").style.borderColor = "darkslategrey";
                document.getElementById("x").style.color = "darkslategrey";
                document.getElementById("x").style.borderColor = "darkslategrey";
                document.getElementById("x2").style.color = "darkslategrey";
                document.getElementById("x2").style.borderColor = "darkslategrey";
                document.getElementById("0").style.color = "darkslategrey";
                document.getElementById("0").style.borderColor = "darkslategrey";
                document.getElementById("check2").style.color = "darkslategrey";
                document.getElementById("check2").style.borderColor = "darkslategrey";
            }, 250);
            setTimeout(() => {  
                document.getElementById("dirba").style.opacity = "0";
                document.getElementById("loading").style.opacity = "0";
            }, 5250);
            setTimeout(() => {  
                document.getElementById("insertCard").style.opacity = "1";
                document.getElementById("amountInput").style.opacity = "1";
                document.getElementById("amountInput").value = document.getElementById("amountInput").value + document.getElementById("spanCurrency").innerHTML;
            }, 5400);
            setTimeout(() => {  
                document.getElementById("x3").style.display = "flex";
                document.getElementById("x").style.display = "none";
            }, 6350);
            setTimeout(() => {  
                document.getElementById("contactlessAvailable").style.opacity = "1";
                document.getElementById("applepay").style.opacity = "1";
                document.getElementById("googlepay").style.opacity = "1";
                document.getElementById("insertCardComplete").style.display = "block";
                document.getElementById("screen").style.pointerEvents = "all";
                document.getElementById('repeat').currentTime = 0;
                document.getElementById("repeat").play();
                document.getElementById("x3").style.color = "red";
                document.getElementById("x3").style.borderColor = "red";
            }, 6400);
        }
let audio = document.getElementById("repeat");
audio.onended = function() {
    setTimeout(() => {  
        document.getElementById('repeat').muted = false;
        document.getElementById("repeat").play();
        document.getElementById('repeat').currentTime = 0;
    }, 600);
};
function atsauktiInsert() {
    document.getElementById("insertCardComplete").style.display = "none";
    document.getElementById("screen").style.pointerEvents = "none";
    document.getElementById("repeat").pause();
    document.getElementById('repeat').currentTime = 0;
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("check").style.display = "flex";
    document.getElementById("check").style.pointerEvents = "none";
    document.getElementById("check").style.borderColor = "darkslategrey";
    document.getElementById("check").style.color = "darkslategrey";
    document.getElementById("check2").style.display = "none";
    document.getElementById("check2").style.pointerEvents = "none";
    document.getElementById("x3").style.borderColor = "darkslategrey";
    document.getElementById("x3").style.transition = "none";
    document.getElementById("x3").style.pointerEvents = "none";
    document.getElementById("x").style.pointerEvents = "none";
    setTimeout(() => {  
        document.getElementById("x3").style.borderColor = "red";
        document.getElementById("x3").style.transition = "0.3s";
        document.getElementById("contactlessAvailable").style.opacity = "0";
        document.getElementById("applepay").style.opacity = "0";
        document.getElementById("googlepay").style.opacity = "0";
        document.getElementById("insertCard").style.opacity = "0";
        document.getElementById("amountInput").style.opacity = "0";
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 100);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 200);
    setTimeout(() => {  
        document.getElementById("x3").style.borderColor = "darkslategrey";
        document.getElementById("x3").style.color = "darkslategrey";
        document.getElementById("dirba").style.opacity = "1";
        document.getElementById("loading").style.opacity = "1";
    }, 250);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 300);
    setTimeout(() => {  
        document.getElementById("amountInput").value = '';
        document.getElementById("x").style.display = "flex";
        document.getElementById("x3").style.display = "none";
        document.getElementById("x3").style.pointerEvents = "all";
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 400);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 500);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 600);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "0";
        document.getElementById("loading").style.opacity = "0";
    }, 3250);
    setTimeout(() => {  
        document.getElementById("ready").style.opacity = "1";
    }, 3400);
    setTimeout(() => {
        document.getElementById("startAdvice").style.opacity = "1";
        document.getElementById("check").style.pointerEvents = "all";
        document.getElementById("check").style.borderColor = "green";
        document.getElementById("check").style.color = "green";
    }, 4400);
}
function cardInserted() {
    document.getElementById("insertCardComplete").style.display = "none";
    document.getElementById("screen").style.pointerEvents = "none";
    document.getElementById("repeat").pause();
    document.getElementById('repeat').currentTime = 0;
    document.getElementById("x3").style.borderColor = "darkslategrey";
    document.getElementById("x3").style.color = "darkslategrey";
    document.getElementById("x3").style.pointerEvents = "none";
    setTimeout(() => {  
        document.getElementById("insertCard").style.opacity = "0";
        document.getElementById("contactlessAvailable").style.opacity = "0";
        document.getElementById("applepay").style.opacity = "0";
        document.getElementById("googlepay").style.opacity = "0";
        document.getElementById("contactless").style.opacity = "0";
        document.getElementById("amountInput").style.opacity = "0";
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 100);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 200);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "1";
        document.getElementById("loading").style.opacity = "1";
    }, 250);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
        document.getElementById("x3").style.display = "none";
        document.getElementById("x3").style.pointerEvents = "all";
        document.getElementById("x4").style.display = "flex";
        document.getElementById("check2").style.display = "none";
        document.getElementById("check3").style.display = "flex";
        document.getElementById("1").style.display = "none";
        document.getElementById("1a").style.display = "flex";
        document.getElementById("2").style.display = "none";
        document.getElementById("2a").style.display = "flex";
        document.getElementById("3").style.display = "none";
        document.getElementById("3a").style.display = "flex";
        document.getElementById("4").style.display = "none";
        document.getElementById("4a").style.display = "flex";
        document.getElementById("5").style.display = "none";
        document.getElementById("5a").style.display = "flex";
        document.getElementById("6").style.display = "none";
        document.getElementById("6a").style.display = "flex";
        document.getElementById("7").style.display = "none";
        document.getElementById("7a").style.display = "flex";
        document.getElementById("8").style.display = "none";
        document.getElementById("8a").style.display = "flex";
        document.getElementById("9").style.display = "none";
        document.getElementById("9a").style.display = "flex";
        document.getElementById("0").style.display = "none";
        document.getElementById("0a").style.display = "flex";
    }, 300);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
        document.getElementById("amountInput").value = '';
    }, 400);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 500);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 600);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "0";
        document.getElementById("loading").style.opacity = "0";
    }, 5250);
    setTimeout(() => {  
        document.getElementById("enterPin").style.opacity = "1";
        document.getElementById("pinInput").style.opacity = "1";
    }, 5400);
    setTimeout(() => {  
        document.getElementById("attemptsRemaining").style.opacity = "1";
        document.getElementById("x4").style.borderColor = "red";
        document.getElementById("x4").style.color = "red";
        document.getElementById("1a").style.borderColor = "white";
        document.getElementById("1a").style.color = "white";
        document.getElementById("1a").style.pointerEvents = "all";
        document.getElementById("2a").style.borderColor = "white";
        document.getElementById("2a").style.color = "white";
        document.getElementById("2a").style.pointerEvents = "all";
        document.getElementById("3a").style.borderColor = "white";
        document.getElementById("3a").style.color = "white";
        document.getElementById("3a").style.pointerEvents = "all";
        document.getElementById("4a").style.borderColor = "white";
        document.getElementById("4a").style.color = "white";
        document.getElementById("4a").style.pointerEvents = "all";
        document.getElementById("5a").style.borderColor = "white";
        document.getElementById("5a").style.color = "white";
        document.getElementById("5a").style.pointerEvents = "all";
        document.getElementById("6a").style.borderColor = "white";
        document.getElementById("6a").style.color = "white";
        document.getElementById("6a").style.pointerEvents = "all";
        document.getElementById("7a").style.borderColor = "white";
        document.getElementById("7a").style.color = "white";
        document.getElementById("7a").style.pointerEvents = "all";
        document.getElementById("8a").style.borderColor = "white";
        document.getElementById("8a").style.color = "white";
        document.getElementById("8a").style.pointerEvents = "all";
        document.getElementById("9a").style.borderColor = "white";
        document.getElementById("9a").style.color = "white";
        document.getElementById("9a").style.pointerEvents = "all";
        document.getElementById("0a").style.borderColor = "white";
        document.getElementById("0a").style.color = "white";
        document.getElementById("0a").style.pointerEvents = "all";
    }, 6400);
}
function vienas() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("1").style.borderColor = "darkslategrey";
    document.getElementById("1").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '1';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("1").style.borderColor = "white";
        document.getElementById("1").style.transition = "0.3s";
    }, 100);
}
function du() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("2").style.borderColor = "darkslategrey";
    document.getElementById("2").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '2';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("2").style.borderColor = "white";
        document.getElementById("2").style.transition = "0.3s";
    }, 100);
}
function trys() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("3").style.borderColor = "darkslategrey";
    document.getElementById("3").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '3';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("3").style.borderColor = "white";
        document.getElementById("3").style.transition = "0.3s";
    }, 100);
}
function keturi() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("4").style.borderColor = "darkslategrey";
    document.getElementById("4").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '4';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("4").style.borderColor = "white";
        document.getElementById("4").style.transition = "0.3s";
    }, 100);
}
function penki() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("5").style.borderColor = "darkslategrey";
    document.getElementById("5").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '5';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("5").style.borderColor = "white";
        document.getElementById("5").style.transition = "0.3s";
    }, 100);
}
function sesi() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("6").style.borderColor = "darkslategrey";
    document.getElementById("6").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '6';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("6").style.borderColor = "white";
        document.getElementById("6").style.transition = "0.3s";
    }, 100);
}
function septyni() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("7").style.borderColor = "darkslategrey";
    document.getElementById("7").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '7';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("7").style.borderColor = "white";
        document.getElementById("7").style.transition = "0.3s";
    }, 100);
}
function astuoni() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("8").style.borderColor = "darkslategrey";
    document.getElementById("8").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '8';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("8").style.borderColor = "white";
        document.getElementById("8").style.transition = "0.3s";
    }, 100);
}
function devyni() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("9").style.borderColor = "darkslategrey";
    document.getElementById("9").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '9';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("9").style.borderColor = "white";
        document.getElementById("9").style.transition = "0.3s";
    }, 100);
}

function nulis() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.display = "flex";
    document.getElementById("x").style.pointerEvents = "all";
    document.getElementById("check2").style.pointerEvents = "all";
    document.getElementById("check2").style.color = "green";
    document.getElementById("check2").style.borderColor = "green";
    document.getElementById("x2").style.display = "none";
    document.getElementById("0").style.borderColor = "darkslategrey";
    document.getElementById("0").style.transition = "none";
    document.getElementById("amountInput").value = document.getElementById("amountInput").value + '0';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("0").style.borderColor = "white";
        document.getElementById("0").style.transition = "0.3s";
    }, 100);
}
function trinti() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x").style.transition = "none";
    document.getElementById("x").style.borderColor = "darkslategrey";
    document.getElementById("x").style.pointerEvents = "none";
    document.getElementById("check2").style.pointerEvents = "none";
    document.getElementById("check2").style.color = "darkslategrey";
    document.getElementById("check2").style.borderColor = "darkslategrey";
    document.getElementById("amountInput").value = '';
    maxAmount();
    setTimeout(() => {  
        document.getElementById("x").style.borderColor = "red";
        document.getElementById("x").style.transition = "0.3s";
    }, 100);
    setTimeout(() => {  
        document.getElementById("x").style.display = "none";
        document.getElementById("x2").style.display = "flex";
    }, 400);
}
function maxAmount() {
    if(document.getElementById("amountInput").value.length === "10")
    {
        document.getElementById("1").style.pointerEvents = "none";
        document.getElementById("2").style.pointerEvents = "none";
        document.getElementById("3").style.pointerEvents = "none";
        document.getElementById("4").style.pointerEvents = "none";
        document.getElementById("5").style.pointerEvents = "none";
        document.getElementById("6").style.pointerEvents = "none";
        document.getElementById("7").style.pointerEvents = "none";
        document.getElementById("8").style.pointerEvents = "none";
        document.getElementById("9").style.pointerEvents = "none";
        document.getElementById("0").style.pointerEvents = "none";
        setTimeout(() => {  
            document.getElementById("1").style.borderColor = "darkslategrey";
            document.getElementById("1").style.color = "darkslategrey";
            document.getElementById("2").style.borderColor = "darkslategrey";
            document.getElementById("2").style.color = "darkslategrey";
            document.getElementById("3").style.borderColor = "darkslategrey";
            document.getElementById("3").style.color = "darkslategrey";
            document.getElementById("4").style.borderColor = "darkslategrey";
            document.getElementById("4").style.color = "darkslategrey";
            document.getElementById("5").style.borderColor = "darkslategrey";
            document.getElementById("5").style.color = "darkslategrey";
            document.getElementById("6").style.borderColor = "darkslategrey";
            document.getElementById("6").style.color = "darkslategrey";
            document.getElementById("7").style.borderColor = "darkslategrey";
            document.getElementById("7").style.color = "darkslategrey";
            document.getElementById("8").style.borderColor = "darkslategrey";
            document.getElementById("8").style.color = "darkslategrey";
            document.getElementById("9").style.borderColor = "darkslategrey";
            document.getElementById("9").style.color = "darkslategrey";
            document.getElementById("0").style.borderColor = "darkslategrey";
            document.getElementById("0").style.color = "darkslategrey";
        }, 101);
    }
    else{
        document.getElementById("1").style.pointerEvents = "all";
        document.getElementById("2").style.pointerEvents = "all";
        document.getElementById("3").style.pointerEvents = "all";
        document.getElementById("4").style.pointerEvents = "all";
        document.getElementById("5").style.pointerEvents = "all";
        document.getElementById("6").style.pointerEvents = "all";
        document.getElementById("7").style.pointerEvents = "all";
        document.getElementById("8").style.pointerEvents = "all";
        document.getElementById("9").style.pointerEvents = "all";
        document.getElementById("0").style.pointerEvents = "all";
        setTimeout(() => {  
            document.getElementById("1").style.borderColor = "white";
            document.getElementById("1").style.color = "white";
            document.getElementById("2").style.borderColor = "white";
            document.getElementById("2").style.color = "white";
            document.getElementById("3").style.borderColor = "white";
            document.getElementById("3").style.color = "white";
            document.getElementById("4").style.borderColor = "white";
            document.getElementById("4").style.color = "white";
            document.getElementById("5").style.borderColor = "white";
            document.getElementById("5").style.color = "white";
            document.getElementById("6").style.borderColor = "white";
            document.getElementById("6").style.color = "white";
            document.getElementById("7").style.borderColor = "white";
            document.getElementById("7").style.color = "white";
            document.getElementById("8").style.borderColor = "white";
            document.getElementById("8").style.color = "white";
            document.getElementById("9").style.borderColor = "white";
            document.getElementById("9").style.color = "white";
            document.getElementById("0").style.borderColor = "white";
            document.getElementById("0").style.color = "white";
        }, 101);
    }
}
function atsaukti() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x2").style.transition = "none";
    document.getElementById("x2").style.borderColor = "darkslategrey";
    document.getElementById("amountInput").value = '';
    document.getElementById("check").style.display = "flex";
    document.getElementById("check").style.pointerEvents = "none";
    document.getElementById("check2").style.display = "none";
    document.getElementById("check2").style.pointerEvents = "none";
    document.getElementById("1").style.pointerEvents = "none";
    document.getElementById("2").style.pointerEvents = "none";
    document.getElementById("3").style.pointerEvents = "none";
    document.getElementById("4").style.pointerEvents = "none";
    document.getElementById("5").style.pointerEvents = "none";
    document.getElementById("6").style.pointerEvents = "none";
    document.getElementById("7").style.pointerEvents = "none";
    document.getElementById("8").style.pointerEvents = "none";
    document.getElementById("9").style.pointerEvents = "none";
    document.getElementById("0").style.pointerEvents = "none";
    document.getElementById("x").style.pointerEvents = "none";
    document.getElementById("x2").style.pointerEvents = "none";
    setTimeout(() => {  
        document.getElementById("x2").style.borderColor = "red";
        document.getElementById("x2").style.transition = "0.3s";
        document.getElementById("amount").style.opacity = "0";
        document.getElementById("amountInput").style.opacity = "0";
        document.getElementById("amountCurrency").style.opacity = "0";
    }, 100);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "1";
        document.getElementById("loading").style.opacity = "1";
        document.getElementById("1").style.color = "darkslategrey";
        document.getElementById("1").style.borderColor = "darkslategrey";
        document.getElementById("2").style.color = "darkslategrey";
        document.getElementById("2").style.borderColor = "darkslategrey";
        document.getElementById("3").style.color = "darkslategrey";
        document.getElementById("3").style.borderColor = "darkslategrey";
        document.getElementById("4").style.color = "darkslategrey";
        document.getElementById("4").style.borderColor = "darkslategrey";
        document.getElementById("5").style.color = "darkslategrey";
        document.getElementById("5").style.borderColor = "darkslategrey";
        document.getElementById("6").style.color = "darkslategrey";
        document.getElementById("6").style.borderColor = "darkslategrey";
        document.getElementById("7").style.color = "darkslategrey";
        document.getElementById("7").style.borderColor = "darkslategrey";
        document.getElementById("8").style.color = "darkslategrey";
        document.getElementById("8").style.borderColor = "darkslategrey";
        document.getElementById("9").style.color = "darkslategrey";
        document.getElementById("9").style.borderColor = "darkslategrey";
        document.getElementById("x").style.color = "darkslategrey";
        document.getElementById("x").style.borderColor = "darkslategrey";
        document.getElementById("x2").style.color = "darkslategrey";
        document.getElementById("x2").style.borderColor = "darkslategrey";
        document.getElementById("0").style.color = "darkslategrey";
        document.getElementById("0").style.borderColor = "darkslategrey";
        document.getElementById("check").style.color = "darkslategrey";
        document.getElementById("check").style.borderColor = "darkslategrey";
    }, 250);
    setTimeout(() => {  
        document.getElementById("x").style.display = "flex";
        document.getElementById("x2").style.display = "none";
        document.getElementById("x2").style.pointerEvents = "all";
        document.getElementById("x2").style.color = "white";
        document.getElementById("x2").style.borderColor = "white";
    }, 400);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "0";
        document.getElementById("loading").style.opacity = "0";
    }, 3250);
    setTimeout(() => {  
        document.getElementById("ready").style.opacity = "1";
    }, 3400);
    setTimeout(() => {
        document.getElementById("startAdvice").style.opacity = "1";
        document.getElementById("check").style.pointerEvents = "all";
        document.getElementById("check").style.color = "green";
        document.getElementById("check").style.borderColor = "green";
    }, 4400);
}
function atsauktiMokejima() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("check").style.display = "flex";
    document.getElementById("check").style.pointerEvents = "none";
    document.getElementById("check").style.borderColor = "darkslategrey";
    document.getElementById("check").style.color = "darkslategrey";
    document.getElementById("check3").style.display = "none";
    document.getElementById("check3").style.pointerEvents = "none";
    document.getElementById("x4").style.borderColor = "darkslategrey";
    document.getElementById("x4").style.transition = "none";
    document.getElementById("x4").style.pointerEvents = "none";
    document.getElementById("x").style.pointerEvents = "none";
    setTimeout(() => {  
        document.getElementById("x4").style.borderColor = "red";
        document.getElementById("x4").style.transition = "0.3s";
        document.getElementById("attemptsRemaining").style.opacity = "0";
        document.getElementById("enterPin").style.opacity = "0";
        document.getElementById("pinInput").style.opacity = "0";
    }, 100);
    setTimeout(() => {  
        document.getElementById("x4").style.borderColor = "darkslategrey";
        document.getElementById("x4").style.color = "darkslategrey";
        document.getElementById("1a").style.borderColor = "darkslategrey";
        document.getElementById("1a").style.color = "darkslategrey";
        document.getElementById("1a").style.pointerEvents = "none";
        document.getElementById("2a").style.borderColor = "darkslategrey";
        document.getElementById("2a").style.color = "darkslategrey";
        document.getElementById("2a").style.pointerEvents = "none";
        document.getElementById("3a").style.borderColor = "darkslategrey";
        document.getElementById("3a").style.color = "darkslategrey";
        document.getElementById("3a").style.pointerEvents = "none";
        document.getElementById("4a").style.borderColor = "darkslategrey";
        document.getElementById("4a").style.color = "darkslategrey";
        document.getElementById("4a").style.pointerEvents = "none";
        document.getElementById("5a").style.borderColor = "darkslategrey";
        document.getElementById("5a").style.color = "darkslategrey";
        document.getElementById("5a").style.pointerEvents = "none";
        document.getElementById("6a").style.borderColor = "darkslategrey";
        document.getElementById("6a").style.color = "darkslategrey";
        document.getElementById("6a").style.pointerEvents = "none";
        document.getElementById("7a").style.borderColor = "darkslategrey";
        document.getElementById("7a").style.color = "darkslategrey";
        document.getElementById("7a").style.pointerEvents = "none";
        document.getElementById("8a").style.borderColor = "darkslategrey";
        document.getElementById("8a").style.color = "darkslategrey";
        document.getElementById("8a").style.pointerEvents = "none";
        document.getElementById("9a").style.borderColor = "darkslategrey";
        document.getElementById("9a").style.color = "darkslategrey";
        document.getElementById("9a").style.pointerEvents = "none";
        document.getElementById("0a").style.borderColor = "darkslategrey";
        document.getElementById("0a").style.color = "darkslategrey";
        document.getElementById("0a").style.pointerEvents = "none";
        document.getElementById("dirba").style.opacity = "1";
        document.getElementById("loading").style.opacity = "1";
    }, 250);
    setTimeout(() => {  
        document.getElementById("pinInput").value = '';
        document.getElementById("x").style.display = "flex";
        document.getElementById("x4").style.display = "none";
        document.getElementById("x4").style.pointerEvents = "all";
        document.getElementById("1a").style.display = "none";
        document.getElementById("1").style.display = "flex";
        document.getElementById("2a").style.display = "none";
        document.getElementById("2").style.display = "flex";
        document.getElementById("3a").style.display = "none";
        document.getElementById("3").style.display = "flex";
        document.getElementById("4a").style.display = "none";
        document.getElementById("4").style.display = "flex";
        document.getElementById("5a").style.display = "none";
        document.getElementById("5").style.display = "flex";
        document.getElementById("6a").style.display = "none";
        document.getElementById("6").style.display = "flex";
        document.getElementById("7a").style.display = "none";
        document.getElementById("7").style.display = "flex";
        document.getElementById("8a").style.display = "none";
        document.getElementById("8").style.display = "flex";
        document.getElementById("9a").style.display = "none";
        document.getElementById("9").style.display = "flex";
        document.getElementById("0a").style.display = "none";
        document.getElementById("0").style.display = "flex";
    }, 400);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "0";
        document.getElementById("loading").style.opacity = "0";
    }, 3250);
    setTimeout(() => {  
        document.getElementById("ready").style.opacity = "1";
    }, 3400);
    setTimeout(() => {
        document.getElementById("startAdvice").style.opacity = "1";
        document.getElementById("check").style.pointerEvents = "all";
        document.getElementById("check").style.borderColor = "green";
        document.getElementById("check").style.color = "green";
    }, 4400);
}
function vienasA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("1a").style.borderColor = "darkslategrey";
    document.getElementById("1a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("1a").style.borderColor = "white";
        document.getElementById("1a").style.transition = "0.3s";
    }, 100);
}
function duA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("2a").style.borderColor = "darkslategrey";
    document.getElementById("2a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("2a").style.borderColor = "white";
        document.getElementById("2a").style.transition = "0.3s";
    }, 100);
}
function trysA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("3a").style.borderColor = "darkslategrey";
    document.getElementById("3a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("3a").style.borderColor = "white";
        document.getElementById("3a").style.transition = "0.3s";
    }, 100);
}
function keturiA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("4a").style.borderColor = "darkslategrey";
    document.getElementById("4a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("4a").style.borderColor = "white";
        document.getElementById("4a").style.transition = "0.3s";
    }, 100);
}
function penkiA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("5a").style.borderColor = "darkslategrey";
    document.getElementById("5a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("5a").style.borderColor = "white";
        document.getElementById("5a").style.transition = "0.3s";
    }, 100);
}
function sesiA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("6a").style.borderColor = "darkslategrey";
    document.getElementById("6a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("6a").style.borderColor = "white";
        document.getElementById("6a").style.transition = "0.3s";
    }, 100);
}
function septyniA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("7a").style.borderColor = "darkslategrey";
    document.getElementById("7a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("7a").style.borderColor = "white";
        document.getElementById("7a").style.transition = "0.3s";
    }, 100);
}
function astuoniA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("8a").style.borderColor = "darkslategrey";
    document.getElementById("8a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("8a").style.borderColor = "white";
        document.getElementById("8a").style.transition = "0.3s";
    }, 100);
}
function devyniA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("9a").style.borderColor = "darkslategrey";
    document.getElementById("9a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("9a").style.borderColor = "white";
        document.getElementById("9a").style.transition = "0.3s";
    }, 100);
}

function nulisA() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.display = "flex";
    document.getElementById("x5").style.pointerEvents = "all";
    document.getElementById("x4").style.display = "none";
    document.getElementById("0a").style.borderColor = "darkslategrey";
    document.getElementById("0a").style.transition = "none";
    document.getElementById("pinInput").value = document.getElementById("pinInput").value + '*';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("0a").style.borderColor = "white";
        document.getElementById("0a").style.transition = "0.3s";
    }, 100);
}
function trintiPin() {
    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("x5").style.transition = "none";
    document.getElementById("x5").style.borderColor = "darkslategrey";
    document.getElementById("x5").style.pointerEvents = "none";
    document.getElementById("pinInput").value = '';
    hideKeyboardPin();
    confirmCheckShow();
    setTimeout(() => {  
        document.getElementById("x5").style.borderColor = "red";
        document.getElementById("x5").style.transition = "0.3s";
    }, 100);
    setTimeout(() => {  
        document.getElementById("x5").style.display = "none";
        document.getElementById("x4").style.display = "flex";
    }, 400);
}
function hideKeyboardPin() {
    if (document.getElementById("pinInput").value === "******") {
        document.getElementById("1a").style.pointerEvents = "none";
        document.getElementById("2a").style.pointerEvents = "none";
        document.getElementById("3a").style.pointerEvents = "none";
        document.getElementById("4a").style.pointerEvents = "none";
        document.getElementById("5a").style.pointerEvents = "none";
        document.getElementById("6a").style.pointerEvents = "none";
        document.getElementById("7a").style.pointerEvents = "none";
        document.getElementById("8a").style.pointerEvents = "none";
        document.getElementById("9a").style.pointerEvents = "none";
        document.getElementById("0a").style.pointerEvents = "none";
        setTimeout(() => {  
            document.getElementById("1a").style.borderColor = "darkslategrey";
            document.getElementById("1a").style.color = "darkslategrey";
            document.getElementById("2a").style.borderColor = "darkslategrey";
            document.getElementById("2a").style.color = "darkslategrey";
            document.getElementById("3a").style.borderColor = "darkslategrey";
            document.getElementById("3a").style.color = "darkslategrey";
            document.getElementById("4a").style.borderColor = "darkslategrey";
            document.getElementById("4a").style.color = "darkslategrey";
            document.getElementById("5a").style.borderColor = "darkslategrey";
            document.getElementById("5a").style.color = "darkslategrey";
            document.getElementById("6a").style.borderColor = "darkslategrey";
            document.getElementById("6a").style.color = "darkslategrey";
            document.getElementById("7a").style.borderColor = "darkslategrey";
            document.getElementById("7a").style.color = "darkslategrey";
            document.getElementById("8a").style.borderColor = "darkslategrey";
            document.getElementById("8a").style.color = "darkslategrey";
            document.getElementById("9a").style.borderColor = "darkslategrey";
            document.getElementById("9a").style.color = "darkslategrey";
            document.getElementById("0a").style.borderColor = "darkslategrey";
            document.getElementById("0a").style.color = "darkslategrey";
        }, 101);
    }
    else{
        document.getElementById("1a").style.pointerEvents = "all";
        document.getElementById("2a").style.pointerEvents = "all";
        document.getElementById("3a").style.pointerEvents = "all";
        document.getElementById("4a").style.pointerEvents = "all";
        document.getElementById("5a").style.pointerEvents = "all";
        document.getElementById("6a").style.pointerEvents = "all";
        document.getElementById("7a").style.pointerEvents = "all";
        document.getElementById("8a").style.pointerEvents = "all";
        document.getElementById("9a").style.pointerEvents = "all";
        document.getElementById("0a").style.pointerEvents = "all";
        setTimeout(() => {  
            document.getElementById("1a").style.borderColor = "white";
            document.getElementById("1a").style.color = "white";
            document.getElementById("2a").style.borderColor = "white";
            document.getElementById("2a").style.color = "white";
            document.getElementById("3a").style.borderColor = "white";
            document.getElementById("3a").style.color = "white";
            document.getElementById("4a").style.borderColor = "white";
            document.getElementById("4a").style.color = "white";
            document.getElementById("5a").style.borderColor = "white";
            document.getElementById("5a").style.color = "white";
            document.getElementById("6a").style.borderColor = "white";
            document.getElementById("6a").style.color = "white";
            document.getElementById("7a").style.borderColor = "white";
            document.getElementById("7a").style.color = "white";
            document.getElementById("8a").style.borderColor = "white";
            document.getElementById("8a").style.color = "white";
            document.getElementById("9a").style.borderColor = "white";
            document.getElementById("9a").style.color = "white";
            document.getElementById("0a").style.borderColor = "white";
            document.getElementById("0a").style.color = "white";
        }, 101);
    }
}
function confirmCheckShow() {
    if (document.getElementById("pinInput").value === "****" || document.getElementById("pinInput").value === "*****" || document.getElementById("pinInput").value === "******") {
        document.getElementById("check3").style.pointerEvents = "all";
        document.getElementById("check3").style.color = "green";
        document.getElementById("check3").style.borderColor = "green";
    }
    else{
        document.getElementById("check3").style.pointerEvents = "none";
        document.getElementById("check3").style.color = "darkslategrey";
        document.getElementById("check3").style.borderColor = "darkslategrey";
    }
}
function baigtiMokejima() {
    document.getElementById('repeat').muted = false;
    document.getElementById("repeat").play();
    document.getElementById('confirmed').muted = false;
    document.getElementById("confirmed").play();

    document.getElementById('click').muted = false;
    document.getElementById("click").play();
    document.getElementById('click').currentTime = 0;
    document.getElementById("check3").style.borderColor = "darkslategrey";
    document.getElementById("check3").style.transition = "none";
    document.getElementById("check3").style.pointerEvents = "none";
    document.getElementById("x5").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("repeat").pause();
        document.getElementById("confirmed").pause();
    }, 2);
    setTimeout(() => {  
        document.getElementById("check3").style.borderColor = "green";
        document.getElementById("check3").style.transition = "0.3s";
        document.getElementById("attemptsRemaining").style.opacity = "0";
        document.getElementById("enterPin").style.opacity = "0";
        document.getElementById("pinInput").style.opacity = "0";
    }, 100);
    setTimeout(() => {  
        document.getElementById("x5").style.borderColor = "darkslategrey";
        document.getElementById("x5").style.color = "darkslategrey";
        document.getElementById("check3").style.borderColor = "darkslategrey";
        document.getElementById("check3").style.color = "darkslategrey";
        document.getElementById("1a").style.borderColor = "darkslategrey";
        document.getElementById("1a").style.color = "darkslategrey";
        document.getElementById("1a").style.pointerEvents = "none";
        document.getElementById("2a").style.borderColor = "darkslategrey";
        document.getElementById("2a").style.color = "darkslategrey";
        document.getElementById("2a").style.pointerEvents = "none";
        document.getElementById("3a").style.borderColor = "darkslategrey";
        document.getElementById("3a").style.color = "darkslategrey";
        document.getElementById("3a").style.pointerEvents = "none";
        document.getElementById("4a").style.borderColor = "darkslategrey";
        document.getElementById("4a").style.color = "darkslategrey";
        document.getElementById("4a").style.pointerEvents = "none";
        document.getElementById("5a").style.borderColor = "darkslategrey";
        document.getElementById("5a").style.color = "darkslategrey";
        document.getElementById("5a").style.pointerEvents = "none";
        document.getElementById("6a").style.borderColor = "darkslategrey";
        document.getElementById("6a").style.color = "darkslategrey";
        document.getElementById("6a").style.pointerEvents = "none";
        document.getElementById("7a").style.borderColor = "darkslategrey";
        document.getElementById("7a").style.color = "darkslategrey";
        document.getElementById("7a").style.pointerEvents = "none";
        document.getElementById("8a").style.borderColor = "darkslategrey";
        document.getElementById("8a").style.color = "darkslategrey";
        document.getElementById("8a").style.pointerEvents = "none";
        document.getElementById("9a").style.borderColor = "darkslategrey";
        document.getElementById("9a").style.color = "darkslategrey";
        document.getElementById("9a").style.pointerEvents = "none";
        document.getElementById("0a").style.borderColor = "darkslategrey";
        document.getElementById("0a").style.color = "darkslategrey";
        document.getElementById("0a").style.pointerEvents = "none";
        document.getElementById("dirba").style.opacity = "1";
        document.getElementById("loading").style.opacity = "1";
    }, 250);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "0";
        document.getElementById("loading").style.opacity = "0";
    }, 10250);
    setTimeout(() => {  
        document.getElementById("approved").style.opacity = "1";
        document.getElementById('confirmed').currentTime = 0;
        document.getElementById("confirmed").play();
    }, 10400);
    setTimeout(() => {
        document.getElementById("check3").style.display = "none";
        document.getElementById("check").style.display = "flex";
        document.getElementById("x5").style.display = "none";
        document.getElementById("x5").style.color = "red";
        document.getElementById("x5").style.borderColor = "red";
        document.getElementById("x4").style.color = "darkslategrey";
        document.getElementById("x4").style.borderColor = "darkslategrey";
        document.getElementById("x").style.display = "flex";
        document.getElementById("1a").style.display = "none";
        document.getElementById("2a").style.display = "none";
        document.getElementById("3a").style.display = "none";
        document.getElementById("4a").style.display = "none";
        document.getElementById("5a").style.display = "none";
        document.getElementById("6a").style.display = "none";
        document.getElementById("7a").style.display = "none";
        document.getElementById("8a").style.display = "none";
        document.getElementById("9a").style.display = "none";
        document.getElementById("0a").style.display = "none";
        document.getElementById("1").style.display = "flex";
        document.getElementById("2").style.display = "flex";
        document.getElementById("3").style.display = "flex";
        document.getElementById("4").style.display = "flex";
        document.getElementById("5").style.display = "flex";
        document.getElementById("6").style.display = "flex";
        document.getElementById("7").style.display = "flex";
        document.getElementById("8").style.display = "flex";
        document.getElementById("9").style.display = "flex";
        document.getElementById("0").style.display = "flex";
        document.getElementById("pinInput").value = '';
    }, 11000);
    setTimeout(() => {
        document.getElementById("approved").style.opacity = "0";
    }, 14250);
    setTimeout(() => {
        document.getElementById("removeCard").style.opacity = "1";
        document.getElementById('repeat').currentTime = 0;
        document.getElementById("repeat").play();
        document.getElementById("removeCardComplete").style.display = "block";
    }, 14400);
}
function cardRemoved() {
    document.getElementById("removeCardComplete").style.display = "none";
    document.getElementById("repeat").pause();
    document.getElementById('repeat').currentTime = 0;
    setTimeout(() => {  
        document.getElementById("removeCard").style.opacity = "0";
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 100);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 200);
    setTimeout(() => {  
        document.getElementById("ready").style.opacity = "1";
        document.getElementById("fundsPending").style.opacity = "1";
        document.getElementById("fundsPending").style.color = "orange";
        document.getElementById("contactless").style.opacity = "1";
    }, 250);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 300);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 400);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 500);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 600);
    setTimeout(() => {  
        document.getElementById("startAdvice").style.opacity = "1";
        document.getElementById("check").style.color = "green";
        document.getElementById("check").style.borderColor = "green";
        document.getElementById("check").style.pointerEvents = "all";
    }, 1250);
    setTimeout(() => {  
        document.getElementById("fundsPending").style.color = "green";
    }, 10250);
    setTimeout(() => {  
        document.getElementById("fundsPending").style.opacity = "0";
    }, 13250);
    setTimeout(() => {  
        document.getElementById("fundsPending").style.color = "black";
    }, 13400);
}
function contactless() {
    document.getElementById('confirmed').muted = false;
    document.getElementById("confirmed").play();

    document.getElementById("insertCardComplete").style.display = "none";
    document.getElementById("screen").style.pointerEvents = "none";
    document.getElementById('beep').muted = false;
    document.getElementById("beep").play();
    document.getElementById('beep').currentTime = 0;
    document.getElementById("repeat").pause();
    document.getElementById('repeat').currentTime = 0;
    document.getElementById("x3").style.borderColor = "darkslategrey";
    document.getElementById("x3").style.color = "darkslategrey";
    document.getElementById("x3").style.pointerEvents = "none";
    document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
    document.getElementById("insertCard").style.opacity = "0";
    document.getElementById("contactlessAvailable").style.opacity = "0";
    document.getElementById("amountInput").style.opacity = "0";
    setTimeout(() => {  
        document.getElementById("confirmed").pause();
    }, 100);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 100);
    setTimeout(() => {  
        document.getElementById("dirba").style.opacity = "1";
        document.getElementById("loading").style.opacity = "1";
        document.getElementById("contactless").style.opacity = "0";
    }, 150);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 200);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
        document.getElementById("x3").style.display = "none";
        document.getElementById("x3").style.pointerEvents = "all";
        document.getElementById("x").style.display = "flex";
        document.getElementById("x").style.pointerEvents = "none";
        document.getElementById("check2").style.display = "none";
        document.getElementById("check").style.display = "flex";
        document.getElementById("check").style.pointerEvents = "none";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("check2").style.pointerEvents = "none";
    }, 300);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
        document.getElementById("amountInput").value = '';
    }, 400);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
    }, 500);
    setTimeout(() => {  
        document.getElementById("repeat").pause();
        document.getElementById('repeat').currentTime = 0;
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
    }, 600);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "1";
    }, 650);
    setTimeout(() => {  
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 900);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "0";
    }, 1150);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "1";
    }, 1650);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
    }, 2000);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "0";
    }, 2150);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 2500);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "1";
    }, 2650);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
    }, 3000);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "0";
    }, 3150);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 3500);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "1";
    }, 3650);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
    }, 4000);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "0";
    }, 4150);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 4500);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "1";
    }, 4650);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
    }, 5000);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "0";
    }, 5150);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias2").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias3").style.backgroundColor = "yellowgreen";
        document.getElementById("zalias4").style.backgroundColor = "yellowgreen";
    }, 5500);
    setTimeout(() => {  
        document.getElementById("contactless").style.opacity = "1";
    }, 5650);
    setTimeout(() => {  
        document.getElementById("zalias1").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias2").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias3").style.backgroundColor = "darkslategrey";
        document.getElementById("zalias4").style.backgroundColor = "darkslategrey";
        document.getElementById("dirba").style.opacity = "0";
        document.getElementById("loading").style.opacity = "0";
    }, 6000);
    setTimeout(() => {  
        document.getElementById("contactlessSuccess").style.opacity = "1";
        document.getElementById("applepay").style.opacity = "0";
        document.getElementById("googlepay").style.opacity = "0";
        document.getElementById('confirmed').currentTime = 0;
        document.getElementById("confirmed").play();
    }, 6150);
    setTimeout(() => {  
        document.getElementById("contactlessSuccess").style.opacity = "0";
    }, 9150);
    setTimeout(() => {  
        document.getElementById("ready").style.opacity = "1";
        document.getElementById("fundsPending").style.opacity = "1";
        document.getElementById("fundsPending").style.color = "orange";
    }, 9300);
    setTimeout(() => {  
        document.getElementById("startAdvice").style.opacity = "1";
        document.getElementById("check").style.color = "green";
        document.getElementById("check").style.borderColor = "green";
        document.getElementById("check").style.pointerEvents = "all";
    }, 10300);
    setTimeout(() => {  
        document.getElementById("fundsPending").style.color = "green";
    }, 18300);
    setTimeout(() => {  
        document.getElementById("fundsPending").style.opacity = "0";
    }, 21300);
    setTimeout(() => {  
        document.getElementById("fundsPending").style.color = "black";
    }, 21750);
}