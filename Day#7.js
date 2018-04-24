function regexVar() {
    let re = new RegExp("^([aeiou]).*\\1$", "g");
    return re;
}
