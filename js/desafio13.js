function contaVogais(vogais) {  
    vogais = "Numero de vogais no texto" + cont;   
    var cont = 0;
        for(var i = 0 ; i < texto.length; i++ ){
          if(texto.charAt(i)=="a"||texto.charAt(i)=="e"||texto.charAt(i)=="i"||texto.charAt(i)=="o"||texto.charAt(i)=="u"){
             cont++;
          }
        }
       console.log(vogais);
      }