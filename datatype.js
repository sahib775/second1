// Two types of data types

// primitive 7 
// String, Number , Boolean , null , undefined , Symbol , BigInt

const BigNumber = 456789568n;
console.log(BigNumber);
console.log(typeof(BigNumber));

// Non primitive(Reference)
// Array , Object , Functions

// Arrays

const heros =["ghulam Murtaza" , 24 ];

// Object

let Obj = {
    name : "Ghulam Murtaza",
    Age : 24,
    LogedIn : 'True',
}

// Functions

let my = function(){
    console.log("My name is Ghulam Murtaza");
 }
 
 console.log(Obj.name,Obj.Age,Obj.LogedIn);
 console.log(heros);
 console.log(my());
 
 
 

