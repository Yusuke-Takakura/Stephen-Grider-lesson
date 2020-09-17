// const add = function (a, b) {
//     return a + b;
// }
const add = (a, b) => {
    return a + b;
}
//一つしか評価項目がない場合
const mult = (a, b) => a * b;

//mapでは
const numbers = [1, 2, 3];
numbers.map(number => 2 * number);

//thisの位置がずれるためエラーが出る
// const team = {
//     members: ['太郎', '花子'],
//     teamName: 'スーパーチーム',
//     teamSummary: function () {
//         return this.members.map(function (member) {
//             return `${member}は${this.teamName}の所属です．`
//                         このthisは関数内でのみ適用される
//         })
//     }
// };

//アロー関数を使うとthisが引き継がれる
const team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member}は${this.teamName}の所属です．`
        })
    }
};

//演習21
const fibonacci = (n) => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//演習22
const profile = {
    name: '太郎',
    getName: function () {
        return this.name;
    }
};