$(function(){
	var i = 0;
	var principal = $('.produtos');
	for(i=0;i<4;i++){
		principal.append('<div class="configuracao">\
		<div class="parteImage">\
			<div class="img"></div>\
			<div class="posicao">\
				<p class="posicaoProduto">1</p>\
			</div>\
		</div>\
		<br>\
		<div class="CaixaTextos">\
			<p class="nome">Bernardo</p>\
			<p class="precoAntigo">R$ 500</p>\
			<p class="precoAtual">Por R$ 469</p>\
			<p class="prestacao">10x R$ 39,99</p>\
		</div>\
	</div>');
	}
});