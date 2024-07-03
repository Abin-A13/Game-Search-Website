import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "98376d15d2384d558628eb83e35c8e21",
  },
});
