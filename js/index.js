let app = new Vue({
    el: '#app',
    data: {
        author: {
            name: '山田'
        }
    },
    created() {
        // thisをthatに退避させているのは、setIntervalメソッドの配下では、
        // thisは、Vueインスタンスではなく、グローバルオブジェクト(Window)に変化してしまうため。
        let that = this;
        this.timer = setTimeout(function() {
            // 初期に設定されているプロパティの変更がないと、新しいプロパティの変更が検知されない。
            // that.author.name = 'Y.YAMADA';
            // that.author.company = 'WINGSプロジェクト';

            // 以下の記述で新しいプロパティをVueに設定できる。ただし、後から追加できるのは入れ子となったオブジェクトの配下だけ。
            // dataオブジェクト直下にはこのメソッドでプロパティを追加できない。
            // プロパティを削除する場合は、removeメソッドを利用する。
            that.$set(that.author, 'company', 'WINGSプロジェクト');
        }, 1000);
    },

    beforeDestroy() {
        clearInterval(this.timer);
    },
    
});