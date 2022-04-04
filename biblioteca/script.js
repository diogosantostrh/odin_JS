function adicionar() {
    let nome = document.querySelector('input#txtn')
    let autor = document.querySelector('input#txta')
    let paginas= document.querySelector('input#txtp')
    let res = document.querySelector('div#resultado')
    let book = []

    function Livro(nome,autor,paginas) {
        this.nome=nome
        this.autor=autor
        this.paginas=paginas
    }

    function addlivro(nome,autor,paginas) {
        const livro = new Livro(nome,autor,paginas)
        /*book.push([livro.nome,livro.autor,livro.paginas])*/

        res.innerHTML='Nome:' + livro.nome+'<br>'
        res.innerHTML+='Autor:' + livro.autor+'<br>'
        res.innerHTML+= 'Paginas:' + livro.paginas+'<br>'
    }
    if (book.length == 0) {
        addlivro(nome.value,autor.value,paginas.value)
        book.push([nome.value,autor.value,paginas.value])
    } else {
        addlivro(nome.value,autor.value,paginas.value)
    }
    
    console.log(book)
    console.log(book.length)
    
    
}