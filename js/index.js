let app = new Vue({
    el: '#app',
    data: {
        message: 'みなさん、こんにちは！',
        url: 'https://google.com',
        flag: true,
        email: 'Y-Suzuki@example.com'
    },
    // 演算した結果を取得する算出プロパティ
    computed: {
        localEmail_property: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    },

    // emailプロパティの値を加工するlocalEmailメソッドを定義
    methods: {
        localEmail_method: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    },
});