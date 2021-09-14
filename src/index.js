import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';

function displayEntry(entry, number) {
  const output = $("div#output");
  let entryOutput = entry.getTeaser();
  output.append(entryOutput + " Vowels: " + number[0] + " Consonants: " + number[1] + " Other: " + number[2] + "<br>");
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const inputtedTitle = $("input#title").val();
    const inputtedWords = $("input#words").val();
    let newEntry = new Entry(inputtedTitle,inputtedWords);
    const number = newEntry.detectLetters();
    displayEntry(newEntry, number);
  });
});