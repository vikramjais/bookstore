import React, {Component} from 'react';
import BookUtils from './utils/bookutils.js';
import Login from './components/login.js';
import {connect} from 'react-redux';
import {setBooks, setTotalBooks, setCurrentPage} from './actions.js';
import Header from './components/header.js'
import BooksList from './components/books-list.js';
import AddBook from './components/add-book.js';

class App extends Component
{
    constructor (props)
    {
        super(props);
    }

    setBooksCollection = function (books, total, currentPage)
    {
        this.props.setBooks(books);
        this.props.setTotalBooks(total);
        this.props.setCurrentPage(currentPage);
    }

    componentDidMount ()
    {
        BookUtils.searchLatest(this, this.setBooksCollection);
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
        setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);