// import useData from "./useData";
import data from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// use it for dynamic data but genres hardly ever change, so we can keep it as static data in our app
// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: data, isLoading: false, error: null });

export default useGenres;
