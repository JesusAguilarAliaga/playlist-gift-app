import axios from "axios";

//URL de despliegue de Dergi Samayoa          https://xtrem-party-dev-rgnq.3.us-1.fl0.io



const axiosMusic = axios.create({
    baseURL: "https://backend-final-project-dev-mzps.3.us-1.fl0.io",
})

axiosMusic.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        "Authorization": `JWT ${JSON.parse(localStorage.getItem("PLAYLIST_USER"))?.token}`
    }
    return config
})

export { axiosMusic };
