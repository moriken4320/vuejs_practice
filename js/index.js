let app = new Vue({
  el: "#app",
  data: {
    myName: "匿名",
    pet: "いぬ",
    agree: true,
    os: ["Windows"],
    oss: [],
    unit: {},
  },
  methods: {
    onchange: function(){
          console.log(this.unit.name + '：' + this.unit.size);
        }
    }
});
