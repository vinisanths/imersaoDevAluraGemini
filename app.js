function pesquisar() {
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let encontrouResultados = false;


  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  
  // Itera sobre cada planta no array 'plantas'
  for (let planta of plantas) {
    titulo = planta.titulo.toLowerCase();
    descricao = planta.descricao.toLowerCase();
    
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      encontrouResultados = true;
      console.log(planta.titulo.includes(campoPesquisa));
      
      // Cria um novo elemento div para cada planta com as informações relevantes
      resultados += `<div class="item-resultado">
      <h2>${planta.titulo}</h2>
      <p class="descricao-meta">${planta.descricao}</p>
      <a href=${planta.link} target="_blank">Mais informações</a>
      </div>
      `;
    } 
  }
  if (campoPesquisa == "") {
    resultados = "<p> Campo de busca vazio!</p>";
  }
  
  if (!encontrouResultados) {
    resultados = "<p> Planta não consta em nosso Banco de Dados</p>"
  }
  
  // Atualiza o conteúdo da seção com os resultados gerados
  section.innerHTML = resultados;
}
