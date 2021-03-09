function solucao(velocidade, aceleracao, distanciaObjeto) {
    const distancia = - (velocidade*velocidade) / (2 * aceleracao);
    if(distanciaObjeto<distancia){
        console.log("COLISAO A FRENTE");
    } else if (distanciaObjeto===distancia){
        console.log("NAO ACELERE");
    } else{
        console.log("CAMINHO SEGURO");
    }
    }