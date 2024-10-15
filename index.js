
var elementosDuvidas = document.querySelectorAll('.duvida')
        

elementosDuvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})

// function nome(argumento) { 
//     //conteudo da função
// }




// console.log("Hello, World!");	

// var titulo = document.querySelector(".titulo-pagina");
// titulo.textContent = "Sistema - Edicursos";

// var traAluno = document.querySelector("#primeiro-aluno");

// var tdNome = traAluno.querySelector(".td-nome");
// var nome = tdNome.textContent;

// var tdTrabalho = traAluno.querySelector(".td-trabalho");
// var trabalho = tdTrabalho.textContent;

// var tdProva = traAluno.querySelector(".td-prova");
// var prova = tdProva.textContent;

// var tdMedia = traAluno.querySelector(".td-media");
// var media = tdMedia.textContent;

// var mediAluno = trabalho + prova / 2;
// console.log(mediAluno)

