" use strict ";
var phoneBook = new Map();

function PhoneBook(){

};

function logName(value,key,map){
	display.innerHTML += ("name: " + key +"<br />");
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
  var number = [];
  phoneBook.set(name,number);
};

function addNumber(){
  var who = prompt("Enter name");
  var addToNumbers = prompt("Enter phone number");
  phoneBook.get(who).push(addToNumbers);
}

function showRemove() {
  var remove = prompt("Enter name to remove");
  phoneBook.delete(remove);

};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
  display.innerHTML += phoneBook.get(lookup) + "<br />";
};

function reverseLookup(){
  var whichNum = prompt("Enter number to lookup");
  for (var [key,value] of phoneBook) {
        for(var i =0;i<phoneBook.get(key).length;i++){
          if(phoneBook.get(key)[i] == whichNum){
            console.log("success");
            display.innerHTML += key + "<br />";
          }
        }
      
  }
}

var display = document.getElementById("display");
