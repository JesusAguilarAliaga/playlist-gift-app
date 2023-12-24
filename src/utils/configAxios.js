import axios from "axios";

const axiosPlaylist = axios.create({baseURL : "https://xtrem-party-dev-rgnq.3.us-1.fl0.io"});

export {axiosPlaylist}