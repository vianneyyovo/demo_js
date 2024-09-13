// //document.getElementById("demo").innerHTML = 5 + 6;
// //document.getElementById("demo").innerHTML = "toto";
// document.getElementById("demo").innerHTML = "<b>toto</b>";
// document.getElementById("maZone").innerHTML = "Thanks";
// document.write(5 + 6);

// /* Self */

// //window.alert(5 + 6);
// //window.alert("I'm comming");
// //alert(5 + 6);
// //alert("It is cool to test");
// document.getElementById('btn').onclick = function(){
//     //document.querySelector('p').style.display = 'none';
//     window.print()

// };

// // You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars)

// // You can change an element:
// cars[0] = "Toyota";
// console.log(cars[0]);



// // You can add an element:
// cars.push("Audi");

// console.log(cars);

// let x = 10;
// console.log(x += 5);

// const a = [1,2,3] + [4,5,6];
// console.log(typeof(a));

// console.log([1,2,3] + [4,5,6]);

// const person = {
//     firstName: 'mama',
//     lastName: 'koffi', 
//     fullName: function(){
//         return this.firstName + this.lastName
//     },
// };



// console.log(person.age=20);

// console.log(person.firstName);

// const man = {}

// console.log(man.name = 'mama');

// const mec = new Object();

// console.log(mec.name = 'pot')

// console.log(person.fullName())

// const perso = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   document.getElementById("demo").innerHTML = perso.name;

//   // Create an Object
// const pers = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   // Build a Text
//   let text = "";
//   for (let x in pers) {
//     text += pers[x] + " ";
//   };

//   // Display the Text
//   document.getElementById("demo").innerHTML = text;

//     // Function
//   function myFunction(p1, p2) {
//     const num = p1 * p2
//     return num
//   }

//   let result = myFunction(4, 3);
//   document.getElementById("demo").innerHTML = result;


// Evenement 1
function gestionnaireEvenement1() {
  // alert("Welcome, it is your evenement 1");
  const titleMove = document.querySelectorAll('title');
}
// Evenement 2
function gestionnaireEvenement2(event) {
  alert("It is your click event (evenement 2)");
  console.log(event)

}

// Evenement 3
async function gestionnaireEvenement3() {
  console.log("It is your double click event (evenement 3)");

}

function gestionnaireEvenement4() {
  // Evenement 4
  alert("It is your mouseout event (evenement 4)")
}

function gestionnaireEvenement5() {
  // Evenement 5
  alert("It is your mousemove event (evenement 5)")
}

function gestionnaireEvenement6() {
  // Evenement 6
  alert("It is your annimate event (evenement 6)")
}

// document.getElementById('myZone').addEventListener('mouseover', gestionnaireEvenement1);
document.getElementById('myZone').addEventListener('click', gestionnaireEvenement2);
document.getElementById('myZone').addEventListener('dblclick', gestionnaireEvenement3);
document.getElementById('myZone').addEventListener('mouseout', gestionnaireEvenement4);
document.getElementById('myZone').addEventListener('mousemove', gestionnaireEvenement5);
document.getElementById('myZone').addEventListener('mousemove', gestionnaireEvenement6 );