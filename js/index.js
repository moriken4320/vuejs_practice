let app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        isbn: "978-4-7981-5757-1",
        title: "JavaScript逆引きレシピ",
        price: 2000,
      },
      {
        isbn: "978-4-7981-5757-2",
        title: "Ruby逆引きレシピ",
        price: 1000,
      },
      {
        isbn: "978-4-7981-5757-3",
        title: "PHP逆引きレシピ",
        price: 4000,
      },
    ],
    book: {
      isbn: "978-4-7981-5757-1",
      title: "JavaScript逆引きレシピ",
      price: 2000,
    },
  },
  computed: {
      expensiveBooks: function(){
          return this.books.filter(function(b){
              return b.price >= 1500;
          })
      }
  },
});
