// var app = new Vue({
//     el: '#app',
//     data: {
//         msg: 'Hello Vue.js.',
//         km: 0,
//         m: 0,
//         mm: 0,
//         first: '',
//         last: '',
//         full: ''
//     },
//     watch: {
//         msg: function(newVal, oldVal){
//             // console.log(newVal)
//             // console.log(oldVal)
//         },
//         km: function(val){
//             this.km = val
//             this.m = val * 1000
//             this.mm = val * 1000000
//         },
//         m: function(val){
//             this.km = val / 1000
//             this.m = val
//             this.mm = val * 1000
//         },
//         mm: function(val){
//             this.km = val / 1000000
//             this.m = val / 1000
//             this.mm = val
//         },
//         first: function(val){
//             this.full = val + ' ' + this.last
//         },
//         last: function(val){
//             this.full = this.first + ' ' + val
//         }
//     }
// })
var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue.js.',
        km: 0,
        m: 0,
        mm: 0,
        first: '',
        last: '',
        colors: [
            {name: 'red'},
            {name: 'green'},
            {name: 'blue'}
        ]
    },
    watch: {
        msg: function(newVal, oldVal){
            // console.log(newVal)
            // console.log(oldVal)
        },
        km: function(val){
            this.km = val
            this.m = val * 1000
            this.mm = val * 1000000
        },
        m: function(val){
            this.km = val / 1000
            this.m = val
            this.mm = val * 1000
        },
        mm: function(val){
            this.km = val / 1000000
            this.m = val / 1000
            this.mm = val
        },
        colors: {
            handler: function(newVal, oldVal){
                console.log(JSON.stringify(newVal, null, '\t'))
                console.log(JSON.stringify(oldVal, null, '\t'))
                // console.log('update!')
            },
            deep: true, // 値変更時にhandlerを実行する
            immediate: true // 読み込み時もhandlerを実行する
        }
    
    },
    computed: {
        full: function() {
            return this.first + ' ' + this.last
        }
    }
})