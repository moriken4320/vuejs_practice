let app = new Vue({
  el: "#app",
  data: {
    message: "",
  },

  methods: {
    onclick: function(e, message){
        this.message = message;
        console.log(e.target);
    }
  },
});
