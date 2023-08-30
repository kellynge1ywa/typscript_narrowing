/*------------------------------------------- */

/*--------using type predicate */

//Using user defined type guard to perform narrowing

//We use them on functions whose return type is a type predicate.

// function isBird(pet: 'Bird' | 'Fish'):pet is 'Bird'{
//     return (pet as 'Bird').swim !==undefined
// }

// let pet = getSmallPet();
 
// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }