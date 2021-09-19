const btn = document.getElementById('show');
btn.addEventListener('click', () => onBtn());

const formEl = document.getElementById('form');
const outputContainer = document.getElementById('output-container');
const outputPlaceholder = document.getElementById('output-placeholder');
function onBtn(form = formEl) {
    var reg = /^([۰-۹]|\d)+$/;
    if (form.elements[0].value.trim()) {
        if (reg.test(form.elements[0].value)) {
            value = form.elements[0].value.toEnglishDigits();
            if (outputContainer.style.visibility !== 'visible') {
                outputContainer.style.visibility = 'visible';
                outputPlaceholder.innerText = value;
            } else {
                outputPlaceholder.innerText = value;
            }
        }
        else {
            outputPlaceholder.innerText = "Must input numbers";
        }
    }
}

String.prototype.toEnglishDigits = function () {
    return this.replace(/[۰-۹]/g, function (chr) {
        var persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return persian.indexOf(chr);
    });
};

