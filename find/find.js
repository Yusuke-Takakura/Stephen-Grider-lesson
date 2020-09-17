var users = [
    { name: '太郎' },
    { name: '次郎' },
    { name: '三郎' }
]
var user;

//for loop
/*for (var i = 0; i < users.length; i++) {
    if (users[i].name === '次郎') {
        user = users[i];
        //二郎が見つかった時点でforループを止める
        break;
    }
}
console.log(user);*/

//find the
user = users.find(function (user) {
    return user.name === '次郎';
    //見つかった最初の要素が抽出される
});
console.log(user);

//発展
function Car(model) {
    this.model = model;
}
var cars = [
    new Car('プリウス'),
    new Car('ノート'),
    new Car('アクア')
]
var a = cars.find(function (car) {
    return car.model === 'アクア';
})
console.log(a);

var posts = [
    { id: 1, title: '古い投稿' },
    { id: 2, title: '新しい投稿' }
]
var comment = { postId: 2, content: 'いいね' }
function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    })
}
console.log(postForComment(posts, comment));

//実際の使用例
/*
urlから判明した投稿をidに紐つけて画面に表示する
const postId = getIdFromURL()
posts.find(post => post.id === postId);
*/

//演習９
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];
var admin = users.find(function (user) {
    return user.admin === true;
})
console.log(admin);

//演習10
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];
var account = accounts.find(function (account) {
    return account.balance > 10;
})
console.log(account);

//演習11
function findWhere(array, criteria/*基準*/) {
    return array.find(function (element) {
        var propaty = Object.keys(criteria)[0];
        return element[propaty] === criteria[propaty];
    })
}
var ladders = [
    { id: 1, height: 20 },
    { id: 2, height: 25 }
];
var ladder = findWhere(ladders, { height: 25 });
console.log(ladder);