import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';

function displayEntry(entry) {
  const output = $("div#output");
  const entryArray = entry.entryWords.split(" ");
  let entryOutput = entry.entryTitle + " ";
  if (entryArray.length > 8) {
    for (let i = 0;i !== 7;i++) {
      entryOutput = entryOutput.concat(" ", entryArray[i]);
    } 
  } else {
    for (let i = 0;i < entryArray.length;i++) {
      entryOutput = entryOutput.concat(" ", entryArray[i]);
    }
  }
  output.append(entryOutput + "\n");
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const inputtedTitle = $("input#title").val();
    const inputtedWords = $("input#words").val();
    let newEntry = new Entry(inputtedTitle,inputtedWords);
    displayEntry(newEntry);
  });
});