
import React from 'react';

function Card({ title, text, buttonText }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{text}</p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors w-full">
        {buttonText}
      </button>
    </div>
  );
}


Card.defaultProps = {
  title: "Título de la Tarjeta",
  text: "Este es un texto de ejemplo para el cuerpo de la tarjeta. Aquí puedes poner una descripción.",
  buttonText: "Leer Más"
};

export default Card;