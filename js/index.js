let app = new Vue({
  el: "#app",
  data: {
    memo: '',
  },
  methods: {
    // 入力値を小数点以下１位に丸め、ログ出力
    onchange: function () {
        console.log('入力値は「' + this.memo + '」です。');
    },
  },
});
