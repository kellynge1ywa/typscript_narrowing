//In operator
// --we use in operator to check if a property exists in an object or an element exists in an array.
//---it takes a property or an element to look for, and an object or an array to look in.

//we can use the in operator to perform narrowing of potential types.
//it will return true if value have either an optional or required property value
//--and false if it narrows to branch that have an optional or missing property

//example
type fish={swim:()=>void};
type bird={fly:()=>void};
type human={fly:()=>void; swim:()=>void}

function motion(animal:fish | bird){
    if('swim' in animal){
        return animal.swim();
    }
    return animal.fly()
}

//example 2

type fish1={swim:()=>void};
type bird1={fly:()=>void};
type human1={fly?:()=>void; swim?:()=>void}

function motion1(animal:fish | bird | human1){
    if('swim' in animal){
        return animal.swim
    }
    else{
        animal.fly
    }
   
}
 