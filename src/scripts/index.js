function pesquisarUsuario() {
    const input = document.querySelector('.index__input');
    const username = input.value.trim();
  
    if (username === '') {
      return; // Verifica se o campo de entrada está vazio
    }
  
    const url = `https://api.github.com/users/${username}`;
  
    fetch(url)
      .then(response => {
        if (response.status === 404) {
          // Usuário não encontrado
          window.location.href = './src/pages/error.html';
        } else {
          // Usuário encontrado
          response.json().then(user => {
            localStorage.setItem('usuario', JSON.stringify(user));
            window.location.href = './src/pages/profile.html';
          });
        }
      })
      .catch(error => {
        console.log('Erro na requisição:', error);
      });
  }
  
  const btnPesquisar = document.getElementById('btnP');
  btnPesquisar.addEventListener('click', pesquisarUsuario);
  
