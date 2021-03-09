function solucao(jogadas) {
    let grupo1=0;
    let grupo2=0;
      
      for(let i=0; i<jogadas.length; i++){
          if(jogadas[i]==1){
              grupo1+=1;
          } else{
              grupo2+=1;
          }
      }
      if(grupo1==grupo2){
          console.log("true");
      }else{
          console.log("false");
      }
  }