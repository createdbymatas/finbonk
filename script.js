if (document.getElementById('skolosSuma').innerHTML === '0,00 €'){
    document.getElementById('skolosSuma').style.color = 'forestgreen';
    document.getElementById('grazinimoTerminas').style.display = 'none';
}
else {
    document.getElementById('skolosSuma').style.color = 'crimson';
    document.getElementById('grazinimoTerminas').style.display = 'block';
}

function loadFunction(){
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1100);
}
function selectIeva(){
    document.getElementById('userScreen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('userScreen').style.display = 'none';
    }, 300);
}


function openSettings(){
    document.getElementById('settings').style.right = '95px';
    document.getElementById('account').style.display = 'none';
    document.getElementById('accountX').style.display = 'block';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeSettings(){
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
}

function openNotifications(){
    document.getElementById('notifs').style.right = '50px';
    document.getElementById('notifications').style.right = '-50px';
    document.getElementById('notificationsX').style.right = '60.5px';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeNotifications(){
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
}

function openApps(){
    document.getElementById('otherApps').style.right = '10px';
    document.getElementById('apps').style.right = '-50px';
    document.getElementById('appsX').style.right = '21.5px';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
}
function closeApps(){
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function atidarytiKonsultacijas(){
    window.open('https://createdbymatas.github.io/konsultacijos/')
}
function atidarytiKorteliuSkaitytuva(){
    window.open('https://createdbymatas.github.io/mokejimas/')
}

function openContactInfo(){
    document.getElementById('kontaktineInformacija').style.top = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeContactInfo(){
    document.getElementById('kontaktineInformacija').style.top = '100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}



function openFinbonkAccount(){
    document.getElementById('finbonkAccount').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeFinbonkAccount(){
    document.getElementById('finbonkAccount').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openApyvarta(){
    document.getElementById('visaApyvarta').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeApyvarta(){
    document.getElementById('visaApyvarta').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}



function openOperacija1(){
    document.getElementById('operacija1').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija1(){
    document.getElementById('operacija1').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija2(){
    document.getElementById('operacija2').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija2(){
    document.getElementById('operacija2').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija3(){
    document.getElementById('operacija3').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija3(){
    document.getElementById('operacija3').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija4(){
    document.getElementById('operacija4').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija4(){
    document.getElementById('operacija4').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija5(){
    document.getElementById('operacija5').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija5(){
    document.getElementById('operacija5').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija6(){
    document.getElementById('operacija6').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija6(){
    document.getElementById('operacija6').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija7(){
    document.getElementById('operacija7').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija7(){
    document.getElementById('operacija7').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija8(){
    document.getElementById('operacija8').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija8(){
    document.getElementById('operacija8').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija9(){
    document.getElementById('operacija9').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija9(){
    document.getElementById('operacija9').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function openOperacija10(){
    document.getElementById('operacija10').style.right = '0';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}
function closeOperacija10(){
    document.getElementById('operacija10').style.right = '-100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
}