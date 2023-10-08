function carSpeed (x){
    const speedLimit = 70;  // the const is for the constant speed given in question 

    if (x <= speedLimit) {
        console.log ('OK')
    }
    else  {
        const demeritPoints = ((x-speedLimit)/5)
        console.log (`demeritPoints:${demeritPoints}`)
    
        if  (demeritPoints > 12 ){
        console.log ('license suspended')
        }
    }
   
}
carSpeed(110); // to change the diffrent speeds to see the output 


