const LocalStorage = {
    storage: window.localStorage, 
    getLocalStorage: function (key)
    {
        return JSON.parse(this.storage.getItem(key));
    },
    setLocalStorage: function (key, obj)
    {
        this.storage.setItem(key, JSON.stringify(obj));
    },
    removeLocalStorage: function (key)
    {
        this.storage.removeItem(key);
    }
}

export default LocalStorage;