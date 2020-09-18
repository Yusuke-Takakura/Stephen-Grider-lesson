//...Rest演算子
//入っていくるものを配列に変換する
function addNumbers(...numbers) {
    return numbers.reduce(function (sum, number) {
        return sum + number;
    }, 0)
}
addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);//=>合計値

//Spread演算子
const defaultColors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '黄'];
//配列を展開する
[...defaultColors, ...userFavoriteColors];

//例
//牛乳がなければlistに牛乳を追加する
function validateShoppingList(...items) {
    if (items.indexOf('牛乳') < 0) {
        return ['牛乳', ...items];
    }
    return items;
}
validateShoppingList('オレンジ', 'パン');

//ユースケース
const MathLibrary = {
    caliculateProduct(...rest) {
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
};

//演習29
function product(...products) {
    var numbers = [...products];
    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}

//演習30
function join(array1, array2) {
    return [...array1, ...array2];
}

//演習31
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
// }

function unshift(array, ...rest) {
    return [...rest, ...array];
}