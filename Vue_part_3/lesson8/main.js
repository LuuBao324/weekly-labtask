const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            brand: 'VueMastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],

            // Challenge
            variants: [
                {id: 2234, color:'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true},
                {id: 2235, color:'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false},
            ],
            activeClass: false,
        }
    },

    methods: {
        addToCart(){
            this.cart += 1;
        },

        updateVariant(index){
            this.selectedVariant = index;
            console.log(index)
        },

        decrementCart(){
            if(this.cart > 0){
                this.cart -= 1;
            }
        }
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },

        image() {
            return this.variants[this.selectedVariant].image
        },

        inStock() {
            return this.variants[this.selectedVariant].quantity
        },

        // challenge
        onSale() {
            if(this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + ' is on sale'
            }
            return ''
        }

    }
})
