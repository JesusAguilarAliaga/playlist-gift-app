import axios from "axios";

//URL de despliegue de Dergi Samayoa
const axiosPlaylist = axios.create({baseURL : "https://xtrem-party-dev-rgnq.3.us-1.fl0.io"});

export {axiosPlaylist}




// URL de despliegue de Jesús Aguilar
const axiosMusic = axios.create({
    baseURL: "https://playlist-share.2.us-1.fl0.io/",
})

export { axiosMusic };
