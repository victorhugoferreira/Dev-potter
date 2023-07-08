const headerBtn = document.getElementById('header-button');

function verificarLogin() {
  const email = document.getElementById('header-email').value;
  const senha = document.getElementById('header-password').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

headerBtn.addEventListener('click', verificarLogin);


const checkbox = document.getElementById('agreement');

function ativarBtn() {
  const submitBtn = document.getElementById('submit-btn');

  if (submitBtn.disabled) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

checkbox.addEventListener('click', ativarBtn);

const textarea = document.getElementById('textarea');

function counter() {
  const counterBox = document.getElementById('counter');

  let caracteres = 500;

  caracteres -= textarea.value.length;
  counterBox.innerText = caracteres;
}

textarea.addEventListener('input', counter);

const submitBtn = document.getElementById('submit-btn');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const casa = document.getElementById('casa');
const familia = document.getElementById('familia');
const materias = document.getElementById('materias');
const avaliacao = document.getElementById('avaliacao');
const observacao = document.getElementById('observacao');

function loadInfo(info) {
  let tech = '';

  for (let i = 0; i < info.tech.length; i += 1) {
    if (i !== info.tech.length - 1) {
      tech = `${tech} ${info.tech[i].value},`;
    } else {
      tech = `${tech} ${info.tech[i].value}`;
    }
  }

  nome.innerText = `Nome: ${info.fullName}`;
  email.innerText = `Email: ${info.email}`;
  casa.innerText = `Casa: ${info.house}`;
  familia.innerText = `Família: ${info.family}`;
  materias.innerText = `Matérias: ${tech}`;
  avaliacao.innerText = `Avaliação: ${info.rate}`;
  observacao.innerText = `Observações: ${info.coment}`;
}

function salvarInfo() {
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');

  const info = {
    fullName: `${name.value} ${lastName.value}`,
    email: document.getElementById('input-email').value,
    house: document.getElementById('house').value,
    family: document.querySelector('input[name = "family"]:checked').value,
    tech: document.querySelectorAll('input[class = "subject"]:checked'),
    rate: document.querySelector('input[name = "rate"]:checked').value,
    coment: document.getElementById('textarea').value,
  };
  loadInfo(info);
}

function changeMain(event) {
  event.preventDefault();
  const principal = document.querySelector('.main-principal');
  const secundario = document.querySelector('.main-secundario');

  principal.classList.add('disabled');
  secundario.classList.remove('disabled');

  salvarInfo();
}

submitBtn.addEventListener('click', changeMain);
