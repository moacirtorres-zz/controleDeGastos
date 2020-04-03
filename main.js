// Pegando o valor dos inputs e salvando em uma objeto



class SalvarValores {


	constructor(nome, departamento, valor) {
	this.nome = nome,
	this.departamento = departamento,
	this.valor = valor

	}


}

$(".botaoSalvar").click(function(){
	var nome = $(".nome").val()
	var departamento = $(".departamento").val()
	var valor = $(".valor").val()
	var salvarValores = new SalvarValores(nome, departamento, valor)


	
	inserirValores(nome,departamento,valor)
	
	
})


// Criando uma nova linha da tabela ao ser clicado o botão salvar




function inserirValores(nome, departamento, valor) {




			var linha = $("<tr>")
			var colunaNome = $("<td>").text(nome)
			var colunaDepartamento = $("<td>").text(departamento)
			var colunaValor = $("<td>").text(valor)
			linha.append(colunaNome)
			linha.append(colunaDepartamento)
			linha.append(colunaValor)
			var tabela = $("tbody")
			tabela.append(linha)
			
			
			
	}	


	