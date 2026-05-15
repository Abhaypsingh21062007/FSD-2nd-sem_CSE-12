let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

document.getElementById("changeTextBtn").onclick = function() {
    heading.innerText = input.value;
};

input.onchange = function(){
    console.log("InputChanged");
};

document.getElementById("bgColorBtn").onclick = function() {
    document.body.style.backgroundColor = "lightblue";    
}

let evenNumbers = [1, 2, 3, 4, 5];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers); // Output: [2, 4]




