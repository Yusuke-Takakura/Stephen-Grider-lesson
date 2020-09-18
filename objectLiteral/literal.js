function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitile(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const inventory = [
    { title: 'ハリーポッター', price: 1000 },
    { title: 'JavaSctipt入門', price: 1500 }
]
const bookShop = createBookShop(inventory);
bookshop.inventoryValue()//<=本の値段の合計値が出る
bookshop.priceForTitile('ハリーポッター')//<=本の値段が出る