//母音の数を数える
function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }

    return number;
}

//演習17
const name = [];
let age = 0;
const dateOfBirth = [];

//演習18
const statuses = [
    { code: 'OK', response: '正常に完了しました' },
    { code: 'FAILED', response: 'エラーが発生しました' },
    { code: 'PENDING', response: '処理中です...' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}