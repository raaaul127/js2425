function helloWorld() {
    return "Hello World";
}

function sum(a,b) {
    return (a + b);
}

function sum(a, b) {
    a *= 100;
    b *= 100;
    let s = a + b;
    s /= 100;
    return Number(s.toFixed(2));
}