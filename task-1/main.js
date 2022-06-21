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

    let sum = 0

    while (n > 0) {
        sum+=(n%10)
        n = parseInt(n/10)
    }
    console.log(sum)
});
