function solucao(produtos, valorMaximo, avaliacaoMinima) {
    function verifica(produtos){
        return produtos.valor <= valorMaximo && produtos.avaliacao >= avaliacaoMinima;
    }
        let lista=produtos.filter(verifica);
        console.log(lista);
        }