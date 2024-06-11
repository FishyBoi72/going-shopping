let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']
shoppingList.push('fruit loops');
let coffeeIndex = shoppingList.indexOf('coffee');
if (coffeeIndex !== -1) {
    shoppingList[coffeeIndex] = 'fair trade coffee';
    