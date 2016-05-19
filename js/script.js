" use strict ";
var phoneBook = new Map();

function PhoneBook(){

};

function logName(value,key,map){
	display.innerHTML += ("name: " + key + "<br />");
}

function logNumbers(value,key,map){
	display.innerHTML += ( "number: " + value+ "<br />");

}
function listAllNames() {
  // code to list all names
  phoneBook.forEach(logName);
};

function listAllNumbers() {
  // code to list all numbers
  phoneBook.forEach(logNumbers);
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phoneBook.set(name,number);
};

function showRemove() {
  var remove = prompt("Enter name to remove");
  phoneBook.delete(remove);

};

function showLookup() {
  var lookup = prompt("Enter number to lookup");
  display.innerHTML += phoneBook.get(lookup);
};

var display = document.getElementById("display");
