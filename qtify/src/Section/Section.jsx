import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Section.css";

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="section">
      {/* Header */}
      <div className="section-header">
        <h3>Top Albums</h3>
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {/* Grid */}
      {!collapsed && (
        <div className="album-grid">
          {albums.map((album) => (
            <Card key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
