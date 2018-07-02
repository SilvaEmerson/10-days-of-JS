const populateArr = (arr, n) => arr.map((el, index) => index++);

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
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date(dateString).getDay()]
}