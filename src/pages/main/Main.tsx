import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Categories from '../categories/Categories';
import Featured from '../featured/Featured';

interface MainProps {
  activeNav: any;
  setActiveNav: (nav: any) => void;
  searchQuery: string; // Receive search query
}

function Main({ activeNav, setActiveNav, searchQuery }: MainProps) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<string | null>(null);

  const playMovie = (moviePath: string) => {
    setCurrentMovie(moviePath);
    setShowPlayer(true);
  };

  const closePlayer = () => {
    setShowPlayer(false);
    setCurrentMovie(null);
  };

  const renderPlayer = () => {
    if (!showPlayer || !currentMovie) return null;

    return ReactDOM.createPortal(
      <div className="video-player-modal" onClick={closePlayer}>
        <div
          className="video-player-container"
          onClick={(e) => e.stopPropagation()}
        >
          <video controls autoPlay className="video-player">
            <source src={currentMovie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="close-button" onClick={closePlayer}>
            Close
          </button>
        </div>
      </div>,
      document.body,
    );
  };

  return (
    <main>
      {/* <Featured /> */}
      <Categories
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onPlayMovie={playMovie}
        searchQuery={searchQuery} // Pass query to Categories
      />
      {renderPlayer()}
    </main>
  );
}

export default Main;
