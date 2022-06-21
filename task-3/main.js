const { pbkdf2 } = require('crypto');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    const input = result.input; // "12,5"
    const numbers = input.split(','); // ['12', '5']
    let n = parseInt(numbers[0]); // Ilk daxil olunmuş ədədi alırıq. Nümunə - 12\

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

});
