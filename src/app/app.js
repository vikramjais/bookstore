import React, {Component} from 'react';
import BookUtils from './utils/bookutils.js';
import Login from './components/login.js';
import {connect} from 'react-redux';
import {setBooks, setTotalBooks, setCurrentPage, setUserLoggedIn, setUserName} from './actions.js';
import Header from './components/header.js'
import BooksList from './components/books-list.js';
import AddBook from './components/add-book.js';
import SectionSelection from './components/section-selection.js';
import LocalStorage from './utils/local-storage.js';

class App extends Component
{
    constructor (props)
    {
        super(props);
        this.loginInterval = null;
    }

    setBooksCollection = function (books, total, currentPage)
    {
        this.props.setBooks(books);
        this.props.setTotalBooks(total);
        this.props.setCurrentPage(currentPage);
    }

    checkAndInvalidateLogin = function ()
    {
        let loginData = LocalStorage.getLocalStorage("dehaat_login");
        if (loginData) {
            let timestamp = loginData.timestamp;
            let newDate = new Date();
            let currentTimestamp = Date.parse(newDate.toString());
            if (currentTimestamp - timestamp > 3600000) {
                LocalStorage.removeLocalStorage("dehaat_login");
                this.props.setUserLoggedIn(false);
                this.props.setUserName(null);
                clearInterval(this.loginInterval);
            }
        }
    }

    checkAndSetLoginState = function ()
    {
        let loginData = LocalStorage.getLocalStorage("dehaat_login");
        if (loginData) {
            let username = loginData.username;
            this.props.setUserLoggedIn(true);
            this.props.setUserName(username);
        }
    }

    componentDidMount ()
    {
        BookUtils.searchLatest(this, this.setBooksCollection);
        this.checkAndSetLoginState();
        this.loginInterval = setInterval(this.checkAndInvalidateLogin.bind(this), 60000);
    }
    
    render ()
    {
        return (
        <>
            <Login />
            <AddBook />
            <Header/>
            <hr />
            <div id="main-content">
                <SectionSelection/>
                <BooksList /> 
            </div>  
        </>
        );
    }
}

function mapStateToProps (state)
{
    return {
        books: state.books
    };
}

function mapDispatchToProps (dispatch)
{
    return {
        setBooks: books => dispatch(setBooks(books)),
        setTotalBooks: totalBooks => dispatch(setTotalBooks(totalBooks)),
        setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
        setUserLoggedIn: userLoggedIn => dispatch(setUserLoggedIn(userLoggedIn)),
        setUserName: userName => dispatch(setUserName(userName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);