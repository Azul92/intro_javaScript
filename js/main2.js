function botao() {
    // alert("Obrigado por clicar");
    document.getElementById('agradecimento').innerHTML = "<strong>Obrigado por clicar</strong>";
}

function redirecionar() {
    // window.open("https://google.com"); // abre em outra aba
    window.location.href = "https://google.com"; // abre na mesma aba
}

function trocar(elemento) {
    // document.getElementById('mousemove').innerHTML = "Texto trocado";
    elemento.innerHTML = "Texto trocado";
}

function voltar(elemento) {
    // document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui!';
    elemento.innerHTML = "Passe o mouse aqui!"
}

function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}