var appForm = document.querySelector("#app form");

appForm.onsubmit = real2centavo;

function real2centavo(e){
	e.preventDefault();

	var input_real = document.getElementById("input_real").value;
	var resultado = document.getElementById("resultado");
	resultado.innerHTML = " ";

	var resultado_moedas = document.getElementById("resultado_moedas");
	resultado_moedas.innerHTML = "";

	var valor_centavos = parseFloat(input_real)*100;

	resultado.innerHTML = valor_centavos;

	var moedas = separarMoedas(valor_centavos);

	resultado_moedas.innerHTML = "Moeda de 25 centavos : " + moedas[0]
	+ " Moeda de 10 centavos : " + moedas[1] + " Moeda de 5 centavos : " + moedas[2]
	+ " Resto: " + moedas[3];
}

function separarMoedas(valor){
	var total = valor;
	
	var Moeda25 = 0;
	if(total >= 25){
		Moeda25 = parseInt(total/25);
		total -= 25*Moeda25;
	}
	console.log(total);

	var Moeda10 = 0;
	if(total >= 10){
		Moeda10 = parseInt(total/10);
		total -= 10*Moeda10;
	}

	var Moeda5 = 0;
	if(total >= 5){
		Moeda5 = parseInt(total/5);
		total -= 5*Moeda5;
	}

	var Resto = total;

	return [Moeda25, Moeda10, Moeda5, Resto];
}