import axios from 'axios';

const BookUtils = {
    searchBooks: function (context, callBack, searchTerm, searchField, sortField = "def", pageNumber = 1)
    {
        let url = 'http://libgen.li/search.php?&req=' +
            encodeURIComponent(searchTerm) +
            '&view=detailed' +
            '&column=' + searchField +
            '&sort=' + sortField +
            '&sortmode=' + 'ASC' +
            '&page=' + pageNumber +
            '&res=' + 20;
        
        axios.get(url)
            .then(res =>
            {
                if (!res || !res.data) {
                    callBack.call(context, [], 0, 0);
                } else {
                    var count = res.data.match(/[0-9]+\ books\ found/i)[0].replace(/^([0-9]*).*/, "$1");

                    let idList = res.data.match(/<td>[0-9]+<\/td>/g);
                    if (!idList || idList.length == 0) {
                        callBack.call(context, [], 0, 0);
                    } else {
                        let ids = idList.slice(0,20).map(str => str.replace(/[^0-9]/g, "")).join(",")
                        axios.get(`http://libgen.li/json.php?ids=${ ids }`)
                            .then(res =>
                            {
                                callBack.call(context, res.data, parseInt(count), pageNumber);
                            })
                            .catch(err =>
                            {
                                console.log(err.message);
                                callBack.call(context, [], 0 ,0);
                            })
                    }
                }
            })
            .catch(err =>
            {
                console.log(err.message);
                callBack.call(context, [], 0, 0);
            })
    },
    searchLatest: function (context, callBack)
    {
        const LATEST_ID_REGEX = /<td>[0-9]+<\/td>/g;
        axios.get(`http://libgen.li/search.php?mode=last`)
            .then(res =>
            {
                if (!res || !res.data) {
                    callBack.call(context, [], 0, 0);
                } else {
                    let idList = res.data.match(/<td>[0-9]+<\/td>/g);
                    if (!idList || idList.length == 0) {
                        callBack.call(context, [], 0, 0);
                    } else {
                        let ids = idList.slice(0, 10).map(str => str.replace(/[^0-9]/g, "")).join(",")
                        axios.get(`http://libgen.li/json.php?ids=${ ids }`)
                            .then(res =>
                            {
                                callBack.call(context, res.data, 10, 1);
                            })
                            .catch(err =>
                            {
                                console.log(err.message);
                                callBack.call(context, [], 0, 0);
                            })
                    }
                }
            })
            .catch(err =>
            {
                console.log(err.message);
                callBack.call(context, [], 0, 0);
            })
    }
}

export default BookUtils;