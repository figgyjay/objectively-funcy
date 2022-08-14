// Your code here.


function setFirstName(person, value ){
  person.firstName = value
  return person
 }

//GET FIRST NAME =======================================================================
let person1 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  age: 39,
  married: false

};

let person2 = {
firstName: 'Petra',
lastName: 'Solano',
age: 25,
married: false

};

 let baby ={
  firstName: 'Redacted Jr.',
  lastName: 'Jaffe'
 

 }
 


function getFirstName(name){
  return name.firstName
  };
  
console.log(getFirstName(person1));
console.log(getFirstName(person2));

// GET LAST NAME =======================================================================

function getLastName(name){
  return name.lastName
}

console.log(getLastName(person1));
console.log(getLastName(person2));

// GET FULL NAME =========================================================================

function getFullName(name){
  let first = name.firstName
  let last = name.lastName
  return first + " " + last
};

console.log(getFullName(person1));
console.log(getFullName(person2));


// SET FIRST NAME ========================================================================

function setFirstName(person, value ){
  person.firstName = value
  return person
 };




console.log((setFirstName(person1.firstName = "Redacted")));
console.log((setFirstName(person2.firstName = "Anthony")));

function setAge(person, value ){
  person.age = value
  return person
 };

 console.log((setAge(person1.age), 45));

 console.log((setAge(person2.age), 35));
 
 // GIVE BIRTHDAY============================================================================

 function giveBirthday(person){
   if ( person.age = person.age + 1){}
      else {
        person.age = 1
      }
    return person
  }
 

 console.log(giveBirthday(person1))
 console.log(giveBirthday(person2))
 console.log(giveBirthday(baby))

 //MARRY======================================================================================
 
 function marry(user, married){
        if (user.married = "true"){
              user.married = "true"   
        } 
        return user
        function getFullName(user, spouseName){
         if  (user.spouseName === undefined){
              user.spouseName = ""
         }
          return user
        }
       

  } 
  

      console.log(marry(person1));
      console.log(marry(person2));
      console.log((getFullName(person1.spouseName = (person2))))
      console.log((getFullName(person2.spouseName = (person1))))
      

      
      
    




 






  





 

    





// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
