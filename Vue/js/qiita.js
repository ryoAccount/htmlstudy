var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        msg: ''
    },
    watch: {
        keyword: function(){
            // console.log(newVal)
            this.msg = 'Waiting for typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        // this.keyword = 'javascript'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function() {
            if(this.keyword === '') {
                this.items = null
                this.msg = ''
                return
            }
            
            this.msg = 'Loading...'
            var vm = this
            var params = { page: 1, perPage: 20, query: this.keyword}
            axios.get('https://qiita.com/api/v2/items',{params})
            .then(function(res){
                console.log(res)
                vm.items = res.data
            })
            .catch(function(err){
                vm.msg = 'Error ' + err 
            })
            .finally(function(){
                vm.msg = ''
            })
        }
    }


})