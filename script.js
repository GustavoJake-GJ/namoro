const divMob = document.getElementById('mobile')
const btn = document.getElementById('btn-menu')

divMob.addEventListener('click',animar)

function animar(){
  divMob.classList.toggle('abrir')
  btn.classList.toggle('ativar')
}
