//localStorage
/**
 *
 * @param key
 * @param jsonData
 * @param expires in minutes
 * @returns {*}
 */
function setLocalStorage(key, jsonData, expires) {
    if (!window.localStorage) return false;
    if (expires == undefined || expires == 'null') {
        expires = 1440 * 7;
    }
    var expirationMS = expires * 60 * 1000;
    var record = {value: JSON.stringify(jsonData), expires: new Date().getTime() + expirationMS};
    localStorage.setItem(key, JSON.stringify(record));
    return jsonData;
}

/**
 *
 * @param key
 * @returns {*}
 */
function getLocalStorage(key) {
    if (!window.localStorage) return false;
    var record = JSON.parse(localStorage.getItem(key));
    if (!record) {
        return false;
    }
    if (new Date().getTime() < record.expires) {
        return JSON.parse(record.value)
    } else {
        localStorage.removeItem(key);
    }
}