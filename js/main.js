let nome = "Filipe Gonçalves";
let idade = 29;
let idade2 = "10";
let frase = "Japão é o melhor time do mundo";

// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);

console.log(nome + " tem " + idade + " anos.");
console.log(idade + idade2);
console.log(frase);
console.log("Frase com uppercase: " + frase.toUpperCase());
console.log("Frase com lowercase: " + frase.toLowerCase());
console.log("Frase com replace: " + frase.replace("Japão", "Brasil"));

let n1 = 5;
let n2 = 3;

console.log("Operações: ")
console.log(n1 + " + " + n2 + " = " + (n1 + n2));
console.log(n1 + " - " + n2 + " = " + (n1 - n2));
console.log(n1 + " x " + n2 + " = " + (n1 * n2));
console.log(n1 + " / " + n2 + " = " + (n1 / n2));

let lista = [ "maçã", "pêra", "laranja" ];

console.log(lista);
console.log(lista[1]);

lista.push("uva");

console.log(lista);

lista.pop();

console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

let fruta = { nome: "maçã", cor: "vermelha" }
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

let frutas = [
    { nome: "maçã", cor: "vermelha" },
    { nome: "uva", cor: "roxa" }
];

console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
console.log(frutas[1].nome);
console.log(frutas[1].cor);

let idade3 = prompt("Indique a sua idade");

if (idade3 >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

let count = 0;
while(count < 5) {
    console.log(count);
    count++;
}

for(let i = 0; i <= 5; i++) {
    console.log(i);
}

let d = new Date();
console.log(d);
console.log(d.getHours());
console.log(d.getDate());
console.log(d.getDay()); // Dia da semana (começa no 0)
console.log(d.getMonth()); // começa no 0


function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(10, 5));

function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome);
}

console.log(setReplace("Vai Japão!", "Japão", "Brasil"));

function validaIdade(idade) {
    let validar;
    if (idade >= 18) {
        validar = true;    
    } else {
        validar = false;
    }
    return validar;
}

let idade4 = prompt("Digite a idade");
console.log(validaIdade(idade4));