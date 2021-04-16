let app = new Vue({
    el: '#app',
    data: {
        author: {
            name: '山田'
        }
    },
    mounted() {
        let that = this;
        this.$set(this.author, 'company', 'WINGSプロジェクト');

        // falseになる
        console.log(that.$el.textContent.includes(that.author.company));

        // ビューへの反映を待つメソッド
        this.$nextTick().then(function () {
            // trueになる
            console.log(that.$el.textContent.includes(that.author.company));
        })
        
        Vue.nextTick(()=>{
            console.log(that.$el.textContent.includes(that.author.company));
        })
    },

    beforeDestroy() {
        clearInterval(this.timer);
    },
    
});