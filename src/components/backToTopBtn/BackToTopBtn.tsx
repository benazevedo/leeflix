import React from 'react';
import './backToTopBtn.css';

interface IBackToTopBtn {
  scroll: number;
}

function BackToTopBtn({ scroll }: IBackToTopBtn) {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <a
      className={`back-to-top ${scroll > 100 ? 'active' : undefined}`}
      onClick={backToTop}
    >
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  );
}

export default BackToTopBtn;
