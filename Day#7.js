
const regexVar = () => {
    let re = new RegExp('^([aeiou]).*\\1$', 'g');
    return re;
};


const regexVarMr = () => {
    // let re = new RegExp('^[MrMrsMsDrEr]', 'g');

    let re = new RegExp('^[aeiou](?=\.|\S)', 'g');
    return re;
};

let str = 'e .';
console.log(str.match(regexVarMr()));
