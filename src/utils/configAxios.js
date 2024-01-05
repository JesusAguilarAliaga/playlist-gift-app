import axios from "axios";

//URL de despliegue de Dergi Samayoa
const axiosPlaylist = axios.create({baseURL : "https://xtrem-party-dev-rgnq.3.us-1.fl0.io"});

export {axiosPlaylist}




// URL de despliegue de Jesús Aguilar

const axiosMusic = axios.create({
    //URL de FLO.com
    //baseURL: "https://backend-final-project-dev-mzps.3.us-1.fl0.io",
    //URL de RENDER.com
    //baseURL: https://playlist-app-pksy.onrender.com
    baseURL : "https://xtrem-party-dev-rgnq.3.us-1.fl0.io",
})

export { axiosMusic };
