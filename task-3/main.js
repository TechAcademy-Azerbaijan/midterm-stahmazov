const num = n
let count = 0;


while (n > 0) {
    let num_ = num;
    value = n % 10;
    while (num_ > 0) {
        console.log(value, num_%10)
        if (value == (num_ % 10)) {
            count++
        }
        num_=parseInt(num_/10)
    }

    n = parseInt(n/10)
}

if (count > 5) {
    console.log('YES')
} else {
    console.log('NO')
}
