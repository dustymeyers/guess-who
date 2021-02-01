$(document).ready(readyOn);
console.log('Here are all the available people:', people);
// create a random number to for chosen index
let randomPersonIndex = randomNumber(0, people.length);

function readyOn() {
  // on load
  console.log('readyOn');
  //append DOM to include items in people array
  for (let i = 0; i < people.length; i++) {
    $('body').append(`
      <div class="person" data-username="${people[i].githubUsername}">
        <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
      </div>
    `);
  }

  console.log(people[randomPersonIndex].name);
  // append that person's index name to the dom
  $('#name').append(people[randomPersonIndex].name);
  // give them the data value for their index
  $('#name').data('index', randomPersonIndex);
  console.log($('#name').data('index'));
  // when you click on this element check if the right name
  $(document).on('click', '.person', guessWho);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function guessWho() {
  console.log($(this).data('username'));
  let chosenPerson = $(this).data('username');
  let correctPerson = $('#name').data('index');
  console.log(correctPerson);
  if (chosenPerson === people[correctPerson].githubUsername) {
    alert("Good job! You're correct!");
    let newPersonIndex = randomNumber(0, people.length);
    // empty name value and change it to a new one
    $('#name').empty();
    // append that person's index name to the dom
    $('#name').append(people[newPersonIndex].name);
    // give them the data value for their index
    $('#name').data('index', newPersonIndex);
  } else {
    alert("Sorry, that's incorrect.");
  }
}
