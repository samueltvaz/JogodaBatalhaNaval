
function pedirNumMaxCasas() {
	
	var numMaxCasas = parseInt(prompt("Escreve o número máximo de casas entre 3 e 100")); //pede o numero máximo de casas
	// se o número for maior que 100 ou menor que 3 ou se não for um numero, voltar a pedir o numero máximo
	if (numMaxCasas < 3 || numMaxCasas > 100){
		alert("só são válidos números entre 3 e 100! Tens uma tentativa restante!");
		var numMaxCasaas = parseInt(prompt("Escreve o número máximo de casas entre 3 e 100"));
		return numMaxCasaas;

	} else {
		return numMaxCasas;
	}
}

var numMaxCasas = pedirNumMaxCasas ();
	


var parte1 = 1 + parseInt(Math.random()* (numMaxCasas - 2)); //variável para a primeira "casa" do barco
var parte2 = parte1 + 1; //variável para a segunda "casa" do barco
var parte3 = parte2 + 1; //variável para a terceira "casa" do barco

var jogada;
var valoresIntroduzidos = [];
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;


while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e " + numMaxCasas); //pede o número da casa a querer afundar
   
   if (jogada < 1 || jogada > numMaxCasas || valoresIntroduzidos.includes(jogada)) { //se o número for menor que 1 ou maior que o numMaxCasas ou se já tiver jogado o número, alertar o jogador

      alert("Jogada inválida. Tenta de novo!");

   } else {

		valoresIntroduzidos.push(jogada); //adiciona a jogadaaos valores introduzidos
   
		totalJogadas = totalJogadas + 1; //aumenta 1 unidade ao total de jogadas

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) { //se a jogada acertar em alguma parte, alertar o jogador

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas + 1; //aumenta o número de jogadas atingidas

         if (atingidas == 3) { //se afundar as 3 partes, alertar o jogador que o navio foi afundado

            foiAfundado = true;

            alert("Navio totalmente afundado!");

         }

      } else { //se não acertar, alertar o jogador que falhou

         alert("Falhaste...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " +  //cria estatistica de pontaria em % e avisa o jogador
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas*100) + "%";

alert(estatistica);

