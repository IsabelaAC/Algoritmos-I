const livros = require('./listaLivros');

function insertionSort(lista) {

  for (let atual = 0; atual < lista.length; atual++) {
    let analiseItem = atual;
    while (analiseItem > 0 && lista[analiseItem].preco < lista[analiseItem - 1].preco) {
      let itemanaliseItem = lista[analiseItem];
      let itemAnterior = lista[analiseItem - 1];
    
      lista[analiseItem] = itemAnterior
      lista[analiseItem - 1] = itemanaliseItem

      analiseItem--
    }
  }
  console.log(lista);
}

insertionSort(livros);


