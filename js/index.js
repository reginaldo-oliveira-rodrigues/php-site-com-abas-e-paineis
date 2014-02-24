var super_rapido = 500;
var bem_rapido = 1000;
var devagar = 4000;

$(document).ready(function(){
	if(is_logado())	$("#formulario-de-login").toggle(super_rapido);
	$("#conf-form").slideToggle(super_rapido);
	$(".painel-de-abas").load("abas.html");
	$("#conf-form").load("form-para-atualizar-webstatus.html");
	
	definir_comportamentos_para_formulario_de_login();
	definir_comportamentos_para_formulario_de_configuracao();
	definir_comportamentos_para_abas();
	exibir_no_painel("pg03.html");
});
function definir_comportamentos_para_formulario_de_login(){
	$("#formulario-de-login").load("login.html");
	$("#formulario-de-login").toggle(super_rapido);
	
	// anexar evento de clique no botao logar nao funciona sem esse tempo de espera 
	setTimeout(configurar_click_no_botao_logar,bem_rapido);
	setTimeout(configurar_click_no_menu_login,bem_rapido);
}
function configurar_click_no_botao_logar(){
	$("#logar").click(function(event){
		$("#formulario-de-login").toggle(super_rapido);
	});
}
function configurar_click_no_menu_login(){
	$("#login").click(function(event){
		$("#formulario-de-login").toggle(super_rapido);
	});
}
function definir_comportamentos_para_formulario_de_configuracao(){
	setTimeout(configurar_click_no_menu_configuracao,bem_rapido);
	setTimeout(configurar_click_no_botao_atualizar,bem_rapido);
}
function configurar_click_no_menu_configuracao(){
	$("#configuracao").click(function(event){
		$("#conf-form").slideToggle(super_rapido);
	});
}

function configurar_click_no_botao_atualizar(){
	$("#atualizador").click(function(evento){
		$("#conf-form").slideToggle(super_rapido);
		evento.preventDefault();
		exibir_no_painel("pg01.html");
	});
}
function definir_comportamentos_para_abas(){
	setTimeout( configurar_click_para_aba_3, bem_rapido );
	setTimeout( configurar_click_para_aba_4, bem_rapido );
	setTimeout( configurar_click_para_aba_5, bem_rapido );
}
function configurar_click_para_aba_3(){
	$("#aba-3").click(function(evento){
		exibir_no_painel("pg03.html");
		$("#webstatus").addClass("fundo-azul");
		$("#webstatus").removeClass("fundo-laranja");
		$("#webstatus").removeClass("fundo-ciano");
	});
}
function configurar_click_para_aba_4(){
	$("#aba-4").click(function(evento){
		exibir_no_painel("pg04.html");
		$("#webstatus").addClass("fundo-laranja");
		$("#webstatus").removeClass("fundo-azul");
		$("#webstatus").removeClass("fundo-ciano");
	});
}
function configurar_click_para_aba_5(){
	$("#aba-5").click(function(evento){
		exibir_no_painel("pg05.html");
		$("#webstatus").addClass("fundo-ciano");
		$("#webstatus").removeClass("fundo-laranja");
		$("#webstatus").removeClass("fundo-azul");
	});
}
function exibir_no_painel(uma_pagina){
	$("#webstatus").hide();
	$("#conteudo-rastreavel").load(uma_pagina);
	setTimeout(exibir_pagina, bem_rapido);
}
function exibir_pagina(){
	$("#webstatus").show(super_rapido);
}

function is_logado(){
	// TODO prover implementacao
	return false;
}