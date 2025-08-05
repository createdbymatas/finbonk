// išjungti right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// išjungti f12, ctrl+shift+i, ctrl+shift+j, ctrl+u (inspect tool)
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    document.getElementById('checkDigit').value = charStr;
    setTimeout(() => {
        if (document.getElementById('checkDigit').value === '1' && document.getElementById('key1').style.opacity === '1'){
            pirmas();
        }
        else if (document.getElementById('checkDigit').value === '2' && document.getElementById('key1').style.opacity === '1'){
            antras();
        }
        else if (document.getElementById('checkDigit').value === '3' && document.getElementById('key1').style.opacity === '1'){
            trecias();
        }
        else if (document.getElementById('checkDigit').value === '4' && document.getElementById('key1').style.opacity === '1'){
            ketvirtas();
        }
        else if (document.getElementById('checkDigit').value === '5' && document.getElementById('key1').style.opacity === '1'){
            penktas();
        }
        else if (document.getElementById('checkDigit').value === '6' && document.getElementById('key1').style.opacity === '1'){
            sestas();
        }
        else if (document.getElementById('checkDigit').value === '7' && document.getElementById('key1').style.opacity === '1'){
            septintas();
        }
        else if (document.getElementById('checkDigit').value === '8' && document.getElementById('key1').style.opacity === '1'){
            astuntas();
        }
        else if (document.getElementById('checkDigit').value === '9' && document.getElementById('key1').style.opacity === '1'){
            devintas();
        }
        else if (document.getElementById('checkDigit').value === '0' && document.getElementById('key1').style.opacity === '1'){
            nulinis();
        }
        else if (document.getElementById('checkDigit').value === '' && document.getElementById('key1').style.opacity === '1'){
            istrinti();
        }
        else {
            
        }
    }, 1);
};

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



let currentBalanceDot = document.getElementById('currentBalance').innerHTML;
currentBalanceDot = currentBalanceDot.replace(",", ".");
let fullOperationsDot = document.getElementById('fullOperations').innerHTML;
fullOperationsDot = fullOperationsDot.replace(",", ".");
let receivedDot = document.getElementById('received').innerHTML;
receivedDot = receivedDot.replace(",", ".");
let spentDot = document.getElementById('spent').innerHTML;
spentDot = spentDot.replace(",", ".");

let ismokMokest = Number(0.1+(currentBalanceDot*0.02));
let suapvStringMokest = ismokMokest.toFixed(2);
let suapvIsmokMokest = Number(suapvStringMokest);
let ismokSum = currentBalanceDot - suapvIsmokMokest;
let suapvStringSum = ismokSum.toFixed(2);
let suapvIsmokSum = Number(suapvStringSum);

document.getElementById('balanceInOverview').innerHTML = document.getElementById('currentBalance').innerHTML + ' €';
document.getElementById('balanceInWallet').innerHTML = document.getElementById('currentBalance').innerHTML + ' €';

document.getElementById('ismokosGrynojiSuma').innerHTML = document.getElementById('currentBalance').innerHTML + ' €';
document.getElementById('ismokosMokestis').innerHTML = suapvIsmokMokest +  ' €';
document.getElementById('ismokosMokestis').innerHTML = document.getElementById('ismokosMokestis').innerHTML.replace(".", ",");
document.getElementById('ismokosSuma').innerHTML = suapvIsmokSum +  ' €';
document.getElementById('ismokosSuma').innerHTML = document.getElementById('ismokosSuma').innerHTML.replace(".", ",");

document.getElementById('skolosSuma').innerHTML = document.getElementById('currentDebt').innerHTML + ' €';
document.getElementById('grazintiIki').innerHTML = document.getElementById('returnUntil').innerHTML;

document.getElementById('apyvartaThisMonth').innerHTML = document.getElementById('fullOperations').innerHTML + ' €';
document.getElementById('apyvartaThisMonth2').innerHTML = document.getElementById('fullOperations').innerHTML + ' €';
document.getElementById('gauta1').innerHTML = document.getElementById('received').innerHTML + ' €';
document.getElementById('isleista1').innerHTML = document.getElementById('spent').innerHTML + ' €';
document.getElementById('gauta2').innerHTML = document.getElementById('received').innerHTML + ' €';
document.getElementById('isleista2').innerHTML = document.getElementById('spent').innerHTML + ' €';

document.getElementById('receivedBar').innerHTML = receivedDot * 100 / fullOperationsDot + '%';
document.getElementById('gautaBar').style.width = document.getElementById('receivedBar').innerHTML;
document.getElementById('gautaBar2').style.width = document.getElementById('receivedBar').innerHTML;
document.getElementById('spentBar').innerHTML = spentDot * 100 / fullOperationsDot + '%';
document.getElementById('isleistaBar').style.width = document.getElementById('spentBar').innerHTML;
document.getElementById('isleistaBar2').style.width = document.getElementById('spentBar').innerHTML;

document.getElementById('thisMonth').innerHTML = document.getElementById('currentMonth').innerHTML;
document.getElementById('thisMonth2').innerHTML = document.getElementById('currentMonth').innerHTML;




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
    if (document.getElementById('currentBalance').innerHTML === '0,00'){
        document.getElementById('finbonkIsmoketi').style.display = 'none';
    }
    else {
        document.getElementById('finbonkIsmoketi').style.display = 'flex';
    }
}, 2);
setTimeout(() => {
    if (document.getElementById('gautaBar').style.width === '0%' && document.getElementById('isleistaBar').style.width === '0%'){
        document.getElementById('emptyBar').style.width = '100%';
        document.getElementById('emptyBar2').style.width = '100%';
    }
    else {
        document.getElementById('emptyBar').style.width = '0%';
        document.getElementById('emptyBar2').style.width = '0%';
    }
}, 2);


function loadFunction(){
    setTimeout(() => {
        document.getElementById('loading').style.transition = '0.1s';
    }, 990);
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1100);
}

function showFeeInfo(){
    document.getElementById('feeInfoBg').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('feeInfoBg').style.opacity = '1';
    }, 10);
}
function hideFeeInfo(){
    document.getElementById('feeInfoBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('feeInfoBg').style.display = 'none';
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

function openProfileIcon(){
    document.getElementById('kontaktineInformacija').style.top = '100%';
    document.getElementById('profilioPaveikslelis').style.top = '0';
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
function closeProfileIcon(){
    document.getElementById('profilioPaveikslelis').style.top = '100%';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';

    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';
    
    document.getElementById('profilePicChangeBtn').style.opacity = '0.2';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'none';
    document.getElementById('emailRequestInput').value = 'FINBONK | XXXXX'
    document.getElementById('prasymasInput').value = '';
    document.getElementById('informacijaInput').value = '';
}
function kiwiIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#404040';
    document.getElementById('kiwi').style.color = '#F5F5DC';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';
    
    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-kiwi-bird';
}
function crowIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#404040';
    document.getElementById('crow').style.color = '#F5F5DC';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-crow';
}
function cowIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#404040';
    document.getElementById('cow').style.color = '#F5F5DC';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';
    
    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-cow';
}
function hippoIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#404040';
    document.getElementById('hippo').style.color = '#F5F5DC';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-hippo';
}
function dogIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#404040';
    document.getElementById('dog').style.color = '#F5F5DC';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';
    
    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-dog';
}
function catIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '##202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#404040';
    document.getElementById('cat').style.color = '#F5F5DC';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-cat';
}
function horseIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#404040';
    document.getElementById('horse').style.color = '#F5F5DC';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-horse';
}
function otterIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#404040';
    document.getElementById('otter').style.color = '#F5F5DC';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-otter';
}
function fishIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#404040';
    document.getElementById('fish').style.color = '#F5F5DC';
    document.getElementById('frog').style.backgroundColor = '#F5F5DC';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-fish';
}
function frogIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#F5F5DC';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#F5F5DC';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#F5F5DC';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#F5F5DC';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#F5F5DC';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#F5F5DC';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#F5F5DC';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#F5F5DC';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#F5F5DC';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#404040';
    document.getElementById('frog').style.color = '#F5F5DC';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK | Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-frog';
}
function keistiPaveiksleli(){
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

function openContactInfo(){
    document.getElementById('profilioPaveikslelis').style.top = '100%';
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
function hideLoginPopup(){
    document.getElementById('loginAlert').style.top = '-100px';
    setTimeout(() => {
        document.getElementById('loginTimeRemaining').innerHTML = '60:00';
    }, 1000);
}
function logout(){
    document.cookie = "ieva=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.getElementById('userScreen').style.display = 'flex';
    document.getElementById('settings').style.right = '-215px';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
    document.getElementById('notifs').style.right = '-215px';
    document.getElementById('notifications').style.right = '60px';
    document.getElementById('notificationsX').style.right = '-50px';
    document.getElementById('otherApps').style.right = '-215px';
    document.getElementById('apps').style.right = '20px';
    document.getElementById('appsX').style.right = '-50px';
    setTimeout(() => {
        document.getElementById('userScreen').style.opacity = '1';
        document.getElementById('logoutAlert').style.top = '15px';
    }, 10);
    setTimeout(() => {
        document.getElementById('kontaktineInformacija').style.top = '100%';
        document.getElementById('finbonkWallet').style.right = '-100%';
        document.getElementById('visaApyvarta').style.right = '-100%';
        document.getElementById('operacija1').style.right = '-100%';
        document.getElementById('operacija2').style.right = '-100%';
        document.getElementById('operacija3').style.right = '-100%';
        document.getElementById('operacija4').style.right = '-100%';
        document.getElementById('operacija5').style.right = '-100%';
        document.getElementById('operacija6').style.right = '-100%';
        document.getElementById('operacija7').style.right = '-100%';
        document.getElementById('operacija8').style.right = '-100%';
        document.getElementById('operacija9').style.right = '-100%';
        document.getElementById('operacija10').style.right = '-100%';
        document.getElementById('operacija11').style.right = '-100%';
        document.getElementById('operacija12').style.right = '-100%';
        document.getElementById('operacija13').style.right = '-100%';
        document.getElementById('operacija14').style.right = '-100%';
        document.getElementById('operacija15').style.right = '-100%';
        document.getElementById('operacija16').style.right = '-100%';
        document.getElementById('operacija17').style.right = '-100%';
        document.getElementById('operacija18').style.right = '-100%';
        document.getElementById('operacija19').style.right = '-100%';
        document.getElementById('operacija20').style.right = '-100%';
        document.getElementById('ismoka').style.right = '-100%';
    }, 310);
    setTimeout(() => {
        document.getElementById('logoutAlert').style.top = '-100px';
    }, 3010);
}
function hideLogoutPopup(){
    document.getElementById('logoutAlert').style.top = '-100px';
}



function openFinbonkWallet(){
    document.getElementById('finbonkWallet').style.right = '0';
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
function closeFinbonkWallet(){
    document.getElementById('finbonkWallet').style.right = '-100%';
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
function openOperacija11(){
    document.getElementById('operacija11').style.right = '0';
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
function closeOperacija11(){
    document.getElementById('operacija11').style.right = '-100%';
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
function openOperacija12(){
    document.getElementById('operacija12').style.right = '0';
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
function closeOperacija12(){
    document.getElementById('operacija12').style.right = '-100%';
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
function openOperacija13(){
    document.getElementById('operacija13').style.right = '0';
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
function closeOperacija13(){
    document.getElementById('operacija13').style.right = '-100%';
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
function openOperacija14(){
    document.getElementById('operacija14').style.right = '0';
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
function closeOperacija14(){
    document.getElementById('operacija14').style.right = '-100%';
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
function openOperacija15(){
    document.getElementById('operacija15').style.right = '0';
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
function closeOperacija15(){
    document.getElementById('operacija15').style.right = '-100%';
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
function openOperacija16(){
    document.getElementById('operacija16').style.right = '0';
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
function closeOperacija16(){
    document.getElementById('operacija16').style.right = '-100%';
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
function openOperacija17(){
    document.getElementById('operacija17').style.right = '0';
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
function closeOperacija17(){
    document.getElementById('operacija17').style.right = '-100%';
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
function openOperacija18(){
    document.getElementById('operacija18').style.right = '0';
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
function closeOperacija18(){
    document.getElementById('operacija18').style.right = '-100%';
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
function openOperacija19(){
    document.getElementById('operacija19').style.right = '0';
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
function closeOperacija19(){
    document.getElementById('operacija19').style.right = '-100%';
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
function openOperacija20(){
    document.getElementById('operacija20').style.right = '0';
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
function closeOperacija20(){
    document.getElementById('operacija20').style.right = '-100%';
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
    document.getElementById('informacijaInput').value = document.getElementById('ismokosSuma').innerHTML;
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
// document.cookie = "ieva=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

let ieva = getCookie("ieva");
setTimeout(() => {
    if (ieva != "") {
        document.getElementById('userScreen').style.display = 'none';
        document.getElementById('userScreen').style.opacity = '0';
    }
    else {
        document.getElementById('userScreen').style.display = 'flex';
        document.getElementById('userScreen').style.opacity = '1';
        if (ieva != "" && ieva != null) {
            document.getElementById('userScreen').style.display = 'flex';
            document.getElementById('userScreen').style.opacity = '1';
        }
    }
}, 5);


let inputas = '';
function check(form)
{
    if(form.pin.value === '159075')
    {
        document.getElementById('istrinimas').style.color = 'transparent';
        document.getElementById('istrinimas').style.pointerEvents = 'none';
        setTimeout(() => {
            document.getElementById('key1').style.opacity = '0.2';
            document.getElementById('key2').style.opacity = '0.2';
            document.getElementById('key3').style.opacity = '0.2';
            document.getElementById('key4').style.opacity = '0.2';
            document.getElementById('taskeliai').style.opacity = '0.2';
            document.getElementById('keypad').style.pointerEvents = 'none';
            document.getElementById('prisijunkiteSuPin').style.opacity = '0.2';
        }, 10);
        setTimeout(() => {
            document.getElementById('key1').style.opacity = '1';
            document.getElementById('key2').style.opacity = '1';
            document.getElementById('key3').style.opacity = '1';
            document.getElementById('key4').style.opacity = '1';
            document.getElementById('taskeliai').style.opacity = '1';
            document.getElementById('keypad').style.pointerEvents = 'all';
            document.getElementById('prisijunkiteSuPin').style.opacity = '1';
            document.getElementById('userScreen').style.opacity = '0';
            document.getElementById('loginAlert').style.top = '15px';

            var now = new Date();
            now.setTime(now.getTime() + 1 * 3600 * 1000);
            document.cookie = "ieva=prisijungta; expires=" + now.toUTCString() + "; path=/";
        }, 3000);
        setTimeout(() => {
            document.getElementById('userScreen').style.display = 'none';
            inputas = '';
            document.getElementById('kodas').value = '';
            document.getElementById('taskelis1').style.backgroundColor = '#202020';
            document.getElementById('taskelis2').style.backgroundColor = '#202020';
            document.getElementById('taskelis3').style.backgroundColor = '#202020';
            document.getElementById('taskelis4').style.backgroundColor = '#202020';
            document.getElementById('taskelis5').style.backgroundColor = '#202020';
            document.getElementById('taskelis6').style.backgroundColor = '#202020';
        }, 3300);
        setTimeout(() => {
            document.getElementById('loginTimeRemaining').innerHTML = '59:59';
        }, 4000);
        setTimeout(() => {
            document.getElementById('loginTimeRemaining').innerHTML = '59:58';
        }, 5000);
        setTimeout(() => {
            document.getElementById('loginAlert').style.top = '-100px';
            document.getElementById('loginTimeRemaining').innerHTML = '59:57';
        }, 6000);
        setTimeout(() => {
            document.getElementById('loginTimeRemaining').innerHTML = '60:00';
        }, 7000);
    }
    else{
        document.getElementById('istrinimas').style.color = 'transparent';
        document.getElementById('istrinimas').style.pointerEvents = 'none';
        setTimeout(() => {
            document.getElementById('key1').style.opacity = '0.2';
            document.getElementById('key2').style.opacity = '0.2';
            document.getElementById('key3').style.opacity = '0.2';
            document.getElementById('key4').style.opacity = '0.2';
            document.getElementById('taskeliai').style.opacity = '0.2';
            document.getElementById('keypad').style.pointerEvents = 'none';
            document.getElementById('prisijunkiteSuPin').style.opacity = '0.2';
        }, 10);
        setTimeout(() => {
            document.getElementById('taskeliai').style.marginLeft = '-30px';
            document.getElementById('key1').style.opacity = '1';
            document.getElementById('key2').style.opacity = '1';
            document.getElementById('key3').style.opacity = '1';
            document.getElementById('key4').style.opacity = '1';
            document.getElementById('taskeliai').style.opacity = '1';
            document.getElementById('keypad').style.pointerEvents = 'all';
            document.getElementById('prisijunkiteSuPin').style.opacity = '1';
            inputas = '';
            document.getElementById('kodas').value = '';
            document.getElementById('taskelis1').style.backgroundColor = '#202020';
            document.getElementById('taskelis2').style.backgroundColor = '#202020';
            document.getElementById('taskelis3').style.backgroundColor = '#202020';
            document.getElementById('taskelis4').style.backgroundColor = '#202020';
            document.getElementById('taskelis5').style.backgroundColor = '#202020';
            document.getElementById('taskelis6').style.backgroundColor = '#202020';
        }, 3000);
        setTimeout(() => {
            document.getElementById('taskeliai').style.marginLeft = '100px';
        }, 3100);
        setTimeout(() => {
            document.getElementById('taskeliai').style.marginLeft = '-100px';
        }, 3200);
        setTimeout(() => {
            document.getElementById('taskeliai').style.marginLeft = '100px';
        }, 3300);
        setTimeout(() => {
            document.getElementById('taskeliai').style.marginLeft = '0';
        }, 3400);
    }
}
function pirmas() {
    inputas = inputas + 1;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
    
}
function antras() {
    inputas = inputas + 2;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function trecias() {
    inputas = inputas + 3;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function ketvirtas() {
    inputas = inputas + 4;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function penktas() {
    inputas = inputas + 5;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function sestas() {
    inputas = inputas + 6;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function septintas() {
    inputas = inputas + 7;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function astuntas() {
    inputas = inputas + 8;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function devintas() {
    inputas = inputas + 9;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function nulinis() {
    inputas = inputas + 0;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#F5F5DC';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function istrinti() {
    inputas = '';
    document.getElementById('kodas').value = '';
    document.getElementById('istrinimas').style.color = 'transparent';
    document.getElementById('istrinimas').style.pointerEvents = 'none';
    document.getElementById('taskelis1').style.backgroundColor = '#202020';
    document.getElementById('taskelis2').style.backgroundColor = '#202020';
    document.getElementById('taskelis3').style.backgroundColor = '#202020';
    document.getElementById('taskelis4').style.backgroundColor = '#202020';
    document.getElementById('taskelis5').style.backgroundColor = '#202020';
    document.getElementById('taskelis6').style.backgroundColor = '#202020';
}
function taskeliai(){
    if(inputas.length === 1)
        {
            document.getElementById('taskelis1').style.backgroundColor = '#F5F5DC';
    }
    else if(inputas.length === 2)
        {
            document.getElementById('taskelis2').style.backgroundColor = '#F5F5DC';
    }
    else if(inputas.length === 3)
        {
            document.getElementById('taskelis3').style.backgroundColor = '#F5F5DC';
    }
    else if(inputas.length === 4)
        {
            document.getElementById('taskelis4').style.backgroundColor = '#F5F5DC';
    }
    else if(inputas.length === 5)
        {
            document.getElementById('taskelis5').style.backgroundColor = '#F5F5DC';
    }
    else if(inputas.length === 6)
        {
            document.getElementById('taskelis6').style.backgroundColor = '#F5F5DC';
            document.getElementById('checkBtn').click();
    }
}