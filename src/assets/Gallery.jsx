import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [items, setItems] = useState([]);
// Muestra las imágenes del api, con sus nombres y las descripciones de cada plato
  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section id="gallery">
      <div className="gallery-container">
        {items.map(item => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
