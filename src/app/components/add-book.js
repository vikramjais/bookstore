import {useDispatch, useSelector} from "react-redux";
import {setShowAddBook} from "../actions";
import React, {useRef} from "react";
import logo from '../../assets/books.png';
import LocalStorage from "../utils/local-storage";

function AddBook ()
{
    const showAddBook = useSelector(state => state.showPopup.showAddBook);
    const userName = useSelector(state => state.loggedIn.userName);

    let dispatch = useDispatch();
    let titleField = useRef();
    let authorField = useRef();
    let yearField = useRef();

    function closeAddPopup ()
    {
        dispatch(setShowAddBook(false));
    }

    function handleAddBook ()
    {
        let booksData = LocalStorage.getLocalStorage("dehaat_books");
        if (!booksData) {
            booksData = [];
        }
        let userBooks = booksData.find(user => user.userName == userName);
        if (!userBooks) {
            userBooks = {
                userName: userName,
                books: []
            };
            booksData.push(userBooks);
        }
        userBooks.books.push({
            title: titleField.current.value,
            author: authorField.current.value,
            year: yearField.current.value
        });
        LocalStorage.setLocalStorage("dehaat_books", booksData);
        dispatch(setShowAddBook(false))
    }

    return (
        showAddBook &&
        <div id="add-book-container" className="popup">
            <div id="overlay"></div>
            <div className="popup-form">
                <button className="popup-close" onClick={closeAddPopup}>X</button>
                <img src={logo} />
                <hr />
                <p>Title:</p>
                <input ref={titleField} type="text" />
                <p>Author:</p>
                <input ref={authorField} type="text" />
                <p>Year:</p>
                <input ref={yearField} type="text" />
                <hr />
                <button className="btn-primary" onClick={handleAddBook}>Add book</button>
            </div>
        </div>
    )
}

export default AddBook;