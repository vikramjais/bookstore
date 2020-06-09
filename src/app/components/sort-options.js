import React from 'react';
import { SortOptions } from '../static-data.js';
import {useSelector, useDispatch} from 'react-redux';
import {setBooks, setTotalBooks, setCurrentPage, setSort} from '../actions.js';
import BookUtils from '../utils/bookutils.js';

function SortOptionLinks ()
{
    const showSortOptions = useSelector(state => state.showSort);
    const searchTerm = useSelector(state => state.searchTerm);
    const searchField = useSelector(state => state.searchField);
    const sort = useSelector(state => state.sort);

    let dispatch = useDispatch();

    function setBooksCollection(booksList, total, currentPage)
    {
        dispatch(setBooks(booksList));
        dispatch(setTotalBooks(total));
        dispatch(setCurrentPage(currentPage));
    }

    function searchBooks(sortField)
    {
        BookUtils.searchBooks(this, setBooksCollection, searchTerm, searchField, sortField, 1);
    }

    function handleSortClick (evt)
    {
        var newSort = evt.target.dataset.sort;
        if (sort != newSort) {
            dispatch(setSort(evt.target.dataset.sort));
            dispatch(setCurrentPage(1));
            searchBooks(evt.target.dataset.sort);   
        }
    }

    return (
        <div id="sort-options">
            {showSortOptions && SortOptions.map(
                sortOption => <button key={sortOption} onClick={handleSortClick} data-sort={sortOption} className="sort-field">{sortOption}</button>)
            }
        </div>
    )
}

export default SortOptionLinks;