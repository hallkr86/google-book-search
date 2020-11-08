import axios from "axios";

const url = `https://www.googleapis.com/books/v1/volumes?q=`;

export default {
    getBook: function (term) {
        return axios.get(url + term);
    },
    getAllBooks: function () {
        return axios.get("/api/books");
    },
};