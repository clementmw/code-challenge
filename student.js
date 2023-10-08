//    A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function Grade (X){
    let Grade;
    if (X>=79) {
        Grade = 'A'   
    }
    else if (X<79 && X >= 60){
        Grade  = 'B'
    }
    else if (X <60 && X >= 49){
        Grade = 'C'
    }
    else if (X <49 && X >= 40){
        Grade = 'D'
    }
    else if (X <40){
        Grade = 'E'
    }
    else {
        return 'Please confirm input'
    }
    return Grade
}
let score  = Grade(39)
console.log(score)