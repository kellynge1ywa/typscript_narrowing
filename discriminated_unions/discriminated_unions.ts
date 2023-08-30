/*------------- */


/*<----DISCRIMINATED UNIONS---> */
//When type in a union contains a common property with literal types, typescript consider that to be a discriminated union
//--it can use it to narrow out the members of the union

//Discriminated unions are good for representing any sort of messaging scheme in Javascript, like when sending
//messages over the network (client/server communication) or encoding mutations in a state management framework







/*<---EXAMPLE-----> */
// interface Shape{
//     kind: "circle" | "square";
//     radius?:number;
//     sideLength?:number;
// }

// function getArea(shape:Shape){
//     if(shape.kind==="circle"){
//         return Math.PI *shape.radius**2
//     }
    

// }

/*-----FORMULA2-------- */

interface Circle{
    kind:"circle";
    radius:number;
}

interface Square{
    kind:"square";
    radius:number;
}

type Shape= Circle | Square

function calcArea(shape:Shape){
    return Math.PI * shape.radius**2;

}
