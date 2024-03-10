const team = [

  {
    nome : 'Wayne Barnett',
    ruolo : 'founder & CEO',
    foto :  './img/angela-lopez-social-media-manager.jpg'
  },
  {
    nome : 'Anegla Caroll',
    ruolo : 'Chief Editor',
    foto :  './img/angela-caroll-chief-editor.jpg'
  },
  {
    nome : 'Walter Gordon',
    ruolo : 'Office Manager',
    foto :  './img/walter-gordon-office-manager.jpg'
  },
  {
    nome : 'Angela Lopez',
    ruolo : 'Social Media Manager',
    foto :  './img/angela-lopez-social-media-manager.jpg'
  },
  {
    nome : 'Scott Estrada',
    ruolo : 'Developer',
    foto :  './img/scott-estrada-developer.jpg'
  },
  {
    nome : 'Barbara Ramos',
    ruolo : 'Graphic Designer',
    foto :  './img/barbara-ramos-graphic-designer.jpg'
  }

];

const stamp = document.querySelector('.big_conteiner');

stamp.innerHTML = '';

team.forEach ( person => {

  stamp.innerHTML += getcard(person);

});

function getcard (person) {

  let name = person.nome;
  let role = person.ruolo;
  let img = person.foto;
  
  return `

  <div class="output ">

    <img class="img" src="${img}" alt="angela">
    <p>${name}</p>
    <p>${role}</p>
      
  </div>

  `
};