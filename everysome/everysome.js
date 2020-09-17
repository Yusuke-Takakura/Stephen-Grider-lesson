var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

//16G ramが必要なソフト

//全てで動かせるフラグ
var allComputersCanRun = true;
//どれかでは動かせるフラグ
var someComputersCanRun = false;
for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRun = false;
    } else {
        someComputersCanRun = true;
    }
};

//全てのPCramが16位上であるかを算出
computers.every(function (computer) {
    return computer.ram >= 16;
});

//どれかのPCramが16以上あるのか抽出
computers.some(function (computer) {
    return computer.ram >= 16;
});

//ログインフォームで用いられる=>条件が揃っていたら次の段階へ進む
function Field(value) {
    this.value = value;
}
Field.prototype.validate = function () {
    return this.value.length > 0
}
var username = new Field('my_username');
var password = new Field('my_password');
console.log(username.validate() && password.validate());
//論理積が増えていく
var fields = [username, password];
var formIsValid = fields.every(function (field) {
    return field.validate;
})
if (formIsValid) {
    //サーバーに投げる
} else {
    //エラーを表示する
}

//提出済かを確認
var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function (user) {
    //全てがtrueならtrueが返る
    return user.hasSubmitted;
})
console.log(hasSubmitted);

//some
var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function (request) {
    return request.status = 'pending';
})