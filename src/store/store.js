import Vue from 'vue';

export const Store = new Vue({
    data() {
        return {
            cart: []
        };
    },

    computed: {
        totalCost() {
            return this.cart.reduce((accum, product) => {
                return accum + product.price * product.quantity
            }, 0)
        }
    },

    methods: {
        addToCart(product) {
            let defaultQuantity = 1;
            const locationInCart = this.cart.findIndex(p => {
                return p.details === product.value;
            })

            if (locationInCart === -1) {
                this.cart.push({
                    details: product.value,
                    quantity: defaultQuantity,
                    price: product.price,
                    action: ''
                })
            } else {
                this.cart[locationInCart].quantity++;
            }
        },

        removeFromCart(product) {
            const locationInCart = this.cart.findIndex(p => {
                return p.details === product;
            })

            if (this.cart[locationInCart].quantity <= 1) {
                this.cart.splice(locationInCart, 1)
            } else {
                this.cart[locationInCart].quantity--;
            }
        }
    }
});