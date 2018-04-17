function getGrade(score) {
    let grade;

    if(25 < score && score <= 30) {
        grade = "A";
    }else if (20 < score && score <= 25){
        grade = "B";
    }else if (15 < score && score <= 20){
        grade = "C";
    }else if (10 < score && score <= 15){
        grade = "D";
    }else if (5 < score && score <= 10){
        grade = "E";
    }else if (0 < score && score <= 5){
        grade = "F";
    }

    return grade;
}

function getLetter(s) {
    let letter;

    switch(s[0]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = "A";
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter ="B";
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = "C";
            break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = "D";
            break;

    }
    return letter;


function vowelsAndConsonants(s) {
    let arr = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0; i < s.length; i++){
       if(arr.includes(s[i])) {console.log(s[i]);}
    }

    for(let i = 0; i < s.length; i++){
       if(!arr.includes(s[i])) {console.log(s[i]);}
    }
}
