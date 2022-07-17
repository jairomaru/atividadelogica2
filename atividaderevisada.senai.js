let dataEvento = new Date('10/08/2022');  
var dia = dt.getDate();  
var qtdVagas = 49  ;

if(qtdVagas <50 ){
  var qtdVagas= qtdVagas + 1; 
}else{ 
  document.write("Não é possivel inscrever-se quantidade de vagas já foi preenchida");
}
    if(dataEvento < dia)  {
    var idade = prompt("Ainda há tempo ,digite sua idade:");
    }else{
      document.write("data expirada")
    }
  if(idade =>18){
    var Nome= prompt(" Você está apto a inscrever-se , digite seu nome completo");
    var Cpf = prompt("digite seu Cpf");
  }

  alert("Você foi cadastrado " + Nome) ;























 