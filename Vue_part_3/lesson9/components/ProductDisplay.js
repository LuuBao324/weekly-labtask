app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img 
                    v-bind:src="image" 
                    >
                </div>
                <div class="product-info">
                    <h1>{{title}}</h1>
                    <p>{{onSale}}</p>
                    <p v-if="inStock">In stock</p>
                    <p v-else>Out of Stock</p>

                    <p>Shipping: {{shipping}}</p>

                    <!-- Challenge -->
                    <product-details :details="details"></product-details>

                    <div 
                        v-for="(variant, index) in variants" 
                        :key="variant.id" 
                        @mouseover="updateVariant(index)"
                        class="color-circle"
                        :style="{backgroundColor: variant.color}"
                        >
                    </div>
                    
                    <button 
                    class="button"
                    :class="{disabledButton: !inStock}" 
                    v-on:click="addToCart"
                    :disabled="!inStock">
                        Add to cart
                    </button>
                    
                     <button class="button" v-on:click="decrementCart">Delete from cart</button>
                    
                </div>
            </div>
        </div>`,

        data(){
        return {
            brand: 'VueMastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
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

        onSale() {
            if(this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + ' is on sale'
            }
            return ''
        },

        shipping() {
            if(this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})