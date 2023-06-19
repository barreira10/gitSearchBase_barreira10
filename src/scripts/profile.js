function criarCabecalho() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const fotoPerfil = document.querySelector('.profile_div img');
    const nomeUsuario = document.querySelector('.profile_div p');
    const btnTrocaUser = document.getElementById('btnTrocaUser');
  
    fotoPerfil.src = usuario.avatar_url;
    nomeUsuario.textContent = usuario.name;
  
    btnTrocaUser.addEventListener('click', () => {
      window.location.href = '../../index.html';
      localStorage.clear();
    });
  }
  
  function renderizarRepositorios() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const ul = document.querySelector('.profile__ul');
    
    fetch(`https://api.github.com/users/${usuario.login}/repos`)
      .then(response => response.json())
      .then(repositorios => {
        ul.innerHTML = '';
  
        repositorios.forEach(repo => {
          const li = document.createElement('li');
          const h4 = document.createElement('h4');
          const p = document.createElement('p');
          const a = document.createElement('a');
  
          h4.textContent = repo.name;
          p.textContent = repo.description === null ? 'Repositório sem descrição' : repo.description;
          a.textContent = 'Repositório';
          a.href = repo.html_url;
          a.target = '_blank';
  
          li.appendChild(h4);
          li.appendChild(p);
          li.appendChild(a);
          ul.appendChild(li);
        });
      })
      .catch(error => {
        console.log('Erro ao obter repositórios:', error);
      });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    criarCabecalho();
    renderizarRepositorios();
  });
  