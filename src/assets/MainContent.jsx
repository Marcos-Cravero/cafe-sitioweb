import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import Gallery from './Gallery';

// Contiene los datos principales del sitio
const MainContent = () => {
  const [menuItems, setMenuItems] = useState([]); // Estado para almacenar los ítems del menú
  const [selectedItems, setSelectedItems] = useState({}); // Estado para almacenar los ítems seleccionados y sus cantidades
  const [totalPrice, setTotalPrice] = useState(0); // Estado para almacenar el precio total

  // useEffect para inicializar el menú con algunos ítems al montar el componente
  useEffect(() => {
    const items = [
      { id: 1, name: 'Black Coffe', description: 'Granos de café tostados sometidos en agua caliente', price: 2.50 },
      { id: 2, name: 'Latte', description: 'Café con leche', price: 3.50 },
    ];
    setMenuItems(items);
  }, []);

  // Función para manejar la selección de ítems del menú y actualizar el estado
  const handleSelectItem = (id, quantity) => {
    setSelectedItems({
      ...selectedItems,
      [id]: quantity
    });
  };

  // Función para calcular el precio total de los ítems seleccionados
  const calculateTotal = () => {
    const total = Object.entries(selectedItems).reduce((acc, [id, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(id));
      return acc + (item.price * quantity);
    }, 0);
    setTotalPrice(total);
  };

  // Cada una de las secciones de la página
  return (
    <main>
      <section id="nosotros">
        <h2>Nosotros</h2>
        <p>Acá agregamos la historia y filosofía</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0jIeCAOkgcQ?si=TC7dpYZu5YWIUvno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

      <section id="menu">
        <h2>Menú</h2>
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} onSelect={handleSelectItem} />
        ))}
        <button onClick={calculateTotal}>Calcular Precio Total</button>
        <p>Precio Total: ${totalPrice.toFixed(2)}</p>
      </section>

      <section id="galeria">
        <h2>Galería</h2>
        <Gallery />
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <p>Dirección: Avenida Rivadavia 2100 (esq, Rincón, 1033 Buenos Aires)</p>
        <p>Teléfono: 011 4952-2320</p>
        <p>Horario de apertura: Lunes a Viernes de 9hs. a 19hs.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.9480041057162!2d-58.39708843001953!3d-34.60942041134662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9c865b35301%3A0xafded52fd6f86945!2sCaf%C3%A9%20de%20los%20Angelitos!5e0!3m2!1ses!2sar!4v1721094939413!5m2!1ses!2sar"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>
    </main>
  );
};

export default MainContent;
