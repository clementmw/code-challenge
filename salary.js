// to calculate PAYE
function calculatePAYE (basicsalary){ // represents basic salary
    
    if (basicsalary>=24000 && basicsalary<=288000) {
        (0.10*basicsalary)
    } 
    else if (basicsalary>=288000 && basicsalary<=38800) {
         (basicsalary*0.25)
    }
    else if (basicsalary>=388000 && basicsalary<=6000000) {
        (basicsalary*0.30)
    }
    else if (basicsalary>=6000000 && basicsalary<=9600000) {
        (basicsalary*0.32)
    }
    else {
        (basicsalary*0.35)
    }

}
// to calculate nhif tax 

function calculateNHIF(benefit) {
    if (benefit <= 5999) {
        return 150;
    } else if (benefit >= 6000 && benefit <= 7999) {
        return 300;
    } else if (benefit >= 8000 && benefit <= 11999) {
        return 400;
    } else if (benefit >= 12000 && benefit <= 14999) {
        return 500;
    } else if (benefit >= 15000 && benefit <= 19999) {
        return 600;
    } else if (benefit >= 20000 && benefit <= 24999) {
        return 750;
    } else if (benefit >= 25000 && benefit <= 29999) {
        return 850;
    } else if (benefit >= 30000 && benefit <= 34999) {
        return 900;
    } else if (benefit >= 35000 && benefit <= 39999) {
        return 950;
    } else if (benefit >= 40000 && benefit <= 44999) {
        return 1000;
    } else if (benefit >= 45000 && benefit <= 49999) {
        return 1100;
    } else if (benefit >= 50000 && benefit <= 59999) {
        return 1200;
    } else if (benefit >= 60000 && benefit <= 69999) {
        return 1300;
    } else if (benefit >= 70000 && benefit <= 79999) {
        return 1400;
    } else if (benefit >= 80000 && benefit <= 89999) {
        return 1500;
    } else if (benefit >= 90000 && benefit <= 99999) {
        return 1600;
    } else {
        return 1700; // for benefit >= 100000
    }
}

// calculate fridge benefits

function calculateFridgeBenefits(month) {
    if (month >= 1 && month <= 3) {
        return 9; // January to March
    } else if (month >= 4 && month <= 6) {
        return 10; // April to June
    } else if (month >= 7 && month <= 9) {
        return 11; // July to September
    } else if (month >= 10 && month <= 12) {
        return 'null'; // October to December 
    } else {
        return 'not applicalble' ; 
    }
}


//calculate payee,nhif,fridgebenefits 

let payee = calculatePAYE(basicsalary);
let nhif = calculateNHIF (benefit)
let fridge = calculateFridgeBenefits(month)
let grossSalary = basicsalary + benefit
let netSalary = grossSalary  - (payee+fridge+nhif)

// few adjustments to be made//