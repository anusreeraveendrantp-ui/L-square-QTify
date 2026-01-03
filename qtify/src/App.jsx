import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import {
  fetchFilters,
  fetchSongs,
  fetchTopAlbums,
  fetchNewAlbum,
} from "./api/api";

function App() {
  const [data, setData] = useState({
    topAlbums: [],
    newAlbums: [],
    songs: [],
    genres: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchAllData = async () => {
    try {
      setLoading(true);

      const [
        topAlbumsRes,
        newAlbumsRes,
        songsRes,
        genresRes,
      ] = await Promise.all([
        fetchTopAlbums(),
        fetchNewAlbum(),
        fetchSongs(),
        fetchFilters(),
      ]);

      setData({
        topAlbums: topAlbumsRes || [],
        newAlbums: newAlbumsRes || [],
        songs: songsRes || [],
        genres: genresRes || [],
      });
    } catch (err) {
      console.error(err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  fetchAllData();
}, []);


  const { topAlbums, newAlbums, songs, genres } = data;
  console.log("all data:", topAlbums);
  if (loading) {
    return <div style={{ padding: "2rem" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ padding: "2rem", color: "red" }}>{error}</div>;
  }

  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />

      <Outlet
        context={{
          data: {
            topAlbums,
            newAlbums,
            songs,
            genres,
          },
        }}
      />
    </StyledEngineProvider>
  );
}

export default App;
