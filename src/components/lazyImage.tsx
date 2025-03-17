import React, { useState, useEffect } from 'react';

interface ILazyImage {
  src: string;
  alt: string;
}

function LazyImage({ src, alt }: ILazyImage) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
    />
  );
}

export default LazyImage;
