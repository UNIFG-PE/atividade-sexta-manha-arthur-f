// @ts-check

/** @type {HTMLButtonElement} */ (document.getElementById("botao")).addEventListener("click", () => {
    /** @type {HTMLParagraphElement} */ (document.getElementById("msg"))
        .innerText = "PARABENS CLICASTE NO BOTÃO";
});

/** @type {HTMLButtonElement} */ (document.getElementById("botao-idade")).addEventListener("click", () => {
    const age = parseInt(prompt("Qual sua idade?") ?? "");
    if(Number.isNaN(age) || age < 0) {
        alert("Idade inválida");
    }else if(age >= 18) {
        alert("Você é maior de idade");
    }else {
        alert("Você é menor de idade");
    }
});

/** @type {HTMLButtonElement} */ (document.getElementById("botao-calculadora")).addEventListener("click", () => {
    const input = prompt("Calculo:") ?? "";
    let num1 = "";
    let num2 = "";
    let /** @type {string | null} */ op = null;
    let numIdx = 0;
    for(let i = 0; i < input.length; ++i) {
        const code = input.charCodeAt(i);
        if((code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) || input[i] === '.') {
            if(numIdx === 0) {
                num1 += input[i];
            }else {
                num2 += input[i];
            }
        }else if(input[i] === '+' || input[i] === '-' || input[i] === '*' || input[i] === '/') {
            op = input[i];
            ++numIdx;
        }
    }
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    switch(op) {
        case '+':
            console.log(parsedNum1+parsedNum2);
            break;
        case '-':
            console.log(parsedNum1-parsedNum2);
            break;
        case '*':
            console.log(parsedNum1*parsedNum2);
            break;
        case '/':
            console.log(parsedNum1/parsedNum2);
            break;
        default:
            console.error("operador inválido");
    }
});