alert('Hello world');
var nome = prompt('Digite seu nome');
document.getElementsByTagName('div')[0].innerHTML = document.getElementsByTagName('div')[0].innerHTML + '<h2>' + nome + '</h2>';