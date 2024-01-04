let jobPaicho = false;

function jobPaichoCheckbox(e) {
    jobPaicho = e.checked;
    document.querySelector("#checkbox2").checked = false;
}

function jobPaichoCheckbox2(e) {
    if (e.checked) {
        jobPaicho = false;
    }
    document.querySelector("#checkbox").checked = false;
}

document.querySelector('#checkBtn').addEventListener('click', function (e) {
    const jomanoTaka = document.querySelector("#jomanoTaka").value;
    checkBiyerJoggoKina(jobPaicho, jomanoTaka);
    clearForm();
})

function checkBiyerJoggoKina(jobPaicho, jomanoTaka) {
    if (jobPaicho === true && jomanoTaka >= 50000) {
        showResult('চলো, তোমার পাত্রী খুঁজি');
    }
    else if (jobPaicho === true && jomanoTaka < 50000) {
        showResult('আর কয়েকটা দিন অপেক্ষা করো');
    }
    else if (jobPaicho === false && jomanoTaka >= 1000000) {
        showResult('জব ছাড়া সমাজে ভেলু নাই, তবে ' + jomanoTaka + ' টাকা থাকলে পাত্রী দেখা শুরু করো');
    }
    else if (jobPaicho === false && jomanoTaka < 999999 && jomanoTaka >= 100000) {
        showResult('জব নাই? ' + jomanoTaka + ' টাকা দিয়ে কয়দিন চলবি! কেউ মেয়ে দিবে না। জব ম্যানেজ কর।');
    }
    else {
        showResult('তোর কপালে বিয়ে নাই');
    }
}

function showResult(text) {
    const showText = document.querySelector('.show-result');
    clearResult(showText);
    showText.innerHTML = `<p>${text}</p>`;
}

function clearResult(showText) {
    showText.innerHTML = '';
}

// clear form
function clearForm() {
    document.querySelector("#checkbox").checked = false;
    document.querySelector("#checkbox2").checked = false;
    jobPaicho = false;
    document.getElementById("jomanoTaka").value = '';
}

