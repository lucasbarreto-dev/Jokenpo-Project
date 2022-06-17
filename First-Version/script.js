const jokenpo = [ 'rock', 'paper', 'scissor' ];
const str = document.getElementById('name');

function playJokenpo(str) {
  if (jokenpo.indexOf(str) === -1) {
     return 'Insira uma palavra válida!';
  } else {
      return jokenpo[Math.floor(Math.random() * 3)];
  }
}

playJokenpo('caneca');