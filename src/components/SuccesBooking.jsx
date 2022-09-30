import BookBox from './BookBox';
import Navbar from './Navbar';

import { useState, useEffect } from 'react';

import axios from 'axios';
function SuccesBooking() {
    let userStat = JSON.parse(localStorage.getItem('status'));
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function getBooks() {
            const books = await axios.get(
                `http://localhost:8000/user`
            );
            setBooks(books.data);
        }

        getBooks();
    }, []);

    if (userStat?.username) {
        return (
            <>
                <Navbar />
                {books.map((book) => (
                    <BookBox key={book.id} book={book} />
                ))}
            </>
        )
    } else {
        window.location.href = '/';
    }
}
export default SuccesBooking;
