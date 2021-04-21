let app = new Vue({
  el: "#app",
  data: {
    list: ["赤パジャマ", "青パジャマ", "黄パジャマ"],
  },
  methods: {
    onclick: function () {
      // 配列の先頭要素を削除
      this.list.shift();
    },
  },
});
