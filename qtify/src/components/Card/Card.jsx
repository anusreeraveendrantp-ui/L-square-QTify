import { Chip } from "@mui/material";
import "./Card.css";

const Card = ({ album }) => {
  return (
    <div className="card">
      {/* Image Section */}
      <div className="card-image">
        <img src={album.image} alt={album.title} />
        <Chip
          label={`${album.follows} Follows`}
          className="follows-chip"
        />
      </div>

      {/* Bottom Section */}
      <div className="card-info">
        <p className="album-title">{album.title}</p>
      </div>
    </div>
  );
};

export default Card;
