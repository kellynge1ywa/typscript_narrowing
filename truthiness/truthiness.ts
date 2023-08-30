//It is a narrowing technique that uses the truthiness of a value before it narrows it down to a more specific type.
//A value is considered truthy if it coerce to true in a boolean context.
//The following values are not truthy:
//------>Null,undefined,NaN, empty string, the bigInt version of zero
//--we use and (&&)-operators, (//)-or operators and negation (!);
//we check first if a value is truthy

//example
 function printAll(fruit:string | string [] | null){
    if(fruit && typeof fruit ==="object"){
        for(const f of fruit){
            console.log(f)
        }
    }
    else if(typeof fruit ==="string"){
        console.log(fruit)
    }
    console.log('No fruits')
 }

 //There are two ways of coercing values to boolean
let fname=Boolean('Kelly') //this is passing values into a boolean function --it returns boolean type and value is true
let lname=!!'kelly'  // this is using double negation  --it returns type of tru and value is true--is called shorter double negation

typeof fname //--type is boolean
typeof lname //--type is true