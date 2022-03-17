import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID X740Oll2bGZZri8_l0ZBLGD1e6JNqaNKVdy4g8q7H4k",
  },
});
