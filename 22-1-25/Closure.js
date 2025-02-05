function outer(name) {
    var msg = "welcome";
    function inner() {
        console.log(`msg} to ${name}`)
    }
    return inner;
}
onner = outer("cvr");
console.log(inner);
inner(outer) 