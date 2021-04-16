let app = new Vue({
    el: '#app',
    data: {
        message: 'message'
    },
    methods: {
        onclick: function(){
            this.message = 'メッセージ';
        }
    },
    
    beforeCreate() {
        console.log('beforeCrearte...');
    },
    created() {
        console.log('created...');
    },
    beforeMount() {
        console.log('beforeMount...');
    },
    mounted() {
        console.log('mounted...');
    },
    beforeUpdate() {
        console.log('beforeUpdate...');
    },
    updated() {
        console.log('updated...');
    },
    beforeDestroy() {
        console.log('beforeDestroy...');
    },
    destroyed() {
        console.log('destroyed...');
    },
});

// 3000ミリ秒のあとに破棄
setTimeout(function() {
   app.$destroy(); 
}, 3000);