import {combineReducers} from 'redux';

function showPopup (
    state = {
        showLogin: false,
        showAddBook: false,
        showSort: false,
    },
    action)
{
    switch (action.type) {
        case "SET_SHOW_LOGIN":
            return Object.assign({}, state, {showLogin: action.showLogin});
        case "SET_SHOW_ADD_BOOK":
            return Object.assign({}, state, {showAddBook: action.showAddBook});
        case "SET_SHOW_SORT":
            return Object.assign({}, state, {showSort: action.showSort});
        default:
            return state;
    }
}

function searchOptions (
    state = {
        searchTerm: '',
        searchField: 'title',
        sort: 'def'
    },
    action)
{
    switch (action.type) {
        case "SET_SEARCH_TERM":
            return Object.assign({}, state, {searchTerm: action.searchTerm});
        case "SET_SEARCH_FIELD":
            return Object.assign({}, state, {searchField: action.searchField});
        case "SET_SORT":
            return Object.assign({}, state, {sort: action.sort});
        default:
            return state;
    }
}

function loggedIn (
    state = {
        userLoggedIn: false,
        userName: null
    }
    , action)
{
    switch (action.type) {
        case "SET_USER_LOGGED_IN":
            return Object.assign({}, state, {userLoggedIn: action.userLoggedIn});
        case "SET_USER_NAME":
            return Object.assign({}, state, {userName: action.userName});
        default:
            return state;
    }
}

function bookCollection (
    state = {
        books: [],
        totalBooks: 0,
        currentPage: 1
    },
    action)
{
    switch (action.type) {
        case "SET_BOOKS":
            return Object.assign({}, state, {books: action.books});
        case "SET_TOTAL_BOOKS":
            return Object.assign({}, state, {totalBooks: action.totalBooks});
        case "SET_CURRENT_PAGE":
            return Object.assign({}, state, {currentPage: action.currentPage});
        default:
            return state;
    }
}

export default combineReducers({
    showPopup,
    searchOptions,
    bookCollection,
    loggedIn
});