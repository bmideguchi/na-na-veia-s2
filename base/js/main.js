var arrayDeConteudos = [
	'eu gosto do seu jeito quando fala que bateu o peh e fica reclamando de um jeito fofo ai meu pééé!',
	'gosto de você quando está com fome e fica falando "comida comida comida!"" hahaha',
	'gosto de você quando me chama de criança... Mentira disso não gosto nao! Kkkk',
	'sabe que eu desmoronaria sem você.',
	'eu não sei como você faz o que você faz, porque tudo que não faz sentido sobre mim faz sentido quando estou com você.',
	'quero chamar você de minha, quero segurar sua mão pra sempre, nunca deixar você.',
	'tão bom como você me faz sentir.',
	'você é mais do que tudo que preciso.',
	'tudo que eu queria é você, não preciso de mais ninguém, soh de você.',
	'um motivo pra estar com você é porque é você',
	'estou viciado em Na.',
	'Meus dias são mais alegres depois que comecei a sair contigo. Passo tudo de uma forma tranquila, o trabalho e a vida.',
	'gosto de como você me acalma.',
	'gosto de como você me faz feliz, e de como você mudou minha vida.',
	'gosto ainda mais do sorriso que você me tira que ninguém consegue tirar um sorriso como esse tão sincero.',
	'gosto de te encarar mesmo você me odiando.',
	'gosto de tirar um sorriso seu, de fazer beijinho de esquimó (bengay) kkk de dançar contigo.',
	'gosto de te abraçar.',
	'gosto do seu cheiro.',
	'gosto da sua batyan hahahaha pera vamos com calma eiji... mas sério eu gostei da sua batyan e do seu ditian menos do spike q eu e ele estamos batalhando pra ver quem te conquista zuera eu gosto do spike.',
	'gosto de trocar risadas com você.',
	'de verdade fico ansioso ateh o final do dia pra te ver.',
	'gosto da sua voz.',
	'gosto quando a gente fala nada com nada e começa a rir do nada.',
	'gosto de durmir com você, mesmo a gente não falando nada soh sua presença já me faz sentir confortável.',
	'gosto de como você fala dos livros que leu.',
	'com você tudo se torna simples q Éh o que eu mais gosto.',
	'gosto de sair com você.',
	'gosto de jantar na casa da sua batyan de jogar videogame contigo.',
	'30 motivos não são suficiente do quanto eu gosto de estar com você.',
]

var motivoFinal = 'Na, eu gosto muito muito de você, namora comigo? 😍💏👫'

var arrayDeConteudosRepetidos = []

var conteudoAtual = '';

var conteudosTotais = 0;

$(document).ready(function(){
	
	//Adicionando cliques
	$('#buttonGenerate').on('click touch',gerarConteudo)
	$('#mensagensBtn').on('click touch',function(){mostrarTela('.scene1')})
	$('#fotosBtn').on('click touch',function(){mostrarTela('.scene3')})
	$('#introBtn').on('click touch',function(){$('.intro').fadeOut(500)})
	
})

// onError Callback
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function mostrarTela(e){
	$('.scenes').fadeOut(500);
	$(e).delay(500).fadeIn(500);
}

function removerConteudo(){

	//desabilitando o botão
	$('#buttonGenerate').css({'pointer-events':'none','opacity':'0.5'})

	//Tirando mensagem anterior
	$('#reason').fadeOut(500);
}

function gerarConteudo(){

	//Retirando conteúdo anterior
	if (conteudosTotais!=0) {
		removerConteudo();
	};

	//Gerando conteúdo
	setTimeout(function(){	
		conteudoAtual = arrayDeConteudos[conteudosTotais];
		//mensagem final
		if (conteudosTotais==arrayDeConteudos.length) {
			conteudoAtual = motivoFinal;
		};
		if (conteudosTotais == arrayDeConteudos.length) {
			$('#left-heart').css('display','none')
			$('#right-heart').css('display','none')
			$('#middle-heart').css({ 'border':0, 'background-image':'url(img/full_heart.png)', 'width':'20px', 'height':'23px'})
			$('#content').css({'background': 'rgba(202,51,147,0.4)', 'border': '5px solid rgb(202,51,147)'})
			$('.header').css('background-color','#ca3393')
			$('#buttonGenerate').css('display','none')
			$('#content').css('font-size','1.8em')
		};
		document.getElementById('reason').innerHTML = conteudoAtual;
	},500)

	//Subindo mensagem nova
	$('#reason').fadeIn(500);
	setTimeout(function(){
		//Atualizando o contador
		var larguraDoContador = parseInt($('.mainContent').css('width'))*0.6
		if (conteudosTotais != arrayDeConteudos.length) {
			$('#middle-heart').css('width', (larguraDoContador/30)*(arrayDeConteudos.length-conteudosTotais))
		};
		//Habilitando o botao
		if (conteudosTotais!=arrayDeConteudos.length) {
			$('#buttonGenerate').css({'pointer-events':'auto','opacity':'1'})
		}
		conteudosTotais++
	},1000)

	console.log(conteudosTotais)
}