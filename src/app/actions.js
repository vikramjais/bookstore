export const setShowLogin = showLogin => {
    return {
        type: "SET_SHOW_LOGIN",
        showLogin
    }
}

export const setShowAddBook = showAddBook => {
    return {
        type: "SET_SHOW_ADD_BOOK",
        showAddBook
    }
}

export const setSearchTerm = searchTerm => {
    return {
        type: "SET_SEARCH_TERM",
        searchTerm
    }
}

export const setBooks = books => {
    return {
        type: "SET_BOOKS",
        books
    }
}

export const setUserLoggedIn = userLoggedIn => {
    return {
        type: "SET_USER_LOGGED_IN",
        userLoggedIn
    }
}

export const setUserName = userName => {
    return {
        type: "SET_USER_NAME",
        userName
    }
}

export const setSearchField = searchField => {
    return {
        type: "SET_SEARCH_FIELD",
        searchField
    }
}

export const setTotalBooks = totalBooks =>
{
    return {
        type: "SET_TOTAL_BOOKS",
        totalBooks
    }
}

export const setCurrentPage = currentPage =>
{
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    }
}

export const setShowSort = showSort =>
{
    return {
        type: "SET_SHOW_SORT",
        showSort
    }
}

export const setSort = sort =>
{
    return {
        type: "SET_SORT",
        sort
    }
}