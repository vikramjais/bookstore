import {combineReducers} from 'redux';

function showLogin (state = false, action)
{
    switch (action.type) {
        case "SET_SHOW_LOGIN":
            return action.showLogin;
        default:
            return state;
    }
}

function showAddBook (state = false, action)
{
    switch (action.type) {
        case "SET_SHOW_ADD_BOOK":
            return action.showAddBook;
        default:
            return state;
    }
}

function books (state = [], action)
{
    switch (action.type) {
        case "SET_BOOKS":
            return action.books;
        default:
            return state;
    }
}

function searchTerm (state = '', action)
{
    switch (action.type) {
        case "SET_SEARCH_TERM":
            return action.searchTerm;
        default:
            return state;
    }
}

function userLoggedIn (state = false, action)
{
    switch (action.type) {
        case "SET_USER_LOGGED_IN":
            return action.userLoggedIn;
        default:
            return state;
    }
}

function userName (state = '', action)
{
    switch (action.type) {
        case "SET_USER_NAME":
            return action.userName;
        default:
            return state;
    }
}

function searchField (state = 'title', action)
{
    switch (action.type) {
        case "SET_SEARCH_FIELD":
            return action.searchField;
        default:
            return state;
    }
}

function totalBooks (state = 0, action)
{
    switch (action.type) {
        case "SET_TOTAL_BOOKS":
            return action.totalBooks;
        default:
            return state;
    }
}

function currentPage (state = 1, action)
{
    switch (action.type) {
        case "SET_CURRENT_PAGE":
            return action.currentPage;
        default:
            return state;
    }
}

function showSort (state = false, action)
{
    switch (action.type) {
        case "SET_SHOW_SORT":
            return action.showSort;
        default:
            return state;
    }
}

function sort (state = "def", action)
{
    switch (action.type) {
        case "SET_SORT":
            return action.sort;
        default:
            return state;
    }
}

export default combineReducers({
    showLogin,
    showAddBook,
    searchTerm,
    books,
    userLoggedIn,
    userName,
    searchField,
    totalBooks,
    currentPage,
    showSort,
    sort
});