// Task 1
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }

//Task 2
function countDown(number) {
    if (number < 0) {
      console.log("Please provide a positive integer.");
      return;
    }
    let counter = number;
    while (counter >= 0) {
      console.log(counter);
      counter--; 
    }
  }
