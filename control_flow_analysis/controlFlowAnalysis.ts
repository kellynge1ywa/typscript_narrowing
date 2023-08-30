/*----------- */
/*----Control Flow Analysis  */

//control flow analysis referred to analysis of code based on reachability.
//Typescript use this analysis to narrow down code as it encounter typeguard and assignments

//When a variable is analyzed the control flow can split off and re-emerge over and over again
//--and that variable is observed to have different types at each point.

/*<--EXAMPLE--> */

function example(){
    let mfano: string | number | boolean;

    mfano= Math.random() < 10;
    console.log(mfano)

    if(Math.random() < 10){
        mfano='Ndovu'
        console.log(mfano)
    }
    else{
        mfano=20;
        console.log(mfano)
    }

    return mfano
}