import React, { useState } from 'react';
import './playBtn.css';
// import Modal from '../modal/Modal';
import { IMovie } from '../../types/models';

interface IPlayBtn {
  movie: IMovie;
}

function PlayBtn({ movie }: IPlayBtn) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-between`}
        // className={`trailer d-flex align-items-center justify-content-between ${
        //   movie.active ? 'active' : undefined
        // }`}
      >
        {/* <a className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-outline"></ion-icon>
        </a> */}
        <p> Watch Trailer</p>
      </div>
      {/* {movie.active && (
        <Modal movie={movie} status={modal} toggleModal={toggleModal} />
      )} */}
    </>
  );
}

export default PlayBtn;
