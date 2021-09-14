export default function Entry(title, words) {
  this.entryTitle = title;
  this.entryWords = words;
}

Entry.prototype.getTeaser = function() {
  const splitWords = this.entryWords.split(" ");
  let entryOutput = this.entryTitle + " ";
  if (splitWords.length > 8) {
    if (splitWords.length > 8) {
      for (let i = 0;i !== 8;i++) {
        entryOutput = entryOutput.concat(" ", splitWords[i]);
      }
    } else {
      for (let i = 0;i < splitWords.length;i++) {
        entryOutput = entryOutput.concat(" ", splitWords[i]);
      }
    }
  }
  return entryOutput;
};

Entry.prototype.detectLetters = function() {
  const splitWords = this.entryWords.split('');
  let numberVowels = 0;
  const vowels = ["a","e","i","o","u"];
  let numberConsonants = 0;
  const consonants = ["b","c","d","f","g","j","h","r","w","k","l","m","n","p","q","s","t","v","x","z"];
  let numberOther = 0;
  splitWords.forEach(element => {
    if (vowels.includes(element)) {
      numberVowels++;
    } else if (consonants.includes(element)) {
      numberConsonants++;
    } else {
      numberOther++;
    }
  });
  return [numberVowels, numberConsonants, numberOther];
};