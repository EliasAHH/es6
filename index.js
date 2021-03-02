// Destructuring

// Is just a way to condense information into variables

// With Arrays
let studentArray = ["Claire", "Rebecca", "Robert"]
let student1 = studentArray[0];
let student2 = studentArray[1];
let student3 = studentArray[2];

// order matters! 
let [s1, s2, s3] = studentArray;


// With Objects 

const studentObj = { name: "Natalie", grade: 12, phase: 4 };



// let name = studentObj.name;
// let grade = studentObj.grade;
// let phase = studentObj.phase;

// Order DOES NOT matter
let { grade, name, phase } = studentObj;
// let { phase, district } = studentObj.school;

function studentHTML({name,grade,phase}) {
    return `
      <div>
         <p> ${name} </p>
         <p> ${grade} </p>  
         <p> ${phase} </p>    
      </div> 
    `
}

let firstname = "Juan";
let session = 4; 

// fetch(url, {
//     method: "POST",
//     headers: {

//     },
//     body: Json.stringify({
//         firstname: firstname, 
//         session: session
//     })
// })


// fetch(url, configObj)
//     .then(r => r.json())
//     .then(data => console.log(data));

let configObj = {
    method: "POST",
    body: JSON.stringify({
        firstname,
        session
    })
}
// Spread Operator 
let spread = { ...studentObj };
spread = {...studentObj, name:"Juan"}
spread = {...studentObj, district: 14}





// Arrow Functions (Autmatically BINDS THIS)
// you have to explicitely return 
// function add2(n) {
//     return 2 + n 
// }

// based on how you write it you can do an implicit return
const add2 = n => {
    return 2 + n
};


// BIND  Tells the KEYWORD THIS what it's refering to or what context to talk about.


// Class Syntax

class Dog {

    constructor(name, breed) { // This is the same EXACT thing as initialize in RUBY
        this.name = name; 
        this.breed = breed;
        console.log(this)
        // Dog.all.push(this)
        // document.getElementById("woof").addEventListener("click",this.bark.bind(this))
        document.getElementById("woof").addEventListener("click",this.bark)
    }

    //class method

    // def self.all 
    // end

    // static all = []
    
    // static all() {
    //     return []
    // }


// Instance METHOD
    
    // If using BIND use THIs below 
    // bark(){
    //     console.log("What is this", this)
    //     console.log(`My name is ${this.name}`);
    // }
    
    // If not using Bind use this 
    bark = () => {
            console.log("What is this", this)
            console.log(`My name is ${this.name}`);
        }

}


// def dog

//     def initialize(name, breed)
//         self.name = name
//         self.breed = breed
//         @@all << self
//    end 
// end 