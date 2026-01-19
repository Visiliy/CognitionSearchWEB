class AuthorizationAPI {
    constructor(session_id, baseUrl) {
        this.session_id = session_id;
        this.baseUrl = baseUrl;
    }

    async registrations(data) {
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        formData.append('session_id', this.session_id);

        try {
            const url = `${this.baseUrl}/registration`;
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            return { success: response.ok,  result };
        } catch (error) {
            return { success: false,  result: { message: "Сервер не отвечает", flag: false } };
        }
    }

    async login(data) {
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        formData.append('session_id', this.session_id);

        try {
            const url = `${this.baseUrl}/enter`;
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            return { success: response.ok,  result };
        } catch (error) {
            return { success: false,  result: { message: "Сервер не отвечает", flag: false } };
        }
    }

    async createGuest(data) {
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        formData.append('session_id', this.session_id);

        try {
            const url = `${this.baseUrl}/guest`;
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            return { success: response.ok,  result };
        } catch (error) {
            return { success: false,  result: { message: "Сервер не отвечает", flag: false } };
        }
    }
}

export default AuthorizationAPI;