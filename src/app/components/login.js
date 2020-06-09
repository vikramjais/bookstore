import logo from '../../assets/books.png';
import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setShowLogin, setUserLoggedIn, setUserName} from '../actions';
import {ValidUsers} from '../static-data.js';
import LocalStorage from '../utils/local-storage';

function Login ()
{
    let showLogin = useSelector(state => state.showLogin);
    let dispatch = useDispatch();
    let userField = useRef();
    let passwordField = useRef();
    let hasError = false;

    function closeLoginPopup ()
    {
        dispatch(setShowLogin(false));
    }

    function createLoginInStorage (userName)
    {
        var timestamp = new Date();
        var obj = {
            username: userName,
            timestamp: Date.parse(timestamp.toString())
        }

        LocalStorage.setLocalStorage("dehaat_login", obj);
    }

    function handleLogin ()
    {
        const userName = userField.current.value;
        const password = passwordField.current.value;
        if (ValidUsers.indexOf(userName) != -1 && userName == password) {
            closeLoginPopup();
            dispatch(setUserName(userName));   
            dispatch(setUserLoggedIn(true));
            createLoginInStorage(userName);
        } else {
            hasError = true;
        }
    }

    return (
        showLogin &&
        <div id="login-container" className="popup">
            <div id="overlay"></div>
            <div className="popup-form">
                <button className="popup-close" onClick={closeLoginPopup}>X</button>
                <img src={logo} />
                <hr />
                <p>Username:</p>
                <input ref={userField} type="text" id="username" />
                <p>Password:</p>
                <input ref={passwordField} type="password" id="password" />
                {hasError && <p className="error">Login credentials did not match</p>}
                <hr />
                <button className="btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;