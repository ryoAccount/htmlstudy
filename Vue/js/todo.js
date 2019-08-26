var app = new Vue({
    el: '#app',
    data: {
        item: '',
        todos: []
    },
    methods: {
        add: function(event){
            if (this.item == '') {
                return;
            }
            var todo = {
                item: this.item,
                isDone: false
            };
            this.todos.push(todo);
            this.item = '';
        },
        erace: function(index) {
            this.todos.splice(index,1);
        }
    }
})