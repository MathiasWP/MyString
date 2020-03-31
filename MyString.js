function MyString(input) {
  // Storing the input
  this.string = input;

  // Variable for storing the length of the input, will be calculated below (since we can't use the String length property)
  this.length = 0;

  // Here we create the possibility to call this[3] and actually get the letter + counting the length of the input
  for (const letter of this.string) {
    this[this.string.indexOf(letter)] = letter;
    this.length++;
  }

  // Function for turning input into string without using string properties
  this.toString = function() {
    const stored = new Array(this.string);

    return stored.join('');
  };

  // valueOf function, i think it's basically like doing a toString() on the value and returning it...?
  this.valueOf = function() {
    const value = this.toString();

    return value;
  };

  // Function for giving character at specific place, if input is not a valid int then it just returns the first letter.
  // Came to good use that the array 'property' on this object was given earlier ;)
  this.charAt = function(place) {
    const actualPlace = parseInt(place);

    return isNaN(actualPlace) ? this[0] : this[actualPlace];
  };

  // Function for concating the string with another string
  this.concat = function(addon) {
    const stored = new Array(this.string);

    stored.push(addon);

    return stored.join('');
  };

  // Im too lazy to create the slice function from scratch, and since array-methods are allowed... then why not just use that one
  this.slice = function(start, end) {
    // The split function used here is the one created below, so not an original split function ;)
    const stored = this.split('');

    return stored.slice(start, end).join('');
  };

  this.split = function(splitter) {
    const stored = [];

    let temporary = [];

    for (const letter of this.string) {
      // For splitting word up letter by letter in case splitter is empty
      if (splitter === '') {
        temporary.push(letter);
        stored.push(temporary.join(''));
        temporary = [];
        continue;
      }

      // If current letter is not the splitter, add it to the temporary array
      if (letter !== splitter) {
        temporary.push(letter);
      }
      // When the current letter is the samme as the splitter, add the temporary array to the stored array (without adding the current letter which is equal to splitter)
      // and resed the temporary array
      else {
        stored.push(temporary.join(''));
        temporary = [];
      }

      // If we are at the last letter then we want to add on whatever is left in the temporary array
      if (this.string.indexOf(letter) === this.length - 1) {
        stored.push(temporary.join(''));
      }
    }

    return stored;
  };

  // Could also do it with a for-loop, but why not just use the reverse() method for arrays? ;)
  this.reverse = function() {
    // Let's use the split function we created above to get turn our string into an array instead of using new Array, because why not :)
    return this.split('')
      .reverse()
      .join('');
  };
}

let s = new MyString('hello');

console.log(s[0]);

console.log(s.toString());

console.log(s.valueOf());

console.log(s.charAt(1));

console.log(s.charAt('2'));

console.log(s.charAt('e'));

console.log(s.concat(' world!'));

console.log(s.slice(1, 3));

console.log(s.slice(0, -1));

console.log(s.split('e'));

console.log(s.split('l'));
