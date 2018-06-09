
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function() {
    return this.w * this.h;
};

class Square extends Rectangle {
    constructor(l) {
        super(l, l);
    }
}


const calcS = (p, a, op) => {
    let square = Math.sqrt(p * p - 16 * a);

    return op === '-' ? (p - square)/4 : (p + square)/4;
};

function sides(literals, ...expressions) {
    let result = [];
    result.push(calcS(expressions[1], expressions[0], '+'));
    result.push(calcS(expressions[1], expressions[0], '-'));

    result.sort();
    return result;
}

function modifyArray(nums) {
    let newNums = nums.map((val) => {
        return val % 2 == 0 ? val * 2 : val * 3;
    });

    return newNums;
}
