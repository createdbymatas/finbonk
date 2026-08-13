// išjungti right-click
// document.addEventListener('contextmenu', (e) => e.preventDefault());

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
        else if (document.getElementById('checkDigit').value === 'ą' && document.getElementById('key1').style.opacity === '1'){
            pirmas();
        }
        else if (document.getElementById('checkDigit').value === '2' && document.getElementById('key1').style.opacity === '1'){
            antras();
        }
        else if (document.getElementById('checkDigit').value === 'č' && document.getElementById('key1').style.opacity === '1'){
            antras();
        }
        else if (document.getElementById('checkDigit').value === '3' && document.getElementById('key1').style.opacity === '1'){
            trecias();
        }
        else if (document.getElementById('checkDigit').value === 'ę' && document.getElementById('key1').style.opacity === '1'){
            trecias();
        }
        else if (document.getElementById('checkDigit').value === '4' && document.getElementById('key1').style.opacity === '1'){
            ketvirtas();
        }
        else if (document.getElementById('checkDigit').value === 'ė' && document.getElementById('key1').style.opacity === '1'){
            ketvirtas();
        }
        else if (document.getElementById('checkDigit').value === '5' && document.getElementById('key1').style.opacity === '1'){
            penktas();
        }
        else if (document.getElementById('checkDigit').value === 'į' && document.getElementById('key1').style.opacity === '1'){
            penktas();
        }
        else if (document.getElementById('checkDigit').value === '6' && document.getElementById('key1').style.opacity === '1'){
            sestas();
        }
        else if (document.getElementById('checkDigit').value === 'š' && document.getElementById('key1').style.opacity === '1'){
            sestas();
        }
        else if (document.getElementById('checkDigit').value === '7' && document.getElementById('key1').style.opacity === '1'){
            septintas();
        }
        else if (document.getElementById('checkDigit').value === 'ų' && document.getElementById('key1').style.opacity === '1'){
            septintas();
        }
        else if (document.getElementById('checkDigit').value === '8' && document.getElementById('key1').style.opacity === '1'){
            astuntas();
        }
        else if (document.getElementById('checkDigit').value === 'ū' && document.getElementById('key1').style.opacity === '1'){
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

const $input = document.querySelector("#sumaMokesciui");
const leidziamiSimboliai = /[0-9.]+/;
$input.addEventListener("keypress", e => {
    console.log(e);
    if (!leidziamiSimboliai.test(e.key)) {
        e.preventDefault();
    }
});



let currentBalanceDot = document.getElementById('currentBalance').innerHTML;
currentBalanceDot = currentBalanceDot.replace(",", ".");
let fullOperationsDot = document.getElementById('fullOperations').innerHTML;
fullOperationsDot = fullOperationsDot.replace(",", ".");
let receivedDot = document.getElementById('received').innerHTML;
receivedDot = receivedDot.replace(",", ".");
let spentDot = document.getElementById('spent').innerHTML;
spentDot = spentDot.replace(",", ".");

const formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
})


let ismokMokest = Number(0.15+(currentBalanceDot*0.02));
let suapvIsmokMokest = formatter.format(Number(ismokMokest));
let ismokSum = currentBalanceDot - suapvIsmokMokest;
let suapvIsmokSum = formatter.format(Number(ismokSum));

document.getElementById('balanceInOverview').innerHTML = document.getElementById('currentBalance').innerHTML + ' €';
document.getElementById('balanceInWallet').innerHTML = document.getElementById('currentBalance').innerHTML + ' €';

document.getElementById('ismokosGrynojiSuma').innerHTML = document.getElementById('currentBalance').innerHTML + ' €';
document.getElementById('ismokosMokestis').innerHTML = suapvIsmokMokest +  ' €';
document.getElementById('ismokosMokestis').innerHTML = document.getElementById('ismokosMokestis').innerHTML.replace(".", ",");
document.getElementById('ismokosSuma').innerHTML = suapvIsmokSum +  ' €';
document.getElementById('ismokosSuma').innerHTML = document.getElementById('ismokosSuma').innerHTML.replace(".", ",");

document.getElementById('skolosSuma').innerHTML = document.getElementById('currentDebt').innerHTML + ' €';
document.getElementById('grazintiIki').innerHTML = document.getElementById('returnUntil').innerHTML;
document.getElementById('palukanos').innerHTML = document.getElementById('interestRate').innerHTML + ' €';

document.getElementById('apyvartaThisMonth').innerHTML = document.getElementById('fullOperations').innerHTML + ' €';
document.getElementById('apyvartaThisMonth2').innerHTML = document.getElementById('fullOperations').innerHTML + ' €';
document.getElementById('gauta1').innerHTML = document.getElementById('received').innerHTML + ' €';
document.getElementById('isleista1').innerHTML = document.getElementById('spent').innerHTML + ' €';
document.getElementById('gauta2').innerHTML = document.getElementById('received').innerHTML + ' €';
document.getElementById('isleista2').innerHTML = document.getElementById('spent').innerHTML + ' €';

document.getElementById('receivedBar').innerHTML = formatter.format(Number(receivedDot * 100 / fullOperationsDot)) + '%';
document.getElementById('gautaBar').style.width = document.getElementById('receivedBar').innerHTML;
document.getElementById('gautaBar').innerHTML = formatter.format(Number(receivedDot * 100 / fullOperationsDot)).replace(".", ",") + ' %';
document.getElementById('gautaBar2').style.width = document.getElementById('receivedBar').innerHTML;
document.getElementById('gautaBar2').innerHTML = formatter.format(Number(receivedDot * 100 / fullOperationsDot)).replace(".", ",") + ' %';
document.getElementById('spentBar').innerHTML = formatter.format(Number(spentDot * 100 / fullOperationsDot)) + '%';
document.getElementById('isleistaBar').style.width = document.getElementById('spentBar').innerHTML;
document.getElementById('isleistaBar').innerHTML = formatter.format(Number(spentDot * 100 / fullOperationsDot)).replace(".", ",") + ' %';
document.getElementById('isleistaBar2').style.width = document.getElementById('spentBar').innerHTML;
document.getElementById('isleistaBar2').innerHTML = formatter.format(Number(spentDot * 100 / fullOperationsDot)).replace(".", ",") + ' %';

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
    if (document.getElementById('palukanos').innerHTML === '0,00 €'){
        document.getElementById('priskaiciuotosPalukanos').style.display = 'none';
    }
    else {
        document.getElementById('priskaiciuotosPalukanos').style.display = 'block';
    }
}, 2);
setTimeout(() => {
    if (currentBalanceDot <= '0.00'){
        document.getElementById('payOut').style.display = 'none';
    }
    else {
        document.getElementById('payOut').style.display = 'block';
    }
}, 3);
setTimeout(() => {
    if (document.getElementById("fullOperations").innerHTML == "0,00"){
        document.getElementById('emptyBar').style.width = '100%';
        document.getElementById('emptyBar2').style.width = '100%';
        document.getElementById('gautaBar').style.display = 'none';
        document.getElementById('gautaBar2').style.display = 'none';
        document.getElementById('isleistaBar').style.display = 'none';
        document.getElementById('isleistaBar2').style.display = 'none';
    }
    else {
        document.getElementById('emptyBar').style.width = '0';
        document.getElementById('emptyBar2').style.width = '0';
        document.getElementById('gautaBar').style.display = 'flex';
        document.getElementById('gautaBar2').style.display = 'flex';
        document.getElementById('isleistaBar').style.display = 'flex';
        document.getElementById('isleistaBar2').style.display = 'flex';
    }
}, 4);


function loadFunction(){
    setTimeout(() => {
        document.getElementById('jusuFinbonk').style.transition = '1s';
        document.getElementById('loader').style.transition = '1s';
        document.getElementById('ikeliama').style.transition = '1s';
        document.getElementById('createdByMatas').style.transition = '1s';
    }, 990);
    setTimeout(() => {
        document.getElementById('jusuFinbonk').style.marginTop = '-400px';
        document.getElementById('jusuFinbonk').style.opacity = '0';
    }, 1000);
    setTimeout(() => {
        document.title = '© FINBONK';
        document.getElementById('loader').style.marginTop = '0';
        document.getElementById('loader').style.opacity = '1';
        document.getElementById('ikeliama').style.marginTop = '120px';
        document.getElementById('ikeliama').style.opacity = '1';
        document.getElementById('createdByMatas').style.opacity = '1';
    }, 1500);
    setTimeout(() => {
        document.getElementById('loading').style.transition = '0.1s';
    }, 2990);
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
    }, 3000);
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('createdByMatas').style.opacity = '0';
    }, 3100);
}

function showFeeInfo(){
    document.getElementById('feeInfoBg').style.display = 'block';
    setTimeout(() => {
        document.getElementById('feeInfoBg').style.opacity = '1';
        document.getElementById('feeInfo').style.bottom = '0';
    }, 10);
}
function hideFeeInfo(){
    document.getElementById('feeInfo').style.bottom = '-100%';
    document.getElementById('feeInfoBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('feeInfoBg').style.display = 'none';
    }, 300);
}
function showReturnUntilInfo(){
    document.getElementById('returnUntilInfoBg').style.display = 'block';
    setTimeout(() => {
        document.getElementById('returnUntilInfoBg').style.opacity = '1';
        document.getElementById('returnUntilInfo').style.bottom = '0';
    }, 10);
}
function hideReturnUntilInfo(){
    document.getElementById('returnUntilInfo').style.bottom = '-100%';
    document.getElementById('returnUntilInfoBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('returnUntilInfoBg').style.display = 'none';
    }, 300);
}
function showInterestRateInfo(){
    document.getElementById('interestRateInfoBg').style.display = 'block';
    setTimeout(() => {
        document.getElementById('interestRateInfoBg').style.opacity = '1';
        document.getElementById('interestRateInfo').style.bottom = '0';
    }, 10);
}
function hideInterestRateInfo(){
    document.getElementById('interestRateInfo').style.bottom = '-100%';
    document.getElementById('interestRateInfoBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('interestRateInfoBg').style.display = 'none';
    }, 300);
}


function openSettings(){
    document.getElementById('settings').style.transform = 'scale(1)';
    document.getElementById('settings').style.opacity = '1';
    document.getElementById('settings').style.top = '50px';
    document.getElementById('settings').style.right = '60px';
    document.getElementById('settings').style.pointerEvents = 'all';
    document.getElementById('account').style.display = 'none';
    document.getElementById('accountX').style.display = 'block';
    closeNotifications();
}
function closeSettings(){
    document.getElementById('settings').style.transform = 'scale(0.8)';
    document.getElementById('settings').style.opacity = '0';
    document.getElementById('settings').style.top = '36px';
    document.getElementById('settings').style.right = '45px';
    document.getElementById('settings').style.pointerEvents = 'none';
    document.getElementById('account').style.display = 'block';
    document.getElementById('accountX').style.display = 'none';
}

function openNotifications(){
    document.getElementById('notifs').style.transform = 'scale(1)';
    document.getElementById('notifs').style.opacity = '1';
    document.getElementById('notifs').style.top = '50px';
    document.getElementById('notifs').style.right = '15px';
    document.getElementById('notifs').style.pointerEvents = 'all';
    document.getElementById('notifications').style.transform = 'scale(0)';
    document.getElementById('notificationsX').style.transform = 'scale(1)';
    document.getElementById('unreadNotifs').style.opacity = '0';
    closeSettings();
}
function closeNotifications(){
    document.getElementById('notifs').style.transform = 'scale(0.8)';
    document.getElementById('notifs').style.opacity = '0';
    document.getElementById('notifs').style.top = '36px';
    document.getElementById('notifs').style.right = '0';
    document.getElementById('notifs').style.pointerEvents = 'none';
    document.getElementById('unreadNotifs').style.opacity = '1';
    document.getElementById('notifications').style.transform = 'scale(1)';
    document.getElementById('notificationsX').style.transform = 'scale(0)';
}

function atidarytiKonsultacijas(){
    document.getElementById('addOnsRedirectBg').style.display = 'block';
    closeSettings();
    closeNotifications();
    setTimeout(() => {
        document.getElementById('addOnsRedirectBg').style.opacity = '1';
        document.getElementById('addOnsRedirect').style.bottom = '0';
    }, 10);
    setTimeout(() => {
        window.open('https://createdbymatas.github.io/konsultacijos/')
    }, 2000);
    setTimeout(() => {
        document.getElementById('addOnsRedirect').style.bottom = '-100%';
    document.getElementById('addOnsRedirectBg').style.opacity = '0';
    }, 3000);
    setTimeout(() => {
        document.getElementById('addOnsRedirectBg').style.display = 'none';
    }, 3300);
    
}
function atidarytiKorteliuSkaitytuva(){
    document.getElementById('addOnsRedirectBg').style.display = 'block';
    closeSettings();
    closeNotifications();
    setTimeout(() => {
        document.getElementById('addOnsRedirectBg').style.opacity = '1';
        document.getElementById('addOnsRedirect').style.bottom = '0';
    }, 10);
    setTimeout(() => {
        window.open('https://createdbymatas.github.io/mokejimas/')
    }, 2000);
    setTimeout(() => {
        document.getElementById('addOnsRedirect').style.bottom = '-100%';
    document.getElementById('addOnsRedirectBg').style.opacity = '0';
    }, 3000);
    setTimeout(() => {
        document.getElementById('addOnsRedirectBg').style.display = 'none';
    }, 3300);
}

function openProfileIcon(){
    document.getElementById('kontaktineInformacija').style.top = '100%';
    document.getElementById('profilioPaveikslelis').style.top = '0';
    closeSettings();
    closeNotifications();
}
function closeProfileIcon(){
    document.getElementById('profilioPaveikslelis').style.top = '100%';
    closeSettings();
    closeNotifications();

    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';
    
    document.getElementById('profilePicChangeBtn').style.opacity = '0.2';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'none';
    document.getElementById('emailRequestInput').value = 'FINBONK · XXXXX'
    document.getElementById('prasymasInput').value = '';
    document.getElementById('informacijaInput').value = '';
}
function kiwiIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#6f4827';
    document.getElementById('kiwi').style.color = '#ebebeb';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';
    
    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-kiwi-bird';
}
function crowIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#6f4827';
    document.getElementById('crow').style.color = '#ebebeb';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-crow';
}
function cowIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#6f4827';
    document.getElementById('cow').style.color = '#ebebeb';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';
    
    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-cow';
}
function hippoIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#6f4827';
    document.getElementById('hippo').style.color = '#ebebeb';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-hippo';
}
function dogIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#6f4827';
    document.getElementById('dog').style.color = '#ebebeb';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';
    
    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-dog';
}
function catIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '##202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#6f4827';
    document.getElementById('cat').style.color = '#ebebeb';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-cat';
}
function horseIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#6f4827';
    document.getElementById('horse').style.color = '#ebebeb';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-horse';
}
function otterIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#6f4827';
    document.getElementById('otter').style.color = '#ebebeb';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-otter';
}
function fishIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#6f4827';
    document.getElementById('fish').style.color = '#ebebeb';
    document.getElementById('frog').style.backgroundColor = '#ebebeb';
    document.getElementById('frog').style.color = '#202020';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
    document.getElementById('prasymasInput').value = 'pakeisti profilio paveikslėlį';
    document.getElementById('informacijaInput').value = 'fa-fish';
}
function frogIcon(){
    document.getElementById('kiwi').style.backgroundColor = '#ebebeb';
    document.getElementById('kiwi').style.color = '#202020';
    document.getElementById('crow').style.backgroundColor = '#ebebeb';
    document.getElementById('crow').style.color = '#202020';
    document.getElementById('cow').style.backgroundColor = '#ebebeb';
    document.getElementById('cow').style.color = '#202020';
    document.getElementById('hippo').style.backgroundColor = '#ebebeb';
    document.getElementById('hippo').style.color = '#202020';
    document.getElementById('dog').style.backgroundColor = '#ebebeb';
    document.getElementById('dog').style.color = '#202020';
    document.getElementById('cat').style.backgroundColor = '#ebebeb';
    document.getElementById('cat').style.color = '#202020';
    document.getElementById('horse').style.backgroundColor = '#ebebeb';
    document.getElementById('horse').style.color = '#202020';
    document.getElementById('otter').style.backgroundColor = '#ebebeb';
    document.getElementById('otter').style.color = '#202020';
    document.getElementById('fish').style.backgroundColor = '#ebebeb';
    document.getElementById('fish').style.color = '#202020';
    document.getElementById('frog').style.backgroundColor = '#6f4827';
    document.getElementById('frog').style.color = '#ebebeb';

    document.getElementById('profilePicChangeBtn').style.opacity = '1';
    document.getElementById('profilePicChangeBtn').style.pointerEvents = 'all';
    document.getElementById('emailRequestInput').value = 'FINBONK · Profilio paveikslėlio keitimas'
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
    closeSettings();
    closeNotifications();
}
function closeContactInfo(){
    document.getElementById('kontaktineInformacija').style.top = '100%';
    closeSettings();
    closeNotifications();
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
    closeSettings();
    closeNotifications();
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
        document.getElementById('operacija21').style.right = '-100%';
        document.getElementById('operacija22').style.right = '-100%';
        document.getElementById('operacija23').style.right = '-100%';
        document.getElementById('operacija24').style.right = '-100%';
        document.getElementById('operacija25').style.right = '-100%';
        document.getElementById('operacija26').style.right = '-100%';
        document.getElementById('operacija27').style.right = '-100%';
        document.getElementById('operacija28').style.right = '-100%';
        document.getElementById('operacija29').style.right = '-100%';
        document.getElementById('operacija30').style.right = '-100%';
        document.getElementById('operacija31').style.right = '-100%';
        document.getElementById('operacija32').style.right = '-100%';
        document.getElementById('operacija33').style.right = '-100%';
        document.getElementById('operacija34').style.right = '-100%';
        document.getElementById('operacija35').style.right = '-100%';
        document.getElementById('operacija36').style.right = '-100%';
        document.getElementById('operacija37').style.right = '-100%';
        document.getElementById('operacija38').style.right = '-100%';
        document.getElementById('operacija39').style.right = '-100%';
        document.getElementById('operacija40').style.right = '-100%';
        document.getElementById('operacija41').style.right = '-100%';
        document.getElementById('operacija42').style.right = '-100%';
        document.getElementById('operacija43').style.right = '-100%';
        document.getElementById('operacija44').style.right = '-100%';
        document.getElementById('operacija45').style.right = '-100%';
        document.getElementById('operacija46').style.right = '-100%';
        document.getElementById('operacija47').style.right = '-100%';
        document.getElementById('operacija48').style.right = '-100%';
        document.getElementById('operacija49').style.right = '-100%';
        document.getElementById('operacija50').style.right = '-100%';
        document.getElementById('operacija51').style.right = '-100%';
        document.getElementById('operacija52').style.right = '-100%';
        document.getElementById('operacija53').style.right = '-100%';
        document.getElementById('operacija54').style.right = '-100%';
        document.getElementById('operacija55').style.right = '-100%';
        document.getElementById('operacija56').style.right = '-100%';
        document.getElementById('operacija57').style.right = '-100%';
        document.getElementById('operacija58').style.right = '-100%';
        document.getElementById('operacija59').style.right = '-100%';
        document.getElementById('operacija60').style.right = '-100%';
        document.getElementById('operacija61').style.right = '-100%';
        document.getElementById('operacija62').style.right = '-100%';
        document.getElementById('operacija63').style.right = '-100%';
        document.getElementById('operacija64').style.right = '-100%';
        document.getElementById('operacija65').style.right = '-100%';
        document.getElementById('operacija66').style.right = '-100%';
        document.getElementById('operacija67').style.right = '-100%';
        document.getElementById('operacija68').style.right = '-100%';
        document.getElementById('operacija69').style.right = '-100%';
        document.getElementById('operacija70').style.right = '-100%';
        document.getElementById('ismoka').style.right = '-100%';
        document.getElementById('pranesimas1').style.top = '100%';
    }, 310);
    setTimeout(() => {
        document.getElementById('logoutAlert').style.top = '-100px';
    }, 3010);
}
function hideLogoutPopup(){
    document.getElementById('logoutAlert').style.top = '-100px';
}
function hideCopiedTextPopup(){
    document.getElementById('copiedTextAlert').style.top = '-100px';
}



function openReceivePaymentWindow(){
    document.getElementById('receivePaymentWindowBg').style.display = 'block';
    setTimeout(() => {
        document.getElementById('receivePaymentWindowBg').style.opacity = '1';
        document.getElementById('receivePaymentWindow').style.bottom = '0';
    }, 10);
    closeSettings();
    closeNotifications();
}
function closeReceivePaymentWindow(){
    document.getElementById('receivePaymentWindow').style.bottom = '-100%';
    document.getElementById('receivePaymentWindowBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('receivePaymentWindowBg').style.display = 'none';
    }, 300);
    closeSettings();
    closeNotifications();
}
function copyGavejas() {
    navigator.clipboard.writeText("MATAS KASPARAVIČIUS");
    document.getElementById('copiedTextAlert').style.top = '15px';
    document.getElementById('copyPlaceholder').innerHTML = 'Gavėjas nukopijuotas';
    setTimeout(() => {
        document.getElementById('copiedTextAlert').style.top = '-100px';
    }, 3010);
}
function copySaskaita() {
    navigator.clipboard.writeText("LT507300010159683951");
    document.getElementById('copiedTextAlert').style.top = '15px';
    document.getElementById('copyPlaceholder').innerHTML = 'Sąskaitos nr. nukopijuotas';
    setTimeout(() => {
        document.getElementById('copiedTextAlert').style.top = '-100px';
    }, 3010);
}
function copyPaskirtis() {
    navigator.clipboard.writeText("FINBONK (Ieva Kasparavičiūtė)");
    document.getElementById('copiedTextAlert').style.top = '15px';
    document.getElementById('copyPlaceholder').innerHTML = 'Paskirtis nukopijuota';
    setTimeout(() => {
        document.getElementById('copiedTextAlert').style.top = '-100px';
    }, 3010);
}
function copyMessage() {
    navigator.clipboard.writeText(document.getElementById("copyMessageTextP").innerHTML);
    document.getElementById('copiedTextAlert').style.top = '15px';
    document.getElementById('copyPlaceholder').innerHTML = 'Informacijos tekstas - žinutė nukopijuota';
    setTimeout(() => {
        document.getElementById('copiedTextAlert').style.top = '-100px';
    }, 3010);
}
function openOperations(){
    document.getElementById('finbonkWallet').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperations(){
    document.getElementById('finbonkWallet').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openApyvarta(){
    document.getElementById('visaApyvarta').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeApyvarta(){
    document.getElementById('visaApyvarta').style.right = '-100%';
    closeSettings();
    closeNotifications();
}



function openOperacija1(){
    document.getElementById('operacija1').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija1(){
    document.getElementById('operacija1').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija2(){
    document.getElementById('operacija2').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija2(){
    document.getElementById('operacija2').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija3(){
    document.getElementById('operacija3').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija3(){
    document.getElementById('operacija3').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija4(){
    document.getElementById('operacija4').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija4(){
    document.getElementById('operacija4').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija5(){
    document.getElementById('operacija5').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija5(){
    document.getElementById('operacija5').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija6(){
    document.getElementById('operacija6').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija6(){
    document.getElementById('operacija6').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija7(){
    document.getElementById('operacija7').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija7(){
    document.getElementById('operacija7').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija8(){
    document.getElementById('operacija8').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija8(){
    document.getElementById('operacija8').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija9(){
    document.getElementById('operacija9').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija9(){
    document.getElementById('operacija9').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija10(){
    document.getElementById('operacija10').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija10(){
    document.getElementById('operacija10').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija11(){
    document.getElementById('operacija11').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija11(){
    document.getElementById('operacija11').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija12(){
    document.getElementById('operacija12').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija12(){
    document.getElementById('operacija12').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija13(){
    document.getElementById('operacija13').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija13(){
    document.getElementById('operacija13').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija14(){
    document.getElementById('operacija14').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija14(){
    document.getElementById('operacija14').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija15(){
    document.getElementById('operacija15').style.right = '0';
    closeSettings();
}
function closeOperacija15(){
    document.getElementById('operacija15').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija16(){
    document.getElementById('operacija16').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija16(){
    document.getElementById('operacija16').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija17(){
    document.getElementById('operacija17').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija17(){
    document.getElementById('operacija17').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija18(){
    document.getElementById('operacija18').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija18(){
    document.getElementById('operacija18').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija19(){
    document.getElementById('operacija19').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija19(){
    document.getElementById('operacija19').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija20(){
    document.getElementById('operacija20').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija20(){
    document.getElementById('operacija20').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija21(){
    document.getElementById('operacija21').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija21(){
    document.getElementById('operacija21').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija22(){
    document.getElementById('operacija22').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija22(){
    document.getElementById('operacija22').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija23(){
    document.getElementById('operacija23').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija23(){
    document.getElementById('operacija23').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija24(){
    document.getElementById('operacija24').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija24(){
    document.getElementById('operacija24').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija25(){
    document.getElementById('operacija25').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija25(){
    document.getElementById('operacija25').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija26(){
    document.getElementById('operacija26').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija26(){
    document.getElementById('operacija26').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija27(){
    document.getElementById('operacija27').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija27(){
    document.getElementById('operacija27').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija28(){
    document.getElementById('operacija28').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija28(){
    document.getElementById('operacija28').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija29(){
    document.getElementById('operacija29').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija29(){
    document.getElementById('operacija29').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija30(){
    document.getElementById('operacija30').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija30(){
    document.getElementById('operacija30').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija31(){
    document.getElementById('operacija31').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija31(){
    document.getElementById('operacija31').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija32(){
    document.getElementById('operacija32').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija32(){
    document.getElementById('operacija32').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija33(){
    document.getElementById('operacija33').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija33(){
    document.getElementById('operacija33').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija34(){
    document.getElementById('operacija34').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija34(){
    document.getElementById('operacija34').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija35(){
    document.getElementById('operacija35').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija35(){
    document.getElementById('operacija35').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija36(){
    document.getElementById('operacija36').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija36(){
    document.getElementById('operacija36').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija37(){
    document.getElementById('operacija37').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija37(){
    document.getElementById('operacija37').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija38(){
    document.getElementById('operacija38').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija38(){
    document.getElementById('operacija38').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija39(){
    document.getElementById('operacija39').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija39(){
    document.getElementById('operacija39').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija40(){
    document.getElementById('operacija40').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija40(){
    document.getElementById('operacija40').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija41(){
    document.getElementById('operacija41').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija41(){
    document.getElementById('operacija41').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija42(){
    document.getElementById('operacija42').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija42(){
    document.getElementById('operacija42').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija43(){
    document.getElementById('operacija43').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija43(){
    document.getElementById('operacija43').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija44(){
    document.getElementById('operacija44').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija44(){
    document.getElementById('operacija44').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija45(){
    document.getElementById('operacija45').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija45(){
    document.getElementById('operacija45').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija46(){
    document.getElementById('operacija46').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija46(){
    document.getElementById('operacija46').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija47(){
    document.getElementById('operacija47').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija47(){
    document.getElementById('operacija47').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija48(){
    document.getElementById('operacija48').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija48(){
    document.getElementById('operacija48').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija49(){
    document.getElementById('operacija49').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija49(){
    document.getElementById('operacija49').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija50(){
    document.getElementById('operacija50').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija50(){
    document.getElementById('operacija50').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija51(){
    document.getElementById('operacija51').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija51(){
    document.getElementById('operacija51').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija52(){
    document.getElementById('operacija52').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija52(){
    document.getElementById('operacija52').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija53(){
    document.getElementById('operacija53').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija53(){
    document.getElementById('operacija53').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija54(){
    document.getElementById('operacija54').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija54(){
    document.getElementById('operacija54').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija55(){
    document.getElementById('operacija55').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija55(){
    document.getElementById('operacija55').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija56(){
    document.getElementById('operacija56').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija56(){
    document.getElementById('operacija56').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija57(){
    document.getElementById('operacija57').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija57(){
    document.getElementById('operacija57').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija58(){
    document.getElementById('operacija58').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija58(){
    document.getElementById('operacija58').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija59(){
    document.getElementById('operacija59').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija59(){
    document.getElementById('operacija59').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija60(){
    document.getElementById('operacija60').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija60(){
    document.getElementById('operacija60').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija61(){
    document.getElementById('operacija61').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija61(){
    document.getElementById('operacija61').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija62(){
    document.getElementById('operacija62').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija62(){
    document.getElementById('operacija62').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija63(){
    document.getElementById('operacija63').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija63(){
    document.getElementById('operacija63').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija64(){
    document.getElementById('operacija64').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija64(){
    document.getElementById('operacija64').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija65(){
    document.getElementById('operacija65').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija65(){
    document.getElementById('operacija65').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija66(){
    document.getElementById('operacija66').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija66(){
    document.getElementById('operacija66').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija67(){
    document.getElementById('operacija67').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija67(){
    document.getElementById('operacija67').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija68(){
    document.getElementById('operacija68').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija68(){
    document.getElementById('operacija68').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija69(){
    document.getElementById('operacija69').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija69(){
    document.getElementById('operacija69').style.right = '-100%';
    closeSettings();
    closeNotifications();
}
function openOperacija70(){
    document.getElementById('operacija70').style.right = '0';
    closeSettings();
    closeNotifications();
}
function closeOperacija70(){
    document.getElementById('operacija70').style.right = '-100%';
    closeSettings();
    closeNotifications();
}


unreadNotifCount = 2;
function checkUnreadNotifs(){
    if(unreadNotifCount == 0){
        document.getElementById("unreadNotifs").style.display = "none";
    }
    else{
        document.getElementById("unreadNotifs").style.display = "block";
    }
}

pran1 = getCookie("pranesimas1");
if (pran1 != "") {
    document.getElementById("pran1Btn").style.fontWeight = "400";
    document.getElementById("pran1Unread").style.display = "none";
    unreadNotifCount -= 1;
    checkUnreadNotifs();
}
else {
    document.getElementById("pran1Btn").style.fontWeight = "800";
    document.getElementById("pran1Unread").style.display = "inline";
    checkUnreadNotifs();
    if (pran1 != "" && pran1 != null) {
        document.getElementById("pran1Btn").style.fontWeight = "800";
        document.getElementById("pran1Unread").style.display = "inline";
        checkUnreadNotifs();
    }
}
function openPranesimas1(){
    document.getElementById('pranesimas1').style.top = '0';
    closeSettings();
    closeNotifications();
    if (pran1 != "") {
        
    }
    else {
        unreadNotifCount -= 1;
        if (pran1 != "" && pran1 != null) {
            unreadNotifCount -= 1;
        }
    }
    checkUnreadNotifs();
    document.cookie = "pranesimas1=read; expires=Sat, 01 Jan 2030 00:00:00 UTC";
    document.getElementById("pran1Btn").style.fontWeight = "400";
    document.getElementById("pran1Unread").style.display = "none";
}
function closePranesimas1(){
    document.getElementById('pranesimas1').style.top = '100%';
    closeSettings();
    closeNotifications();
    checkUnreadNotifs();
}
function pranesimas1MarkAsUnread(){
    closePranesimas1();
    document.getElementById("pran1Btn").style.fontWeight = "800";
    document.getElementById("pran1Unread").style.display = "inline";
    unreadNotifCount += 1;
    checkUnreadNotifs();
    document.cookie = "pranesimas1=read; expires=Sat, 01 Jan 2000 00:00:00 UTC";
}

pran2 = getCookie("pranesimas2");
if (pran2 != "") {
    document.getElementById("pran2Btn").style.fontWeight = "400";
    document.getElementById("pran2Unread").style.display = "none";
    unreadNotifCount -= 1;
    checkUnreadNotifs();
}
else {
    document.getElementById("pran2Btn").style.fontWeight = "800";
    document.getElementById("pran2Unread").style.display = "inline";
    checkUnreadNotifs();
    if (pran2 != "" && pran2 != null) {
        document.getElementById("pran2Btn").style.fontWeight = "800";
        document.getElementById("pran2Unread").style.display = "inline";
        checkUnreadNotifs();
    }
}
function openPranesimas2(){
    document.getElementById('pranesimas2').style.top = '0';
    closeSettings();
    closeNotifications();
    if (pran2 != "") {
        
    }
    else {
        unreadNotifCount -= 1;
        if (pran2 != "" && pran2 != null) {
            unreadNotifCount -= 1;
        }
    }
    checkUnreadNotifs();
    document.cookie = "pranesimas2=read; expires=Sat, 01 Jan 2030 00:00:00 UTC";
    document.getElementById("pran2Btn").style.fontWeight = "400";
    document.getElementById("pran2Unread").style.display = "none";
}
function closePranesimas2(){
    document.getElementById('pranesimas2').style.top = '100%';
    closeSettings();
    closeNotifications();
    checkUnreadNotifs();
}
function pranesimas2MarkAsUnread(){
    closePranesimas2();
    document.getElementById("pran2Btn").style.fontWeight = "800";
    document.getElementById("pran2Unread").style.display = "inline";
    unreadNotifCount += 1;
    checkUnreadNotifs();
    document.cookie = "pranesimas2=read; expires=Sat, 01 Jan 2000 00:00:00 UTC";
}


function openIsmoka(){
    document.getElementById('ismoka').style.bottom = '0';
    closeSettings();
    closeNotifications();
}
function closeIsmoka(){
    document.getElementById('ismoka').style.bottom = '-100%';
    closeSettings();
    closeNotifications();
}
function ismoketiSuma(){
    document.getElementById('emailRequestInput').value = 'FINBONK · Išmoka'
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
    document.getElementById('loader2').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
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
            document.getElementById('keypad').style.pointerEvents = 'none';
            document.getElementById('keypad').style.opacity = '0.2';
        }, 10);
        setTimeout(() => {
            document.getElementById('keypad').style.opacity = '1';
            document.getElementById('keypad').style.pointerEvents = 'all';
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
            document.getElementById('taskelis1').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis2').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis3').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis4').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis5').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis6').style.backgroundColor = '#ebebeb';
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
            document.getElementById('keypad').style.pointerEvents = 'none';
            document.getElementById('keypad').style.opacity = '0.2';
        }, 10);
        setTimeout(() => {
            document.getElementById('taskeliai').style.marginLeft = '-30px';
            document.getElementById('keypad').style.opacity = '1';
            document.getElementById('keypad').style.pointerEvents = 'all';
            inputas = '';
            document.getElementById('kodas').value = '';
            document.getElementById('taskelis1').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis2').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis3').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis4').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis5').style.backgroundColor = '#ebebeb';
            document.getElementById('taskelis6').style.backgroundColor = '#ebebeb';
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
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
    
}
function antras() {
    inputas = inputas + 2;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function trecias() {
    inputas = inputas + 3;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function ketvirtas() {
    inputas = inputas + 4;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function penktas() {
    inputas = inputas + 5;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function sestas() {
    inputas = inputas + 6;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function septintas() {
    inputas = inputas + 7;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function astuntas() {
    inputas = inputas + 8;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function devintas() {
    inputas = inputas + 9;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function nulinis() {
    inputas = inputas + 0;
    document.getElementById('kodas').value = inputas;
    document.getElementById('istrinimas').style.color = '#202020';
    document.getElementById('istrinimas').style.pointerEvents = 'all';
    taskeliai();
}
function istrinti() {
    inputas = '';
    document.getElementById('kodas').value = '';
    document.getElementById('istrinimas').style.color = 'transparent';
    document.getElementById('istrinimas').style.pointerEvents = 'none';
    document.getElementById('taskelis1').style.backgroundColor = '#ebebeb';
    document.getElementById('taskelis2').style.backgroundColor = '#ebebeb';
    document.getElementById('taskelis3').style.backgroundColor = '#ebebeb';
    document.getElementById('taskelis4').style.backgroundColor = '#ebebeb';
    document.getElementById('taskelis5').style.backgroundColor = '#ebebeb';
    document.getElementById('taskelis6').style.backgroundColor = '#ebebeb';
}
function taskeliai(){
    if(inputas.length === 1)
        {
            document.getElementById('taskelis1').style.backgroundColor = '#202020';
    }
    else if(inputas.length === 2)
        {
            document.getElementById('taskelis2').style.backgroundColor = '#202020';
    }
    else if(inputas.length === 3)
        {
            document.getElementById('taskelis3').style.backgroundColor = '#202020';
    }
    else if(inputas.length === 4)
        {
            document.getElementById('taskelis4').style.backgroundColor = '#202020';
    }
    else if(inputas.length === 5)
        {
            document.getElementById('taskelis5').style.backgroundColor = '#202020';
    }
    else if(inputas.length === 6)
        {
            document.getElementById('taskelis6').style.backgroundColor = '#202020';
            document.getElementById('checkBtn').click();
    }
}