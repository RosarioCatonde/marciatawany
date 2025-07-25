
 const text = "Olá! Seja bem-vindo(a) ao meu espaço digital. Aqui você encontra tudo reunido em um só lugar — minhas redes sociais, fotos favoritas, conteúdos que me representam e um pouquinho da minha essência.Este mini site foi criado para facilitar a forma como me conecto com pessoas incríveis como você. Se gostou do meu conteúdo, sinta-se à vontade para explorar e acompanhar mais de perto o que compartilho. Para divulgação ou parcerias, clique no botão abaixo.";
 
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();



  



