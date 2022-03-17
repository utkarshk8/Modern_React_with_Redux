import { useState } from "react";
import unsplash from "./api/unsplash";

import ImageCards from "./components/ImageCards";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (searchTerm) => {
    const response = await unsplash.get("search/photos", {
      params: { query: searchTerm },
    });
    console.log(response.data.results);
    setImages(response.data.results);
  };

  return (
    <div className="App">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageCards images={images} />
    </div>
  );
}

export default App;
