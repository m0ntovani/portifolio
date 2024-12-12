<template>
    <header>
       <h1>Thiffany Montovani</h1>
        <p>Dev Front-End<p>
        </header>
    <main>
        <section id="foto">
        <img src="./src/assets/perfil.png" alt="Foto Perfil">
        <h2>Thiffany Montovani da Costa</h2>
        <p>22 anos</p>
        <p>Vitória/Espírito Santo</p>
        </section>

        <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>👋🏽 Prazer! Me chamo Thiffany Montovani. Formada em Direito e veterana no curso de Analise e Desenvolvimento de Sistemas!
        <p>Estou sempre em busca de novos desafios e de obter de entrar no mercado, além de colaborar em projetos que unam inovação e impacto social. </p> 
        </section>

        <section id="gostos">
        <h2>Gostos Pessoais</h2>
        <ul>
          <li>Sou uma cinéfila de carteirinha.</li>
          <li>Eu sou apaixonada por futebol e como reflexo disso, joguei anos em um time semi-profissional feminino. </li>
          <li>Sou amante de um bom café, e combinado com música e código, não tem erro! </li>
        </ul>
      </section>
    </main>

    <footer> 
    <p> Com amor e código, Thiffany Montovani | <a href="https://github.com/m0ntovani">Meu GitHub</a></p>
    </footer>
</template>

<script>
export default {
  name: 'Início',
};
  window.addEventListener("scroll", function () {
    const body = document.body;
    if (window.scrollY > 50) {
        body.classList.add("scroll-effect");
    } else {
        body.classList.remove("scroll-effect");
    }

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

header {
      color: #ffffff; 
      background-color: #e53939; 
      padding: 17px;                  width: 100%;
      text-align: center; 
      font-size: 1.2em; 
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); 
      transition: background-color 0.3s ease;
      border-radius: 0.6rem;
}

header h1, header p {
      margin: 10px 0;
}

header p {
      font-size: 1rem;
}
#foto {
      margin: 20px 0; 
}

#foto img {
      width: 150px; 
      height: 150px; 
      border-radius: 50%; 
      border: 5px solid #e53939; 
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
      object-fit: cover;               transition: transform 0.3s ease;
}

#foto img:hover {
      transform: scale(1.3);
}
</style>