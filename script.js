document.getElementById('balanceInOverview').innerHTML = document.getElementById('currentBalance').innerHTML;
document.getElementById('balanceInAccount').innerHTML = document.getElementById('currentBalance').innerHTML;
document.getElementById('ismokosDydis').innerHTML = document.getElementById('currentBalance').innerHTML;
document.getElementById('skolosSuma').innerHTML = document.getElementById('currentDebt').innerHTML;
document.getElementById('grazintiIki').innerHTML = document.getElementById('returnUntil').innerHTML;
document.getElementById('apyvartaThisMonth').innerHTML = document.getElementById('fullOperations').innerHTML;
document.getElementById('apyvartaThisMonth2').innerHTML = document.getElementById('fullOperations').innerHTML;
document.getElementById('gauta1').innerHTML = document.getElementById('received').innerHTML;
document.getElementById('isleista1').innerHTML = document.getElementById('received').innerHTML;
document.getElementById('gauta2').innerHTML = document.getElementById('received').innerHTML;
document.getElementById('isleista2').innerHTML = document.getElementById('received').innerHTML;

setTimeout(() => {
    if (document.getElementById('skolosSuma').innerHTML === '0,00 €'){
        document.getElementById('skolosSuma').style.color = 'forestgreen';
        document.getElementById('grazinimoTerminas').style.display = 'none';
    }
    else {
        document.getElementById('skolosSuma').style.color = 'crimson';
        document.getElementById('grazinimoTerminas').style.display = 'block';
    }
}, 1);
setTimeout(() => {
    if (document.getElementById('currentBalance').innerHTML === '0,00 €'){
        document.getElementById('finbonkIsmoketi').style.display = 'none';
    }
    else {
        document.getElementById('finbonkIsmoketi').style.display = 'flex';
    }
}, 2);


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
function openIsmoka(){
    document.getElementById('ismoka').style.right = '0';
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
function closeIsmoka(){
    document.getElementById('ismoka').style.right = '-100%';
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
function ismoketiSuma(){
    document.getElementById('emailRequestInput').value = 'FINBONK | Išmoka'
    document.getElementById('prasymasInput').value = 'išmokėti sumą';
    document.getElementById('informacijaInput').value = document.getElementById('currentBalance').innerHTML;
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('loader').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '1';
        document.getElementById('loader').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('submitFormBtn').click();
    }, 1000);
}
function backToPortal(){
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('loader').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '1';
        document.getElementById('loader').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        location.replace('https://createdbymatas.github.io/finbonk/');
    }, 1000);
}