const buttons = document.getElementById('btns').childNodes;

const resultArea = document.getElementById('res');

const addBehavior = (btn, actionName) => btn.addEventListener('click', actionName);

const onButtonPressAction = (event) => {
    resultArea.innerText += event.target.innerText;
};

const clearAction = (event) => resultArea.innerText = ''

const getResult = (event) => {
    let originalText = resultArea.innerText;

    originalText.split(/\D/g).forEach((val) => {
        originalText = originalText.replace(val, toDec(val));
    });

    resultArea.innerText = toBin(Math.floor(eval(originalText)));
};

const toDec = (decNumber) => parseInt(decNumber, 2).toString();

const toBin = (binNumber) => (parseInt(binNumber)).toString(2);

buttons.forEach((el) => {
    let isIn = ['btnEql', 'res', 'btnClr'].includes(el.id)
	if(!isIn){
        addBehavior(el, onButtonPressAction);
    }else if (el.id === 'btnClr'){
        addBehavior(el, clearAction);
    }else{
        addBehavior(el, getResult)
    };
});