
const populateArr = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i + 1;
    }
    return arr;
};

const getMaxLessThan = (n, k) => {
    const arr = populateArr(new Array(n), n);

    const compares = [];

    for (let i = 1; i < arr.length; i++) {
        const newArr = arr.filter((val) => {
            return val > i;
        });

        newArr.forEach((val) => {
            if ((val & i) < k) {
                compares.push(val & i);
            }
        });
    }

    return Math.max(...compares);
};


function getDayName(dateString) {
    let dayName;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName = days[new Date(dateString).getDay()]
    return dayName;
}