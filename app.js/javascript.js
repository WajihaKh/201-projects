function usersName() {
  let name = prompt('Hello, what is your name?');
  document.write('Thank you for visting ' + name);
}
usersName();

//   }
// }
// guessMyFavouritePet();

let enjoywatchingmovies = prompt('Do you enjoy watching horror movies?');
if (enjoywatchingmovies.toLowerCase() === 'yes') {
  // console.log('They are funny to watch!');
  alert('They are funny to watch!');
} else {
  alert('They can get boring sometimes');
  // console.log('They can get boring sometimes');
}

let swim = prompt ('Do you know how you swim?');
if (swim.toLowerCase() === 'yes') {
  // console.log('Good for you!');
  alert('Good for you!');
} else {
  alert('Thats ok, I also dont know how to swim');
  // console.log('That is ok I also do not know how to swim');
}

let enjoycooking = prompt('Do you enjoy cooking?');
if (enjoycooking.toLowerCase() === 'yes') {
  // console.log('That is awesome, you should teach me sometimes!');
  alert('That is awesome, you should teach me sometimes!');
} else {
  alert('Oh that sucks, I burnt my ramen once');
  // console.log('Oh that sucks, I burnt my ramen once');
}

let fluentinlanguages = prompt('Are you fluent in more than one language?');
if (fluentinlanguages.toLowerCase() === 'yes') {
  // console.log('Oh wow, that is impressive!');
  alert('Oh wow, thats impressive!');
} else {
  alert('Youre still cool though!');
  // console.log('You are still cool though!');
}

let coffee = prompt('Are you a coffee enthusiast?');
if(coffee.toLowerCase() === 'yes') {
  // console.log('Yuck, coffee sucks!');
  alert('Yuck, coffee sucks!');
} else {
  alert('Lets sip on some caprisun');
//   console.log('Lets sip on some caprisun');
}
// five questions:
// 1. Do I/you enjoy watching horror movies?
// 2. Do I/you know how to swim?
// 3. Do I/you enjoy cooking?
// 4. Am I/you fluent in more than one language?
// 5. Do I/you like coffee?

let rightAnswerCount = 0;


function guessingGame() {
  let number = 12;
  let attempts = 4;
  let isUserCorrect = false;
  while (attempts > 0) {
    let guessANumber = +prompt('Guess a number between 1 and 50');

    // for (let i = 0; i < attempts; i++) {
    if (guessANumber === number) {
      attempts = 0;
      alert('You guessed it!');
      isUserCorrect = true;
      rightAnswerCount++;
      break;
    } else if (guessANumber < number) {
      alert('Try aiming higher!');
    } else {
      alert('Try aiming lower!');
      guessANumber = +prompt('Guess a number between 1 and 50');
    }
    // alert('Guess again!');
    // }
    attempts--;
  }
  if (isUserCorrect === false) {
    alert('You have used all of ur attempts. The correct answer was 12!');
  }
}

guessingGame();

function guessMyFavouritePet() {
  let favouritepet = ['cat', 'dog', 'ferret'];
  let attempts = 6;
  let isUserCorrect = false;
  let correctPets = '';

  while (attempts > 0) {
    let guess = prompt('Can you guess my favourite pet?').toLowerCase();

    for (let i = 0; i < favouritepet.length; i++) {
      if (guess === favouritepet[i]) {
        alert('How did you know!');
        isUserCorrect = true;
        rightAnswerCount++;
        break;
      }
    }

    if (isUserCorrect) {
      break;
    } else {
      alert('WRONG!!! Try again!');
    }

    attempts--;
  }
  if (isUserCorrect === false) {
    for (let i = 0; i < favouritepet.length; i++) {
      correctPets += favouritepet[i];
      if (i !== favouritepet.length -1) {
        correctPets += ', ';
      }
    }
    alert('Nice try, my favourite pets are:' + correctPets);
  }
}

guessMyFavouritePet();

alert('You got ' + rightAnswerCount + ' correct out of 2 questions!');


