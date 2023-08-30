
//Typeguard narrowing
 //--> It is a narrowing technique that uses typeOf operator to narrow down type of a value to a more specific type than declared.
 //--->TypeOf operator -gives us basic information about the types of values we have at runtime
 //Using typeOf operator to check the type of value returned is referred to as typeguard narrowing

 //Typeguard has a shortcoming when dealing with values that have typeof null or undefined.

 function calcArea(radius:number | string ){
    const PI=3.142;

    if (typeof radius==='number'){
        return PI * Number(radius) * Number(radius)
        
    }
   
     return radius.toUpperCase()
       
    

 }

 //the above function takes parameter of type number and string
 //it uses typeof operator to check if the value is a number to calculate the area

 