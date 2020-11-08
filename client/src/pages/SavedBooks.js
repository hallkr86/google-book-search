import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const SavedBooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        renderBooks();
    }, []);

    const renderBooks = () => {
        axios.get("/api/books")
        .then((response) => {
            //console.log(response.data);
            setAllBooks(response.data);
        });
    };

    return (
        <div className="container"
            style={{ background: "lightpink", position: "relative" }} >
            
            {allBooks.map((book) => (
                <Card
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    link={book.link}
                    image={book.image}
                    id={book._id}
                    renderBooks={renderBooks} />
            ))}
        </div>


    );
};

export default SavedBooks;