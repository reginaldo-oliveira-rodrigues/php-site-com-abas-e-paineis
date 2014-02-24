function preencher_combo(combo, valores){
	var opcao_combo = "";
	for(var cont = 0; cont < valores.length; cont++){
		opcao_combo = "<option value = \"";
		opcao_combo += valores[cont];
		opcao_combo += "\"";
		
		if(cont == 0){
			opcao_combo += " selected=\"selected\" ";
		}
		
		opcao_combo += ">";
		opcao_combo += valores[cont]; // depois colocar outro rotulo
		opcao_combo += "</option>";
		combo.append(opcao_combo);
	}
}

function hasvalue(element){
	return (element.val() != null || element.val() != undefined);
}