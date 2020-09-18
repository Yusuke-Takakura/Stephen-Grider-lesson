function makeAjaxRequest(url, method = 'GET') {
    //defaultを設定するとif文不要
    // if (!method) {
    //     method = 'GET';
    // }
    //ajaxリクエストをするロジックがここにあると想定
    return method;
}
makeAjaxRequest('google.com');//=>GETが出力
makeAjaxRequest('google.com', 'POST');//=>POSTが出力
makeAjaxRequest('google.com', null);//=>何も出力されない

//userのidを作成する
function User(id = generateId()) {
    this.id = id;
}
function generateId() {
    return Math.random() * 99999;
}
function createAdminUser(user = new User()) {
    user.admin = true;
    return user;
}
createAdminUser();//=>ランダムなuserIDを作成

//演習27
function sum(a = 0, b = 0) {
    return a + b;
}

//演習28
function addOffset(style = {}) {
    style.offset = '10px';
    return style;
}