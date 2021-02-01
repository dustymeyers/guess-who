$(document).ready(readyOn);
console.log('Here are all the available people:', people);

function readyOn() {
  // on load
  console.log('readyOn');
  //append DOM to include items in people array
  for (let i = 0; i < people.length; i++) {
    $('body').append(`
      <div>
        <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
      </div>
    `);
  }
  // create a random number to for chosen index
  let randomPersonIndex = randomNumber(0, people.length);
  console.log(people[randomPersonIndex].name);
  // append that person's index name to the dom
  $('#name').append(people[randomPersonIndex].name);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
