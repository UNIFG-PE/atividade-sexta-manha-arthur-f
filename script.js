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

/** @type {HTMLButtonElement} */ (document.getElementById("botao-tabuada")).addEventListener("click", () => {
    const num = parseFloat(prompt("Número:") ?? "");
    if(Number.isNaN(num)) {
        console.error("inválido");
        return;
    }
    for(let i = 1; i <=10; ++i) {
        console.log(`${num}*${i}=${num*i}`);
    }
});

/** @type {HTMLButtonElement} */ (document.getElementById("botao-adv")).addEventListener("click", () => {
    const num = Math.floor(Math.random()*10)+1;
    let guess = -1;
    while(true) {
        guess = parseInt(prompt("Advinhar número") ?? "");
        if(guess === num) {
            alert("ACERTO");
            break;
        }else if(Number.isNaN(guess)) {
            alert("INVÁLIDO");
        }else if(guess < num) {
            alert("MUITO BAIXO");
        }else if(guess > num) {
            alert("MUITO ALTO");
        }
    }
});

/** @type {HTMLButtonElement} */ (document.getElementById("botao-temp")).addEventListener("click", () => {
    const num = parseFloat(prompt("Temperatura:") ?? "");
    const convType = /** @type {HTMLSelectElement} */ (document.getElementById("select-temp")).value;
    if(convType === "ctf") {
        alert(`Resultado: ${(num*9/5)+32}°F`);
    }else if(convType === "ftc") {
        alert(`Resultado: ${(num-32)*5/9}°C`);
    }
});

/** @type {HTMLButtonElement} */ (document.getElementById("botao-tarefas")).addEventListener("click", () => {
    const /** @type {string[]} */ tasks = [];
    let task = "";
    while(true) {
        task = prompt('Adicionar tarafa? (Digite "não" ou "sair" para parar de adicionar)') ?? "";
        if(task === "não" || task === "sair") {
            break;
        }else {
            tasks.push(task);
        }
    }
    /** @type {HTMLParagraphElement} */ (document.getElementById("tarefas")).innerHTML = 
        `TAREFAS:<br>${tasks.join("<br>")}<br>=====`;
});