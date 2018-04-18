function getSecondLargest(nums) {
    let result = new Set(nums);
    result = [...result].sort((x, y) => {
        if(x > y){
            return 1;
        }else{
            return -1;
        }
    });

    result = result[result.length - 2]
    return result
}

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
        console.log(s);
    }catch(e){
        console.log(e.message)
        console.log(s)
    }
}

function isPositive(a) {
    if(a > 0){
        return "YES";
    }else if(a == 0){
        throw new Error("Zero Error");
    }else if(a < 0){
        throw new Error("Negative Error");
    }
}
