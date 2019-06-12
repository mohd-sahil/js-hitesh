
let grade_genrt = function(marks, total_marks){

let my_percent = (marks/total_marks)* 100

let my_grade

if (my_percent >=90) {
    my_grade = 'A'
} else if (my_percent>=80){
    my_grade= 'B'
}else if (my_percent>=70){
    my_grade= 'C'
}else if (my_percent>=60){
    my_grade= 'D'
}else{
    my_grade= 'E'
}

 return my_grade
}

let result = grade_genrt(60,500)

console.log(result);
