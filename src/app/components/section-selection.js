import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LocalStorage from '../utils/local-storage';
import {setBooks, setCurrentPage, setTotalBooks} from '../actions';
import BookUtils from '../utils/bookutils.js';

function SectionSelection ()
{
    const userLoggedIn = useSelector(state => state.userLoggedIn);
    const userName = useSelector(state => state.userName);
    let dispatch = useDispatch();

    function handleUserCollection ()
    {
        const booksData = LocalStorage.getLocalStorage("dehaat_books");
        const userData = booksData.find(user => user.userName == userName);
        const userBooks = userData.books;
        if (booksData && userData && userBooks && userBooks.length > 0) {
            dispatch(setBooks(userBooks));
            dispatch(setCurrentPage(1));
        } else {
            dispatch(setBooks([]));
            dispatch(setCurrentPage(1));
        }
    }

    function showNewCollection (books)
    {
        dispatch(setBooks(books));
        dispatch(setTotalBooks(10));
        dispatch(setCurrentPage(1));
    }

    function handleNewCollection()
    {
        BookUtils.searchLatest(this, showNewCollection);
    }

    return (
        <div id="section-container">
            <button className="btn-primary" onClick={handleNewCollection}>New arrival</button>
            {userLoggedIn && <button className="btn-primary" onClick={handleUserCollection}>My collection</button>}
        </div> 
    )
}

export default SectionSelection;