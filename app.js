//console.log(`Filme: ${dados[0].titulo} - Descrição: ${dados[0].descricao}`);
// Sempre meno um, ou seja, se quero o 2, eu aperto o 1

function pesquisar(){
    console.log("Clicou");
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    if (campoPesquisa == ""){
        section.innerHTML = '<p>Digite um nome</p>'
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let titulo = "";
    let descricao = "";
    let tags = "";


let resultados = "";
//Para cado dado dentro da lista de dados
for (let dado of dados){
    titulo = dado.titulo.toLocaleLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    tags = dado.tags.toLocaleLowerCase();
    //se titulo 
    if(titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Siga para mais informações</a>
        </div>
        `;
    }
    // esse mais antes do =, soma e acrescenta a div
}

if(!resultados){
    section.innerHTML = '<p>Nada foi encontrado</p>'
        return


}




section.innerHTML = resultados;
}



