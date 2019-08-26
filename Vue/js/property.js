var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue.js. fucking.',
        price: 100,
        random: 0
    },
    // property
    // no ()
    // getter,setter
    // cache
    computed: {
        randomNum: function(){
            return Math.random()
        },
        reverse: function(){
            return this.msg.split('').reverse().join('')
        },
        taxPrice: {
            get: function(){
                return parseInt(this.price * 1.08)
            },
            set: function(tax){
                this.price = Math.ceil(tax / 1.08)
            }
        }
    },

    // methoda
    // ()
    // getter
    // no cache
    methods: {
        randomNumm: function(){
            return Math.random()
        },
        reversem: function(){
            return this.msg.split('').reverse().join('')
        }
    }
})