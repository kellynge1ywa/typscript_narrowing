/*------------------------------- */
/*instanceof narrowing*/
//We can also use instanceof to narrow values that can be contructed with new keyword such as date,classes and objects
//It is also a typeguard narrowing

/*--EXAMPLE-- */
function getDate(leo:Date | string){
    if(leo instanceof Date){
        console.log(leo.toISOString())
    }
    else{
        console.log(leo.toUpperCase())
    }

}