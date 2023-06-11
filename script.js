function toggleMode() {
  // pagando o html
  const html = document.documentElement
  // fazendo a troca do modo do nosso projeto
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se estiver em mode default, manter a imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
  }

  // pegar a tag img
  const desc = document.querySelector("#profile img")
  // substituir a descrição
  if (html.classList.contains("light")) {
    // se estiver em light mode, altera a descrição da imagem
    desc.setAttribute(
      "alt",
      "Foto de Pedro Caio curtindo o verão, com metade da foto como desenho animado."
    )
  } else {
    // se estiver em default mode, mantém a descrição padrão
    desc.setAttribute(
      "alt",
      "Foto comercial de Pedro Caio sério, com fundo da Webhelp."
    )
  }
}
