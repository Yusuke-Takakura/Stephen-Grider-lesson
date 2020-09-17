//method1
let numbers = [1, 2, 3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    /*
    numbers[i]=numbers[i]*2;
    配列内容を変えると元の配列と区別がつかなくなる
    すでにあるものは変えないようにする
    */
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

let doubled = numbers.map(function (number) {
    return number * 2;
})

console.log(doubled);

let cars = [
    { type: '軽自動車', price: '安い' },
    { type: '高級車', price: '高い' }
];


//method2
let prices = cars.map(function (car) {
    return car.price;
})
//plack メソッドの代用をmapで行える
//priceを抽出
//複数選択する場合は？
console.log(prices);


//演習1
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];
let heights = images.map(function (image) {
    return image.height;
})
console.log(heights);

//演習２
var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];
let speeds = trips.map(function (speed) {
    return speed.distance / speed.time;
})
console.log(speeds);

//応用問題
function pluck(array, property) {
    return array.map(function (content) {
        //オブジェクトのpropertyは[]でアクセスができる
        return content[property];
    })
}
var colorObjects = [
    { color: '赤' },
    { color: '青' },
    { color: '黄' }
]
var colorName = pluck(colorObjects, 'color');
console.log(colorName);