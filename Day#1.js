function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * length + 2 * width;
    return perimeter;
}


const factorial = (number) => {
    if(number == 1){ return 1; }
    return factorial(number - 1) * number;
};
