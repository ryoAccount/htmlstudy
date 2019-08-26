var app = new Vue({
    el: '#app',
    data: {
        bpi: null,
        isErr: false,
        isLoading: true
    },
    mounted: function() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(
            function(res){
                this.bpi = res.data.bpi;
                // console.log(res.data.bpi);
                // console.log(res.data.bpi.USD.rate_float);
            }.bind(this))
        .catch(
            function(err){
                console.log(err);
                this.isErr = true;
            }.bind(this))
        .finally(
            function(){
                this.isLoading = false;
            }.bind(this))
    },
    filters: {
        decimal(value) {
            return value.toFixed(2);
        }
    },
    methods: {

    }
})