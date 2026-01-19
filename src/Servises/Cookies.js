class Cookies {
    makeCookie(name, value, live_time) {
        let expires = '';
        if (live_time) {
            const date = new Date();
            date.setTime(date.getTime() + live_time * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
    }

    getCookie(name) {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.startsWith(nameEQ)) {
                return decodeURIComponent(c.substring(nameEQ.length));
            }
        }
        return null;
    }

    deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
    }
}

export default Cookies;