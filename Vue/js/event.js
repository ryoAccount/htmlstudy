var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        msg: ''
    },
    methods: {
        clickHandler: function($event, msg) {
            this.counter++
            this.msg = msg
            console.log($event)
        },
        clickHandler2: function() {
            this.msg = new Date().toLocaleTimeString()
        },
        clear: function() {
            this.msg = ''
        },
        clickHandler3: function() {
            alert('shift')
        }
    }
})