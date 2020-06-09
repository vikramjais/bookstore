import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setBooks, setTotalBooks, setCurrentPage} from '../actions.js';
import BookUtils from '../utils/bookutils.js';

function Pagination ()
{
    let currentPage = useSelector(state => state.currentPage);
    let totalBooks = useSelector(state => state.totalBooks);
    const searchTerm = useSelector(state => state.searchTerm);
    const searchField = useSelector(state => state.searchField);
    const sortField = useSelector(state => state.sortField);

    let showPrev = currentPage > 1;
    let showNext = currentPage * 25 < totalBooks;

    let dispatch = useDispatch();

    function setBooksCollection(booksList, total, currentPage)
    {
        dispatch(setBooks(booksList));
        dispatch(setTotalBooks(total));
        dispatch(setCurrentPage(currentPage));
    }

    function searchBooks(pageNumber)
    {
        BookUtils.searchBooks(this, setBooksCollection, searchTerm, searchField, sortField, pageNumber);
    }

    function handleNextPage ()
    {
        searchBooks(currentPage + 1);
    }

    function handlePrevPage ()
    {
        searchBooks(currentPage - 1);
    }

    return (
        <div id="pagination">
            {showPrev && <button className="btn-primary" onClick={handlePrevPage}>{`<< Prev`}</button>}
            {`Page ${currentPage}`}
            {showNext && <button className="btn-primary" onClick={handleNextPage}>{`Next >>`}</button>}
        </div>
    )
}

export default Pagination;