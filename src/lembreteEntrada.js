// src/LembreteEntrada.js
import React from 'react';

function LembreteEntrada({ novoLembrete, setNovoLembrete, adicionarLembrete }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Digite um lembrete"
        value={novoLembrete}
        onChange={(e) => setNovoLembrete(e.target.value)} // Atualiza o valor digitado
      />
      <button
        className="btn btn-primary"
        onClick={adicionarLembrete} // Chama a função para adicionar o lembrete
      >
        Adicionar
      </button>
    </div>
  );
}

export default LembreteEntrada;
