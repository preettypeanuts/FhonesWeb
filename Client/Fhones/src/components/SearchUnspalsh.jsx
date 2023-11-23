import { useEffect, useRef, useState } from "react";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "9iVSLt6RCQL8emH3wE-uXvnSgGfH11_xV24-KHeUEYM";
const ImagePerPage = 50;

export const SearchUnsplash = () => {
  const searchInput = useRef(null);
  const [searchTerm, setSearchTerm] = useState(""); // Menyimpan kata kunci pencarian
  const [searchResult, setSearchResult] = useState(null); // Menyimpan hasil pencarian

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await axios.get(
          `${API_URL}?query=${searchTerm}&per_page=${ImagePerPage}&client_id=${API_KEY}`
        );
        setSearchResult(result.data.results); // Mengupdate state dengan hasil pencarian
      } catch (error) {
        console.log(error);
      }
    };

    if (searchTerm !== "") {
      fetchImages(); // Memanggil fungsi pencarian jika searchTerm tidak kosong
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput.current.value); // Mengubah state searchTerm dengan nilai dari input
  };

  return (
    <div className="searchContainer" id="search" data-bs-spy="scroll" data-bs-target="#search">
      <div className="searchValue">
        <form onSubmit={handleSearch} className="searchForm ">
          <input
            onChange={() => {}}
            className="form-control me-2 customForm"
            placeholder="Image Search"
            ref={searchInput}
          />
          <button type="submit" className="btn btn-outline-dark btnCustom2">
            Search
          </button>
        </form>
      </div>
      {/* Menampilkan hasil pencarian */}
      {searchResult && (
        <div className="searchResults">
          {searchResult.map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              className="searchImage img-thumbnail rounded img-fluid"
            />
          ))}
        </div>
      )}
    </div>
  );
};
