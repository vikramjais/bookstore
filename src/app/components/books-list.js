import React from 'react';
import Book from './book.js';
import {useSelector, useDispatch} from 'react-redux';
import Pagination from './pagination.js';
import SortOptionLinks from './sort-options.js';
import {setShowAddBook, setShowLogin} from '../actions.js';
import LocalStorage from '../utils/local-storage.js';

function BooksList ()
{
    let books = useSelector(state => state.bookCollection.books);
    let userName = useSelector(state => state.loggedIn.userName);
    let dispatch = useDispatch();

    function handleAddBook ()
    {
        if (userName) {
            dispatch(setShowAddBook(true));
        } else {
            dispatch(setShowLogin(true));
        }
    }

    return (
        <>
            <SortOptionLinks />
            <button id="add-book" onClick={handleAddBook} className="btn-primary">Add book</button>
            <div id="books-container">
                {books.length > 0 && 
                    books.map(book => <Book key={book.id} book={book}/>)        
                }
            </div>
            <Pagination />
        </>
    )
}

export default BooksList;