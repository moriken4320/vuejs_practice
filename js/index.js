let app = new Vue({
  el: "#app",
  data: {
    name: "",
    upperName: "",
  },

  //   遅延処理用のdelayFuncメソッドを準備
  created() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },

  //   nameプロパティが変化した時にdelayFuncメソッドを呼び出し
  watch: {
    name: function (newValue, oldValue) {
      this.delayFunc();
    },

    // 入れ子プロパティの場合(クォートでくくる必要がある)
    // 'author.name': function(newValue, oldValue){}
  },

  //   nameの値を大文字に変換したものをupperNameプロパティに設定
  methods: {
    getUpper: function () {
      this.upperName = this.name.toUpperCase();
    },
  },

  //   watchを算出プロパティに置き換えると賊座に変換される。
  //   computed: {
  //       upperName: function(){
  //           return this.name.toUpperCase();
  //       }
  //   }
});
