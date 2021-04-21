let app = new Vue({
  el: "#app",
  data: {
    list: ['赤パジャマ', '青パジャマ', '黄パジャマ']
  },
  methods: {
      onclick: function(){
        //   this.$set(this.list, 1, '茶パジャマ');
          this.list.splice(1, 1, '茶パジャマ');
      }
  },
});
