function usersName() {
  let name = prompt('Hello, what is your name?');
  document.write('Thank you for visting ' + name);
}
usersName();

// function guessMyFavouritePet() {
//   let favouritepet = ['cat', 'dog', 'ferret'];
//   let guess = prompt('Can you guess my favourite pet(s)');
//   guess = guess.toLowerCase();
//   if( favouritepet.includes(guess) ) {
//     console.log(' They are so cute!');
//   } else {
//     console.log(' WRONG!!!');

//   }
// }
// guessMyFavouritePet();

let enjoywatchingmovies = prompt('Do you enjoy watching horror movies?');
if (enjoywatchingmovies.toLowerCase() === 'yes') {
  console.log('They are funny to watch!');
} else {
  console.log('They can get boring sometimes');
}

let swim = prompt ('Do you know how you swim?');
if (swim.toLowerCase() === 'yes') {
  console.log('Good for you!');
} else {
  console.log('That is ok I also do not know how to swim');
}

let enjoycooking = prompt('Do you enjoy cooking?');
if (enjoycooking.toLowerCase() === 'yes') {
  console.log('That is awesome, you should teach me sometimes!');
} else {
  console.log('Oh that sucks, I burnt my ramen once');
}

let fluentinlanguages = prompt('Are you fluent in more than one language?');
if (fluentinlanguages.toLowerCase() === 'yes') {
  console.log('Oh wow, that is impressive!');
} else {
  console.log('You are still cool though!');
}

let coffee = prompt('Are you a coffee enthusiast?');
if(coffee.toLowerCase() === 'yes') {
  console.log('Yuck, coffee sucks!');
} else {
  console.log('Lets sip on some caprisun');
}
// five questions:
// 1. Do I/you enjoy watching horror movies?
// 2. Do I/you know how to swim?
// 3. Do I/you enjoy cooking?
// 4. Am I/you fluent in more than one language?
// 5. Do I/you like coffee?
