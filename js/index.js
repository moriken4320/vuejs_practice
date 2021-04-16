let app = new Vue({
    el: '#app',
    data: {
        current: new Date()
    },
    created() {
        // thisをthatに退避させているのは、setIntervalメソッドの配下では、
        // thisは、Vueインスタンスではなく、グローバルオブジェクト(Window)に変化してしまうため。
        let that = this;
        this.timer = setInterval(function() {
            that.current = new Date();
        }, 1000);
    },

    beforeDestroy() {
        clearInterval(this.timer);
    },
    
});