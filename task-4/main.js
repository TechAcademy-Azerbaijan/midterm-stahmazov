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

    let num = n

    while (num > 1) {
        if (n % (num % 10) == 0 && (num % 10)%2!=0) {
            console.log(num % 10);
        }
        num--
    }

});
