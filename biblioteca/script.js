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

    const livro = new Livro(nome.value,autor.value,paginas.value);

    res.innerHTML='Nome:' + livro.nome+'<br>'
    res.innerHTML+='Autor:' + livro.autor+'<br>'
    res.innerHTML+= 'Paginas:' + livro.paginas+'<br>'
}