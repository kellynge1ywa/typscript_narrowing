//We can also use use switch statements and equality checks to narrow types.
//The equality types are;
//---> === strict equality operator - it checks whether values are equal and also if are of the same types
//-------> 1 === '1' will return false
/*------*/
//--->!==strict inequality operator
/*------*/
//--->== loose equality operator --it only checks if values are equal but do not check if they are of the same type.
//------->1 =='1' will return true
/*------*/
//--->!= loose inequality operator check if values are not equal to each other 



/*---example---*/

function printAll(fruit: string | string[] | null) {
    if (fruit !== null) {
        if (typeof fruit === "object") {
            for (const f of fruit) {
                console.log(f)
            }
        }
        else if (typeof fruit === "string") {
            console.log(fruit)
        }
    }
}