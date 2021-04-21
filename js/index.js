let app = new Vue({
  el: "#app",
  data: {
    attrs: {
        size: 20,
        maxlength: 14,
        required: true //値を持たない属性を設定する場合、trueとしておく(falseの場合は属性が付与されない)
    }
  },
});
