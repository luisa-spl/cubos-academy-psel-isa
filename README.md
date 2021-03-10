# cubos-academy-psel-isa
Repositório com as resoluções dos desafios resolvidos como parte do processo seletivo do Programa Sucesso Compartilhado da Cubos Academy, 
para ingresso no curso Programação do zero. Cada arquivo corresponde a um desafio.

<B>DESAFIO "DIVISÍVEL POR X"</B>
O objetivo desse exercicio é retornar se o número de entrada é divisível por x ou não.

Seu programa receberá sempre de entrada: um número inteiro e outro número inteiro representando x e deverá imprimir na tela se o primeiro número de entrada é divisível por x.

Input Format

A entrada será sempre dois números inteiros.

Output Format

A saída deverá ser sempre true ou false.

<B>DESAFIO "JACKPOT"</B>
O objetivo desse exercício é retornar se a pessoa que jogou no caça-níqueis ganhou o jackpot ou não.

Uma pessoa ganha no caça-níqueis quando os três resultados são iguais.

Você receberá na entrada tres strings representando cada um dos resultados. Caso a pessoa tenha ganhado, imprima true, caso contrátio, imprima false.

Input Format

A entrada será sempre composta por três strings, cada uma representando um resultado, através de um caractere.

Output Format

A saída deverá ser true caso a pessoa tenha ganho o jackpot e false caso contrário.

<B>DESAFIO "DERRAPAGEM"</B>
O Tesla Model X é um carro autônomo que consegue dirigir sozinho. Para evitar acidentes, o carro deve ser capaz de calcular qual a distância que ele percorrerá, ao iniciar o processo de frenagem, até parar.

Você acabou de ser contratado(a) como desenvolver(a) de software na Tesla. Sua primeira tarefa é fazer um programa capaz de calcular essa distância. A fórmula para o cálculo é a seguinte:

Seu programa sempre receberá como entrada a a velocidade e a aceleração e deverá imprimir na tela a distância percorrida pelo carro até parar.

Input Format

A entrada será sempre composta por dois números inteiros: a velocidade e a aceleração.

Output Format

A saída deverá ser sempre um número representando a distância percorrida pelo carro ao longo da frenagem.

<B>DESAFIO "COLISÃO"</B>
Com o sucesso da sua ultima tarefa na Tesla, lhe foi passada uma melhoria.

A melhoria consiste em mostrar no visor do carro se ele irá colidir com um objeto em sua frente, usando a fórmula da sua tarefa anterior e a distância do objeto.

Seu programa sempre receberá como entrada a velocidade, aceleração e a distância do objeto e deverá imprimir na tela se o carro irá colidir ou não.

Input Format

A entrada será sempre três números inteiros: a velocidade, a aceleração e a distância.

Output Format

"COLISAO A FRENTE" quando a distância até o objeto for menor do que a distância de derrapagem do carro
"NAO ACELERE" quando as distâncias forem iguais
"CAMINHO SEGURO" quando a distância até o objeto for maior do que a distância de derrapagem do carro
ATENTE-SE À CAPITALIZAÇÃO DA RESPOSTA, TUDO DEVERÁ ESTAR EM MAIÚSCULAS
Sample Input 0

{
  "velocidade": 20,
  "aceleracao": -2,
  "distanciaObjeto": 500
}
Sample Output 0

CAMINHO SEGURO
Explanation 0

Como o resultado da fórmula será 100 e 100 é menor que 500, então CAMINHO SEGURO deverá ser mostrado na tela.

<B>DESAFIO "ENÉSIMO NÚMERO PAR"</B>
O enésimo termo é uma fórmula com 'n' que permite encontrar qualquer termo de uma sequência sem ter que ir um por um.

'n' representa a posição do termo, portanto, para encontrar o 50º termo, substituiríamos 50 na fórmula no lugar de 'n'.

Exemplo da sequência:

1º	2º	3º	nº
2 * 1 = 2	2 * 2 = 4	2 * 3 = 6	2 * n = 2n
Seu programa receberá sempre como entrada um número inteiro representando n e deverá imprimir na tela um número inteiro representando o enésimo número par.

Input Format

A entrada será sempre um número inteiro representando n.

Output Format

A saída deverá ser sempre o enésimo (n) número par.

<B>DESAFIO "BLACK FRIDAY"</B>
Toda black friday sua família combina de trocar presentes entre si. Qualquer familiar pode entrar na brincadeira, basta comprar um presente que atenda os requistos de preço e avaliação estipulados. Cada amigo secreto estipula um preço máximo e uma nota de avaliação mínima para seu presente. Cabe, a quem for presentear, atender a estes requisitos.

Para agilizar o processo desse ano, você conseguiu acesso a uma lista de produtos e decidiu criar um programa para filtrá-los por avaliação e preço.

Seu programa receberá sempre como entrada:

a lista de produtos contendo o preço e a avaliação de cada um
um número inteiro representando o valor máximo que o presente deve ter
um número inteiro representando a avaliação mínima que o presente deve ter
Seu programa deve imprimir na tela um array contendo apenas os produtos que podem ser dados como presente nesta situação.

Input Format

A entrada será sempre composta por três variáveis:

a lista de produtos contendo o preço e a avaliação de cada um
um número inteiro representando o valor máximo que o presente deve ter
um número inteiro representando a avaliação mínima que o presente deve ter
Output Format

A saída deverá ser sempre um array de produtos que atendem ao filtro, ou seja, que tenham preço menor ou igual ao preço máximo e avaliação igual ou superior a avaliação mínima.

<B>DESAFIO "PURIFICAÇÃO"</B>
Você e seus amigos estavam fazendo um projeto da faculdade e encontraram um banco de dados com nomes científicos de animais que poderia ajudá-los, porém os dados estavam corrompidos.

O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.

A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

Dado corrompido	              Dado purificado
*Canis %lupus )familiaris	    Canis lupus familiaris
Felis) silvestris *catus&	    Felis silvestris catus
$Ailuropoda@ melanoleuca!	    Ailuropoda melanoleuca
Input Format

A entrada será sempre uma string representando um nome corrompido com alguns dos seguintes caracteres !@#$%&*().

Output Format

A saída deverá ser sempre uma string representando o nome purificado sem os seguinte caracteres especiais !@#$%&*().

Sample Input 0

*Canis %lupus )familiaris
Sample Output 0

Canis lupus familiaris

<B>DESAFIO "EMPRÉSTIMO"</B>
Um novo banco abriu em seu estado e liberou a fórmula que ele utiliza para calcular o valor da parcela de um tipo de empréstimo.

A fórmula precisa de 3 dados, os ganhos por mês da pessoa, seu score no Serasa e em quantos meses a pessoa pretende pagar.

Existem 3 faixas de juros que as pessoas se encaixam dependendo de seu score no Serasa:
- 1ª faixa (Score menor que 300), juros = 3%;
- 2ª faixa (Score menor que 700), juros = 9%;
- 3ª faixa (Score maior ou igual a 700), juros = 15%;

Um amigo seu viu isso como uma forma de empreender e decidiu criar um aplicativo que calcula o valor da parcela. Para fazer isso ele pediu a sua ajuda.

Seu programa receberá sempre como entrada os ganhos da pessoa, seu score no Serasa e em quantos meses a pessoa pagará e deverá imprimir na tela o valor da parcela.

Input Format

A entrada será sempre três números inteiros:

os ganhos da pessoa
seu score no Serasa
em quantos meses a pessoa pagará.
Output Format

A saída deverá ser sempre um número representando o valor da parcela.

Sample Input 0

<B>DESAFIO "FORCA"</B>
Você está desenvolvendo um jogo da forca para a sua empresa. No jogo da forca, o usuário tem que descobrir qual é a palavra que está "escondida" escolhendo letras que ele acredita que está contida nessa palavra.

Seu papel como desenvolvedor(a) é fazer a parte do código que, ao receber a letra palpite do usuário e a palavra escondida, retornará a quantidade de acertos obtidos pelo usuário nesse palpite.

Input Format

A entrada será sempre duas strings: o palpite feito pelo jogador e a palavra a ser descoberta. O palpite será sempre apenas um caractere minúsculo e sem acento. A palavra será sempre composta apenas por caracteres minúsculos e sem acento.

Output Format

A saída sempre será a quantidade de acertos do palpite.

<B>DESAFIO "COINCIDÊNCIA"</B>
Coincidência é um "jogo" muito utilizado por crianças quando querem formar duas equipes com quantidades iguais de pessoas aleatoriamente.

Para isso um número par de crianças escolhe 0 ou 1 para jogar, todas na mesma hora. Todas as que jogarem 0 são selecionadas para uma equipe e todas que jogaram 1 são selecionadas para outra. Caso ambas as equipes tenham a mesma quantidade de crianças elas podem começar a jogar. Caso contrário, devem fazer um novo sorteio.

Faça um programa que diga, a partir nos valores escolhidos pelas crianças, se elas podem começar a jogar ou se devem fazer um novo sorteio.

Input Format

A entrada será sempre um array cujo tamanho é um número par. Cada item desse array será um número 0 ou 1, representando o que foi escolhido por uma criança nessa rodada.

Output Format

A saída deverá ser true caso o sorteio tenha conseguido dividir as crianças em dois grupos e false caso seja necessário realizar um novo sorteio.
