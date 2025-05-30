class API {
    constructor() {
        this.baseURL = import.meta.env.VITE_API
        this.headers = {
            "Content-Type": "application/json"
        }
    }
    async testConnection() {
        const response = await fetch(import.meta.env.VITE_API, {
            headers: this.headers
        }
        )
        const data = await response.json();
        console.log(data);
    }
    async login(loginData) {
        const response = await fetch(`${import.meta.env.VITE_API}/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(loginData)
        })
        const data = await response.json();
        return data;
    }
    async test(){
        console.log(import.meta.env.VITE_API)
        await fetch(`${import.meta.env.VITE_API}/test`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: "myname"})
        })
            .then(r => r.json())
            .then(console.log)
            .catch(console.error)
    }
    async register(signUpData) {
        const response = await fetch(`${import.meta.env.VITE_API}/sign_up`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(signUpData)
        })
        const data = await response.json()
        return data;
    }
    async logout() {
        const response = await fetch(`${import.meta.env.VITE_API}/logout`, {
            method: "POST",
            headers: this.headers,
        })
        const data = await response.json()
        return data;
    }
}

export default API;