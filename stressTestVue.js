const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        books: [],
        value: ""


    },
    created() {
        this.fetchData();

    },



    methods: {
        fetchData() {
            fetch("https://api.myjson.com/bins/1h3vb3", {
                    method: "GET"
                })
                .then((response) => {
                    return response.json()

                })
                .then((data) => {
                    this.books = data.books;
                    console.log(this.books);

                })


        }

    },


    computed: {

        getBooks() {
            return this.books.filter(book => book.titulo.toUpperCase().includes(this.value.toUpperCase()))
        }

    },
})