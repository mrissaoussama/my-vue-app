/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa'; 

const GameDetail = ({ game, favorites, onFavorite }) => {
    return (
      <div className="game-detail">
        <h2>{game.title}</h2>
        <FaStar onClick={(e) => {e.stopPropagation(); onFavorite(game)}} color={favorites.find(favorite => favorite.id === game.id) ? 'gold' : 'grey'} />

        <img src={game.thumbnail} alt={game.title} />
        <p>Genre: {game.genre}</p>
        <p>Platform: {game.platform}</p>
        <p>Publisher: {game.publisher}</p>
        <p>Developer: {game.developer}</p>
        <p>Release Date: {game.release_date}</p>
        <p>Status: {game.status}</p>
        <p>{game.description}</p>
        <a href={game.game_url} target="_blank" rel="noopener noreferrer">Play Now</a>
      </div>
    );
  };
  
  export default GameDetail;