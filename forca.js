function solucao(palpite, palavra) {
	let acertos= 0;
    for(let i=0; i<palavra.length; i++){
        if(palavra[i] === palpite){
            acertos+=1;
        }
    }
    console.log(acertos);
}