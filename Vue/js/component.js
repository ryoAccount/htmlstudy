// component名はハイフン付きのケバブケースがいい
// global
Vue.component('comp1',{
    template: '<p>hello global</p>'
})
Vue.component('comp3',{
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">{{count}}</button>'
})

// local
var comp2 = {
    template: '<p>hello local</p>'
}

var app = new Vue({
    el: '#app',
    components: {
        'comp2': comp2
    }
})