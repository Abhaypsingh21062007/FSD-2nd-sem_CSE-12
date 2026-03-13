// Array to store students
let students = [];

// Add Student
function addStudent(){

let name = document.getElementById("name").value;
let roll = document.getElementById("roll").value;
let math = Number(document.getElementById("math").value);
let science = Number(document.getElementById("science").value);
let english = Number(document.getElementById("english").value);

// Object
let student = {
name: name,
roll: roll,
math: math,
science: science,
english: english
};

students.push(student);

alert("Student Added Successfully");
}

// Display Students
function displayStudents(){

let output = "";

for(let s of students){

output += `
<p>
Name: ${s.name} |
Roll: ${s.roll} |
Math: ${s.math} |
Science: ${s.science} |
English: ${s.english}
</p>
`;

}

document.getElementById("output").innerHTML = output;

}

// Calculate Total & Average
function calculateResults(){

let output = "";

for(let s of students){

let total = s.math + s.science + s.english;
let avg = total / 3;

output += `
<p>
${s.name} | Total: ${total} | Average: ${avg.toFixed(2)}
</p>
`;

}

document.getElementById("output").innerHTML = output;

}

// Students with Average > 80
function showTopStudents(){

let output = "<h3>Top Students</h3>";

for(let s of students){

let avg = (s.math + s.science + s.english) / 3;

if(avg > 80){
output += `<p>${s.name} - Average: ${avg}</p>`;
}

}

document.getElementById("output").innerHTML = output;

}

// Failed Students (avg < 40)
function showFailed(){

let output = "<h3>Failed Students</h3>";

for(let s of students){

let avg = (s.math + s.science + s.english) / 3;

if(avg < 40){
output += `<p>${s.name} - Average: ${avg}</p>`;
}

}

document.getElementById("output").innerHTML = output;

}

// Count Students
function countStudents(){

document.getElementById("output").innerHTML =
"<h3>Total Students: " + students.length + "</h3>";

}