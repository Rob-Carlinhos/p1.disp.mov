// src/LembreteLista.js
import React from 'react';

function LembreteLista({ lembretes }) {
  return (
    <ul className="list-group">
      {lembretes.length === 0 ? (
        <li className="list-group-item shadow-sm">Nenhum lembrete adicionado ainda.</li>
      ) : (
        lembretes.map((lembrete, index) => (
          <li key={index} className="list-group-item">
            {lembrete}
          </li>
        ))
      )}
    </ul>
  );
}

export default LembreteLista;
