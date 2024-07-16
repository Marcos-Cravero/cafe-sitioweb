import React, { useState } from 'react';

// Representa un ítem del menú
const MenuItem = ({ item, onSelect }) => {
  const [quantity, setQuantity] = useState(0); // Estado para almacenar la cantidad seleccionada

  // Manejar el cambio de cantidad y actualizar el estado
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value);
    onSelect(item.id, value);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Precio: ${item.price.toFixed(2)}</p>
      <input
        type="number"
        min="0"
        value={quantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
};

export default MenuItem;
