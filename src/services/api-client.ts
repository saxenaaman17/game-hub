import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "603a30aa019b47f29f49f87634f4b3c1",
  },
});
