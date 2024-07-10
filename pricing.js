
function pricing() {
    return {
        price: 0,
        smallPizzaincrement() {
            this.price = this.price + 30;
        },
        smallPizzadecrement() {
            this.price = this.price - 30;
        },
        mediumPizzaincrement() {
            this.price = this.price + 50;
        },
        mediumPizzadecrement() {
            this.price = this.price - 50;
        },
        largePizzaincrement() {
            this.price = this.price + 80;
        },
        largePizzadecrement() {
            this.price = this.price - 80;
        },
    };
}