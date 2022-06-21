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
    let n1 = parseInt(numbers[0]); // Ilk daxil olunmuş ədədi alırıq. Nümunə - 12\
    let n2 = parseInt(numbers[1]);

    let sum = 0
    for (n1; n1 <= n2; n1++){
        if (n1 % 2 != 0) {
            sum+=n1
        }
    }
    console.log(sum)
});
