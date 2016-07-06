var pacienteNovo = "<tr class='paciente'><td class='info-nome'>Gabi</td><td class='info-peso'>74</td><td class='info-altura'>1.60</td><td class='info-imc'></td></tr>";

// var tabela = document.getElementByTagName("table")[0];
var tabela = document.querySelector("table");
tabela.innerHTML = tabela.innerHTML + pacienteNovo
