
function Rectangle(a, b) {
   this.length = a;
   this.width = b;
   this.perimeter = 2 * (a + b);
   this.area = a * b;
}


function getCount(objects) {
    let count = 0;

    objects.forEach(val => {
        if(val.x === val.y){
            count++;
        }
    });

    return count;
}


function Polygon(arr){
    this.arr = arr;
    this.perimeter = () => {
        return arr.reduce((ant, act, i, ar) => {return ant + act});
    }
}
