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
    
    let third = n % 10;
    let second = parseInt(n / 10) % 10;
    let first = parseInt(n / 100) % 10;

    let max1;
    let max2;
    let max3;

    if ((first > second) && (first > third)) {
        if (second > third) {
            max1 = first
            max2 = second
            max3 = third
        } else {
            max1 = first
            max2 = third
            max3 = second
        }
    } else if ((second > first) && (second > third)) {
        if (first > third) {
            max1 = second
            max2 = first
            max3 = third
        } else {
            max1 = second
            max2 = third
            max3 = first
        }
    } else {
        if (second > third) {
            max1 = third
            max2 = second
            max3 = first
        } else {
            max1 = third
            max2 = first
            max3 = second
        }
    }

    let max_num = max1.toString() + max2.toString() + max3.toString()

    console.log(parseInt(max_num)**2)
    
});
