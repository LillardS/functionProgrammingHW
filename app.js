// Alphabetical Order

function alphabeticalOrder(arr) {
    return arr.sort(function(a,b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
  }
  
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//   nonMutatingSort

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}

console.log(nonMutatingSort(globalArray));

// split a string into an array

function splitify(str) {
    return str.split(/\W/);
  }
  
console.log(splitify("Hello World,I-am code"));

// combine an array into a string

function sentensify(str) {
    return str.split(/\W/).join(" ");
  }

console.log(sentensify("May-the-force-be-with-you"));

// convert strings to urls

function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-");
    }

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

// the every method

function checkPositive(arr) {
    return arr.every(function(num) {
      return num > 0;
    })
  }

console.log(checkPositive([1, 2, 3, -4, 5]));

// the some method

function checkPositive(arr) {
    return arr.some(function(num) {
      return num > 0;
    })
  }
  
console.log(checkPositive([1, 2, 3, -4, 5]));

// currying and partial application

function add(x) {
    return y => z => x + y + z;
  }
  
console.log(add(10)(20)(30));