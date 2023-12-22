import axios from "axios";

const axiosMusic = axios.create({
    baseURL: "https://playlist-share.2.us-1.fl0.io/",
})


export { axiosMusic };