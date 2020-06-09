import logo from '../../assets/books.png';
import user from '../../assets/user.png';
import {SearchOptions} from '../static-data.js';
import BookUtils from '../utils/bookutils.js';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchTerm, setShowLogin, setBooks, setUserLoggedIn, setSearchField, setTotalBooks, setCurrentPage, setShowSort, setUserName} from '../actions';
import LocalStorage from '../utils/local-storage';

function Header ()
{
    let searchTerm = useSelector(state => state.searchTerm);
    let userLoggedIn = useSelector(state => state.userLoggedIn);
    let searchField = useSelector(state => state.searchField);

    let dispatch = useDispatch();

    function handleChange(evt) {
        dispatch(setSearchTerm(evt.target.value));
    }

    function handleSearchClick(evt)
    {
        evt.preventDefault();
        searchBooks(searchTerm);
    }

    function setBooksCollection(booksList, total, currentPage)
    {
        if (total > 0) {
            dispatch(setShowSort(true));    
        }
        dispatch(setBooks(booksList));
        dispatch(setTotalBooks(total));
        dispatch(setCurrentPage(currentPage));
    }

    function searchBooks(searchTerm)
    {
        BookUtils.searchBooks(this, setBooksCollection, searchTerm, searchField);
    }

    function handleAccountClick ()
    {
        if (userLoggedIn) {
            dispatch(setUserLoggedIn(false));
            dispatch(setUserName(null));
            LocalStorage.removeLocalStorage("dehaat_login");
        } else {
            dispatch(setShowLogin(true));
        }
    }

    function handleSelectClick (evt)
    {
        dispatch(setSearchField(evt.target.value));
    }

    return (
        <div id="header">
            <img id="logo" src={logo} />   
            <div id="search-control">
                <div id="search-options">
                    <input id="search-term" type="text" placeholder="Search your book..." onChange={handleChange} />
                    <span className="bold">Search in fields: </span>
                    {SearchOptions.map(option =>
                        <><input key={option} type="radio" name="searchOption" value={option} onClick={handleSelectClick} />{option} </>
                    )}
                </div>
                <button className="btn-primary" onClick={handleSearchClick}>&#128269; Search</button>
            </div>
            <button className="account-btn" onClick={handleAccountClick}><img src={user} /><span>{userLoggedIn ? `Logout`:`Login`}</span></button>
        </div>
    )
}

export default Header;