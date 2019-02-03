"use strict";

function numberGame() {
  var numbers = [];
  numbers.n1 = Math.floor(Math.random() * 6);
  numbers.n2 = Math.floor(Math.random() * 11);
  numbers.n3 = Math.floor(Math.random() * 51);
  numbers.n4 = Math.floor(Math.random() * 101);
  numbers.n5 = Math.floor(Math.random() * 1001);

  var input;

  do {
    input = prompt("I'm thinking of a number between 0 and 5...");
    if (input < numbers.n1) {
      input = alert(
        "I'm thinking of a number between 0 and 5...\n" + input + " is too low."
      );
    }
    if (input > numbers.n1) {
      input = alert(
        "I'm thinking of a number between 0 and 5...\n" +
          input +
          " is too high."
      );
    }
  } while (input != numbers.n1);

  do {
    input = prompt("I'm thinking of a number between 0 and 10...");
    if (input < numbers.n2) {
      input = alert(
        "I'm thinking of a number between 0 and 10...\n" +
          input +
          " is too low."
      );
    }
    if (input > numbers.n2) {
      input = alert(
        "I'm thinking of a number between 0 and 10...\n" +
          input +
          " is too high."
      );
    }
  } while (input != numbers.n2);

  do {
    input = prompt("I'm thinking of a number between 0 and 50...");

    if (input < numbers.n3 - 10) {
      input = alert(
        "I'm thinking of a number between 0 and 50...\n" +
          input +
          " is way too low."
      );
    }
    if (numbers.n3 - 10 < input && input < numbers.n3) {
      input = alert(
        "I'm thinking of a number between 0 and 50...\n" +
          input +
          " is too low."
      );
    }

    if (input > numbers.n3 + 10) {
      input = alert(
        "I'm thinking of a number between 0 and 50...\n" +
          input +
          " is way too high."
      );
    }
    if (numbers.n3 < input && input < numbers.n3 + 10) {
      input = alert(
        "I'm thinking of a number between 0 and 50...\n" +
          input +
          " is too high."
      );
    }
  } while (input != numbers.n3);

  do {
    input = prompt("I'm thinking of a number between 0 and 100...");

    if (input < numbers.n4 - 20) {
      input = alert(
        "I'm thinking of a number between 0 and 100...\n" +
          input +
          " is way too low."
      );
    }
    if (numbers.n4 - 20 < input && input < numbers.n4) {
      input = alert(
        "I'm thinking of a number between 0 and 100...\n" +
          input +
          " is too low."
      );
    }

    if (input > numbers.n4 + 20) {
      input = alert(
        "I'm thinking of a number between 0 and 100...\n" +
          input +
          " is way too high."
      );
    }
    if (numbers.n4 < input && input < numbers.n4 + 20) {
      input = alert(
        "I'm thinking of a number between 0 and 100...\n" +
          input +
          " is too high."
      );
    }
  } while (input != numbers.n4);

  do {
    input = prompt("I'm thinking of a number between 0 and 500...");

    if (input < numbers.n5 - 50) {
      input = alert(
        "I'm thinking of a number between 0 and 500...\n" +
          input +
          " is way too low."
      );
    }
    if (numbers.n5 - 50 < input && input < numbers.n5) {
      input = alert(
        "I'm thinking of a number between 0 and 500...\n" +
          input +
          " is too low."
      );
    }

    if (input > numbers.n5 + 50) {
      input = alert(
        "I'm thinking of a number between 0 and 500...\n" +
          input +
          " is way too high."
      );
    }
    if (numbers.n5 < input && input < numbers.n5 + 50) {
      input = alert(
        "I'm thinking of a number between 0 and 500...\n" +
          input +
          " is too high."
      );
    }
  } while (input != numbers.n5);
}

numberGame();

//random number tester
//console.log(numbers);

document.write(
  "<ol>",
  "<li>",
  numbers.n1,
  "</li>",
  "<li>",
  numbers.n2,
  "</li>",
  "<li>",
  numbers.n3,
  "</li>",
  "<li>",
  numbers.n4,
  "</li>",
  "<li>",
  numbers.n5,
  "</li>",
  "</ol>"
);

document.write("<h3>", "Nice! You guessed them all.", "</h3>");
