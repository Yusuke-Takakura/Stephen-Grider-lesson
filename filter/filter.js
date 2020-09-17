//forでfilter
var products = [
    { name: 'きゅうり', type: '野菜' },
    { name: 'バナナ', type: 'フルーツ' },
    { name: 'セロリ', type: '野菜' },
    { name: 'オレンジ', type: 'フルーツ' },
];
var filteredProducts = [];
for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'フルーツ') {
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);

//filter構文
products.filter(function (product) {
    return product.type === 'フルーツ';
});

//応用
var post = { id: 4, title: '初めての投稿' };
var comments = [
    { postId: 4, content: 'いい記事ですね！' },
    { postId: 3, content: '勉強になりました！' },
    { postId: 4, content: 'なるほど' }
];
function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    })
}
console.log(commentsForPost(post, comments));

//reject実装
function reject(array, iteratorFunction) {
    return array.filter((element) => {
        return !iteratorFunction(element);
    });
}
var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function (number) {
    return number > 15;
})
console.log(lessThanFifteen);